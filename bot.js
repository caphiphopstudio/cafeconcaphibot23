console.log('El bot esta listo');
const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message', (message) => {
    if (message.content == 'capi22') {
        message.channel.sendMessage('Mira macho, a ver si te queda claro, me tienes hasta la polla, hasta la mismisima polla, te has , mira, es que , escucha, es bueno, ¡COMEME LA POLLA! ');
    }
    if (message.content == 'capi23') {
        message.channel.sendMessage('Vale, entiendo, entonces ¿Me comes la polla?');
    }
});

bot.login(process.env.BOT_TOKEN);
