//variables
const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require("./config.json");
//Bot prefix
const prefix = "?";


//bot status
bot.on('ready', () => { bot.user.setActivity('zenx.dev') })
//Text on successfull launch.
console.log('Activation bot has been launched.');



//Event listener
bot.on('message', message => {
  if (message.author.bot) return;
  
  
  if (message.content === prefix + 'help')
  message.channel.send(commands);

  if (message.content === prefix + 'about')
  message.channel.send(about);

  if (message.content === prefix + 'github')
  message.channel.send(github);

  if (message.content === prefix + 'use')
  message.channel.send(use);

  if (message.content.startsWith (prefix +"redeem")) {

    message.delete(1); //Removes public redeem message for security.
  //Recommened to be on, will warn users to only activate codes in the bot's DM.
  if(message.channel.type === "dm") return;  
  message.channel.send("Codes should only be redeemed in the bot's DM for security reasons." + message.author);
  }


//This is where you set your own code(s) with one time only download links.
  if (message.content === prefix + 'redeem code1') {
    message.author.send("Hello, thanks for ordering. Here's a link to your digital good, keep in mind its a one time use only. http://downloadlink.com");
    return;
  }
});









//RichEmbed variables
const commands = new Discord.RichEmbed()
    .setAuthor("Activation Bot", "https://cdn.discordapp.com/attachments/412551919710765059/542072136290795528/customer.png")
    .setColor(0x00AE86)
    .setDescription("An overview of all possible bot commands can be found bellow.")
    .setFooter("Activation Bot", "https://cdn.discordapp.com/attachments/412551919710765059/542072136290795528/customer.png")
    .setThumbnail("https://cdn.discordapp.com/attachments/412551919710765059/542072136290795528/customer.png")
    .setTimestamp()
    .setURL("https://suiicide.xyz")
    .addField("?about",
      "This command will display some information about the bot and its developer.")   
    .addField("?use",
      "This command will explain my purpose and how I work.")
    .addField("?github",
      "A link to the github of the developer, you can find the source of this bot on it aswell as other cool open source projects.")
    

      


const about = new Discord.RichEmbed()
    .setAuthor("Activation Bot", "https://cdn.discordapp.com/attachments/412551919710765059/542072136290795528/customer.png")
    .setColor(0x00AE86)
    .setFooter("Activation Bot", "https://cdn.discordapp.com/attachments/412551919710765059/542072136290795528/customer.png")
    .setTimestamp()
    .setURL("https://suiicide.xyz")
    .addField("About me",
      "Hello, my name is Activation, I'm a simple discord bot that is capable of sending you your virtual goods upon code redemption. Made by zenx#0001")
    .setThumbnail("https://cdn.discordapp.com/attachments/412551919710765059/542072136290795528/customer.png")


const github = new Discord.RichEmbed()
    .setAuthor("Activation Bot", "https://cdn.discordapp.com/attachments/412551919710765059/542072136290795528/customer.png")
    .setColor(0x00AE86)
    .setFooter("Activation Bot", "https://cdn.discordapp.com/attachments/412551919710765059/542072136290795528/customer.png")
    .setTimestamp()
    .setURL("https://suiicide.xyz")
    .addField("Github",
      "You can find the source of this bot and other cool projects of zenx on his github: https://github.com/ORI00/Activation_Discord")
    .setThumbnail("https://cdn.discordapp.com/attachments/412551919710765059/542072136290795528/customer.png")  

const use = new Discord.RichEmbed()
    .setAuthor("Activation Bot", "https://cdn.discordapp.com/attachments/412551919710765059/542072136290795528/customer.png")
    .setColor(0x00AE86)
    .setFooter("Activation Bot", "https://cdn.discordapp.com/attachments/412551919710765059/542072136290795528/customer.png")
    .setTimestamp()
    .setURL("https://suiicide.xyz")
    .addField("How to use",
      "Once you ordered your digital good you will recieve a code.")
    .addField("How to activate",
      "In order to claim this code use the command ?redeem followed up by your code.")
    .addField("Example",
      "?redeem code. Please keep in mind that it is recommended to not activate your code in a public channel to avoid your code being used by someone else.")
    .setThumbnail("https://cdn.discordapp.com/attachments/412551919710765059/542072136290795528/customer.png")  



//Login part (config.json)
bot.login(config.token);
