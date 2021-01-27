const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');

module.exports.run = async (bot, message, args) => {
         
    const body = "https://api.alexflipnote.dev/sadcat"
        const embed = new Discord.MessageEmbed()
        .setColor('#f7f0f0')
        .setTitle('این هم متن بزرگ شده شما !')
        .setImage(body.file)
        .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
        .setFooter('درخواست شده توسط' + message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }));
        
message.channel.send(embed);
}
module.exports.help = {
    name:"sad-cat",
    aliases: ["sc"]
}