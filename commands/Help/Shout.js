const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {
    


    let embed = new Discord.MessageEmbed()
    .setThumbnail(bot.user.displayAvatarURL())
    .setTitle("راهنمای دستورات  بزرگ کردن متن بات IE 📢")
    .addField("بزرگ کردن متن رنگ سیاه⚫", "<a:funny:764800694838231042>`pt-shout-dark(shs) <متن>`")
    .addField("بزرگ کردن متن رنگ سفید⚪", "<a:funny:764800694838231042>`pt-shout-white(shw) <متن>`")
    .addField("بزرگ کردن متن رنگ قرمر🔴", "<a:funny:764800694838231042>`pt-shout-red(shr) <متن>`")
    .addField("بزرگ کردن متن رنگ آبی🔵", "<a:funny:764800694838231042>`pt-shout-blue(shb) <متن>`")
    .addField("بزرگ کردن متن رنگ طلایی🟡", "<a:funny:764800694838231042>`pt-shout-gold(shg) <متن>`")
    .addField("بزرگ کردن متن به صورت نعون🔘", "<a:funny:764800694838231042>`pt-shout-neon(shn) <متن>`")
    .addField("بزرگ کردن متن رنگ نارنجی (فان)🟠", "<a:funny:764800694838231042>`pt-shout-ph(shp) <متن2> <متن1>`")

    .setColor("#9d3dff")
    .setFooter('درخواست شده توسط' + message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
    message.channel.send(embed)




}

module.exports.help = {
  name:"cshout",
  aliases: ["shout"]
}