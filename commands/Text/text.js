const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {
    


    let embed = new Discord.MessageEmbed()
    .setThumbnail(bot.user.displayAvatarURL())
    .setTitle("راهنمای قابلیت های سرگرمی تکست بات IE <a:funny:764800694838231042> ")
    .addField('تبدیل متن شما به فایل تکست <a:setting:757532822654418974> ', '<a:funny:764800694838231042>`pt-txt <متن شما>`')
    .addField('تبدیل متن شما به بنر 📟', '<a:funny:764800694838231042>`pt-banner <متن شما>`')
    .addField('(به صورت پیام)از طرف بات پیام دهید <a:say:765146452372488222> ', '<a:funny:764800694838231042>`pt-say <متن شما>`')
    .addField('(به صورت امبد)از طرف بات پیام دهید <a:say:765146452372488222> ', '<a:funny:764800694838231042>`pt-embed-say <متن شما>`')
    .addField('تبدیل متن شما به صدا 🔊', '<a:funny:764800694838231042>`pt-tts <متن شما>`')
    .addField('1 هش کردن متن شما 🤬', '<a:funny:764800694838231042>`pt-1hash <متن شما>`')
    .addField('2 هش کردن متن شما 🤬', '<a:funny:764800694838231042>`pt-2hash <متن شما>`')
    .addField('تبدیل شما به بات 🤖', '<a:funny:764800694838231042>`pt-botmsg <متن شما>`')
  
    .setColor("#9d3dff")
    message.channel.send(embed)




}

module.exports.help = {
  name:"text",
  aliases: [""]
}