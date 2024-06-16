import fuad from 'btch-downloader'
import fetch from 'node-fetch'; 

let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `Input link`
    let json = await fuad.igdl((args[0]))
    let fetchStartTime = new Date();
    let fetchResponse = await fetch(args[0]);
    let fetchEndTime = new Date();
    let fetchTime = fetchEndTime - fetchStartTime;
    for (let i of json) {
    conn.sendFile(m.chat, i.url, 'instagram.mp4', `◦  *Fetching* : ${fetchTime} ms`, m)
    }
}
handler.help = ['ig'].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^(ig(dl)?)$/i

handler.register = true
handler.limit = true

export default handler