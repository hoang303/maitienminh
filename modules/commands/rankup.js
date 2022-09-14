module.exports.config = {
	name: "rankup",
	version: "1.0.1",
	hasPermssion: 1,
	credits: "Mirai Team",
	description: "Thông báo rankup cho từng nhóm, người dùng",
	commandCategory: "Edit-IMG",
	dependencies: {
		"fs-extra": ""
	},
	cooldowns: 2,
	envConfig: {
		autoUnsend: true,
		unsendMessageAfter: 20
	}
};

module.exports.handleEvent = async function({ api, event, Currencies, Users, getText }) {
	var {threadID, senderID } = event;
	const { createReadStream, existsSync, mkdirSync } = global.nodemodule["fs-extra"];

	threadID = String(threadID);
	senderID = String(senderID);

	const thread = global.data.threadData.get(threadID) || {};

	let exp = (await Currencies.getData(senderID)).exp;
	exp = exp += 1;

	if (isNaN(exp)) return;

	if (typeof thread["rankup"] != "undefined" && thread["rankup"] == false) {
		await Currencies.setData(senderID, { exp });
		return;
	};

	const curLevel = Math.floor((Math.sqrt(1 + (4 * exp / 3) + 1) / 2));
	const level = Math.floor((Math.sqrt(1 + (4 * (exp + 1) / 3) + 1) / 2));

	if (level > curLevel && level != 1) {
		const name = global.data.userName.get(senderID) || await Users.getNameUser(senderID);
		var messsage = (typeof thread.customRankup == "undefined") ? msg = getText("levelup") : msg = thread.customRankup,
			arrayContent;

		messsage = messsage
			.replace(/\{name}/g, name)
			.replace(/\{level}/g, level);
			
		if (existsSync(__dirname + "/noprefix/rankup/")) mkdirSync(__dirname + "/noprefix/rankup/", { recursive: true });
		if (existsSync(__dirname + `/noprefix/rankup/rankup.gif`)) arrayContent = { body: messsage, attachment: createReadStream(__dirname + `/noprefix/rankup/rankup.gif`), mentions: [{ tag: name, id: senderID }] };
		else arrayContent = { body: messsage, mentions: [{ tag: name, id: senderID }] };
		const moduleName = this.config.name;
		api.sendMessage(arrayContent, threadID, async function (error, info){
			if (global.configModule[moduleName].autoUnsend) {
				await new Promise(resolve => setTimeout(resolve, global.configModule[moduleName].unsendMessageAfter * 1000));
				return api.unsendMessage(info.messageID);
			} else return;
		});
	}

	await Currencies.setData(senderID, { exp });
	return;
}

module.exports.languages = {
	"vi": {
		"off": "[ 𝗥𝗔𝗡𝗞 𝗨𝗣 ] - 𝗧𝗮̆́𝘁",
		"on": "[ 𝗥𝗔𝗡𝗞 𝗨𝗣 ] - 𝗕𝗮̣̂𝘁",
		"successText": "𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴 𝘁𝗵𝗼̂𝗻𝗴 𝗯𝗮́𝗼 𝗿𝗮𝗻𝗸𝘂𝗽 ✨",
		"levelup": "🔰 [ 𝗟𝗘𝗩𝗘𝗟 𝗥𝗔𝗡𝗞𝗨𝗣 ] 🔰\n━━━━━━━━━━━━\n🌸 𝐀𝐰𝐰 𝐬𝐮̛̣ 𝐝𝐞̂̃ 𝐭𝐡𝐮̛𝐨̛𝐧𝐠 𝐯𝐚̀ 𝐜𝐮𝐭𝐞 𝐜𝐮̉𝐚 {name} 𝐯𝐮̛̀𝐚 𝐭𝐡𝐚̆𝐧𝐠 𝐜𝐚̂́𝐩 𝐥𝐞̂𝐧 𝐥𝐞𝐯𝐞𝐥 {level} 𝐫𝐨̂̀𝐢 𝐚́ 𝐭𝐢𝐞̂́𝐩 𝐭𝐮̣𝐜 𝐩𝐡𝐚́𝐭 𝐡𝐮𝐲 𝐧𝐡𝐞́ 𝐦𝐨𝐚𝐳 𝐦𝐨𝐚𝐳 🌸"
	},
	"en": {
		"on": "on",
		"off": "off",
		"successText": "success notification rankup!",
		"levelup": "{name}, your keyboard hero level has reached level {level}",
	}
}

module.exports.run = async function({ api, event, Threads, getText }) {
	const { threadID, messageID } = event;
	let data = (await Threads.getData(threadID)).data;
	
	if (typeof data["rankup"] == "undefined" || data["rankup"] == false) data["rankup"] = true;
	else data["rankup"] = false;
	
	await Threads.setData(threadID, { data });
	global.data.threadData.set(threadID, data);
	return api.sendMessage(`${(data["rankup"] == true) ? getText("on") : getText("off")} ${getText("successText")}`, threadID, messageID);
                    }