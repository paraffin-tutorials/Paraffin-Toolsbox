
const Discord = require('discord.js')
const axios = require('axios');

module.exports.run = async (bot, message, args) => {
  
    
  let getInfo3 = async () => {
            
    let response3 = await axios.get('https://api.codebazan.ir/danestani/');
    let info3 = response3.data;
    return info3;
  };
    let infoValue3 = await getInfo3();

        let embed1 = new Discord.MessageEmbed()
        .setTitle("**آیا میدانستید ؟**")
        .setColor("#33908b")
        .setDescription(`**${infoValue3}**`)
        .addField('درخواست شده توسط', `${message.author}`)
        message.channel.send(embed1)  
    }

module.exports.help = {
  name:"did-you-know",
  aliases: ["fact"]
}
