const Discord = require('discord.js');


module.exports.run = async (bot, message, args) => {
    
    
    if (!args[0]) return message.reply("لطفا متن مورد نظر خودتون رو بنویسید");

    let user = message.mentions.members.first() || message.author;

    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
  
    const embed = new Discord.MessageEmbed()
    .setColor(`#33908b`)
    .setDescription(`**در حال زنگ زدن ${user}**`)
    .setImage(`https://api.alexflipnote.dev/calling?text=${args.join("+")}`)
    .setFooter('درخواست شده توسط' + message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
    
   
        
    message.channel.send({embed});

}
module.exports.help = {
    name:"meme2",
    aliases: [""]
  }