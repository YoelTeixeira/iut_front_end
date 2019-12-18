document.getElementsByTagName("nav")[0].innerHTML += `
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Connexion</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form id="form_login">
          <div class="form-group">
            <label for="input_login">Identifiant</label>
            <input type="text" class="form-control" name="login" id="input_login" required />
          </div>
          <div class="form-group">
            <label for="input_password">Mot de passe</label>
            <input type="password" class="form-control" name="password" id="input_password" required />
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Fermer</button>
        <button form="form_login" type="submit" class="btn btn-primary">Se connecter</button>
      </div>
    </div>
  </div>
</div>`;

document.getElementById("form_login").addEventListener("submit", (e) => {
  e.preventDefault();
  var xhr = new XMLHttpRequest();
  xhr.onload = function() {
    if(this.responseText == "Success") {
      alert("Connexion réussie");
    } else {
      alert("Identifiant ou mot de passe incorrect");
    }
  };
  xhr.error = function() {
    console.log("Error");
  };
  xhr.open("get", "localhost/script.php", true);
  xhr.send();
});
