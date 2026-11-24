/** Anthropic API endpoint records used by AI workflows. */
export default {
	method: "object.update",
	array: "endpoints",
	upsert: true,
	object: [
		{
			_id: "6b0700000000000000000003",
			api_id: "a7af5e215d58d8fda0c6759e",
			name: "create-message",
			method: "post",
			endpoint: "/messages",
			data: "$payload.data",
			description:
				"Creates a message using Anthropic's Messages API. Pass the provider-native request body in data.",
			enabled: true
		}
	]
};
