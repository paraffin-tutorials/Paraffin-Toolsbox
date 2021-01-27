const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
	var a = message.id;
	if(!message.member.hasPermission('KICK_MEMBERS')) return message.reply("شما پریمیشن کیک کردن را ندارید");

	var useri = message.mentions.members.first();

	if(!useri) return message.reply("شما هیچ کس را منشن نکردید!");

	var reas = args.splice(1).join(' ');
	if(!reas){
		reas = "شما هیچ دلیلی برای کیک کردن ننوشتید!"; //you can make reason compulsory by returning a message asking the author to give a reason
	}

	
	var jad = "";
	var embs = new discord.MessageEmbed()
		.setColor('#33908b') //hex color
		.setTitle(`یک نفر از سرور کیک شد `)
		.addField('کیک شده: ',useri,true)
		.addField('توسط: ',message.author,true)
		.addField('دلیل: ',reas);
	if(!useri.user.bot){
	await useri.send(`شما کیک شدید از سرور : ${useri.guild} توسط : ${reas}`);
	}
	await useri.kick().catch(err =>{
		jad = err;
	});
	if(!jad){
		return message.channel.send(embs);
	}
	else{
		return message.channel.send("ERROR:404");
	}
};

module.exports.help = {
	name: "kick",
    aliases: ['remove']
};
