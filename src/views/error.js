import PubSub from "../helpers/pub_sub.js";

class ErrorView {
  constructor(container) {
    this.container = container;
  }

  bindEvents() {
    PubSub.subscribe("Films:error", (event) => {
      const error = event.detail;
      this.render(error);
    });
  }
  
  render(error) {
    console.error(error);
    this.container.innerHTML = "";
    const errorMessage = document.createElement("h2");
    errorMessage.classList.add("error-message");
    errorMessage.textContent = "Oops, something went wrong!";
    this.container.appendChild(errorMessage);
  }
}



export default ErrorView;
