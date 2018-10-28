const FilmInfo = function (container, film) {
  this.container = container;
  this.film = film;
};

FilmInfo.prototype.display = function () {
  this.container.innerHTML = "";

  const title = document.createElement("h2");
  title.textContent = this.film.title;
  this.container.appendChild(title);

  const description = document.createElement("p");
  description.textContent = this.film.description;
  this.container.appendChild(description);

  const list = document.createElement("ul");

  const director = document.createElement("li");
  director.textContent = `Director: ${this.film.director}`;
  list.appendChild(director);

  const releaseDate = document.createElement("li");
  releaseDate.textContent = `Release Date: ${this.film.release_date}`;
  list.appendChild(releaseDate);

  const rating = document.createElement("li");
  rating.textContent = `Rating: ${this.film.rt_score}`;
  list.appendChild(rating);

  this.container.appendChild(list);
};

module.exports = FilmInfo;
