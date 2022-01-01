const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Go fuck yourself'),
    async execute(interaction) {
        await interaction.reply('Pong!');
    },
};