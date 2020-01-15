import PubSub from "../helpers/pub_sub.js";

class SelectFilm {
  constructor(element) {
    this.element = element;
  }

  bindEvents() {
    PubSub.subscribe("Films:all-film-data", (event) => {
      const allFilms = event.detail;
      this.populate(allFilms);
    });
    this.element.addEventListener("change", (event) => {
      const selectedIndex = event.target.value;
      const selectYear = document.querySelector("#select-year");
      selectYear.selectedIndex = 0;
      PubSub.publish("SelectFilm:change", selectedIndex);
    });
  }
  
  populate(filmData) {
    filmData.forEach((film, index) => {
      const option = document.createElement("option");
      option.textContent = film.title;
      option.value = index;
      this.element.appendChild(option);
    });
  }
}



export default SelectFilm;
