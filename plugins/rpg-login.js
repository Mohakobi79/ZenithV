/**
 * Jangan Di Hapus!!
 * 
 * Buatan @FuadXyro
 * Github: https://github.com/FuadXyro
 * 
 * Ingin bikin fitur tapi tidak bisa coding?
 * hubungi: https://wa.me/6283142843183
 * 
 */
const rewards = {
    emerald: 1000,
    exp: 10000000,
    money: 1000000000,
    potion: 5000,
    iron: 5000,
    legendary: 500,
    limit: 500,
}

const cooldown = 24 * 60 * 60 * 1000

let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender]

    if (new Date() - user.login < cooldown) {
        let remainingTime = new Date(user.login + cooldown) - new Date()
        throw `Kamu sudah mengclaim hari ini. Mohon tunggu selama *${formatTime(remainingTime)}*`
    }

    let pp = 'https://telegra.ph/file/035518ac5c2281ffca843.jpg'
    let text = ''

    for (let reward in rewards) {
        if (!(reward in user)) continue
        let rewardAmount = getRandom(rewards[reward])
        user[reward] += rewardAmount
        text += `*+${rewardAmount}* ${global.rpg.emoticon(reward)} ${reward}\n`
    }

    let offlineTime = new Date() - user.login
    text += `\nNote ( ! ): Kamu tidak login selama: ${formatTime(offlineTime)}`

    await conn.reply(m.chat, text.trim(), m, { contextInfo: { isForwarded: true, forwardingScore: 9999, externalAdReply :{ mediaType: 1, mediaUrl: pp, title: `${htki} L O G I N ${htka}`, body: '🌱┊ RPG WhatsApp Bot', thumbnail: { url: pp }, thumbnailUrl: pp, renderLargerThumbnail: true }}})
    user.login = new Date() * 1
}

handler.help = ['login']
handler.tags = ['rpg']
handler.command = /^(login)$/i
handler.register = true
handler.cooldown = cooldown

export default handler

function getRandom(max) {
    return Math.floor(Math.random() * (max + 1))
}

function formatTime(ms) {
    let seconds = Math.floor(ms / 1000)
    let minutes = Math.floor(seconds / 60)
    let hours = Math.floor(minutes / 60)

    seconds %= 60
    minutes %= 60

    return `${hours} jam ${minutes} menit ${seconds} detik`
}