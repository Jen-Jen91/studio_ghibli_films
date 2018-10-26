const Films = require("./models/films.js");
const ErrorView = require("./views/error.js");

document.addEventListener("DOMContentLoaded", () => {
  console.log("JavaScript Loaded");

  const errorContainer = document.querySelector("section#films");
  const error = new ErrorView(errorContainer);
  error.bindEvents();

  const films = new Films();
  films.getData();

});
