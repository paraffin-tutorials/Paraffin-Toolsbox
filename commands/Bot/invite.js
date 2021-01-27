const axios = require('axios');
const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    


    let embed = new Discord.MessageEmbed()
    .setTitle(" Paraffin Toolsbox Bot ")
    .setThumbnail(bot.user.displayAvatarURL())
    .addField("لینک اینوایت من", "[IE Invite](https://discord.com/api/oauth2/authorize?client_id=771721289492070401&permissions=2145385975&scope=bot)")
    .addField("لینک سرور پشتیبانی من", "[IE Server](https://discord.gg/7jape3M)")
    .addField('درخواست شده توسط : ', `${message.author}`)
    .setColor("#33908b")
    .setFooter('Persian Paraffin ™',  `https://cdn.discordapp.com/emojis/757650060317294712.png?v=1`)
    message.channel.send(embed)





}
    module.exports.help = {
        name:"invite",
        aliases: ["IE", "IE"]
    }