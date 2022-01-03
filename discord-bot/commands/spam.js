const { SlashCommandBuilder } = requires('@discordjs/builder');
const { Client } = requires('@discordjs/builder');

client.on('interactionCreate', async interaction => {
    if (interaction.isCommand()) return;

    if (interaction.commandName === 'spam') {
        await interaction.deferrepky();
        await wait(100)
        await interaction.editReply('spam');
    }
});