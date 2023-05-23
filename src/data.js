export const filtroSignBaixo = (dados, signPesquisadoBaixo) => {
  return dados.filter(cards => cards.meaning_rev.toUpperCase().includes(signPesquisadoBaixo.toUpperCase())); //poderia ser id ou name  
};


export const filtroSignCima = (dados, signPesquisadoCima) => {
  return dados.filter(cards => cards.meaning_up.toUpperCase().includes(signPesquisadoCima.toUpperCase())); //poderia ser id ou name  
};//função de puxar os significados para cima

export const sortByType = (dados, type) =>{
  return dados.filter((dados) =>{
    return dados.type === type
  })
};//funçao de puxar os tipos

export const SelecaoNome = (dados, name) =>{
  return dados.filter((dados) =>{
    return dados.name === name
  })
};

