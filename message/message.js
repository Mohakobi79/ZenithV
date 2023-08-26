/* 
 /************************* 
 * Pake tinggal make 
 * jangan hapus sumbernya 
 ************************** 
 * Github: FuadXyro
 * Wa: 083837709331 
 */

module.exports = async (senderNumber, prefix,command) => {


global.mess = {
wait: '*_Tunggu sebentar ya Kak♡._*',
pribadikak: `_${command} akan dikirimkan di private chat_`,
wite: `_Sedang membuat ${command}_`,
query: 'Masukan query',
search: 'Searching...',
scrap: '*Scrapping...*',
success: 'Berhasil!',
limit: `[❕] Limit kamu sudah habis nihh\nKalau kamu mau unlimited limit, kamu bisa membeli premium, hanya 10 ribu sudah bisa membeli unlimited limit selama 2 bulan,\nSilahkan ketik ${prefix}owner untuk mengetahui pemilik bot ini dan melanjutkan pembayaran nya, makasih sudah memakai bot`,
claimOn: `Kamu sudah melakukan claim sebelumnya, Harap claim lagi pada jam `,
wrongFormat: 'Format salah, coba liat lagi di menu',

error: {
stick: 'bukan sticker itu:v',
api: 'Error api atau linkya mungkin',
Iv: 'Linknya error:v',
link : "Link error!"
},

block:{
Bowner: `Maaf kak command 「 *${command}* 」 telah di block oleh owner`,
Bsystem: `Command 「 *${command}* 」telah di block oleh system karena terjadi error`
},

 only: {
prem : 'Fitur Khusus User Premium, Silahkan Ketik .buyprem Untuk Beli',
group: 'Fitur ini dapat digunakan di Dalam Group!',
ownerB: 'Fitur Khusus Owner Bot!',
owner: 'Fitur Khusus Owner Bot!',
admin: 'Fitur dapat Digunakan oleh Admin Group!',
Badmin: 'Fitur dapat Digunakan Setelah Bot menjadi ADMIN!'
 }
  
 }

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