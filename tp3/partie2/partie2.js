var countries = {
  France     : ["Paris", "Grenoble", "Marseille", "Lyon"],
  Espagne    : ["Barcelone", "Madrid", "Seville", "Valencia"],
  Portugal   : ["Lisbonne", "Porto", "Faro", "Algarve"],
  Angleterre : ["Londres", "Brighton", "Oxford", "Manchester"]
}

var btn = document.getElementById("btn");
var step_box = document.getElementById("step_box");

btn.addEventListener("click", () => {

  step_box.innerHTML = `
    <form id="form">
      <input type="text" id="city" placeholder="Ville..." />
      <button type="submit" id="btn_validate" disabled="true">Valider</button>
    </form>`;

  var user_city = document.getElementById("city");
  var btn_validate = document.getElementById("btn_validate")

  user_city.addEventListener("keyup", () => {
    if(checkCity(user_city.value) == null) {
      btn_validate.setAttribute("disabled", "true");
    } else {
      btn_validate.removeAttribute("disabled");
    }
  });

  document.getElementById("form").addEventListener("submit", function(e) {
    e.preventDefault();
    var country = checkCity(user_city.value);
    if(country !== null) {
      var html = `
      <p>Bienvenue à ${country[0]}, vous pouvez également visiter les lieux suivants :</p>
      <ul id="list">`;
      countries[country[0]].forEach((city) => {
        if(city != user_city.value) {
          html += `<li>${city}</li>`;
        }
      });
      html += "</ul>";
      step_box.innerHTML = html;

      document.getElementById("btn_box").innerHTML = `<button id="btn_add">Ajouter une destination</button>`;
      document.getElementById("btn_add").addEventListener("click", () => {
        step_box.innerHTML += `
          <form id="form">
            <input type="text" id="city" placeholder="Ville..." />
            <button type="submit">Valider</button>
          </form>`;
        document.getElementById("form").addEventListener("submit", (e) => {
          var city = document.getElementById("city").value;
          document.getElementById("form").remove();
          countries[country[0]].push(city);
          document.getElementById("list").innerHTML += `<li>${city}</li>`;
        });
      });
    }
  });
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
