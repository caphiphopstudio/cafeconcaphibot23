console.log('El bot esta listo');
const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message', (message) => {
	if (message.content == 'capi22') {
		message.channel.sendMessage('PRUEBA');
	}
	if (message.content == 'XD') {
		message.channel.send('PRUEBAs');
	}
	if (message.content == 'XDD') {
		test2.send(message.content)
	}
});

bot.login(process.env.BOT_TOKEN);
