
const ReactionMenu = require('../Information/ReactionMenu');
const { MessageEmbed } = require('discord.js');

module.exports.run = async (bot, message, args) => {

const art = [
`https://cdn.discordapp.com/attachments/773808711705296937/773808912033775616/bandicam_2020-10-26_09-49-21-601.jpg`,
`https://www.flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=alien-glow-anim-logo&text=${args.join("+")}&doScale=true&scaleWidth=240&scaleHeight=120&fontname=pistoleer`,
`https://www.flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=glitter-anim-logo&text=${args.join("+")}&doScale=true&scaleWidth=240&scaleHeight=120&fontname=firestarter`,
`https://www.flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=shake-anim-logo&text=${args.join("+")}&doScale=true&scaleWidth=240&scaleHeight=120&fontname=old+stamper`,
`https://www.flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=whirl-anim-logo&text=${args.join("+")}=true&scaleWidth=240&scaleHeight=120&fontname=bullpen+3d`,
`https://www.flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=alien-glow-anim-logo&text=${args.join("+")}?&doScale=true&scaleWidth=240&scaleHeight=120&fontname=sf+gushing+meadow`,
`https://www.flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=glitter-anim-logo&text=${args.join("+")}&doScale=true&scaleWidth=240&scaleHeight=120&fontname=firestarter`,
`https://www.flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=alien-glow-anim-logo&text=${args.join("+")}&doScale=true&scaleWidth=240&scaleHeight=120&fontname=pistoleer`,
`https://www.flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=whirl-anim-logo&text=${args.join("+")}&doScale=true&scaleWidth=440&scaleHeight=220&fontname=bullpen+3d`,
`https://www.flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=highlight-anim-logo&text=${args.join("+")}&doScale=true&scaleWidth=240&scaleHeight=120&fontname=blackchancery`,
`https://www.flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=alien-glow-anim-logo&text=${args.join("+")}?&doScale=true&scaleWidth=240&scaleHeight=120&fontname=firestarter`,
`https://www.flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=glitter-anim-logo&text=${args.join("+")}&doScale=true&scaleWidth=240&scaleHeight=120&fontname=blackchancery`,
`https://www.flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=glitter-anim-logo&text=${args.join("+")}&doScale=true&scaleWidth=240&scaleHeight=120&fontname=firestarter`,
`https://www.flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=whirl-anim-logo&text=${args.join("+")}&doScale=true&scaleWidth=240&scaleHeight=120&fontname=bullpen+3d`,
`https://www.flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=shake-anim-logo&text=${args.join("+")}&doScale=true&scaleWidth=240&scaleHeight=120&fontname=old+stamper`,
`https://www.flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=shake-anim-logo&text=${args.join("+")}&doScale=true&scaleWidth=240&scaleHeight=120&fontname=kinkie`,
`https://www.flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=alien-glow-anim-logo&text=${args.join("+")}&doScale=true&scaleWidth=240&scaleHeight=120&fontname=sf+gushing+meadow`,
`https://www.flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=alien-glow-anim-logo&text=${args.join("+")}&doScale=true&scaleWidth=240&scaleHeight=120&fontname=pistoleer`,
`https://www.flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=flaming-logo&text=${args.join("+")}&doScale=true&scaleWidth=240&scaleHeight=120&fontname=pistoleer+3d`,
`https://www.flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=highlight-anim-logo&text=${args.join("+")}&doScale=true&scaleWidth=240&scaleHeight=120&fontname=bullpen+3d`,
`https://www.flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=highlight-anim-logo&text=${args.join("+")}&doScale=true&scaleWidth=240&scaleHeight=120&fontname=blackchancery`
]

  const footer = [
   `Paraffin Toolsbox`,
   `صفحه 1/20`,
   `صفحه 2/20`,
   `صفحه 3/20`,
   `صفحه 4/20`,
   `صفحه 5/20`,
   `صفحه 6/20`,
   `صفحه 7/20`,
   `صفحه 8/20`,
   `صفحه 9/20`,
   `صفحه 10/20`,
   `صفحه 11/20`,
   `صفحه 12/20`,
   `صفحه 13/20`,
   `صفحه 14/20`,
   `صفحه 15/20`,
   `صفحه 16/20`,
   `صفحه 17/20`,
   `صفحه 18/20`,
   `صفحه 19/20`,
   `صفحه 20/20`,
    ];

    let n = 0;
    
    const embed = new MessageEmbed()
      .setThumbnail(bot.user.displayAvatarURL())
      .setTitle('**متن شما به چند فرم متفاوت گیف شد IE** <:irhelp:773097777906974730>  ')
      .setDescription(`** کلمه مورد نظر برای ساخت گیف \n\n ${args.join(` `)}**`)
      .setImage(`${art[n]}`)
      .setFooter(`درخواست شده توسط | ${footer[n]}` + message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
      .setColor(`#33908b`)
    
    const json = embed.toJSON();
    const previous = () => {
      (n <= 0) ? n = art.length - 1 : n--;
      return new MessageEmbed(json).setImage(`${art[n]}`).setFooter(`${footer[n]}`);
      
    };
    const next = () => {
      (n >= art.length - 1) ? n = 0 : n++;
      return new MessageEmbed(json).setImage(`${art[n]}`).setFooter(`${footer[n]}`);
      
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
    name:`texttogif`,
    aliases: [`tg`]
  }