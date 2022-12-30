const { InteractionType, InteractionResponseType, InteractionResponseFlags} = require('discord-interactions');


module.exports = (req, res) => {
    const { type, id, data } = req.body;

if (type === InteractionType.PING) {

    return res.send({ type: InteractionResponseType.PONG });
}

 const nome = data.name;

  if (nome === "ping") require("./slashCommands/bot/ping.js")(req, res);

  if (nome === "mensagem") require("./slashCommands/msg/total.js")(req, res);
  

};
