module.exports.config = {
	name: "setprefix",
	version: "1.0.1",
	hasPermssion: 3,
	credits: "Mirai Team",//Mod by H.Thanh
	description: "Đặt lại dấu lệnh của nhóm",
	commandCategory: "Hệ thống",
	usages: "< prefix/reset >",
	cooldowns: 5
};

module.exports.languages ={
	"vi": {
		"successChange": "[ 𝗣𝗥𝗘𝗙𝗜𝗫 ] → Đã chuyển đổi prefix của nhóm thành: %1",
		"missingInput": "[ 𝗣𝗥𝗘𝗙𝗜𝗫 ] → Phần prefix cần đặt không được để trống",
		"resetPrefix": "[ 𝗣𝗥𝗘𝗙𝗜𝗫 ] → Đã reset prefix về mặc định: %1",
		"confirmChange": "[ 𝗣𝗥𝗘𝗙𝗜𝗫 ] → Bạn có chắc bạn muốn đổi prefix của nhóm thành: %1"
	},
	"en": {
		"successChange": "Changed prefix into: %1",
		"missingInput": "Prefix have not to be blank",
		"resetPrefix": "Reset prefix to: %1",
		"confirmChange": "Are you sure that you want to change prefix into: %1"
	}
}

module.exports.handleReaction = async function({ api, event, Threads, handleReaction, getText }) {
	try {
		if (event.userID != handleReaction.author) return;
		const { threadID, messageID } = event;
		var data = (await Threads.getData(String(threadID))).data || {};
		data["PREFIX"] = handleReaction.PREFIX;
		await Threads.setData(threadID, { data });
		await global.data.threadData.set(String(threadID), data);
		api.unsendMessage(handleReaction.messageID);
		return api.sendMessage(getText("successChange", handleReaction.PREFIX), threadID, messageID);
	} catch (e) { return console.log(e) }
}

module.exports.run = async ({ api, event, args, Threads , getText }) => {
	if (typeof args[0] == "undefined") return api.sendMessage(getText("missingInput"), event.threadID, event.messageID);
	let prefix = args[0].trim();
	if (!prefix) return api.sendMessage(getText("missingInput"), event.threadID, event.messageID);
	if (prefix == "reset") {
		var data = (await Threads.getData(event.threadID)).data || {};
		data["PREFIX"] = global.config.PREFIX;
		await Threads.setData(event.threadID, { data });
		await global.data.threadData.set(String(event.threadID), data);
		return api.sendMessage(getText("resetPrefix", global.config.PREFIX), event.threadID, event.messageID);
	} else return api.sendMessage(getText("confirmChange", prefix), event.threadID, (error, info) => {
		global.client.handleReaction.push({
			name: "setprefix",
			messageID: info.messageID,
			author: event.senderID,
			PREFIX: prefix
		})
	})
}