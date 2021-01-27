
const { MessageEmbed } = require('discord.js');
const axios = require('axios');


module.exports.run = async (bot, message, args) => {

      let getInfo1 = async () => {
        
        let response1 = await axios.get(`http://gahshomar-api.herokuapp.com/date/jalali`);
        let info1 = response1.data;
        return info1;
      };
        let infoValue1 = await getInfo1();
     

        let getInfo2 = async () => {
        
            let response2 = await axios.get(`http://gahshomar-api.herokuapp.com/date`);
            let info2 = response2.data;
            return info2;
          };
            let infoValue2 = await getInfo2();
            
            let getInfo3 = async () => {
            
              let response3 = await axios.get(`https://api.codebazan.ir/time-date/?td=time`);
              let info3 = response3.data;
              return info3;
            };
              let infoValue3 = await getInfo3();

              
            let getInfo4 = async () => {
            
              let response4 = await axios.get(`https://api.codebazan.ir/time-date/?json=all`);
              let info4 = response4.data.result;
              return info4;
            };
              let infoValue4 = await getInfo4();
         
              
            let getInfo5 = async () => {
            
              let response5 = await axios.get(`http://gahshomar-api.herokuapp.com/time`);
              let info5 = response5.data;
              return info5;
            };
              let infoValue5 = await getInfo5();
         
           
        const embed = new MessageEmbed()
        .setColor("#33908b")
        .setThumbnail('https://freeiconshop.com/wp-content/uploads/edd/calendar-flat.png')
        .addField('تاریخ امروز 📅', `${infoValue1} **|** ${infoValue2}`)
        .addField('ساعت هم اکنون ⏰', `${infoValue5} **|** ${infoValue3}`)
        .addField('اسم روز هفته :calendar_spiral:', `${infoValue4.nameday} **|** ${infoValue4.fanameday}`)
        .addField('اسم ماه :calendar_spiral:', `${infoValue4.month} **|** ${infoValue4.famonth}`)
        .addField('اسم سال 💫', 'Mouse **|** موش')
        .setFooter('درخواست شده توسط | ',  message.author.displayAvatarURL({ dynamic: true }))
        
  
        message.channel.send(embed)
    };

module.exports.help = {
    name:"date",
    aliases: [""]
}
