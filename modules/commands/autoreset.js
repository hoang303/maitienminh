module. exports. config = {
    name: "autoreset",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "D-Jukie",
    description: "Thแปi gian",
    commandCategory: "Hแป thแปng",
    cooldowns: 5
}
module. exports. handleEvent = async function({ api, event, args, Users,Threads }) {
  const moment = require("moment-timezone");
  var timeNow = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss");
  var thu = moment.tz('Asia/Ho_Chi_Minh').format('dddd');
  var color = ["\x1b[33m", "\x1b[34m", "\x1b[35m", '\x1b[36m','\x1b[31m','\x1b[1m'];
  var more = color[Math.floor(Math.random() * color.length)];
  var idad = global.config.ADMINBOT;    
  console.log('\x1b[36m'+ '๐ TIME ๐: '+ more + timeNow + '\x1b[31m' + ' โฃ ' + '\x1b[0m' +  thu)
  var seconds = moment.tz("Asia/Ho_Chi_Minh").format("ss");
  var timeRestart_1 = `00:59:${seconds}`
  //console.log(timeNowRestart)
  if ((timeNow == timeRestart_1) && seconds < 5 ) {
    for( let ad of idad) {
  setTimeout(() =>
          api.sendMessage(`[ ๐๐๐ ๐๐๐๐ ] - ๐๐ฟ๐ฎ ๐๐ฟ๐ฎ ๐, b๐ฎฬ๐ ๐ด๐ถ๐ผฬฬ ๐น๐ฎฬ ๐: ${timeNow}\n๐ฉ๐ผฬฬฃ ๐๐ฒฬ ๐๐ถ๐ฒฬฬ๐ป ๐ต๐ฎฬ๐ป๐ต ๐ฟ๐ฒ๐๐ฒ๐ ๐ต๐ฒฬฃฬ ๐๐ต๐ผฬฬ๐ป๐ด ๐น๐ฎฬฃ๐ถ ๐ป๐ต๐ฒ๐ฎ๐ฎ ๐ฐ๐ต๐ผฬฬ๐ป๐ด ๐๐ฒฬ๐ ๐ฐ๐ต๐ผฬฬ ๐๐ถฬ ๐ป๐ต๐ฒฬ โข๏ธ`,ad, () =>process.exit(1)), 1000);
    }
    }
}
module. exports. run = async  ({ api, event, args }) => {
      const moment = require("moment-timezone");
      var timeNow = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss");
        api.sendMessage(`${timeNow}`, event.threadID)
}