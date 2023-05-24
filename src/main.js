<<<<<<< HEAD
=======

>>>>>>> c72ad4d701d422f172e812ead39dd996d2194e62
import {filtroSignBaixo, filtroSignCima, sortByType, SelecaoNome} from './data.js';

import data from './data/tarot/tarot.js';
const typeOption = document.getElementById('select-type');
const selectName = document.getElementById('select-name');

const dadosTarot = data.cards;//puxa os dados todos

const reset = document.querySelector('#reset');//função de resetar
reset.addEventListener('click', (event) => {
  location.reload(event);
});


const root = document.getElementById("info-cards");//imprime as imagens no html

function infosDosCardsTela(cards) {
  root.innerHTML = cards.map((cards) => `
    <div class="cards">
        <div class="flip-container">
            <div class="flipper">
                <div class="front-cards-infos">
                    <img alt="cartas-frente" class="card-img" src="${cards.img}">
                </div>
                <div class="back-cards-infos">
                    <ul class="back-cards-txt">
                    <h1 id="nome-carta"><strong> ${cards.name}</strong></h1>
                    <li><strong>Tipo: ${cards.type} </strong></li>
                    <li><strong>Valor: ${cards.value} </strong></li>
                    <li><strong>Short name:${cards.name_short} </strong><li>
                </div>
            
            </div>
        </div>   
    </div>
`).join('');
}
infosDosCardsTela(dadosTarot)

//Pesquisar por nome
const campoFiltrarBaixo = document.getElementById("filto-sign-baixo");
campoFiltrarBaixo.addEventListener("input", event => {
  const filtroBaixo = event.target.value;  //event.target.value trabalham juntos 
  const filtrarCards = filtroSignBaixo(dadosTarot, filtroBaixo); //chamada da função no arquivo data.js
  infosDosCardsTela(filtrarCards);
});

//Filtro por significado para cima
const campoFiltrar = document.getElementById("filtro-sign-cima");
campoFiltrar.addEventListener("input", event => { 
  const filtroCima= event.target.value;  //event.target.value trabalham juntos 
  const filtrarCards = filtroSignCima(dadosTarot, filtroCima); //chamada da função no arquivo data.js
  infosDosCardsTela(filtrarCards);
});

//Filtrar por tipo
typeOption.addEventListener ('change', () => {
  const type = (typeOption).value;
  const filtro = sortByType(dadosTarot, type)//chamada da função no arquivo data.js
  infosDosCardsTela(filtro);
});
//Filtrar por Nome
selectName.addEventListener ('change', () =>{
  const name = (selectName).value;
  const filtro = SelecaoNome(dadosTarot, name)//chamada da função no arquivo data.js
  infosDosCardsTela(filtro)
});

