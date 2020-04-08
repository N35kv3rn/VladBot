module.exports = message => {

  const jokeInt = Math.floor(Math.random() * 2)

  if (message.member.roles.cache.some(role => role.name === 'Bloodlord')) {
    if (jokeInt == 0) {
      return message.channel.send("Ri... you--- (coughing) Ugh, bloodball.")
    }
    else if (jokeInt == 1) {
      return message.channel.send("Bask in... (coughing) What did you eat?")
    }
  }
  else {
    return message.channel.send("Go ahead, be negative. You'll be just my type.")
  }
}
