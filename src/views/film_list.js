import PubSub from "../helpers/pub_sub.js";
import FilmInfo from "./film_info.js";

class FilmList {
  constructor(container) {
    this.container = container;
  }

  bindEvents() {
    PubSub.subscribe("Films:selected-film", (event) => {
      const selectedFilm = event.detail;
      this.render(selectedFilm);
    });
    PubSub.subscribe("Films:selected-films-by-year", (event) => {
      const selectedFilms = event.detail;
      this.renderFilmsByYear(selectedFilms);
    });
  }

  render(film) {
    this.container.innerHTML = "";
    const filmView = new FilmInfo(this.container, film);
    filmView.display();
  }
  
  renderFilmsByYear(selectedFilms) {
    this.container.innerHTML = "";
    selectedFilms.forEach((film) => {
      const filmView = new FilmInfo(this.container, film);
      filmView.display();
    });
  }
}




export default FilmList;
