const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {
    


    let embed = new Discord.MessageEmbed()
    .setThumbnail(bot.user.displayAvatarURL())
    .setTitle("راهنمای خرید رنگ پروفایل IE <:irhelp:773097777906974730>  ")
    .addField("دستور خرید رنگ ها💲", "<a:economy:764800692992475187>`pt-buy-color red`")
    .addField("دستور فروش رنگ ها💱", "<a:economy:764800692992475187>`pt-sell-color <red>`")
    .addField("لیست رنگ های موجود 🧾", "<a:economy:764800692992475187>`pt-lcolor`")
    .setColor("#dca100")
    message.channel.send(embed)




}

module.exports.help = {
  name:"color",
  aliases: [""]
}