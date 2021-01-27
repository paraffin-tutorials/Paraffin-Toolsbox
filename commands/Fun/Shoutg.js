const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');

module.exports.run = async (bot, message, args) => {

if (!args[0]) return message.channel.send("لطفا یک متن را بنویسید");
        
        const embed = new Discord.MessageEmbed()
        .setColor('#d39800')
        .setTitle('🟡 | این هم متن بزرگ شده شما !')
        .setImage(`https://dynamic.brandcrowd.com/asset/logo/e8009c68-61f0-4688-97aa-d6b0368b2fc6/logo?v=4&text=${args.join("+")}`)
        .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
        .setFooter('درخواست شده توسط' + message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }));
        
message.channel.send(embed);
}

module.exports.help = {
    name:"shout-gold",
    aliases: ["shg"]
}