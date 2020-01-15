import Films from "./models/films.js";
import ErrorView from "./views/error.js";
import ViewAll from "./views/view_all.js";
import SelectFilm from "./views/select_film.js";
import SelectYear from "./views/select_year.js";
import FilmList from "./views/film_list.js";

document.addEventListener("DOMContentLoaded", () => {
  const errorContainer = document.querySelector("body");
  const error = new ErrorView(errorContainer);
  error.bindEvents();

  const filmsButton = document.querySelector(".button");
  const filmsSection = document.querySelector("section#films");
  const allFilms = new ViewAll(filmsButton, filmsSection);
  allFilms.bindEvents();

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
