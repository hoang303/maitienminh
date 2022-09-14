module.exports.config = {
  name: "coveralime2",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Hanaku UwuU",
  description: "banner",
  commandCategory: "Tạo ảnh",
  usages: "",
  cooldowns: 5
};
module.exports.run = async function({ api, args, event, permssion }) {
  const axios = require('axios')
  const lengthchar = (await axios.get('https://raw.githubusercontent.com/kenyrm2250/API/mainV2/bannerpt')).data
  if(args[0] == "find" || args[0] == "tìm"){
    const t = (await axios.get(`${lengthchar[args[1]].imgAnime}`, {
        responseType: "stream"
      })).data;
    var msg = ({
      body: `ID NHÂN VẬT ${args[1]}, MÀU MẶC ĐỊNH ${lengthchar[args[1]].colorBg}`,
      attachment: t
    })
    return api.sendMessage(msg, event.threadID, event.messageID)
  }
  else if(args[0] == "list"){
    const alime = (await axios.get('https://raw.githubusercontent.com/kenyrm2250/API/mainV2/bannerpt')).data
    var count = alime.listAnime.length;
      var data = alime.listAnime
      var page = 1;
      page = parseInt(args[1]) || 1;
      page < -1 ? page = 1 : "";
      var limit = 20;
      var numPage = Math.ceil(count/limit);
      var msg = ``;
      for(var i = limit*(page - 1); i < limit*(page-1) + limit; i++){
         if(i >= count) break;
        msg += `[ ${i+1} ] - ${data[i].ID} | ${data[i].name}\n`;
      }
      msg += `Trang (${page}/${numPage})\nDùng ${global.config.PREFIX}${this.config.name} list <số trang>`;
      return api.sendMessage(msg, event.threadID,event.messageID);
  } else {
  const fs =  require('fs-extra')
   if (!fs.existsSync(__dirname +
        `/tad/UTM-Avo.ttf`)) {
        let getfont = (await axios.get(`https://github.com/kenyrm2250/font/blob/main/UTM%20Avo.ttf?raw=true`, { responseType: "arraybuffer" })).data;
        fs.writeFileSync(__dirname + `/tad/UTM-Avo.ttf`, Buffer.from(getfont, "utf-8"));
      }
         if (!fs.existsSync(__dirname +
      `/tad/phenomicon.ttf`)) {
      let getfont2 = (await axios.get(`https://github.com/kenyrm2250/font/raw/main/phenomicon.ttf`, { responseType: "arraybuffer" })).data;
      fs.writeFileSync(__dirname + `/tad/phenomicon.ttf`, Buffer.from(getfont2, "utf-8"));
    };
  if (!fs.existsSync(__dirname +
      `/tad/CaviarDreams.ttf`)) {
      let getfont3 = (await axios.get(`https://github.com/kenyrm2250/font/raw/main/CaviarDreams.ttf`, { responseType: "arraybuffer" })).data;
      fs.writeFileSync(__dirname + `/tad/CaviarDreams.ttf`, Buffer.from(getfont3, "utf-8"));
    };
   return api.sendMessage("𝗥𝗲𝗽𝗹𝘆 𝗧𝗶𝗻 𝗡𝗵𝗮̆́𝗻 𝗡𝗮̀𝘆 𝗩𝗮̀ 𝗖𝗵𝗼̣𝗻 𝗖𝗵𝗮𝗿 🌸", event.threadID, (err, info) => {
    return global.client.handleReply.push({
      step: 1,
      name: this.config.name,
      author: event.senderID,
      messageID: info.messageID
    });
  }, event.messageID);
}
}
module.exports.handleReply = async function({ api, event, args, handleReply, client, __GLOBAL, Threads, Users, Currencies }) {
  const axios = require("axios");
  const lengthchar = (await axios.get('https://raw.githubusercontent.com/kenyrm2250/API/mainV2/bannerpt')).data
  const fs = require("fs-extra");
  const request = require("request");
  if (event.senderID != handleReply.author) return api.sendMessage('CúC', event.threaID);
  const { loadImage, createCanvas, registerFont } = require("canvas");
  const path = require('path');
  const Canvas = require('canvas');
   let pathImg = __dirname + `/tad/avatar_1.png`;
  let pathAva = __dirname + `/tad/avatar_2.png`;
  let pathLine = __dirname + `/tad/avatar_3.png`;
  if(handleReply.step == 1){
     api.unsendMessage(handleReply.messageID);
    return api.sendMessage(`𝗕𝗮̣𝗻 𝘃𝘂̛̀𝗮 𝗰𝗵𝗼̣𝗻 𝗻𝗵𝗮̂𝗻 𝘃𝗮̣̂𝘁 𝗺𝗮𝗻𝗴 𝘀𝗼̂́ 𝗯𝗮́𝗼 𝗱𝗮𝗻𝗵 ${event.body}, 𝗿𝗲𝗽𝗹𝘆 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗻𝗮̀𝘆 đ𝗲̂̉ 𝗻𝗵𝗮̣̂𝗽 𝘁𝗲̂𝗻 𝗰𝗵𝗶́𝗻𝗵 🌸`, event.threadID, (err, info) => {
      if(err) return api.sendMessage(`Lỗi bất định`, event.threadID)
      return global.client.handleReply.push({
        step: 2,
        name: this.config.name,
        author: event.senderID,
        id: event.body,
        messageID: info.messageID
      })
    },event.messageID)
  }
   else if(handleReply.step == 2){
    return api.sendMessage(`𝗕𝗮̣𝗻 𝘃𝘂̛̀𝗮 𝗻𝗵𝗮̣̂𝗽 𝘁𝗲̂𝗻 𝗰𝗵𝗶́𝗻𝗵 𝗹𝗮̀ ${event.body}, 𝗿𝗲𝗽𝗹𝘆 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗻𝗮̀𝘆 𝘃𝗮̀ 𝗻𝗵𝗮̣̂𝗽 𝗰𝗵𝘂̛̃ 𝗸𝘆́ ( 𝗟𝘂̛𝘂 𝘆́: 𝗻𝗵𝗮̣̂𝗽 𝗸𝗵𝗼̂𝗻𝗴 𝗴𝗶𝗮̂́𝘂 𝘁𝗿𝗮́𝗻𝗵 𝗹𝗼̂̃𝗶 𝗳𝗼𝗻𝘁 ) 🌸`, event.threadID, (err, info) => {
      if(err) return api.sendMessage(`Lỗi bất định`, event.threadID)
      return global.client.handleReply.push({
        step: 3,
        name: this.config.name,
        author: event.senderID,
        id: handleReply.id,
        tenchinh: event.body,
        messageID: info.messageID
      })
    },event.messageID)
  }
      else if(handleReply.step == 3){
     api.unsendMessage(handleReply.messageID);
    return api.sendMessage(`𝗕𝗮̣𝗻 𝗰𝗵𝗼̣𝗻 𝗰𝗵𝘂̛̃ 𝗸𝘆́ 𝗹𝗮̀ ${event.body}, 𝗿𝗲𝗽𝗹𝘆 𝘁𝗶𝗲̂́𝗽 𝘁𝘂̣𝗰 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗻𝗮̀𝘆 𝘃𝗮̀ 𝗻𝗵𝗮̣̂𝗽 𝗺𝗮̀𝘂 ( 𝗿𝗲𝗽𝗹𝘆 𝗻𝗼 𝗻𝗲̂́𝘂 𝗯𝗮̣𝗻 𝗱𝘂̀𝗻𝗴 𝗺𝗮̀𝘂 𝗯𝗮𝘀𝗶𝗰 ) 🌸`, event.threadID, (err, info) => {
      if(err) return api.sendMessage(`Lỗi bất định`, event.threadID)
      return global.client.handleReply.push({
        step: 4,
        name: this.config.name,
        author: event.senderID,
        id: handleReply.id,
        tenchinh: handleReply.tenchinh,
        chuky: event.body,
        messageID: info.messageID
      })
    },event.messageID)
  } else if(handleReply.step == 4){
    const x = handleReply.id;
    const y = handleReply.tenchinh;
    const z = handleReply.chuky;
    const color = event.body;
    if(color == "no" || color == "No" || !color){
        var color_ = lengthchar[x].colorBg
    } else {
      var color_ = color
    }
    let avtAnime = (
    await axios.get(encodeURI(`${lengthchar[x].imgAnime}`), { responseType: "arraybuffer" })).data;
  let line = (await axios.get(encodeURI(
    `https://i.imgur.com/4BQHmeI.png`),
    { responseType: "arraybuffer" })).data;
  let background = (await axios.get(encodeURI(`https://i.imgur.com/HUblFwC.png`), { responseType: "arraybuffer" })).data;
  fs.writeFileSync(pathAva, Buffer.from(avtAnime, "utf-8"));
  fs.writeFileSync(pathLine, Buffer.from(line, "utf-8"));
  fs.writeFileSync(pathImg, Buffer.from(background, "utf-8"));
  if (!fs.existsSync(__dirname +
    `/tad/GMV_DIN_Pro.ttf`)) {
    let getfont = (await axios.get(`https://github.com/kenyrm2250/font/raw/main/GMV_DIN_Pro.ttf`, { responseType: "arraybuffer" })).data;
    fs.writeFileSync(__dirname + `/tad/GMV_DIN_Pro.ttf`, Buffer.from(getfont, "utf-8"));
  };
  if (!fs.existsSync(__dirname + `/tad/Asem-Kandis-PERSONAL-USE.ttf`)) {
    let getfont2 = (await axios.get(`https://github.com/kenyrm2250/font/raw/main/Asem-Kandis-PERSONAL-USE.ttf`, { responseType: "arraybuffer" })).data;
    fs.writeFileSync(__dirname + `/tad/Asem-Kandis-PERSONAL-USE.ttf`, Buffer.from(getfont2, "utf-8"));
  };
  let a = await loadImage(pathImg);
  let ab = await loadImage(pathAva);
  let az = await loadImage(pathLine);
  let canvas = createCanvas(a.width, a.height);
  let ctx = canvas.getContext("2d");
  let canvas2 = createCanvas(a.width, a.height);
  let ctx1 = canvas2.getContext("2d");
  ctx1.fillStyle = "#ffff"
  ctx1.fillRect(0, 0, 1500, 1500)
  ctx1.save();
  ctx1.globalAlpha = "0.1";
  ctx1.drawImage(ab, 0, 0, 1500, 1500);
  ctx1.restore();
  ctx1.save();
  ctx1.fillStyle = "#000"
  ctx1.globalCompositeOperation = "color";
  ctx1.fillRect(0, 0, 1500, 1500)
  ctx1.restore();
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = color_;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.globalCompositeOperation = "destination-in";
  ctx.drawImage(a, 0, 0, canvas.width, canvas.height);
  ctx.globalCompositeOperation = "destination-over";
  ctx.save();
  ctx.fillStyle = "#fff";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.restore();
  ctx.globalCompositeOperation = "source-over";
  ctx.drawImage(az, 0, 0, canvas.width, canvas.height);
  ctx.save();
  ctx.textAlign = "center";
  Canvas.registerFont(__dirname + `/tad/GMV_DIN_Pro.ttf`, {
    family: "GMV DIN Pro Cond"
  });
  ctx.fillStyle = "rgba(255, 255, 255,0.8)";
  ctx.strokeStyle = "#fff";
  ctx.lineWidth = 2;
  ctx.font = "200px GMV DIN Pro Cond";
  ctx.strokeText(y, canvas.width / 2, 650);
  ctx.fillText(y, canvas.width / 2, 825);
  ctx.strokeText(y, canvas.width / 2, 1000);
  ctx.restore();
  ctx.save();
  ctx.globalCompositeOperation = "multiply";
  ctx.drawImage(canvas2, -canvas.width / 4, -canvas.width / 4, canvas.width * 1.5, canvas.height * 1.5);
  ctx.restore();
  ctx.save();
  ctx.shadowColor = "rgba(0,0,0, 0.3)";
  ctx.shadowBlur = 10;
  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 0;
  ctx.drawImage(ab, 0, 0, canvas.width, canvas.height);
  ctx.restore();
  ctx.save()
  Canvas.registerFont(__dirname + `/tad/Asem-Kandis-PERSONAL-USE.ttf`, {
    family: "Asem Kandis"
  });
  ctx.textAlign = "center";
  ctx.fillStyle = color_;
  ctx.font = "120px Asem Kandis"
  ctx.fillText(z, canvas.width / 2, 200)
  ctx.save();
  ctx.beginPath();
  ctx.beginPath();
  const imageBuffer = canvas.toBuffer();
  fs.writeFileSync(pathImg, imageBuffer);
  return api.sendMessage({
    body: "𝗧𝗮̣𝗼 𝗔̉𝗻𝗵 𝗧𝗵𝗮̀𝗻𝗵 𝗖𝗼̂𝗻𝗴 🌸",
    attachment: fs.createReadStream(pathImg)
  },
    event.threadID,
    () => fs.unlinkSync(pathImg),
    fs.unlinkSync(pathAva),
    fs.unlinkSync(pathLine),
    event.messageID
  );
  }
  }