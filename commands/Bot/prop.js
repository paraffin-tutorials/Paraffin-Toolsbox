const Discord = require('discord.js');
const webhookClient = new Discord.WebhookClient("759815624259141692", "kn6toY_JtEzmSsjp9ZDlV7Wri5K99PLMOvBXP66CZ2cIVV8Jz_1Yeef2MpSp1R_uQYWs");

module.exports.run = async (client, message, args) => {
    if(!args.join(" ")){
        return message.channel.send("لطفا پیشنهاد خودتون رو برای بات بنویسید!")
      }
	try {
		webhookClient.send(`${args.join(" ")}`, {
			username: `${message.member.displayName}`,
			avatarURL: `${message.member.user.displayAvatarURL({ dynamic: true, size: 512})}`,
		});
	} catch (error) {
		console.error('Error trying to send: ', error);
    }
    
    message.channel.send(`> تشکر از شما که پیشنهادات خودتون رو به ما میگویید \n > ${args.join(" ")} `);
    message.delete();
};


module.exports.help = {
    name:"proposal",
    aliases: [""]
}