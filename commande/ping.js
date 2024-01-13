const { EmbedBuilder } = require('discord.js')
const Discord = require("discord.js");

module.exports = {
name: 'ping',
run: async (message, args, client) => {
    let days = Math.floor(client.uptime / 86400000)
    let hours = Math.floor(client.uptime / 3600000) % 24
    let minutes = Math.floor(client.uptime / 60000) % 60
    let seconds = Math.floor(client.uptime / 1000) % 60
    let apiLatency = client.ws.ping
    let totalLatency = apiLatency
    let emLatency = {
      Green: '🟢',
      Yellow: '🟡',
      Red: '🔴'
    }
    const embed = new EmbedBuilder()
          .setColor(client.config.couleurs.defaut)
          .setTitle(`La latance et l'API du bot`)
          .setFields([
            {
              name: `🔄・Latance de l'API`,
              value: `>>> \`\`\`yml\n${apiLatency <= 200 ? emLatency.Green : apiLatency <= 400 ? emLatency.Yellow : emLatency.Red} ${apiLatency}ms\`\`\``,
              inline: true
            },
            {
              name: `⏲・Uptimer`,
              value: `>>> \`\`\`m\n${days} Days : ${hours} Hrs : ${minutes} Mins : ${seconds} Secs\`\`\``,
              inline: false
            }
          ])
          message.channel.send({ embeds: [embed] })
    }
}
