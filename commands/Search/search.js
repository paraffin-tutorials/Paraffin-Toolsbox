const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {
    


    let embed = new Discord.MessageEmbed()
    .setThumbnail(bot.user.displayAvatarURL())
    .setTitle("راهنمای  جست و جو IE <:irhelp:773097777906974730>  ")
    .addField("دستور جست و جو ممبر 👥", "<a:funny:764800694838231042>`pt-member-search(ms)`")
    .addField("دستور جست و جو بازی <:playstore:766372716164677683>", "<a:funny:764800694838231042>`pt-playstore-search(ps)`")
    .addField("دستور جست و جو آیدی 🆔", "<a:funny:764800694838231042>`pt-id-search(is)`")
    .addField("دستور جست و جو کشور <a:reg2:764389006854717441>", "<a:funny:764800694838231042>`pt-country-search(cs)`")
   
    .setColor("#9d3dff")
    message.channel.send(embed)




}

module.exports.help = {
  name:"search",
  aliases: [""]
}