const Discord = require("discord.js");
const Database = require("../../Helpers/Database");

/**
 * @param {Discord.Client} client 
 * @param {Discord.Message} message 
 * @param {Array<String>} args 
 */
module.exports.run = async (bot, message, args) => {
    const db = new Database("./Servers/" + message.guild.id, "Invites");
    var victim = message.mentions.users.first() || bot.users.cache.get(args[0]) || message.author;
    var data = db.get(`invites.${victim.id}`) || { total: 0, fake: 0, inviter: null, regular: 0, bonus: 0, leave: 0 };
    var embed = new Discord.MessageEmbed()
    .setDescription(`وضعیت اینوایت های شما **${(data.total || 0) + (data.bonus || 0)}** اینوایت! (**${data.regular || 0}** معمولی, **${data.bonus || 0}** جایزه, **${data.leave || 0}** بیرون رفته, **${data.fake || 0}** تقلبی)`)
    .setColor("33908b");
    message.channel.send(embed);
};

module.exports.help = {
    name:"invites",
    aliases: ["ime"]
  }