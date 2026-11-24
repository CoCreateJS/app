/** Gemini Provider seed for configs. */
export default {
    "method": "object.update",
    "array": "configs",
    "upsert": true,
    "object": [
        {
            "_id": "65f8cb447b39a3c1a8904e44",
            "type": "ai",
            "provider": "gemini",
            "name": "Gemini Provider",
            "enabled": true,
            "cluster": "*",
            "server": "*",
            "worker": "*",
            "config": {
                "providers.gemini": {
                    "api": "gemini",
                    "type": "gemini",
                    "wireApi": "chat-completions",
                    "models": {
                        "default": "gemini-3.8-flash",
                        "allowed": [
                            "gemini-3.8-flash",
                            "gemini-3.1-pro-preview"
                        ]
                    }
                }
            }
        }
    ]
};
