const { MessageEmbed } = require("discord.js");
const functions = require("../../structures/functions");
const Discord = require('discord.js')
const db = require("quick.db");

module.exports.run = async (bot, message, args) => {

    let Embed5 = new Discord.MessageEmbed()
    .setColor("#33908b")
    .setDescription(`شما جزو سرور های پریمیوم نیستید **|** <:TickNo:764816791699980318>   `);

    let green2colore = db.fetch(`premium_${message.guild.id}`)

    if (green2colore > 0) return message.channel.send(Embed5)

    if (!args[0]) return message.reply("لطفا یک کلید واژه را  بنویسید");
    if (!args[1]) return message.reply("لطفا یک صفحه را انتخاب کنید (یک عدد بنویسید)");
    const page = functions.pages(message.guild.members.cache.filter(m => m.user.username.toLowerCase().includes(args[0].toLowerCase())).map(m => m.user.tag), 5, args[1]);
    if (!page) return message.reply("همچین اسمی در سرور وجود ندارد برای اطمینان صفحه را روی یک قرار دهید!")

    return message.channel.send(new MessageEmbed()
         .setAuthor(`کلمه کلیدی در جست و جو ${args[0]}`, message.guild.iconURL())
         .setDescription(page.join("\n"))
         .setColor("#33908b")
         .setFooter('درخواست شده توسط' + message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
         );
    }
    module.exports.help = {
        name:["ms"],
        aliases: ["member-search"]
    }