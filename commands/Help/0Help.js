
const ReactionMenu = require('../Information/ReactionMenu');
const { MessageEmbed } = require('discord.js');
const art = [
"** صفحه اول : راهنمای دستورات بات :one:**\n\n** صفحه دوم  : دستور اینوایت من :two:**\n\n** صفحه چهارم : دستور ساپرت سرور :three:**\n\n",
":one: \n دستور پلی لیست های اسپاتیفای و موزیک \n<a:info:764800698947862568> `pt-cmusic` \n\n دستورات فان بات \n <a:funny:764800694838231042> `pt-cfunny`\n\n دستورات اکونومی بات \n<a:economy:764800692992475187> `pt-ceconomy` \n\n دستورات اطلاعات بات \n<a:offline:764800689917657098> `pt-cinfo` \n\n دستورات مودریشن بات \n<a:moderation:764800697639632908> `pt-cmoderation` ",
":two: \n اینوایت من به سرور <:link:764907723057528833> : [IE Invite](https://discord.com/api/oauth2/authorize?client_id=728328227810050061&permissions=8&scope=bot)",
":three: \n دستور پیشنهادات و ریپورت باگ <a:dev2:764908612966940705> \n `pt-support`",
];

const field2 = [
  "بعدی ▶️ ◀️ قبلی",
  "بات **PE** دارای **79** کامند است <a:loading:755800899565387796> ",
  "**می تونید اسلحه ایموجی و یا هرچیز دیگری را در بات بخرید** <a:loading:755800899565387796> ",
  "**اولین بات ایرانی دارای پلی لیست های اسپاتیفای** <a:loading:755800899565387796> ",
  "**با بالا رفتن سرور های من در گیو اوی های خفنی برگذار خواهیم کرد** <a:loading:755800899565387796> ",
  "",
  "`در دست تعمیر`",
  ];


  const footer = [
   "صفحه 1/3",
   "صفحه 2/3",
   "صفحه 3/3",
   

    ];

module.exports.run = async (bot, message, args) => {
    


    let n = 0;
    const embed = new MessageEmbed()
    .setThumbnail(bot.user.displayAvatarURL())
      .setTitle('**راهنمای استفاده از بات IE** <a:loading:755800899565387796> ')
      .setDescription(`${art[n]}`)
      .setFooter('درخواست شده توسط' + message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
      .setColor("#11383e")
    
    const json = embed.toJSON();
    const previous = () => {
      (n <= 0) ? n = art.length - 1 : n--;
      return new MessageEmbed(json).setDescription(`${art[n]}`).setFooter(`${footer[n]}`);
      
    };
    const next = () => {
      (n >= art.length - 1) ? n = 0 : n++;
      return new MessageEmbed(json).setDescription(`${art[n]}`).setFooter(`${footer[n]}`);
      
    };

    const reactions = {
      '◀️': previous,
      '▶️': next,
      
    };

    const menu = new ReactionMenu(
      message.client,
      message.channel,
      message.member,
      embed,
      null,
      null,
      reactions,
      180000
    );

    menu.reactions['⏹️'] = menu.stop.bind(menu);
    
}


module.exports.help = {
    name:"help",
    aliases: ["h"]
  }