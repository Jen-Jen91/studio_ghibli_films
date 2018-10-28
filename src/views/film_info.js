const FilmInfo = function (container, film) {
  this.container = container;
  this.film = film;
};

FilmInfo.prototype.display = function () {

  const infoDiv = document.createElement("div");
  infoDiv.classList.add("info-div");

  const filmTitle = this.createTitle();
  infoDiv.appendChild(filmTitle);

  const filmDescription = this.createDescription();
  infoDiv.appendChild(filmDescription);

  const filmList = this.createList();
  infoDiv.appendChild(filmList);

  this.container.appendChild(infoDiv);
};


FilmInfo.prototype.createTitle = function () {
  const title = document.createElement("h2");
  title.textContent = this.film.title;
  this.container.appendChild(title);
  return title;
};

FilmInfo.prototype.createDescription = function () {
  const description = document.createElement("p");
  description.textContent = this.film.description;
  this.container.appendChild(description);
  return description;
};

FilmInfo.prototype.createList = function () {
  const detailsList = document.createElement("div");

  const directorLabel = document.createElement("h4");
  directorLabel.textContent = "Director:";
  detailsList.appendChild(directorLabel);

  const director = document.createElement("p");
  director.textContent = this.film.director;
  detailsList.appendChild(director);

  const releaseLabel = document.createElement("h4");
  releaseLabel.textContent = "Release Year:";
  detailsList.appendChild(releaseLabel);

  const releaseDate = document.createElement("p");
  releaseDate.textContent = this.film.release_date;
  detailsList.appendChild(releaseDate);

  const ratingLabel = document.createElement("h4");
  ratingLabel.textContent = "Rating:";
  detailsList.appendChild(ratingLabel);

  const rating = document.createElement("p");
  rating.textContent = this.film.rt_score;
  detailsList.appendChild(rating);

  return detailsList;
};

module.exports = FilmInfo;
