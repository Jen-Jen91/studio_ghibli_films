const PubSub = require("../helpers/pub_sub.js");
const FilmInfo = require("./film_info.js");

const FilmList = function (container) {
  this.container = container;
};

FilmList.prototype.bindEvents = function () {
  // PubSub.subscribe("Films:all-film-data", (event) => {
  //   //console.log(event.detail);
  //   const allFilms = event.detail;
  //   this.renderAll(allFilms);
  // });

  PubSub.subscribe("Films:selected-film", (event) => {
    //console.log(event.detail);
    const selectedFilm = event.detail;
    this.render(selectedFilm);
  });

  PubSub.subscribe("Films:selected-films-by-year", (event) => {
    //console.log(event.detail);
    const selectedFilms = event.detail;
    this.renderFilmsByYear(selectedFilms);
  });
};

// FilmList.prototype.renderAll = function (allFilms) {
//   allFilms.forEach((film) => {
//     const filmsView = new FilmInfo(this.container, film);
//     filmsView.createTitle();
//   });
// };

FilmList.prototype.render = function (film) {
  this.container.innerHTML = "";
  const filmView = new FilmInfo(this.container, film);
  filmView.display();
};

FilmList.prototype.renderFilmsByYear = function (selectedFilms) {
  this.container.innerHTML = "";
  selectedFilms.forEach((film) => {
    const filmView = new FilmInfo(this.container, film);
    filmView.display();
  })
};

module.exports = FilmList;
