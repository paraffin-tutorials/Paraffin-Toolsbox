const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {
    


    let embed = new Discord.MessageEmbed()
    .setThumbnail(bot.user.displayAvatarURL())
    .setTitle("راهنمای دستورات لاگ بات IE <:irhelp:773097777906974730>  ")
    .addField("انتخاب لاگ لول آپ ممبر ها <:levelup:773097788011053056> ", "<a:moderation:764800697639632908> `pt-set-levelup <آیدی چنل>`")
    .addField("تغییر پریفیکس بات <:irparaffintbprefix:769145567560990750> ", "<a:moderation:764800697639632908> `pt-set-prefix <پریفیکس مورد نظر>`")
    .addField("انتخاب چنل لاگ تغییرات رول🧬 ", "<a:moderation:764800697639632908> `pt-set-role <آیدی چنل>`")
    .addField("انتخاب چنل لاگ تغییرات چنل📚 ", "<a:moderation:764800697639632908> `pt-set-channel <آیدی چنل>`")
    .addField("انتخاب چنل لاگ تغییرات ایموجی😃 ", "<a:moderation:764800697639632908> `pt-set-emoji <آیدی چنل>`")
    .addField("انتخاب چنل لاگ تغییرات پیام💬 ", "<a:moderation:764800697639632908> `pt-set-msg <آیدی چنل>`")

    .addField("پاک کردن چنل انتخاب شده لاگ تغییرات رول🧬 ", "<a:moderation:764800697639632908> `pt-unset-role <ایدی چنل>`")
    .addField("پاک کردن چنل انتخاب شده لاگ تغییرات چنل📚 ", "<a:moderation:764800697639632908> `pt-unset-channel <ایدی چنل>`")
    .addField("پاک کردن چنل انتخاب شده لاگ تغییرات ایموجی😃 ", "<a:moderation:764800697639632908> `pt-unset-emoji <ایدی چنل>`")
    .addField("پاک کردن چنل انتخاب شده لاگ تغییرات پیام💬 ", "<a:moderation:764800697639632908> `pt-unset-msg <ایدی چنل>`")
    .addField("تنظیمات لاگ جوین و لفت 🔧", "<a:moderation:764800697639632908> `pt-cwelcome`")
   
    .addField("دیدن چنل های انتخاب شده📂" , "<a:moderation:764800697639632908> `pt-logs-channels`")

    .setColor("#ff3d3d")
    message.channel.send(embed)




}

module.exports.help = {
  name:"clog",
  aliases: [""]
}