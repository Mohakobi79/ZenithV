import fetch from 'node-fetch';

let handler = async (m, { text, usedPrefix, command }) => {
  if (!text) throw `*Contoh:* ${usedPrefix + command} 112.90.150.204`;
  try {
    await m.reply('Mohon tunggu sebentar...');
    let res = await fetch(`https://ipwho.is/json/${text}`).then(response => response.json());
    let location = { latitude: res.latitude, longitude: res.longitude };
    await conn.sendMessage(m.chat, { location }, { ephemeralExpiration: 604800 });
    await delay(2000);
    conn.reply(m.chat, JSON.stringify(res, null, 2), m);
  } catch (e) { 
    throw { error: `IP ${text} tidak ditemukan!` };
  }
}

handler.command = handler.help = ['cekip'];
handler.tags = ['tools'];
handler.premium = false;

export default handler;

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}