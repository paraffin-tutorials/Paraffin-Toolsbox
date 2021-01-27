const figlet = require('figlet');

module.exports.run = async (bot, message, args) => {
        if(!args[0]) return message.channel.send('Please provide some text');

        msg = args.join(" ");

        figlet.text(msg, function (err, data){
            if(err){
                console.log('ERROR:404 Paraffin Toolsbox');
                console.dir(err);
            }
            if(data.length > 2000) return message.channel.send('متن شما بسیار زیاد است')

            message.channel.send('```' + data + '```')
        })
    }

module.exports.help = {
    name:"banner",
    aliases: [""]
  }