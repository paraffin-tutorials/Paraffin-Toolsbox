
const { MessageEmbed } = require('discord.js');

const ReactionMenu = require('../Information/ReactionMenu');

module.exports.run = async (bot, message, args) => {
    

const art = [
  "\n\nاستاتوس دیسکورد فاز سنگین 😎\n\n<a:funny:764800694838231042> `pt-status`\n\nتبدیل متن به گیف 🎞\n\nدریافت یک دانستنی 🤔\n <a:funny:764800694838231042> `pt-did-you-know(fact)`\n\nدریافت  جوک 🤣\n <a:funny:764800694838231042> `pt-joke`\n\nیک والپیپر رندوم 🎫\n <a:funny:764800694838231042> `pt-random-wallpaper(rw)`\n\nتویت از طرف ترامپ :flag_us:\n <a:funny:764800694838231042> `pt-trump-tweet(tt)`\n\nاز حال خود خبر دار شید 🎭\n <a:funny:764800694838231042> `pt-feeling`\n\nطیف های مختلف رنگ مورد نظر 🎨\n <a:funny:764800694838231042> `pt-color-gradient(cg) <کد رنگ> `\n\nعکس حیوانات به همراه دانستنی ❔\n <a:funny:764800694838231042> `pt-dog` \n <a:funny:764800694838231042> `pt-bird` \n <a:funny:764800694838231042> `pt-fox`\n\nآمار کرونا جهان را پیدا کنید <a:corona1:748243062127591464> \n <a:funny:764800694838231042> `pt-coronastats`  \n\n ساخت کیو آر کد <:QRcode:764365216531349506> \n\n<a:funny:764800694838231042> `pt-qrcode <آدرس سایت>` \n\nبازی شیر یا خط<a:coin:747422933382594560> \n <a:funny:764800694838231042> `pt-shir-ya-khat(syk)`\n\nتوکن رندوم<a:8527_discord_loading:749901960701804634> \n <a:funny:764800694838231042> `pt-bottoken`\n\nاز من بپرسید و جواب بگیرید🎱\n <a:funny:764800694838231042> `pt-8ball <سوال>`\n\nبازی انداختن تاس<:grey_dice:755800858977108080>\n <a:funny:764800694838231042> `pt-dice`\n\nدرست کردن کپچا<:captcha:756107890430967868> \n <a:funny:764800694838231042> `pt-captcha <متن>`\n\nاینوایت  چنل ➕\n <a:funny:764800694838231042> `pt-invite-channel(ich)` \n\n دریافت عکس گرفته شده توسط ناسا <:Nasa:764917990034505748>\n\n<a:funny:764800694838231042> `pt-nasa <کلمه مورد نظر>` ",
  '\n\n دستور بدست آوردن تاریخ روز 📅\n <a:funny:764800694838231042> `pt-date`\n\n دستور های جست و جو <a:search1:757998877365240043>\n <a:funny:764800694838231042> `pt-search`\n\n محاسبات ریاضی 🎰\n <a:funny:764800694838231042> `pt-math <محاسبه ریاضی>`\n\nطراخی لوگو 💠 \n <a:funny:764800694838231042> `pt-logo`\n\n دریافت اطلاعات اکانت 📚\n <a:funny:764800694838231042> `pt-stats`\n\nدریافت آواتار شخص با فیلتر 🎴\n <a:funny:764800694838231042> `pt-filters`\n\n تایمر ⏱ \n <a:funny:764800694838231042> `pt-timer <1m>`\n\nساخت میم 😜\n <a:funny:764800694838231042> `pt-meme` \n\n سلام کنید <a:waving_lol:757532825132990505> \n <a:funny:764800694838231042> `pt-say-hello`\n\nبزرگ کردن متن 📢\n <a:funny:764800694838231042> `pt-shout`\n\nبازی سنگ کاغذ قیچی<:scissor:755704165971394621>\n <a:funny:764800694838231042> `pt-sang-kaghaz-gheychi(skg)`\n\n قابلیت های سرگرمی متن 💬\n\n<a:funny:764800694838231042> `pt-text`'
];
  
    const footer = [
     "صفحه 1/2",
     "صفحه 2/2",
      ];

      let n = 0;

    let embed = new MessageEmbed()
    .setThumbnail(bot.user.displayAvatarURL())
    .setTitle(" \n\nراهنمای دستورات سرگرمی بات IE <:irhelp:773097777906974730> ")
    .setDescription("قابلیت های سرگرم کننده الایت ری اکشن کنید و ببینید")
    .setColor("#9d3dff")
    .setFooter('درخواست شده توسط' + message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))




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
  name:"cfunny",
  aliases: [""]
}