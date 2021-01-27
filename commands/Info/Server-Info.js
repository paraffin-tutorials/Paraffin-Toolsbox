const Discord = require('discord.js');


module.exports.run = async (bot, message, args) => {
     

   
    const filterLevels = {
        DISABLED: 'خاموش',
        MEMBERS_WITHOUT_ROLES: 'بدون رول',
        ALL_MEMBERS: 'همه'
    };
    const verificationLevels = {
        NONE: 'خاموش',
        LOW: 'کم',
        MEDIUM: 'معمولی',
        HIGH: '(╯°□°）╯',
        VERY_HIGH: '(ಠ益ಠ)'
    };
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
    const { guild } = message //define

        const { name, region, memberCount, owner, afkTimeout } = guild //define
        const icon = guild.iconURL() //define guild icon
    let user = message.mentions.users.first() || message.author;

    const banner = 'https://cdn.discordapp.com/attachments/772072791402217473/772113571306930186/Loading.gif';

    let embed = new Discord.MessageEmbed()
      .setDescription(`**اطلاعات سرور __${message.guild.name}__**`)
      .setColor("#33908b")
      .setThumbnail(message.guild.iconURL({ dynamic: true }))
      .addField("اسم ✅", `${message.guild.name}`, true)
      .addField("آیدی 🆔", `${message.guild.id}`, true)
      .addField("سازنده 📌", `${message.guild.owner.user.tag}`, true)
      .addField("ریجن <a:reg2:764389006854717441>", regions[message.guild.region], true)
      .addField('فیلتر مدیا <a:My_best_verified:757532828056682566>', filterLevels[message.guild.explicitContentFilter], true)
      .addField('لول وریفیکیشن <:server3:764816833777762314>', verificationLevels[message.guild.verificationLevel], true)
      .addField("زمان ای اف کی <:afk:765535203518709760>", `${afkTimeout/60}دقیقه`, true)
      .addField("تعداد اعضا 👀", message.guild.memberCount, true)
      .addField("رول ها 🧾", `${roles.length}`, true)

      .addField('بوست ها <a:server1:764816798070865970>', `تعداد : ${message.guild.premiumSubscriptionCount || 0}\nلول : ${message.guild.premiumTier ? `${message.guild.premiumTier}` : `بوست نشده!`}`, true)
      .addField("ایموجی ها 😀", `\n💫 : ${emojis.size}\n<:kekw:760095715895672842> : ${emojis.filter(emoji => emoji.animated).size}\n<a:kekwgif:760478481149591583>  : ${emojis.filter(emoji => !emoji.animated).size}`, true)
      .addField("چنل ها 📝", `\n💬 : ${channels.filter(channel => channel.type === 'text').size}\n🔊 : ${channels.filter(channel => channel.type === 'voice').size}\n🧮 : ${channels.filter(channel => channel.type === 'category').size}`, true)

      .setImage(`${banner}`)

      .setFooter('درخواست شده توسط' + message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
      
      message.channel.send(embed)
}

module.exports.help = {
    name:"serverinfo",
    aliases: [""]
  }