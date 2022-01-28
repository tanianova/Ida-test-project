import maskPrice from "./modules/maskPrice";
import checkInputValue from "./modules/checkInputValue";
import submitForm from "./modules/submitForm";
import deleteCard from "./modules/deleteCard";
import sortCards from "./modules/sortCards";

import "./styles/index.scss";
import renderCards from "./modules/renderCards";

window.addEventListener("DOMContentLoaded", () => {
  "use strict";
  maskPrice({ input: "[name=price]" });
  checkInputValue({
    formSelector: ".page-content__form",
    submitSelector: ".page-content__form .button",
  });
  submitForm({
    formSelector: ".page-content__form",
    cardsContainerSelector: ".page-content__cards-container",
    inputsSelector: ".page-content__form .input",
  });
  renderCards({ cardsContainerSelector: ".page-content__cards-container" });
  deleteCard({
    cardsContainerSelector: ".page-content__cards-container",
    btnDeleteClass: "card-delete",
  });
  sortCards({
    sortBtnSelector: ".select-button",
    cardsContainerSelector: ".page-content__cards-container",
  });
  
});
