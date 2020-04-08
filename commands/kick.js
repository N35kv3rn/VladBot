module.exports = message => {

  const member = message.mentions.members.first()

  if (message.member.roles.cache.some(role => role.name === 'Bloodlord')) {
    if (!member) {
      return message.reply(`Who are you trying to kick? You must mention a user.`)
    }
    if (!member.kickable) {
      return message.reply(`I can't kick this user. Sorry!`)
    }
    return member
      .kick()
      .then(() => message.reply(`${member.user.tag} was kicked.`))
      .catch(error => message.reply(`Sorry, an error occured.`))
  }
  else {
    return message.reply("You do not have access to this command.")
  }
}
