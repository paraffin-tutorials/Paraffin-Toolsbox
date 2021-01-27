const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {
    


    let embed = new Discord.MessageEmbed()
    .setThumbnail(bot.user.displayAvatarURL())
    .setTitle("راهنمای دستورات ساخت میم بات IE 😜")
    .addField(" \nساخت میم 1 <:drake1:758000346143522816>", "<a:funny:764800694838231042>`pt-meme1 <متن2> <متن1>`", true)
    .addField(" \nساخت میم 2 📞", "<a:funny:764800694838231042>`pt-meme2 <متن2> <متن1>`", true)
    .addField(" \nساخت میم 3 🧂", "<a:funny:764800694838231042>`pt-meme3 <منشن شخص مورد نظر>`", true)
    .addField(" \nساخت میم 4 😡", "<a:funny:764800694838231042>`pt-meme4 <منشن شخص مورد نظر>`", true)
    .setColor("#9d3dff")
    .setFooter('درخواست شده توسط' + message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
    message.channel.send(embed)




}

module.exports.help = {
  name:"cmeme",
  aliases: ["meme"]
}