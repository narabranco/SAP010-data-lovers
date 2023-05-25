import { filtroSignBaixo, SelecaoNome, sortByType, filtroSignCima } from '../src/data.js';

const dados = [
  {
    "type": "major",
    "name": "The Magician",
    "meaning_up": "Skill, diplomacy, address, subtlety; sickness, pain, loss, disaster, snares of enemies; self-confidence, will; the Querent, if male.",
    "meaning_rev": "Physician, Magus, mental disease, disgrace, disquiet.",
  }, {
    "type": "major",
    "name": "The Hierophant",
    "meaning_up": "Marriage, alliance, captivity, servitude; by another account, mercy and goodness; inspiration; the man to whom the Querent has recourse.",
    "meaning_rev": "Society, good understanding, concord, overkindness, weakness.",
  }, {
    "type": "major",
    "name": "The Chariot",
    "meaning_up": "Succour, providence also war, triumph, presumption, vengeance, trouble.",
    "meaning_rev": "Riot, quarrel, dispute, litigation, defeat.",
  }, {
    "type": "major",
    "name": "Fortitude",
    "meaning_up": "Power, energy, action, courage, magnanimity; also complete success and honours.",
    "meaning_rev": "Despotism, abuse if power, weakness, discord, sometimes even disgrace.",
  }];

// //teste do nome
describe('SelecaoNome', () => {
  it('SelecaoNome is a function', () => {
    expect(typeof SelecaoNome).toBe('function');
  });//se é função

  it('deve filtrar os dados por nome', () => {
    const result = SelecaoNome(dados, "The Magician");
    expect(result.length).toBe(1);
    expect(result[0].name).toBe("The Magician");
  });
});


describe('filtroSignBaixo', () => {
  it('filtroSignBaixo is a function', () => {
    expect(typeof filtroSignBaixo).toBe('function');
  });

  it('deve filtrar os dados por meaning_rev', () => {
    const result = filtroSignBaixo(dados, "disgrace");
    expect(result.length).toBe(2); // Corrigido para 2
    expect(result[0].meaning_rev.toLowerCase()).toContain("disgrace");
  });
});

describe('sortByType', () => {
  it('sortByType is a function', () => {
    expect(typeof sortByType).toBe('function');
  });

  it('deve filtrar os dados por tipo', () => {
    const result = sortByType(dados, "major");
    expect(result.length).toBe(4);
    expect(result.every(card => card.type === "major")).toBe(true);
  });
});


describe('filtroSignCima', () => {
  it('filtroSignCima is a function', () => {
    expect(typeof filtroSignCima).toBe('function');
  });

  it('deve filtrar os dados por meaning_up', () => {
    const result = filtroSignCima(dados, "marriage");
    expect(result.length).toBe(1);
    expect(result[0].meaning_up.toLowerCase()).toContain("marriage");
  });
});