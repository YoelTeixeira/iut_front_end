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
var countries = {
  France     : ["Paris", "Grenoble", "Marseille", "Lyon"],
  Espagne    : ["Barcelone", "Madrid", "Seville", "Valencia"],
  Portugal   : ["Lisbonne", "Porto", "Faro", "Algarve"],
  Angleterre : ["Londres", "Brighton", "Oxford", "Manchester"]
}

var user_city = document.getElementById("city");
var button = document.getElementById("btn");

user_city.addEventListener("keyup", () => {
  if(checkCity(user_city.value) == null) {
    button.setAttribute("disabled", "true");
  } else {
    button.removeAttribute("disabled");
  }
});

document.getElementById("form").addEventListener("submit", function(e) {
  e.preventDefault();
  var country = checkCity(user_city.value);
  if(country !== null) {
    window.alert("Bienvenue " + country[0]);
  }
});

function checkCity(value) {
  var country_match = null;
  Object.entries(countries).forEach((country) => {
    countries[country[0]].forEach((city) => {
      if(value == city) {
        country_match = country;
      }
    });
  });
  return country_match;
}
