
const { MessageEmbed } = require('discord.js');
const axios = require('axios');


module.exports.run = async (bot, message, args) => {

      let getInfo = async () => {
        if(!args[0]) return message.channel.send("لطفا یک نام کاربری بنویسید!");
        let response = await axios.get(`https://www.aparat.com/etc/api/profile/username/${args[0]}`);
        let info = response.data.profile;
        return info;
      };
        let infoValue = await getInfo();
     

        const embed = new MessageEmbed()
        .setColor("#e91e63")
  
        
        .setTitle(`کلمه جستجو شده : ${infoValue.username}`)
        .setThumbnail(`${infoValue.pic_m}`)
        .addField(`نام کاربری<:aparat:766699861760147456> `, `${infoValue.username}`)
        .addField(`آیدی چنل<:aparat:766699861760147456> `, `${infoValue.userid}`,true)
       .addField(`تعداد ویدیو ها<:aparat:766699861760147456> `, `${infoValue.video_cnt}`,true)
       .addField(`تعداد دنبال شوندگان<:aparat:766699861760147456> `, `${infoValue.followed_cnt}`,true)
       .addField(`تعداد دنبال کنندگان<:aparat:766699861760147456> `, `${infoValue.follower_cnt}`,true)
       .addField(`استریمر ؟<:streamap:766918955729682463>`, `${infoValue.has_live}`,true)
       .setFooter('درخواست شده توسط | ',  message.author.displayAvatarURL({ dynamic: true }))
        
  
        message.channel.send(embed)
    };

module.exports.help = {
    name:"ap",
    aliases: ["aparat"]
}
