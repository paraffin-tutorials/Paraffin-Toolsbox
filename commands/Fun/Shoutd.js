const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');

module.exports.run = async (bot, message, args) => {

if (!args[0]) return message.channel.send("لطفا یک متن را بنویسید");
        
        const embed = new Discord.MessageEmbed()
        .setColor('#f7f0f0')
        .setTitle('⚫ | این هم متن بزرگ شده شما !')
        .setImage(`https://api.alexflipnote.dev/supreme?text=${args.join("+")}&dark=true`)
        .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
        .setFooter('درخواست شده توسط' + message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }));
        
message.channel.send(embed);
}
module.exports.help = {
    name:"shout-dark",
    aliases: ["shd"]
}