const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {
    


    let embed = new Discord.MessageEmbed()
    .setThumbnail(bot.user.displayAvatarURL())
    .setTitle("**راهنمای دستورات موزیک بات ** <:irhelp:773097777906974730>  ")
    .addField("پلی لیست های IE <:spotify:747084576534560769>", "<a:info:764800698947862568>`pt-plspotify`")
    .addField("اکتیویتی اسپاتیفای <:spotify:747084576534560769>", "<a:info:764800698947862568>`pt-activity-spotify(as)`")
    
    .setColor(0x1ED768)
    message.channel.send(embed)




}

module.exports.help = {
  name:"cmusic",
  aliases: [""]
}