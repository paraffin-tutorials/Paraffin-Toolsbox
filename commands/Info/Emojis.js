const ReactionMenu = require('../Information/ReactionMenu');
const { MessageEmbed } = require('discord.js');


module.exports.run = async (bot, message, args) => {

    const emojis = [];
    message.guild.emojis.cache.forEach(e => emojis.push(`${e}`));

    const embed = new MessageEmbed()
        .setTitle(`pt-لیست ایموجی های سرور ${message.guild.name}**`)
        .setDescription(emojis.join(""))
        .setThumbnail(message.guild.iconURL({ dynamic: true }))
        .setColor("#33908b")
        .setFooter('درخواست شده توسط' + message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
        message.channel.send(embed)
};
  
  
module.exports.help = {
    name:"serveremojis",
    aliases: [""]
  }