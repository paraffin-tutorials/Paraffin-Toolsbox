const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');

module.exports.run = async (bot, message, args) => {

if (!args[0]) return message.channel.send("لطفا یک متن را بنویسید");
        
        const embed = new Discord.MessageEmbed()
        .setColor('#0b0a0a')
        .setTitle('⚪ | این هم متن بزرگ شده شما !')
        .setImage(`https://api.alexflipnote.dev/supreme?text=${args.join("+")}&light=true`)
        .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
        .setFooter('درخواست شده توسط' + message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }));
        
message.channel.send(embed);
}

module.exports.help = {
    name:"shout-white",
    aliases: ["shw"]
}