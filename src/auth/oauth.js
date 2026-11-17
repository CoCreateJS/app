const flow = document.querySelector('[state-id="oauthFlow"]');
const requestId = new URL(location.href).searchParams.get('request');
const errorView = document.querySelector('#oauth-error');
const setView = view => flow?.setAttribute('data-view', view);
const showError = message => {
    if (!errorView) return;
    errorView.textContent = message;
    errorView.hidden = false;
};

let sessionTimeout;
let sessionObserver;
const showSessionView = status => {
    if (status === 'online' || status === 'idle') {
        clearTimeout(sessionTimeout);
        setView('consent');
    } else if (status === 'offline') {
        clearTimeout(sessionTimeout);
        setView('signin');
    }
};

if (flow && requestId) {
    sessionObserver = new MutationObserver(() => showSessionView(flow.getAttribute('session')));
    sessionObserver.observe(flow, { attributes: true, attributeFilter: ['session'] });
    showSessionView(flow.getAttribute('session'));
    sessionTimeout = setTimeout(() => {
        if (flow.getAttribute('data-view') === 'checking') setView('signin');
    }, 2000);
}

for (const button of document.querySelectorAll('#oauth-approve, #oauth-deny')) {
    button.disabled = !requestId;
}

if (!requestId) {
    setView('denied');
    showError('This authorization request is missing or has expired. Return to your AI client and try again.');
} else {
    try {
        const response = await fetch(`/oauth/request?id=${encodeURIComponent(requestId)}`, { credentials: 'same-origin' });
        const request = await response.json();
        if (!response.ok) throw new Error('This authorization request has expired. Return to your AI client and try again.');
        for (const element of document.querySelectorAll('[data-oauth-client]')) {
            element.textContent = request.client_name || 'AI client';
        }
    } catch (error) {
        clearTimeout(sessionTimeout);
        sessionObserver?.disconnect();
        setView('denied');
        showError(error.message || 'Unable to load this authorization request.');
    }
}

async function decide(approved) {
    const buttons = document.querySelectorAll('#oauth-approve, #oauth-deny');
    buttons.forEach(button => { button.disabled = true; });
    try {
        const response = await fetch('/oauth/decision', {
            method: 'POST',
            credentials: 'same-origin',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ request: requestId, approved })
        });
        const result = await response.json();
        if (response.status === 401) {
            setView('signin');
            showError('Sign in to CoCreate before approving this connection.');
            buttons.forEach(button => { button.disabled = false; });
            return;
        }
        if (!response.ok || !result.redirect) throw new Error('Unable to complete the authorization request.');
        setView(approved ? 'approved' : 'denied');
        location.assign(result.redirect);
    } catch (error) {
        showError(error.message || 'Unable to complete the authorization request.');
        buttons.forEach(button => { button.disabled = false; });
    }
}

document.querySelector('#oauth-approve')?.addEventListener('click', () => decide(true));
document.querySelector('#oauth-deny')?.addEventListener('click', () => decide(false));
document.querySelector('#oauth-signin-success')?.addEventListener('click', () => {
    if (errorView) errorView.hidden = true;
});
