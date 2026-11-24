/** Anthropic Claude provider seed for CoCreate AI configuration. */
export default {
    method: "object.update",
    array: "configs",
    upsert: true,
    object: [
        {
            _id: "65f8cb447b39a3c1a8904e45",
            type: "ai",
            provider: "anthropic",
            name: "Anthropic Provider",
            enabled: true,
            cluster: "*",
            server: "*",
            worker: "*",
            config: {
                "providers.anthropic": {
                    api: "Claude",
                    type: "anthropic",
                    wireApi: "messages",
                    models: {
                        default: "claude-sonnet-5",
                        allowed: [
                            "claude-sonnet-5",
                            "claude-opus-5",
                            "claude-haiku-4-5-20251001"
                        ]
                    }
                }
            }
        }
    ]
};
