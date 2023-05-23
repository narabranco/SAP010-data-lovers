<<<<<<< HEAD
import {filtroNomes, filtroSignCima, sortByType, SelecaoNome} from './data.js';
=======

import {filtroSignBaixo, filtroSignCima, sortByType, SelecaoNome} from './data.js';
>>>>>>> f4cb8c044b490a34215a439f109e6268339df30a

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
  const filtroSigBaixo = event.target.value;  //event.target.value trabalham juntos 
  const filtrarCards = filtroSignBaixo(dadosTarot, filtroSigBaixo); //chamada da função no arquivo data.js
  infosDosCardsTela(filtrarCards);
});

//Filtro por significado para cima
const campoFiltrar = document.getElementById("filtro-sign-cima");
campoFiltrar.addEventListener("input", event => { 
  const filtroSigCima= event.target.value;  //event.target.value trabalham juntos 
  const filtrarCards = filtroSignCima(dadosTarot, filtroSigCima); //chamada da função no arquivo data.js
  infosDosCardsTela(filtrarCards);
});

<<<<<<< HEAD
//Filtrar por tipo
=======

>>>>>>> f4cb8c044b490a34215a439f109e6268339df30a
typeOption.addEventListener ('change', () => {
  const type = (typeOption).value;
  const filtro = sortByType(dadosTarot, type)
  infosDosCardsTela(filtro);
});
//Filtrar por Nome
selectName.addEventListener ('change', () =>{
  const name = (selectName).value;
  const filtro = SelecaoNome(dadosTarot, name)
  infosDosCardsTela(filtro)
});

