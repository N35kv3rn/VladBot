module.exports = message => {

  const attInt = Math.floor(Math.random() * 6)
  const bloodAttInt = Math.floor(Math.random() * 7)

  if (message.member.roles.cache.some(role => role.name === 'Bloodlord')) {
    if (bloodAttInt == 0) {
      return message.channel.send("Feel the life drip away.")
    }
    else if (bloodAttInt == 1) {
      return message.channel.send("Arise and face me.")
    }
    else if (bloodAttInt == 2) {
      return message.channel.send("I want to make this last.")
    }
    else if (bloodAttInt == 3) {
      return message.channel.send("The night shall consume them.")
    }
    else if (bloodAttInt == 4) {
      return message.channel.send("Witness the depths of despair.")
    }
    else if (bloodAttInt == 5) {
      return message.channel.send("Slake my thirst.")
    }
    else if (bloodAttInt == 6) {
      return message.channel.send("Pitiful creatures.")
    }
  }
  else {
    if (attInt == 0) {
      return message.channel.send("I'd love a pint.")
    }
    else if (attInt == 1) {
      return message.channel.send("Hmm, something is leaking.")
    }
    else if (attInt == 2) {
      return message.channel.send("Deliciously vain.")
    }
    else if (attInt == 3) {
      return message.channel.send("I'm a universal recipient.")
    }
    else if (attInt == 4) {
      return message.channel.send("Care to make a donation?")
    }
    else if (attInt == 5) {
      return message.channel.send("A draining exercise.")
    }
  }
}
