
const Discord = require('discord.js');
const parse = require("twemoji-parser");


module.exports.run = async (bot, message, args) => {

    const emoji = args[0];
        if (!emoji) return message.channel.send(`لطفا یک ایموجی صحیح را وارد کنید`);
    
        let customemoji = Discord.Util.parseEmoji(emoji);
    
        if (customemoji.id) {
          const Link = `https://cdn.discordapp.com/emojis/${customemoji.id}.${
            customemoji.animated ? "gif" : "png"
          }`;
          
          const Added = new Discord.MessageEmbed()
            .setTitle(`لینک ایموجی`)
            .setColor("33908b")
            .setURL(Link)
            .setImage(Link);
          return message.channel.send(Added);
        } else {
          let CheckEmoji = parse(emoji, { assetType: "png" });
          if (!CheckEmoji[1])
            return message.channel.send(`لطفا یک ایموجی صحیح را وارد کنید`);
          message.channel.send(
            `ERR:404 Paraffin Toolsbox pt-bug <مشکل شما با بات> `
          );
    }}
      
  
module.exports.help = {
    name:"emojilink",
    aliases: [""]
  }