const Request = require("../helpers/request.js");
const PubSub = require("../helpers/pub_sub.js");

const Films = function() {
  this.filmData = null;
};

Films.prototype.bindEvents = function () {
  this.getData();
  PubSub.subscribe("SelectFilm:change", (event) => {
    const selectedIndex = event.detail;
    this.publishFilmDetails(selectedIndex);
  });
};

Films.prototype.getData = function () {
  const url = "https://ghibliapi.herokuapp.com/films";
  const request = new Request(url);
  request.get()
    .then((data) => {
     this.filmData = data;
     PubSub.publish("Films:all-film-data", this.filmData);
     //console.log(this.filmData);
    })
   .catch((error) => {
      PubSub.publish("Films:error", error);
    })
};

Films.prototype.publishFilmDetails = function (index) {
  const selectedFilm = this.filmData[index];
  //console.log(selectedFilm);
  PubSub.publish("Films:selected-film", selectedFilm);
};

module.exports = Films;
