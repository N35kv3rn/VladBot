module.exports = message => {

  const moveInt = Math.floor(Math.random() * 11)

  if (moveInt == 0) {
    return message.channel.send("Wonderful.")
  }
  else if (moveInt == 1) {
    return message.channel.send("My cup is half empty.")
  }
  else if (moveInt == 2) {
    return message.channel.send("The clot thickens.")
  }
  else if (moveInt == 3) {
    return message.channel.send("Please, let it all out.")
  }
  else if (moveInt == 4) {
    return message.channel.send("Let's pool our efforts.")
  }
  else if (moveInt == 5) {
    return message.channel.send("I'm absolutely livid.")
  }
  else if (moveInt == 6) {
    return message.channel.send("Trickling progress.")
  }
  else if (moveInt == 7) {
    return message.channel.send("A harvest moon, so aptly named.")
  }
  else if (moveInt == 8) {
    return message.channel.send("I love a warrior with heart, never a stale moment.")
  }
  else if (moveInt == 9) {
    return message.channel.send("I've got you under my skin.")
  }
  else if (moveInt == 10) {
    return message.channel.send("A vital decision.")
  }
}
