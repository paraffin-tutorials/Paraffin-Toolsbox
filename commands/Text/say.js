const { MessageEmbed } = require('discord.js')

module.exports.run = async (bot, message, args) => {

    message.delete();
    
    if(!args.join(" ")){
      return message.channel.send("| لطفا یک متن را بنویسید" + " **|** <:TickNo:764816791699980318>   ")
    }
    
    return message.channel.send(`${args.join(" ")}`);
    }
    
    module.exports.help = {
        name: "say",
        aliases: ["sayme"]
    }
