const db = require("quick.db");

module.exports.run = async (bot, message, args) => {

    let Embed5 = new Discord.MessageEmbed()
    .setColor("#33908b") 
    .setDescription(`شما جزو سرور های پریمیوم نیستید **|** <:TickNo:764816791699980318>   `);

    let green2colore = await db.fetch(`premium_${message.guild.id}`)

    if (green2colore > 0) return message.channel.send(Embed5)
    
let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
if (!member) return message.channel.send("Error404")

if (!args[0]) return message.channel.send("لطفا یک متن را بنویسید")

message.delete();

message.channel.createWebhook(`${message.member.displayName}`, {
    avatar: `${message.member.user.displayAvatarURL({ dynamic: true, size: 512})}`,
  })
    .then(webhook => {webhook.send(`${args.join(" ")}`, {
        disableEveryone: false
    })	
    message.delete;		
})
}

module.exports.help = {
    name:"botmsg",
    aliases: [""]
  }