const ms = require("ms")
const { MessageEmbed } = require('discord.js')

module.exports.run = async (bot, message, args) => {

  if (!args[0] || args[0] <= 0) return message.channel.send("Please enter a period of time for the timer to last!")
  let timer = args[0]
  try {
    let time = ms(ms(timer), { long: true })

    const embed2 = new MessageEmbed()
    
        .setColor(`#33908b`)
        .setDescription("تایمر شما شروع شد " + ` مدت زمان : \n **${time}**`)
    message.channel.send(embed2)
  } catch {
    message.channel.send("لطفا یک واحد زمانی صحیح را انتخاب کنید\n مثال : `timer 1m**`")
  }
  setTimeout(function () {
    let time = ms(ms(timer), { long: true })
    const embed = new MessageEmbed()
    
        .setColor(`#33908b`)
        .setDescription(`تایمر شما به اتمام رسید${message.author}, تایم تنظیم شده \n **${time}**`)
    message.channel.send(embed)
  }, ms(timer))

}

module.exports.help = {
    name:"timer",
    aliases: [""]
  }