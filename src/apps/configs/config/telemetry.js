/********************************************************************************
 * Copyright (C) 2026 CoCreate and Contributors.
 *
 * Licensed under GNU AGPLv3.
 ********************************************************************************/

/**
 * Seeding Payload: configs collection
 * 
 * Telemetry configuration entries for sampling, periodic and threshold flushes,
 * and retention policy
 * stored in the 'configs' array.
 * 
 * Note: Telemetry-related settings are represented as individual objects
 * within the 'configs' array.
 */
export default {
    "method": "object.update",
    "array": "configs",
    "upsert": true,
    "object": [
        {
            "_id": "66c9fe7a3f81b4d912a58b91",
            "type": "telemetry",
            "name": "Cluster Telemetry Configuration",
            "enabled": true,
            "cluster": "*",
            "server": "*",
            "worker": "*",
            "config": {
                "enabled": true,
                "interval": 1000,
                "flush": {
                    "interval": 240000,
                    "memory": [
                        { "on": 75, "off": 60 },
                        { "on": 85, "off": 80 },
                        { "on": 90, "off": 85 }
                    ]
                },
                "retentionDays": 30
            }
        }
    ]
};
