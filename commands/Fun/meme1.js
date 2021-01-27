const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');

module.exports.run = async (bot, message, args) => {

if (!args[0]) return message.channel.send("لطفا یک متن را بنویسید");
if (!args[1]) return message.channel.send("لطفا متن دوم را هم بنویسید");
        
        const embed = new Discord.MessageEmbed()
        .setColor('#fdff00')
        .setTitle('میم شما به این شکل در اومد!')
        .setImage(`https://api.alexflipnote.dev/drake?top=${args[0]}&bottom=${args[1]}`)
        .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
        .setFooter('درخواست شده توسط' + message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }));
        
message.channel.send(embed);
}
module.exports.help = {
    name:"meme1",
    aliases: ["drake"]
}