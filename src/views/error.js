const PubSub = require("../helpers/pub_sub.js");

const ErrorView = function (container) {
  this.container = container;
};

ErrorView.prototype.bindEvents = function () {
  PubSub.subscribe("Films:error", (event) => {
    const error = event.detail;
    this.render(error);
  });
};

ErrorView.prototype.render = function (error) {
  console.error(error);
  this.container.innerHTML = "";

  const errorMessage = document.createElement("h2");
  errorMessage.classList.add("error-message");
  errorMessage.textContent = "Oops, something went wrong!";
  this.container.appendChild(errorMessage);
};

module.exports = ErrorView;
