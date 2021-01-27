
const { MessageEmbed } = require('discord.js');
const request = require('node-superfetch');
const { formatNumber } = require('../../util/Util');

module.exports.run = async (client, msg, args) => {
    

			const { body } = await request.get(`https://restcountries.eu/rest/v2/name/${args[0]}`);
			const data = body[0];
			const embed = new MessageEmbed()
				.setColor('#33908b')
				.setTitle(data.name)
				.setThumbnail(`https://www.countryflags.io/${data.alpha2Code}/flat/64.png`)
				.addField('جمعیت', formatNumber(data.population), true)
				.addField('پایتخت', data.capital || 'بدون پایتخت', true)
				.addField('واحد پول', data.currencies[0].symbol, true)
				.addField('قاره', data.subregion || data.region, true)
				.addField('مسافت', `${formatNumber(data.area)}کیلومتر`, true)
				.addField('زبان', data.languages.map(lang => lang.name).join('/'))
				.setFooter('درخواست شده توسط',  message.author.displayAvatarURL({ dynamic: true }))

			msg.channel.send(embed);
		}
        
        
module.exports.help = {
    name:"country-search",
    aliases: ["cs"]
  }