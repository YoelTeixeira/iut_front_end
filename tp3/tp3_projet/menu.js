var menu = [
  {
    label: "Menu",
    link: "menu.html"
  },{
    label: "Activités",
    link: "activites.html"
  },{
    dropdown_title: "Service",
    list: [
      {
        label: "Information",
        link: "#"
      },{
        label: "Location",
        link: "#"
      },{
        label: "Assistance",
        link: "#"
      }
    ]
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

var nav = "<ul>";

menu.forEach((elem) => {
  nav += "<li>";
  if(elem.dropdown_title != undefined) {
    nav += `
    <a href="#">${elem.dropdown_title}</a>
    <ul class="dropdown">`;
    elem.list.forEach((sub_elem) => {
      nav += `<li><a href="${sub_elem.link}">${sub_elem.label}</a></li>`;
    });
    nav += "</ul>";
  } else {
    nav += `<a href="${elem.link}">${elem.label}</a>`;
  }
  nav += "</li>";
})

nav += "</ul>";

document.getElementsByTagName("nav")[0].innerHTML = nav;
