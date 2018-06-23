console.log('El bot esta listo');
const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message', (message) => {
    if (message.content == 'capi22') {
        message.channel.sendMessage('PRUEBA');
    }
});

bot.login(process.env.BOT_TOKEN);
