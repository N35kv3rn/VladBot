module.exports = message => {

  const tauntInt = Math.floor(Math.random() * 2)

  if (message.member.roles.cache.some(role => role.name === 'Bloodlord')) {
    if (tauntInt == 0) {
      return message.channel.send("Gather together your allies so you can pool your tears.")
    }
    else if (tauntInt == 1) {
      return message.channel.send("How long must I search to find a real challenge?")
    }
  }
  else {
    return message.channel.send("You look like someone who's got a lot going on beneath the surface.")
  }
}
