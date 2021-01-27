const Discord = require('discord.js')
const db = require("quick.db");

module.exports.run = async (bot, message, args) => {

    let Embed5 = new Discord.MessageEmbed()
    .setColor("#33908b")
    .setDescription(`شما جزو سرور های پریمیوم نیستید **|** <:TickNo:764816791699980318>   `);

    let green2colore = db.fetch(`premium_${message.guild.id}`)

    if (green2colore > 0) return message.channel.send(Embed5)

    message.delete();
    
  const Loading = new Discord.MessageEmbed().setColor('').setTitle('آر جی بی در حال لود شدن')
message.channel.send(Loading)

.then((message1) => {
  setInterval(function() {
    
  let rainbowrole = [
    '0200ff',
    '35ff00',
    'ff0000',
  ]
  var colors = rainbowrole
  var rolestart = setInterval(function() {
  var colorsz = colors[Math.floor(Math.random() * colors.length)];

    message1.edit(new Discord.MessageEmbed().setTitle(`${args.join(" ")}`).setColor(colorsz))}, 6000); 
 }, 6000)})

    }

    
    module.exports.help = {
        name: "5365732",
        aliases: ["7542742"]
    }
