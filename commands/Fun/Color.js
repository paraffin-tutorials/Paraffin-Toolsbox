const Discord = require('discord.js');


module.exports.run = async (bot, message, args) => {
    
    
    if (!args[0]) return message.reply(" : `33908b` لطفا رنگ مورد نظر خودتون رو با فورمت هکس بنویسید . مثال");
    let user = message.mentions.members.first() || message.author;

    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
  
    const embed = new Discord.MessageEmbed()
    .setColor(`#${args[0]}`)
    .setTitle(`رنگ مورد نظر : ${args[0]}`)
    .setThumbnail(`https://api.alexflipnote.dev/colour/image/${args[0]}`)
    .setImage(`https://api.alexflipnote.dev/color/image/gradient/${args[0]}`)
    .setFooter('درخواست شده توسط' + message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
    
   
        
    message.channel.send({embed});

}
module.exports.help = {
    name:"color-gradient",
    aliases: ["cg"]
  }