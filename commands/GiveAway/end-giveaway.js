const ms = require('ms');

module.exports.run = async (bot, message, args) => {
    
    // If the member doesn't have enough permissions
    if(!message.member.hasPermission('MANAGE_MESSAGES') && !message.member.roles.cache.some((r) => r.name === "Giveaways")){
        return message.channel.send(':x: را ندارید `MANAGE_MESSAGES` شما پریمیشن  ');
    }

    // If no message ID or giveaway name is specified
    if(!args[0]){
        return message.channel.send(':x:  لطفا یک آیدی عددی صحیح را وارد کنید');
    }

    // try to found the giveaway with prize then with ID
    let giveaway = 
    // Search with giveaway prize
    bot.giveawaysManager.giveaways.find((g) => g.prize === args.join(' ')) ||
    // Search with giveaway ID
    bot.giveawaysManager.giveaways.find((g) => g.messageID === args[0]);

    // If no giveaway was found
    if(!giveaway){
        return message.channel.send('غیر فعال شد : ERROR:500 `'+ args.join(' ') +'`.');
    }

    // Edit the giveaway
    bot.giveawaysManager.edit(giveaway.messageID, {
        setEndTimestamp: Date.now()
    })
    // Success message
    .then(() => {
        // Success message
        message.channel.send('گیواوی تمام شد '+(bot.giveawaysManager.options.updateCountdownEvery/1000)+' seconds...');
    })
    .catch((e) => {
        if(e.startsWith(`گیواوی ${giveaway.messageID} تمام شده.`)){
            message.channel.send('این گیواوی تمام شده.');
        } else {
            console.error(e);
            message.channel.send('ERROR:500');
        }
    });

};

module.exports.help = {
    name:"end-giveaway",
    aliases: [""]
  }