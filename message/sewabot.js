/* 
 /************************* 
 * Pake tinggal make 
 * jangan hapus sumbernya 
 ************************** 
 * Github: FuadXyro
 * Wa: 083837709331 
 */




exports.dada = (prefix, pushname, ucapanWaktu) => {
return `${ucapanWaktu} kak ${pushname}
Berikut adalah list harga untuk sewa bot

*SEWA BOT*
🌀 *Harga Sewa*
▸ Rp. 5.000 per group
- Masa aktif 7 hari
▸ Rp. 10.000 per group
- Masa aktif 30 Hari
▸ Rp. 25.000 per grup
- Masa aktif 3 bulan


*PREMIUM*
🌀 *User Premium*
*Harga Premium*
- Rp. 10.000 per user
> Masa aktif 2 bulan
- Rp. 25.000 per user
> Masa aktif 5 bulan

*Fitur Premium*
• Limit dan limit game tanpa batas
• Klaim lebih banyak EXP Harian
• Bisa membuat/mengubah watermark stiker contoh: .take aku|kamu
• Dan masih banyak lagi

𝗡𝗢𝗧𝗘 : 

Bot on 24 jam tapi kadang 
juga mati klo lgi ada error 
atau lgi perbaikan bug.

Kalo mau sewa bisa chat
owner Bot
Wa: 6283837709331
`
}

const fs = require("fs");
const { color } = require("../lib/color");
const chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})

    




















