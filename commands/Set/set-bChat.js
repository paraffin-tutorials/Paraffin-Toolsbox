const Discord = require('discord.js')

const db = require("quick.db")

module.exports.run = async (bot, message, args) => {

	let permission = message.member.hasPermission("ADMINISTRATOR");

if(!permission) return message.channel.send("شما پریمیشن ادمینستوری را ندارید `ADMINISTRATOR`")

 let cArgs = args.join(" ");
 
 if(!cArgs) return message.channel.send('متن برای خداحافظی با ممبر را بنویسید')

 db.set(`${message.guild.id}bChat`, cArgs)
 let embed = new Discord.MessageEmbed()
    .setThumbnail(bot.user.displayAvatarURL())
    .setTitle("شما با موفقیت این متن را به عنوان متن خداحافظی با ممبر انتخاب کردید \n ${cArgs}")
    .setFooter('ادمین' + message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
    .setColor("#ff3d3d")
 message.channel.send(embed)
return;
 }
 
module.exports.help = {
  name:"set-bchat",
  aliases: [""]
}