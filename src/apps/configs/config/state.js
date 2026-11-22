/********************************************************************************
 * Copyright (C) 2026 CoCreate and Contributors.
 *
 * Licensed under GNU AGPLv3.
 ********************************************************************************/

/**
 * State policies for worker-local cordon and proxy transitions.
 * Stored in the `configs` array and loaded by Cluster State.
 */
export default {
    method: "object.update",
    array: "configs",
    upsert: true,
    object: [
        {
            _id: "66c9fe7a3f81b4d912a58b92",
            type: "state",
            name: "Server State Configuration",
            enabled: true,
            cluster: "*",
            server: "*",
            worker: "*",
            config: {
                enabled: true,
                proxy: {
                    memory: { on: 75, off: 60 }
                },
                cordon: {
                    memory: { on: 90, off: 85 }
                }
            }
        }
    ]
};
