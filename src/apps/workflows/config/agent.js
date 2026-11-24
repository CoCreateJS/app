/** Seed the single Agent middleware workflow and its canonical cycle payload. */
export default {
    method: "object.update",
    array: "workflows",
    upsert: true,
    object: [
        {
            _id: "6b0b00000000000000000002",
            name: "agent",
            enabled: true,
            description: "Normalizes Agent cycle data and provides the configurable middleware boundary for provider, context, tools, messages, calls, results, and continuation state.",
            actions: {
                input: {
                    "$null": ["$data.0", "$data"]
                },
                inputAgent: {
                    "$null": ["$actions.input.agent", {}]
                },
                provider: {
                    "$null": [
                        "$actions.input.provider",
                        "$actions.inputAgent.provider",
                        "general"
                    ]
                },
                normalizedAgent: {
                    context: { "$null": ["$actions.inputAgent.context", []] },
                    tools: { "$null": ["$actions.inputAgent.tools", []] },
                    messages: { "$null": ["$actions.inputAgent.messages", []] },
                    calls: { "$null": ["$actions.inputAgent.calls", []] },
                    results: { "$null": ["$actions.inputAgent.results", []] },
                    executionResults: { "$null": ["$actions.inputAgent.executionResults", []] },
                    state: { "$null": ["$actions.inputAgent.state", {}] }
                },
                result: {
                    "$payload.data": {
                        provider: "$actions.provider",
                        agent: "$actions.normalizedAgent"
                    }
                }
            }
        }
    ]
};
