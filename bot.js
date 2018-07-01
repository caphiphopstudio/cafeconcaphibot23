console.log('El bot esta listo');
const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message', (message) => {
    if (message.content == 'capi22') {
        message.channel.sendMessage('Mira conesa, cuando quieras me comes la polla ¿ok? ok');
    }
    if (message.content == 'capi23') {
        message.channel.sendMessage('La ultima vez que abri RR me peto un pulmon de lo subnormales que sois');
    }
    if (message.content == 'capi24') {
        message.channel.sendMessage('Volando, volando, siempre arriba (Siempre arriba) imagina, tú y yo, lucharemos los dos. Volando, volando, siempre arriba (Siempre arriba) imagina, nunca a un amigo abandonaremos. Juntos podremos romper un iceberg.  Unamos nuestras manos, combatamos al mal que nos persigue. Luz, fuego, destrucción, el mundo puede ser una ruina, no lo podemos permitir. Luz, fuego, destrucción, a nuestros enemigos hay que vencer, luchando hasta el final. Luz, fuego, destrucción, la paz en el universo ha de nacer, hemos de hacer un mundo mejor. Luz, fuego, destrucción, La fuerza de la verdad nunca morirá, No morirá, no, no, no, no, no, no, no');
    }
    if (message.content == 'capi25') {
        message.channel.sendMessage('inserte mensaje para llamar la atencion, aqui');
    }
    if (message.content == 'capi26') {
        message.channel.sendMessage('Tu eres subnormal');
    }
    if (message.content == 'capi27') {
        message.channel.sendMessage('Ojala me pudiera follar pero solo soy unos y ceros');
    }
    if (message.content == 'capi28') {
        message.channel.sendMessage('Esto es tan real como su amor por ti, ninguno.');
    }
     if (message.content == 'capi29') {
        message.channel.sendMessage('Llamad a la Bicicleta para que reviente algun pais.');
    }
});

bot.login(process.env.BOT_TOKEN);
