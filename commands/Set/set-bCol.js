const Discord = require('discord.js')

const db = require("quick.db")

module.exports.run = async (bot, message, args) => {

	let permission = message.member.hasPermission("ADMINISTRATOR");

if(!permission) return message.channel.send("شما پریمیشن ادمینستوری را ندارید `ADMINISTRATOR`")

 let cArgs = args.join(" ");
 
 if(!cArgs) return message.channel.send('رنگ امبد برای خداحافظی را بنویسید')

 db.set(`${message.guild.id}bCol`, cArgs)
 let embed = new Discord.MessageEmbed()
    .setThumbnail(bot.user.displayAvatarURL())
    .setTitle(`شما با موفقیت این رنگ را به عنوان رنگ امبد خداحافظی انتخاب کردید \n ${cArgs}`)
    .setFooter('ادمین' + message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
    .setColor("#ff3d3d")
 message.channel.send(embed)

return;
 }
 
module.exports.help = {
  name:"set-bcolor",
  aliases: [""]
}