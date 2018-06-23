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
	let test = message.guild.channels.find(bot, "test");
	if(test){
		(message.content == 'XD');
		message.channel.send('PRUEBAs');
		}else{console.log("Channel not Found!")
}
});

bot.login(process.env.BOT_TOKEN);
