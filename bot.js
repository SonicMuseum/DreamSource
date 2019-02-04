const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'help') {
    	message.channel.send('Do dream.sources for more info.');
  	}
});

client.on('message', message => {
    if (message.content === 'dream.sources') {
    	message.reply('A portal to Dreamcast websites https://dreampipe.net or https://www.sonicmuseum.tk for soniv info and Dreamcast info.');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
