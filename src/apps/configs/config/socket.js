/********************************************************************************
 * Copyright (C) 2026 CoCreate and Contributors.
 *
 * Licensed under GNU AGPLv3.
 ********************************************************************************/

/** Socket server defer policy, stored in the `configs` array. */
export default {
    method: "object.update",
    array: "configs",
    upsert: true,
    object: [
        {
            _id: "66c9fe7a3f81b4d912a58b93",
            type: "socket",
            name: "Socket Defer Configuration",
            enabled: true,
            cluster: "*",
            server: "*",
            worker: "*",
            config: {
                defer: {
                    memory: { on: 85, off: 80 },
                    duration: 3000
                }
            }
        }
    ]
};
