const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('user-info')
		.setDescription('Display info of the selected user, or your own info.')
        .addUserOption(option => option.setName('target').setDescription('The user\'s info to show')),
	async execute(interaction) {
        const user = interaction.options.getUser('target');
		if (user) return interaction.reply(`${user.username}'s Info:\n :white_small_square: **User Name**: ${user.username}\n :white_small_square: **User ID**: ${user.id}`)
		return interaction.reply(`${interaction.user.username}'s Info:\n :white_small_square: **User Name**: ${interaction.user.username}\n :white_small_square: **User ID**: ${interaction.user.id}`);
	},
};