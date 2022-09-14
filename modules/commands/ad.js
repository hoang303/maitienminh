module.exports.config = {
  name: "ad",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "BLACK",
  description: "Kiểm tra thông tin admin .",
  commandCategory: "Thông tin admin",
  usages: "adm",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"", 
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
  var link = [
"https://i.imgur.com/WbTqM5R.mp4",
  ];
  var callback = () => api.sendMessage({body:`🐳梁ADMIN梁💗
  𝒙𝒊𝒏 𝒄𝒉𝒂̀𝒐👀 𝑻𝒆̂𝒏:   MAI TIẾN MINH
💮 𝑩𝒊𝒆̣̂𝒕 𝒅𝒂𝒏𝒉: MINHDARKER
❎ 𝑻𝒖𝒐̂̉𝒊: 16 𝑻𝒖𝒐̂̉𝒊
👤 𝑮𝒊𝒐̛́𝒊 𝒕𝒊́𝒏𝒉: 𝑵𝒂𝒎
💫 𝑪𝒉𝒊𝒆̂̀𝒖 𝒄𝒂𝒐 𝒄𝒂̂𝒏 𝒏𝒂̣̆𝒏𝒈:  chịu
💘 𝑴𝒐̂́𝒊 𝒒𝒖𝒂𝒏 𝒉𝒆̣̂: Còn ế đéo có ny 
🌎 𝑸𝒖𝒆̂ 𝒒𝒖𝒂́𝒏: THÁI BÌNH
👫 𝑮𝒖: ???
🌸 𝑻𝒊́𝒏𝒉 𝒄𝒂́𝒄𝒉: Dễ Gần, 𝒗𝒖𝒊 𝒕𝒊́𝒏𝒉, 𝒉𝒐𝒂̀ 𝒅𝒐̂̀𝒏𝒈 :]]
🌀 𝑺𝒐̛̉ 𝒕𝒉𝒊́𝒄𝒉: 𝑪𝒉𝒐̛𝒊 𝒈𝒂𝒎𝒆, 𝒙𝒆𝒎 𝒑𝒉𝒊𝒎 𝐡𝐞𝐧𝐭𝐚𝐢𝐳 𝒃𝒍𝒂𝒃𝒍𝒂, 𝒂̆𝒏, 𝒏𝒈𝒖̉, :𝑫
💻𝑪𝒐𝒏𝒕𝒂𝒄𝒕💻
☎ 𝑺𝑫𝑻&𝒁𝒂𝒍𝒐: 0862345256
🌐 𝑭𝒂𝒄𝒆𝒃𝒐𝒐𝒌: https://www.facebook.com/100077538992985
✉️ 𝑬𝒎𝒂𝒊𝒍: ?
📢 𝑳𝒖̛𝒖 𝒚́ 𝒄𝒉𝒐 𝒄𝒂́𝒄 𝒒𝒕𝒗 𝒗𝒂̀ 𝒕𝒗 𝒕𝒓𝒐𝒏𝒈 𝒃𝒐𝒙: 
- 𝑽𝒖𝒊 𝒍𝒐̀𝒏𝒈 𝒌𝒉𝒐̂𝒏𝒈 𝒔𝒑𝒂𝒎 𝒌𝒉𝒊 𝒔𝒖̛̉ 𝒅𝒖̣𝒏𝒈 𝒅𝒆̂̉ 𝒕𝒓𝒂́𝒏𝒉 𝒅𝒊𝒆 𝒃𝒐𝒕
- 𝑲𝒉𝒐̂𝒏𝒈 𝒔𝒖̛̉ 𝒅𝒖̣𝒏𝒈 𝒍𝒆̣̂𝒏𝒉 𝒏𝒉𝒊𝒆̂̀𝒖 𝒄𝒖̉𝒂 𝒍𝒆̣̂𝒏𝒉 𝒅𝒐́
- 𝑫𝒖̛̀𝒏𝒈 𝒄𝒉𝒖̛̉𝒊 𝒃𝒐𝒕 𝒗𝒊̀ 𝒏𝒐́ 𝒅𝒖̛𝒐̛̣𝒄 𝒍𝒂̣̂𝒑 𝒕𝒓𝒊̀𝒏𝒉 𝒕𝒖̛̣ 𝒅𝒐̣̂𝒏𝒈 𝒓𝒐̛̀𝒊 𝒃𝒐𝒙
- 𝑫𝒖̛̀𝒏𝒈 𝒓𝒆𝒑𝒐𝒓𝒕 𝒃𝒐𝒕 𝒗𝒊̀ 𝒏𝒐́ 𝒄𝒖𝒕𝒆 𝒍𝒂̆́𝒎 ><
- 𝑵𝒆̂́𝒖 𝒃𝒐𝒕 𝒌𝒐 𝒉𝒐𝒂̣𝒕 𝒅𝒐̣̂𝒏𝒈 𝒉𝒂𝒚 𝒃𝒊̣ 𝒍𝒐̂̃𝒊 𝒉𝒂𝒚 𝒍𝒊𝒆̂𝒏 𝒉𝒆̣̂ 𝒒𝒖𝒂 𝒔𝒅𝒕 𝒉𝒐𝒂̣̆𝒄 𝒏𝒉𝒂̆́𝒏 𝒕𝒊𝒏 𝒎𝒆𝒔𝒔 𝒅𝒆̂̉ 𝒅𝒖̛𝒐̛̣𝒄 𝒍𝒊𝒆̂𝒏 𝒉𝒆̣̂ 𝒕𝒓𝒖̛̣𝒄 𝒕𝒊𝒆̂́𝒑 𝒗𝒐̛́𝒊 𝒎𝒊̀𝒏𝒉
- 𝑨𝒅𝒎𝒊𝒏 𝒄𝒐́ 𝒉𝒐̂̃ 𝒕𝒓𝒐̛̣ 𝑫𝒊̣𝒄𝒉 𝑽𝒖̣ 𝑭𝒂𝒄𝒆𝒃𝒐𝒐𝒌. 𝑫𝒖̀𝒏𝒈 𝒄𝒂𝒍𝒍𝒂𝒅 𝒅𝒆̂̉ 𝒏𝒉𝒐̛̀ 𝒕𝒓𝒐̛̣ 𝒈𝒊𝒖́𝒑 𝒉𝒐𝒂̣̆𝒄 𝒍𝒊𝒆̂𝒏 𝒉𝒆̣̂ 𝒕𝒉𝒆𝒐 𝒍𝒊𝒏𝒌 𝒂𝒅𝒎𝒊𝒏 𝒅𝒂̃ 𝒈𝒉𝒊 𝒃𝒆̂𝒏 𝒕𝒓𝒆̂𝒏
=> 𝒀𝒆̂𝒖 𝒎𝒐̣𝒊 𝒏𝒈𝒖̛𝒐̛̀𝒊 𝒏𝒉𝒊𝒆̂̀𝒖 𝒍𝒂̆́𝒎 <𝟑 𝒉𝒂̃𝒚 𝒅𝒐̂̀𝒏𝒈 𝒉𝒂̀𝒏𝒉 𝒄𝒖̀𝒏𝒈 𝒗𝒐̛́𝒊 𝒃𝒐𝒕 𝒗𝒂̀ 𝒎𝒊̀𝒏𝒉 𝒏𝒉𝒆́ <𝟑
--------------------------
✔𝑫𝒐𝒏𝒂𝒕𝒆:?
💳𝑴𝑩 :99923082006
📲𝑴𝒐𝑴𝒐:0989221552

----MinhDarker----`,attachment: fs.createReadStream(__dirname + "/cache/5.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.mp4")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.mp4")).on("close",() => callback());
   };
