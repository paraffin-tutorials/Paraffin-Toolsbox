const ms = require('ms');

module.exports.run = async (bot, message, args) => {
    
    // If the member doesn't have enough permissions
    if(!message.member.hasPermission('MANAGE_MESSAGES') && !message.member.roles.cache.some((r) => r.name === "Giveaways")){
        return message.channel.send(':x: را ندارید `MANAGE_MESSAGES` شما پریمیشن  ');
    }

    // Giveaway channel
    let giveawayChannel = message.mentions.channels.first();
    // If no channel is mentionned
    if(!giveawayChannel){
        return message.channel.send(':x: لطفا چنل مورد نظر را منشن کنید');
    }

    // Giveaway duration
    let giveawayDuration = args[1];
    // If the duration isn't valid
    if(!giveawayDuration || isNaN(ms(giveawayDuration))){
        return message.channel.send(':x: لطفا یک زمان صحیح را وارد کنید');
    }

    // Number of winners
    let giveawayNumberWinners = args[2];
    // If the specified number of winners is not a number
    if(isNaN(giveawayNumberWinners) || (parseInt(giveawayNumberWinners) <= 0)){
        return message.channel.send(':x: لطفا تعداد برنده هارا مشخص کنید');
    }

    // Giveaway prize
    let giveawayPrize = args.slice(3).join(' ');
    // If no prize is specified
    if(!giveawayPrize){
        return message.channel.send(':x: لطفا جایزه مورد نظر را مشخص کنید');
    }

    // Start the giveaway
    bot.giveawaysManager.start(giveawayChannel, {
        // The giveaway duration
        time: ms(giveawayDuration),
        // The giveaway prize
        prize: giveawayPrize,
        // The giveaway winner count
        winnerCount: giveawayNumberWinners,
        // Who hosts this giveaway
        hostedBy: message.author,
        // Messages
        messages: {
            giveaway: ("@everyone\n\n")+"🎉🎉 **GIVEAWAY** 🎉🎉",
            giveawayEnded: ("@everyone\n\n")+"🎉🎉 **GIVEAWAY ENDED** 🎉🎉",
            timeRemaining: "زمان باقی مانده : **{duration}**!",
            inviteToParticipate: "ری اکشن کنید تا در گیواوی شرکت داده بشید 🎉",
            winMessage: "مبارک, {winners}! شما برنده **{prize}** شدید!",
            embedFooter: "Paraffin Toolsbox Giveaways",
            noWinner: "هیچ برنده ای انتخاب نشد",
            hostedBy: "سازنده گیواوی: {user}",
            winners: "تعداد برنده ها",
            endedAt: "تمام میشود در",
            units: {
                seconds: "ثانیه",
                minutes: "دقیقه",
                hours: "ساعت",
                days: "روز",
                pluralS: false // Not needed, because units end with a S so it will automatically removed if the unit value is lower than 2
            }
        }
    });

    message.channel.send(`گیواوی شروع شد در چنل : ${giveawayChannel}!`);

};


module.exports.help = {
    name:"start-giveaway",
    aliases: [""]
  }