const FilmInfo = function (container, film) {
  this.container = container;
  this.film = film;
};

FilmInfo.prototype.display = function () {
  this.container.innerHTML = "";

  const infoDiv = document.createElement("div");

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
  const detailsList = document.createElement("ul");

  const director = document.createElement("li");
  director.textContent = `Director: ${this.film.director}`;
  detailsList.appendChild(director);

  const releaseDate = document.createElement("li");
  releaseDate.textContent = `Release Date: ${this.film.release_date}`;
  detailsList.appendChild(releaseDate);

  const rating = document.createElement("li");
  rating.textContent = `Rating: ${this.film.rt_score}`;
  detailsList.appendChild(rating);

  return detailsList;
};

module.exports = FilmInfo;
