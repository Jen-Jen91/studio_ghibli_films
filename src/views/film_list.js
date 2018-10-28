const PubSub = require("../helpers/pub_sub.js");
const FilmInfo = require("./film_info.js");

const FilmList = function (container) {
  this.container = container;
};

FilmList.prototype.bindEvents = function () {
  PubSub.subscribe("Films:selected-film", (event) => {
    //console.log(event.detail);
    const selectedFilm = event.detail;
    this.render(selectedFilm);
  });
};

//Move display function to film_info page
//Add another dropdown to filter by year??
//Add a 'view all' button
//Organise dropdown alphabetically

FilmList.prototype.render = function (film) {
  const filmView = new FilmInfo(this.container, film);
  filmView.display();
};

module.exports = FilmList;
