const Discord = require("discord.js");
const fs = require("fs");
const db = require("quick.db");
const { 
  token, 
  prefix,
  interval 
} = require('./config.json')

const bot = new Discord.Client({disableEveryone: true});

bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

const { GiveawaysManager } = require('discord-giveaways');
bot.giveawaysManager = new GiveawaysManager(bot, {
    storage: "./giveaways.json",
    updateCountdownEvery: 5000,
    default: {
        botsCanWin: false,
        embedColor: "#FF0000",
        reaction: "🎉"
    }
});

fs.readdir("./commands/Bot/", (err, files) => {

  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }
  
  jsfile.forEach((f, i) =>{
    let props = require(`./commands/Bot/${f}`);
    console.log(`| ✅ ${f} loaded! `);
    bot.commands.set(props.help.name, props);
    props.help.aliases.forEach(alias => { 
      bot.aliases.set(alias, props.help.name);
    });
  });
})

fs.readdir("./commands/giveaway/", (err, files) => {

  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }
  
  jsfile.forEach((f, i) =>{
    let props = require(`./commands/giveaway/${f}`);
    console.log(`| ✅ ${f} loaded! `);
    bot.commands.set(props.help.name, props);
    props.help.aliases.forEach(alias => { 
      bot.aliases.set(alias, props.help.name);
    });
  });
})

fs.readdir("./commands/Search/", (err, files) => {

  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }
  
  jsfile.forEach((f, i) =>{
    let props = require(`./commands/Search/${f}`);
    console.log(`| ✅ ${f} loaded! `);
    bot.commands.set(props.help.name, props);
    props.help.aliases.forEach(alias => { 
      bot.aliases.set(alias, props.help.name);
    });
  });
})

fs.readdir("./commands/Buy/", (err, files) => {

  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }
  

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/Buy/${f}`);
    console.log(`| ✅ ${f} loaded! `);
    bot.commands.set(props.help.name, props);
    props.help.aliases.forEach(alias => { 
      bot.aliases.set(alias, props.help.name);
  
  });
});
})

fs.readdir("./commands/Spotify/", (err, files) => {

  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }
  

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/Spotify/${f}`);
    console.log(`| ✅ ${f} loaded! `);
    bot.commands.set(props.help.name, props);
    props.help.aliases.forEach(alias => { 
      bot.aliases.set(alias, props.help.name);
  
  });
});
})

fs.readdir("./commands/Developer/", (err, files) => {

  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/Developer/${f}`);
    console.log(`| ✅ ${f} loaded! `);
    bot.commands.set(props.help.name, props);
    props.help.aliases.forEach(alias => { 
      bot.aliases.set(alias, props.help.name);
  
  });
});
})

fs.readdir("./commands/Economy/", (err, files) => {

  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/Economy/${f}`);
    console.log(`| ✅ ${f} loaded! `);
    bot.commands.set(props.help.name, props);
    props.help.aliases.forEach(alias => { 
      bot.aliases.set(alias, props.help.name);
  
  });
});
})

fs.readdir("./commands/Fun/", (err, files) => {

  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/Fun/${f}`);
    console.log(`| ✅ ${f} loaded! `);
    bot.commands.set(props.help.name, props);
    props.help.aliases.forEach(alias => { 
      bot.aliases.set(alias, props.help.name);
  
  });
});
})

fs.readdir("./commands/Sell/", (err, files) => {

  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/Sell/${f}`);
    console.log(`| ✅ ${f} loaded! `);
    bot.commands.set(props.help.name, props);
    props.help.aliases.forEach(alias => { 
      bot.aliases.set(alias, props.help.name);
  
  });
});
})

fs.readdir("./commands/Help/", (err, files) => {

  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/Help/${f}`);
    console.log(`| ✅ ${f} loaded! `);
    bot.commands.set(props.help.name, props);
    props.help.aliases.forEach(alias => { 
      bot.aliases.set(alias, props.help.name);
  
  });
});
})

fs.readdir("./commands/Mod/", (err, files) => {

  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/Mod/${f}`);
    console.log(`| ✅  ${f} loaded! `);
    bot.commands.set(props.help.name, props);
    props.help.aliases.forEach(alias => { 
      bot.aliases.set(alias, props.help.name);
  
  });
});
})

fs.readdir("./commands/Text/", (err, files) => {

  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/Text/${f}`);
    console.log(`| ✅  ${f} loaded! `);
    bot.commands.set(props.help.name, props);
    props.help.aliases.forEach(alias => { 
      bot.aliases.set(alias, props.help.name);
  
  });
});
})

fs.readdir("./commands/Info/", (err, files) => {

  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/Info/${f}`);
    console.log(`| ✅  ${f} loaded! `);
    bot.commands.set(props.help.name, props);
    props.help.aliases.forEach(alias => { 
      bot.aliases.set(alias, props.help.name);
  
  });
});
})

fs.readdir("./commands/set/", (err, files) => {

  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/set/${f}`);
    console.log(`| ✅  ${f} loaded! `);
    bot.commands.set(props.help.name, props);
    props.help.aliases.forEach(alias => { 
      bot.aliases.set(alias, props.help.name);
  
  });
});
})

fs.readdir("./commands/Stats/", (err, files) => {

  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/Stats/${f}`);
    console.log(`| ✅  ${f} loaded! `);
    bot.commands.set(props.help.name, props);
    props.help.aliases.forEach(alias => { 
      bot.aliases.set(alias, props.help.name);
  
  });
});
})


  
bot.on('messageDelete', async message => {
	
  let msgChan = db.fetch(`${message.guild.id}msg`)

  if(msgChan == null) return;
  
  if(!msgChan) return;
  try{
   
  const embedmd1 = new MessageEmbed()
  .setTitle("💬 یک پیام پاک شد 💬")
  .setColor('#ff5100')
        .setAuthor(`${message.author.tag}`, `${message.author.displayAvatarURL({size: 2048})}`)
        .setDescription(`🗑 **پیام** ارسال شده توسط <@${message.author.id}> \n** پاک شده ** درون چنل ${message.channel} توسط ${entry.executor}`)
        .addField("💈 محتوای پیام :", "`" + `${message.content}` + "`", false)

  .setColor("#e31b1b")
  .setTimestamp();

  message.guild.channels.cache.get(msgChan).send(embedmd1) 
  }catch(e){
    
  }
  })

bot.on('messageUpdate', async (oldMsg, newMsg) => {
	
  let msgChan = db.fetch(`${oldMsg.guild.id}msg`)

  if(msgChan == null) return;
  
  if(!msgChan) return;
  try{
   
  const embedemsg = new MessageEmbed()
  .setTitle(`💬 یک پیام در چنل **${newMsg.channel.name} ادیت شد 💬**`)
  .setDescription(`فرستنده **${newMsg.author.tag}** `)
  .addField("**پیام قدیمی**", oldMsg)
  .addField("**پیام جدید**", newMsg)
  .setColor("#ee531f")
  .setTimestamp();

  oldMsg.guild.channels.cache.get(msgChan).send(embedemsg) 
  }catch(e){
    
  }
  })

bot.on('roleUpdate', async (oldRole, newRole) => {
	
  let rChan = db.fetch(`${oldRole.guild.id}r`)
   
  if(rChan == null) return;
  
  if(!rChan) return;
  try{
   
  const embedruu = new MessageEmbed()
  .setTitle("🧬 یک رول تغییر کرد 🧬")
  .setDescription(`**رول : **${oldRole.name}** تغییر کرد \n **${newRole.name}** (${newRole})**`)
  .setColor("#ee531f")
  .setTimestamp();

  oldRole.guild.channels.cache.get(rChan).send(embedruu) 
  }catch(e){
    
  }
  })

bot.on('roleCreate', async role => {
	
    let rChan = db.fetch(`${role.guild.id}r`)
    
    if(rChan == null) return;
    
    if(!rChan) return;
    try{
     
    const embedrc = new MessageEmbed()
    .setTitle("🧬 یک رول جدید ساخته شد 🧬")
    .setDescription(`نام رول : **${role}**`)
    .setColor("#35b011")
    .setTimestamp();

    role.guild.channels.cache.get(rChan).send(embedrc) 
    }catch(e){
      
    }
    })

bot.on('roleDelete', async role => {
	
      let rChan = db.fetch(`${role.guild.id}r`)
      
      if(rChan == null) return;
      
      if(!rChan) return;
      try{
       
      const embedrd = new MessageEmbed()
      .setTitle("🧬 یک رول حذف شد 🧬")
      .setDescription(`نام رول : **${role}**`)
      .setColor("#e31b1b")
      .setTimestamp();
  
      role.guild.channels.cache.get(rChan).send(embedrd) 
      }catch(e){
        
      }
      })

bot.on('emojiUpdate', async (oldEm, newEm) => {
	
        let emChan = db.fetch(`${oldEm.guild.id}em`)
        
        let msgeu1 = "";
      
        if (oldEm.name !== newEm.name) {
          msgeu1 = `😃 ایموجی : **${oldEm.name}** 😃 \n تغییر یافت به **${newEm.name}** (${newEm})`;
        } else {
          return;
        }
      
      
        if(emChan == null) return;
        
        if(!emChan) return;
        try{
          const embedeu = new Discord.MessageEmbed()
          .setDescription(`** ${msgeu1} **`)
        .setColor("#ee531f")
        oldEm.guild.channels.cache.get(emChan).send(embedeu) 
        }catch(e){
          
        }
        })
      
bot.on('emojiCreate', async (emoji) => {

    let emChan = db.fetch(`${emoji.guild.id}em`)

    if(emChan == null) return;
    
    if(!emChan) return;
    try{
      const embedec = new Discord.MessageEmbed()
    .setDescription(`**😃 یک ایموجی ساخته شد 😃\n نام ایموجی : ${emoji}**`)
    .setColor("#35b011")
    emoji.guild.channels.cache.get(emChan).send(embedec) 
    }catch(e){
      
    }
    })

bot.on('emojiDelete', async (emoji) => {
  let emChan = db.fetch(`${emoji.guild.id}em`)

  if(emChan == null) return;
  
  if(!emChan) return;
  try{
    const embeded = new Discord.MessageEmbed()
  .setDescription(`**😃 یک ایموجی پاک شد 😃\n نام ایموجی : ${emoji}**`)
  .setColor("#e31b1b")
  emoji.guild.channels.cache.get(emChan).send(embeded) 
  }catch(e){
    
  }
  })
      
bot.on('channelUpdate', async (oldChannel, newChannel) => {
	
  let chChan = db.fetch(`${oldChannel.guild.id}ch`)
  
  let msg3 = "";
  const type3 = oldChannel.type;

  if (type3 === "category") {
    if (oldChannel.name !== newChannel.name) {
      msg3 = `📚کتگوری **${newChannel}** تغییر کرد 📚\n \`${oldChannel.name}\` به \`${newChannel.name}\``;
    } else {
      return;
    }
  } else {
    if (oldChannel.name !== newChannel.name) {
      msg3 = `📚 چنل **${oldChannel.name}** تغییر کرد به  ${newChannel} 📚`;
    } else if (oldChannel.topic !== newChannel.topic) {
      msg3 = `📚 مدل چنل ${newChannel} تغییر کرد 📚 \n \`${oldChannel.topic}\` به \`${newChannel.topic}\``;
    } else {
      return;
    }
  }


  if(chChan == null) return;
  
  if(!chChan) return;
  try{
    const embedchu = new Discord.MessageEmbed()
    .setDescription(`**${msg3}**`)
  .setColor("#ee531f")
  oldChannel.guild.channels.cache.get(chChan).send(embedchu) 
  }catch(e){
    
  }
  })

bot.on('channelCreate', async (channel) => {
	
  let chChan = db.fetch(`${channel.guild.id}ch`)
    
	let msg2 = "";
  if (channel.type === "category") {
    msg2 = `📚 یک کتگوری ساخته شد 📚 \n نام کتگوری : ${channel.name}`;
  } else {
    msg2 = `📚 یک چنل ساخته شد 📚 \n نام چنل :${channel.name}`;
  }

    if(chChan == null) return;
    
    if(!chChan) return;
    try{
      const embedchc = new Discord.MessageEmbed()
      .setDescription(`**${msg2}**`)
    .setColor("#35b011")
    channel.guild.channels.cache.get(chChan).send(embedchc) 
    }catch(e){
      
    }
    })

bot.on('channelDelete', async (channel) => {
	
  let chChan = db.fetch(`${channel.guild.id}ch`)
  
	let msg1 = "";
    if (channel.type === "category") {
      msg1 = `📚 یک کتگوری پاک شد 📚 \n نام کتگوری :${channel.name}`;
    } else {
      msg1 = `📚 یک چنل پاک شد 📚 \n نام چنل :${channel.name}`;
    }

	if(chChan == null) return;
	
	if(!chChan) return;

    const embedchd = new Discord.MessageEmbed()
  .setDescription(`** ${msg1} **`)
  .setColor("#e31b1b")
  channel.guild.channels.cache.get(chChan).send(embedchd) 
  })
 
bot.on('guildMemberAdd', async (member) => {
	
    let wChan = db.fetch(`${member.guild.id}w`)

    let server = member.guild.name;
    let user = `${member.user.username}  \`${member.user.bot ? 'بات' : 'ممبر'}\``;
    let servercount = member.guild.memberCount;
    
    let wCol = db.fetch(`${member.guild.id}wCol`) || `35b011`

    let wChat = db.fetch(`${member.guild.id}wChat` ) || `<a:wel2:768384188255961089><a:wel1:768384184862769175> خوش آمدی`
    
    if(wChan == null) return;
    
    if(!wChan) return;
    try{
      const embedw = new Discord.MessageEmbed()
    .setThumbnail(member.user.displayAvatarURL({ dynamic: true, size: 512}))
    .setDescription(`**${wChat} ${member.user.username}**`)
   
    .setColor(`${wCol}`)
    member.guild.channels.cache.get(wChan).send(embedw) 
    }catch(e){
      
    }
    })
  
bot.on('guildMemberRemove', async (member) => {
	
  let bChan = db.fetch(`${member.guild.id}b`)

  let server = member.guild.name;
  let user = `${member.user.username}  \`${member.user.bot ? 'بات' : 'ممبر'}\``;
  let servercount = member.guild.memberCount;
  
  let bCol = db.fetch(`${member.guild.id}bCol`) || `da0e0e`

  let bChat = db.fetch(`${member.guild.id}bChat` ) || `<a:waving_lol:757532825132990505> خدا نگهدار`
  
	if(bChan == null) return;
	
	if(!bChan) return;
  try{
    const embedb = new Discord.MessageEmbed()
  .setThumbnail(member.user.displayAvatarURL({ dynamic: true, size: 512}))
  .setDescription(`**${bChat} ${member.user.username}**`)
  
  .setColor(`${bCol}`)
  member.guild.channels.cache.get(bChan).send(embedb)
}catch(e){
	  
}
})

bot.on("guildCreate", async  guild => {
  const webhookClient1 = new Discord.WebhookClient("780103287285743637", "LPz10x56Tnv9nwEaem3nc05lF2a7OmvTf17od1RJo5q8Gli87OW5SRxvyhvXFVhAGyHn");
  const newembed1 = new Discord.MessageEmbed()
  .setDescription(`**بات به یک سرور اضاف شد <:server:780138062541226005> **`)
  .setAuthor(`${guild.name}`, `${guild.iconURL({ dynamic: true })}`) 
  .addField("نام سرور <:tik:780138062578712646> ", `${guild.name}`)
 
  .addField("آیدی سرور <:tik:780138062578712646> ", `${guild.id}`)
  .setColor("#22a3ff")
  webhookClient1.send({
    username: ` Paraffin Toolsbox`,
    avatarURL: `https://cdn.discordapp.com/attachments/752132665771294792/780457719147659275/Paraffin-tool-icon.png`,
    embeds: [newembed1]
  });
});

bot.on("guildDelete", guild => {
    const webhookClient2 = new Discord.WebhookClient("780103287285743637", "LPz10x56Tnv9nwEaem3nc05lF2a7OmvTf17od1RJo5q8Gli87OW5SRxvyhvXFVhAGyHn");
  const newembed2 = new Discord.MessageEmbed()
  .setDescription(`**بات از یک سرور حذف شد <:serverblack:780138062822375475> **`)
  .setAuthor(`${guild.name}`, `${guild.iconURL({ dynamic: true })}`) 
  .addField("نام سرور <:tikblack:780138062700347392> ", `${guild.name}`)

  .addField("آیدی سرور <:tikblack:780138062700347392> ", `${guild.id}`)
  .setColor("#0e0e0e")
  webhookClient2.send({
    username: ` Paraffin Toolsbox`,
    avatarURL: `https://cdn.discordapp.com/attachments/752132665771294792/780457719147659275/Paraffin-tool-icon.png`,
    embeds: [newembed2]
});
});

bot.on('ready', () => {
  const guild = bot.guilds.cache.get('690114196532101156')

  const channelCountChannel = guild.channels.cache.get('780103276984533033')
  const channelCount = guild.memberCount
  channelCountChannel.setName(`🪔Paraffin Members: ${channelCount}`)

}, 3000)

bot.on("ready", async () => {
  console.log("|\n|        Paraffin Toolsbox Bot\n| Developer Parsa\n|\n| Last Update: 16.6.2020\n|")
  bot.user.setActivity(`pt-help | Paraffin Toolsbox | ${bot.guilds.cache.size} Servers`, {type: "WATCHING", url:"https://www.twitch.tv/parsafiroozi"});

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
     
    let paraffintbprefix = db.fetch(`${message.guild.id}prefix`) || "5555555555555";

    let prefix = paraffintbprefix;
    let messageArray = message.content.split(" ");
    let args = message.content.slice(prefix.length).trim().split(/ +/g);
    let cmd = args.shift().toLowerCase();
    let commandfile;

    db.add(`messages1_${message.guild.id}_${message.author.id}`, 1)
    db.add(`pcoin_${message.guild.id}_${message.author.id}`, 1)
    let messagefetch = db.fetch(`messages1_${message.guild.id}_${message.author.id}`)
  
    let messages;
    if (messagefetch == 50) messages = 50; //Level 1
    else if (messagefetch == 100) messages = 100; // Level 2
    else if (messagefetch == 300) messages = 300; // Level 3
    else if (messagefetch == 85000) messages = 500; // Level 4
    else if (messagefetch == 800) messages = 800; // Level 5
    else if (messagefetch == 1000) messages = 1000; // Level 6
    else if (messagefetch == 1300) messages = 1300; // Level 7
    else if (messagefetch == 1600) messages = 1600; // Level 8
    else if (messagefetch == 1900) messages = 1900; // Level 9
    else if (messagefetch == 2200) messages = 2200; // Level 10
    else if (messagefetch == 2500) messages = 2500; // Level 11
    else if (messagefetch == 2600) messages = 2600; // Level 12
    else if (messagefetch == 2800) messages = 2800; // Level 13
    else if (messagefetch == 2900) messages = 2900; // Level 14
    else if (messagefetch == 3300) messages = 3300; // Level 15
    else if (messagefetch == 3500) messages = 3500; // Level 16
    else if (messagefetch == 3800) messages = 3800; // Level 17
    else if (messagefetch == 4200) messages = 4200; // Level 18
    else if (messagefetch == 4400) messages = 4400; // Level 19
    else if (messagefetch == 4600) messages = 4600; // Level 20
    else if (messagefetch == 5000) messages = 5000; // Level 21
    else if (messagefetch == 5500) messages = 5500; // Level 22
    else if (messagefetch == 6000) messages = 6000; // Level 23
    else if (messagefetch == 6500) messages = 6500; // Level 24
    else if (messagefetch == 7500) messages = 7500; // Level 25
    else if (messagefetch == 8000) messages = 8000; // Level 26
    else if (messagefetch == 8500) messages = 8500; // Level 27
    let replies = [
      'https://cdn.discordapp.com/attachments/747798345145122816/749253392940925020/LastingIdealCatfish-size_restricted.gif'
      ,'https://cdn.discordapp.com/attachments/747798345145122816/749253601725251623/2ddfce77419693.5cab8d4f80b90.gif'
      ,'https://cdn.discordapp.com/attachments/747798345145122816/749254275116433434/source_1.gif'
      ,'https://cdn.discordapp.com/attachments/747798345145122816/749254347921162360/ObedientAcidicAmericangoldfinch-size_restricted.gif'
      ,'https://cdn.discordapp.com/attachments/747798345145122816/749254391047127060/1530361668_qgpcufH.gif'
    ]
    let result = Math.floor((Math.random() * replies.length));
    if (!isNaN(messages)) {
      db.add(`level1_${message.guild.id}_${message.author.id}`, 1)
      db.add(`pcoin_${message.guild.id}_${message.author.id}`, 500)
      let levelfetch = db.fetch(`level1_${message.guild.id}_${message.author.id}`)
      
  
    const LChan = db.fetch(`${message.guild.id}lvl`)

    const levelembed = new Discord.MessageEmbed()
    .setDescription(`<:levelup:773097788011053056>   ${message.author},شما لولتون ارتقا پیدا کرد ، به **.${levelfetch}.**`)
    .setImage(`${replies[result]}`)
    .setColor("#33908b")
    message.guild.channels.cache.get(LChan).send(`${message.author}`)
    message.guild.channels.cache.get(LChan).send(levelembed)
    }

    if (bot.commands.has(cmd)) {
      commandfile = bot.commands.get(cmd);
  } else if (bot.aliases.has(cmd)) {
    commandfile = bot.commands.get(bot.aliases.get(cmd));
  }
  
      if (!message.content.startsWith(prefix)) return;

          
  try {
    commandfile.run(bot, message, args);
  
  } catch (e) {
  }}
  )})

bot.on("message", async message => {
     
    let paraffintbprefix = config.prefix;

    let prefix = paraffintbprefix;
    let messageArray = message.content.split(" ");
    let args = message.content.slice(prefix.length).trim().split(/ +/g);
    let cmd = args.shift().toLowerCase();
    let commandfile;

    if (bot.commands.has(cmd)) {
      commandfile = bot.commands.get(cmd);
  } else if (bot.aliases.has(cmd)) {
    commandfile = bot.commands.get(bot.aliases.get(cmd));
  }
  
      if (!message.content.startsWith(prefix)) return;

          
  try {
    commandfile.run(bot, message, args);
  
  } catch (e) {
  }}
  )

bot.login(token);