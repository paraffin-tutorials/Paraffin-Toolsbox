const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {
    


    let embed = new Discord.MessageEmbed()
    .setThumbnail(bot.user.displayAvatarURL())
    .setTitle("راهنمای دستورات بات IE <:irhelp:773097777906974730>  ")
    .addField("دستورات سرگرمی", "<a:funny:764800694838231042> `pt-cfunny`")

    .addField("دستورات اطلاعات", "<a:info:764800698947862568> `pt-cinfo`")
    .addField("دستورات مودریشن :", "<a:moderation:764800697639632908> `pt-cmoderation`")
    .setColor("#33908b")
    message.channel.send(embed)




}

module.exports.help = {
  name:"cmd",
  aliases: [""]
}