const Discord = require('discord.js');


module.exports.run = async (bot, message, args) => {
    
    
  
    let user = message.mentions.members.first() || message.author;

    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
  
    const embed = new Discord.MessageEmbed()
    .setColor(`#33908b`)
    .setDescription(`**پسر بد **${user}`)
    .setImage(`https://api.alexflipnote.dev/bad?image=${member.user.displayAvatarURL({ dynamic: true, size: 512, format: 'png'})}`)
    .setFooter('درخواست شده توسط' + message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
    
   
        
    message.channel.send({embed});

}
module.exports.help = {
    name:"meme4",
    aliases: ["bad"]
  }