module.exports.config = {
    name: "taobinhchon",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "TruongMini",
    description: "Tแบกo bรฌnh chแปn",
    commandCategory: "Box chat",
    usages: " [name1 | name2 | ...]",
    cooldowns: 5
};

module.exports.handleReply = function({ api, event, handleReply }) {
    const { threadID, senderID, body } = event;
    if(senderID != handleReply.author) return;
    return api.createPoll(body, event.threadID, handleReply.obj, (err, info) => {
        if(err) return console.log(err);
        else {
            api.sendMessage(`๐ == ๐๐ซ๐๐๐ญ๐ ๐ ๐๐จ๐ญ๐ == ๐\n๐ง๐ฎฬฃ๐ผ ๐ฏ๐ถฬ๐ป๐ต ๐ฐ๐ต๐ผฬฃ๐ป ${body} ๐๐ต๐ฎฬ๐ป๐ต ๐ฐ๐ผฬ๐ป๐ด`, threadID);
            api.unsendMessage(handleReply.messageID);
            global.client.handleReply.splice(global.client.handleReply.indexOf(handleReply), 1);
        }
    });
}

module.exports.run = function({ api, event, args }) {
    const { threadID, messageID, senderID } = event;
    let options = args.join(" ").split("|");
    let obj = {}
    for(let item of options) obj[item] = false;
    api.sendMessage(`๐ == ๐๐ซ๐๐๐ญ๐ ๐ ๐๐จ๐ญ๐ == ๐\n๐ง๐ฎฬฃ๐ผ ๐๐ต๐ฎฬ๐ป๐ต ๐ฐ๐ผฬ๐ป๐ด ๐ฐ๐ฎฬ๐ฐ ๐ฏ๐ถฬ๐ป๐ต ๐ฐ๐ต๐ผฬฃ๐ป ${options.join(",")}\n๐๐ฎฬ๐ ๐ฟ๐ฒ๐ฝ๐น๐ ๐๐ถ๐ป ๐ป๐ต๐ฎฬฬ๐ป ๐ป๐ฎฬ๐ ๐๐ฎฬ ๐๐ฎฬฃ๐ผ ๐๐ถ๐๐น๐ฒ`, threadID, (err, info) => {
        if(err) return console.log(err);
        else {
            global.client.handleReply.push({
                name: this.config.name,
                messageID: info.messageID,
                author: senderID,
                obj
            })
        }
    });
}