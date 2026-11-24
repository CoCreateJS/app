/** Global CoCreate Agent tool definitions. */
export default {
    method: "object.update",
    array: "configs",
    upsert: true,
    object: [
        {
            _id: "66a41f9a3c7d4e2bb8c50001",
            type: "agent",
            provider: "system",
            name: "CoCreate Agent Global Tools",
            enabled: true,
            cluster: "*",
            server: "*",
            worker: "*",
            config: {
                tools: [
                    {
                        name: "introspect",
                        path: "agent.introspect",
                        method: "agent.introspect",
                        description: "Discover server capabilities using dot notation.",
                        parameters: { type: "object", properties: { path: { type: "string" } } }
                    },
                    {
                        name: "readTools",
                        path: "agent.tools.read",
                        method: "agent.tools.read",
                        description: "Retrieve global, model and conversation tools. Optionally select a scope.",
                        parameters: {
                            type: "object",
                            properties: { scope: { type: "string", enum: ["global", "model", "conversation"] } }
                        }
                    },
                    {
                        name: "upsertTool",
                        path: "agent.tools.upsert",
                        method: "agent.tools.upsert",
                        description: "Create or improve a reusable tool in model or conversation scope.",
                        parameters: {
                            type: "object",
                            properties: {
                                scope: { type: "string", enum: ["model", "conversation"] },
                                name: { type: "string" },
                                tool: {
                                    type: "object",
                                    properties: {
                                        description: { type: "string" },
                                        path: { type: "string" },
                                        method: { type: "string" },
                                        parameters: { type: "object" }
                                    },
                                    required: ["description", "path", "method", "parameters"]
                                }
                            },
                            required: ["scope", "name", "tool"]
                        }
                    },
                    {
                        name: "deleteTool",
                        path: "agent.tools.delete",
                        method: "agent.tools.delete",
                        description: "Delete a tool from model or conversation scope.",
                        parameters: {
                            type: "object",
                            properties: {
                                scope: { type: "string", enum: ["model", "conversation"] },
                                name: { type: "string" }
                            },
                            required: ["scope", "name"]
                        }
                    },
                    {
                        name: "readContext",
                        path: "agent.context.read",
                        method: "agent.context.read",
                        description: "Retrieve global, model and conversation context. Optionally select a scope.",
                        parameters: {
                            type: "object",
                            properties: { scope: { type: "string", enum: ["global", "model", "conversation"] } }
                        }
                    },
                    {
                        name: "upsertContext",
                        path: "agent.context.upsert",
                        method: "agent.context.upsert",
                        description: "Preserve or refine knowledge in model or conversation scope.",
                        parameters: {
                            type: "object",
                            properties: {
                                scope: { type: "string", enum: ["model", "conversation"] },
                                name: { type: "string" },
                                context: { type: "array", items: { type: "string" } }
                            },
                            required: ["scope", "name", "context"]
                        }
                    },
                    {
                        name: "deleteContext",
                        path: "agent.context.delete",
                        method: "agent.context.delete",
                        description: "Remove outdated or unnecessary model or conversation context.",
                        parameters: {
                            type: "object",
                            properties: {
                                scope: { type: "string", enum: ["model", "conversation"] },
                                name: { type: "string" }
                            },
                            required: ["scope", "name"]
                        }
                    }
                ]
            }
        }
    ]
};
