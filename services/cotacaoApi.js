const axios = require('axios');

async function buscarCotacao(moeda) {
  try {
    const url = `https://economia.awesomeapi.com.br/json/last/${moeda}-BRL`;
    const response = await axios.get(url);
    const data = response.data[`${moeda}BRL`];

    return {
      nome: data.name,
      valor: parseFloat(data.bid).toFixed(2),
      data: new Date(data.create_date).toLocaleString('pt-BR')
    };
  } catch (err) {
    return null;
  }
}

module.exports = { buscarCotacao };