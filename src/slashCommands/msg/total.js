module.exports = async(req, res) => {

const numero = function(num){
     if (num >= 1000000000) {
        return (num / 1000000000).toFixed(1).replace(/\.0$/, '') + 'G';
     }
     if (num >= 1000000) {
        return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
     }
     if (num >= 1000) {
        return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
     }
     return num;
}

  
  const userID = req.body.data.options[0].value || req.body.member.user.id;
  
  const fetch = require("node-fetch");
  const database = require("../../structure/mongodb/userdb.js");

  const userdb = await database.findOne({
         userID: userID
     }) 

      if(!userdb){
         const newuser = new database({ userID: userID })
         await newuser.save()


        return res.send({
        type: 4,
        data: {
          content: `Eu salvei as informações do usuário (Tag, Id, Avatar, Nome) em meu banco de dados, utilize o comando novamente pra funcionar.`,
        }
        })
         
         
      } 


  const user = await fetch(`https://discord.com/api/v9/users/${userID}`, {
    headers: {
      Authorization: `Bot ${process.env.token}`
    }
  }).then(response => {return response.json()})

if (user.id === req.body.member.user.id){
  return res.send({
        type: 4,
        data: {
          content: `<@${req.body.member.user.id}>`,
          embeds: [
            {
              title: `🌧️ | ${user.username}`,
              description: `Você tem tem ${numero(userdb.mensagens)} mensagem!`,
              thumbnail: { url: `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png?size=2048` },
              color: 65535
            }
          ]
        }
        })
} else {

  return res.send({
        type: 4,
        data: {
          content: `<@${user.id}>`,
          embeds: [
            {
              title: `🌧️ | ${user.username}`,
              description: `O Usuário tem ${numero(userdb.mensagens)} mensagem!`,
              thumbnail: { url: `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png?size=2048` },
              color: 65535
            }
          ]
        }
        })
}
  
}
