export default {
    organization_id: "",
    apikey: "",
    host: {
        $branch: {
            main: "wss://cocreatejs.com",
            dev: "wss://dev.cocreatejs.com",
            test: "wss://test.cocreatejs.com"
        }
    },
    directories: [
        {
            entry: "./src",
            array: "files",
            languages: ["en", "es", "fr", "pt", "nl", "ht", "gn"],
            exclude: ["/admin/", "/apps/", "/config/"],
            object: {
                name: "{{name}}",
                src: "{{source}}",
                host: ["*"],
                directory: "/",
                path: "{{path}}",
                pathname: "{{pathname}}",
                "content-type": "{{content-type}}",
                public: "true",
                headers: { "cache-control": "public, max-age=31536000" }
            }
        },
        {
            entry: "./src",
            array: "files",
            languages: ["en", "es", "fr", "pt", "nl", "ht", "gn"],
            include: ["/admin/", "/apps/"],
            object: {
                name: "{{name}}",
                src: "{{source}}",
                host: ["*"],
                directory: "/",
                path: "{{path}}",
                pathname: "{{pathname}}",
                "content-type": "{{content-type}}",
                public: "false",
                headers: { "cache-control": "private, max-age=31536000" }
            }
        },
        {
            entry: "./src",
            include: ["/config/"],
            $data: ""
        }
    ],

    template: [
        {
            entry: "./",
            output: "../app-template",
            exclude: [
                "./.git/",
                "./.github/",
                "./.vscode/",
                "./node_modules/",
                "./CHANGELOG.md",
                "./CONTRIBUTING.md",
                "./CoCreate.index.js",
                "./webpack.config.js",
                "./package.json",
                "./yarn.lock",
                "./prettier.config.js",
                "./release.config.js"

            ]
        },
        {
            entry: "./",
            output: "../app-template",
            include: ["./src/admin/", "./src/apps/"],
            exclude: [
            ]
        }
    ],
    documentation: {
        output: "./src/docs",
        template: "./src/apps/docs/templates",
        targets: [
            { template: "menu.html", output: "menu.html" },
            { template: "index.html", output: "index.html" },
            {
                template: "page.html",
                output: "{{module.slug}}/index.html",
                each: "modules",
                as: "module"
            }
        ]
    },
    /**
     * @property {string} moduleOutputPath
     * @description Defines the destination file path where the build system (e.g., ModuleGenerator Webpack plugin) 
     * will save the dynamically generated module entry file. This file contains the automated import and lazy-loading logic.
     */
    moduleOutputPath: "./CoCreate.index.js",

    /**
     * @namespace modules
     * @description Contains core component configurations.
     * * The 'import' property defines the package import path for the module.
     * * The 'selector' property is designed so that when the module is built with the project's core, 
     * it observes the DOM for elements matching the selector and lazy-loads the required module dynamically.
     * * For development environments, the Poly Repo CLI reads the 'path' and 'repo' keys from these objects to perform git and build commands.
     * * @property {string} import - The package import path.
     * @property {string} [selector] - CSS selector used for DOM observation and lazy loading.
     * @property {string} [path] - Local relative workspace path. Defines the workspace tree structure, determining where the repository is cloned.
     * @property {string} [repo] - Git repository URL.
     * @property {string[]} [exclude] - Array of strings used to exclude the module from specific CLI commands.
     */
    modules: {
        utils: {
            path: "../modules/utils",
            repo: "github.com/CoCreateJS/utils.git"
        },
        evaluate: {
            path: "../modules/evaluate",
            repo: "github.com/CoCreateJS/evaluate.git"
        },
        cli: {
            path: "../modules/cli",
            repo: "github.com/CoCreateJS/cli.git",
            exclude: ["git"]
        },
        serviceWorker: {
            import: "@cocreate/service-worker",
            path: "../modules/service-worker",
            repo: "github.com/CoCreateJS/service-worker.git"
        },
        "element-prototype": {
            import: "@cocreate/element-prototype",
            path: "../modules/element-prototype",
            repo: "github.com/CoCreateJS/element-prototype.git"
        },
        observer: {
            import: "@cocreate/observer",
            path: "../modules/observer",
            repo: "github.com/CoCreateJS/observer.git"
        },
        db: {
            import: "@cocreate/db",
            path: "../modules/db",
            repo: "github.com/CoCreateJS/db.git"
        },
        indexeddb: {
            import: "@cocreate/indexeddb",
            path: "../storages/indexeddb",
            repo: "github.com/CoCreateJS/indexeddb.git"
        },
        config: {
            import: "@cocreate/config",
            path: "../modules/config",
            repo: "github.com/CoCreateJS/config.git"
        },
        socket: {
            import: "@cocreate/socket",
            path: "../modules/socket",
            repo: "github.com/CoCreateJS/socket.git"
        },
        events: {
            import: "@cocreate/events",
            path: "../modules/events",
            repo: "github.com/CoCreateJS/events.git"
        },
        aria: {
            import: "@cocreate/aria",
            path: "../modules/aria",
            repo: "github.com/CoCreateJS/aria.git"
        },
        crud: {
            import: "@cocreate/crud/client",
            selector: "[crud='true'], [database], [array]",
            path: "../modules/crud",
            repo: "github.com/CoCreateJS/crud.git"
        },
        state: {
            import: "@cocreate/state",
            selector: "[state-to], [state-id]",
            path: "../modules/state",
            repo: "github.com/CoCreateJS/state.git"
        },
        cache: {
            import: "@cocreate/cache",
            selector: "[cache='true']",
            path: "../modules/cache",
            repo: "github.com/CoCreateJS/cache.git"
        },
        plugins: {
            import: "@cocreate/plugins",
            selector: "[plugins]",
            path: "../modules/plugins",
            repo: "github.com/CoCreateJS/plugins.git"
        },
        crdt: {
            import: "@cocreate/crdt",
            selector: "[crdt='true']",
            path: "../modules/crdt",
            repo: "github.com/CoCreateJS/crdt.git"
        },
        cursors: {
            import: "@cocreate/cursors",
            selector: "input[crdt='true'], textarea[crdt='true'], [contenteditable][crdt='true']",
            path: "../modules/cursors",
            repo: "github.com/cocreatejs/cursors.git"
        },
        editor: {
            import: "@cocreate/editor",
            selector: "[editor], code[language], [contenteditable][crdt='true'], input[crdt='true'], textarea[crdt='true'], iframe[crdt='true']",
            path: "../modules/editor",
            repo: "github.com/cocreatejs/editor.git"
        },
        cssParser: {
            import: "@cocreate/css-parser",
            selector: "link[array][object][key], link[parse]",
            path: "../modules/css-parser",
            repo: "github.com/CoCreateJS/css-parser.git"
        },
        actions: {
            import: "@cocreate/actions",
            selector: "[actions]",
            path: "../modules/actions",
            repo: "github.com/CoCreateJS/actions.git"
        },
        filter: {
            import: "@cocreate/filter",
            selector: "[filter-query]",
            path: "../modules/filter",
            repo: "github.com/CoCreateJS/filter.git"
        },
        render: {
            import: "@cocreate/render",
            selector: "[render], [render-query], [template], template",
            path: "../modules/render",
            repo: "github.com/CoCreateJS/render.git"
        },
        file: {
            import: "@cocreate/file",
            selector: "[type='file'], [actions*='upload'], [actions*='download'], [actions*='saveLocally'], [actions*='import'], [actions*='export'], [actions*='createFile'], [actions*='deleteFile'], [actions*='createDirectory'], [actions*='deleteDirectory']",
            path: "../modules/file",
            repo: "github.com/CoCreateJS/file.git"
        },
        elements: {
            import: "@cocreate/elements",
            selector: "form, [src], [storage], [database], [array], [href], [target], [actions*='disableHref'], [actions*='enableHref']",
            path: "../modules/elements",
            repo: "github.com/CoCreateJS/elements.git"
        },
        workflow: {
            import: "@cocreate/workflow",
            selector: "[workflow]",
            path: "../modules/workflow",
            repo: "github.com/CoCreateJS/workflow.git"
        },
        api: {
            import: "@cocreate/api",
            selector: "[actions], [template_id]",
            path: "../modules/api",
            repo: "github.com/CoCreateJS/api.git"
        },
        position: {
            import: "@cocreate/position",
            selector: "[draggable], [draggable-query], [clonable-query], [droppable-query], [position-target], [position-query]",
            path: "../modules/position",
            repo: "github.com/CoCreateJS/position.git"
        },
        scroll: {
            import: "@cocreate/scroll",
            selector: "[scroll], [scroll-to], [scrollable-x], [scrollable-y]",
            path: "../modules/scroll",
            repo: "github.com/CoCreateJS/scroll.git"
        },
        scrollbar: {
            import: "@cocreate/scrollbar",
            selector: "[scrollbar]",
            path: "../modules/scrollbar",
            repo: "github.com/cocreatejs/scrollbar.git"
        },
        resize: {
            import: "@cocreate/resize",
            selector: "[resize], [height='auto']",
            path: "../modules/resize",
            repo: "github.com/CoCreateJS/resize.git"
        },
        users: {
            import: "@cocreate/users",
            selector: "[session], [actions*='signUp'], [actions*='signIn'], [actions*='inviteUser'], [actions*='acceptInvite'], [actions*='forgotPassword'], [actions*='resetPassword'], [actions*='signOut'], [user-status]",
            path: "../modules/users",
            repo: "github.com/CoCreateJS/users.git"
        },
        search: {
            import: "@cocreate/search",
            selector: "[search-query]",
            path: "../modules/search",
            repo: "github.com/CoCreateJS/search.git"
        },
        clipboard: {
            import: "@cocreate/clipboard",
            selector: "[actions*='clipboard'], [clipboard], [clipboard-query]",
            path: "../modules/clipboard",
            repo: "github.com/CoCreateJS/clipboard.git"
        },
        print: {
            import: "@cocreate/print",
            selector: "[actions*='print'], [print-query]",
            path: "../modules/print",
            repo: "github.com/CoCreateJS/print.git"
        },
        fullscreen: {
            import: "@cocreate/fullscreen",
            selector: "[fullscreen]",
            path: "../modules/fullscreen",
            repo: "github.com/CoCreateJS/fullscreen.git"
        },
        pwa: {
            import: "@cocreate/pwa",
            selector: "[actions*='install']",
            path: "../modules/pwa",
            repo: "github.com/CoCreateJS/pwa.git"
        },
        notification: {
            import: "@cocreate/notification",
            selector: "[actions*='notification']",
            path: "../modules/notification",
            repo: "github.com/CoCreateJS/notification.git"
        },
        geolocation: {
            import: "@cocreate/geolocation",
            selector: "[actions*='geoLocation']",
            path: "../modules/geolocation",
            repo: "github.com/CoCreateJS/geolocation.git"
        },
        speechRecognition: {
            import: "@cocreate/speech-recognition",
            selector: "[speech-recognition]",
            path: "../modules/speech-recognition",
            repo: "github.com/CoCreateJS/speech-recognition.git"
        },
        speechSynthesis: {
            import: "@cocreate/speech-synthesis",
            selector: "[speech-synthesis]",
            path: "../modules/speech-synthesis",
            repo: "github.com/CoCreateJS/speech-synthesis.git"
        },
        webShare: {
            import: "@cocreate/web-share",
            selector: "[share], [actions*='share']",
            path: "../modules/web-share",
            repo: "github.com/CoCreateJS/web-share.git"
        },
        contactPicker: {
            import: "@cocreate/contact-picker",
            selector: "[actions*='getContacts']",
            path: "../modules/contact-picker",
            repo: "github.com/CoCreateJS/contact-picker.git"
        },
        wakeLock: {
            import: "@cocreate/wake-lock",
            selector: "[wake-lock], [actions*='wakeLock']",
            path: "../modules/wake-lock",
            repo: "github.com/CoCreateJS/wake-lock.git"
        },
        validation: {
            import: "@cocreate/validation",
            selector: "[actions*='validate'], [required]",
            path: "../modules/validation",
            repo: "github.com/CoCreateJS/validation.git"
        }
    },

    /**
     * @namespace plugins
     * @description External plugins (CDN links, styling) and associated configurations.
     * Used to define external dependencies and their JS and CSS sources.
     * * IMPORTANT: The key for each plugin (e.g., 'Toastify') MUST be the exact
     * global reference name used by the plugin. The system uses this exact key to dynamically 
     * access the object and initialize the plugin once fetched. This allows any plugin to be 
     * seamlessly whitelisted, configured, and initialized dynamically via HTML attributes or inline scripts.
     */
    plugins: {
        webpack: {
            path: "../plugins/webpack",
            repo: "github.com/CoCreateJS/webpack.git"
        },
        Toastify: {
            js: [{ src: "https://cdn.jsdelivr.net/npm/toastify-js", crossOrigin: "anonymous" }],
            css: ["https://cdn.jsdelivr.net/npm/toastify-js/src/toastify.min.css"]
        },
        flatpickr: {
            js: [{ src: "https://cdn.jsdelivr.net/npm/flatpickr", crossOrigin: "anonymous" }],
            css: ["https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css"]
        },
        GLightbox: {
            js: [{ src: "https://cdn.jsdelivr.net/npm/glightbox/dist/js/glightbox.min.js", crossOrigin: "anonymous" }],
            css: ["https://cdn.jsdelivr.net/npm/glightbox/dist/css/glightbox.min.css"]
        },
        FgEmojiPicker: {
            js: [{ src: "https://cdn.jsdelivr.net/npm/fg-emoji-picker/fgEmojiPicker.js", crossOrigin: "anonymous" }]
        },
        bootstrap: {
            js: [{ src: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js", crossOrigin: "anonymous" }]
        },
        Waves: {
            js: [{ src: "https://cdn.jsdelivr.net/npm/node-waves/dist/waves.min.js", crossOrigin: "anonymous" }],
            css: ["https://cdn.jsdelivr.net/npm/node-waves/dist/waves.min.css"]
        },
        ApexCharts: {
            js: [{ src: "https://cdn.jsdelivr.net/npm/apexcharts", crossOrigin: "anonymous" }]
        },
        jsVectorMap: {
            js: [
                { src: "https://cdn.jsdelivr.net/npm/jsvectormap", crossOrigin: "anonymous" },
                { src: "https://cdn.jsdelivr.net/npm/jsvectormap/dist/maps/world.js", crossOrigin: "anonymous" }
            ],
            css: ["https://cdn.jsdelivr.net/npm/jsvectormap/dist/css/jsvectormap.min.css"]
        },
        Swiper: {
            js: [{ src: "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js", crossOrigin: "anonymous" }],
            css: ["https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"]
        },
        Swal: {
            js: [{ src: "https://cdn.jsdelivr.net/npm/sweetalert2@11", crossOrigin: "anonymous" }],
            css: ["https://cdn.jsdelivr.net/npm/sweetalert2@11/dist/sweetalert2.min.css"]
        },
        FullCalendar: {
            js: [{ src: "https://cdn.jsdelivr.net/npm/fullcalendar@6.1.15/index.global.min.js", crossOrigin: "anonymous" }]
        },
        Cleave: {
            js: [{ src: "https://cdn.jsdelivr.net/npm/cleave.js/dist/cleave.min.js", crossOrigin: "anonymous" }]
        },
        noUiSlider: {
            js: [{ src: "https://cdn.jsdelivr.net/npm/nouislider/dist/nouislider.min.js", crossOrigin: "anonymous" }],
            css: ["https://cdn.jsdelivr.net/npm/nouislider/dist/nouislider.min.css"]
        },
        wNumb: {
            js: [{ src: "https://cdn.jsdelivr.net/npm/wnumb/wNumb.min.js", crossOrigin: "anonymous" }]
        },
        FilePond: {
            js: [
                { src: "https://unpkg.com/filepond/dist/filepond.min.js", crossOrigin: "anonymous" },
                { src: "https://unpkg.com/filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.js", crossOrigin: "anonymous" },
                { src: "https://unpkg.com/filepond-plugin-file-validate-size/dist/filepond-plugin-file-validate-size.min.js", crossOrigin: "anonymous" },
                { src: "https://unpkg.com/filepond-plugin-image-exif-orientation/dist/filepond-plugin-image-exif-orientation.min.js", crossOrigin: "anonymous" },
                { src: "https://unpkg.com/filepond-plugin-file-encode/dist/filepond-plugin-file-encode.min.js", crossOrigin: "anonymous" }
            ],
            css: [
                "https://unpkg.com/filepond/dist/filepond.min.css",
                "https://unpkg.com/filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css"
            ]
        },
        markdownit: {
            js: [{ src: "https://cdn.jsdelivr.net/npm/markdown-it@15.0.3/dist/browser/markdown-it.umd.min.js", crossOrigin: "anonymous" }]
        },
        Prism: {
            js: [
                { src: "https://cdn.jsdelivr.net/npm/prismjs@1.30.0/prism.min.js", crossOrigin: "anonymous" },
                { src: "https://cdn.jsdelivr.net/npm/prismjs@1.30.0/components/prism-bash.min.js", crossOrigin: "anonymous" },
                { src: "https://cdn.jsdelivr.net/npm/prismjs@1.30.0/components/prism-json.min.js", crossOrigin: "anonymous" },
                { src: "https://cdn.jsdelivr.net/npm/prismjs@1.30.0/components/prism-python.min.js", crossOrigin: "anonymous" },
                { src: "https://cdn.jsdelivr.net/npm/prismjs@1.30.0/components/prism-typescript.min.js", crossOrigin: "anonymous" },
                { src: "https://cdn.jsdelivr.net/npm/prismjs@1.30.0/plugins/autoloader/prism-autoloader.min.js", crossOrigin: "anonymous" }
            ],
            css: ["https://cdn.jsdelivr.net/npm/prismjs@1.30.0/themes/prism.min.css"]
        },
        AOS: {
            js: [{ src: "https://unpkg.com/aos@2.3.4/dist/aos.js", crossOrigin: "anonymous" }],
            css: ["https://unpkg.com/aos@2.3.4/dist/aos.css"]
        },
        Isotope: {
            js: [{ src: "https://unpkg.com/isotope-layout@3/dist/isotope.pkgd.min.js", crossOrigin: "anonymous" }]
        },
        particlesJS: {
            js: [{ src: "https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js", crossOrigin: "anonymous" }]
        },
        DomAutoscroller: {
            js: [{ src: "https://cdn.jsdelivr.net/npm/dom-autoscroller", crossOrigin: "anonymous" }]
        },
        Chart: {
            js: [{ src: "https://cdn.jsdelivr.net/npm/chart.js", crossOrigin: "anonymous" }]
        },
        echarts: {
            js: [{ src: "https://cdn.jsdelivr.net/npm/echarts/dist/echarts.min.js", crossOrigin: "anonymous" }]
        },
        autoComplete: {
            js: [{ src: "https://cdn.jsdelivr.net/npm/@tarekraafat/autocomplete.js@10.2.7/dist/autoComplete.min.js", crossOrigin: "anonymous" }],
            css: ["https://cdn.jsdelivr.net/npm/@tarekraafat/autocomplete.js@10.2.7/dist/css/autoComplete.01.min.css"]
        },
        Pickr: {
            js: [{ src: "https://cdn.jsdelivr.net/npm/@simonwep/pickr/dist/pickr.min.js", crossOrigin: "anonymous" }],
            css: ["https://cdn.jsdelivr.net/npm/@simonwep/pickr/dist/themes/classic.min.css"]
        },
        Shepherd: {
            js: [{ src: "https://cdn.jsdelivr.net/npm/shepherd.js/dist/js/shepherd.min.js", crossOrigin: "anonymous" }],
            css: ["https://cdn.jsdelivr.net/npm/shepherd.js/dist/css/shepherd.css"]
        },
        GMaps: {
            js: [{ src: "https://cdn.jsdelivr.net/npm/gmaps/gmaps.min.js", crossOrigin: "anonymous" }]
        },
        L: {
            js: [{ src: "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js", crossOrigin: "anonymous" }],
            css: ["https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"]
        },
        Masonry: {
            js: [{ src: "https://unpkg.com/masonry-layout@4/dist/masonry.pkgd.min.js", crossOrigin: "anonymous" }]
        },
        Anime: {
            js: [{ src: "https://cdn.jsdelivr.net/npm/animejs@3.2.2/lib/anime.min.js", crossOrigin: "anonymous" }]
        }
    },

    /**
     * @namespace projects
     * @description Standalone apps, environments, or platforms integrated with the Poly Repo CLI.
     * * The Poly Repo CLI merges the repo details from 'projects' and 'modules' 
     * to execute cross-repository actions seamlessly.
     * * @property {string} path - Local relative workspace path. Defines the workspace tree structure, determining where the repository is cloned.
     * @property {string} repo - Git repository URL.
     * @property {string[]} [exclude] - Array of strings used to exclude the project from specific CLI commands.
     */
    projects: {
        CoCreateWS: {
            path: "../app",
            repo: "https://github.com/CoCreateJS/app.git",
            exclude: ["git"]
        }
    }
};
