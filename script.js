export default {
	init(sandbox, api) {
		console.log("!PROVOD!");
		console.log(sandbox);
		console.log(api);
	},
	destroy(sandbox, api) {
		console.log("unloaded");
	}
};
