const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {
    


    let embed = new Discord.MessageEmbed()
    .setThumbnail(bot.user.displayAvatarURL())
    .setTitle("راهنمای دستورات جوین و لفت بات IE <:irhelp:773097777906974730>  ")
    
    .addField("انتخاب چنل خوش آمد گویی <a:wel3:768435154204360744> ", "<a:moderation:764800697639632908> `pt-set-welcome <آیدی چنل>`")
    .addField("انتخاب رنگ پیام خوش آمد گویی🔲", "<a:moderation:764800697639632908> `pt-set-wcolor <آیدی رنگ || نام رنگ>`")
    .addField("انتخاب پیام خوش آمد گویی 💬", "<a:moderation:764800697639632908> `pt-set-wchat <پیام خوش آمد گویی>`")
    .addField("انتخاب چنل خداحافظی <a:waving_lol:757532825132990505> ", "<a:moderation:764800697639632908> `pt-set-bye <آیدی چنل>`")
    .addField("انتخاب پیام خداحافظی 💬", "<a:moderation:764800697639632908> `pt-set-bchat <پیام خداحافظی>`")
    .addField("انتخاب رنگ خداحافظی🔳", "<a:moderation:764800697639632908> `pt-set-bcolor <آیدی رنگ || نام رنگ>`")
    .setColor("#ff3d3d")
    message.channel.send(embed)
}

module.exports.help = {
  name:"cwelcome",
  aliases: [""]
}