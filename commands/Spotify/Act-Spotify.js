const Discord = require("discord.js");
const convert = require("parse-ms");
const ly = require("lyrics-finder");
const { MessageEmbed, splitMessage, escapeMarkdown } = require("discord.js")

module.exports.run = async (client, message, args) => {

      if (args[0] == 'lyrics'){
            let user;
      if (message.mentions.users.first()) {
          user = message.mentions.users.first();
      } else {
          user = message.author;
      }
      const recipient = message.content.split(/\s+/g).slice(1).join(" ");
      let status;
      if (user.presence.activities.length === 1) status = user.presence.activities[0];
      else if (user.presence.activities.length > 1) status = user.presence.activities[1];
  
      if (user.presence.activities.length === 0 || status.name !== "Spotify" && status.type !== "LISTENING") {
          const embed3 = new Discord.MessageEmbed()
          .setAuthor("Spotify", "https://www.freepnglogos.com/uploads/spotify-logo-png/file-spotify-logo-png-4.png") 
          .setColor(0x1ED768)
          .setDescription("شما به همیچ آهنگی گوش نمیدهید")
          return message.channel.send(embed3);
      }
      if (status !== null && status.type === "LISTENING" && status.name === "Spotify" && status.assets !== null) {
          let image = `https://i.scdn.co/image/${status.assets.largeImage.slice(8)}`,
              url = `https://open.spotify.com/track/${status.syncID}`,
              name = status.details,
              artist = status.state,
              album = status.assets.largeText,
              timeStart = status.timestamps.start,
              timeEnd = status.timestamps.end,
              timeConvert = convert(timeEnd - timeStart);
            
                    let minutes = timeConvert.minutes < 10 ? `0${timeConvert.minutes}` : timeConvert.minutes;
                    let seconds = timeConvert.seconds < 10 ? `0${timeConvert.seconds}` : timeConvert.seconds;
                    let time = `${minutes}:${seconds}`;
      
          
      if (!status) return message.channel.send("هیچ آهنگی در حال پخش نیست");
  
      let lyrics = null;
  
      try {
        lyrics = await ly(name, artist, "");
        if (!lyrics) lyrics = `هیچ آهنگی پیدا نشد با این اطلاعات ${status.details[0]}.`;
      } catch (error) {
        lyrics = `هیچ آهنگی پیدا نشد با این اطلاعات ${status.details.songs[0]}.`;
        
      }
      const lyricsEmbed = new MessageEmbed()
      .setColor(0x1ED768)
      .setAuthor(`${name} - ${artist}`, "https://www.freepnglogos.com/uploads/spotify-logo-png/file-spotify-logo-png-4.png")
      .setDescription(lyrics)
      .setTimestamp()
      .setFooter(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }));
      const splitLyrics = splitMessage(lyrics, {
        maxLength: 2048,
        char: "\n",
        prepend: "",
        append: ""
    })
      
      splitLyrics.forEach(async (m) => {
      lyricsEmbed.setDescription(m)
      message.channel.send(lyricsEmbed)
      .then(m => m.delete({timeout: 420000}))
  })
      }
    
    }
            else{
                let user;
                if (message.mentions.users.first()) {
                    user = message.mentions.users.first();
                } else {
                    user = message.author;
                }
                const recipient = message.content.split(/\s+/g).slice(1).join(" ");
                let status;
                if (user.presence.activities.length === 1) status = user.presence.activities[0];
                else if (user.presence.activities.length > 1) status = user.presence.activities[1];
            
                if (user.presence.activities.length === 0 || status.name !== "Spotify" && status.type !== "LISTENING") {
                    const embed2 = new Discord.MessageEmbed()
                    .setAuthor("Spotify", "https://www.freepnglogos.com/uploads/spotify-logo-png/file-spotify-logo-png-4.png") 
                    .setColor(0x1ED768)
                    .setDescription("شما به همیچ آهنگی گوش نمیدهید")
                    return message.channel.send(embed2);
                } 
            
                if (status !== null && status.type === "LISTENING" && status.name === "Spotify" && status.assets !== null) {
                    let image = `https://i.scdn.co/image/${status.assets.largeImage.slice(8)}`,
                        url = `https://open.spotify.com/track/${status.syncID}`,
                        name = status.details,
                        artist = status.state,
                        album = status.assets.largeText,
                        timeStart = status.timestamps.start,
                        timeEnd = status.timestamps.end,
                        timeConvert = convert(timeEnd - timeStart);
            
                    let minutes = timeConvert.minutes < 10 ? `0${timeConvert.minutes}` : timeConvert.minutes;
                    let seconds = timeConvert.seconds < 10 ? `0${timeConvert.seconds}` : timeConvert.seconds;
                    let time = `${minutes}:${seconds}`;
                    let link = url
                    const embed = new Discord.MessageEmbed()
                    .setAuthor("Paraffin Toolsbox Spotifty", "https://www.freepnglogos.com/uploads/spotify-logo-png/file-spotify-logo-png-4.png")
                    .setColor(0x1ED768)
                    .setThumbnail(image)
                    .addField("آهنگ:", name, true)
                    .addField("آلبوم:", album, true)
                    .addField("آرتیست:", artist, true)
                    .addField("زمان", time, false)
                    .addField("همین الان گوش دهید !", `[\`${artist} - ${name}\`](${url})`, false)
                    return message.channel.send(embed)
                    }
                    
            }

    
    }

    
  module.exports.help = {
    name:"activity-spotify",
    aliases: ["as"]
  }