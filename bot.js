console.log('El bot esta listo');
const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message', (message) => {
    if (message.content == 'capi22') {
        message.channel.sendMessage('PRUEBA');
    }
    if (message.content == 'XD') {
        message.channel.sendMessage('PRUEBAs');
        bot.channels.get(460076459936055296).sendMessage(message.content);
    }
});

bot.login(process.env.BOT_TOKEN);
