const Discord = require("discord.js");
const Database = require("../../Helpers/Database");
// exports.onLoad = (client) => {};
/**
 * @param {Discord.Client} client 
 * @param {Discord.Message} message 
 * @param {Array<String>} args 
 */
module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("ADMINISTRATOR") && !message.member.hasPermission("MANAGE_GUILD")) return message.reply("شما پریمیشن `MANAGE_GUILD` را ندارید");

    var victim = message.mentions.members.size > 0 ? message.mentions.members.first().id : args.length > 0 ? args[0] : undefined;
    if(!victim) return message.reply("شما ممبری را منشن نکردید");
    victim = message.guild.member(victim);
    if(!victim) return message.reply("ممبر منشن شده پیدا نشد");

    var num = Number(args[1]);
    if(isNaN(num)) return message.reply("valid number.");
    const db = new Database("./Servers/" + message.guild.id, "Invites");

    var bonus = (db.add(`invites.${victim.id}.bonus`, num) || 0), total = (db.get(`invites.${victim.id}.total`) || 0);
    message.reply(`${num} جایزه با موفقیت اضاف شد ${victim}.`);

    global.onUpdateInvite(victim, message.guild.id, total + bonus);
};

module.exports.help = {
    name:"bonus",
    aliases: [""]
  }