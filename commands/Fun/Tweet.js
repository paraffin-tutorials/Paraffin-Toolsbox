
const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');


module.exports.run = async (bot, message, args) => {
    
  

    // Get message
    if (!args[0]) return this.sendErrorMessage(message, 0, 'لطفا یک پیام از طرف ترامپ بنویسید');
    let tweet = message.content.slice(message.content.indexOf(args.join(" ")), message.content.length);
    if (tweet.length > 68) tweet = tweet.slice(0, 65) + '...';

    try {
      const res = await fetch('https://nekobot.xyz/api/imagegen?type=trumptweet&text=' + tweet);
      const img = (await res.json()).message;
      const embed = new MessageEmbed()
        .setTitle(':flag_us:  Trump Tweet  :flag_us: ')
        .setImage(img)
        .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
        .setFooter('درخواست شده توسط' + message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
        .setColor('33908b');
      message.channel.send(embed);
    } catch (err) {
      message.client.logger.error(err.stack);
      this.sendErrorMessage(message, 1, 'ERR', err.message);
    }
  }

module.exports.help = {
    name:"trump-tweet",
    aliases: ["tt"]
  }
