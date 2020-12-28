const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.token;
client.on('ready', () => {
    console.log('켰다.');
});

client.on('message', (message) => {
    if(message.content === '``04서버주소') {
        message.reply('04서버.kro.kr');
    }
});

client.login(token);
