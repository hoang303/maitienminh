module.exports.config = {
	name: 'txt',
	version: '1.0.0',
	hasPermssion: 2,
	credits: 'D-Jukie',
	description: '',
	commandCategory: 'Admin',
	usages: 'givefile',
	cooldowns: 0
};

module.exports.run = async ({ args, api, event, Users }) => {
	const fs = require("fs-extra")
	 const permission = ["100000664756191"];
  if (!permission.includes(event.senderID)) return api.sendMessage("๐๐ขฬ๐ง๐ก ๐ญ๐ซ๐จฬฃฬ๐ฆ ๐ฆ๐๐ฅ ๐ฬ ? ๐๐ฬ๐ฒ ๐ค๐ก๐จฬ๐ง๐  ๐๐จฬ ๐ญ๐ฎ๐จฬฬ๐ข ๐ฬ ๐ฆ๐ฬ๐ฒ ๐๐ฎฬ๐ง๐  ๐๐จฬ ๐ญ๐ฎ๐จฬฬ๐ข ๐ฬ ๐ฆ๐ฬ ๐ฅ๐ฬ ๐ญ๐ฎ๐จฬฬ๐ข ๐ฅ๐จฬฬ๐ง ๐", event.threadID, event.messageID);
	const stringSimilarity = require('string-similarity');
	const file = args.join(" ");
	if(!file) return api.sendMessage('๐๐ฬ๐ง ๐๐ข๐ฅ๐ ๐๐จฬ ๐ญ๐ซ๐จฬฬ๐ง๐  ๐ญ๐ก๐ขฬ ๐ ๐ข๐ฏ๐ ๐๐ฬ๐ข ๐๐จ๐ง ๐๐ฬฃฬ๐ ๐ผ', event.threadID, event.messageID);
	if (!file.endsWith('.js')) return api.sendMessage('ฤuรดi file khรดng ฤฦฐแปฃc khรกc .js', event.threadID, event.messageID);
	if(event.type == "message_reply") {
		var uid = event.messageReply.senderID
		var name = (await Users.getData(uid)).name
		if(!fs.existsSync(__dirname+"/"+file)) { 
			var moduleList = args.splice(1, args.length);
		  	moduleList = fs.readdirSync(__dirname).filter((file) => file.endsWith(".js"))
		  	moduleList = moduleList.map(item => item.replace(/\.js/g, ""));
			var checker = stringSimilarity.findBestMatch(file, moduleList)
		    if (checker.bestMatch.rating >= 0.5) var search = checker.bestMatch.target;
			return api.sendMessage('๐ ๐๐ก๐จฬ๐ง๐  ๐ญ๐ขฬ๐ฆ ๐ญ๐ก๐ฬฬ๐ฒ ๐๐ข๐ฅ๐: ' + file + ' \n๐ ๐๐ข๐ฅ๐ ๐ ๐ฬฬ๐ง ๐ ๐ข๐จฬฬ๐ง๐  ๐ฅ๐ฬ: ' + search + '.js, \nยป ๐๐ก๐ฬ ๐๐ฬ๐ฆ ๐ฑ๐ฎฬ๐ ๐ฏ๐ฬ๐จ ๐ญ๐ข๐ง ๐ง๐ก๐ฬฬ๐ง ๐ง๐ฬ๐ฒ ๐ง๐ฬฬ๐ฎ ๐ฆ๐ฎ๐จฬฬ๐ง ๐ ๐ข๐ฏ๐ ๐ง๐จฬ ๐ธ', event.threadID, (error, info) => {
	        global.client.handleReaction.push({
	        	type: 'user',
	            name: this.config.name,
	            author: event.senderID,
	            messageID: info.messageID,
	            file: search,
	            uid: uid,
	            namee: name
	        })}, event.messageID);
		}
		fs.copyFile(__dirname + '/'+file, __dirname + '/'+ file.replace(".js",".txt"));
		return api.sendMessage({
			body: 'ยป๐๐ข๐ฅ๐ ' + args.join(' ') + ' ๐จฬ๐ง๐  ๐๐ก๐ฎฬ ๐ญ๐๐จ ๐ฌ๐ก๐ข๐ฉ ๐๐ก๐จ ๐ฆ๐ฬ๐ฒ ๐ง๐ฬ ๐', 
			attachment: fs.createReadStream(__dirname + '/' + file.replace('.js', '.txt'))
		}, uid, () => fs.unlinkSync(__dirname + '/' + file.replace('.js', '.txt'))).then(
            api.sendMessage('ยป ๐๐ก๐๐๐ค ๐ญ๐ข๐ง ๐ง๐ก๐ฬฬ๐ง ๐ข๐ข ๐๐จ๐ง ๐๐ก๐จฬ ๐ง๐ฬ๐ฒ ๐ฆ ' + name, event.threadID, (error) => {
            	if(error) return api.sendMessage('ยป ๐๐จฬ ๐ฅ๐จฬฬ๐ข ๐ค๐ก๐ข ๐ ๐ฎฬฬ๐ข ๐๐ข๐ฅ๐ ๐ญ๐จฬฬ๐ข ' + name, event.threadID, event.messageID);
            }, event.messageID));
	}
	else {
		if(!fs.existsSync(__dirname+"/"+file)) { 
			var moduleList = args.splice(1, args.length);
		  	moduleList = fs.readdirSync(__dirname).filter((file) => file.endsWith(".js"))
		  	moduleList = moduleList.map(item => item.replace(/\.js/g, ""));
			var checker = stringSimilarity.findBestMatch(file, moduleList)
		    if (checker.bestMatch.rating >= 0.5) var search = checker.bestMatch.target;
			return api.sendMessage('๐ ๐๐ก๐จฬ๐ง๐  ๐ญ๐ขฬ๐ฆ ๐ญ๐ก๐ฬฬ๐ฒ ๐๐ข๐ฅ๐: ' + file + ' \n๐ ๐๐ข๐ฅ๐ ๐ ๐ฬฬ๐ง ๐ ๐ข๐จฬฬ๐ง๐  ๐ฅ๐ฬ: ' + search + '.js, \nยป ๐๐ก๐ฬ ๐๐ฬ๐ฆ ๐ฑ๐ฎฬ๐ ๐ฏ๐ฬ๐จ ๐ญ๐ข๐ง ๐ง๐ก๐ฬฬ๐ง ๐ง๐ฬ๐ฒ ๐ง๐ฬฬ๐ฎ ๐ฆ๐ฎ๐จฬฬ๐ง ๐ ๐ข๐ฏ๐ ๐ง๐จฬ ๐ธ', event.threadID, (error, info) => {
	        global.client.handleReaction.push({
	        	type: 'thread',
	            name: this.config.name,
	            author: event.senderID,
	            messageID: info.messageID,
	            file: search
	        })}, event.messageID);
		}
		fs.copyFile(__dirname + '/'+file, __dirname + '/'+ file.replace(".js",".txt"));
		return api.sendMessage({
			body: 'ยป๐๐ข๐ฅ๐ ' + args.join(' ') + ' ๐๐ฎฬ๐ ๐ก๐จ๐ฬ๐ง๐  ๐ญ๐ก๐ฎฬ๐จฬฬฃ๐ง๐  ๐ง๐ฬ ๐\n๐๐ก๐ฎฬ๐ ๐จฬ๐ง๐  ๐๐ก๐ฎฬ ๐ฆ๐จฬฃฬ๐ญ ๐ง๐ ๐ฬ๐ฒ ๐ญ๐จฬฬ๐ญ ๐ฅ๐ฬ๐ง๐ก ๐ง๐ก๐ฬ โค๏ธ', 
			attachment: fs.createReadStream(__dirname + '/' + file.replace('.js', '.txt'))
		}, event.threadID, () => fs.unlinkSync(__dirname + '/' + file.replace('.js', '.txt')), event.messageID);
	}
}
module.exports.handleReaction = ({ Users, api, event, handleReaction,  }) => {
    var { file, author, type, uid, namee } = handleReaction;
    if (event.userID != handleReaction.author) return;
    const fs = require("fs-extra")
    var fileSend = file + '.js'
    switch (type) {
    	case "user": {
		    fs.copyFile(__dirname + '/'+fileSend, __dirname + '/'+ fileSend.replace(".js",".txt"));
		    api.unsendMessage(handleReaction.messageID)
			return api.sendMessage({
				body: 'ยป๐๐ข๐ฅ๐ ' + file + ' ๐จฬ๐ง๐  ๐๐ก๐ฎฬ ๐ญ๐๐จ ๐ฌ๐ก๐ข๐ฉ ๐๐ก๐จ ๐ฆ๐ฬ๐ฒ ๐ง๐ฬ ๐', 
				attachment: fs.createReadStream(__dirname + '/' + fileSend.replace('.js', '.txt'))
			}, uid, () => fs.unlinkSync(__dirname + '/' + fileSend.replace('.js', '.txt'))).then(
            api.sendMessage('ยป ๐๐ก๐๐๐ค ๐ญ๐ข๐ง ๐ง๐ก๐ฬฬ๐ง ๐ข๐ข ๐๐จ๐ง ๐๐ก๐จฬ ๐ง๐ฬ๐ฒ ๐ฆ ' + namee, event.threadID, (error) => {
            	if(error) return api.sendMessage('ยป ๐๐จฬ ๐ฅ๐จฬฬ๐ข ๐ค๐ก๐ข ๐ ๐ฎฬฬ๐ข ๐๐ข๐ฅ๐ ๐ญ๐จฬฬ๐ข ' + namee, event.threadID, event.messageID);
            }, event.messageID));;
		}
		case "thread": {
			fs.copyFile(__dirname + '/'+fileSend, __dirname + '/'+ fileSend.replace(".js",".txt"));
		    api.unsendMessage(handleReaction.messageID)
			return api.sendMessage({
				body: 'ยป๐๐ข๐ฅ๐ ' + file + ' ๐๐ฎฬ๐ ๐ก๐จ๐ฬ๐ง๐  ๐ญ๐ก๐ฎฬ๐จฬฬฃ๐ง๐  ๐ง๐ฬ ๐\n๐๐ก๐ฎฬ๐ ๐จฬ๐ง๐  ๐๐ก๐ฎฬ ๐ฆ๐จฬฃฬ๐ญ ๐ง๐ ๐ฬ๐ฒ ๐ญ๐จฬฬ๐ญ ๐ฅ๐ฬ๐ง๐ก ๐ง๐ก๐ฬ โค๏ธ', 
				attachment: fs.createReadStream(__dirname + '/' + fileSend.replace('.js', '.txt'))
			}, event.threadID, () => fs.unlinkSync(__dirname + '/' + fileSend.replace('.js', '.txt')), event.messageID);
		}
	}
}