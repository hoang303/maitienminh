module.exports.config = {
	name: "joinNoti",
	eventType: ["log:subscribe"],
	version: "1.0.1",
	credits: "CatalizCS",
	description: "Thông báo bot hoặc người vào nhóm có random gif/ảnh/video",
	dependencies: {
		"fs-extra": "",
		"path": "",
		"pidusage": ""
	}
};

module.exports.onLoad = function () {
    const { existsSync, mkdirSync } = global.nodemodule["fs-extra"];
    const { join } = global.nodemodule["path"];

	const path = join(__dirname, "cache", "joinGif");
	if (existsSync(path)) mkdirSync(path, { recursive: true });	

	const path2 = join(__dirname, "cache", "joinGif", "randomgif");
    if (!existsSync(path2)) mkdirSync(path2, { recursive: true });

    return;
}


module.exports.run = async function({ api, event }) {
	const { join } = global.nodemodule["path"];
	const { threadID } = event;
	if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
		api.changeNickname(`[ ${global.config.PREFIX} ] • ${(!global.config.BOTNAME) ? "alo alo " : global.config.BOTNAME}`, threadID, api.getCurrentUserID());
		const fs = require("fs");
		return api.sendMessage("", event.threadID, () => api.sendMessage({body:`► 𝐊𝐞̂́𝐭 𝐍𝐨̂́𝐢 𝐁𝐨𝐭 𝐓𝐡𝐚̀𝐧𝐡 𝐂𝐨̂𝐧𝐠 ◄\n\n🌸 𝐄𝐲𝐨𝐨𝐨 𝐖𝐡𝐚𝐭 𝐒𝐡𝐮𝐩 𝐀 𝐍𝐨̛̀ 𝐋𝐨̂ 𝐀𝐧𝐡 𝐄𝐦, 𝐌𝐢̀𝐧𝐡 𝐋𝐚̀ 𝐁𝐎𝐓 của Ốc Bưu, 𝐃𝐮̀𝐧𝐠 /𝐡𝐞𝐥𝐩 𝐚𝐥𝐥 𝐍𝐞̂́𝐮 𝐌𝐮𝐨̂́𝐧 𝐗𝐞𝐦 𝐀𝐥𝐥 𝐋𝐞̣̂𝐧𝐡 𝐍𝐡𝐞́ 𝐇𝐨𝐚̣̆𝐜 /𝐦𝐞𝐧𝐮 𝐍𝐞̂́𝐮 𝐌𝐮𝐨̂́𝐧 𝐗𝐞𝐦 𝐂𝐡𝐢 𝐓𝐢𝐞̂́𝐭 𝐕𝐞̂̀ 𝐋𝐞̣̂𝐧𝐡 𝐂𝐮̉𝐚 𝐁𝐨𝐭 🌸\n◆━━━━━━━━━━━◆\n𝘾𝙝𝙪́𝙘 𝘼𝙣𝙝 𝙀𝙢 𝙑𝙪𝙞 𝙑𝙚̉ 𝙏𝙧𝙤𝙣𝙜 𝙌𝙪𝙖́ 𝙏𝙧𝙞̀𝙣𝙝 𝘿𝙪̀𝙣𝙜 𝘽𝙤𝙩 𝙉𝙝𝙚́ 💟`, attachment: fs.createReadStream(__dirname + "/cache/joinMp4/hello.gif")} ,threadID));
	}
	else {
		try {
			const { createReadStream, existsSync, mkdirSync, readdirSync } = global.nodemodule["fs-extra"];
			let { threadName, participantIDs } = await api.getThreadInfo(threadID);

			const threadData = global.data.threadData.get(parseInt(threadID)) || {};
			const path = join(__dirname, "cache", "joinGif");
			const pathGif = join(path, `${threadID}.gif`);

			var mentions = [], nameArray = [], memLength = [], i = 0;
			
			for (id in event.logMessageData.addedParticipants) {
				const userName = event.logMessageData.addedParticipants[id].fullName;
				nameArray.push(userName);
				mentions.push({ tag: userName, id });
				memLength.push(participantIDs.length - i++);
			}
			memLength.sort((a, b) => a - b);
			
			(typeof threadData.customJoin == "undefined") ? msg = '💗 𝑯𝒆𝒍𝒍𝒐 𝒄𝒐𝒏 𝒗𝒐̛̣ {name}.\n🐳 𝕮𝖍à𝖔 𝕸ừ𝖓𝖌 𝕰𝖒 𝖄ê𝖚 {name}.\n𝗧𝗼̛́𝗶 𝗩𝗼̛́𝗶 𝗡𝗵𝗼́𝗺 𝗖𝘂̉𝗮 {threadName}.\n{type} 𝗟𝗮̀ 𝗕𝗮𝗲𝗲 𝗧𝗵𝘂̛́ {soThanhVien} 𝗖𝘂̉𝗮 𝗕𝗼𝘅 🌸\n𝕋𝕦̛𝕠̛𝕟𝕘 𝕥𝕒́𝕔 𝕟𝕙𝕚𝕖̂̀𝕦 𝕧𝕒̀𝕠 𝕜𝕙𝕠̂𝕟𝕘 𝕝𝕒̀ 𝕒̆𝕟 𝕜𝕚𝕔𝕜 𝕟𝕙𝕖́ 🍀' : msg = threadData.customJoin;
			msg = msg
			.replace(/\{name}/g, nameArray.join(', '))
			.replace(/\{type}/g, (memLength.length > 1) ?  '𝐂𝐚́𝐜 𝐁𝐚̣𝐧' : '𝐁𝐚̣𝐧')
			.replace(/\{soThanhVien}/g, memLength.join(', '))
			.replace(/\{threadName}/g, threadName);

			if (existsSync(path)) mkdirSync(path, { recursive: true });

			const randomPath = readdirSync(join(__dirname, "cache", "joinGif", "randomgif"));

			if (existsSync(pathGif)) formPush = { body: msg, attachment: createReadStream(pathGif), mentions }
			else if (randomPath.length != 0) {
				const pathRandom = join(__dirname, "cache", "joinGif", "randomgif", `${randomPath[Math.floor(Math.random() * randomPath.length)]}`);
				formPush = { body: msg, attachment: createReadStream(pathRandom), mentions }
			}
			else formPush = { body: msg, mentions }

			return api.sendMessage(formPush, threadID);
		} catch (e) { return console.log(e) };
	}
}