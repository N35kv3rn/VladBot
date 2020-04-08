// For å hente bot token skjult i .env
require("dotenv").config()
// Bruk av Discord.js
const Discord = require("discord.js")
// Lese fra filer i commands/events
const fs = require("fs")
// Initiere bot
const client = new Discord.Client()

// Lese fra filer i commands/events
fs.readdir("./events/", (err, files) => {
  files.forEach(file => {
    const eventHandler = require(`./events/${file}`)
    const eventName = file.split(".")[0]
    client.on(eventName, (...args) => eventHandler(client, ...args))
  })
})

// Hente bot token skjult i .env
client.login(process.env.BOT_TOKEN)

// Oppdatere channel-id i guildMemberAdd når ordentlig text-channel opprettes
