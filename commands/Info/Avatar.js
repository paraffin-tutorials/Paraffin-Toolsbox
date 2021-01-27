const Discord = require('discord.js');
const axios = require('axios');

module.exports.run = async (bot, message, args) => {
    
    
  
    let user = message.mentions.members.first() || message.author;

    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
  
    
    let getInfo3 = async () => {
            
        let response3 = await axios.get(`https://api.codebazan.ir/caption/?pic=${member.user.displayAvatarURL({ dynamic: true, size: 512, format: 'png'})}`);
        let info3 = response3.data;
        return info3;
      };
        let infoValue3 = await getInfo3();
    
    const embed = new Discord.MessageEmbed()
    .setColor("#33908b")
    .setImage(member.user.displayAvatarURL({ dynamic: true, size: 512}))
    .setDescription(`<@${member.user.id}> آواتار \n **${infoValue3.messagefa}** \n\n [فرمت آواتار شما](${member.user.displayAvatarURL({ dynamic: true, size: 512})}) **|** [PNG](${member.user.displayAvatarURL({ dynamic: true, size: 512, format: 'png'})}) **|** [JPEG](${member.user.displayAvatarURL({ dynamic: true, size: 512, format: 'jpeg'})}) **|** [WEBP](${member.user.displayAvatarURL({ dynamic: true, size: 512, format: 'webp'})})`)
    .setFooter('درخواست شده توسط' + message.member.displayName,  message.author.displayAvatarURL({ dynamic: true, size: 1024 }))

    message.channel.send({embed});

}
module.exports.help = {
    name:"avatar",
    aliases: [""]
  }