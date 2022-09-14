module.exports.config = {
  name: "box",
  version: "1.0.3",
  hasPermssion: 0,
  credits: "ProCoderCyrus",
  description: "Các cài đặt của nhóm chat.",
  commandCategory: "Box Chat",
  usages: "[id/name/setname/emoji/admin/image/info]",
  cooldowns: 1,
  dependencies: {
    "request": "",
    "fs-extra": "path"
  }
};

const totalPath = __dirname + '/noprefix/totalChat.json';
const _24hours = 86400000;
const fs = require("fs-extra");

module.exports.handleEvent = async ({
  api,
  event,
  args
}) => {
  if (!fs.existsSync(totalPath)) fs.writeFileSync(totalPath, JSON.stringify({}));
  let totalChat = JSON.parse(fs.readFileSync(totalPath));
  if (!totalChat[event.threadID]) return;
  if (Date.now() - totalChat[event.threadID].time > (_24hours * 2)) {
    let sl = (await api.getThreadInfo(event.threadID)).messageCount;
    totalChat[event.threadID] = {
      time: Date.now() - _24hours,
      count: sl,
      ytd: sl - totalChat[event.threadID].count
    }
    fs.writeFileSync(totalPath, JSON.stringify(totalChat, null, 2));
  }
}

module.exports.run = async ({
  api,
  event,
  args,
  Threads,
  Users,
  utils
}) => {
   var fullTime = global.client.getTime("fullTime");
  const request = require("request");
  const {
    resolve
  } = require("path");
  const moment = require("moment-timezone");
  var timeNow = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss")
  if (args.length == 0) return api.sendMessage(`===「 𝐇𝐮̛𝐨̛́𝐧𝐠 𝐃𝐚̂̃𝐧 𝐒𝐮̛̉ 𝐃𝐮̣𝐧𝐠 」===\n──────────────\n[🎀] 𝐁𝐨𝐱 𝐚𝐝𝐦𝐢𝐧 [@𝐭𝐚𝐠] => 𝘁𝗵𝗲̂𝗺 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗱𝘂̀𝗻𝗴 𝗹𝗮̀𝗺 𝗤𝗧𝗩 𝗯𝗼𝘅\n[🎀] 𝐁𝐨𝐱 𝐦𝐞 𝐚𝐝𝐦𝐢𝐧 => 𝗰𝗮̂́𝗽 𝗾𝘂𝗮̉𝗻 𝘁𝗿𝗶̣ 𝘃𝗶𝗲̂𝗻 𝗻𝗵𝗼́𝗺 𝗰𝗵𝗼 𝗯𝗮̣𝗻\n──────────────\n[🎀] 𝐁𝐨𝐱 𝐢𝐦𝐚𝐠𝐞 [𝐫𝐞𝐩𝐥𝐲] 𝗮̉𝗻𝗵 𝗰𝗮̂̀𝗻 𝘁𝗵𝗮𝘆 𝗰𝘂̉𝗮 𝗯𝗼𝘅\n──────────────\n[🎀] 𝐁𝐨𝐱 𝐧𝐚𝐦𝐞 => 𝗟𝗮̂́𝘆 𝘁𝗲̂𝗻 𝗻𝗵𝗼́𝗺\n[🎀] 𝐁𝐨𝐱 𝐢𝐝 => 𝗹𝗮̂́𝘆 𝗶𝗱 𝗰𝘂̉𝗮 𝗯𝗼𝘅\n[🎀] 𝐁𝐨𝐱 𝐢𝐧𝐟𝐨 => 𝘅𝗲𝗺 𝘁𝗵𝗼̂𝗻𝗴 𝘁𝗶𝗻 𝗯𝗼𝘅\n[🎀] 𝗕𝗼𝘅 𝘀𝗲𝘁𝗻𝗮𝗺𝗲 => 𝘁𝗵𝗮𝘆 𝘁𝗲̂𝗻 𝗯𝗼𝘅\n[🎀] 𝗕𝗼𝘅 𝗲𝗺𝗼𝗷𝗶 => 𝘁𝗵𝗮𝘆 𝗲𝗺𝗼𝗷𝗶 𝗯𝗼𝘅\n──────────────`, event.threadID, event.messageID);
 

  if (args[0] == "id") {
    return api.sendMessage(`${event.threadID}`, event.threadID, event.messageID);
  }

  if (args[0] == "name") {
    var nameThread = global.data.threadInfo.get(event.threadID).threadName || ((await Threads.getData(event.threadID)).threadInfo).threadName;
    return api.sendMessage(nameThread, event.threadID, event.messageID);
  }

  if (args[0] == "setname") {
    var content = args.join(" ");
    var c = content.slice(7, 99) || event.messageReply.body;
    api.setTitle(`${c} `, event.threadID);
  }

  if (args[0] == "emoji") {
    const name = args[1] || event.messageReply.body;
    api.changeThreadEmoji(name, event.threadID)

  }

if (args[0] == "me") {
    if (args[1] == "admin") {
      const threadInfo = await api.getThreadInfo(event.threadID)
      const find = threadInfo.adminIDs.find(el => el.id == api.getCurrentUserID());
      if (!find) api.sendMessage("Cần quyền Quản trị viên nhóm cho Bot để thực hiện lệnh", event.threadID, event.messageID)
      else if (!global.config.SUPERADMIN.includes(event.senderID)) api.sendMessage("[ 𝗠𝗢𝗗𝗘 ] - Hãy kiểm tra xem nếu không set được thì là bạn chưa cho bot quyền quản trị viên, còn set được có nghĩa là thành công", event.threadID, event.messageID)
      else api.changeAdminStatus(event.threadID, event.senderID, true);
    }
  }

  if (args[0] == "admin") {
    if (args.join().indexOf('@') !== -1) {
      namee = Object.keys(event.mentions)
    } else namee = args[1]
    if (event.messageReply) {
      namee = event.messageReply.senderID
    }

    const threadInfo = await api.getThreadInfo(event.threadID)
    const findd = threadInfo.adminIDs.find(el => el.id == namee);
    const find = threadInfo.adminIDs.find(el => el.id == api.getCurrentUserID());
    const finddd = threadInfo.adminIDs.find(el => el.id == event.senderID);

    if (!finddd) return api.sendMessage("Bạn cần quyền Quản trị viên nhóm để thực hiện lệnh", event.threadID, event.messageID);
    if (!find) {
      api.sendMessage("[ 𝗠𝗢𝗗𝗘 ] - Hãy kiểm tra xem nếu không set được thì là bạn chưa cho bot quyền quản trị viên, còn set được có nghĩa là thành công", event.threadID, event.messageID)
    }
    if (!findd) {
      api.changeAdminStatus(event.threadID, namee, true);
    } else api.changeAdminStatus(event.threadID, namee, false)
  }


  if (args[0] == "image") {
    if (event.type !== "message_reply") return api.sendMessage("[𝐁𝐎𝐗 🎀] Bạn phải reply một audio, video, ảnh nào đó", event.threadID, event.messageID);
    if (!event.messageReply.attachments || event.messageReply.attachments.length == 0) return api.sendMessage("[𝐁𝐎𝐗 🎀] Bạn phải reply một audio, video, ảnh nào đó", event.threadID, event.messageID);
    if (event.messageReply.attachments.length > 1) return api.sendMessage(`[𝐁𝐎𝐗 🎀] Vui lòng reply chỉ một audio, video, ảnh!`, event.threadID, event.messageID);
    var callback = () => api.changeGroupImage(fs.createReadStream(__dirname + "/cache/1.png"), event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.png"));
    return request(encodeURI(event.messageReply.attachments[0].url)).pipe(fs.createWriteStream(__dirname + '/cache/1.png')).on('close', () => callback());
  };

  if (args[0] == "info") {
    const moment = require("moment-timezone");
    var timeNow = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss");
    if (!fs.existsSync(totalPath)) fs.writeFileSync(totalPath, JSON.stringify({}));
    let totalChat = JSON.parse(fs.readFileSync(totalPath));
    let threadInfo = await api.getThreadInfo(event.threadID);
    let timeByMS = Date.now();
 const threadSetting = (await Threads.getData(String(event.threadID))).data || 
    {};
    const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX 
    : global.config.PREFIX;
    var memLength = threadInfo.participantIDs.length;
    let threadMem = threadInfo.participantIDs.length;
    var nameMen = [];
    var gendernam = [];
    var gendernu = [];
    var nope = [];
    for (let z in threadInfo.userInfo) {
      var gioitinhone = threadInfo.userInfo[z].gender;
      var nName = threadInfo.userInfo[z].name;
      if (gioitinhone == "MALE") {
        gendernam.push(z + gioitinhone)
      } else if (gioitinhone == "FEMALE") {
        gendernu.push(gioitinhone)
      } else {
        nope.push(nName)
      }
    };
    var nam = gendernam.length;
    var nu = gendernu.length;
    let qtv = threadInfo.adminIDs.length;
    let sl = threadInfo.messageCount;
    let u = threadInfo.nicknames;
     let color = threadInfo.color;
    let icon = threadInfo.emoji;

    let threadName = threadInfo.threadName;
    let id = threadInfo.threadID;
    let sex = threadInfo.approvalMode;
    var pd = sex == false ? 'tắt' : sex == true ? 'bật' : 'Kh';


    if (!totalChat[event.threadID]) {
      totalChat[event.threadID] = {
        time: timeByMS,
        count: sl,
        ytd: 0
      }
      fs.writeFileSync(totalPath, JSON.stringify(totalChat, null, 2));
    }

    let mdtt = "Chưa có thống kê";
    let preCount = totalChat[event.threadID].count || 0;
    let ytd = totalChat[event.threadID].ytd || 0;
    let hnay = (ytd != 0) ? (sl - preCount) : "Chưa có thống kê";
    let hqua = (ytd != 0) ? ytd : "Chưa có thống kê";
    if (timeByMS - totalChat[event.threadID].time > _24hours) {
      if (timeByMS - totalChat[event.threadID].time > (_24hours * 2)) {
        totalChat[event.threadID].count = sl;
        totalChat[event.threadID].time = timeByMS - _24hours;
        totalChat[event.threadID].ytd = sl - preCount;
        fs.writeFileSync(totalPath, JSON.stringify(totalChat, null, 2));
      }
      getHour = Math.ceil((timeByMS - totalChat[event.threadID].time - _24hours) / 3600000);
      if (ytd == 0) mdtt = 100;
      else mdtt = ((((hnay) / ((hqua / 24) * getHour))) * 100).toFixed(0);
      mdtt += "%";
    }

    var callback = () =>
      api.sendMessage({
        body: `=====「 𝐓𝐡𝐨̂𝐧𝐠 𝐓𝐢𝐧 」=====\n\n⭐️ 𝐓𝐞̂𝐧 𝐁𝐨𝐱: ${threadName}\n🎮 𝐈𝐃 𝐁𝐨𝐱: ${id}\n📱 𝐏𝐡𝐞̂ 𝐃𝐮𝐲𝐞̣̂𝐭: ${pd}\n🐰 𝐄𝐦𝐨𝐣𝐢: ${icon ? icon : 'Không Sử Dụng'}\n🗂 𝐌𝐚̃ 𝐆𝐢𝐚𝐨 𝐃𝐢𝐞̣̂𝐧: ${color}\n📌 𝐓𝐨̂̉𝐧𝐠 ${threadMem} 𝐭𝐡𝐚̀𝐧𝐡 𝐯𝐢𝐞̂𝐧\n𝐒𝐨̂́ 𝐭𝐯 𝐧𝐚𝐦 🧑‍🦰: ${nam} 𝐭𝐡𝐚̀𝐧𝐡 𝐯𝐢𝐞̂𝐧\n𝐒𝐨̂́ 𝐭𝐯 𝐧𝐮̛̃ 👩‍🦰: ${nu} 𝐭𝐡𝐚̀𝐧𝐡 𝐯𝐢𝐞̂𝐧\n🕵️‍♂️ 𝐆𝐨̂̀𝐦 ${qtv} 𝐪𝐮𝐚̉𝐧 𝐭𝐫𝐢̣ 𝐯𝐢𝐞̂𝐧\n──────────────\n💬 𝐓𝐨̂̉𝐧𝐠: ${sl} 𝐭𝐢𝐧 𝐧𝐡𝐚̆́𝐧\n📈 𝐌𝐮̛́𝐜 𝐭𝐮̛𝐨̛𝐧𝐠 𝐭𝐚́𝐜: ${mdtt}\n🌟 𝐓𝐨̂̉𝐧𝐠 𝐬𝐨̂́ 𝐭𝐢𝐧 𝐧𝐡𝐚̆́𝐧 𝐡𝐨̂𝐦 𝐪𝐮𝐚: ${hqua}\n🌟 𝐓𝐨̂̉𝐧𝐠 𝐬𝐨̂́ 𝐭𝐢𝐧 𝐧𝐡𝐚̆́𝐧 𝐡𝐨̂𝐦 𝐧𝐚𝐲: ${hnay}\n      === 「${timeNow}」 ===`,
        attachment: fs.createReadStream(__dirname + '/cache/1.png')
      },
        event.threadID,
        () => fs.unlinkSync(__dirname + '/cache/1.png'),
        event.messageID
      );
    return request(encodeURI(`${threadInfo.imageSrc}`))
      .pipe(fs.createWriteStream(__dirname + '/cache/1.png'))
      .on('close', () => callback());
  }
}
