const Discord = require('discord.js')
const db = require('quick.db')

let region = {
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
        };

module.exports.run = async (bot, message, args) => {
  
    const languages = {
        Portuguese: 'Olá',
        Arabic: 'مرحبا',
        Swedish: 'Hallå',
        Latin: 'Salve',
        Dutch: 'Hallo',
        Hawaiian: 'Aloha',
        Chinese: '你好',
        German: 'Hallo',
        Spanish: '¡Hola',
        Japanese: 'こんにちは',
        French: 'Bonjour',
        Greek: 'Χαίρετε',
        Hindi: 'नमस्ते',
        Hebrew: 'שלום',
        Russian: 'Здравствуйте',
        Korean: '여보세요',
        Thai: 'สวัสดี',
        English: 'Hello',
        Italian: 'Ciao',
        Iran: 'سلام',
        Persian: 'سلام',
        Farsi: 'سلام',
      };
      
          let lang;
          if (args[0]) lang = args[0].charAt(0).toUpperCase() + args[0].slice(1);
      
          if (!Object.keys(languages).includes(lang)) {
            lang = Object.keys(languages)[Math.floor(Math.random() * Object.keys(languages).length)];
          }
          
      let Embed = new Discord.MessageEmbed()
      .setColor('#33908b')
     
      .setTitle(`${languages[lang]}`)
          message.channel.send(Embed);
}
  module.exports.help = {
    name:"hello",
    aliases: [""]
  }