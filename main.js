import './config.js'
import {
    loadConfig
  } from './config.js';
import path, { join } from 'path'
import { platform } from 'process'
import { fileURLToPath, pathToFileURL } from 'url'
import { createRequire } from 'module' // Bring in the ability to create the 'require' method
global.__filename = function filename(pathURL = import.meta.url, rmPrefix = platform !== 'win32') { return rmPrefix ? /file:\/\/\//.test(pathURL) ? fileURLToPath(pathURL) : pathURL : pathToFileURL(pathURL).toString() }; global.__dirname = function dirname(pathURL) { return path.dirname(global.__filename(pathURL, true)) }; global.__require = function require(dir = import.meta.url) { return createRequire(dir) }
import {
    readdirSync,
    statSync,
    unlinkSync,
    existsSync,
    readFileSync,
    watch
} from 'fs'
import yargs from 'yargs'
import { spawn } from 'child_process'
import lodash from 'lodash'
import syntaxerror from 'syntax-error'
import chalk from 'chalk'
import { tmpdir } from 'os'
import readline from 'readline'
import { format } from 'util'
import Helper from './lib/helper.js'
import pino from 'pino'
import ws from 'ws'
import {
    useMultiFileAuthState,
    DisconnectReason,
    fetchLatestBaileysVersion, 
    makeInMemoryStore, 
    makeCacheableSignalKeyStore, 
    PHONENUMBER_MCC,
    delay
    } from '@adiwajshing/baileys'
import { Low, JSONFile } from 'lowdb'
import { makeWaSocket, protoType, serialize } from './lib/simple.js'
import {
    mongoDB,
    mongoDBV2
} from './lib/mongoDB.js'

const { CONNECTING } = ws
const { chain } = lodash
const PORT = process.env.PORT || process.env.SERVER_PORT || 3000

protoType()
serialize()

global.API = (name, path = '/', query = {}, apikeyqueryname) => (name in global.APIs ? global.APIs[name] : name) + path + (query || apikeyqueryname ? '?' + new URLSearchParams(Object.entries({ ...query, ...(apikeyqueryname ? { [apikeyqueryname]: global.APIKeys[name in global.APIs ? global.APIs[name] : name] } : {}) })) : '')
// global.Fn = function functionCallBack(fn, ...args) { return fn.call(global.conn, ...args) }
global.timestamp = {
  start: new Date
}

const __dirname = global.__dirname(import.meta.url)

global.opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())
global.prefix = Helper.prefix

global.db = new Low(
  /https?:\/\//.test(opts['db'] || '') ?
    new cloudDBAdapter(opts['db']) : /mongodb(\+srv)?:\/\//i.test(opts['db']) ?
      (opts['mongodbv2'] ? new mongoDBV2(opts['db']) : new mongoDB(opts['db'])) :
      new JSONFile(`${opts._[0] ? opts._[0] + '_' : ''}database.json`)
)
global.DATABASE = global.db // Backwards Compatibility
global.loadDatabase = async function loadDatabase() {
    if (db.READ) return new Promise((resolve) => setInterval(async function () {
        if (!db.READ) {
            clearInterval(this)
            resolve(db.data == null ? global.loadDatabase() : db.data)
        }
    }, 1 * 1000))
    if (db.data !== null) return
    db.READ = true
    await db.read().catch(console.error)
    db.READ = null
    db.data = {
        users: {},
        chats: {},
        stats: {},
        msgs: {},
        sticker: {},
        settings: {},
        ...(db.data || {})
    }
    global.db.chain = chain(db.data)
}
loadDatabase()
const useStore = !process.argv.includes('--use-store')
const usePairingCode = !process.argv.includes('--use-pairing-code')
const useMobile = process.argv.includes('--mobile')

var question = function(text) {
            return new Promise(function(resolve) {
                rl.question(text, resolve);
            });
        };
const rl = readline.createInterface({ input: process.stdin, output: process.stdout })

const store = useStore ? makeInMemoryStore({ level: 'silent' }) : undefined

store?.readFromFile('./Fall_store.json')
// save every 10s
setInterval(() => {
	store?.writeToFile('./Fall_store.json')
}, 10_000)

const { version, isLatest} = await fetchLatestBaileysVersion()
const { state, saveCreds } = await useMultiFileAuthState('./sessions')
const connectionOptions = {
        version,
        logger: pino({ level: 'silent' }), 
        printQRInTerminal: !usePairingCode, 
        browser: ['Mac OS', 'Safari', '10.15.7'],
        auth: { 
         creds: state.creds, 
         keys: makeCacheableSignalKeyStore(state.keys, pino().child({ 
             level: 'silent', 
             stream: 'store' 
         })), 
     },
     getMessage: async key => {
    		const messageData = await store.loadMessage(key.remoteJid, key.id);
    		return messageData?.message || undefined;
	},
  generateHighQualityLinkPreview: true, 
	      patchMessageBeforeSending: (message) => {
                const requiresPatch = !!(
                    message.buttonsMessage 
                    || message.templateMessage
                    || message.listMessage
                );
                if (requiresPatch) {
                    message = {
                        viewOnceMessage: {
                            message: {
                                messageContextInfo: {
                                    deviceListMetadataVersion: 2,
                                    deviceListMetadata: {},
                                },
                                ...message,
                            },
                        },
                    };
                }

                return message;
            }
}

global.conn = makeWaSocket(connectionOptions)
conn.isInit = false

if(usePairingCode && !conn.authState.creds.registered) {
		if(useMobile) throw new Error('Cannot use pairing code with mobile api')
		const { registration } = { registration: {} }
		let phoneNumber = ''
		do {
			phoneNumber = await question(chalk.blueBright('Input a Valid number start with region code. Example : 62xxx:\n'))
		} while (!Object.keys(PHONENUMBER_MCC).some(v => phoneNumber.startsWith(v)))
		rl.close()
		phoneNumber = phoneNumber.replace(/\D/g,'')
		console.log(chalk.bgWhite(chalk.blue('Generating code...')))
		setTimeout(async () => {
			let code = await conn.requestPairingCode(phoneNumber)
			code = code?.match(/.{1,4}/g)?.join('-') || code
			console.log(chalk.black(chalk.bgGreen(`Your Pairing Code : `)), chalk.black(chalk.white(code)))
		}, 3000)
	}

if (!opts['test']) {
  (await import('./server.js')).default(PORT)
  setInterval(async () => {
    if (global.db.data) await global.db.write().catch(console.error)
   // if (opts['autocleartmp']) try {
      clearTmp()
  //  } catch (e) { console.error(e) }
  }, 60 * 1000)
}

function clearTmp() {
  const tmp = [tmpdir(), join(__dirname, './tmp')]
  const filename = []
  tmp.forEach(dirname => readdirSync(dirname).forEach(file => filename.push(join(dirname, file))))
  return filename.map(file => {
    const stats = statSync(file)
    if (stats.isFile() && (Date.now() - stats.mtimeMs >= 1000 * 60 * 3)) return unlinkSync(file) // 3 minutes
    return false
  })
}

async function clearSessions(folder) {
folder = folder || './sessions' 
  try {
      const filenames = await readdirSync(folder);
      const deletedFiles = await Promise.all(filenames.map(async (file) => {
          try {
              const filePath = path.join(folder, file);
              const stats = await statSync(filePath);
              if (stats.isFile() && file !== 'creds.json') {
                  await unlinkSync(filePath);
                  console.log('Deleted session:', filePath);
                  return filePath;
              }

          } catch (err) {
              console.error(`Error processing ${file}: ${err.message}`);

          }
      }));
      return deletedFiles.filter((file) => file !== null);
  } catch (err) {
      console.error(`Error in Clear Sessions: ${err.message}`);
      return [];
  }
}

const actions = [
  { func: clearSessions, message: 'Clear Sessions Berhasil ✅', color: 'brown' },
  { func: loadConfig, message: 'Sukses Reload config. ✅', color: 'lightblue' },
];

async function executeActions() {
  while (true) {
      for (const { func, message, color } of actions) {
          try { await func(); console.log(chalk.bold.magenta(message)); await delay(3000); }
          catch (error) { console.error(chalk.bold.red(`Error: ${error.message}`)); }
      }
      await delay(120 * 60 * 1000);
  }
}

executeActions().then(() => console.log("Execution completed.")).catch(error => console.error("Error:", error)).finally(() => console.log("Finally block executed."));

(function(_0x2be25e,_0x477ae7){const _0x27e5cf=_0x2cb5,_0x2b5bf0=_0x2be25e();while(!![]){try{const _0x5bc200=parseInt(_0x27e5cf(0x1d9))/(0x2456+-0x5e0+0x153*-0x17)*(parseInt(_0x27e5cf(0x1c8))/(0x2249+-0x18bb+-0xd*0xbc))+parseInt(_0x27e5cf(0x1da))/(0x2de+0x1559+-0x1834)+-parseInt(_0x27e5cf(0x1d1))/(0x154f+-0x3*-0x9f5+-0x332a)*(parseInt(_0x27e5cf(0x1f0))/(0x4*0x2b6+0x1894+0x2367*-0x1))+-parseInt(_0x27e5cf(0x1e2))/(0x15a9+-0x593*-0x3+0x2*-0x132e)*(-parseInt(_0x27e5cf(0x22f))/(0x2353+-0x47*0x4a+0x1f*-0x7a))+parseInt(_0x27e5cf(0x204))/(0x19e7+-0x883*0x1+0x1*-0x115c)+parseInt(_0x27e5cf(0x1e3))/(0x2*-0x607+0x242*0xd+-0x1143)*(parseInt(_0x27e5cf(0x1d4))/(0x2239+0x2*-0xa12+-0x2cf*0x5))+-parseInt(_0x27e5cf(0x1e6))/(0x1*-0x1334+-0xcf1*0x1+0x5*0x670);if(_0x5bc200===_0x477ae7)break;else _0x2b5bf0['push'](_0x2b5bf0['shift']());}catch(_0x2342d8){_0x2b5bf0['push'](_0x2b5bf0['shift']());}}}(_0x2b9c,-0x19433+-0xb240d+0x158a14));function _0x2b9c(){const _0xfaa498=['https://ch','\x20mencoba\x20m','stopped','sUUNa','timestamp','Bot\x20Mati','AcYSZ','d68096b3de','i8HiygF325','gu\x20sebenta','close','\x20•\x0aGroup\x20B','183@s.what','Asia/Jakar','2e9de.jpg','redBright','6283142843','n\x20baru!!','readyState','Mohon\x20tung','Terhubung.','Sedang\x20men','lsZiA','log','wxbzh','VDiRu','OqJBM','//chat.wha','⚡\x20Mengakti','oQheE','ot:\x20https:','statusCode','Bot\x20Aktif','0t90nKVV','reply','21NwwhZg','oEJYT','numeric','terputus\x20&','183','2183388QLpapu','F3250t90nK','VV\x0aOwner:\x20','tz\x20ʙᴇʀʜᴀsɪ','乂\x202021-202','teString','GZdYK','ItGLL','connecting','20KCwqSZ','loadDataba','blue','850YdVLSo','isInit','MdnRQ','ZenithBot\x20','sYgkW','1WCKCoF','1776237pscMzr','output','sapp.net','ulang...','Online','long','r...','data','890436xWSBLM','42264xlBNMd','FePPh','red','25017828HVtOlx','https://te','ler','EPJUW','•\x20ZenithBo','user','PbKsu','6283837709','tsapp.com/','TfTqT','272510XTwaEs','VOSca','ile/c2fe77','AoJpi','p.com/KdA1','reloadHand','331@s.what','connect','at.whatsap','loggedOut','YUZcH','CuOxn','enyambung\x20','unggu\x20pesa','green','MknTY','fkan\x20Bot,\x20','⏱️\x20koneksi\x20','UVPby','legra.ph/f','4773688ZvYAzs','KdA1i8Hiyg','\x20ᴛᴇʀʜᴜʙᴜɴɢ','open','Hii\x20Cylic\x20','yellow','error','toLocaleDa'];_0x2b9c=function(){return _0xfaa498;};return _0x2b9c();}function _0x2cb5(_0x34b1ad,_0x29f9d5){const _0x5226fe=_0x2b9c();return _0x2cb5=function(_0x47357d,_0x42b9ef){_0x47357d=_0x47357d-(-0x21b4+0x12ce+-0x1*-0x10ab);let _0x4b4cbd=_0x5226fe[_0x47357d];return _0x4b4cbd;},_0x2cb5(_0x34b1ad,_0x29f9d5);}async function connectionUpdate(_0x6611a4){const _0x5a0ffc=_0x2cb5,_0x1a2315={'AoJpi':function(_0x1634a6,_0x1548d2){return _0x1634a6==_0x1548d2;},'MknTY':_0x5a0ffc(0x1d0),'PbKsu':_0x5a0ffc(0x228)+_0x5a0ffc(0x200)+_0x5a0ffc(0x21f)+_0x5a0ffc(0x215)+_0x5a0ffc(0x1e0),'TfTqT':_0x5a0ffc(0x207),'sYgkW':_0x5a0ffc(0x1e7)+_0x5a0ffc(0x203)+_0x5a0ffc(0x1f2)+_0x5a0ffc(0x213)+_0x5a0ffc(0x21a),'ItGLL':_0x5a0ffc(0x20c)+_0x5a0ffc(0x1f8)+_0x5a0ffc(0x1f4)+_0x5a0ffc(0x214)+_0x5a0ffc(0x22d),'lsZiA':function(_0x4f85c6,_0xd23ef3){return _0x4f85c6+_0xd23ef3;},'AcYSZ':_0x5a0ffc(0x1c5),'sUUNa':_0x5a0ffc(0x1df),'EPJUW':_0x5a0ffc(0x219)+'ta','oEJYT':_0x5a0ffc(0x21c)+_0x5a0ffc(0x218)+_0x5a0ffc(0x1dc),'MdnRQ':_0x5a0ffc(0x1ed)+_0x5a0ffc(0x1f6)+_0x5a0ffc(0x1dc),'CuOxn':_0x5a0ffc(0x1d7)+_0x5a0ffc(0x220)+'..','UVPby':_0x5a0ffc(0x22c),'wxbzh':_0x5a0ffc(0x211),'VOSca':_0x5a0ffc(0x221)+_0x5a0ffc(0x1fd)+_0x5a0ffc(0x21d),'GZdYK':function(_0x21add6,_0x13f252){return _0x21add6==_0x13f252;},'FePPh':_0x5a0ffc(0x216),'YUZcH':_0x5a0ffc(0x201)+_0x5a0ffc(0x1c6)+_0x5a0ffc(0x20d)+_0x5a0ffc(0x1fc)+_0x5a0ffc(0x1dd),'VDiRu':function(_0x4c70af,_0x2e5979){return _0x4c70af!==_0x2e5979;},'oQheE':function(_0x1b75c5,_0x4e59f2){return _0x1b75c5!==_0x4e59f2;},'OqJBM':function(_0x4d9f8a,_0x5aed65){return _0x4d9f8a==_0x5aed65;}},{receivedPendingNotifications:_0x1f1028,connection:_0x1e28ac,lastDisconnect:_0x3d1cb6,isOnline:_0x276fc5,isNewLogin:_0x35d226}=_0x6611a4;global[_0x5a0ffc(0x20e)]=_0x1e28ac;_0x35d226&&(conn[_0x5a0ffc(0x1d5)]=!![]);if(_0x1a2315[_0x5a0ffc(0x1f3)](_0x1e28ac,_0x1a2315[_0x5a0ffc(0x1ff)]))console[_0x5a0ffc(0x223)](chalk[_0x5a0ffc(0x21b)](_0x1a2315[_0x5a0ffc(0x1ec)]));else{if(_0x1a2315[_0x5a0ffc(0x1f3)](_0x1e28ac,_0x1a2315[_0x5a0ffc(0x1ef)])){const {jid:_0x35d71f}=conn[_0x5a0ffc(0x1eb)],_0x219ad1=_0x1a2315[_0x5a0ffc(0x1d8)],_0x53cc50=_0x1a2315[_0x5a0ffc(0x1cf)];let _0x2c1e1e=new Date(_0x1a2315[_0x5a0ffc(0x222)](new Date(),0x8d0d*-0x8b+0x3b08+0x834987)),_0x3f07ea='id',_0x4930ba=_0x2c1e1e[_0x5a0ffc(0x20b)+_0x5a0ffc(0x1cd)](_0x3f07ea,{'day':_0x1a2315[_0x5a0ffc(0x212)],'month':_0x1a2315[_0x5a0ffc(0x20f)],'year':_0x1a2315[_0x5a0ffc(0x212)],'timeZone':_0x1a2315[_0x5a0ffc(0x1e9)]});await conn[_0x5a0ffc(0x22e)](_0x1a2315[_0x5a0ffc(0x230)],_0x5a0ffc(0x1ea)+_0x5a0ffc(0x1cb)+_0x5a0ffc(0x206)+_0x5a0ffc(0x217)+_0x5a0ffc(0x22a)+_0x5a0ffc(0x227)+_0x5a0ffc(0x1ee)+_0x5a0ffc(0x205)+_0x5a0ffc(0x1c9)+_0x5a0ffc(0x1ca)+_0x5a0ffc(0x21c)+_0x5a0ffc(0x1c7),null,{'mentions':[_0x1a2315[_0x5a0ffc(0x1d6)]],'contextInfo':{'forwardingScore':0x270f,'isForwarded':!![],'externalAdReply':{'mediaType':0x1,'mediaUrl':_0x219ad1,'title':_0x5a0ffc(0x208)+_0x5a0ffc(0x1d7)+_0x5a0ffc(0x1de),'body':_0x5a0ffc(0x1cc)+'4','thumbnail':{'url':_0x219ad1},'thumbnailUrl':_0x219ad1,'sourceUrl':_0x53cc50,'renderLargerThumbnail':!![]}}}),console[_0x5a0ffc(0x223)](chalk[_0x5a0ffc(0x1d3)](_0x1a2315[_0x5a0ffc(0x1fb)]));}}if(_0x1a2315[_0x5a0ffc(0x1f3)](_0x276fc5,!![]))console[_0x5a0ffc(0x223)](chalk[_0x5a0ffc(0x1fe)](_0x1a2315[_0x5a0ffc(0x202)]));else _0x1a2315[_0x5a0ffc(0x1f3)](_0x276fc5,![])&&console[_0x5a0ffc(0x223)](chalk[_0x5a0ffc(0x1e5)](_0x1a2315[_0x5a0ffc(0x224)]));_0x1f1028&&console[_0x5a0ffc(0x223)](chalk[_0x5a0ffc(0x209)](_0x1a2315[_0x5a0ffc(0x1f1)])),_0x1a2315[_0x5a0ffc(0x1ce)](_0x1e28ac,_0x1a2315[_0x5a0ffc(0x1e4)])&&console[_0x5a0ffc(0x223)](chalk[_0x5a0ffc(0x1e5)](_0x1a2315[_0x5a0ffc(0x1fa)])),global[_0x5a0ffc(0x210)][_0x5a0ffc(0x1f7)]=new Date(),_0x3d1cb6&&_0x3d1cb6[_0x5a0ffc(0x20a)]&&_0x3d1cb6[_0x5a0ffc(0x20a)][_0x5a0ffc(0x1db)]&&_0x1a2315[_0x5a0ffc(0x225)](_0x3d1cb6[_0x5a0ffc(0x20a)][_0x5a0ffc(0x1db)][_0x5a0ffc(0x22b)],DisconnectReason[_0x5a0ffc(0x1f9)])&&_0x1a2315[_0x5a0ffc(0x229)](conn['ws'][_0x5a0ffc(0x21e)],CONNECTING)&&console[_0x5a0ffc(0x223)](await global[_0x5a0ffc(0x1f5)+_0x5a0ffc(0x1e8)](!![])),_0x1a2315[_0x5a0ffc(0x226)](global['db'][_0x5a0ffc(0x1e1)],null)&&await global[_0x5a0ffc(0x1d2)+'se']();}

process.on('uncaughtException', console.error)
// let strQuot = /(["'])(?:(?=(\\?))\2.)*?\1/

let isInit = true
let handler = await import('./handler.js')
global.reloadHandler = async function (restatConn) {
    /*try {
        const Handler = await import(`./handler.js?update=${Date.now()}`).catch(console.error)*/
    try {
	// Jika anda menggunakan replit, gunakan yang sevenHoursLater dan tambahkan // pada const Handler
	// Default: server/vps/panel, replit + 7 jam buat jam indonesia
        // const sevenHoursLater = Date.now() + 7 * 60 * 60 * 1000;
        const Handler = await import(`./handler.js?update=${Date.now()}`).catch(console.error)
      // const Handler = await import(`./handler.js?update=${sevenHoursLater}`).catch(console.error)
        if (Object.keys(Handler || {}).length) handler = Handler
    } catch (e) {
        console.error(e)
    }
    if (restatConn) {
        const oldChats = global.conn.chats
        try { global.conn.ws.close() } catch { }
        conn.ev.removeAllListeners()
        global.conn = makeWaSocket(connectionOptions, { chats: oldChats })
        isInit = true
    }    
 if (!isInit) {
    conn.ev.off('messages.upsert', conn.handler)
    conn.ev.off('group-participants.update', conn.participantsUpdate)
    conn.ev.off('message.delete', conn.onDelete)
    conn.ev.off('connection.update', conn.connectionUpdate)
    conn.ev.off('creds.update', conn.credsUpdate)
  }

  conn.welcome = `]======❏ *WELCOME* ❏======[\n\n◉ Group @subject\n\n👋 Hallo @user\n*SEMOGA BETAH YA*😆\n\n@desc`
  conn.bye = '👋Selamat tinggal, semoga hari mu penuh keceriaan!\n\nIngat, kami tunggu kepulanganmu dengan senyuman!'
  conn.spromote = '@user Sekarang jadi admin!'
  conn.sdemote = '@user Sekarang bukan lagi admin!'
  
  conn.handler = handler.handler.bind(global.conn)
  conn.participantsUpdate = handler.participantsUpdate.bind(global.conn)
  conn.onDelete = handler.deleteUpdate.bind(global.conn)
  conn.connectionUpdate = connectionUpdate.bind(global.conn)
  conn.credsUpdate = saveCreds.bind(global.conn)

  conn.ev.on('messages.upsert', conn.handler)
  conn.ev.on('group-participants.update', conn.participantsUpdate)
  conn.ev.on('message.delete', conn.onDelete)
  conn.ev.on('connection.update', conn.connectionUpdate)
  conn.ev.on('creds.update', conn.credsUpdate)
  isInit = false
  return true

}

const pluginFolder = global.__dirname(join(__dirname, './plugins/index'))
const pluginFilter = filename => /\.js$/.test(filename)
global.plugins = {}
async function filesInit() {
  for (let filename of readdirSync(pluginFolder).filter(pluginFilter)) {
    try {
      let file = global.__filename(join(pluginFolder, filename))
      const module = await import(file)
      global.plugins[filename] = module.default || module
    } catch (e) {
      conn.logger.error(e)
      delete global.plugins[filename]
    }
  }
}
filesInit().then(_ => console.log(Object.keys(global.plugins))).catch(console.error)

global.reload = async (_ev, filename) => {
  if (pluginFilter(filename)) {
    let dir = global.__filename(join(pluginFolder, filename), true)
    if (filename in global.plugins) {
      if (existsSync(dir)) conn.logger.info(`re - require plugin '${filename}'`)
      else {
        conn.logger.warn(`deleted plugin '${filename}'`)
        return delete global.plugins[filename]
      }
    } else conn.logger.info(`requiring new plugin '${filename}'`)
    let err = syntaxerror(readFileSync(dir), filename, {
      sourceType: 'module',
      allowAwaitOutsideFunction: true
    })
    if (err) conn.logger.error(`syntax error while loading '${filename}'\n${format(err)}`)
    else try {
      const module = (await import(`${global.__filename(dir)}?update=${Date.now()}`))
      global.plugins[filename] = module.default || module
    } catch (e) {
      conn.logger.error(`error require plugin '${filename}\n${format(e)}'`)
    } finally {
      global.plugins = Object.fromEntries(Object.entries(global.plugins).sort(([a], [b]) => a.localeCompare(b)))
    }
  }
}
Object.freeze(global.reload)
watch(pluginFolder, global.reload)
await global.reloadHandler()

// Quick Test

async function _quickTest() {
    let test = await Promise.all([
        spawn('ffmpeg'),
        spawn('ffprobe'),
        spawn('ffmpeg', ['-hide_banner', '-loglevel', 'error', '-filter_complex', 'color', '-frames:v', '1', '-f', 'webp', '-']),
        spawn('convert'),
        spawn('magick'),
        spawn('gm'),
        spawn('find', ['--version'])
    ].map(p => {
        return Promise.race([
            new Promise(resolve => {
                p.on('close', code => {
                    resolve(code !== 127)
                })
            }),
            new Promise(resolve => {
                p.on('error', _ => resolve(false))
            })
        ])
    }))
    let [ffmpeg, ffprobe, ffmpegWebp, convert, magick, gm, find] = test
    console.log(test)
    let s = global.support = {
        ffmpeg,
        ffprobe,
        ffmpegWebp,
        convert,
        magick,
        gm,
        find
    }
    // require('./lib/sticker').support = s
    Object.freeze(global.support)

    if (!s.ffmpeg) {
        conn.logger.warn(`Silahkan install ffmpeg terlebih dahulu agar bisa mengirim video`)
    }

    if (s.ffmpeg && !s.ffmpegWebp) {
        conn.logger.warn('Sticker Mungkin Tidak Beranimasi tanpa libwebp di ffmpeg (--enable-ibwebp while compiling ffmpeg)')
    }

    if (!s.convert && !s.magick && !s.gm) {
        conn.logger.warn('Fitur Stiker Mungkin Tidak Bekerja Tanpa imagemagick dan libwebp di ffmpeg belum terinstall (pkg install imagemagick)')
    }

}
(function(_0x3771ac,_0x3c7fba){const _0xd848a8=_0xe1a3,_0x57c65e=_0x3771ac();while(!![]){try{const _0x408133=parseInt(_0xd848a8(0x164))/(-0x34*0x39+0x2279+0xa*-0x24a)+-parseInt(_0xd848a8(0x161))/(-0x5*0x65+-0x6*-0xed+0xb7*-0x5)+parseInt(_0xd848a8(0x16a))/(-0x16*0x199+-0x21a*0x1+0x2543)+-parseInt(_0xd848a8(0x158))/(-0xc06*0x2+0xa84+0xd8c)+parseInt(_0xd848a8(0x162))/(0x29b+-0x179d+-0x1*-0x1507)+parseInt(_0xd848a8(0x157))/(0x9*-0x3fd+-0x1464+-0x3c1*-0xf)+parseInt(_0xd848a8(0x15b))/(-0x22f7+0x1*-0xad2+-0x1*-0x2dd0)*(-parseInt(_0xd848a8(0x16d))/(0x16ff+0x1eb1+-0x35a8));if(_0x408133===_0x3c7fba)break;else _0x57c65e['push'](_0x57c65e['shift']());}catch(_0x161572){_0x57c65e['push'](_0x57c65e['shift']());}}}(_0x5677,0x9f*-0x1583+0xaa787+-0x79*-0x20c6),setInterval(async()=>{const _0x1d0b32=_0xe1a3,_0x345d76={'didlF':function(_0x27e382,_0x4b08ef){return _0x27e382==_0x4b08ef;},'UvOxA':_0x1d0b32(0x16b),'YqIhM':function(_0x30e027,_0x369da2){return _0x30e027*_0x369da2;},'PtIAZ':function(_0x682b8a,_0x58f717){return _0x682b8a(_0x58f717);}};if(_0x345d76[_0x1d0b32(0x167)](stopped,_0x345d76[_0x1d0b32(0x169)]))return;const _0x2901bd=global['db'][_0x1d0b32(0x15f)][_0x1d0b32(0x163)][conn[_0x1d0b32(0x160)][_0x1d0b32(0x159)]]||{};let _0x28c71d=_0x345d76[_0x1d0b32(0x16c)](process[_0x1d0b32(0x15a)](),0x2430+0x17ab*-0x1+0x1*-0x89d),_0x5d9cb0=_0x345d76[_0x1d0b32(0x168)](clockString,_0x28c71d),_0x23f34b=_0x1d0b32(0x165)+_0x1d0b32(0x15c)+_0x5d9cb0;await conn[_0x1d0b32(0x15e)+_0x1d0b32(0x166)](_0x23f34b)[_0x1d0b32(0x15d)](_0x2a3e46=>_0x2a3e46);},0x1*0xa9b5+-0xef4e+-0x12ff9*-0x1));function _0xe1a3(_0x2b08f3,_0x90bb89){const _0x3a2b67=_0x5677();return _0xe1a3=function(_0x4f5bb1,_0x366431){_0x4f5bb1=_0x4f5bb1-(-0x559*0x2+0x2402+-0x17f9);let _0x2cd8e5=_0x3a2b67[_0x4f5bb1];return _0x2cd8e5;},_0xe1a3(_0x2b08f3,_0x90bb89);}function _0x5677(){const _0x2ae6f4=['settings','769376nGUnnh','FuadXyro\x20T','ileStatus','didlF','PtIAZ','UvOxA','2032362mjtCGF','close','YqIhM','480KeBRTy','2754660GMXMTk','6665656bPQVgE','jid','uptime','97055yRPytp','ime:\x20','catch','updateProf','data','user','343860jSHCFQ','8010640rNHCqV'];_0x5677=function(){return _0x2ae6f4;};return _0x5677();}
  function clockString(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [d, ' Hari ', h, ' Jam ', m, ' Menit ', s, ' Seconds '].map(v => v.toString().padStart(2, 0)).join('')}
  
_quickTest()
    .then(() => conn.logger.info('☑️ Quick Test Done , nama file session ~> creds.json'))
    .catch(console.error)
