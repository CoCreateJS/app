/** Copilot AI Provider seed for configs. */
export default {
    "method": "object.update",
    "array": "configs",
    "upsert": true,
    "object": [
        {
            "_id": "65f8cb447b39a3c1a8904e41",
            "type": "ai",
            "provider": "copilot",
            "name": "Copilot AI Provider",
            "enabled": true,
            "cluster": "*",
            "server": "*",
            "worker": "*",
            "config": {
                "providers.copilot": {
                    "api": "copilot",
                    "type": "copilot",
                    "models": {
                        "default": "gpt-5-mini",
                        "allowed": [
                            "gpt-5-mini"
                        ]
                    }
                }
            }
        }
    ]
};
