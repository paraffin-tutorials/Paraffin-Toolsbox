const { MessageEmbed } = require("discord.js");
const userReg = RegExp(/<!?(\d+)</)

module.exports.run = async (client, message, args) => {
    const userID = userReg.test(args[0]) ? userReg.exec(args[0])[1] : args[0]
    const mentionedUser = await message.client.users.fetch(userID).catch(() => null)

    if (!message.member.hasPermission('BAN_MEMBERS')) {
        return message.channel.send("شما پریمیشن بن کردن را ندارید")
    }
    else if (!message.guild.me.hasPermission('BAN_MEMBERS')) {
        return message.channel.send("من پریمیشن بن کردن را ندارم")
    }
    else if (!mentionedUser) {
        return message.channel.send("لطفا یک نفر را منشن کنید")
    }

    const allBans = await message.guild.fetchBans()
    const bannedUser = allBans.get(mentionedUser.id)

    if (!bannedUser) {
        return message.channel.send('این ممبر بن نشده است')
    }

    const reason = args.slice(1).join(" ")

    message.guild.members.unban(mentionedUser.id, [reason]).catch(err => console.log(err))

    
	var embs = new MessageEmbed()
    .setColor('#33908b') //hex color
    .setTitle(`یک نفر از سرور آن بن شد `)
    .addField('آن بن شده: ', `${bannedUser}`,true)
    .addField('توسط: ', `${message.author}`,true)
    .addField('دلیل: ', `${reason}`, true);
    message.channel.send(embs)
}

module.exports.help = {
    name:"unban",
    aliases: [""]
  }