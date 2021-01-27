const Discord = require('discord.js')
const arraySort = require('array-sort')

exports.run = async (client, message, args) => {

    let invites = await message.guild.fetchInvites().catch(error => { 
        return message.channel.send('من پریمیشن دیدن اینوایت های سرور رو ندارم پریمیشن ساخت اینوایت را به من بدهید');
    }) 

    invites = invites.array();

    arraySort(invites, 'uses', { reverse: true }); 

    let possibleinvites = [];
    let index = 0;
    invites.forEach(function(invites) {
        possibleinvites.push(`**${++index}.**  ${invites.inviter.tag}  \`${invites.uses}\` **اینوایت کرده**`)
    })

    const embed = new Discord.MessageEmbed()
        .setTitle(`برترین های دعوت به سرور`)
        .setColor("#33908b")
        .setDescription(`${possibleinvites.join('\n')}`)
        .setFooter('درخواست شده توسط' + message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
    message.channel.send(embed);
}

module.exports.help = {
  name:"leaderboard-invite",
  aliases: ["lbi"]
}