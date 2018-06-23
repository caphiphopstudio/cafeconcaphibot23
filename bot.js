console.log('El bot esta listo');
const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message', (message) => {
	if (message.content == 'capi2') {
		message.channel.sendMessage('PRUEBA');
	}
	if (message.content == 'XD') {
		message.channel.sendMessage(460062843899871271,'PRUEBAs');
	}
});

bot.login(process.env.BOT_TOKEN);
