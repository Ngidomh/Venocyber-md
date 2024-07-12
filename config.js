//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "losrios755@gmail.com";
global.location = "Njombe,Tanzania.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dar es salaam";
global.github = process.env.GITHUB || "https://github.com/Kingjux/Venocyber-md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/12b0fb245e6b8ba4bf718.jpg";
global.devs = "255742862266";
global.sudo = process.env.SUDO || "255742862266";
global.owner = process.env.OWNER_NUMBER || "255697255656";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "typing";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/3keql8";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0srUEVWM0JjS25RTjRDM0pjWXFPMGVuNzZYcS9iTHFxYnhVRXMxVFQyST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNHBCNXVPYTVjVzhIYlE3M3BhUmkwR1p5ZURpNG1ZdnZlV09RYlVBWmsxUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNTzNFbHFXRzJjSUo2Rk9NRVhuZVQ4OUNJK2FVdm1WWjFGMDFRaVNrZmxjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJQamR6WDNoRTBjV3pmOXhrNzNPZzZBaGtxc215QVdhRU1INTBVeXBjdUZvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNJT3doOFU1R2dTOWVtZUMwUEU3VVFMOFVKdEVmOUpxVXhieVdUSyt6Vk09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVlM0pXODJxNGpKTGVhSjhDM09aOFVPVzN5TUxTaW1iMXF0V1NxaG9LRWs9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOE5SVXBSMEcyM2NiL2pXOXgyd2JhWnJjYitsb1BSRVI4T0Q5bHY5SC9GUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY1NERisxS1ZqMWFPc0hJeE1QaC90Vk1SOTdtK3hnSFVMNjlraWQ2S3kwYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJrZlFkM0NyLzlmZzhwZ1d1QW12QXQwdDdBM09HRmVNN2dZREdhcWJUdjJuYWwvOTE5cmtpQklwTmNNMTN2RkU0dk1BanhrbDBuWmR2NmlhSkRFT0N3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTI3LCJhZHZTZWNyZXRLZXkiOiIwc09EOG44ZWtoK1Eya1ZjMFJCd2l0b2U4VVpFMlRWOG5ZYUV6S21OVFljPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ5eTBoS3BBclQ2R0ZJeENsc2VqWG1RIiwicGhvbmVJZCI6ImU5YThkM2YwLWRhOGUtNGEyNi04YmJlLTkyNDllNDIxZmYyYSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJKZE8xb1cwT0F3M1RFdW15dXZvZnFRUjVUb3c9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNWt6Uzlsc2xKdmt6WGZxRzlROWpYZDRENXI0PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjNZUEY4TEM2IiwibWUiOnsiaWQiOiIyNTU2OTcyNTU2NTY6NEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwnZWsIPCdlpPwnZaK8J2WnCDwnZaH8J2WmvCdlpjwnZaO8J2Wk/CdlorwnZaY8J2WmCDwnZaT8J2WhvCdlpLwnZaKLi4ifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ09QLzRhMEVFT2Vtd3JRR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Im5vdHFabWpXSndyMzhvaUNaMC9OSDljaWZLT1BIQStsakplYjYyNG9QMTg9IiwiYWNjb3VudFNpZ25hdHVyZSI6InpMM0JJRXhCU3FFSi9XdlZjdVVaQmZWRnFCaWIxZVNpNDl6SWpLSHRpdHZSbW1xRTVFRnpQWmlBbFRvSXZ5VDdGQjdqRXZrbjdpYk44a2psVCtuQkN3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJrUnZSTktkYnc1cDdIMW54ME4rS2RHTXZuWXBncmpvTFNSNWhmOU0va0lyRmdMc1l5UHI0dWhuVmZscWNrRGhJZ3RmdGFlVmR1aG92MU1oeFdPL25BQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NTY5NzI1NTY1Njo0QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlo2TGFtWm8xaWNLOS9LSWdtZFB6Ui9YSW55amp4d1BwWXlYbSt0dUtEOWYifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjA3NTA5NjQsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTENJIn0="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "you're using first powerful bot to be released in Tanzania| enjoy your time| this is 𝐕𝐄𝐍𝐎𝐂𝐘𝐁𝐄𝐑 𝐌𝐃",
  author: process.env.PACK_AUTHER || "VENOCYBER",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "VENOCYBER-𝐌𝐃",
  ownername: process.env.OWNER_NAME || "VENOCYBER",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-MLNkacQOWsMSwtBZZf0XT3BlbkFJqfgJYOOkiikW5Y4ynpM5",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "VENOCYBER").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
