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
		message.channels.get(460062843899871271).send('My Message');
	}
});

bot.login(process.env.BOT_TOKEN);
