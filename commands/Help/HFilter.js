const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {
    


    let embed = new Discord.MessageEmbed()
    .setThumbnail(bot.user.displayAvatarURL())
    .setTitle("راهنمای دستورات گرفتن آواتار شخص با فیلترIE 🎴")
    .addField("(سیاه و سفید کردن عکس) فیلتر یک:film_frames: ", "<a:funny:764800694838231042>`pt-filter 1 <منشن شخص مورد نظر>`")
    .addField("(حرارتی کردن عکس) فیلتر دو:film_frames: ", "<a:funny:764800694838231042>`pt-filter 2 <منشن شخص مورد نظر>`")
    .addField("(قدیمی کردن عکس) فیلتر سه:film_frames: ", "<a:funny:764800694838231042>`pt-filter 3 <منشن شخص مورد نظر>`")
    .addField("(به هم ریختن عکس) فیلتر چهار:film_frames: ", "<a:funny:764800694838231042>`pt-filter 4 <منشن شخص مورد نظر>`")

    .setColor("#9d3dff")
    .setFooter('درخواست شده توسط' + message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
    message.channel.send(embed)




}

module.exports.help = {
  name:"filters",
  aliases: [""]
}