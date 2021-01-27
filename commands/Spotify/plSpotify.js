const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {
    


    let embed = new Discord.MessageEmbed()
    .setThumbnail(bot.user.displayAvatarURL())
    .setTitle("**IE تنها بات دیسکورد دارای پلی لیست های اسپاتیفای ایرانی !**")
    .setDescription(" **پلی لیست های اسپاتیافای IE**")
    .addField("پلی لیست آهنگ های شاد<:spotify:747084576534560769>", "<a:info:764800698947862568>[IE Pop](https://open.spotify.com/playlist/0MYWl7J9wQ5DOvhQ7pZN8U)")
    .addField("پلی لیست آهنگ های مخصوص پارتی<:spotify:747084576534560769>", "<a:info:764800698947862568>[IE Party](https://open.spotify.com/playlist/6IdEWGWt3Y3LBfc33mWLyD)")
    .addField("پلی لیست آهنگ های غمگین و آرامش بخش<:spotify:747084576534560769>", "<a:info:764800698947862568>[IE Aramesh](https://open.spotify.com/playlist/39ezOJZaltvgAQRKDWSTHg)")
    .addField("پلی لیست آهنگ های پر طرفدار شادمهر<:spotify:747084576534560769>", "<a:info:764800698947862568>[IE Shadmehr](https://open.spotify.com/playlist/057kPuKwBW7DkJBwdV8j6g)")
    .addField("پلی لیست آهنگ های قدیمی<:spotify:747084576534560769>", "<a:info:764800698947862568>[IE OLD music](https://open.spotify.com/playlist/7Iy5aqmiTtTAyd5zchYDpp)")
    .addField("پلی لیست آهنگ های تتلو<:spotify:747084576534560769>", "<a:info:764800698947862568>[IE Tataloo](https://open.spotify.com/playlist/5W6fyU3vB8YKuGViQXIiw8)")
    .addField("پلی لیست آهنگ های هیپ هاپ و رپ<:spotify:747084576534560769>", "<a:info:764800698947862568>[IE Rap](https://open.spotify.com/playlist/4dCvEU7Ar80pNqgVEmXzlL)")
    .addField("پلی لیست آهنگ های ریمیکس شده<:spotify:747084576534560769>", "<a:info:764800698947862568>[IE Remix](https://open.spotify.com/playlist/3OgmwNPKjv1O81mDFqrQoA)")
   
    .setColor(0x1ED768)
    message.channel.send(embed)




}

module.exports.help = {
  name:"plspotify",
  aliases: [""]
}