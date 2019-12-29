var menu = [
  {
    label: "Menu",
    link: "menu.html"
  },{
    label: "Activités",
    link: "activites.html"
  },{
    label: "Services",
    link: "services.html"
  },{
    label: "Animaux",
    link: "animaux.html"
  },{
    label: "Banque de sons",
    link: "audio.html"
  },{
    label: "Scènes vidéo",
    link: "video.html"
  },{
    label: "Contact",
    link: "contact.html"
  }
];

var nav = `
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">`;

menu.forEach((elem) => {
  nav += '<li class="nav-item">';
  if(elem.dropdown_title != undefined) {
    nav += `
    <a href="#" class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">${elem.dropdown_title}</a>
    <div class="dropdown-menu">`;
    elem.list.forEach((sub_elem) => {
      nav += `<a class="dropdown-item" href="${sub_elem.link}">${sub_elem.label}</a>`;
    });
    nav += "</div>";
  } else {
    nav += `<a class="nav-link" href="${elem.link}">${elem.label}</a>`;
  }
  nav += "</li>";
})

nav += `<li class="nav-item">
          <a class="nav-link" data-toggle="modal" data-target="#exampleModal">Connexion</a>
        </li>`

nav += "</ul></div>";

document.getElementsByTagName("nav")[0].innerHTML = nav;
