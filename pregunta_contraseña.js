function Preguntar_contrasenya(Contrasenya, Nom_Url) {
  var pregunta = prompt("Quina es la contrasenya");
  if (pregunta == "Nom") {
    var Nom = prompt("Quin es el teu nom");
  }
  if (pregunta == Contrasenya) {
    window.location.href = Nom_Url + ".html";
  }
  switch (Nom) {
    case "Aleix":
      window.location.href = Nom_Url + ".html";
      break;
    case "Vanessa":
      window.location.href = Nom_Url + ".html";
      break;
    case "Carolina":
      window.location.href = Nom_Url + ".html";
      break;
    case "ChatGtp":
      window.location.href = Nom_Url + ".html";
      break;
    case "pepito de los palotes":
      window.location.href = Nom_Url + ".html";
      break;
    case "ja je ji jo ju":
      window.location.href = Nom_Url + ".html";
      break;
    default:
      window.location.href = Nom_Url + ".html";
      break;
  }
}
