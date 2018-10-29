const PubSub = require("../helpers/pub_sub.js");
const FilmInfo = require("./film_info.js");

const ViewAll = function (element, container) {
  this.element = element;
  this.container = container;
  this.allFilms = null;
}

ViewAll.prototype.bindEvents = function () {
  PubSub.subscribe("Films:all-film-data", (event) => {
    this.allFilms = event.detail;
  });
  this.element.addEventListener("click", (event) => {
    const selectFilm = document.querySelector("#select-film");
    selectFilm.selectedIndex = 0;
    const selectYear = document.querySelector("#select-year");
    selectYear.selectedIndex = 0;
    this.displayAll(this.allFilms);
  });
};

ViewAll.prototype.displayAll = function (allFilms) {
  this.container.innerHTML = "";
  allFilms.forEach((film) => {
    const filmView = new FilmInfo(this.container, film);
    filmView.display();
  })
};

module.exports = ViewAll;
