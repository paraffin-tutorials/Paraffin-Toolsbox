
const Discord = require('discord.js')
const axios = require('axios');

module.exports.run = async (bot, message, args) => {
  
    
  let getInfo3 = async () => {
            
    let response3 = await axios.get('https://api.codebazan.ir/dastan/');
    let info3 = response3.data;
    return info3;
  };
    let infoValue3 = await getInfo3();

        const embed1 = new Discord.MessageEmbed()
     .setColor('#33908b')
     .setTitle("📖")
     .setDescription(`**${infoValue3}**`)
     await message.channel.send(embed1)
        
      };




module.exports.help = {
  name:"dialog",
  aliases: [""]
}
