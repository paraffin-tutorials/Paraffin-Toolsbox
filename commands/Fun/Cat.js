const axios = require('axios');
const { MessageEmbed } = require('discord.js');

module.exports.run = async (client, message, args) => {
        const url = "https://some-random-api.ml/img/cat";
        const facts = "https://some-random-api.ml/facts/cat"
        let result = Math.floor((Math.random() * replies.length));
        let image, response;
        let fact, responses;
        try {
            response = await axios.get(url);
            image = response.data;

            responses = await axios.get(facts)
            fact = responses.data

        } catch (e) {
            return message.channel.send(`An error occured, please try again!`)
        }

        const embed = new MessageEmbed()
        .setTitle(`عکس رندوم به همراه یک دانستی درباره گربه ها`)
            .setColor(`#33908b`)
        
            .setImage(image.link)

        await message.channel.send(embed)
    }

    module.exports.help = {
        name:"cat",
        aliases: ["cat"]
      }