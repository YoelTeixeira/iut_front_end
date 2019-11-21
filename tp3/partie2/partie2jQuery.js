var countries = {
  France     : ["Paris", "Grenoble", "Marseille", "Lyon"],
  Espagne    : ["Barcelone", "Madrid", "Seville", "Valencia"],
  Portugal   : ["Lisbonne", "Porto", "Faro", "Algarve"],
  Angleterre : ["Londres", "Brighton", "Oxford", "Manchester"]
}

var btn = $("#btn");
var step_box = $("#step_box");

btn.on("click", () => {

  step_box.html(`
    <form id="form">
      <input type="text" id="city" placeholder="Ville..." />
      <button type="submit" id="btn_validate" disabled="true">Valider</button>
    </form>`);

  var user_city = $("#city");
  var btn_validate = $("#btn_validate");

  user_city.on("keyup", () => {
    if(checkCity(user_city.val()) == null) {
      btn_validate.attr("disabled");
    } else {
      btn_validate.removeAttr("disabled");
    }
  });

  $("#form").on("submit", function(e) {
    e.preventDefault();
    var country = checkCity(user_city.val());
    if(country !== null) {
      var html = `
      <p>Bienvenue à ${country[0]}, vous pouvez également visiter les lieux suivants :</p>
      <ul id="list">`;
      countries[country[0]].forEach((city) => {
        if(city != user_city.val()) {
          html += `<li>${city}</li>`;
        }
      });
      html += "</ul>";
      step_box.html(html);

      $("#btn_box").html(`<button id="btn_add">Ajouter une destination</button>`);
      $("#btn_add").on("click", () => {
        step_box.append(`
          <form id="form">
            <input type="text" id="city" placeholder="Ville..." />
            <button type="submit">Valider</button>
          </form>`);
        $("#form").on("submit", (e) => {
          var city = $("#city").val();
          $("#form").remove();
          countries[country[0]].push(city);
          $("#list").append(`<li>${city}</li>`);
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
