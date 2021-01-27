const { MessageEmbed } = require('discord.js');


module.exports.run = async (bot, message, args) => {
      let role = message.mentions.roles.first() || message.guild.roles.cache.get(args[0]);

      if (!role)
         return message.channel.send(new MessageEmbed().setColor('#33908b').setDescription("این رول را پیدا نکردم"));

      message.channel.send(
         new MessageEmbed()
         .setFooter('درخواست شده توسط' + message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
            .setColor(`${role.hexColor}`)
            .setTimestamp()
            .setAuthor(`${message.guild.name} - (${message.guild.id})`, message.guild.iconURL())
            .setDescription(` **نام**: \n${role.name}\n\n**آیدی رول:** \n${role.id}\n\n **تعداد ممبر های دارای رول **: \n${role.members.size}\n\n**کد رنگ رول:** \n${role.hexColor} \n\n**تعداد رول: پایین تر** \n${role.rawPosition}`)
           
            )
};
    
module.exports.help = {
    name: "roleinfo",
    aliases: [""]
  }