const { Client, MessageEmbed } = require('discord.js');
const client = new Client();
const axios = require('axios');
const prefix = '**'

module.exports.run = async (bot, message, args) => {

      let getInfo = async () => {
        if(!args[0]) return message.channel.send("لطفا یک نام کاربری بنویسید!");
        let response = await axios.get(`https://apis.duncte123.me/insta/${args.join(" ")}`);
        let info = response.data;
        return info;
      };
      let infoValue = await getInfo();
     

      const embed = new MessageEmbed()
      .setColor("#0f0e0e")
      .setThumbnail(`${infoValue.user.profile_pic_url}`)
      .setDescription(`**${infoValue.user.username}** ${infoValue.user.is_verified ? '<a:ver:748548495043985459>' : ''} ${infoValue.user.is_private ? '🔒' : '🔓'}`)
      .addField("**نام<:Instagram:766036747003625502> **", `**|** ${infoValue.user.full_name}`)
      .addField("**بیو<:Instagram:766036747003625502> **", `**|** ${infoValue.user.biography}`)
      .addField("**تعداد  پست های آپلود شده<:Instagram:766036747003625502> **", `**|** ${infoValue.user.uploads.count}`)
      .addField("**دنبال کنندگان<:Instagram:766036747003625502> **", `**|** ${infoValue.user.followers.count}`)
      .addField("**دنبال شوندگان<:Instagram:766036747003625502> **", `**|** ${infoValue.user.following.count}`)
      
     .setFooter('درخواست شده توسط | ',  message.author.displayAvatarURL({ dynamic: true }))
      

      message.channel.send({embed})
    };

module.exports.help = {
    name:"ig",
    aliases: ["instagram"]
}