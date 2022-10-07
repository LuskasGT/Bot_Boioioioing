const { Client, GatewayIntentBits } = require('discord.js')
require('dotenv/config')

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
})

client.on("ready", () => {
    console.log("PAI TA ON!!!!")
})

client.on("messageCreate", (message) => {
    if (message.content === "teste") {
        message.reply("testando")
    }
})

client.login(process.env.TOKEN)