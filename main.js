// ex 1
// Creare un oggetto palla che abbia le seguenti proprietà. Nome = palla
// Peso = 10
// Attraverso un prompt dare la possibilità all’utente di modificare il peso della palla

var palla = {
  "nome": "palla",
  "peso": 10
};

// console.log("oggetto iniziale", palla);
//
// palla.peso = parseInt(prompt("Inserisci il nuovo peso"));
//
// console.log("oggetto dopo prompt", palla);

// ex 2
// inpupt utente per cambiare peso lo prendiamo da input ()invece che prompt
// e poi stampiamo l’oggetto in pagina, quindi non grezzo tramite log in console, ma output “carino” in pagina


$("button").click(
  function () {
    var input = $("#inputPeso").val();
    palla.peso = input;

    $("#output").html("Proprietà oggetto creato:");

    for (var key in palla) {
      $("#output").append("<p>" + key + ": " + palla[key] + "</p>");
    }

  }
)
