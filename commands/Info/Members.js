const { MessageEmbed } = require('discord.js');

module.exports.run = async (bot, message, args) => {

    const members = message.guild.members.cache.array();
    const online = members.filter((m) => m.presence.status === 'online').length;
    const offline =  members.filter((m) => m.presence.status === 'offline').length;
    const dnd =  members.filter((m) => m.presence.status === 'dnd').length;
    const afk =  members.filter((m) => m.presence.status === 'idle').length;
    const embed = new MessageEmbed()
      .setTitle(`وضعیت اعضای سرور ${message.guild.name}`)
      .setThumbnail(message.guild.iconURL({ dynamic: true }))
      .addField("**تعداد اعضای سرور** 👥", message.guild.memberCount)
      .addField("**آنلاین** <:online:749898011991212043>", `${online}`)
      .addField("**مزاحم نشوید** <:dnd:749898020916822027>", `${afk}`)
      .addField("**ای اف کی** <:Idl:749898011978498076>", `${dnd}`)
      .addField("**آفلاین** <:Offlin:749898011538096210>", `${offline}`)
      .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
      .setFooter('درخواست شده توسط' + message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
      .setColor("#33908b")
    message.channel.send(embed);
  };

  
module.exports.help = {
  name:"membersinfo",
  aliases: [""]
}