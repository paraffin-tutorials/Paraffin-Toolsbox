const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

    //console.log(args[0]);// user
    //console.log(args[1]);// role
    //console.log(args[2]);//time
    
   
    const member = message.guild.members.cache.get(args[0]);

    try{
    if(!args.join(" ")){
      return message.channel.send("| لطفا یک آیدی بنویسید " + " **|** <:TickNo:764816791699980318>   ")
    }
    
    const embedotherid = new Discord.MessageEmbed()
    .setDescription(`این آیدی مال <@${member.user.id}> است`)
    
    .setColor("#33908b")
    .setFooter('درخواست شده توسط' + message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
    
    message.channel.send(embedotherid)
}
    catch(error){
      console.error(`متاسفانه مشکلی پیش آمده است: ${error}`);
      message.channel.send(`لطفا آیدی درست چنل رابنویسید!`);
  
}

}   
    
    
    module.exports.help = {
        name: "id-search",
        aliases: ["is"]
    }
