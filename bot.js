console.log('El bot esta listo');
const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message', (message) => {
    if (message.content == 'capi22') {
        message.channel.sendMessage('PRUEBA');
    }
    var channel = client.servers.get("name", "Café Con Caphi").defaultChannel;
    client.sendMessage(460076459936055296, "Hello");
});

bot.login(process.env.BOT_TOKEN);
