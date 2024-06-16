import { promises } from 'fs'
import { join } from 'path'
import { xpRange } from '../lib/levelling.js'
import moment from 'moment-timezone'
import os from 'os'
import fs from 'fs'
import fetch from 'node-fetch'

const defaultMenu = {
  before: `
%dash

%m1 *I N F O  C M D* 
%m4 🅟 = *Premium*
%m4 🅛 = *Limit*
%m3

%m1 *I N F O  B O T*
%m4 Bot Name : *%me*
%m4 Mode : *%mode*
%m4 Platform : *%platform*
%m4 Prefix : [ *%_p* ]
%m4 Uptime : *%muptime*
%m4 Database : *%rtotalreg dari %totalreg*
%m3

%m1 *U S E R*
%m2 Name : %name
%m2 Status : *%prems*
%m2 Limit : *%limit*
%m2 Money : *%money*
%m2 Role : *%role*
%m2 Level : *%level [ %xp4levelup Xp For Levelup]*
%m2 Xp : *%exp / %maxexp*
%m2 Total Xp : *%totalexp*
%m3

%m1 *T O D A Y*
%m2 %ucpn
%m2 Days : %week
%m2 Date : %date
%m2 Time : %wib
%m3
%readmore
`.trimStart(),
  header: '%cc *%category* %c1',
  body: '%c2 %cmd %isPremium %islimit',
  footer: '%c3',
  after: `%c4 %me`,
}
let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
await conn.sendMessage(m.chat, {
          react: {
            text: '⚡',
            key: m.key,
          }})
	let tags
	let teks = `${args[0]}`.toLowerCase()
  let arrayMenu = ['all', 'ai', 'anime', 'update', 'maker', 'edukasi', 'news', 'random', 'game', 'xp', 'islamic', 'stiker', 'rpg', 'kerangajaib', 'quotes', 'admin', 'group', 'premium', 'internet', 'anonymous', 'nulis', 'downloader', 'tools', 'fun', 'database', 'quran', 'vote', 'nsfw', 'audio', 'sound', 'info', 'owner', 'developer', 'jadibot', 'store', 'virus']
  if (!arrayMenu.includes(teks)) teks = '404'
  if (teks == 'all') tags = {
  'main': 'Main',
  'game': 'Game',
  'rpg': 'RPG Games',
  'xp': 'Exp & Limit',
  'sticker': 'Sticker',
  'kerang': 'Kerang Ajaib',
  'quotes': 'Quotes',
  'fun': 'Fun',
  'anime': 'Anime',
  'admin': 'Admin',
  'group': 'Group',
  'vote': 'Voting',
  'absen': 'Absen',
  'premium': 'Premium',
  'anonymous': 'Anonymous Chat',
  'internet': 'Internet',
  'downloader': 'Downloader',
  'tools': 'Tools',
  'sound': 'Sound',
  'nulis': 'MagerNulis & Logo',
  'audio': 'Audio',
  'ai': 'AI',
  'maker': 'Maker',
  'database': 'Database',
  'quran': 'Al Qur\'an',
  'developer': 'Developer',
  'owner': 'Owner',
  'host': 'Host',
  'jadibot': 'Jadi Bot',
  'advanced': 'Advanced',
  'info': 'Info',
  'store': 'Store Menu',
  'virus': 'Virtex',
}
  if (teks == 'game') tags = {
    'game': 'Game'
  }
  if (teks == 'anime') tags = {
    'anime': 'Anime'
  }
  if (teks == 'nsfw') tags = {
    'nsfw': 'Nsfw'
  }
  if (teks == 'rpg') tags = {
    'rpg': 'Rpg'
  }
  if (teks == 'edukasi') tags = {
    'edukasi': 'Edukasi'
  }
  if (teks == 'news') tags = {
    'news': 'News'
  }
  if (teks == 'random') tags = {
    'random': 'Random'
  }
  if (teks == 'xp') tags = {
    'xp': 'Exp & Limit'
  }
  if (teks == 'stiker') tags = {
    'sticker': 'Stiker'
  }
  if (teks == 'kerangajaib') tags = {
    'kerang': 'Kerang Ajaib'
  }
  if (teks == 'quotes') tags = {
    'quotes': 'Quotes'
  }
  if (teks == 'admin') tags = {
    'admin': `Admin ${global.opts['restrict'] ? '' : '(Dinonaktifkan)'}`,
    'group': 'Grup'
  }
  if (teks == 'group') tags = {
    'group': 'Group'
  }
  if (teks == 'premium') tags = {
    'premium': 'Premium'
  }
  if (teks == 'internet') tags = {
    'internet': 'Internet'
  }
  if (teks == 'anonymous') tags = {
    'anonymous': 'Anonymous Chat'
  }
  if (teks == 'nulis') tags = {
    'nulis': 'Nulis',
    'maker': 'Maker'
  }
  if (teks == 'downloader') tags = {
    'downloader': 'Downloader'
  }
  if (teks == 'tools') tags = {
    'tools': 'Tools'
  }
  if (teks == 'fun') tags = {
    'fun': 'Fun'
  }
  if (teks == 'database') tags = {
    'database': 'Database'
  }
  if (teks == 'vote') tags = {
    'vote': 'Voting',
    'absen': 'Absen'
  }
  if (teks == 'absen') tags = {
    'absen': 'Absen'
  }
  if (teks == 'quran') tags = {
    'quran': 'Al-Qur\'an',
    'islamic': 'Islamic'
  }
  if (teks == 'audio') tags = {
    'audio': 'Audio'
  }
  if (teks == 'sound') tags = {
    'sound': 'Sound'
  }
  if (teks == 'info') tags = {
    'info': 'Info'
  }
  if (teks == 'developer') tags = {
    'developer': 'Developer'
  }
   if (teks == 'ai') tags = {
    'ai': 'AI'
  }
  if (teks == 'owner') tags = {
    'owner': 'Owner',
    'host': 'Host',
    'advanced': 'Advanced'
  }
  if (teks == 'jadibot') tags = {
    'jadibot': 'Jadibot'
  }
  if (teks == 'nsfw') tags = {
    'nsfw': 'Nsfw'
  }
  if (teks == 'quotes') tags = {
    'quotes': 'Quotes'
 }
  if (teks == 'maker') tags = {
    'maker': 'Maker'
 }
  if (teks == 'store') tags = {
    'store': 'Store Menu'
  }
  if (teks == 'virus') tags = {
    'virus': '𐐪-〚 Virtex 〛-𐑂'
  }
  try {
  	// DEFAULT MENU
      let dash = `*───━•〔 DASHBOARD 〕•━───*`
      let dash2 = `*───━•[DASHBOARD]•━───*`
  	let m1 = `*❖─···─〈*`
      let m2 = `│𖥂`
      let m3 = `┗───···─────𖡹`
      let m4 = `│𖤓`
      
      // COMMAND MENU
      let cc = `╭────━•〔`
      let c1 = `〕•━────┐`
      let c2 = `│⌬`
      let c3 = `╰───···─────𖡹\n`
      let c4 = `\n⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕\n     `
      
      // LOGO L P
      let lprem = global.lopr
      let llim = global.lolm
       let spas = "                "
        let spas2 = "         "
        let mojis = " - "
        let index = 0
        let ktx = ''
      let tag = `@${m.sender.split('@')[0]}`
    
    let _mpt
    if (process.send) {
      process.send('uptime')
      _mpt = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let mpt = clockString(_mpt)
      function _0x1042(){const _0x55f3e8=['menu2\x20kera','𝚊𝚛𝚐𝚊\x20𝚄𝚙𝚐𝚛𝚊','ᴛᴇʀɴᴇᴛ\x20〛-𐑂','ʟᴀᴍɪᴄ\x20〛-𐑂','ɪᴘᴛ\x20«','menu2\x20viru','𝚁𝚎𝚗𝚍𝚊𝚑\x20𝙳𝚘𝚗','┊💌┊𝙾𝚠𝚗𝚎𝚛','╰►\x20ᴍᴇɴᴀᴍᴘɪ','ʀᴀɴɢ\x20〛-𐑂','-𐑂','ɴ\x20ᴍᴇɴɢɢᴜɴᴀ','ʜ...','╰►\x20ғɪᴛᴜʀ\x20ʙ','menu2\x20ai','ᴀɴɢ\x20ɴɪʜ...','menu2\x20stor','speedtest','ʟᴋᴀɴ\x20ғɪᴛᴜ\x20','𝒓\x20-𐑂','7670400kbzvjE','┊✨┊\x20『\x20𝚁𝚊𝚝𝚒','ᴇɴʏɪᴍᴘᴀɴ\x20s','ᴀᴘᴀᴛ\x20ʜᴀᴅɪᴀ','\x20ᴇɴᴀᴋɴʏᴀ?','✧\x20ᴋᴀᴡᴀɴ-ᴋᴀ','𝚐\x20:/','ᴋᴇʀ\x20〛-𐑂','ᴏᴘᴇʀ\x20ʙᴏᴛ..','┊🔥┊\x20›\x20〚\x20ᴠɪ','╰►\x20ᴍᴇɴᴜ\x20sᴇ','menu2\x20xp','menu2\x20grou','\x20ʙᴀɴɢ?...','\x20ᴘʀᴇᴍɪᴜᴍ..','✧\x20𝙼𝚊𝚞\x20𝙷𝚊𝚍𝚒','ᴛᴛɪɴɢᴀɴ\x20ʙᴜ','╰►\x20ɢᴀʙᴜᴛ\x20ʏ','menu2\x20game','┊✨┊\x20›\x20〚\x20ᴇx','𝚛𝚎𝚖𝚒𝚞𝚖\x20』','\x20ᴍᴇɴᴜʟɪs','menu2\x20audi','\x20ᴀᴅᴍɪɴ\x20ɢʀᴏ','ᴏᴅᴇ\x20','ᴇʀʙɪᴄᴀʀᴀ\x20ᴅ','botinfo','┊📑┊\x20›\x20〚\x20ǫᴜ','𝚊𝚜𝚒𝚑\x20𝚁𝚊𝚝𝚎\x20','ᴏᴜʙ\x20〛-𐑂','\x20𝙳𝚎𝚟𝚎𝚕𝚘𝚙𝚎𝚛','𝙷𝚊𝚍𝚒𝚊𝚑\x20』','ɢᴀɴ\x20ʙɪᴀʀ\x20ᴅ','ʀ\x20ʙᴏᴛ...','menu2\x20owne','ᴍᴇ\x20〛-𐑂','┊💌┊\x20›\x20〚\x20sᴛ','menu2\x20tool','┊🥞┊\x20『\x20𝙶𝚎𝚝\x20','menu2\x20down','ᴀᴜᴅɪᴏ','ʀᴜs','ᴀᴛ\x20ɢʀᴏᴜʙ\x20ᴍ','┊📮\x20∫\x20»\x20ʀᴜʟ','menu2\x20data','rnet','ɴᴛᴜᴋ\x20ᴍᴇᴍʙᴜ','ʜᴜsᴜs\x20ᴜsᴇʀ','\x20ᴄᴏᴍᴍᴀɴᴅ\x20ʙ','ᴏʟs\x20〛-𐑂','ᴘᴀ\x20ᴀᴊᴀ\x20ʙᴏᴛ','ᴇᴍʙᴀɴᴛᴜ\x20ᴘᴇ','✧\x20𝙼𝚎𝚗𝚊𝚖𝚙𝚒𝚕','menu2\x20stik','ᴇᴏ/ᴀᴜᴅɪᴏ','ᴍɪɴ\x20〛-𐑂','┊☎️\x20∫\x20»\x20ᴋᴀᴛ','base','┊🌟┊\x20『\x20𝚄𝙿\x20𝙿','𝚃𝚎𝚜𝚝\x20𝚂𝚙𝚎𝚎𝚍','658254rfXFtV','ᴀᴛ\x20〛-𐑂','𝚊𝚛𝚐𝚊\x20𝚜𝚎𝚠𝚊\x20','ᴇsᴜᴀᴛᴜ','5948400lkkyWd','┊🃏┊\x20›\x20〚\x20sᴛ','ᴏɴʏᴍᴏᴜs\x20ᴄʜ','𝚗𝚐\x20』','┊👩‍💻┊\x20›\x20𝑶𝒘𝒏𝒆','ʀᴏᴜᴘ\x20ʙᴏᴛ','menu2\x20rpg','ᴀᴛ/ᴍᴇɴɢᴇᴅɪ','ᴋᴀɴ\x20ᴠᴇʀsɪ\x20','2574838GZKHUk','✧\x20𝙸𝚗𝚏𝚘\x20','╰►\x20ғɪᴛᴜʀ\x20ᴋ','┊🎳\x20∫\x20»\x20ᴠᴇʀ','ᴛ\x20sᴛɪᴋᴇʀ','┊🎭┊\x20›\x20〚\x20ᴀɴ','┊📤️┊\x20›\x20〚\x20ᴅᴏ','┊🗃️️┊\x20›\x20〚\x20ᴅ','╰►\x20ғɪᴛᴜʀ\x20ᴜ','╰►\x20ʜᴀɴʏᴀ\x20ᴋ','menu2\x20deve','ʜᴜsᴜs\x20ᴏᴡɴᴇ','┊🎮┊\x20›\x20〚\x20ɢᴀ','▮𝗠𝗲𝗻𝘂','✧\x20ᴘᴇʀᴀᴛᴜʀᴀ','quotes','ᴛ\x20ɪɴɪ...','𝙱𝚘𝚝','ɪᴍᴇ\x20〛-𐑂','\x20>.<','ɴᴀᴋ\x20ᴘᴇᴛᴜᴀʟ','ʟᴋᴀɴ\x20ᴍᴇɴᴜ\x20','𝚝𝚊𝚗\x20','menu2\x20anon','┊💰\x20∫\x20»\x20ᴅᴏɴ','𝚔𝚊𝚗\x20𝙺𝚎𝚌𝚎𝚙𝚊','ᴄᴏᴅᴇ\x20ᴜɴᴅᴀɴ','cekversi','ʟ\x20ᴍᴇɴᴜ\x20〛-𐑂','┊🌱┊\x20›\x20〚\x20ʀᴘ','menu2\x20make','𝚔𝚊𝚗\x20𝙻𝚒𝚜𝚝\x20𝙷','menu2\x20prem','ɴᴛᴜᴋ\x20ᴍᴇɴᴅᴏ','┊🗳️┊\x20『\x20𝙼𝚢\x20𝙿','ᴇʀᴀʟ\x20«','menu2\x20inte','ɪᴋᴇʀs\x20〛-𐑂','1459300NLIOhS','\x20ᴀɴɪᴍᴇ','┊⚡┊𝚂𝚙𝚎𝚎𝚍','tqto','ref','𝚔𝚊𝚔?...','✧\x20sᴜᴘᴘᴏʀᴛ\x20','rate','┊✏️┊\x20›\x20〚\x20ɴᴜ','┊🧰️┊\x20›\x20〚\x20ᴛᴏ','ɢ\x20〛-𐑂','weekly','✧\x20sᴏᴜʀᴄᴇ\x20ᴄ','sɪᴏɴ\x20«','┊🐚┊\x20›\x20〚\x20ᴋᴇ','ᴘ\x20〛-𐑂','sewa','menu2\x20qura','ᴡᴀɴ\x20ʏᴀɴɢ\x20ᴍ','menu2\x20quot','ʜ....','30034yeaTek','┊🎵┊\x20›\x20〚\x20ᴀᴜ','menu2\x20admi','ᴍʙᴜᴀᴛᴀɴ\x20ʙᴏ','ɴ\x20〛-𐑂','rules','117WrilHO','╰►\x20ᴜɴᴛᴜᴋ\x20ᴍ','▮𝗜𝗻𝗳𝗼\x20」','ᴀ\x20ᴘᴇɴᴜᴛᴜᴘ\x20','29518416DjZaFZ','ium','\x20〛-𐑂','ᴡɴʟᴏᴀᴅᴇʀ\x20〛','┊🔐\x20∫\x20»\x20𝑫𝒆𝒗','ᴀᴛᴀ.','ᴜʙ\x20ʙᴏᴛ\x20«','donasi','ᴜᴘ!','ᴀᴛᴀʙᴀsᴇ\x20〛-','┊🧩┊\x20›\x20〚\x20ғᴜ','╰►\x20ᴍᴇɴᴜ\x20ᴠɪ','sᴛᴏʀᴇ','𝒆𝒍𝒐𝒑𝒆𝒓\x20«','ᴏᴛ\x20ᴏɴ\x20²⁴\x20ᴊ','\x20ᴀᴋᴀɴ\x20ʙᴀɴᴛ','loader','ᴇɴɢᴀɴ\x20ᴏʀᴀɴ','𝚍𝚎\x20𝙿𝚛𝚎𝚖𝚒𝚞𝚖','menu2\x20fun','✧\x20𝙸𝚗𝚒\x20𝚁𝚘𝚘𝚖','ngajaib','\x20𝙱𝚘𝚝\x20』','ᴇxᴘ','ʙᴏᴛ\x20ᴀɢᴀʀ\x20ʙ','┊⛩️┊\x20›\x20〚\x20ᴀɴ','┊🔖┊\x20『\x20𝚂𝚎𝚠𝚊','\x20ɪɴᴛᴇʀɴᴇᴛ','┊🎁\x20∫\x20»\x20ʀᴇғ','╰►\x20ᴀᴅᴀ\x20ʏᴀɴ','┊🔭\x20∫\x20»\x20sᴄʀ','ᴀᴋ\x20ᴅɪᴋᴇɴᴀʟ','ᴋᴀɴ\x20ᴋᴀᴛᴀ-ᴋ','▮𝗖𝗮𝘁𝗲𝗴𝗼𝗿𝘆\x20','ymous','┊🌸\x20∫\x20»\x20ɢʀᴏ','┊📊┊𝚃𝚎𝚜𝚝\x20𝚂𝚙','ᴀsɪ\x20«','ᴇs\x20«','ᴋᴀɴ\x20ʟɪɴᴋ\x20ɢ','✧\x20𝙹𝚊𝚗𝚐𝚊𝚗\x20𝙺','ɪsʟᴀᴍɪᴄ','✧\x20𝚂𝚊𝚙𝚊\x20𝚈𝚊?','menu2\x20anim','ɪ\x20ᴛᴏᴘɪᴋ\x20ɴɪ','ʟᴋɴ\x20ғɪᴛᴜʀ\x20','𝚎𝚎𝚍','𝚛𝚘𝚏𝚒𝚕𝚎\x20』','ɴᴋs\x20ᴛᴏ\x20«','owner','╰►\x20ᴄᴀʟᴏɴ\x20ᴀ','premium','✧\x20ᴍᴇɴᴀᴍᴘɪʟ','┊🎖️\x20∫\x20»\x20ᴛʜᴀ','┊🦄┊\x20›\x20〚\x20ɢʀ','ʟɪs\x20〛-𐑂','ɢ\x20ʏᴀɴɢ\x20ᴛɪᴅ','gcbot','┊🌐┊\x20›\x20〚\x20ɪɴ','6rjdOBJ','┊🌟┊\x20›\x20〚\x20ᴘʀ','ʀᴛᴇx\x20〛-𐑂','ᴏʀᴇ\x20〛-𐑂','╰►\x20ᴍᴀᴜ\x20ᴛᴀɴ','┊☪️┊\x20›\x20〚\x20ɪs','╰►\x20ʙᴜᴛᴜʜ\x20ᴀ','ᴏᴛᴇs\x20〛-𐑂','┊📛┊𝙸𝚗𝚏𝚘\x20𝙱𝚘','ʟᴋᴀɴ\x20sᴇᴍᴜᴀ','ᴋᴀɴ\x20','┊👑┊\x20›\x20〚\x20ᴀᴅ','ᴏɢᴏ\x20ᴀᴘᴀ\x20ʏᴀ','✧\x20ғɪᴛᴜʀ\x20ᴋʜ','\x20ɢᴀᴍᴇ....','┊🎨┊\x20›\x20〚\x20ᴍᴀ','┊🤖┊\x20›\x20〚\x20ᴀɪ','ᴀʜ\x20ʙᴀɴɢ?','ᴅɪᴏ\x20〛-𐑂','▮𝗦𝘁𝗮𝘁𝘂𝘀\x20」','┊🗒️┊\x20›\x20〚\x20ᴀʟ','ʏᴀ\x20ᴀᴘᴀ\x20sɪʜ','ᴡɴʟᴏᴀᴅ\x20ᴠɪᴅ','ʟᴋᴀɴ\x20ғɪᴛᴜʀ','ɢ\x20ᴍᴀᴜ\x20ɴʏᴀʀ','ᴀᴍ\x20ɴᴏɴ\x20sᴛᴏ','ᴜ\x20ᴋᴀᴋ','loper','menu2\x20all','✧\x20ʙᴀɢɪᴋᴀɴ\x20','ʙᴏᴛ','speed','𝚊𝚑\x20𝙴𝚗𝚐𝚐𝚊𝚔\x20','╰►\x20ʙɪᴋɪɴ\x20ʟ','▮𝑻𝒆𝒂𝒎𝒔\x20」','ᴇᴍɪᴜᴍ\x20〛-𐑂','ᴜsᴜs\x20ᴅᴇᴠᴇʟ'];_0x1042=function(){return _0x55f3e8;};return _0x1042();}const _0xef012c=_0x5a0c;function _0x5a0c(_0x5c6c56,_0x2c6058){const _0x44fbdc=_0x1042();return _0x5a0c=function(_0x370f72,_0x5d8315){_0x370f72=_0x370f72-(0xd+-0x1*-0x1e4d+-0x1d3d);let _0x3fa91c=_0x44fbdc[_0x370f72];return _0x3fa91c;},_0x5a0c(_0x5c6c56,_0x2c6058);}(function(_0x341acc,_0x158369){const _0x1472b2=_0x5a0c,_0x438078=_0x341acc();while(!![]){try{const _0xf56374=parseInt(_0x1472b2(0x167))/(-0x2226+0x1*0xd6+-0x1*-0x2151)+parseInt(_0x1472b2(0x1af))/(0xef2+0x1e06+-0x1*0x2cf6)*(-parseInt(_0x1472b2(0x1b5))/(-0x9f0+0x1*0x1fe7+0x119*-0x14))+-parseInt(_0x1472b2(0x16b))/(-0x23e+0x23*0x3e+0xc7*-0x8)+-parseInt(_0x1472b2(0x19a))/(-0x2*-0xeb6+0x178a+-0x34f1)+-parseInt(_0x1472b2(0x1f4))/(0x1739+-0xd8+-0x1*0x165b)*(-parseInt(_0x1472b2(0x174))/(-0x1*0x1bcb+0x1e7f+-0x2ad))+-parseInt(_0x1472b2(0x12b))/(0x6f8+-0x2107*0x1+0x1a17)+parseInt(_0x1472b2(0x1b9))/(0x2627+0x26*0xc5+-0x59d*0xc);if(_0xf56374===_0x158369)break;else _0x438078['push'](_0x438078['shift']());}catch(_0x317a24){_0x438078['push'](_0x438078['shift']());}}}(_0x1042,-0x18b67a+0x1c714*0x5+-0xd1*-0x25bf));const sections=[{'title':htki+_0xef012c(0x207)+htka,'rows':[{'header':'','id':_p+_0xef012c(0x1ea),'title':_0xef012c(0x11e),'description':_0xef012c(0x1cd)+_0xef012c(0x149)+'❗'},{'header':'','id':_p+_0xef012c(0x145),'title':_0xef012c(0x1fc)+'𝚝','description':_0xef012c(0x175)+namebot},{'header':'','id':_p+_0xef012c(0x128),'title':_0xef012c(0x1dd)+_0xef012c(0x1e7),'description':_0xef012c(0x166)+'\x20'+namebot},{'header':'','id':_p+_0xef012c(0x213),'title':_0xef012c(0x19c),'description':_0xef012c(0x15f)+_0xef012c(0x18d)+_0xef012c(0x18a)+namebot}]},{'title':htki+(_0xef012c(0x1da)+'」')+htka,'rows':[{'header':'','id':_p+_0xef012c(0x1aa),'title':_0xef012c(0x1d3)+_0xef012c(0x1cf),'description':_0xef012c(0x15f)+_0xef012c(0x193)+_0xef012c(0x169)+_0xef012c(0x185)},{'header':'','id':_p+_0xef012c(0x1ec),'title':_0xef012c(0x165)+_0xef012c(0x13f),'description':_0xef012c(0x15f)+_0xef012c(0x193)+_0xef012c(0x21a)+_0xef012c(0x1cb)},{'header':'','id':_p+_0xef012c(0x1a5),'title':_0xef012c(0x151)+_0xef012c(0x14a),'description':_0xef012c(0x13a)+_0xef012c(0x214)+_0xef012c(0x19f)},{'header':'','id':_p+_0xef012c(0x1a1),'title':_0xef012c(0x12c)+_0xef012c(0x16e),'description':_0xef012c(0x1e1)+_0xef012c(0x147)+_0xef012c(0x11d)+_0xef012c(0x131)},{'header':'','id':_p+'pp','title':_0xef012c(0x196)+_0xef012c(0x1e8),'description':_0xef012c(0x1e3)}]},{'title':spas+htki+_0xef012c(0x181)+htka,'rows':[{'header':'','id':_p+_0xef012c(0x210),'title':_0xef012c(0x208)+_0xef012c(0x190),'description':_0xef012c(0x11f)+_0xef012c(0x1fd)+_0xef012c(0x15b)+'ᴏᴛ'},{'header':'','id':_p+_0xef012c(0x171),'title':_0xef012c(0x191)+_0xef012c(0x1a4),'description':_0xef012c(0x1eb)+_0xef012c(0x188)+_0xef012c(0x126)},{'header':'','id':_p+_0xef012c(0x136),'title':_0xef012c(0x13e)+_0xef012c(0x1a9),'description':_0xef012c(0x11f)+_0xef012c(0x129)+_0xef012c(0x1d0)},{'header':'','id':_p+_0xef012c(0x13d),'title':_0xef012c(0x180)+_0xef012c(0x14e),'description':_0xef012c(0x11f)+_0xef012c(0x20b)+_0xef012c(0x202)},{'header':'','id':_p+(_0xef012c(0x1ad)+'es'),'title':_0xef012c(0x146)+_0xef012c(0x1fb),'description':_0xef012c(0x1d6)+_0xef012c(0x20c)+_0xef012c(0x1e5)+_0xef012c(0x123)},{'header':'','id':_p+_0xef012c(0x1cc),'title':_0xef012c(0x1c3)+_0xef012c(0x1b3),'description':_0xef012c(0x13c)+_0xef012c(0x205)},{'header':'','id':_p+(_0xef012c(0x219)+_0xef012c(0x1ce)),'title':_0xef012c(0x1a8)+_0xef012c(0x120),'description':_0xef012c(0x1f8)+_0xef012c(0x209)+_0xef012c(0x138)},{'header':'','id':_p+(_0xef012c(0x1e4)+'e'),'title':_0xef012c(0x1d2)+_0xef012c(0x186),'description':_0xef012c(0x11f)+_0xef012c(0x20b)+_0xef012c(0x19b)},{'header':'','id':_p+(_0xef012c(0x194)+_0xef012c(0x1ba)),'title':_0xef012c(0x1f5)+_0xef012c(0x217),'description':_0xef012c(0x17d)+_0xef012c(0x15a)+_0xef012c(0x139)+'.'},{'header':'','id':_p+(_0xef012c(0x18b)+_0xef012c(0x1db)),'title':_0xef012c(0x179)+_0xef012c(0x16d)+_0xef012c(0x168),'description':_0xef012c(0x124)+_0xef012c(0x144)+_0xef012c(0x1ca)+_0xef012c(0x1f1)+_0xef012c(0x1d8)+_0xef012c(0x187)},{'header':'','id':_p+(_0xef012c(0x1ab)+'n'),'title':_0xef012c(0x1f9)+_0xef012c(0x21c),'description':_0xef012c(0x11f)+_0xef012c(0x189)+_0xef012c(0x1e2)},{'header':'','id':_p+(_0xef012c(0x198)+_0xef012c(0x158)),'title':_0xef012c(0x1f3)+_0xef012c(0x21b),'description':_0xef012c(0x11f)+_0xef012c(0x20b)+_0xef012c(0x1d4)},{'header':'','id':_p+(_0xef012c(0x152)+_0xef012c(0x1c9)),'title':_0xef012c(0x17a)+_0xef012c(0x1bc)+_0xef012c(0x121),'description':_0xef012c(0x17c)+_0xef012c(0x195)+_0xef012c(0x20a)+_0xef012c(0x161)},{'header':'','id':_p+(_0xef012c(0x160)+'er'),'title':_0xef012c(0x16c)+_0xef012c(0x199),'description':_0xef012c(0x17c)+_0xef012c(0x159)+_0xef012c(0x172)+_0xef012c(0x178)},{'header':'','id':_p+(_0xef012c(0x192)+'r'),'title':_0xef012c(0x1a2)+_0xef012c(0x1f0),'description':_0xef012c(0x11f)+_0xef012c(0x20b)+_0xef012c(0x140)},{'header':'','id':_p+(_0xef012c(0x141)+'o'),'title':_0xef012c(0x1b0)+_0xef012c(0x206),'description':_0xef012c(0x11f)+_0xef012c(0x1e6)+_0xef012c(0x153)},{'header':'','id':_p+(_0xef012c(0x137)+'p'),'title':_0xef012c(0x1ef)+_0xef012c(0x148),'description':_0xef012c(0x135)+_0xef012c(0x13b)+_0xef012c(0x155)+_0xef012c(0x20e)},{'header':'','id':_p+(_0xef012c(0x1b1)+'n'),'title':_0xef012c(0x1ff)+_0xef012c(0x162),'description':_0xef012c(0x11f)+_0xef012c(0x20b)+_0xef012c(0x142)+_0xef012c(0x1c1)},{'header':'','id':_p+(_0xef012c(0x157)+_0xef012c(0x164)),'title':_0xef012c(0x17b)+_0xef012c(0x1c2)+'𐑂','description':_0xef012c(0x1b6)+_0xef012c(0x12d)+_0xef012c(0x16a)},{'header':'','id':_p+(_0xef012c(0x150)+'s'),'title':_0xef012c(0x1a3)+_0xef012c(0x15c),'description':_0xef012c(0x1fa)+_0xef012c(0x15d)+_0xef012c(0x1c8)+'ᴜ'},{'header':'','id':_p+_0xef012c(0x125),'title':_0xef012c(0x204)+_0xef012c(0x1bb),'description':_0xef012c(0x11f)+_0xef012c(0x189)+'ᴀɪ'},{'header':'','id':_p+(_0xef012c(0x192)+'r'),'title':_0xef012c(0x203)+_0xef012c(0x132),'description':_0xef012c(0x215)+_0xef012c(0x200)+_0xef012c(0x12f)},{'header':'','id':_p+(_0xef012c(0x127)+'e'),'title':_0xef012c(0x14f)+_0xef012c(0x1f7),'description':_0xef012c(0x11f)+_0xef012c(0x189)+_0xef012c(0x1c5)},{'header':'','id':_p+(_0xef012c(0x21e)+'s'),'title':_0xef012c(0x134)+_0xef012c(0x1f6),'description':_0xef012c(0x1c4)+_0xef012c(0x154)}]},{'title':spas+htki+_0xef012c(0x1b7)+htka,'rows':[{'header':'','id':_p+_0xef012c(0x18f),'title':_0xef012c(0x177)+_0xef012c(0x1a7),'description':_0xef012c(0x1ed)+_0xef012c(0x173)+_0xef012c(0x212)},{'header':'','id':_p+_0xef012c(0x19e),'title':_0xef012c(0x1d5)+_0xef012c(0x197),'description':_0xef012c(0x211)+_0xef012c(0x18e)+_0xef012c(0x14b)+_0xef012c(0x12e)+_0xef012c(0x1ae)},{'header':'','id':_p+'sc','title':_0xef012c(0x1d7)+_0xef012c(0x21d),'description':_0xef012c(0x1a6)+_0xef012c(0x143)+namebot},{'header':'','id':_p+_0xef012c(0x1b4),'title':_0xef012c(0x156)+_0xef012c(0x1df),'description':_0xef012c(0x182)+_0xef012c(0x122)+_0xef012c(0x1fe)+namebot},{'header':'','id':_p+_0xef012c(0x1c0),'title':_0xef012c(0x18c)+_0xef012c(0x1de),'description':_0xef012c(0x1a0)+_0xef012c(0x1d1)+_0xef012c(0x1c7)+_0xef012c(0x20d)+'ᴘ'},{'header':'','id':_p+_0xef012c(0x1f2),'title':_0xef012c(0x1dc)+_0xef012c(0x1bf),'description':_0xef012c(0x1ed)+_0xef012c(0x1e0)+_0xef012c(0x170)},{'header':'','id':_p+_0xef012c(0x19d),'title':_0xef012c(0x1ee)+_0xef012c(0x1e9),'description':_0xef012c(0x130)+_0xef012c(0x1ac)+_0xef012c(0x15e)+_0xef012c(0x1b2)+_0xef012c(0x184)},{'header':'','id':_p+_0xef012c(0x183),'title':_0xef012c(0x163)+_0xef012c(0x1b8)+'«','description':_0xef012c(0x1ed)+_0xef012c(0x1d9)+_0xef012c(0x1be)}]},{'title':spas+htki+_0xef012c(0x216)+htka,'rows':[{'header':'','id':_p+(_0xef012c(0x17e)+_0xef012c(0x20f)),'title':_0xef012c(0x1bd)+_0xef012c(0x1c6),'description':_0xef012c(0x201)+_0xef012c(0x218)+_0xef012c(0x133)+'.'},{'header':'','id':_p+(_0xef012c(0x14d)+'r'),'title':_0xef012c(0x16f)+_0xef012c(0x12a),'description':_0xef012c(0x176)+_0xef012c(0x17f)+_0xef012c(0x14c)}]}];

let usrs = db.data.users[m.sender]
const _0x215a7b=_0x5939;function _0x129d(){const _0x53a28b=['Free\x20User','level','𝒂𝒕𝒖𝒉𝒊\x20𝑺𝒆𝒕𝒊','\x20🅛\x20=\x20*Limi','52571496evRAmz','values','𝑫𝒊\x20𝑩𝒂𝒏𝒏𝒆𝒅\x20','teString','role','Private','keys','toLocaleDa','460ZXGqPP','Developer','𝒚*\x0a*𖤓*\x20Use','data','t*\x0a\x0a*༺════','form\x20:\x20*','premiumTim','8kbaxXQ','1171973nQfbDx','length','split','2738162gGczYT','\x20llı\x20𝑩𝑶𝑻𝒁\x20','e\x20:\x20','6ZsYQqz','ıll\x20〕═════','*\x0a*𖥂*\x20Limi','*\x0a*𖤓*\x20Unre','*\x0a*𖤓*\x20Mode','\x20𝑩𝒊𝒋𝒂𝒌!!\x0a𝑷','\x20:\x20*','\x20𝑰𝑵𝑭𝑶\x20ıll\x20',':\x20@','platform','\x0a*𖥂*\x20Tags\x20','sender','rs\x20:\x20*','𝑩𝒐𝒕\x20𝑫𝒆𝒏𝒈𝒂𝒏','ster\x20:\x20*','༻*\x0a*𖥂*\x20Nam','*\x0a*𖤓*\x20Regi','*\x0a*𖤓*\x20Admi','m\x20:\x20\x0a','users','⌘*\x0a*𖤓*\x20Upt',':\x20*','〔\x20llı\x20𝑼𝑺𝑬𝑹','𝒂𝒑\x20𝑹𝒖𝒍𝒆𝒔\x20𝑨','red\x20Premiu','ime\x20:\x20*','opts','\x0a*❅','n\x20:\x20*𝑭𝒖𝒂𝒅𝑿','*\x0a*𖥂*\x20Leve','l:\x20*','\x20ıll\x20〕════','getName','Publik','Premium\x20Us','*\x0a*𖥂*\x20Expi','*\x0a*𖥂*\x20Role','filter','412ouCxbJ','ium\x20:\x20*','emium*\x0a*𖥂*','t\x20:\x20*','𝑩𝑶𝑻...\x0a\x0a*⫷','5769880nniefR','39oeabtR','〕═════⫸*\x0a*','160ahPlWs','self','377116ERvJPQ','𝒈𝒂𝒓\x20𝑻𝒊𝒅𝒂𝒌\x20','name','7238961SCHGiM','limit','\x0a*𖥂*\x20Statu','\x0a\x0a*⌘═════〔','*\x0a*𖥂*\x20Prem','𖥂*\x20🅟\x20=\x20*Pr','gister\x20:\x20*','*\x0a\x0a❀𝑫𝒂𝒕𝒆\x20','*\x0a𝑮𝒖𝒏𝒂𝒌𝒂𝒏\x20','registered','*\x0a*𖤓*\x20Plat','═════〔\x20llı','s\x20:\x20*'];_0x129d=function(){return _0x53a28b;};return _0x129d();}(function(_0x2f0aab,_0x386422){const _0x2587be=_0x5939,_0x2f9104=_0x2f0aab();while(!![]){try{const _0x5f4ea1=-parseInt(_0x2587be(0xeb))/(0x1*0x22b9+0x1*-0x17a5+0x13b*-0x9)*(-parseInt(_0x2587be(0xc5))/(-0xda*0x2+0x44*-0x4d+0x162a))+parseInt(_0x2587be(0xcb))/(0x12d4+-0x1bd5+0x904)*(parseInt(_0x2587be(0xcf))/(-0x86d*0x1+-0x6*0x62f+0x2d8b))+parseInt(_0x2587be(0xca))/(-0xf40+0x113a+-0xa7*0x3)*(parseInt(_0x2587be(0xf9))/(0x12a2+-0x1dec+0xb50))+parseInt(_0x2587be(0xf6))/(-0x11a3+-0x1*-0x11+0x1199)+parseInt(_0x2587be(0xf2))/(-0x2*0xb35+0x128f*0x1+0x3e3)*(parseInt(_0x2587be(0xd2))/(0x1867*-0x1+0x1990+-0x3*0x60))+-parseInt(_0x2587be(0xcd))/(0x76*-0x18+0x8fa+-0x20*-0x11)*(-parseInt(_0x2587be(0xf3))/(-0x19ba+-0x172f+-0x1a*-0x1e2))+-parseInt(_0x2587be(0xe3))/(-0x1bf5+0x7*0x46f+0xc2*-0x4);if(_0x5f4ea1===_0x386422)break;else _0x2f9104['push'](_0x2f9104['shift']());}catch(_0x32f9c2){_0x2f9104['push'](_0x2f9104['shift']());}}}(_0x129d,-0x10faae+0x1b3883+0x4eb5f));function _0x5939(_0x513c9e,_0xf17a97){const _0x2f97ce=_0x129d();return _0x5939=function(_0x8a88f7,_0x328b07){_0x8a88f7=_0x8a88f7-(-0x1f20+-0x22*-0x1e+0x1bca*0x1);let _0x3ae45a=_0x2f97ce[_0x8a88f7];return _0x3ae45a;},_0x5939(_0x513c9e,_0xf17a97);}let tek=_0x215a7b(0xba)+ucapan()+'\x20'+conn[_0x215a7b(0xbf)](m[_0x215a7b(0xaa)])+(_0x215a7b(0xda)+_0x215a7b(0xac)+_0x215a7b(0xfe)+_0x215a7b(0xe1)+_0x215a7b(0xb6)+_0x215a7b(0xd0)+_0x215a7b(0xe5)+_0x215a7b(0xc9)+_0x215a7b(0xdd)+_0x215a7b(0xa6)+_0x215a7b(0xcc)+_0x215a7b(0xd7)+_0x215a7b(0xc7)+_0x215a7b(0xe2)+_0x215a7b(0xef)+_0x215a7b(0xb5)+_0x215a7b(0xbe)+_0x215a7b(0xae)+_0x215a7b(0xf8))+(usrs[_0x215a7b(0xdb)]?usrs[_0x215a7b(0xd1)]:conn[_0x215a7b(0xbf)](m[_0x215a7b(0xaa)]))+(_0x215a7b(0xa9)+_0x215a7b(0xa7))+m[_0x215a7b(0xaa)][_0x215a7b(0xf5)]`@`[0x2*-0xffd+0x257+0x9e1*0x3]+(_0x215a7b(0xd4)+_0x215a7b(0xde))+(m[_0x215a7b(0xaa)][_0x215a7b(0xf5)]`@`[-0x3*-0x2dd+-0x4c*-0x10+-0xd57]==nomorown?_0x215a7b(0xec):usrs[_0x215a7b(0xf1)+'e']>=-0x3b*0x77+0x1da1+-0x233?_0x215a7b(0xc1)+'er':_0x215a7b(0xdf))+(_0x215a7b(0xbc)+_0x215a7b(0xbd))+usrs[_0x215a7b(0xe0)]+(_0x215a7b(0xc3)+_0x215a7b(0xb4))+usrs[_0x215a7b(0xe7)]+(usrs[_0x215a7b(0xf1)+'e']>-0x107*0x1a+0x415*0x4+-0x1*-0xa63?_0x215a7b(0xfb)+_0x215a7b(0xc8)+usrs[_0x215a7b(0xd3)]+(_0x215a7b(0xd6)+_0x215a7b(0xc6))+(usrs[_0x215a7b(0xf1)+'e']>0x5*-0x5cb+-0x45a+0xa*0x355?'✓':'✗')+(_0x215a7b(0xc2)+_0x215a7b(0xb7)+_0x215a7b(0xb1))+clockStringP(usrs[_0x215a7b(0xf1)+'e']-new Date()):'')+(_0x215a7b(0xd5)+_0x215a7b(0xf7)+_0x215a7b(0xfa)+_0x215a7b(0xb3)+_0x215a7b(0xb8))+mpt+(_0x215a7b(0xb0)+_0x215a7b(0xbb)+_0x215a7b(0xed)+_0x215a7b(0xab))+Object[_0x215a7b(0xe9)](global['db'][_0x215a7b(0xee)][_0x215a7b(0xb2)])[_0x215a7b(0xf4)]+(_0x215a7b(0xaf)+_0x215a7b(0xad))+Object[_0x215a7b(0xe9)](global['db'][_0x215a7b(0xee)][_0x215a7b(0xb2)])[_0x215a7b(0xf4)]+(_0x215a7b(0xfc)+_0x215a7b(0xd8))+Object[_0x215a7b(0xe4)](global['db'][_0x215a7b(0xee)][_0x215a7b(0xb2)])[_0x215a7b(0xc4)](_0x3b3b4e=>_0x3b3b4e[_0x215a7b(0xdb)]==!![])[_0x215a7b(0xf4)]+(_0x215a7b(0xdc)+_0x215a7b(0xf0))+os[_0x215a7b(0xa8)]()+(_0x215a7b(0xfd)+_0x215a7b(0xff))+(global[_0x215a7b(0xb9)][_0x215a7b(0xce)]?_0x215a7b(0xe8):_0x215a7b(0xc0))+_0x215a7b(0xd9)+new Date()[_0x215a7b(0xea)+_0x215a7b(0xe6)]()+'\x0a\x0a';
const listMessage = {
  text: tek,
  footer: `ᴍᴏᴛɪᴠᴀsɪ: ${motivasi.getRandom()}`,
  mentions: await conn.parseMention(tek),
  title: ``,
  buttonText: `CLICK HERE ⎙`,
  sections
}
  if (teks == '404') {
  	return await conn.sendButtonMessages(m.chat, tek, listMessage.footer, thumb, [
                ['INFO BOT', _p + 'botinfo']
            ], null, [
                ['GROUP', sgc]
            ], [
                [listMessage.buttonText, listMessage.sections]
            ], m, {
                contextInfo: {
                    mentionedJid: [m.sender]
                }
            })   
    }
  	
 /**************************** TIME *********************/
 let wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
    let wibh = moment.tz('Asia/Jakarta').format('HH')
    let wibm = moment.tz('Asia/Jakarta').format('mm')
    let wibs = moment.tz('Asia/Jakarta').format('ss')
    let wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')
    let wita = moment.tz('Asia/Makassar').format('HH:mm:ss')
    let wktuwib = `${wibh} H ${wibm} M ${wibs} S`
 
 let mode = global.opts['self'] ? 'Private' : 'Publik'
    let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
    let { age, exp, limit, level, role, registered, money} = global.db.data.users[m.sender]
    let { min, xp, max } = xpRange(level, global.multiplier)
    let name = await conn.getName(m.sender)
    let premium = global.db.data.users[m.sender].premiumTime
    let prems = `${premium > 0 ? 'Premium': 'Free'}`
    let platform = os.platform()
    
    //-----------TIME---------
    let ucpn = `${ucapan()}`
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { day: 'numeric' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    //---------------------
    
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    let groups = {}
    for (let tag in tags) {
      groups[tag] = []
      for (let plugin of help)
        if (plugin.tags && plugin.tags.includes(tag))
          if (plugin.help) groups[tag].push(plugin)
          }
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Powered by https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag]) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%_p' + help)
                .replace(/%islimit/g, menu.limit ? llim : '')
                .replace(/%isPremium/g, menu.premium ? lprem : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    let text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: uptime, muptime,
      me: conn.getName(conn.user.jid),
      npmname: _package.name,
      npmdesc: _package.description,
      version: _package.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp,
      github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
      tag, dash,m1,m2,m3,m4,cc, c1, c2, c3, c4,lprem,llim,
      ucpn,platform, wib, mode, _p, money, age, tag, name, prems, level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
    
    //----------------- FAKE
    let ftoko = {
    key: {
    fromMe: false,
    participant: `${m.sender.split`@`[0]}` + '@s.whatsapp.net',
    remoteJid: 'status@broadcast',
  },
  message: {
  "productMessage": {
  "product": {
  "productImage":{
  "mimetype": "image/jpeg",
  "jpegThumbnail": fs.readFileSync('./thumbnail.jpg'),
    },
  "title": `${ucapan()}`,
  "description": '𝗧 𝗜 𝗠 𝗘 : ' + wktuwib,
  "currencyCode": "US",
  "priceAmount1000": "100",
  "retailerId": wm,
  "productImageCount": 999
        },
  "businessOwnerJid": `${m.sender.split`@`[0]}@s.whatsapp.net`
  }
  }
  }
  let fgif = {
    key: {
    remoteJid: 'status@broadcast',
    participant : '0@s.whatsapp.net'},
    message: { 
                  "videoMessage": { 
                  "title": wm,
                  "h": `Nekohime`,
                  'duration': '99999999', 
                  'gifPlayback': 'true', 
                  'caption': '',
                  'jpegThumbnail': thumb
                         }
                        }
                     }
  let fkon = { key: { fromMe: false, participant: `${m.sender.split`@`[0]}@s.whatsapp.net`, ...(m.chat ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${name}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
  
    const pp = await conn.profilePictureUrl(conn.user.jid).catch(_ => './src/avatar_contact.png')
    
    //------------------< MENU >----------------
    
    //------------------ SIMPLE
    /*conn.reply(m.chat, text, fkon, { contextInfo: { mentionedJid: [m.sender],
        externalAdReply: {
            title: `${htjava} ${namebot}`,
            body: titlebot,
            description: titlebot,
            mediaType: 2,
          thumbnail: await(await fetch(thumb2)).buffer(),
         mediaUrl: sig
        }
     }
    })*/
    
    //------------------ DOCUMENT
    let d1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
    let d2 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    let d3  = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    let d4 = 'application/pdf'
    let d5 = 'text/rtf'
    let td = `${pickRandom([d1,d2,d3,d4,d5])}`
       
/*
* Karena Ga Guna Lagi hahaha, Remake By ᴋʏᴀᴍɪ×͜×࿐, Dev×͜×, 𝕱𝖚𝖆𝖉𝖃𝖉×፝֟͜×
*/
await conn.reply(m.chat, text, m, { mentions: [m.sender], contextInfo: { forwardingScore: 9999, isForwarded: true, externalAdReply :{ mediaType: 1, mediaUrl: 'https://telegra.ph/file/d31904fff9c1a480c01b7.jpg', title: 'ғᴜᴀᴅ-ʙᴏᴛ彡', thumbnail: { url: 'https://telegra.ph/file/d31904fff9c1a480c01b7.jpg' }, thumbnailUrl: 'https://telegra.ph/file/d31904fff9c1a480c01b7.jpg', sourceUrl: 'https://wa.me/stickerpack/whatsappcuppy', renderLargerThumbnail: true }}})

     
   } catch (e) {
    conn.reply(m.chat, '📮Maaf, menu sedang error', m)
    throw e
  }
}
handler.command = /^(menu2|\?)$/i

handler.register = true
handler.exp = 3

export default handler

//----------- FUNCTION -------

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, ' H ', m, ' M ', s, ' S '].map(v => v.toString().padStart(2, 0)).join('')
}
function clockStringP(ms) {
  let ye = isNaN(ms) ? '--' : Math.floor(ms / 31104000000) % 10
  let mo = isNaN(ms) ? '--' : Math.floor(ms / 2592000000) % 12
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000) % 30
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [ye, ' *Years 🗓️*\n',  mo, ' *Month 🌙*\n', d, ' *Days ☀️*\n', h, ' *Hours 🕐*\n', m, ' *Minute ⏰*\n', s, ' *Second ⏱️*'].map(v => v.toString().padStart(2, 0)).join('')
}
function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  let res = "Selamat DiniHari ☀️"
  if (time >= 4) {
    res = "Selamat Pagi 🌄"
  }
  if (time >= 10) {
    res = "Selamat Siang ☀️"
  }
  if (time >= 15) {
    res = "Selamat Sore 🌇"
  }
  if (time >= 18) {
    res = "Selamat Malam 🌙"
  }
  return res
}