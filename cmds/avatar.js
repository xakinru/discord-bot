module.exports = {
    type: 'image',
    description: '',
    response: (msg) => {
        msg.channel.send(msg.author.avatarURL())
    }
}