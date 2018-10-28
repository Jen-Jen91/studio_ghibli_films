const Films = require("./models/films.js");
const ErrorView = require("./views/error.js");
const SelectFilm = require("./views/select_film.js");
const SelectYear = require("./views/select_year.js");
const FilmList = require("./views/film_list.js");

document.addEventListener("DOMContentLoaded", () => {
  console.log("JavaScript Loaded");

  const errorContainer = document.querySelector("body");
  const error = new ErrorView(errorContainer);
  error.bindEvents();

  const listContainer = document.querySelector("section#films");
  const filmList = new FilmList(listContainer);
  filmList.bindEvents();

  const filmDropdown = document.querySelector("select#select-film");
  const selectFilm = new SelectFilm(filmDropdown);
  selectFilm.bindEvents();

  const yearDropdown = document.querySelector("select#select-year");
  const selectYear = new SelectYear(yearDropdown);
  selectYear.bindEvents();

  const films = new Films();
  films.bindEvents();
});
