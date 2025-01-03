const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_21_35_01_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTg3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNjAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNjIsXG4gICAgICAgIDI1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTc0LFxuICAgICAgICA3MyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMjksXG4gICAgICAgIDU5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIzLFxuICAgICAgICA5NyxcbiAgICAgICAgMjE4LFxuICAgICAgICA4MixcbiAgICAgICAgMTczLFxuICAgICAgICAxMjIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMyxcbiAgICAgICAgMzgsXG4gICAgICAgIDI5LFxuICAgICAgICA2NyxcbiAgICAgICAgMTgxLFxuICAgICAgICA2NyxcbiAgICAgICAgMTIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDIxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDM4LFxuICAgICAgICAxODIsXG4gICAgICAgIDgzLFxuICAgICAgICAzOCxcbiAgICAgICAgMjQxLFxuICAgICAgICA4MixcbiAgICAgICAgMjQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxODUsXG4gICAgICAgIDU2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgOTksXG4gICAgICAgIDE4MixcbiAgICAgICAgMjQxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTg5LFxuICAgICAgICA3NixcbiAgICAgICAgMTg4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgODYsXG4gICAgICAgIDMzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDkyLFxuICAgICAgICA4N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzQsXG4gICAgICAgIDgyLFxuICAgICAgICAyMzksXG4gICAgICAgIDkzLFxuICAgICAgICA1NyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTk4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDk5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDY4LFxuICAgICAgICAzOSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTA1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDc4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNDUsXG4gICAgICAgIDg5LFxuICAgICAgICAxMzksXG4gICAgICAgIDI5LFxuICAgICAgICAxOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDgyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTg1LFxuICAgICAgICA5MyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNzksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTg3LFxuICAgICAgICA5OSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDU5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDgxLFxuICAgICAgICA1MixcbiAgICAgICAgNzksXG4gICAgICAgIDcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgODdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMzLFxuICAgICAgICAxMjksXG4gICAgICAgIDE1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE5LFxuICAgICAgICA0MixcbiAgICAgICAgMjE5LFxuICAgICAgICA1LFxuICAgICAgICAxOTksXG4gICAgICAgIDUxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDcwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDc2LFxuICAgICAgICA2LFxuICAgICAgICAxMDksXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNTksXG4gICAgICAgIDk1LFxuICAgICAgICA3MSxcbiAgICAgICAgMTQ3LFxuICAgICAgICA0NyxcbiAgICAgICAgMTU0LFxuICAgICAgICA0NSxcbiAgICAgICAgMjUsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTQzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgOTcsXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzNixcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDcwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDYzLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgNThcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzNyxcbiAgICAgICAgMjI4LFxuICAgICAgICAyNixcbiAgICAgICAgMTI4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTk0LFxuICAgICAgICA5MCxcbiAgICAgICAgNTAsXG4gICAgICAgIDU1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEzLFxuICAgICAgICA0MixcbiAgICAgICAgNTksXG4gICAgICAgIDExMyxcbiAgICAgICAgMjE5LFxuICAgICAgICA4NyxcbiAgICAgICAgMjQ2LFxuICAgICAgICA5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMzEsXG4gICAgICAgIDMwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDY0LFxuICAgICAgICAxMyxcbiAgICAgICAgNTMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxODMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTg5LFxuICAgICAgICA3NCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNixcbiAgICAgICAgMjIwLFxuICAgICAgICA3MSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjU0LFxuICAgICAgICA1NCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNDgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxOTksXG4gICAgICAgIDEwNyxcbiAgICAgICAgNTQsXG4gICAgICAgIDgxLFxuICAgICAgICA5OCxcbiAgICAgICAgMjU0LFxuICAgICAgICA2NixcbiAgICAgICAgMjEwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDI3LFxuICAgICAgICA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMzYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwieHoxczU5WUIzQWk3M1ZFdWdiMHBvam9pU1hTbkU5MytuakV0NFVwaHpwTT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiZjdBdDRMY3hUVDJPZElWUTJqczBMd1wiLFxuICBcInBob25lSWRcIjogXCJjYTI4NWExMy01N2YzLTQ5MzctYTNjYy0zZjYyZDg1NzM2OGJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjIsXG4gICAgICAxOTQsXG4gICAgICA4NixcbiAgICAgIDc3LFxuICAgICAgMTUwLFxuICAgICAgMTcxLFxuICAgICAgNTEsXG4gICAgICAxNDksXG4gICAgICA4NCxcbiAgICAgIDIyNyxcbiAgICAgIDk2LFxuICAgICAgMTQ4LFxuICAgICAgMTAsXG4gICAgICAyNDEsXG4gICAgICAyNTUsXG4gICAgICAxMjMsXG4gICAgICAxMzcsXG4gICAgICAxNTIsXG4gICAgICAyMTQsXG4gICAgICAxNjVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjMxLFxuICAgICAgNDcsXG4gICAgICAxNjUsXG4gICAgICAyMDQsXG4gICAgICA0MyxcbiAgICAgIDEyMSxcbiAgICAgIDE5NCxcbiAgICAgIDE1MyxcbiAgICAgIDI1MixcbiAgICAgIDc1LFxuICAgICAgMjIyLFxuICAgICAgMjIxLFxuICAgICAgMTgsXG4gICAgICAxOCxcbiAgICAgIDEwMSxcbiAgICAgIDI0NCxcbiAgICAgIDE2NixcbiAgICAgIDExNyxcbiAgICAgIDIwNCxcbiAgICAgIDExXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIllLNVhGWkozXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDc4NDc3MTgwMTo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxODQ5NTQ2NDY0NjY3NzM6NEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKclA5ZUVERUlhdzRic0dHQU1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIllXYU9tOFI4ckVsWFRBcWQrdlZWOEpocWJ4RnBMeWZWYmM3K09pME5nR2c9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiOXM3QWF4TUZ0cmVNV2wrNlc3d2F2NjBaYWFFbUJGR2ZzSGxhRFdlSllOWG5SM1NKNzRsMHpOR2pHbWVtbDZjL1kxZHpBWEppUDdkY1pTWGpsSGpDRGc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiL2NVZXdaYmxxREdVS3lXUkV6UmxMV2o3cHE0bWY2VE8yT29hb0xMaC9UU1pXWXRtV0NzUEFva0JCd29HL1FvVEpoYXhESVZScTV2ZkpUR1R2SGNMQVE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTQ3ODQ3NzE4MDE6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMDRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNTk0MDEwNyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUd3SFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBR3dILmpzb24iOiAie1wia2V5RGF0YVwiOlwiY001LzRNbTVVcmROQnMvSXgyMHZiWmFIeFpyRko5OSsxRzBwNXY3QTFPYz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMDEwNjU3MTc4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzU5MzM1MTU1NzRcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
