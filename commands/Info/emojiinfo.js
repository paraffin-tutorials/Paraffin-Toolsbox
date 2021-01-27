const { MessageEmbed, Util } = require(`discord.js`)
const moment = require(`moment`)

module.exports.run = async (bot, message, args) => {

    if (!args[0]) return message.channel.send(`لطفا یک ایموجی را مشخص کنید`)
    let emoji = message.guild.emojis.cache.get(args[0]) || Util.parseEmoji(args[0])
    emoji = message.guild.emojis.cache.get(emoji.id)
    if (!emoji) return message.channel.send(`این ایموجی درون سرور نیست`)
    let animated
    if (emoji.animated) animated = (`ایموجی گیف`)
    if (!emoji.animated) animated = (`ایموجی معمولی`)

    let embed = new MessageEmbed()
    .setColor(`#33908b`)
    .setThumbnail(emoji.url)
    .setDescription('ایموجی', `${emoji}`)
    .addField(`${emoji} نام`, `\`${emoji.name} \``, true)
    .addField(`${emoji} آیدی`, `\`${emoji.id}\``, true)
    .addField(`${emoji} زمان ساخت`, `\`${moment(emoji.createdAt).format(`LLLL`)}\``, true)
    .addField(`${emoji} تایپ`, `\`${animated}\``, true)
    .addField(`${emoji} نام کامل `, `\`\``, true)
    .addField(`${emoji} دانلود`, `[Link](${emoji.url})`, true)
    .setFooter('درخواست شده توسط' + message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
    message.channel.send({embed});
}
module.exports.help = {
    name:`emojiinfo`,
    aliases: [``]
  }