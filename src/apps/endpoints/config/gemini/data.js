/** Gemini API endpoint records used by AI workflows. */
export default {
	method: "object.update",
	array: "endpoints",
	upsert: true,
	object: [
		{
			_id: "6b0700000000000000000002",
			api_id: "65f8ca227b39a3c1a8904e0f",
			name: "create-chat-completion",
			method: "post",
			endpoint: "/chat/completions",
			data: "$payload.data",
			description:
				"Creates a Gemini response through Google's OpenAI-compatible Chat Completions API. Pass the provider-native request body in data.",
			enabled: true
		}
	]
};
