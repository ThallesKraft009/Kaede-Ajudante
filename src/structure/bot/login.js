module.exports = (token, status) => {
const WebSocket = require("ws");
const ws = new WebSocket("wss://gateway.discord.gg/?v=6&encoding=json");
const c = require("colors")

  if (status === null) status = [{
    name: "com ThallesKraft",
    type: 0
  }]

const data = {
  op: 2,
  d: {
    token: token,
    intents: 513,
    properties: {
         $os: "linux",
         $browser: "chrome",
         $device: "chrome",
     },    
    compress: true,
    large_threshold: 250,
    shard: [0, 1],
    presence: {
      activities: status,
      status: "dnd",
      since: 91879201,
      afk: false
    },
    },
}

  
  ws.on("open", function open() {
    ws.send(JSON.stringify(data));

    console.log(c.blue("Kaede Ajudante foi iniciada!"))


})

  return ws;
  



}
