const Request = require("../helpers/request.js");
const PubSub = require("../helpers/pub_sub.js");

const Films = function() {
  this.filmData = null;
};

Films.prototype.getData = function () {
  const url = "https://ghibliapi.herokuapp.com/films";
  const request = new Request(url);
  request.get()
    .then((data) => {
     this.filmData = data;
     //PubSub.publish("Films:all-film-data", this.filmData);
     console.log(this.filmData);
    })
   .catch((error) => {
      PubSub.publish("Films:error", error);
    })
};

// Films.prototype.bindEvents = function () {
//
// };

// Films.prototype.publishFilmDetails = function () {
//
// };

module.exports = Films;
