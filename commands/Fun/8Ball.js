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
        .setDescription(`pt-شما وی آی پی لول 6 نشده اید این کامند برای شما هر 10 ثانیه آزاد میشود** **|** <:TickNo:764816791699980318>   \n\n${time.minutes}m ${time.seconds}s`);
      } else {

        let replies = [
          'آره'
          ,'آره،چرا که نه'
          ,'آره،من مطمعنم'
          ,'آره،احتمالش هست'
          ,'فکر نکنم'
          ,'شاید'
          ,'مشخص نیست'
          ,'فکر نکنم'
          ,'نه،احتمالش وجود نداره'
          ,'نه،اصلا'
          ,'نه،نه،نه'
          ,'نه'
          ,'آره صد درصد']

        let result = Math.floor((Math.random() * replies.length));
        let amount = Math.floor(Math.random() * 100) + 1;
        let embed1 = new Discord.MessageEmbed()
        .setColor("#33908b")
        .setDescription("**IE 8Ball**")
        .addField('سوال :', `${args}`)
        .addField('جواب :', `${replies[result]}`)
        .addField('کسی که سوال رو پرسید', `${message.author}`)
        message.channel.send(embed1)
        
    };
}



module.exports.help = {
  name:"8ball",
  aliases: ["8b"]
}
