const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');

module.exports.run = async (bot, message, args) => {

if (!args[0]) return message.channel.send("لطفا یک متن را بنویسید");
        
        const embed = new Discord.MessageEmbed()
        .setColor('#2219ae')
        .setTitle('🔵 | این هم متن بزرگ شده شما !')
        .setImage(`https://dynamic.brandcrowd.com/asset/logo/af6ee65c-c9a1-4758-8a7b-b181cbdeb807/logo?v=4&text=${args.join("+")}`)
        .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
        .setFooter('درخواست شده توسط' + message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }));
        
message.channel.send(embed);
}

module.exports.help = {
    name:"shout-blue",
    aliases: ["shb"]
}