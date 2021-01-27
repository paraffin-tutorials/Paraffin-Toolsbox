const slotItems = ["<:Grape:618765748940177421>", "<:Watermelon:618765904318038027>", "<:Orange:618765805596835880>", "<:Apple:618765871862513695>", "<:7_:618765717499805706>", "<:Strawberry:618765828929617930>", "<:Cherry:618765778094784513>"];
const db = require("quick.db");
const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    

    let user = message.author;
    let moneydb = await db.fetch(`pcoin_${message.guild.id}_${user.id}`)
    let money = parseInt(args[0]);
    let win = false;

    let number = []
    for (i = 0; i < 3; i++) { number[i] = Math.floor(Math.random() * slotItems.length); }

    if (number[0] == number[1] && number[1] == number[2]) { 
        money *= 9
        win = true;
    } else if (number[0] == number[1] || number[0] == number[2] || number[1] == number[2]) { 
        money *= 2
        win = true;
    }
    if (win) {
        let slotsEmbed1 = new Discord.MessageEmbed()
        .setTitle("**خط**")
        .setThumbnail("https://cdn.discordapp.com/attachments/749123968455147542/755717651979829288/Untitled-1.png")
            .setColor("#33908b")
            .addField(`بازیکن`, `${message.author}`)
        message.channel.send(slotsEmbed1)
       
    } else {
        let slotsEmbed = new Discord.MessageEmbed()
        .setTitle("**شیر**")
        .setThumbnail("https://cdn.discordapp.com/attachments/749123968455147542/757453528162631880/56846.png")
            .setColor("#33908b")
            .addField(`بازیکن`, `${message.author}`)
        message.channel.send(slotsEmbed)
       
    }

}
  
  module.exports.help = {
    name:"shir-ya-khat",
    aliases: ["syk"]
  }