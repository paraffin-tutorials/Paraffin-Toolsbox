const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {



  let embed = new Discord.MessageEmbed()
    .setThumbnail(bot.user.displayAvatarURL())
    .setTitle("راهنمای دستورات استس بات IE <:irhelp:773097777906974730>  ")
    .addField('اطلاعات اکانت گیت هاب<:githubwhite:766272010493624320> ', '<a:funny:764800694838231042>`pt-github(gh) <اسم اکانت>`')
    .addField('اطلاعات اکانت اینستاگرام<:Instagram:766036747003625502>', '<a:funny:764800694838231042>`pt-instagram(ig) <اسم اکانت>`')
    .addField('اطلاعات اکانت ردیت<:reddit:766371640497668106>', '<a:funny:764800694838231042>`pt-reddit(re) <اسم اکانت>`')
    .addField('اطلاعات اکانت یوتیوب<:Youtube:766036743534542850>', '<a:funny:764800694838231042>`pt-youtube(yt) <اسم اکانت>`')
    .addField('اطلاعات اکانت آپارات<:aparat:766699861760147456> ', '<a:funny:764800694838231042>`pt-aparat(ap) <اسم اکانت>`')
    .addField('دانلود بدون فیلتر از یوتیوب<:Youtube:766036743534542850>', '<a:funny:764800694838231042>`pt-download-youtube(dyt) <اسم فیلم>`')
    
    .setColor("#9d3dff")
    .setFooter('درخواست شده توسط' + message.member.displayName, message.author.displayAvatarURL({ dynamic: true }))
  message.channel.send(embed)




}

module.exports.help = {
  name: "stats",
  aliases: [""]
}