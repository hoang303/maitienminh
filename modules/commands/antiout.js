module.exports.config = {
    name: "antiout",
    version: "1.0.0",
    credits: "DungUwU (Khรกnh Milo Fix)",
    hasPermssion: 1,
    description: "Bแบญt tแบฏt antiout",
    usages: "antiout on/off",
    commandCategory: "Box Chat",
    cooldowns: 0
};

module.exports.run = async({ api, event, Threads}) => {
    let data = (await Threads.getData(event.threadID)).data || {};
    if (typeof data["antiout"] == "undefined" || data["antiout"] == false) data["antiout"] = true;
    else data["antiout"] = false;
    
    await Threads.setData(event.threadID, { data });
    global.data.threadData.set(parseInt(event.threadID), data);
    
    return api.sendMessage(`[ ๐๐ก๐ง๐๐ข๐จ๐ง ] - ๐๐ถฬ๐ฐ๐ต ๐ต๐ผ๐ฎฬฃ๐ ${(data["antiout"] == true) ? "๐ฏ๐ฎฬฃฬ๐" : "๐๐ฎฬฬ๐"} ๐๐ต๐ฎฬ๐ป๐ต ๐ฐ๐ผฬ๐ป๐ด ๐ฐ๐ต๐ผฬฬ๐ป๐ด ๐ผ๐๐ ๐ฐ๐ต๐ฬ๐ฎ โ`, event.threadID);

}