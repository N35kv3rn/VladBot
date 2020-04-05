const joke = require("../commands/joke")
module.exports = (client, message) => {
  if (message.content.startsWith("/joke")) {
    return joke(message)
  }
}

const kick = require("../commands/kick")
module.exports = (client, message) => {
  if (message.content.startsWith("!kick")) {
    return kick(message)
  }
}

const taunt = require("../commands/taunt")
module.exports = (client, message) => {
  if (message.content.startsWith("/taunt")) {
    return taunt(message)
  }
}
