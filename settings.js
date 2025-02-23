const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "L376G22L",
// add your Session Id 

PREFIX: process.env.PREFIX || ",",
// add your prifix for bot

BOT_NAME: process.env.BOT_NAME || "✦ᴍᴀʟᴠɪɴ xᴅ v2",
// add bot name here for menu

CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react   

STICKER_NAME: process.env.STICKER_NAME || "MALVIN-XD",
// type sticker pack name  

CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🔥,❤️‍🩹,❤️,🩷,🧡,💛,💚,💙,🩵,💜,🤎,🖤,🩶,🤍",
// chose custom react emojis by yourself 

DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 

OWNER_NUMBER: process.env.OWNER_NUMBER || "50955512964",
// add your bot owner number

OWNER_NAME: process.env.OWNER_NAME || "✦ᴍᴀʟᴠɪɴ ᴛᴇᴄʜ🪀✦",
// add bot owner name

DESCRIPTION: process.env.DESCRIPTION || "> *© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ✦ɴᴇxᴜs ᴛᴇᴄʜ✦ ɪɴᴄ*",
// add bot owner name    

ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/bddvfr.jpg",
// add img for alive msg

MENU_IMG: process.env.MENU_IMG || "https://files.catbox.moe/gld2vo.jpg",
// dont change menu image

LIVE_MSG: process.env.LIVE_MSG || "> ✦ᴍᴀʟᴠɪɴ xᴅ✦ ɪs sᴘᴀʀᴋɪɴɢ ᴀᴄᴛɪᴠᴇ ᴀɴᴅ ᴀʟɪᴠᴇ\n\n\nᴋᴇᴇᴘ ᴜsɪɴɢ ✦ᴍᴀʟᴠɪɴ xᴅ v2✦ ғʀᴏᴍ ɴᴇxᴜs ᴛᴇᴄʜ ɪɴᴄ⚡\n\n\n*© ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ - ᴍᴅ\n\n> ɢɪᴛʜᴜʙ :* github.com/kingmalvn/MALVIN-XD",
// add alive msg here 

READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs

AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs

ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words

AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen

AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 

AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto react on status (still testing)

AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*🎉👀 Status Seen by ᴍᴀʟᴠɪɴ xᴅ v2🚀🔥*",
// set the auto reply massage on status reply    

MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 

ANTI_LINK: process.env.ANTI_LINK || "false",
// make anti link true,false for groups 

AUTO_VOICE: process.env.AUTO_VOICE || "true",
// make true for send automatic voices

AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 

AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 

HEART_REACT: process.env.HEART_REACT || "false",
// make this true or false for heart reactions only 

OWNER_REACT: process.env.OWNER_REACT || "true",
// make it true or fasle for only react on owner msg only 

ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
// maks true for always online 

PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod

AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   

AUTO_RECORDING: process.env.AUTO_RECORDING || "true",
// make it true for auto recoding 

FAKE_RECORDING: process.env.FAKE_RECORDING || "false",
// make it true for fake recoding 

FAKE_TYPING: process.env.FAKE_TYPING || "false",
// make it true for fake typing

READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 

DEV: process.env.DEV || "50955512964",
//replace with your whatsapp number       
 
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 

ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "log", 
// change it to 'same' if you want to resend deleted message in same chat 

CURRENT_STATUS: process.env.CURRENT_STATUS || "true",
// make it true for current status 
};
