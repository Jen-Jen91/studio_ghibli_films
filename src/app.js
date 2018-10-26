const Films = require("./models/films.js");
const ErrorView = require("./views/error.js");
const SelectFilm = require("./views/select_film.js");

document.addEventListener("DOMContentLoaded", () => {
  console.log("JavaScript Loaded");

  const errorContainer = document.querySelector("section#films");
  const error = new ErrorView(errorContainer);
  error.bindEvents();

  const dropdown = document.querySelector("select#select-film");
  const selectFilm = new SelectFilm(dropdown);
  selectFilm.bindEvents();

  const films = new Films();
  films.getData();

});
