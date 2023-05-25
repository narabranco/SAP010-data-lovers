<<<<<<< HEAD

import { filtroSignBaixo, filtroSignCima, sortByType, SelecaoNome } from './data.js';
=======
import {filtroSignBaixo, filtroSignCima, sortByType, SelecaoNome} from './data.js';
>>>>>>> e0a4441c9e287f725bc2782d033ff3d1221d10f5

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
<<<<<<< HEAD
campoFiltrar.addEventListener("input", event => {
  const filtroSigCima = event.target.value;  //event.target.value trabalham juntos 
  const filtrarCards = filtroSignCima(dadosTarot, filtroSigCima); //chamada da função no arquivo data.js
=======
campoFiltrar.addEventListener("input", event => { 
  const filtroCima= event.target.value;  //event.target.value trabalham juntos 
  const filtrarCards = filtroSignCima(dadosTarot, filtroCima); //chamada da função no arquivo data.js
>>>>>>> e0a4441c9e287f725bc2782d033ff3d1221d10f5
  infosDosCardsTela(filtrarCards);
});


//Filtrar por tipo

typeOption.addEventListener('change', () => {
  const type = (typeOption).value;
  const filtro = sortByType(dadosTarot, type)//chamada da função no arquivo data.js
  infosDosCardsTela(filtro);
});
//Filtrar por Nome
selectName.addEventListener('change', () => {
  const name = (selectName).value;
  const filtro = SelecaoNome(dadosTarot, name)//chamada da função no arquivo data.js
  infosDosCardsTela(filtro)
});
exibirCards
function exibirCards(cartas) {
  const cardsContenier = document.querySelector("#select-name");
  cardsContenier.innerHTML = ' ';

  const cardsTarot = cartas.map(carta => {
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card');
    cardDiv.innerHTML = `
      < img src = "${carta.img}" >
   
    <h2>${carta.type} </h2> 
    <h2>${carta.value} </h2>
    <h2>${carta.name} </h2>
    <h2>${carta.name_short} </h2>
    `

    cardDiv.addEventListener('mouseover', () => {
      carta.img.style.transform = "rotate(180deg)";
    });
    cardDiv.addEventListener('mouseout', () => {
      carta.img.style.transform = "rotate(0deg)";
    });
    return cardDiv;
  })
  cardsTarot.forEach(card => {
    cardsContenier.appendChild(card);
  });
}

const nameArray = ['todos'];
dadosTarot.forEach(cartas => {
  if (Array.isArray(cartas.name)) {
    cartas.name.forEach(name => {
      if (!nameArray.includes(name)) {
        nameArray.push(name);
      }
    });
  } else if (typeof cartas.name === 'string' && !nameArray.includes(cartas.name)) {
    nameArray.push(cartas.name);

  }

})
const optionTodosNomes = document.createElement('option');
optionTodosNomes.value = "Todos os Nomes";
optionTodosNomes.textContent = "Todos os Nomes";
selectName.appendChild(optionTodosNomes);

nameArray.sort().forEach(name => {
  if (name !== "Todos os Nomes") {
    const option = document.createElement('option');
    option.value = name;
    option.textContent = name;
    selectName.appendChild(option);

  }
});


