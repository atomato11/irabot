const Discord = require ('discord.js');
const client = new Discord.client;

const fs = require('fs');
const { Client, Itents } = require('discord.js');
const mySecret = process.env['TOKEN']
// const { token } = require('./config.json');

const client = new Client({intents: [Intents.FLAGS.GUILDS] });

client.commands = new Collection();
const commandFiles = fs.readdirsSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    //set a new item in the collection
    //with the key as the command name and the value as the exported module
    client.commands.set(command.data.name, command);
}

client.once('ready', () => {
    console.log('Hi');
    
});

// login
client.login(process.env.TOKEN);

