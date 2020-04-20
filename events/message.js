// Hente funksjoner i andre filer
const joke = require("../commands/prompts/joke")
const kick = require("../commands/admin/kick")
const taunt = require("../commands/prompts/taunt")
const move = require("../commands/prompts/move")
const attack = require("../commands/prompts/attack")
const role = require("../commands/prompts/attack")
//const say = require("../commands/prompts/say")

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
