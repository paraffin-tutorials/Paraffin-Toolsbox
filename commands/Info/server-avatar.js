const Discord = require('discord.js');


module.exports.run = async (bot, message, args) => {
    

    let verifLevels = ["None", "Low", "Medium", "(╯°□°）╯︵  ┻━┻", "┻━┻ミヽ(ಠ益ಠ)ノ彡┻━┻"];

    const regions = {
    "europe": "<:europe:748560237094633482> اروپا",
        "brazil": ":flag_br: برزیل",
        "eu-central": ":flag_eu: اروپای مرکزی",
        "singapore": ":flag_sg: سنگاپور",
        "us-central": ":flag_us: آمریکای مرکزی",
            "sydney": ":flag_au: استرالیا",
            "us-east": ":flag_us: آفریقای شمالی",
            "us-south": ":flag_us: آمریکای جنوبی",
            "us-west": ":flag_us: آمریکای غربی",
            "eu-west": ":flag_eu: Western Europe",
            "vip-us-east": ":flag_us: VIP U.S. East",
            "london": ":flag_gb: لندن",
            "amsterdam": ":flag_nl: آمستردام",
            "hongkong": ":flag_hk: هنگ کنگ",
            "russia": ":flag_ru: روسیه",
            "southafrica": ":flag_za:  آفریقا"
        }

    const roles = message.guild.roles.cache.sort((a, b) => b.position - a.position).map(role => role.toString());
    const members = message.guild.members.cache;
    const channels = message.guild.channels.cache;
    const emojis = message.guild.emojis.cache;
    let user = message.mentions.users.first() || message.author;

    let embed = new Discord.MessageEmbed()
      .setDescription(`**عکس سرور __${message.guild.name}__**`)
      .setColor("#33908b")
      .setImage(message.guild.iconURL({ dynamic: true, size: 2048 }))
      .setDescription(`[فرمت آواتار شما](${message.guild.iconURL({ dynamic: true, size: 512})}) **|** [PNG](${message.guild.iconURL({ dynamic: true, size: 512, format: 'png'})}) **|** [JPEG](${message.guild.iconURL({ dynamic: true, size: 512, format: 'jpeg'})}) **|** [WEBP](${message.guild.iconURL({ dynamic: true, size: 512, format: 'webp'})})`)
      .setFooter('درخواست شده توسط' + message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
      
      message.channel.send(embed)
}

module.exports.help = {
    name:"serveravatar",
    aliases: [""]
  }