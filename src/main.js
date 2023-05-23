<<<<<<< HEAD
import { filtroNomes } from './data.js';
=======
import {filtroNomes, filtroSignCima, sortByType, SelecaoNome} from './data.js';
>>>>>>> c01d75c988833c2daf57c8cb1160c4d5a1771b99

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
                </div>
            
            </div>
        </div>   
    </div>
`).join('');
}
infosDosCardsTela(dadosTarot)

//Pesquisar por nome
const campoPesquisar = document.getElementById("txt-pesquisa");
campoPesquisar.addEventListener("input", event => {
  const nomeDosCards = event.target.value;  //event.target.value trabalham juntos 
  const filtrarCards = filtroNomes(dadosTarot, nomeDosCards); //chamada da função no arquivo data.js
  infosDosCardsTela(filtrarCards);
});

//Filtro por significado para cima
const campoFiltrar = document.getElementById("filtro-sign-cima");
campoFiltrar.addEventListener("input", event => { 
  const filtroSigCima= event.target.value;  //event.target.value trabalham juntos 
  const filtrarCards = filtroSignCima(dadosTarot, filtroSigCima); //chamada da função no arquivo data.js
  infosDosCardsTela(filtrarCards);
});

//Filtrar por tipo
<<<<<<< HEAD
//const ordernarTipo = document.getElementById("select-type");
//ordernarTipo.addEventListener("change", () => {
//const tipoOrdenado = filtroTipo(dadosTarot, ordernarTipo.value);
// infosDosCardsTela(tipoOrdenado)
//});
=======
typeOption.addEventListener ('change', () => {
  const type = (typeOption).value;
  const filtro = sortByType(dadosTarot, type)
  infosDosCardsTela(filtro);
});

selectName.addEventListener ('change', () =>{
  const name = (selectName).value;
  const filtro = SelecaoNome(dadosTarot, name)
  infosDosCardsTela(filtro)
});
>>>>>>> c01d75c988833c2daf57c8cb1160c4d5a1771b99
