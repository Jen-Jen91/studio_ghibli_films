import Request from "../helpers/request.js";
import PubSub from "../helpers/pub_sub.js";

class Films {
  constructor() {
    this.filmData = null;
  }

  bindEvents() {
    this.getData();
    PubSub.subscribe("SelectFilm:change", (event) => {
      const selectedIndex = event.detail;
      this.publishFilmDetails(selectedIndex);
    });
    PubSub.subscribe("SelectYear:change", (event) => {
      const selectedYear = event.detail;
      this.publishFilmsByYear(selectedYear);
    });
  }

  getData() {
    const url = "https://ghibliapi.herokuapp.com/films";
    const request = new Request(url);
    request.get()
      .then((data) => {
        this.filmData = data;
        PubSub.publish("Films:all-film-data", this.filmData);
      })
      .catch((error) => {
        PubSub.publish("Films:error", error);
      });
  }

  publishFilmDetails(index) {
    const selectedFilm = this.filmData[index];
    PubSub.publish("Films:selected-film", selectedFilm);
  }
  
  publishFilmsByYear(year) {
    const selectedFilms = this.filmData.filter(film => film.release_date === year);
    PubSub.publish("Films:selected-films-by-year", selectedFilms);
  }
}





export default Films;
