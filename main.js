const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.on('message', msg => {
    if (msg.content === 'say the n word') {
        msg.channel.send("Nigga").then((newMessage) => {newMessage.edit("Sike I'm not racist!").then((newMessage) => {newMessage.delete();})});
    
    } //pretty much editting messages

});

client.on('message', msg => {

  const exampleEmbed = new Discord.RichEmbed()

  .setColor('#0099ff')
  .setTitle('Successfully Checked Out! :satellite_orbital:')
  .setDescription('Asics Undercover 7008')
  .setThumbnail('https://images-ext-2.discordapp.net/external/aoGBnfDI5yxfXb4Kpe17GKh9B5-ivwrkJVVAR5JmFBM/https/i8.amplience.net/i/jpl/hp_207289_a?width=676&height=676')
  .addField('Store', 'HipstoreBE', true)
  .addField('Product', 'https://www.thehipstore.co.uk/product/karhu-aria/207289/', true)
  .addField('Size', 'R', true)
  .addField('Profile', 'Main', true)
	.addField('Order No.', '||#1234567||', true)
	.setTimestamp()
	.setFooter('SkinsAIO');
  
  if (msg.content === '!shopify') {
    msg.channel.send(exampleEmbed )
  }

});
client.login(config.token);