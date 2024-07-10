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
global.owner = process.env.OWNER_NUMBER || "255742862266";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkpxMVU1dFBpOUErZUpnR3lFcytCSlc4Q1FpSW9wQktseFpraU5ieUJIcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUmJvMkdmWjZzbnZ1bVNieit5ZEFhRDUwL1B4bERMQ3c3WVMrSzlLWS9qRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxSGRUYkxCNnVxamw2eExHOWdPQm1TNlkraXFLRzUycldjYithZ3hnVDBjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0eUVpdlRTZ0FrTzk3OU5EWXZFTGJiQTRRQklkL1JFR1RxaTlxNzNvM3c0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlFK01LdFk1TWtNRnpBZUR4WW54RUdVenJBK3NEUjZKOUc5MVFXeEo3Vnc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1helk2eW5INjljbVdud2RoR0xJajVNYzQwSTlOSWZFU204R1JOSUpJQ2M9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ1BscXBtb0Jyd09rc2xWYnJnL3pqcThibE11TW9JTXU0QmVER0s5UUdWRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiclNCR0VMblN4S3JodG1CN2RBVmpscmN0MDRGVjkva1dGM0lINFY0VmpSST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InBqZVE3YVlyMStqWDN2NThTeHdpK3dNaDVRMmRNN2lEa1BuSVNuRXVncCtnUnU5K0l0bUNCL08vcGlJSDk5WTJ3ckExY3g4QXVXU3d1K2RMUVEyMGd3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NDYsImFkdlNlY3JldEtleSI6IlRoUTkya2Z2UnVjVHFmQVExUjAwaDRyeUlKMGxheVRoMWMxczN0aldzZW89IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjU1Njk3MjU1NjU2QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkIyQkY1NTk3RkYxQ0U1MUJEREFFNkQxOTQzOTNGRTBCIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjA2MTYwNzh9LHsia2V5Ijp7InJlbW90ZUppZCI6IjI1NTY5NzI1NTY1NkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI5MzZBRjY2N0QxQkM5QjE0RTBGNjVCRDNGOUU0QzQxOCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIwNjE2MDgwfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ2T21WSGhTcFRIdVdwbEpmZ05KWjRRIiwicGhvbmVJZCI6IjlkMzAwYmM2LWQ1NjMtNDRkYi1hOWY2LTAwYTU5OWEzYjQ5OCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJuK25Lc2F2Uk9SbHNNTzlCQmFnY1JhQm9XNWs9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSXlBMENPczVXODYxaVdhaTJYV0pOTU9DSmNFPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkJXV1JXRkNLIiwibWUiOnsiaWQiOiIyNTU2OTcyNTU2NTY6M0BzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwnZWsIPCdlpPwnZaK8J2WnCDwnZaH8J2WmvCdlpjwnZaO8J2Wk/CdlorwnZaY8J2WmCDwnZaT8J2WhvCdlpLwnZaKLi4ifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ09MLzRhMEVFUCtJdXJRR0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Im5vdHFabWpXSndyMzhvaUNaMC9OSDljaWZLT1BIQStsakplYjYyNG9QMTg9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkU3dHdCOEJLUjFYT0NCMDZrenltZk1vZmJQUjdJWUdja2xkUUhPZDlXdEhRSmdPUnphYlJFTkdKam9UOXNiQlBlNTVTYXVBck81MzRWQlM4MFcyMEJnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiI3L3BkaGhkbkp5QjJyV2xNUkVtVmNIT09YSHd1TUwvaXJJM3pGTSswdTE3ZDNoMXVIUm9rTlNWZytuOFI0RkpNUURjeXByYUI4dFkyN1VFSEJJa3ppZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NTY5NzI1NTY1NjozQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlo2TGFtWm8xaWNLOS9LSWdtZFB6Ui9YSW55amp4d1BwWXlYbSt0dUtEOWYifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjA2MTYwNzYsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTENHIn0="
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
