/** Normalize provider MCP tool-call envelopes into the CoCreate Agent contract. */
export default {
    method: "object.update",
    array: "workflows",
    upsert: true,
    object: [
        {
            _id: "6b0b00000000000000000001",
            name: "mcp",
            enabled: true,
            description: "Normalizes MCP and provider tool-call envelopes into the CoCreate Agent calls payload.",
            actions: {
                input: {
                    "$null": ["$data.0", "$data"]
                },
                request: {
                    "$null": ["$actions.input.request", "$actions.input.payload", "$actions.input"]
                },
                provider: {
                    "$null": ["$actions.input.provider", "mcp"]
                },
                name: {
                    "$null": [
                        "$actions.request.params.name",
                        "$actions.request.tool_call.name",
                        "$actions.request.toolCall.name",
                        "$actions.request.function_call.name",
                        "$actions.request.function.name",
                        "$actions.request.functionCall.name",
                        "$actions.request.tool_use.name",
                        "$actions.request.content.0.name",
                        "$actions.request.candidates.0.content.parts.0.functionCall.name",
                        "$actions.request.name"
                    ]
                },
                rawArguments: {
                    "$null": [
                        "$actions.request.params.arguments",
                        "$actions.request.tool_call.arguments",
                        "$actions.request.toolCall.arguments",
                        "$actions.request.function_call.arguments",
                        "$actions.request.function.arguments",
                        "$actions.request.functionCall.args",
                        "$actions.request.tool_use.input",
                        "$actions.request.content.0.input",
                        "$actions.request.candidates.0.content.parts.0.functionCall.args",
                        "$actions.request.input",
                        "$actions.request.arguments",
                        "$actions.request.args",
                        {}
                    ]
                },
                arguments: {
                    "$parse": "$actions.rawArguments"
                },
                callId: {
                    "$null": [
                        "$actions.input.callId",
                        "$actions.request.id",
                        "$actions.request.call_id",
                        "$actions.request.tool_call.id",
                        "$actions.request.toolCall.id",
                        "$actions.request.function_call.id",
                        "$actions.request.tool_use.id",
                        "$actions.request.content.0.id",
                        "$actions.request.candidates.0.content.parts.0.functionCall.id"
                    ]
                },
                validateName: {
                    "$if.$actions.name.$regex": {
                        "\\S": {},
                        "$else": { "$throw": "MCP requires a tool name." }
                    }
                },
                result: {
                    "$payload.data": {
                        provider: "$actions.provider",
                        agent: {
                            calls: [
                                {
                                    id: "$actions.callId",
                                    name: "$actions.name",
                                    arguments: "$actions.arguments"
                                }
                            ]
                        }
                    }
                }
            }
        }
    ]
};
