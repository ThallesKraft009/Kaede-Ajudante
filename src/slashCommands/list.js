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
  }
]

module.exports = comandos;
