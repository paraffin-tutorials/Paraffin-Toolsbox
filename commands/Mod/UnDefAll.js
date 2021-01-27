const Discord = require("discord.js")
const db = require("quick.db")
module.exports.run = async (bot, message, args) => {
    let Embed5 = new Discord.MessageEmbed()
    .setColor("#33908b")
    .setDescription(`شما جزو سرور های پریمیوم نیستید **|** <:TickNo:764816791699980318>   `);

    let green2colore = await db.fetch(`premium_${message.guild.id}`)

    if (green2colore > 0) return message.channel.send(Embed5)

  var a = message.id;
  let b;
  if(!message.member.hasPermission('MUTE_MEMBERS')) return message.reply("شما پریمیشن میوت کردن را ندارید");
  if(!message.member.voice.channel) return message.reply("شما درون هیچ ویس چنلی نیستید !!!");
  let channel = message.member.voice.channel;
  for (let memberi of channel.members){
    await memberi[1].voice.setDeaf(false);
  }
  	
  const emall = new Discord.MessageEmbed()
  
  .setColor('#33908b')
  .setThumbnail(message.guild.iconURL({ dynamic: true }))
  .setDescription(`**همه اعضای چنل آن دیفن شدند :loud_sound:\n\n درخواست شده توسط : ${message.author}**`)
  .setFooter('Paraffin Toolsbox™ ')
  message.channel.send(emall).then((msg)=> {
		b = msg.id;
  });
  await message.channel.messages.fetch(a).then(msg => msg.delete({ timeout: 1000 }));
  await message.channel.messages.fetch(b).then(msg => msg.delete({ timeout: 3000 }));
};

module.exports.help = {
  name: "undeafenall",
  aliases: ['unde']
};
