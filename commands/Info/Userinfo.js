const Discord = require('discord.js');
const moment = require("moment");


module.exports.run = async (bot, message, args) => {
    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

    let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

    const activities = [];
    let customStatus;
    for (const activity of member.presence.activities.values()) {
      switch (activity.type) {
        case 'PLAYING':
          activities.push(`🎮 Playing **${activity.name}**`);
          break;
        case 'LISTENING':
          if (member.user.bot) activities.push(`🎧 Listening to **${activity.name}**`);
          else activities.push(`🎧 Listening to **${activity.details}** by **${activity.state}**`);
          break;
        case 'WATCHING':
          activities.push(`👀 Watching **${activity.name}**`);
          break;
        case 'STREAMING':
          activities.push(`🎥 Streaming **${activity.name}**`);
          break;
        case 'CUSTOM_STATUS':
          customStatus = activity.state;
          break;
      }
    }
    
    
const status = {
    online: "آنلاین <:online:749898011991212043>",
    idle: "ای اف کی  <:Idl:749898011978498076>",
    dnd: "مزاحم نشوید <:dnd:749898020916822027>",
    offline: "آفلاین <:Offlin:749898011538096210>",
    stream: "در حال استریم <:streaming:749899906231042048>"
};


    var permissions = [];
    
    if(user.hasPermission("KICK_MEMBERS")){
        permissions.push("**کیک کردن**");
    }
    
    if(user.hasPermission("BAN_MEMBERS")){
        permissions.push("**بن کردن**");
    }
    
    if(user.hasPermission("ADMINISTRATOR")){
        permissions.push("**ادمین**");
    }

    if(user.hasPermission("MANAGE_MESSAGES")){
        permissions.push("**دسترسی به پیام ها**");
    }
    
    if(user.hasPermission("MANAGE_CHANNELS")){
        permissions.push("**دسترسی به چنل ها**");
    }
    
    if(user.hasPermission("MENTION_EVERYONE")){
        permissions.push("**منشن اوریوان**");
    }

    if(user.hasPermission("MANAGE_NICKNAMES")){
        permissions.push("**دسترسی به نیکنیم ها**");
    }

    if(user.hasPermission("MANAGE_ROLES")){
        permissions.push("**دسترسی به رول ها**");
    }

    if(user.hasPermission("MANAGE_WEBHOOKS")){
        permissions.push("**دسترسی  به وب هوک**");
    }

    if(user.hasPermission("MANAGE_EMOJIS")){
        permissions.push("**دسترسی به ایموجی ها**");
    }

    if(permissions.length == 0){
        permissions.push("**ممبر ساده**");
    }

    if(member.user.id == message.guild.ownerID){
        acknowledgements = 'اوونر سرور';
    }
    
	const memberr = await message.guild.members.fetch(user.id);
				const defaultRole = message.guild.roles.cache.get(message.guild.id);
				const roles = member.roles.cache
					.filter(role => role.id !== defaultRole.id)
					.sort((a, b) => b.position - a.position)
					.map(role => role.name);
    const embed = new Discord.MessageEmbed()
    
    .setColor("#33908b")
    .setThumbnail(member.user.displayAvatarURL({ dynamic: true, size: 512}))
    .setFooter('درخواست شده توسط' + message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
    .addField('👤 نام کاربری', member, true)
    .addField('#️⃣ کد', `#${member.user.discriminator}`, true)
    .addField('🆔 آی دی', `${member.user.id}`, true)
    
    .addField('🤖 بات', `\`${member.user.bot ? 'بات' : 'ممبر'}\``, true)
    .addField("<a:discord:749901960701804634> تاریخ ساخت اکانت",`\`${moment(member.user.createdAt).format("dddd, MMMM Do YYYY, HH:mm:ss")}\``, true)
    .addField('<a:nitro:757531487938674758> زمان بوستینگ', `\`${new Date(member.premiumSinceTimestamp).toLocaleString('fa', { dateStyle: 'full' }) || 'بوست نکرده'}\``, true)
    .addField('<:PinClipart:749901903961522186> تاریخ ورود به سرور',`\`${moment(member.user.joinedAt).format("dddd, MMMM Do YYYY, HH:mm:ss").toLocaleString('fa', { dateStyle: 'full' })}\``, true)
    .addField(`🧬 رول ها[${memberr.roles.cache.filter(r => r.id !== message.guild.id).map(roles => `\`${roles.name}\``).length}]`,`${member.roles.cache.filter(r => r.id !== message.guild.id).map(roles => `<@&${roles.id }>`).join(" **|** ") || "بدون رول"}`)
    .addField("📊 پریمیشن ها", `${permissions.join(', ')}`)
    message.channel.send({embed});

}

module.exports.help = {
    name:"userinfo",
    aliases: [""]
  }