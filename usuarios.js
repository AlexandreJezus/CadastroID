const prompt = require("prompt-sync")();

const usuarios = [];

let ultimoID = 1;

const lerIndice = (mensagem) => parseInt(prompt(mensagem));

const nomeInvalido = (nome) => nome == "";

const indiceInvalido = (indice) =>
  indice < 0 || indice >= usuarios.length || isNaN(indice);

const modelo = () => {
  let usuario = {}; // não posso adicionar atributos em algo indefinido

  while (true) {
    usuario.id = ultimoID;
    ultimoID++;
    usuario.nome = prompt("Qual é o seu nome? ");
    if (nomeInvalido(usuario.nome)) {
      console.log("O nome não pode ser vazio");
    } else {
      break;
    }
  }
  while (true) {
    usuario.email = prompt("Qual é o seu email? ");
    if (nomeInvalido(usuario.email)) {
      console.log("O email não pode ser vazio");
    } else {
      break;
    }
  }
  while (true) {
    usuario.telefone = prompt("Qual é o seu número de telefone? ");
    if (nomeInvalido(usuario.telefone)) {
      console.log("O número não pode ser vazio");
    } else {
      break;
    }
  }
  return usuario;
};

const listagem = () =>
  usuarios.forEach((usuario, i) => {
    console.log(
      `${i + 1} - ID: ${usuario.id} Nome: ${usuario.nome} - Email: ${
        usuario.email
      } - Telefone: ${usuario.telefone}`
    );
  });

const criar = () => {
  const usuario = modelo();

  usuarios.push(usuario);

  console.log("Cadastro adicionado com sucesso.");
};

const atualizar = () => {
  while (true) {
    if (usuarios.length == 0) {
      console.log("Lista de cadastros esta vazia.");
      break;
    }

    listagem();

    const indice = lerIndice("Qual é o cadastro que deseja atualizar? ") - 1;

    if (indiceInvalido(indice)) {
      console.log("Indice inválido");
    } else {
      const usuario = modelo();
      usuarios[indice] = usuario;
      break;
    }
  }
};

const remover = () => {
  while (true) {
    listagem();

    const indice = lerIndice("Qual é o cadastro que deseja remover? ") - 1;

    if (indiceInvalido(indice)) {
      console.log("Indice inválido");
    } else {
      usuarios.forEach((usuario) => {
        if (usuario.sequencia == indice) {
          usuario.sequencia = -1;
        }
      });
      usuarios.splice(indice, 1);
      console.log("Cadastro removido com sucesso");
      break;
    }
  }
};

module.exports = {
  modelo,
  criar,
  listagem,
  atualizar,
  remover,
};
