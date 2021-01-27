const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {
    


    let embed = new Discord.MessageEmbed()
    .setThumbnail(bot.user.displayAvatarURL())
    .setTitle("راهنمای دستورات مودریشن بات IE <:irhelp:773097777906974730>  ")
    
   
    .addField("راهنمای ویس چنل 🔊", "<a:moderation:764800697639632908> `pt-voice`")
    .addField("راهنمای سرور 📜", "<a:moderation:764800697639632908> `pt-server`")
    .addField("راهنمای ایموجی 😃", "<a:moderation:764800697639632908> `pt-emoji`")
    .addField("راهنمای گیواوی <a:wel3:768435154204360744>" , "<a:moderation:764800697639632908> `pt-cgiveaway`")
    .addField("راهنمای انتخاب چنل های لاگ📰" , "<a:moderation:764800697639632908> `pt-clog`")
    .setColor("#ff3d3d")
    message.channel.send(embed)
}

module.exports.help = {
  name:"cmoderation",
  aliases: [""]
}