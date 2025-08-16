const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0pjVUlFTWVJcmNYN2RJNnE0azlOM3R3V3d4MFVCV1RXOXdUeUxrTTZGWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieGtiQ1daUldxd2RTbzNWWlN5QVNwSW0yTGU4Nmk5QzAvTTVIcHljdm5SND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1QVFtVFluQ1d5Q0R5ZVFtQysxNThhRUtaUVNpc0F3N0VOTHFoRTFDem5NPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJqSzlhSG5uOVpiRDQ2aUVibktRQkxJNmhINDRybGZhbEd3Qm1XeXpJSWtVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNCeDhlbEJtaDdybVRMdENlNitpTi9GQ0tXeEVTWGF6clh0N08yaTRzMjQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InhtUVV5WE02VVI1QWV3U241bmlrRHZnZFZvYzRabnBEK2hwVTlsM0xBM009In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUE5R3Bqb0xCY0EwaTFoT3d4MWVsVTNkUGpYaEZaZkZxakRwRlVrT3VGdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWE5xQ25vYWk1T3V2dGg3SEtlNWFsbnVDbjdBaUZBbk0xaGNUVG1xKzQwST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im13VDhlaE1CZjhFSUVKdHFpbkw2WGxGbzYxYko4Y1IrcG5JaTRIL0k2b240dnJHSnhaSjFDb3BIZXpwR09aLzV6bVVjc2h6WTJwdE1HYzRzV1dBVmdnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NzQsImFkdlNlY3JldEtleSI6ImsyalN6Z2pkdkVUNUJ2OVVDZlQvOEt6T3FFL0MzTmJHRmdwNjMwYVZKdmM9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzNDM1NjcyNjUyQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjA2QTVGMkQ1QjhBRDYzMUM2MjJENEI4RjgwNUM3ODMyIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTUzNDM3OTB9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6Ik5WNlE4VDVOIiwibWUiOnsiaWQiOiI5MjM0MzU2NzI2NTI6MzRAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiVW5rbm93biIsImxpZCI6IjEwMjkxNjU2MDAwMzE1MzozNEBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0orRTVib0NFS2JYZ2NVR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlRjbEFFMFVibEd3SWFkM0VqVmV5TFBwems2SXJqQTFNeFI0QVFqVHVpbjA9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImpGd2ZURlRVSkRSd21PcDNwWmErbUhxeXBLQ0E4YmhkLzlPRUVGNWxXdTlaQXlLZFR0RzY2V0RXK0o3NkJhakxnUmViZWczbGw4OHNZZU5GSUVDQ0RnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJsWjhxb05kMnRFY09FZHlhVHpVaytzU1JGT2QvcG1DdG8yKzFMY0pRejQvTzNDWEU3cFBvNTZJUDBZaFlCOU9Bbi9WWW9SV1FCR0hBNUlCTGxtVzJpUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzQzNTY3MjY1MjozNEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJVM0pRQk5GRzVSc0NHbmR4STFYc2l6NmM1T2lLNHdOVE1VZUFFSTA3b3A5In19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQTBJQlE9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTUzNDM3ODUsImxhc3RQcm9wSGFzaCI6IjJWNzdxVSIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBT1FHIn0=",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY Asad Botz 🤍*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "same", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "false",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/k4j400.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "Asad Botz",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "Asad Botz",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923493709959",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "*AsadMD Official*",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ AsadMD Official ❣️*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/k4j400.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Zinda Hun Yar ⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923237045919",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
