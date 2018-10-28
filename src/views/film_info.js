const FilmInfo = function (container, film) {
  this.container = container;
  this.film = film;
};

//Full Display:
FilmInfo.prototype.display = function () {
  const infoDiv = document.createElement("div");
  infoDiv.classList.add("info-div");

  const filmTitle = this.createTitle();
  infoDiv.appendChild(filmTitle);

  const filmDescription = this.createDescription();
  infoDiv.appendChild(filmDescription);

  const filmDetails = this.createDetails();
  infoDiv.appendChild(filmDetails);

  this.container.appendChild(infoDiv);
};

//Title:
FilmInfo.prototype.createTitle = function () {
  const title = document.createElement("h2");
  title.textContent = this.film.title;
  this.container.appendChild(title);
  return title;
};

//Description:
FilmInfo.prototype.createDescription = function () {
  const description = document.createElement("p");
  description.textContent = this.film.description;
  this.container.appendChild(description);
  return description;
};

//Other Details:
FilmInfo.prototype.createDetails = function () {
  const detailsDiv = document.createElement("div");

  const director = this.createDirector();
  detailsDiv.appendChild(director);

  const releaseDate = this.createReleaseDate();
  detailsDiv.appendChild(releaseDate);

  const rating = this.createRating();
  detailsDiv.appendChild(rating);

  return detailsDiv;
};

//Director:
FilmInfo.prototype.createDirector = function () {
  const directorDiv = document.createElement("div");

  const directorLabel = document.createElement("h4");
  directorLabel.textContent = "Director:";
  directorDiv.appendChild(directorLabel);

  const director = document.createElement("p");
  director.textContent = this.film.director;
  directorDiv.appendChild(director);

  return directorDiv;
};

//Release Date:
FilmInfo.prototype.createReleaseDate = function () {
  const releaseDiv = document.createElement("div");

  const releaseLabel = document.createElement("h4");
  releaseLabel.textContent = "Release Year:";
  releaseDiv.appendChild(releaseLabel);

  const releaseDate = document.createElement("p");
  releaseDate.textContent = this.film.release_date;
  releaseDiv.appendChild(releaseDate);

  return releaseDiv;
};

//Rating:
FilmInfo.prototype.createRating = function () {
  const ratingDiv = document.createElement("div");

  const ratingLabel = document.createElement("h4");
  ratingLabel.textContent = "Rating:";
  ratingDiv.appendChild(ratingLabel);

  const rating = document.createElement("p");
  rating.textContent = this.film.rt_score;
  ratingDiv.appendChild(rating);

  return ratingDiv;
};

module.exports = FilmInfo;
