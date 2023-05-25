export const filtroSignBaixo = (dados, signPesquisadoBaixo) => {
  return dados.filter(cards => cards.meaning_rev.toUpperCase().includes(signPesquisadoBaixo.toUpperCase())); //poderia ser id ou name  
};
<<<<<<< HEAD

=======
>>>>>>> e0a4441c9e287f725bc2782d033ff3d1221d10f5
export const filtroSignCima = (dados, signPesquisadoCima) => {
  return dados.filter(cards => cards.meaning_up.toUpperCase().includes(signPesquisadoCima.toUpperCase())); //poderia ser id ou name  
}; //função de puxar os significados para cima

export const sortByType = (dados, type) => {
  return dados.filter((dados) => {
    return dados.type === type
  })
};//funçao de puxar os tipos

export const SelecaoNome = (dados, name) => {
  return dados.filter((dados) => {
    return dados.name === name
  })
<<<<<<< HEAD

};//funçao de puxar os nomes



=======
};//funçao de puxar os nomes
>>>>>>> e0a4441c9e287f725bc2782d033ff3d1221d10f5

