console.log('El bot esta listo');
const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message', (message) => {
    if (message.content == 'capi22') {
        message.channel.sendMessage('Mira conesa, cuando quieras me comes la polla ¿ok? ok');
    }
});

bot.login(process.env.BOT_TOKEN);
