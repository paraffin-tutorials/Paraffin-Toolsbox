const { MessageEmbed } = require('discord.js');

module.exports.run = async (bot, message, args) => {

    let channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0]) || message.channel;

   const embed = new MessageEmbed()
       .setColor('#33908b')
       .setAuthor(`${channel.name} - (${message.guild.id})`, message.guild.iconURL())
       .setDescription(`**نام**: \n${channel.name} \n \n **آیدی:** \n${channel.id} \n \n **مدل چنل:** \n${channel.type ? 'نوشتنی📄' : 'صوتی🔊'}\n \n **آزاد برای :** \n${channel.nsfw ? 'بزرگ سالان🔞' : 'همه ی ممبر ها👶'}`)
       .addField('کتگوری چنل', `\`${message.channel.parent.name}\``)
       .addField('تاریخ ساخت چنل:', `\`${new Date(channel.createdAt).toLocaleString('fa', { dateStyle: 'full'})}\``)
       .setFooter('درخواست شده توسط' + message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
       message.channel.send(embed)
    }
 module.exports.help = {
    name:"channelinfo",
    aliases: [""]
  }