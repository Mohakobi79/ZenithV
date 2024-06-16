const war = 5

let handler = async (m, { conn, text, args, groupMetadata, usedPrefix, command }) => {      
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
    else who = m.chat
    if (!who) throw `✳️ Memberi label atau menyebut seseorang\n\n📌 Contoh : ${usedPrefix + command} @user`
    if (!(who in global.db.data.users)) throw `Pengguna tidak terdaftar di database.`
    let name = conn.getName(m.sender)
    let warn = global.db.data.users[who].warn
    if (warn < war) {
        global.db.data.users[who].warn += 1
        let pp = 'https://telegra.ph/file/e954d89281d88e7327a74.jpg'
        let wwarn = `
( ! ) *Pengguna yang Diperingatkan* ( ! )

▢ *Admin:* ${name}
▢ *Pengguna:* @${who.split`@`[0]}
▢ *Memperingatkan:* ${warn + 1}/${war}
▢ *Alasan:* ${text}`
        await conn.reply(m.chat, wwarn, m, { contextInfo: { mentionedJid: [who], forwardingScore: 9999, isForwarded: true, externalAdReply: { mediaType: 1, mediaUrl: pp, title: `${namebot}`, body: `By ${author}`, thumbnail: { url: pp }, thumbnailUrl: pp, sourceUrl: false, renderLargerThumbnail: true }}})
        let pcwarn = `
( ! ) *PERINGATAN* ( ! )
Anda menerima peringatan dari admin

▢ *Memperingatkan:* ${warn + 1}/${war} 
Jika Anda menerima *${war}* Peringatan bahwa Anda akan dihapus secara otomatis dari grup`
        await conn.reply(who, pcwarn, m, { contextInfo: { mentionedJid: [who], forwardingScore: 9999, isForwarded: true, externalAdReply: { mediaType: 1, mediaUrl: pp, title: `${namebot}`, body: `By ${author}`, thumbnail: { url: pp }, thumbnailUrl: pp, sourceUrl: false, renderLargerThumbnail: true }}})
    } else if (warn === war) {
        global.db.data.users[who].warn = 0
        m.reply(`( ! ) Pengguna melebihi peringatan *${war}* karena itu akan dihapus`)
        await time(3000)
        await conn.groupParticipantsUpdate(m.chat, [who], 'remove')
        m.reply(`♻️ Anda akan di keluarkan dari grup *${groupMetadata.subject}* karena Anda telah diperingatkan *${war}* kali`, who)
    }
}

handler.help = ['warn @user']
handler.tags = ['group']
handler.command = ['warn'] 
handler.group = true
handler.admin = true
handler.botAdmin = true

export default handler

const time = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms))
}