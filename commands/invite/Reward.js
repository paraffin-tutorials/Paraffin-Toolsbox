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
    if(args.length != 2) return message.reply("ERR:500");
    
    var roleId = args[0], targetInvite = Number(args[1]);
    if(!message.guild.roles.cache.has(roleId)) return message.reply("رول اشتباه وارد شده");
    if(isNaN(targetInvite)) return message.reply("عدد اشتباه وارد شده");

    const db = new Database("./Servers/" + message.guild.id, "Rewards");

    var rewards = db.get("rewards") || [];
    rewards.push({
        Id: roleId,
        Invite: targetInvite
    });

    db.set("rewards", rewards);
    message.reply("یک رول جدید برای جایزه اضاف شد");
};

module.exports.help = {
    name:"reward",
    aliases: [""]
  }