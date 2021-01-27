

module.exports.run = async (client, msg, args) => {
  
    const voiceChannel = msg.member.voice.channel;
    if (!voiceChannel) return msg.reply('اول وارد یک ویس شوید');
    
    await voiceChannel.join();
    return msg.reply(`جوین شدم **${voiceChannel.name}**!`);
}

module.exports.help = {
    name:"join",
    aliases: [""]
  }