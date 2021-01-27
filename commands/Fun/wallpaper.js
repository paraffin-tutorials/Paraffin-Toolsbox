const db = require('quick.db')
const Discord = require('discord.js')
const ms = require("parse-ms");

module.exports.run = async (bot, message, args) => {
    

    let user = message.author;
    let author = await db.fetch(`wallpaper_${message.author.id}`)

    let timeout = 600000;
    
    if (author !== null && timeout - (Date.now() - author) > 0) {
        let time = ms(timeout - (Date.now() - author));
    
        let timeEmbed = new Discord.MessageEmbed()
         .setColor("#33908b")
        .setDescription(`pt-شما وی آی پی لول 6 نشده اید این کامند برای شما هر 60 ثانیه آزاد میشود** **|** <:TickNo:764816791699980318>   \n\n ${time.seconds}s`);
      } else {

       
  const wallpaper = [
    'https://i.pinimg.com/originals/60/c2/17/60c2177448cbf90408ed1df7da78cf00.jpg',
    'https://i.pinimg.com/originals/bf/82/f6/bf82f6956a32819af48c2572243e8286.jpg',
    'https://wallpapercave.com/wp/wp3437600.jpg',
    'https://i.pinimg.com/originals/3b/8a/d2/3b8ad2c7b1be2caf24321c852103598a.jpg',
    'https://free4kwallpapers.com/uploads/originals/2020/04/30/retro-mustang-wallpaper.jpg',
    'https://www.hdcarwallpapers.com/walls/mercedes_benz_vision_avtr_2020_4k-HD.jpg',
    'https://cdn.wccftech.com/wp-content/uploads/2020/02/windows-10-12-scaled.jpg',
    'https://www.pixel4k.com/wp-content/uploads/2019/06/spring-autumn-colorful-nature-magical-forest-4k_1560535373.jpg',
    'https://www.kolpaper.com/wp-content/uploads/2020/05/Darth-Vader-Wallpaper-4K.jpg',
    'https://paranoidandroid.co/assets/wallpapers/2018/submerged_desktop_thumb.jpg',
    'https://www.pxwall.com/wp-content/uploads/2018/03/Wallpaper-Polygons-Artwork-4K-Abstract.jpg',
    'https://cdn.wallpapersafari.com/51/55/miKNzI.jpg',
    'https://i.pinimg.com/originals/32/50/3a/32503aa7cd6469bfa27c06ffd4605a78.jpg',
    'https://img.wallpapersafari.com/phone/640/1136/62/64/l8eykm.jpg',
    'https://wallpapermemory.com/uploads/719/pokemon-go-wallpaper-uhd-4k-165698.jpg',
    'https://lh3.googleusercontent.com/proxy/IOU6uprZ6eJyYC5XNp9jUWdVsDu1_cnXW9nW-dzlMZxcpIsDk2RPnVIHaE1svc0_ipqi0aH1PdRklKNXfKRSPQ8HAYUevkz0Z-TCO2cy1xcHRO-y3Mc77POyuRF9l_2mGl3JAvg1AvYrAw',
    'https://www.pixel4k.com/wp-content/uploads/2018/10/abstract-colorful-shape-4k_1539370815.jpg',
    'https://lh3.googleusercontent.com/proxy/z81ZTSqopVdn1vYODxP0jdDcNB3ZBWn0aB_NNzcvb02SiqaFdvEfAKUU8yZccC7SoRt1iA0it5l-zPpj67xch5A6uShjCcV9D9ELuGWPGMDJKoEb51rtY_oP50B_hFy-EIhxmWbNVrBvrUE',
    'https://i.pinimg.com/originals/cf/41/3e/cf413e4a7bd6b503ce7828fb6f7b7338.jpg',
    'https://cdn.guidingtech.com/imager/assets/210962/Cool-Flash-Wallpapers-in-HD-and-4K-for-Desktop-and-Mobile-1_4d470f76dc99e18ad75087b1b8410ea9.png?1545040423',
    'https://www.hdcarwallpapers.com/walls/dodge_challenger_srt_demon_4k-HD.jpg',
    'https://www.pixel4k.com/wp-content/uploads/2019/09/skull-dark-minimal_1569187400.jpg',
    'https://i.pinimg.com/originals/8f/43/3e/8f433ed00acf3eb0bae3ad1d0e4b63f4.jpg',
    'data:image/jpeg;base64,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',
    'https://miro.medium.com/max/720/1*2yUCRg2T4zLmC2BqoKZMrw.jpeg',
    'https://lh3.googleusercontent.com/proxy/uuzIjcOCg3CPlLdx51F-4yzQWumH0Vk5ZRXvian80OIRDx0DolCeUTpno3PNpcG-ivNOGqUgJdgTr30qL7533uA6fu9QZCrag7Z5YZV8RTZxSuTjoA5sGcacxffPo2YbFTgCdVoNvhl7DAr6IM4',
    'https://www.itl.cat/pngfile/big/322-3220586_cool-hd-phone-wallpapers-iphone-smoke-bomb-wallpaper.jpg',
    'https://cdn.wallpapersafari.com/60/59/ycbCAw.jpg',
    'https://fsa.zobj.net/crop.php?r=E9wbaNXLzP9UWj9gk-mxOzNTHqWokPjrT99mS9os1RDNMCMDDH_BDJZhsKdO6owoyWN3ywWcqKRm3AxLMFhFJxhsCmoLfrfQ8YsEt9b2_cRY1qIzgx41gPCKi3ZoOeZfuzh40BWWlTp_VZFE',
    'https://cutewallpaper.org/21/mobile-wallpaper-4k/Download-4k-Phone-Backgrounds-High-quality-wallpaper-for-.jpg',
    'https://www.theindianwire.com/wp-content/uploads/2019/08/pubg-hd-mobile-wallpaper.jpg',
    'https://wallpapercave.com/wp/wp6699934.jpg',
    'https://1.bp.blogspot.com/-rM105HAvpFk/XvLFLxeaEpI/AAAAAAAAVRo/MnaAjEASWno3EQya2ya8QZBFR3qB5X4WwCK4BGAsYHg/d/NASA-MARS-WALLPAPER-4K-FOR-PHONE_2.png',
    'https://www.setaswall.com/wp-content/uploads/2018/10/RAZER-Phone-2-Stock-Wallpaper-007-1900x2560-768x1035.jpg',
    'https://www.kolpaper.com/wp-content/uploads/2020/05/Doodle-Phone-Wallpaper.jpg',
    'https://www.itl.cat/pngfile/big/123-1235712_hd-wallpaper-4k-minimalist-wallpaper-phone.jpg',
    'https://i.pinimg.com/originals/32/77/b7/3277b760af039619e49d4922093c671a.jpg',
    'https://gameranx.com/wp-content/uploads/2017/03/Marvel-vs.-Capcom-Infinite-4K-Wallpaper.jpg',
    'https://www.99images.com/photos/wallpapers/games/4k-ultra-hd-gamingandroid-iphone-desktop-hd-backgrounds-wallpapers-1080p-4k-dznaq.jpg?v=1578373144',
    'https://i.pinimg.com/originals/8e/59/65/8e596576db3d960efbc17e98c5dbc72e.jpg',
    'https://cdn.wallpapersafari.com/42/91/KlvB2S.jpg',
    'https://img.wallpapersafari.com/desktop/1680/1050/26/14/VMfLuz.jpg',
    'https://lh3.googleusercontent.com/proxy/c-lxeC2otb_0mf9BHDtghnd0j_N0kSRN5E5Lu1RJrcaJUWeTN_GuJJT9pZJNFlPrC7o1uzDGoAKF15f0tlm73A3gntgbyHZzJV1gVTioppPoRApiPffGCItUHM0Cldq6lAgpAzhXWVrZQjjIb-83IlGQRvZYGSg4ZCPwyqUMNQ',
    'https://i.pinimg.com/originals/1e/ec/3b/1eec3b35bce0aeba715edc4e7f56344b.jpg',
    'https://lh3.googleusercontent.com/proxy/MdFQdbhl3jbcte8NGUX651wDdBjMMWt8dRsJ6rlaU-vKL4-WtcsGbpz2u0VSk9c-Bs2EQHhkyaq42NOFD8FO8kF54Y4-OBRNKabPkgkXhRTKSwzJ0rdtizlDvFCfw4CxBK7cV6i5SNP-4KP5DEZCBwe4l656',
    'https://wallpapershome.com/images/pages/pic_v/16862.jpg',
    'https://www.99images.com/photos/wallpapers/others/2048x1152android-iphone-desktop-hd-backgrounds-wallpapers-1080p-4k-z2jyq.jpg?v=1578612605',
    'https://www.99images.com/photos/wallpapers/games/4k-ultra-hd-gamingandroid-iphone-desktop-hd-backgrounds-wallpapers-1080p-4k-t8s8z.jpg?v=1578373204',
    'https://www.99images.com/photos/wallpapers/games/4k-ultra-hd-gamingandroid-iphone-desktop-hd-backgrounds-wallpapers-1080p-4k-lhhou.jpg?v=1578372844',
    'https://www.wallpapers13.com/wp-content/uploads/2019/11/Dota-2-Hero-Lanaya-the-Templar-Assassin-4k-ultra-HD-wallpapers-for-high-resolution-1920x1080.jpg',
    'https://free4kwallpapers.com/uploads/wallpaper/iron-mask-avengers-end-game-wallpaper-1024x768-wallpaper.jpg',
    'https://i.pinimg.com/564x/5c/e9/cb/5ce9cbf52ccd2d860d6ef8851579ff80.jpg',
    'https://wallpaperheart.com/wp-content/uploads/2018/08/4k-ultra-hd-wallpaper-7.jpg',
    'https://www.kolpaper.com/wp-content/uploads/2020/06/4K-Cyberpunk-2077-Wallpaper.jpg',
    'https://wallpaperarc.com/wp-content/uploads/2020/06/Cyberpunk-Lines-Artwork-4K-Ultra-HD-Wallpaper-3840x2160-15.jpg',
    'https://avante.biz/wp-content/uploads/Ultra-HD-Wallpapers-4K/Ultra-HD-Wallpapers-4K-019.jpg',
    'https://www.pcclean.io/static-4k-ultra-hd-love-wallpapers/attachment/72196/',
    'https://images.wallpapersden.com/image/download/moon-ultra-4k-8k_64643_1080x2400.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSjL1ja3BR-6fHrNCMy1eZLskK9yk8aW0jDpw&usqp=CAU',
    'https://wallpaperarc.com/wp-content/uploads/2020/04/Valorant-4K-Ultra-HD-Wallpaper-3840x2160-4-640x360.jpg',
    'https://wallpaperaccess.com/full/18655.jpg',
    'https://wallpapercave.com/wp/wp5148945.jpg',
    'https://wallpaperaccess.com/full/7310.jpg',
    'https://i.pinimg.com/originals/19/e9/cd/19e9cdcab619aba973021f20d6a52614.jpg',
    'https://wallpapercave.com/wp/wp5261276.jpg',
      ]
      
        let result = Math.floor((Math.random() * wallpaper.length));
        let embed1 = new Discord.MessageEmbed()
        .setColor("#33908b")
        .setTitle("**والپیپر رندوم**")
       .setImage(`${wallpaper[result]}`)
        .addField('درخواست کننده والپیپر', `${message.author}`)
        .setFooter('درخواست شده توسط' + message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
        message.channel.send(embed1)
        db.set(`wallpaper_${message.author.id}`, Date.now())
        
    };
}



module.exports.help = {
  name:"random-wallpaper",
  aliases: ["rw"]
}
