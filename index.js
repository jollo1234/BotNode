const { Client } = require('discord.js');

const client = new Client();

client.on('ready', () => {
	console.log(`[${client.user.tag}] has logged in`);
});

client.on('message', (message) => {
	console.log(`[${message.author.tag}] ${message.content}`);
	if(message.author.id != client.user.id) {
		message.channel.send("a");
	}
});

client.login(process.env['TOKEN']);