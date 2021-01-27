const Discord = require("discord.js");
const PlayStore = require("google-play-scraper");

module.exports.run = async (bot, message, args) => {

    if (!args[0])
      return message.channel.send(
        `لطفا یک نام برنامه بنویسید تا جستوجو کنم - ${message.author.username}`
      );

    PlayStore.search({
      term: args.join(" "),
      num: 1
    }).then(Data => {
      let App;

      try {
        App = JSON.parse(JSON.stringify(Data[0]));
      } catch (error) {
        return message.channel.send(
          `هیچ اپی به این نام وجود ندارد. - ${message.author.username}!`
        );
      }

      let Embed = new Discord.MessageEmbed()
        .setColor('#33908b')
        .setThumbnail(App.icon)
        .setURL(App.url)
        .setTitle(`${App.title}`)
        .addField(`قیمت<:playstore:766372716164677683> `, App.priceText, true)
        .addField(`سازنده<:playstore:766372716164677683> `, App.developer, true)
        .addField(`امتیاز<:playstore:766372716164677683> `, App.scoreText, true)
        .setFooter('درخواست شده توسط' + message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))

      return message.channel.send(Embed);
    });
  }
  

module.exports.help = {
    name:"playstore-search",
    aliases: ["ps"]
  }