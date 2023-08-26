/* 
 /************************* 
 * Pake tinggal make 
 * jangan hapus sumbernya 
 ************************** 
 * Github: FuadXyro
 * Wa: 083837709331 
 */
const util = require('util')
const moment = require("moment-timezone");
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
const fs = require("fs");
const { color } = require("../lib/color");
const { getBuffer, getRandom, getGroupAdmins,sleep} = require("../lib/myfunc");
const {TelegraPh} = require('../lib/uploader')
const fetch = require('node-fetch');
const chalk = require('chalk')
const bg = "https://tinyurl.com/y23xrfhu"
//require("../settings.js")

module.exports = async(client, anu) => {
try{
//
let jeda = false
if(jeda) return Log('anti spam welcome aktif')
jeda = true
  
if(anu.action == "remove" && anu.participants[0].split("@")[0].includes(client.user.id.split(":")[0]) ) return

const from = anu.id
const botNumber = client.user.id 
const groupMet = await client.groupMetadata(from)
const groupName = groupMet.subject  
const allmem = groupMet.participants.length
const mem = anu.participants[0];
const memNumber = mem.split("@")[0];
const timeWib = moment.tz("Asia/Jakarta").format("HH:mm");
const groupMembers = groupMet.participants;
const groupAdmins = getGroupAdmins(groupMembers);                
const pushname =  await client.getName(mem)
 const memb = groupMet.participants.length
  
const Add = anu.action == "add" 
const Remove = anu.action == "remove"
const OneMem = anu.participants.length === 1
const NotMe = !mem.includes(botNumber) 

const intro = `0ཻུ۪۪ꦽꦼ̷⸙‹•══════════════♡᭄\n│ Hy 😅 @${mem.split('@')[0]}\n│ Selamat Datang Di ${groupName}\n│ *「 Boleh Intro :v 」*\n│ *Nama    :* \n│ *Umur    :* \n│ *Asal    :* \n╰═════ꪶ ཻུ۪۪ꦽꦼ̷⸙ ━ ━ ━ ━ ━ ꪶ ཻུ۪۪ꦽꦼ̷⸙`
const outro = `╭─❒ 「  *SAYONARA* 」\n│ Jangan balik lagi ya!\n├ NAMA : @${mem.split('@')[0]}\n├ SISA PESERTA : ${memb}\n╰─────────⁛⸙`
let welcomer = (id) => {
client.sendMessage(id, {text: intro, mentions: [mem]})
}

let leaver = (id) => {
client.sendMessage(id, {text: outro, mentions: [mem]})
}

if(Add && OneMem && NotMe){
welcomer(from)

  
} else if(Remove && NotMe){      
leaver(from)
}

jeda = false

  
} catch (err) {
jeda = false
console.log(err)
let e = String(err) 
if (e.includes("this.isZero")) {return}
if (e.includes("rate-overlimit")) {return}
if (e.includes('Connection Closed')){ return }
if (e.includes('Timed Out')){ return }
console.log(color('GROUP : %s', 'white'), color(e, 'green'))
}   
}



let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})