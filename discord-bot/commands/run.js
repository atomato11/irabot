const { SlashCommandBuilder } = require('@discordjs/builders');
const { Client } = require('discord.js');

const data = new SlashCommandBuilder()
    .setName('run')
    .setDescritpion('Run it to find out!')
Client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;
    if (interaction.commandName ==='run') {
        await interaction.reply({ content: 'i am in your walls', ephemeral: true });
    }
});