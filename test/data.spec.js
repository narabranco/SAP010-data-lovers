import {sortByType, SelecaoNome} from '../src/data.js';


const cardOne = {
  cards:[
    {"type": "major",
      "name_short": "ar01",
      "name": "The Magician",
      "value": 1,
      "meaning_up": "Skill, diplomacy, address, subtlety; sickness, pain, loss, disaster, snares of enemies; self-confidence, will; the Querent, if male.",
      "meaning_rev": "Physician, Magus, mental disease, disgrace, disquiet.",
      "desc": "A youthful figure in the robe of a magician, having the countenance of divine Apollo, with smile of confidence and shining eyes. Above his head is the mysterious sign of the Holy Spirit, the sign of life, like an endless cord, forming the figure 8 in a horizontal position . About his waist is a serpent-cincture, the serpent appearing to devour its own tail. This is familiar to most as a conventional symbol of eternity, but here it indicates more especially the eternity of attainment in the spirit. In the Magician's right hand is a wand raised towards heaven, while the left hand is pointing to the earth. This dual sign is known in very high grades of the Instituted Mysteries; it shews the descent of grace, virtue and light, drawn from things above and derived to things below. The suggestion throughout is therefore the possession and communication of the Powers and Gifts of the Spirit. On the table in front of the Magician are the symbols of the four Tarot suits, signifying the elements of natural life, which lie like counters before the adept, and he adapts them as he wills. Beneath are roses and lilies, the flos campi and lilium convallium, changed into garden flowers, to shew the culture of aspiration. This card signifies the divine motive in man, reflecting God, the will in the liberation of its union with that which is above. It is also the unity of individual being on all planes, and in a very high sense it is thought, in the fixation thereof. With further reference to what I have called the sign of life and its connexion with the number 8, it may be remembered that Christian Gnosticism speaks of rebirth in Christ as a change \"unto the Ogdoad.\" The mystic number is termed Jerusalem above, the Land flowing with Milk and Honey, the Holy Spirit and the Land of the Lord. According to Martinism, 8 is the number of Christ.",
      "img": "https://upload.wikimedia.org/wikipedia/commons/d/de/RWS_Tarot_01_Magician.jpg"
    }]}

const cardTwo = {
  cards:[
    {"name": "Page of Wands",
      "name_short": "wapa",
      "value": 11,
      "suit": "wands",
      "type": "minor",
      "meaning_up": "Dark young man, faithful, a lover, an envoy, a postman. Beside a man, he will bear favourable testimony concerning him. A dangerous rival, if followed by the Page of Cups. Has the chief qualities of his suit. He may signify family intelligence.",
      "meaning_rev": "Anecdotes, announcements, evil news. Also indecision and the instability which accompanies it.",
      "desc": "In a scene similar to the former, a young man stands in the act of proclamation. He is unknown but faithful, and his tidings are strange.",
      "img": "https://upload.wikimedia.org/wikipedia/commons/6/6a/Wands11.jpg"
    }]}

const arrayTest = [cardOne,cardTwo]

//testa se a const arrayTest é um objeto
describe('arrayTest', () => {
  it('should be an object', () => {
    expect(typeof arrayTest).toBe('object')
  })
});

//teste do nome
describe('SelecaoNome', () => {
  
  it('é uma função', () => {
    expect(typeof SelecaoNome).toBe('function');
  });//se é função

  it('deve buscar por um nome', () => {
    const nomeDosCards = SelecaoNome(arrayTest, "The Magician");
    expect(nomeDosCards.length);
  });
  
});//se retorna os nomes

//teste do tipo
describe ('sortByType', () =>{

  it('é uma função', () => {
    expect(typeof sortByType).toBe('function')
  });//se é função

  it('deve filtrar pelo tipo major', () => {
    const typeDosCards = sortByType(arrayTest, "major")
    expect(typeDosCards.cards).toEqual(cardOne.type)
  });//se retorna por arcano maior

  it('deve filtrar pelo tipo minor', () => {
    const typeDosCards = sortByType(arrayTest, "minor")
    expect(typeDosCards.cards).toEqual(cardTwo.type)
  });// se retorna pro arcano menor
});