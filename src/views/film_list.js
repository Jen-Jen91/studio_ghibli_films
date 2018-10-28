const PubSub = require("../helpers/pub_sub.js");
const FilmInfo = require("./film_info.js");

const FilmList = function (container) {
  this.container = container;
};

FilmList.prototype.bindEvents = function () {
  PubSub.subscribe("Films:all-film-data", (event) => {
    //console.log(event.detail);
    const allFilms = event.detail;
    this.renderAll(allFilms);
  });

  PubSub.subscribe("Films:selected-film", (event) => {
    //console.log(event.detail);
    const selectedFilm = event.detail;
    this.render(selectedFilm);
  });
};

FilmList.prototype.render = function (film) {
  const filmView = new FilmInfo(this.container, film);
  filmView.display();
};

FilmList.prototype.renderAll = function (allFilms) {
  allFilms.forEach((film) => {
    const filmsView = new FilmInfo(this.container, film);
    filmsView.createTitle();
  });
};

module.exports = FilmList;
