const { MessageEmbed } = require('discord.js');
const youtubeSearch = require('youtube-search');


exports.run = async (client, message, args) => {

const embed = new MessageEmbed()
    if(!args[0]) return message.channel.send(embed.setColor(client.colors['defaultColor']).setDescription(`${client.emojis.get('660343595626397699')} لطفا نام یک چنل یوتیوب را بنویسید`));
    
        youtubeSearch(args.join(' '), { maxResults: 1, key: 'AIzaSyAjxzJhlDw9MLhmj1SLMi04xHVLownzXDY' }, (err, res) => {
            if(!res) return message.channel.send(embed.setColor(client.colors['#33908b']).setDescription(`\`${args.join(' ')}\` پیدا نشد`));
            if(err) return message.channel.send(embed.setColor(client.colors['#33908b']).setDescription(`لطفا بعدا انتخاب کنید`));

        let em = new MessageEmbed()
            .setAuthor(res[0].channelTitle, res[0].thumbnails.high.url)
            .setColor('#c91417')
            .setThumbnail(res[0].thumbnails.high.url)
            .setFooter('درخواست شده توسط' + message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
            .setDescription(`**${res[0].channelTitle}** اطلاعات چنل`)
            .addField('**لینک چنل یوتیوب<:Youtube:766036743534542850> **', `[لینک](${res[0].link})`)
            .addField('**تاریخ ساخت چنل<:Youtube:766036743534542850> **', `\`${new Date(res[0].publishedAt).toLocaleString('fa', { dateStyle: 'full'})}\``)
            .addField('**آیدی چنل<:Youtube:766036743534542850> **', `\`${res[0].channelId}\``)
            .addField('**بیو چنل<:Youtube:766036743534542850> **', `\`\`\`css\n${res[0].description || 'بدون بیو'}\`\`\``)
           .setFooter('درخواست شده توسط | ',  message.author.displayAvatarURL({ dynamic: true }))

        return message.channel.send(em);
        })
    }
module.exports.help = {
    name:"youtube",
    aliases: ["yt"]
  }