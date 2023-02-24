const comandos = [
  {
    name: "ping",
    description: "Veja minha latência atual",
    type: 1
  },{
    name: "mensagem",
    description: "Veja o total de mensagens",
    type: 1,
    options: [
      {
        name: "membro",
        description: "Mencione o membro ou insira o ID",
        type: 6,
        required: false
      }
    ]
  },{
    name: "user-avatar",
    description: "Veja o avatar de Alguém",
    type: 1,
    options: [
      {
        name: "membro",
        description: "Mencione o usuário",
        type: 6,
        required: true
      }
    ]
  }
]

module.exports = comandos;
