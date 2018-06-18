console.log('El bot esta listo');
const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message', (message) => {
	if (message.content == '+kko') {
		message.channel.sendMessage('Hola! ;D');
	}
});
bot.login('NDU4MzYyODQyMDM1NTE5NTEx.Dgmj6Q.Gq4ivz9vq_LO1P6KJoalTwBr2C4');
