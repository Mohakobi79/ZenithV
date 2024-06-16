const rewards = {
    mythic: 1000,
    exp: 10000000,
    money: 1000000000,
    magicwand: 5000,
    darkcrystal: 5000,
    legendary: 500,
    gold: 500,
}

const cooldown = 24 * 60 * 60 * 1000

let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender]

    if (new Date() - user.checkin < cooldown) {
        let remainingTime = new Date(user.checkin + cooldown) - new Date()
        throw `Kamu sudah check-in hari ini. Mohon tunggu selama *${formatTime(remainingTime)}*`
    }

    let pp = 'https://telegra.ph/file/e6f498332a695e9e72d75.jpg'
    let text = ''

    for (let reward in rewards) {
        if (!(reward in user)) continue
        let rewardAmount = getRandom(rewards[reward])
        user[reward] += rewardAmount
        text += `*+${rewardAmount}* ${global.rpg.emoticon(reward)} ${reward}\n`
    }   

    await conn.reply(m.chat, text.trim(), m, { contextInfo: { isForwarded: true, forwardingScore: 9999, externalAdReply :{ mediaType: 1, mediaUrl: pp, title: `${htki} C H E C K - I N ${htka}`, body: '🌱┊ RPG WhatsApp Bot', thumbnail: { url: pp }, thumbnailUrl: pp, renderLargerThumbnail: true }}})
    user.checkin = new Date() * 1
}

handler.help = ['check-in']
handler.tags = ['rpg']
handler.command = /^(check-in)$/i
handler.register = true
handler.group = true
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