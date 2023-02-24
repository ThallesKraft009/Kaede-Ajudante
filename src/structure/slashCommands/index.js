module.exports = async(events, PUBLIC_KEY, APP_ID, GUILD_ID, token, commands) => {


 require('dotenv/config');
const express = require('express');
const {
  InteractionType,
  InteractionResponseType,
  InteractionResponseFlags,
  MessageComponentTypes,
  ButtonStyleTypes,
} = require('discord-interactions');
const { VerifyDiscordRequest, DiscordRequest } = require('./utils.js');
const {
  HasGuildCommands,
} = require('./commands.js');

const fs = require("fs");
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json({ verify: VerifyDiscordRequest(PUBLIC_KEY) }));

  
  app.post('/interactions', async function (req, res) {

    
  const { type, id, data } = req.body;

require(`${events}`)(req, res)

  })
const c = require("colors");


  app.listen(PORT, () => {
  console.log(c.blue('Connectado ao Discord na porta:', PORT));
  HasGuildCommands(APP_ID, GUILD_ID, commands);
});

  }
 
  
