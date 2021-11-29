import { checkURL } from "./js/urlChecker";
import { handleSubmit } from "./js/formHandler";

window.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("submit");
  button.addEventListener("submit", (event) => {
    event.preventDefault();
    handleSubmit();
  });
});

import "./styles/resets.scss";
import "./styles/base.scss";
import "./styles/form.scss";
import "./styles/header.scss";

export { checkURL, handleSubmit };
