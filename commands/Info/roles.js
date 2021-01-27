const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

  const embed = new Discord.MessageEmbed()
    .setDescription(`${message.guild.roles.cache.map(roles => `<@&${roles.id }>`).join(" | ")}`)
    .setColor('#33908b')
  message.channel.send(embed) 
}
   
    
module.exports.help = {
    name: "serverroles",
    aliases: [""]
}