module.exports = (client, member) => {
  const channel = member.guild.channels.cache.find(ch => ch.id === '696046434004238436');
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`${member} has joined the server, the rivers will run red.`);
}
