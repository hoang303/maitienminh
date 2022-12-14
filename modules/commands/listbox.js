module.exports.config = {
  name: 'listbox',
  version: '1.0.0',
  credits: 'manhIT',//Mod by H.Thanh
  hasPermssion: 2,
  description: 'Danh sรกch nhรณm Bot ฤรฃ tham gia',
  commandCategory: 'Super Admin & Admin',
  usages: '< out >',
  cooldowns: 15
};


module.exports.handleReply = async function({ api, event, args, Threads, handleReply }) {

  if (parseInt(event.senderID) !== parseInt(handleReply.author)) return;

  var arg = event.body.split(" ");
  var idgr = handleReply.groupid[arg[1] - 1];


  switch (handleReply.type) {

    case "reply":
      {
        if (arg[0] == "out" || arg[0] == "Out") {
          api.removeUserFromGroup(`${api.getCurrentUserID()}`, idgr);
          api.sendMessage("[ ๐ ๐ข๐๐ ] โ ฤรฃ out nhรณm cรณ ID: " + idgr + "\n" + (await Threads.getData(idgr)).name, event.threadID, event.messageID);
          break;
        }

      }
  }
};


module.exports.run = async function({ api, event, client }) {
  var inbox = await api.getThreadList(100, null, ['INBOX']);
  let list = [...inbox].filter(group => group.isSubscribed && group.isGroup);

  var listthread = [];

  //////////


  for (var groupInfo of list) {
    let data = (await api.getThreadInfo(groupInfo.threadID));

    listthread.push({
      id: groupInfo.threadID,
      name: groupInfo.name,
      sotv: data.userInfo.length,
      messageCount: groupInfo.messageCount,
    });

  } //for

  var listbox = listthread.sort((a, b) => {
    if (a.sotv > b.sotv) return -1;
    if (a.sotv < b.sotv) return 1;
  });

  let msg = '',
    i = 1;
  var groupid = [];
  for (var group of listbox) {
    msg += `${i++}. ${group.name}\n๐ ๐ง๐๐: ${group.id}\n๐ค ๐ฆ๐ผฬฬ ๐๐ต๐ฎฬ๐ป๐ต ๐๐ถ๐ฒฬ๐ป: ${group.sotv}\n๐ฌ ๐ง๐ผฬฬ๐ป๐ด ๐๐ถ๐ป ๐ป๐ต๐ฎฬฬ๐ป: ${group.messageCount}\n\n`;
    groupid.push(group.id);
  }

  api.sendMessage(msg + '๐ ๐๐๐ฉ๐ฅ๐ฒ "๐จ๐ฎ๐ญ" ๐ก๐จ๐ฬฃฬ๐ "๐๐๐ง" + ๐ฌ๐จฬฬ ๐ญ๐ก๐ฎฬฬ ๐ญ๐ฎฬฬฃ ๐๐ฬฬ ๐จ๐ฎ๐ญ ๐ก๐จ๐ฬฃฬ๐ ๐๐๐ง ๐ญ๐ก๐ซ๐๐๐ ๐๐ฬฃ๐ง ๐๐ก๐จฬฃ๐ง', event.threadID, (e, data) =>
    global.client.handleReply.push({
      name: this.config.name,
      author: event.senderID,
      messageID: data.messageID,
      groupid,
      type: 'reply'
    })
  );
};