const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');

module.exports.run = async (bot, message, args) => {

if (!args[0]) return message.channel.send("لطفا یک متن را بنویسید");
        
        const embed = new Discord.MessageEmbed()
        .setColor('#48b2ff')
        .setTitle('🔘 | این هم متن بزرگ شده شما !')
        .setImage(`https://dynamic.brandcrowd.com/asset/logo/ffe3c3c6-c7b2-4a59-a74d-17712a327dda/logo?v=4&text=${args.join("+")}`)
        .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
        .setFooter('درخواست شده توسط' + message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }));
        
message.channel.send(embed);
}

module.exports.help = {
    name:"shout-neon",
    aliases: ["shn"]
}