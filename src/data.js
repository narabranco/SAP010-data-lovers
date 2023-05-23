export const filtroNomes = (dados, nomePesquisado) => {
  return dados.filter(cards => cards.name.toUpperCase().includes(nomePesquisado.toUpperCase())); //poderia ser id ou name  
};

export const filtroSignCima = (dados, signPesquisadoCima) => {
  return dados.filter(cards => cards.meaning_up.toUpperCase().includes(signPesquisadoCima.toUpperCase())); //poderia ser id ou name  
};//função de puxar os significados para cima

export const sortByType = (dados, type) =>{
  return dados.filter((dados) =>{
    return dados.type === type
  })
};//funçao de puxar os tipos

