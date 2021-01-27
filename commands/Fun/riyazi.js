const math = require('mathjs'); // npm i mathjs --save
const Discord = require('discord.js');


exports.run = async (bot, message, args) => {

        if (!args[0]) return message.channel.send('لطفا یک محاسبه ریاضی صحیح را بنویسید');

        let resp;
        try {
            resp = math.evaluate(args.join(' '));
        } catch (e) {
            return message.channel.send('لطفا یک محاسبه ریاضی صحیح را بنویسید');
        }

        const embed = new Discord.MessageEmbed()
            .setColor('#33908b')
            .setTitle('ماشسن حساب')
            .addField('دریفاتی', `\`\`\`js\n${args.join('')}\`\`\``)
            .addField('خروجی', `\`\`\`js\n${resp}\`\`\``)
        
        message.channel.send(embed)
    }
    
module.exports.help = {
    name: "math",
    aliases: [""]
}
