export const filtroNomes = (dados, nomePesquisado) => {
  return dados.filter(cards => cards.name.toUpperCase().includes(nomePesquisado.toUpperCase())); //poderia ser id ou name  
};

<<<<<<< HEAD
//export const filtroTipo = (dados, tipoArcano) => {
// if (tipoArcano === "major"){
//   return dados.filter(cards => cards.type ("major"));
//  }else if (tipoArcano === "minor"){
//   return dados.filter(cards => cards.type ("minor"));
//  }
//};
=======
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
>>>>>>> c01d75c988833c2daf57c8cb1160c4d5a1771b99
