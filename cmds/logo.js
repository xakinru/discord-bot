module.exports = {
    type: 'image',
    description: '',
    response: (msg) => {
        msg.channel.send({
            "embeds": [
                {
                  "type": "rich",
                  "title": `Наш логотип :3`,
                  "description": `Пока пусто :(`,
                  "color": 0xe600ff,
                  "image": {
                    "url": `https://logos-world.net/wp-content/uploads/2021/02/Sky-Logo.png`,
                    "height": 0,
                    "width": 0
                  },
                  "footer": {
                    "text": `UMI BOT <support@umi>`,
                    "icon_url": `https://logos-world.net/wp-content/uploads/2021/02/Sky-Logo.png`
                  }
                }
              ]
        })
    }
}