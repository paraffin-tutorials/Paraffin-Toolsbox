const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {
    


    let embed = new Discord.MessageEmbed()
    .setThumbnail(bot.user.displayAvatarURL())
    .setTitle("راهنمای دستورات اطلاعات بات IE <:irhelp:773097777906974730>  ")
    .addField("دستور بدست آوردن اطلاعات شخص :bust_in_silhouette:", "<a:offline:764800689917657098>`pt-userinfo <منشن شخص مورد نظر>`")
    .addField("دستور بدست آوردن آواتار شخص 📷", "<a:offline:764800689917657098>`pt-avatar <منشن شخص مورد نظر>`")
    .addField("دستور بدست آوردن اطلاعات سرور <:server2:764816798981816333> ", "<a:offline:764800689917657098>`pt-serverinfo`")
    .addField("دستور بدست آوردن اطلاعات اعضای سرور :busts_in_silhouette:", "<a:offline:764800689917657098>`pt-membersinfo`")
    .addField("دستور بدست آوردن عکس سرور :frame_photo:", "<a:offline:764800689917657098>`pt-serveravatar`")
    .addField("دستور بدست آوردن ایموجی های سرور :slight_smile:", "<a:offline:764800689917657098>`pt-serveremojis`")
    .addField("دستور بدست آوردن رول های سرور 🧬", "<a:offline:764800689917657098>`pt-serverroles`")
    .addField("دستور بدست آوردن اطلاعات رول های سرور 🧾", "<a:offline:764800689917657098>`pt-roleinfo <منشن رول || آیدی رول>`")
    .addField("دستور بدست آوردن اطلاعات چنل های سرور 📚", "<a:offline:764800689917657098>`pt-channelinfo <منشن چنل || آیدی چنل>`")
    .addField("بدست آوردن لینک ایموجی 😃", "<a:offline:764800689917657098>`pt-emojilink <ایموجی مورد نظر>`")
    .addField("بدست آوردن اطلاعات ایموجی 😃", "<a:offline:764800689917657098>`pt-emojiinfo <ایموجی مورد نظر>`")
    .setColor("#898989")
    message.channel.send(embed)




}

module.exports.help = {
  name:"cinfo",
  aliases: [""]
}