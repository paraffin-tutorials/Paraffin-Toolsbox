
const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {
    

    let user = message.mentions.members.first() || message.author;
    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
 if (args[0] == '1') {
        let Embed5 = new Discord.MessageEmbed()
        .setColor("#33908b")
        .setDescription(`فیلتر **1** روی عکس پروفایل <@${member.user.id}> به صورت زیر شد !`)
        .setImage(`https://some-random-api.ml/canvas/greyscale?avatar=${member.user.displayAvatarURL({ dynamic: true, size: 512, format: 'png'})}`)
        message.channel.send(Embed5)
       
} if (args[0] == '2') {
    let Embed5 = new Discord.MessageEmbed()
    .setColor("#33908b")
    .setDescription(`فیلتر **2** روی عکس پروفایل <@${member.user.id}> به صورت زیر شد !`)
    .setImage(`https://some-random-api.ml/canvas/invert?avatar=${member.user.displayAvatarURL({ dynamic: true, size: 512, format: 'png'})}`)
    message.channel.send(Embed5)
   
} if (args[0] == '3') {
    let Embed5 = new Discord.MessageEmbed()
    .setColor("#33908b")
    .setDescription(`فیلتر **3** روی عکس پروفایل <@${member.user.id}> به صورت زیر شد !`)
    .setImage(`https://some-random-api.ml/canvas/sepia?avatar=${member.user.displayAvatarURL({ dynamic: true, size: 512, format: 'png'})}`)
    message.channel.send(Embed5)
   
} if (args[0] == '4') {
  let Embed5 = new Discord.MessageEmbed()
  .setColor("#33908b")
  .setDescription(`فیلتر **4** روی عکس پروفایل <@${member.user.id}> به صورت زیر شد !`)
  .setImage(`https://api.alexflipnote.dev/filter/magik?image=${member.user.displayAvatarURL({ dynamic: true, size: 512, format: 'png'})}`)
  message.channel.send(Embed5)
}
}
  module.exports.help = {
    name:"filter",
    aliases: [""]
  }