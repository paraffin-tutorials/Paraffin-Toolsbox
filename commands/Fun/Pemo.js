const db = require('quick.db')
const Discord = require('discord.js')
const ms = require("parse-ms");

module.exports.run = async (bot, message, args) => {
    

    let user = message.author;
    let author = await db.fetch(`work_${message.guild.id}_${user.id}`)

    let timeout = 10000;
    
    if (author !== null && timeout - (Date.now() - author) > 0) {
        let time = ms(timeout - (Date.now() - author));
    
        let timeEmbed = new Discord.MessageEmbed()
         .setColor("#33908b")
        .setDescription(`pt-شما وی آی پی لول 6 نشده اید این کامند برای شما هر 10 ثانیه آزاد میشود** <a:yes:747525651820576769>\n\n${time.minutes}m ${time.seconds}s`);
      } else {

        let replies = [
          'خوشحالی 😄'
          ,'ناراحتی 😞'
          ,' ناامیدی 😑'
          ,'شکست عشقی خوردی 😢'
          ,'عاشقی 🥰'
          ,'داری میخندی 😂'
          ,'داری از خنده میمیری 🤣'
          ,'بی احساس 😐'
          ,'خواب آلود 🥱'
          ,'عصبی 😤'
          ,'گرمته 🥵'
          ,'سردته🥶'
          ,'مریضی (خدانکنه) 🤒'
        ,'😅 دهنت سرویس حست چیه درک نمیکنم']

        let result = Math.floor((Math.random() * replies.length));
        let amount = Math.floor(Math.random() * 100) + 1;
        let embed1 = new Discord.MessageEmbed()
        .setColor("#33908b")
        .addField('حس شما :', `${replies[result]}`)
        .addField('کسی که سوال رو پرسید', `${message.author}`)
        message.channel.send(embed1)
        
    };
}



module.exports.help = {
  name:"feeling",
  aliases: ["f"]
}
