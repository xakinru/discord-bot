const {Client, Intents} = require('discord.js')
const fs = require('fs')
const path = require('path')
const {bot_name, bot_version, bot_prefix, token} = require('./config')

const client = new Client({intents: [32767]})
const prefix = bot_prefix

const commandPath = path.join(__dirname, 'cmds')

client.once('ready', () => {
    console.log(`${bot_name}-${bot_version} has been started :3`)

    client.user.setActivity('!help ', { type: 'STREAMING' })
})


client.on('messageCreate', msg => {
    console.log(msg.author.tag+' ('+msg.channel.name+')' + ' => ' + msg.content)

    if(!msg.content.startsWith(prefix) || msg.author.bot) return
    const args = msg.content.slice(prefix.length).split(/ +/)
    const command = args.shift().toLowerCase()

    if(command) {
        fs.readdir(commandPath, (err, command_list) => {
            if(err) return console.log(err)

            if(command_list.includes(`${command}.js`)) {
                const {type, response} = require(`./cmds/${command}`)
                if(!type || !response) return msg.channel.send(`${msg.author}, Упс, команда сейчас не работает :/`)

                return response(msg)
            } else {
                msg.channel.send(`${msg.author}, я не смог найти эту команду в нашем списке :(\nПопробуйте воспользоваться командой !help`)
            }
        })
    }
})

client.login(token)