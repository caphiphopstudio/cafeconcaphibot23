console.log('El bot esta listo');
const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message', (message) => {
	if (message.content == 'capi') {
		message.channel.sendMessage('PRUEBA');
	}
	if (message.content == '@Cafè con Caphi di tu frase') {
		message.channel.sendMessage('PRUEBAs');
	}
});
bot.login('NDU4MzYyODQyMDM1NTE5NTEx.Dgmj6Q.Gq4ivz9vq_LO1P6KJoalTwBr2C4');
