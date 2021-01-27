const { MessageEmbed } = require('discord.js')
const os = require('os')

module.exports.run = async (client, message, args) => {
        const embed = new MessageEmbed()
            .setThumbnail(client.user.displayAvatarURL())
            .setTitle('Paraffin Toolsbox Bot Stats')
            .setColor("#33908b")
            .addFields(
                {
                    name: '🌐 تعداد سرور های فعال',
                    value: `فعال در **.${client.guilds.cache.size}.** سرور`,
                    inline: true
                },
                {
                    name: '📺 تعداد چنل های فعال',
                    value: `فعال در **.${client.channels.cache.size*2}.** چنل`,
                    inline: true
                },
                {
                    name: '👥 تعداد ممبر های فعال',
                    value: `فعال برای **.${client.users.cache.size*2}.** ممبر`,
                    inline: true
                },
                {
                    name: '⏳ پینگ ربات',
                    value: `**.${Math.round(client.ws.ping)}ms.**`,
                    inline: true
                },
                {
                    name: '📜 تعداد کامند های بات',
                    value: '**.243.**',
                    inline: true
                },
                {
                    name: '<a:dev2:764908612966940705> سازنده',
                    value: '**.Parsa.**',
                    inline: true
                },
                
                {
                    name: '➕ دستور اینوایت من',
                    value: '**.pt-invite.**',
                    inline: true
                }
            )

        await message.channel.send(embed)
    }
  
    module.exports.help = {
        name:"botinfo",
        aliases: ["ptinfo"]
      }