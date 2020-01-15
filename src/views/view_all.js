import PubSub from "../helpers/pub_sub.js";
import FilmInfo from "./film_info.js";

class ViewAll {
  constructor(element, container) {
    this.element = element;
    this.container = container;
    this.allFilms = null;
  }

  bindEvents() {
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
  }
  
  displayAll(allFilms) {
    this.container.innerHTML = "";
    allFilms.forEach((film) => {
      const filmView = new FilmInfo(this.container, film);
      filmView.display();
    });
  }
}



export default ViewAll;
