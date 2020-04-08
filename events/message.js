// Hente funksjoner i andre filer
const joke = require("../commands/joke")
const kick = require("../commands/kick")
const taunt = require("../commands/taunt")
const move = require("../commands/move")
const attack = require("../commands/attack")

// Array for command input
const commandsArray = ["!kick", "/joke", "/taunt", "/move", "/attack"];
// Array for å initiere command fra command input array
const commandsNameArray = [kick, joke, taunt, move, attack];

// Funksjon for å hente ut riktig funksjon basert på input fra chat
module.exports = (client, message) => {
  for (var i = 0; i < commandsArray.length; i++) {
    if (message.content.startsWith(commandsArray[i])) {
      return commandsNameArray[i](message)
    }
  }
}
