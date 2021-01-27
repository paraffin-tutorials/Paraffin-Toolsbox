const { MessageEmbed } = require('discord.js')
const os = require('os')

module.exports.run = async (client, message, args) => {
        const embed = new MessageEmbed()
            .setThumbnail(client.user.displayAvatarURL())
            .setTitle('Paraffin Development')
            .setURL('https://discord.gg/7jape3M')
            .setColor("#33908b")
            .addField("مشکل بات رو بنویسید", "`pt-bug <مشکل شما با بات>`")
    .addField("پیشنهادات خودتون رو بنویسید", "`pt-proposal <ایده و یا پیشنهاد خودتون رو بنویسید>`")
    .setFooter('Persian Paraffin ™',  `https://cdn.discordapp.com/emojis/757650060317294712.png?v=1`)

        await message.channel.send(embed)
    }
  
    module.exports.help = {
        name:"support",
        aliases: ["s"]
      }