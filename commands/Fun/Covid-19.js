const Discord = require("discord.js");
const covid = require('novelcovid');

module.exports.run = async (bot, message, args) => {

if (!args[0]) return message.channel.send(`لطفا یک نام کشور را بنویسید`)
        if ((args[0]) === 'country') {
            const country = args.slice(1).join(' ')
            if (!args[0]) return message.reply('این کشور پیدا نشد و یا بیماری ندارد')
            const stats = await fetch(`https://disease.sh/v3/covid-19/countries/${encodeURIComponent(country)}`).then(response => response.json())
            if (stats.message === 'این کشور پیدا نشد و یا بیماری ندارد') return message.reply('این کشور پیدا نشد و یا بیماری ندارد')
            const embed = new Discord.MessageEmbed()
                .setTitle(`وضعیت ویروس کرونا در کشور ${args[1]}`)
                .setThumbnail(stats.countryInfo.flag)
                .addField('تعداد همه کیس ها <:corona2:766599415585964053> ', stats.cases.toLocaleString(), true)
                .addField('تعداد همه کیس های امروز <:corona2:766599415585964053> ', stats.todayCases.toLocaleString(), true)
                .addField('تعداد همه جان باختگان <:corona2:766599415585964053> ', stats.deaths.toLocaleString(), true)
                .addField('تعداد همه جان باختگان امروز <:corona2:766599415585964053> ', stats.todayDeaths.toLocaleString(), true)
                .addField('تعداد همه بهبود یافتگان <:corona2:766599415585964053> ', stats.recovered.toLocaleString(), true)
                .setColor('#33908b')
                .setFooter(`درخواست شده توسط | ` + message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
            message.channel.send(embed)
        } else {
            const stats = await fetch('https://disease.sh/v3/covid-19/all').then(response => response.json())
            const embed = new Discord.MessageEmbed()
                .setTitle('وضعیت ویروس کرونا در دنیا')
                .setColor('#33908b')
                .addField('تعداد همه کیس ها <:corona2:766599415585964053> ', stats.cases.toLocaleString(), true)
                .addField('تعداد همه کیس های امروز <:corona2:766599415585964053> ', stats.todayCases.toLocaleString(), true)
                .addField('تعداد همه جان باختگان <:corona2:766599415585964053> ', stats.deaths.toLocaleString(), true)
                .addField('تعداد همه جان باختگان امروز <:corona2:766599415585964053> ', stats.todayDeaths.toLocaleString(), true)
                .addField('تعداد همه بهبود یافتگان <:corona2:766599415585964053> ', stats.recovered.toLocaleString(), true)
                .addField('درصد کیس ها در میلیون <:corona2:766599415585964053> ', stats.casesPerOneMillion.toLocaleString(), true)
                .addField('درصد فوت ها در میلیون <:corona2:766599415585964053> ', stats.deathsPerOneMillion.toLocaleString(), true)
                .addField('کشور های درگیر <:corona2:766599415585964053> ', stats.affectedCountries.toLocaleString(), true)
                .setFooter(`درخواست شده توسط | ` + message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
            message.channel.send(embed)
        }
    }
    module.exports.help = {
        name:"coronastats",
        aliases: ["cs"]
    }