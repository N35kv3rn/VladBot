const joke = require("../commands/joke")
const kick = require("../commands/kick")
const taunt = require("../commands/taunt")
const move = require("../commands/move")
const attack = require("../commands/attack")

const commandsArray = ["!kick", "/joke", "/taunt", "/move", "/attack"];
const commandsNameArray = [kick, joke, taunt, move, attack];

module.exports = (client, message) => {
  for (var i = 0; i < commandsArray.length; i++) {
    if (message.content.startsWith(commandsArray[i])) {
      return commandsNameArray[i](message)
    }
  }
}
