const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
     
    if(!args[0]) return message.channel.send("نام ویدیو را بنویسید")

    const image = ('https://www.y2mate.com/themes/images/logo.png')
    
    let question = args.join("+");
    
    const embed = new Discord.MessageEmbed()
    .setThumbnail(`https://i.ytimg.com/vi/${question}/0.jpg`)
    .setTitle('<:Youtube:766036743534542850> | دانلود از یوتیوب')
    .setDescription(`[نسخه صوتی](https://www.y2mate.com/youtube-mp3/${question})\n\n[نسخه تصویری](https://www.y2mate.com/youtube/${question})`)
    .setFooter('درخواست شده توسط' + message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
    .setColor('#c91417')
    
    message.channel.send(embed)
}

module.exports.help = {
    name:"download-youtube",
    aliases: ["dyt"]
}