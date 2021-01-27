const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {
    


    let embed = new Discord.MessageEmbed()
    .setThumbnail(bot.user.displayAvatarURL())
    .setTitle("راهنمای سلام کردن بات IE <:irhelp:773097777906974730>  ")

    .addField("دستور سلام بات <a:waving_lol:757532825132990505> ", "<a:funny:764800694838231042>`pt-hello  <زبان مورد نظر>`\n Persian **|** Italian **|** English **|** Thai \n Korean **|** Russian **|** Hebrew **|** Hindi \n Greek **|** French **|** Japanese **|** Spanish \n Chinese **|** German **|** Hawaiian **|** Dutch \n Latin **|** Portuguese **|** Arabic **|** Swedish")

    
  
    .setColor("#9d3dff")
    message.channel.send(embed)




}

module.exports.help = {
  name:"say-hello",
  aliases: [""]
}