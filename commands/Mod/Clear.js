const { MessageEmbed } = require('discord.js')
module.exports.run = async (client, message, args) => {
        if (!message.member.permissions.has("MANAGE_MESSAGES")) // sets the permission
            return message.channel.send(
                'شما نیاز به پریمیشن `MANAGE_MESSAGE` دارید' // returns this message to user with no perms
            );
        if (!args[0]) {
            return message.channel.send(`لطفا بین اعداد 1 تا 100 یکی را انتخاب کنید!`)
        }

        let deleteAmount;

        if (parseInt(args[0]) > 100 ) {
            deleteAmount = 100;
        } else {
            deleteAmount = parseInt(args[0]);
        }

        await message.channel.bulkDelete(deleteAmount, true);

        var channel = message.guild.channels.cache.find(c => c.name === 'pf6-logs');

        const embed = new MessageEmbed()
            .setTitle(`${message.author.username}`)
            .setThumbnail(message.author.displayAvatarURL())
            .setDescription(`با موفقیت ${deleteAmount} پیام پاک شد !`)
            .setFooter(message.author.username, message.author.displayAvatarURL())
            .setColor('#f2f2f2')
            message.channel.send(embed)
    }

    module.exports.help = {
        name:"clear",
        aliases: [""]
      }