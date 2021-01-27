const { MessageEmbed } = require('discord.js')

module.exports.run = async (bot, message, args) => {

    //console.log(args[0]);// user
    //console.log(args[1]);// role
    //console.log(args[2]);//time
    
    message.delete();
    
    if(!args.join(" ")){
      return message.channel.send("| لطفا یک متن را بنویسید" + " **|** <:TickNo:764816791699980318>   ")
    }
    const embed = new MessageEmbed()
    .setDescription(`${args.join(" ")}`)
    .setColor("#33908b")
    message.channel.send(embed);
    }
    
    module.exports.help = {
        name: "embed-say",
        aliases: [""]
    }
