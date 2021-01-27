const Discord = require('discord.js')

const db = require("quick.db")

module.exports.run = async (bot, message, args) => {

	let permission = message.member.hasPermission("ADMINISTRATOR");

if(!permission) return message.channel.send("شما پریمیشن ادمینستوری را ندارید `ADMINISTRATOR`")

 let cArgs = args[0]
 
 if(isNaN(cArgs)) return message.channel.send(' لطفا یک آیدی عددی صحیح را وارد کنید')
	
 db.set(`${message.guild.id}em`, cArgs)
 let embed = new Discord.MessageEmbed()
    .setThumbnail(bot.user.displayAvatarURL())
    .setTitle("شما با موفقیت این چنل را به عنوان چنل تغییرات ایموجی های سرور انتخاب کردید <#" + cArgs + ">")
    .setFooter('ادمین' + message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
    .setColor("#ff3d3d")
 message.channel.send(embed)

return;
 }
 
module.exports.help = {
  name:"set-emoji",
  aliases: [""]
}