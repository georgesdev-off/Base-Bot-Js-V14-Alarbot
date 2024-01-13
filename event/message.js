
const { EmbedBuilder } = require('discord.js')

module.exports = {
name: 'messageCreate',
async execute(client, message, ) {
            
if (message.author.bot) return
if (message.channel.type == "DM") return;

if(message.content.match(`^<@!?${client.user.id}>( |)$`)) {
const préfixe = new EmbedBuilder()
.setTitle(`**Tu as besoin de moi ?** Salut ${message.author.tag}`)
.setDescription(`Bonjour, Mon prefix est **${client.config.prefix}**`)
.setColor(client.config.couleurs.defaut)
message.reply({ embeds: [préfixe] })
}

const args = message.content.slice(client.config.prefix.length).trim().split(' ')
const commandName = args.shift().toLowerCase();
const command = client.commands.get(commandName)

if (!message.content.startsWith(client.config.prefix) || message.author.bot) return;
if (!command) return
console.log(`[Logs-Command] La commande "${commandName}" à été exécuté par ${message.author.tag}`)
            
try {
command.run(message, args, client)
} catch (error) {
message.channel.send(`> **❌ Je suis désolée mais il y à eu une erreur durant l'execution du code créé par georges_5_off.**`)
};

}}
