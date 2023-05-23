export const filtroNomes = (dados, nomePesquisado) => {
  return dados.filter(cards => cards.name.toUpperCase().includes(nomePesquisado.toUpperCase())); //poderia ser id ou name  
};

//export const filtroTipo = (dados, tipoArcano) => {
// if (tipoArcano === "major"){
//   return dados.filter(cards => cards.type ("major"));
//  }else if (tipoArcano === "minor"){
//   return dados.filter(cards => cards.type ("minor"));
//  }
//};
