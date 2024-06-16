let handler = async (m, { conn, participants, groupMetadata }) => {
    const pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './src/avatar_contact.png'
    const { isBanned, welcome, detect, sWelcome, sBye, sPromote, sDemote, antiLink, delete: del } = global.db.data.chats[m.chat]
    const groupAdmins = participants.filter(p => p.admin)
    const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n')
    const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net'
    let text = `
*Group Admins:*
${listAdmin}
`.trim()

    await conn.reply(m.chat, text, m, { contextInfo: { mentionedJid: [...groupAdmins.map(v => v.id), owner], forwardingScore: 9999, isForwarded: true, externalAdReply: { mediaType: 1, mediaUrl: pp, title: `${htki} L I S T  A D M I N ${htka}`, thumbnail: { url: pp }, thumbnailUrl: pp, sourceUrl: sgc, renderLargerThumbnail: true }}})
}

handler.help = ['listadmin']
handler.tags = ['group']
handler.command = /^(listadmin)$/i

handler.group = true

export default handler