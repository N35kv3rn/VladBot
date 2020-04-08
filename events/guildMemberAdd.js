// Sender melding i kanal når når ny bruker joiner serveren
module.exports = (client, member) => {
  // Finner kanalen som skal skrives i
  const channel = member.guild.channels.cache.find(ch => ch.id === '696046434004238436');
  if (!channel) return;
  // Send melding til kanalen som tagger brukeren
  channel.send(`${member} has joined the server, the rivers will run red.`);
}
