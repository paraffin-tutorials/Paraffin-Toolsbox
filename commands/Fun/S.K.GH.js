const axios = require('axios');
const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    


    let embed = new Discord.MessageEmbed()
    .setTitle(" Paraffin Toolsbox Bot ")
    .setThumbnail(bot.user.displayAvatarURL())
    .setDescription("`pt-sang` <:rock:755703203198271508> \n\n `pt-kaghaz` <:paper:755704689152229388> \n\n `pt-gheychi` <:scissor:755704165971394621>")
    .setColor("#33908b")

    message.channel.send(embed)





}
    module.exports.help = {
        name:"sang-kaghaz-gheychi",
        aliases: ["skg"]
    }