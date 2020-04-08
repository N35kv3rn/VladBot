module.exports = message => {

  const attInt = Math.floor(Math.random() * 6)

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
