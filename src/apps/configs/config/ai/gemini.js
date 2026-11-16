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
                    "type": "gemeni",
                    "models": {
                        "default": "gemini-1.5-flash",
                        "allowed": [
                            "gemini-1.5-flash",
                            "gemini-1.5-pro"
                        ]
                    }
                }
            }
        }
    ]
};
