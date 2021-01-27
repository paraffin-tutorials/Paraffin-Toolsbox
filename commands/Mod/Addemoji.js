const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
        if(!message.guild.me.hasPermission('MANAGE_EMOJIS')) return message.reply('من پریمیشن `MANAGE_EMOJIS` را ندارم')
        if(!message.member.hasPermission('MANAGE_EMOJIS')) return message.reply('شما پریمیشن `MANAGE_EMOJIS` را ندارید')
 
        if(!args[0]) return message.reply(`نام ایموجی را بنویسید`)
        if(!args[1]) return message.reply(`لینک ایموجی رو هم بنویسید`)
 
        try {
            message.guild.emojis.create(args[1], args[0]).then(emoji => {
                let embed = new Discord.MessageEmbed()
                .setTitle('**ایموجی در سرور ادد شد 😃**')
                .setThumbnail(`${args[1]}`)
                .addField('ایموجی', `${emoji}`)
                .addField('ادد کننده', `${message.author}`)
                .setColor("#33908b")
                message.channel.send(embed)
            })
        } catch (err) {
            return message.channel.send(`${err}`)
        }
    }

    module.exports.help = {
        name: "add-emoji",
        aliases: ["adde"]
    }
