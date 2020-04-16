// // ex 1
// // Creare un oggetto palla che abbia le seguenti proprietà. Nome = palla
// // Peso = 10
// // Attraverso un prompt dare la possibilità all’utente di modificare il peso della palla
//
// var palla = {
//   "nome": "palla",
//   "peso": 10
// };
//
// // console.log("oggetto iniziale", palla);
// //
// // palla.peso = parseInt(prompt("Inserisci il nuovo peso"));
// //
// // console.log("oggetto dopo prompt", palla);
//
// // ex 2
// // inpupt utente per cambiare peso lo prendiamo da input ()invece che prompt
// // e poi stampiamo l’oggetto in pagina, quindi non grezzo tramite log in console, ma output “carino” in pagina
//
//
// $("button").click(
//   function () {
//     var input = $("#inputPeso").val();
//     palla.peso = input;
//
//     $("#output").html("<h1>Proprietà oggetto creato</h1>");
//
//     for (var key in palla) {
//       $("#output").append("<p>" + key + ": " + palla[key] + "</p>");
//     }
//
//   }
// )

// ex 3
// Creare un array di oggetti: ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore.

var arrayBici = [
  {
    "nome": "bici1",
    "peso": 15
  },
  {
    "nome": "bici2",
    "peso": 30
  },
  {
    "nome": "bici3",
    "peso": 5
  },
];

console.log(arrayBici);

var pesoMin = arrayBici[0].peso;

for (var i = 0; i < arrayBici.length; i++) {
  if (arrayBici[i].peso < pesoMin) {
    pesoMin = arrayBici[i].peso;
  }
}

console.log(pesoMin);
