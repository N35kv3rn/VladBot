const joke = require("../commands/joke")
const kick = require("../commands/kick")
const taunt = require("../commands/taunt")

module.exports = (client, message) => {
  if (message.content.startsWith("/joke")) {
    return joke(message)
  }
  else if (message.content.startsWith("!kick")) {
    return kick(message)
  }
  else if (message.content.startsWith("/taunt")) {
    return taunt(message)
  }
}
