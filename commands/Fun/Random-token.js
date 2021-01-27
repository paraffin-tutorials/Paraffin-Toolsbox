const axios = require('axios');
const { MessageEmbed } = require('discord.js');

module.exports.run = async (client, message, args) => {
    const tokens = "https://some-random-api.ml/bottoken";

    let tokenbot, response;
    try {
        response = await axios.get(tokens)
        tokenbot = response.data
    } catch (e) {
        return message.channel.send(`An error occured, please try again!`)
    }

    const embed = new MessageEmbed()
    .setTitle(`**یک تاکن رایگان ربات دیسکورد**`)
        .setColor(`#33908b`)
        .setDescription('احتمال کار کردن این تاکن 80 درصد است !')
        .setThumbnail('https://cdn.discordapp.com/attachments/747798345145122816/748396091380334602/1538681447_a8keeuutawx01.gif')
        .addField(`تاکن بات:`, tokenbot.token)

        .addField('درخواست شده توسط : ', `${message.author}`)
    await message.channel.send(embed)
    }

    module.exports.help = {
        name:"bottoken",
        aliases: ["bt"]
      }