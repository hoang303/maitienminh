module.exports.config = {
	name: "cosplay",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "VanHung",
	description: "Xem แบฃnh gรกi xinh cosplay",
	commandCategory: "Random-IMG",
	usages: "cosplay",
	cooldowns: 5
};

module.exports.run = async ({ api, event }) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
	axios.get('https://tuandz.herokuapp.com/images/cosplay').then(res => {
	let ext = res.data.url.substring(res.data.url.lastIndexOf(".") + 1);
	let callback = function () {
					api.sendMessage({
						body: `๐๐จ๐ฌ๐ฉ๐ฅ๐๐ฒ ๐ญ๐ซ๐ฬฬ๐ญ ๐ง๐ก๐ฎฬ ๐ง๐ฎฬ๐จฬฬ๐ ๐๐ฬฬ๐ญ ๐ง๐ฎ๐จฬ๐ง๐ง๐ง ><`,
						attachment: fs.createReadStream(__dirname + `/cache/wibu.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/wibu.${ext}`), event.messageID);
				};
				request(res.data.url).pipe(fs.createWriteStream(__dirname + `/cache/wibu.${ext}`)).on("close", callback);
			})
}