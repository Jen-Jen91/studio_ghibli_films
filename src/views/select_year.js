const PubSub = require("../helpers/pub_sub.js");

const SelectYear = function (element) {
  this.element = element;
}

SelectYear.prototype.bindEvents = function () {
  PubSub.subscribe("Films:all-film-data", (event) => {
    const allFilms = event.detail;
    this.populate(allFilms);
  });
  this.element.addEventListener("change", (event) => {
    const selectedYear = event.target.value;
    PubSub.publish("SelectYear:change", selectedYear);
  });
};

SelectYear.prototype.populate = function (filmData) {
  const years = filmData.map(film => film.release_date);

  const uniqueYears = years.filter((year, index, yearArray) => yearArray.indexOf(year) === index);

  uniqueYears.forEach((year) => {
    const option = document.createElement("option");
    option.textContent = year;
    option.value = year;
    this.element.appendChild(option);
  });
};

module.exports = SelectYear;
