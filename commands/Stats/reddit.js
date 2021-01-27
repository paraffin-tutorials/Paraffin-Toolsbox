
const { MessageEmbed } = require('discord.js');
const request = require('node-superfetch');
const moment = require('moment');
const { formatNumber } = require('../../util/Util');


module.exports.run = async (client, msg, args) => {

			const { body } = await request.get(`https://www.reddit.com/user/${args.join("+")}/about.json`);
			const { data } = body;
			if (data.hide_from_robots) return msg.say('این اکانت پرایویت است');
			const embed = new MessageEmbed()
				.setColor('#ff3f00')
				.setAuthor('اطلاعات اکانت ردیت', 'https://i.imgur.com/DSBOK0P.png', 'https://www.reddit.com/')
				.setThumbnail(data.icon_img)
				.setURL(`https://www.reddit.com/user/${args.join("+")}`)
				.setTitle(`/u/${data.name}`)
				.addField('نام کاربری<:reddit:766371640497668106> ', data.name, true)
				.addField('آیدی<:reddit:766371640497668106> ', data.id, true)
				.addField('کارما<:reddit:766371640497668106> ', formatNumber(data.link_karma + data.comment_karma), true)
				.addField('تاریخ ساخت اکانت<:reddit:766371640497668106> ', moment.utc(data.created_utc * 1000).format('MM/DD/YYYY h:mm A'), true)
				.addField('اکانت طلایی?<:reddit:766371640497668106> ', data.is_gold ? 'نه' : 'آره', true)
				.addField('وریفای شده?<:reddit:766371640497668106> ', data.verified ? 'نه' : 'آره', true);
			 msg.channel.send(embed);
        }

        
module.exports.help = {
    name:"reddit",
    aliases: [""]
  }
        
	
