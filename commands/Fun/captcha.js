const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
    

    if (!args[0]) return message.channel.send("لطفا یک متن را بنویسید");

    let embed = new Discord.MessageEmbed()
    .setTitle("اگر ربات نیستید تیک زیر را بنید <:captcha:756107890430967868> ")
    .setImage(`https://api.alexflipnote.dev/captcha?text=${args.join("+")}`)
    .setColor("#33908b")
    .setFooter('درخواست شده توسط' + message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
    message.channel.send(embed)




}

module.exports.help = {
  name:"captcha",
  aliases: [""]
}