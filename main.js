// Creare un oggetto palla che abbia le seguenti proprietà. Nome = palla
// Peso = 10
// Attraverso un prompt dare la possibilità all’utente di modificare il peso della palla

var palla = {
  "nome": "palla",
  "peso": 10
};
console.log("oggetto iniziale", palla);

palla.peso = parseInt(prompt("Inserisci il nuovo peso"));

console.log("oggetto dopo prompt", palla);
