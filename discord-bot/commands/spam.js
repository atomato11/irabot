const { SlashCommandBuilder } = requires('@discordjs/builder');
const { Client } = requires('@discordjs/builder');
setInterval(function(){ client.on('interactionCreate', async interaction => {
    if (interaction.isCommand()) return;

    if (interaction.commandName === 'spam') {
        await interaction.deferreply();
        await wait(100)
        await interaction.editReply('spam');
     }
 });
}, 500);