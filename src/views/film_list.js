const PubSub = require("../helpers/pub_sub.js");

const FilmList = function (container) {
  this.container = container;
};

FilmList.prototype.bindEvents = function () {
  PubSub.subscribe("Films:selected-film", (event) => {
    //console.log(event.detail);
    const selectedFilm = event.detail;
    this.display(selectedFilm);
  });
};

//Move display function to film_info page
//Add another dropdown to filter by year??
//Add a 'view all' button
//Organise dropdown alphabetically

FilmList.prototype.display = function (film) {
  this.container.innerHTML = "";
  const title = document.createElement("h2");
  title.textContent = film.title;
  this.container.appendChild(title);

  const description = document.createElement("p");
  description.textContent = film.description;
  this.container.appendChild(description);
};

module.exports = FilmList;
