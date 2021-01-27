const Discord = require('discord.js')

const db = require("quick.db")

module.exports.run = async (bot, message, args) => {

	let permission = message.member.hasPermission("ADMINISTRATOR");

if(!permission) return message.channel.send("شما پریمیشن ادمینستوری را ندارید `ADMINISTRATOR`")

 let cArgs = args[0];
 
 if(!cArgs) return message.channel.send('لطفا پریفیکس مورد نظر خود را بنویسید')

 db.set(`${message.guild.id}prefix`, cArgs)
 
 var embs = new MessageEmbed()
 .setColor('#33908b') //hex color
 .setTitle(`پریفیکس بات عوض شد `)
.addField('پریفیکس جدید', `${cArgs}`)
 message.channel.send(embs)
return;
 }
 
module.exports.help = {
  name:"set-prefix",
  aliases: [""]
}