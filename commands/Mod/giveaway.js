const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {

    let embed = new Discord.MessageEmbed()
    .setThumbnail(bot.user.displayAvatarURL())
    .setTitle("راهنمای دستورات گیواوی بات IE <:irhelp:773097777906974730>  ")
    
    .addField("شروع گیواوی :gift:", "<a:moderation:764800697639632908> `pt-start-giveaway <جایزه> <تعدادبرنده ها> <زمان گیواوی> <منشن چنل مورد نظر>`")
    .addField("تغییر برنده های گیواوی :gift:", "<a:moderation:764800697639632908> `pt-reroll-giveaway <ایدی پیام گیواوی>`")
    .addField("تمام کردن گیواوی :gift:", "<a:moderation:764800697639632908> `pt-end-giveaway <ایدی پیام گیواوی>`")

    .setColor("#ff3d3d")
    message.channel.send(embed)

}

module.exports.help = {
  name:"cgiveaway",
  aliases: [""]
}