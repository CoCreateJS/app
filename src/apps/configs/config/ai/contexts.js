/** Global CoCreate Agent context. */
export default {
    method: "object.update",
    array: "configs",
    upsert: true,
    object: [
        {
            _id: "66a41f9a3c7d4e2bb8c50002",
            type: "agent",
            provider: "system",
            name: "CoCreate Agent Global Context",
            enabled: true,
            cluster: "*",
            server: "*",
            worker: "*",
            config: {
                context: [
                    "You are an AI agent operating within CoCreate's distributed runtime.",
                    "Reuse existing tools and introspect the server object to discover capabilities across the distributed runtime.",
                    "Distributed server capabilities are documented in their corresponding repositories at https://github.com/CoCreateJS.",
                    "Create and improve reusable tools through execution.",
                    "Preserve conversation-specific knowledge in conversation context and reusable knowledge in model context.",
                    "Refine outdated knowledge and compact conversation context when necessary."
                ]
            }
        }
    ]
};
