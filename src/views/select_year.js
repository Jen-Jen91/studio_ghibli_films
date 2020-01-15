import PubSub from "../helpers/pub_sub.js";

class SelectYear {
  constructor(element) {
    this.element = element;
  }

  bindEvents() {
    PubSub.subscribe("Films:all-film-data", (event) => {
      const allFilms = event.detail;
      this.populate(allFilms);
    });
    this.element.addEventListener("change", (event) => {
      const selectedYear = event.target.value;
      const selectFilm = document.querySelector("#select-film");
      selectFilm.selectedIndex = 0;
      PubSub.publish("SelectYear:change", selectedYear);
    });
  }
  
  populate(filmData) {
    const years = filmData.map(film => film.release_date);
    const uniqueYears = years.filter((year, index, yearArray) => yearArray.indexOf(year) === index);
    uniqueYears.forEach((year) => {
      const option = document.createElement("option");
      option.textContent = year;
      option.value = year;
      this.element.appendChild(option);
    });
  }
}



export default SelectYear;
