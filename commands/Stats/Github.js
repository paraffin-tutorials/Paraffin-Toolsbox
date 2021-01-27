
    const Discord = require("discord.js");
    const fetch = require("node-fetch");
    const moment = require("moment");
    


module.exports.run = async (bot, message, args) => {
 
        const user = args.slice(0).join(" ")
    
        if(!user) return message.channel.send("لطفا یک اکانت گیت هاب را مشخص کنید")
        
        const gh = await fetch(`https://api.github.com/users/${user}`)
        .then(res => res.json())
        .then(json => {
          
          if(json.twitter_username === null) json.twitter_username = "\`این اکانت توییتر ندارد!\`"
          
          const embed = new Discord.MessageEmbed()
          .setColor("#c8c5c5")
          .setTitle(json.login)
          .setThumbnail(json.avatar_url)
          .addField("آیدی<:githubwhite:766272010493624320>   ", json.id)
          .addField("توضیحات<:githubwhite:766272010493624320>   ", json.bio)
          .addField("دنبال کنندگان<:githubwhite:766272010493624320>   ", json.followers)
          .addField("دنبال شدگان<:githubwhite:766272010493624320>   ", json.following)
          .addField("پروژه های پابلیک<:githubwhite:766272010493624320>   ", json.public_repos)
          .addField("توییتر<:githubwhite:766272010493624320>   ", json.twitter_username)
          .addField("زمان ساخت اکانت<:githubwhite:766272010493624320>   ", moment(json.created_at).utcOffset("+0000").format("LLLL"))
          .setFooter('درخواست شده توسط' + message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
          message.channel.send(embed)
        })
        .catch(err => {
          message.channel.send("اکانت پیدا نشد")
        })
      }
    
    module.exports.help = {
        name: "github",
        aliases: ["gh"]
      }