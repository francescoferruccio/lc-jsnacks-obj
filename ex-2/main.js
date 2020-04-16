// ex 2
// inpupt utente per cambiare peso lo prendiamo da input ()invece che prompt
// e poi stampiamo l’oggetto in pagina, quindi non grezzo tramite log in console, ma output “carino” in pagina

var palla = {
  "nome": "palla",
  "peso": 10
};

$("button").click(
  function () {
    var input = $("#inputPeso").val();
    palla.peso = input;

    $("#output").html("<h1>Proprietà oggetto creato</h1>");

    for (var key in palla) {
      $("#output").append("<p>" + key + ": " + palla[key] + "</p>");
    }

  }
)
