console.log('El bot esta listo');
const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message', (message) => {
    if (message.content == 'capi22') {
        message.channel.sendMessage('Aceptas las normas del servidor? Pulsa :white_check_mark: para aceptarlas');
    }
});

bot.login(process.env.BOT_TOKEN);
