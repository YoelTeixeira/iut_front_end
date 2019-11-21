// Structures de contrôle et boucles

/*var rand = parseInt(Math.random() * (10 - 0) + 0);
var isCorrect = false;
var i = 1;
var max = 3;
while(isCorrect === false && max > 0) {
  max--;
  var result = window.prompt("Devinez le nombre entre 0 et 10");
  console.log(result+ " == "+rand);
  if(result == rand) {
    window.alert("Bonne réponse !");
    isCorrect = true;
  } else if(result < rand) {
    window.alert("Trop bas ! (essais: "+max+")");
  } else if(result > rand) {
    window.alert("Trop haut ! (essais: "+max+")");
  }

}
if(max == 0) {
  window.alert("Perdu ! 3 essais ratés");
}*/


// Tableaux et gestion d’évènements

var France      = ["Paris", "Grenoble", "Marseille", "Lyon"];
var Espagne     = ["Barcelone", "Madrid", "Seville", "Valencia"];
var Portugal    = ["Lisbonne", "Porto", "Faro", "Algarve"];
var Angleterre  = ["Londres", "Brighton", "Oxford", "Manchester"];

document.getElementById("form").addEventListener("submit", function(e) {
  e.preventDefault();

  var found = false;
  var user_city = document.getElementById("city").value;

  France.forEach((city) => {
    if(user_city == city) {
      found = true;
      window.alert("Bienvenue en France");
    }
  });
  if(found === false) {
    Espagne.forEach((city) => {
      if(user_city == city) {
        found = true;
        window.alert("Bienvenue en Espagne");
      }
    });
  }
  if(found === false) {
    Portugal.forEach((city) => {
      if(user_city == city) {
        found = true;
        window.alert("Bienvenue au Portugal");
      }
    });
  }
  if(found === false) {
    Angleterre.forEach((city) => {
      if(user_city == city) {
        found = true;
        window.alert("Bienvenue en Angleterre");
      }
    });
  }

});
