require("dotenv").config()


const { slashCommands, login, mongodb } = require("./structure/index.js");

const commands = require("./slashCommands/list.js");

slashCommands("../../events.js", process.env.key, process.env.id, process.env.guild, process.env.token, commands)

login(process.env.token, [
  {
    name: "Never gonna give you up",
    type: 0
  }
])

mongodb(process.env.mongo)
