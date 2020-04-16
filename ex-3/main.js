// ex 3
// Creare un array di oggetti: ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore.

var listaBici = [
  {
    "nome": "bici1",
    "peso": 15
  },
  {
    "nome": "bici2",
    "peso": 5
  },
  {
    "nome": "bici3",
    "peso": 20
  },
];

console.log(listaBici);

var biciLegg = listaBici[0];

for (var i = 0; i < listaBici.length; i++) {
  if (listaBici[i].peso < biciLegg.peso) {
    biciLegg = listaBici[i];
  }
}

console.log("La bici più leggera è " + biciLegg.nome);
