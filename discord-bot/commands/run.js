const { SlashCommandBuilder } = require('@discordjs/builders');

const data = new SlashCommandBuilder()
    .setName('run')
    .setDescritpion('Run it to find out!')
    .addSubcommand(subcommmand =>
        subcommmand
            .setName('Catch')
            .setDescription('Suck')
            .addUserOption(option => option.setName('target').setDescription('no')));
        client.on('interactionCreate', interaction => {
            if (!interaction.isCommand()) return;
            
            if (interaction.commandName === 'run') {
                await interaction.reply('i am in your walls')
            }
        })