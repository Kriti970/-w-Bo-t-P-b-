//@Prem-babu3608
////////////////////////////////////////////////////////
/////// WARNING => JO CREDIT NAME CHANGE KREGA USKA ID BAN KAR DIYA JAYEGA + THIS BOT IS MADE BT PREM BABU
const fs = require("fs");
module.exports.config = {
        name: "Radha",
    version: "1.1.1",
        hasPermssion: 0,
        credits: "PREM BABU", //////@prem-babu3608
        description: "THIS BOT IS MR PREM SHARMA",
        commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
        var { threadID, messageID } = event;
        let react = event.body.toLowerCase();
        if(react.includes("radhe radhe") ||
     react.includes("RADHE RADHE") || react.includes("Radhe Radhe") || react.includes("राधे राधे") ||
react.includes("Radhe") ||
react.includes("RADHE")) {
                var msg = {
                                body: `『٭』 प्यार से बोलो राधे राधे 『٭』`,attachment: fs.createReadStream(__dirname + `/AADI/XX.jpg`)
                        }
                        api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🥀", event.messageID, (err) => {}, true)
                }
        }
        module.exports.run = function({ api, event, client, __GLOBAL }) {

  }