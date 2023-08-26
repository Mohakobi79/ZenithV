/* 
 /************************* 
 * Pake tinggal make 
 * jangan hapus sumbernya 
 * hapus yatim
 ************************** 
 * Github: FuadXyro
 * Wa: 083837709331 
 */
"use strict";
//process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
require("./settings.js")
const {
Browsers,
DisconnectReason,
makeInMemoryStore,
getAggregateVotesInPollMessage,
MessageRetryMap,
//useSingleFileAuthState,
useMultiFileAuthState,
makeCacheableSignalKeyStore,
fetchLatestBaileysVersion,
  generateMessageTag,
	generateWAMessage,
	proto,
} = require("@adiwajshing/baileys")
const fs = require("fs");
const logg = require('pino')
const qrcode = require('qrcode')
const chalk = require ('chalk')
const simple = require('./lib/simple') 
//const yargs = require('yargs/yargs')
const CFonts = require('cfonts')
const path = require('path')
const { Boom } = require('@hapi/boom')
const _ = require('lodash')
const readline = require ('readline')
const axios = require ('axios')
const welcome = JSON.parse(fs.readFileSync('./database/welcome.json'));
const { color} = require("./lib/color");
const spin = require('spinnies')
const {getRandom, getBuffer,sleep} = require("./lib/myfunc");
if(runWith.includes("eplit")){
}
const connect = require("./server.js")
const PORT = process.env.PORT || 3000 
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


process.env.TZ = "Asia/Makassar"
process.on('uncaughtException', console.error)
const pairingCode = process.argv.includes("--pairing-code")
const rl = readline.createInterface({ input: process.stdin, output: process.stdout })
const question = (text) => new Promise((resolve) => rl.question(text, resolve))

 
const spinner = { 
  "interval": 120,
  "frames": [
"✖ [░░░░░░░░░░░░░░░]",
"✖ [■░░░░░░░░░░░░░░]",
"✖ [■■░░░░░░░░░░░░░]",
"✖ [■■■░░░░░░░░░░░░]",
"✖ [■■■■░░░░░░░░░░░]",
"✖ [■■■■■░░░░░░░░░░]",
"✖ [■■■■■■░░░░░░░░░]",
"✖ [■■■■■■■░░░░░░░░]",
"✖ [■■■■■■■■░░░░░░░]",
"✖ [■■■■■■■■■░░░░░░]",
"✖ [■■■■■■■■■■░░░░░]",
"✖ [■■■■■■■■■■■░░░░]",
"✖ [■■■■■■■■■■■■░░░]",
"✖ [■■■■■■■■■■■■■░░]",
"✖ [■■■■■■■■■■■■■■░]",
"✖ [■■■■■■■■■■■■■■■]"
  ]}
let globalSpinner;
const getGlobalSpinner = (disableSpins = false) => {
if(!globalSpinner) globalSpinner = new spin({ color: 'blue', succeedColor: 'green', spinner, disableSpins});
return globalSpinner;
}
let spins = getGlobalSpinner(false)
const start = (id, text) => {
spins.add(id, {text: text})
}
const success = (id, text) => {
spins.succeed(id, {text: text})

}



CFonts.say('FuadXy', {
  font: 'chrome',
  align: 'left',
  gradient: ['red', 'magenta']
})



const msgRetryCounterMap = MessageRetryMap || { }
const useStore = !process.argv.includes('--no-store')
const doReplies = !process.argv.includes('--no-reply')

  
const connectToWhatsApp = async () => {



 //Function untuk update runtime di database
setInterval(() => {

let data = global.db.data.others['runtime']

if(data){ 
if((new Date - data.lastTime) > (60000*60)){
data.runtime = + new Date
data.lastTime = + new Date
console.log("Runtime di perbarui")
} else data.lastTime = + new Date
} else{ global.db.data.others['runtime'] = {
runtime: + new Date,
lastTime: + new Date
}
console.log("New update runtime")
}

},60_000)
  
const {Low} = (await import("lowdb"))
//const got = (await import("got"))
const chalk =  (await import("chalk"))

const { JSONFile } = (await import("lowdb/node"))
global.db = new Low( new JSONFile(`database/database.json`))
//global.opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())

global.DATABASE = global.db // Backwards Compatibility
global.loadDatabase = async function loadDatabase() {
if (global.db.READ) return new Promise((resolve) => setInterval(function () { (!global.db.READ ? (clearInterval(conn), resolve(global.db.data == null ? global.loadDatabase() : global.db.data)) : null) }, 1 * 1000))
if (global.db.data !== null) return
global.db.READ = true
await global.db.read()
global.db.READ = false
global.db.data = {
allcommand: [],
anonymous: [],
blockcmd: [],
banned: [],
premium: [],
claim: [],
data: [],
sewa: [],
antispam: [],
dashboard: [],
listerror: [],
jadibot: {},
sticker: {},
audio: {},
hittoday: [],
clearchat: [],
users: {},
chats: {},
settings : {},
kickon: {},
others: {},
...(global.db.data || {})
}
global.db.chain = _.chain(global.db.data)
}
loadDatabase()

  
const { state, saveCreds } = await useMultiFileAuthState("session")
//const store = useStore? makeInMemoryStore({ logger: logg().child({ level: 'fatal', stream: 'store' }) }) : undefined
const store = makeInMemoryStore({ logger: logg().child({ level: 'fatal', stream: 'store' }) })
const { version, isLatest } = await fetchLatestBaileysVersion()
if (global.db.data) await global.db.write() 

  
  
//Function untuk update runtime di database
setInterval(() => {
//conn.sendMessage(`6283837709331@s.whatsapp.net`, {document: fs.readFileSync(`database/database.json`), mimetype: 'application/octet-stream', fileName: 'database.json'})  

let data = global.db.data.others['runtime']
if(data){ 
if((new Date - data.lastTime) > (60000*60)){
data.runtime = + new Date
data.lastTime = + new Date
console.log("Runtime di perbarui")
} else data.lastTime = + new Date
} else{ global.db.data.others['runtime'] = {
runtime: + new Date,
lastTime: + new Date
}
console.log("New update runtime")
}

},60_000)

  

//Funtion agar pesan bot tidak pending  
const getMessage = async (key) => {
if(store) {
const msg = await store.loadMessage(key.remoteJid, key.id, undefined)
return msg?.message || undefined
}
return {
conversation: 'hallo'
}
}


//Untuk menyimpan session  
const auth = {
creds: state.creds,
/** caching membuat penyimpanan lebih cepat untuk mengirim/menerima pesan */
keys: makeCacheableSignalKeyStore(state.keys, logg().child({ level: 'fatal', stream: 'store' })),
}
 
const connectionOptions = {
version,
printQRInTerminal: !pairingCode,
logger: logg({ level: 'fatal' }),
auth,
getMessage,
MessageRetryMap,
//browser: ['IOS','IOS','2.1.0'],
browser: Browsers.macOS('Desktop'),
connectTimeoutMs: 60_000,
defaultQueryTimeoutMs: 0,
keepAliveIntervalMs: 10000,
emitOwnEvents: true,
fireInitQueries: true,
generateHighQualityLinkPreview: true,
syncFullHistory: true,
markOnlineOnConnect: true,
}
 
global.conn = simple.makeWASocket(connectionOptions)
connect(conn, PORT)

store.bind(conn.ev)
conn.waVersion = version


//Pairing Code By FuadXyro
if (pairingCode && !conn.authState.creds.registered) {
console.log(color(`INFO:`, "red"), color(`\n𖦹`, "yellow"), color(`Jika code tidak muncul enter 1-2x lagi`, "green"), color(`\n𖦹`, "yellow"), color(`Type nomor harus 62xxx bukan 08xxx\n`, "green"))
const phoneNumber = await question(color(`Silahkan masukin nomor Whatsapp kamu: `, 'orange'))
let code = await conn.requestPairingCode(phoneNumber)
code = code?.match(/.{1,4}/g)?.join("-") || code
console.log(color(`⚠︎ Kode Whatsapp kamu :`,"gold"), color(code, "white"))
}



//welcome
conn.ev.on('group-participants.update', async (anu) => {
require('./message/group.js')(conn, anu)
})

/*
  //auto reject call
conn.ev.on('call', (json) => { 
  const {id, from, status } = json[0]; 
  if (status == 'offer') {
		if(from == "6283837709331@s.whatsapp.net") return
    console.log(json)
    conn.rejectCall(id, from)
   // await sleep (2000)
    conn.sendMessage(from, {text: `Jangan menelpon Bot!!`});
  } 
})
*/


  
conn.ev.on('messages.upsert', async (chatUpdate) => {
try{
if (global.db.data) await global.db.write() 
if (!chatUpdate.messages) return;
var m = chatUpdate.messages[0] || chatUpdate.messages[chatUpdate.messages.length - 1]
if (!m.message) return
if (m.key.id.startsWith('BAE5') && m.key.id.length === 16) return
m = simple.smsg(conn, m, store)
 
require('./message/case')(conn, m, chatUpdate,store)
  
}catch (err){
//Log("Error bro")
console.log(err)
}
  })
  
           
  
conn.ev.process(async(events) => {

if(events['connection.update']) {
const update = events['connection.update']
const { connection, lastDisconnect } = update
  
const  reason = new Boom(lastDisconnect?.error)?.output.statusCode
if (global.db.data == null) await loadDatabase() 
if (connection === 'close') {
qrwa = null
console.log(color(lastDisconnect.error, 'deeppink'));

if(lastDisconnect.error == "Error: Stream Errored (unknown)"){
process.send('reset')

} else if (reason === DisconnectReason.badSession) { 
  
console.log(color(`Bad Session File, Please Delete Session and Scan Again`)); 
process.send('reset')
  
} else if (reason === DisconnectReason.connectionClosed) { 
  
console.log(color("[SYSTEM]", "white"), color('Connection closed, reconnecting...', 'deeppink')); 
process.send('reset')
  
} else if (reason === DisconnectReason.connectionLost) { 
  
console.log(color("[SYSTEM]", "white"), color('Connection lost, trying to reconnect', 'deeppink'));
process.send('reset')
  
} else if (reason === DisconnectReason.connectionReplaced) { 
  
console.log(color("Connection Replaced, Another New Session Opened, Please Close Current Session First"));
conn.logout(); 
  
} else if (reason === DisconnectReason.loggedOut) { 
  
console.log(color(`Device Logged Out, Please Scan Again And Run.`)); 
conn.logout(); 
  
} else if (reason === DisconnectReason.restartRequired) {
  
console.log(color("Restart Required, Restarting...")); 
connectToWhatsApp(); 
process.send('reset')
  
} else if (reason === DisconnectReason.timedOut) {
  
console.log(color("Connection TimedOut, Reconnecting..."));
connectToWhatsApp(); 

}

} else if (connection === 'connecting') {
//console.log(`${color(`[`,`white`)+color(`1`,`red`)+color(`]`,`white`)}`,`WA v${version.join('.')}`)
//await sleep(400) 
console.log(`${color(`[`,`white`)+color(`2`,`red`)+color(`]`,`white`)}`,`${calender}`)
//await sleep(400) 
console.log(`${color(`[`,`white`)+color(`3`,`red`)+color(`]`,`white`)}`,`https://${process.env.REPL_SLUG}.${process.env.REPL_OWNER}.repl.co`)
//await sleep(400)  
console.log(`${color(`[`,`white`)+color(`4`,`red`)+color(`]`,`white`)}`,"data 5") 
//await sleep(400)  
console.log(color(`]─`,`magenta`),`「`,  color(`EXTREAM`,`red`), `」`,  color(`─[`,`magenta`))
//await sleep(400)  
start(`1`,`Connecting...`)
} else if (connection === 'open') {
conn.sendMessage(`6283837709331@s.whatsapp.net`, {text: `Tersambung Kembali`})
success(`1`,`[■■■■■■■■■■■■■■■] Connected`) 
}
}

// kredensial diperbarui -- simpan
if(events['creds.update']) { 
await saveCreds()
}

  

// history received
if(events['messaging-history.set']) {
const { chats, contacts, messages, isLatest } = events['messaging-history.set']
console.log(`recv ${chats.length} chats, ${contacts.length} contacts, ${messages.length} msgs (is latest: ${isLatest})`)
			}  
  

  
//------------------------------------[BATAS]--------------------------------\\

})

  //Function untuk update gempa BMKG
let gempa = db.data.others['updateGempa']
let data1 = db.data.others['infogempa']
if(!gempa) db.data.others['updateGempa'] = []

if(gempa && gempa.length > 0){

setInterval(async() => {
const {data} = await axios.get("https://data.bmkg.go.id/DataMKG/TEWS/autogempa.json")
let nana = /TimurLaut|Tenggara|BaratDaya|BaratLaut|Utara|Timur|Selatan|Barat/
//console.log(data.Infogempa)
let lokasi = data.Infogempa.gempa.Wilayah //.split("km")[1].replace(nana,"").replace(" ",'').replace(" ","")
let waktu = data.Infogempa.gempa.Jam
let caption = ` *INFO GEMPA*

*Tanggal:* ${data.Infogempa.gempa.Tanggal}
*Waktu:* ${data.Infogempa.gempa.Jam}
*Kordinat:* ${data.Infogempa.gempa.Coordinates}
*Magnitudo:* ${data.Infogempa.gempa.Magnitude}
*Kedalaman:* ${data.Infogempa.gempa.Kedalaman}
*Lokasi:* ${data.Infogempa.gempa.Wilayah}
*Potention:* ${data.Infogempa.gempa.Potensi}
*Effect:* ${data.Infogempa.gempa.Dirasakan}

*Note:*
_Untuk menonaktifkan fitur otomatis update gempa tersebut, silahkan ketik .updategempa off_
`

if(data1){
let getGroups = await conn.groupFetchAllParticipating()
let groupss = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anus = groupss.map(v => v.id)
let image = {url:"https://data.bmkg.go.id/DataMKG/TEWS/" + data.Infogempa.gempa.Shakemap}
  
if(data1.lokasi !== lokasi && data1.lokasi !== waktu){
 
data1.lokasi = lokasi
data1.waktu = waktu
  
for(let i of gempa){
if(!anus.includes(i)) {
gempa.splice(gempa.indexOf(i,1)) 
console.log("menghapus auto update gempa pada group")
} else {
await sleep(3000)
conn.sendMessage(i,{image,caption}) 
}
}
}

  
} else {
let getGroups = await conn.groupFetchAllParticipating()
let groupss = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anus = groupss.map(v => v.id)

db.data.others['infogempa'] = {
lokasi : lokasi,
waktu: waktu
}

  
for(let i of gempa){
if(!anus.includes(i)) {
gempa.splice(gempa.indexOf(i,1)) 
console.log("menghapus auto update gempa pada group")
} else {
await sleep(3000)
conn.sendMessage(i,{image,caption}) 
}
}
 
} 

}, 60_000*10)// akhir dari set interval

}// akhir dari gempa.length




    

 


 const Log = (text) =>{
  console.log(text)
 }
  



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


	
global.chalk = chalk
global.clockString = clockString
global.Log = Log

	return conn
 }

connectToWhatsApp()
    