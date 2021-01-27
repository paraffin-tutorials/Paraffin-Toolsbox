const { MessageEmbed } = require("discord.js");

module.exports.run = async (bot, message, args) => {
	var a = message.id;

	if(!message.member.hasPermission('BAN_MEMBERS')) return message.reply("شما پریمیشن بن کردن را ندارید");
	if(!message.guild.me.hasPermission('BAN_MEMBERS')) return message.reply("من پریمیشن بن کردن را ندارم");
	var user = message.mentions.users.first();

	if(!user) return message.reply("شما هیچ کس را منشن نکردید!");

	var reas = args.splice(1).join(' ');
	if(!reas) return message.reply("شما هیچ دلیلی برای بن کردن ننوشتید!");

	var jad = "";

	var embs = new MessageEmbed()
    .setColor('#33908b') //hex color
    .setTitle(`یک نفر از سرور بن شد `)
    .addField('بن شده: ',user,true)
    .addField('توسط: ',message.author,true)
	.addField('دلیل: ',reas);
	
    message.guild.members.ban(user).catch(err =>{
		jad = err;
	});
	if(!useri.user.bot){
		await useri.send(`شما بن شدید از سرور : ${useri.guild} توسط : ${reas}`);
		}
	if(!jad){
		return message.channel.send(embs);
	}
	else{
		return message.channel.send("ERROR:404");
	}

};


module.exports.help = {
	name: "ban",
    aliases: [""]
};
