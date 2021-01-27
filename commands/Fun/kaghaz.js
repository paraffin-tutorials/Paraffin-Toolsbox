const slotItems = ["<:Grape:618765748940177421>", "<:Watermelon:618765904318038027>", "<:Orange:618765805596835880>", "<:Apple:618765871862513695>", "<:7_:618765717499805706>", "<:Strawberry:618765828929617930>", "<:Cherry:618765778094784513>"];
const db = require("quick.db");
const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    

    let replies = [
        '**شما باختید **\n\n چیزی که من اوردم : <:scissor:755704165971394621> \n\n چیزی که تو اوردی : <:paper:755704689152229388>',
        '**شما بردید **\n\n چیزی که من اوردم : <:rock:755703203198271508> \n\n چیزی که تو اوردی : <:paper:755704689152229388>',
        '**بازی مساوی شد **\n\n چیزی که من اوردم : <:paper:755704689152229388> \n\n چیزی که تو اوردی : <:paper:755704689152229388>'
    ]
    
          let result = Math.floor((Math.random() * replies.length));
          let amount = Math.floor(Math.random() * 100) + 1;
          let embed1 = new Discord.MessageEmbed()
          .setColor("#33908b")
          .setDescription(`${replies[result]}`)
          .addField('بازیکن', `${message.author}`)
          message.channel.send(embed1)
          
    
}
  
  module.exports.help = {
    name:"kaghaz",
    aliases: [""]
  }