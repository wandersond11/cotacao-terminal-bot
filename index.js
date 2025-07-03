const readline = require('readline');
const { buscarCotacao } = require('./services/cotacaoApi');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('Olá, seja bem vindo ao bot de cotação de moedas do Wanderson!');
console.log('Eu sou a Sol, sua assistente virtual. 👋');
console.log('Digite o código da moeda (ex: USD, EUR, BTC). Digite "sair" para encerrar.');

async function pergunta() {
  rl.question('> ', async (input) => {
    const texto = input.trim().toUpperCase();

    if (texto === 'SAIR') {
      console.log('👋 Até logo!');
      rl.close();
      return;
    }

    const cotacao = await buscarCotacao(texto);

    if (!cotacao) {
      console.log('❌ Moeda inválida. Tente novamente com um código como USD ou EUR.');
    } else {
      console.log(`💰 Cotação de ${cotacao.nome}`);
      console.log(`Valor: R$ ${cotacao.valor}`);
      console.log(`Data: ${cotacao.data}`);
    }

    pergunta();
  });
}

pergunta();
