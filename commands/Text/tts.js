const Discord = require('discord.js')
const googleTTS = require('google-tts-api')


module.exports.run = async (bot, message, args) => {
    

         let ttsusage = args.join(" ");
         if (ttsusage.length > 200)
           return message.channel.send(
             "متن شما بسیار طولانی است"
           );
         if (!ttsusage)
           return message.channel.send("یک متن بنویسید تا برایتان بخوانم");
         googleTTS(ttsusage, "en-gb", 1)
           .then(function (url) {
             const attachtts = new Discord.MessageAttachment(url).setName(`${message.member.displayName}.mp3`);
             message.channel.send(attachtts);
           })
           .catch(function (err) {
             console.error(err.stack);
           });
    }


    module.exports.help = {
        name:"tts",
        aliases: [""]
      }
      