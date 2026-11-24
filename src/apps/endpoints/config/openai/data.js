/** OpenAI API endpoint records used by AI workflows. */
export default {
	method: "object.update",
	array: "endpoints",
	upsert: true,
	object: [
		{
			_id: "6b0700000000000000000001",
			api_id: "65f8ca227b39a3c1a8904e01",
			name: "create-response",
			method: "post",
			endpoint: "/responses",
			data: "$payload.data",
			description:
				"Creates a model response using OpenAI's Responses API. Pass the provider-native request body in data.",
			enabled: true
		}
	]
};
