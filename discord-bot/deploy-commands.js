const fs = require('fs');
const { REST } = require ('discord')
const { Routes } = require('discord-api-types/v9');
const { clientId, guildID, token } = require('./config.json');

const commands = [];
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    commands.push(command.data.toJSON());
}

client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;

    const command = client.commands.get(interaction.commandName);

    if(!command) return;

    try {
        await command.execute(interaction);
    
    } catch(error) {
        console.error(error)
        await interaction.reply({ content: 'get fucked'})
    }
});