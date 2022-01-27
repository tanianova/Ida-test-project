import "./styles/index.scss";

import maskPrice from "./modules/maskPrice";
import checkInputValue from "./modules/checkInputValue";
import submitForm from "./modules/submitForm";
import deleteCard from "./modules/deleteCard";

window.addEventListener("DOMContentLoaded", () => {
  "use strict";
  maskPrice({ input: "[name=price]" });
  checkInputValue({
    formSelector: ".page-content__form",
    submitSelector: ".page-content__form .button",
  });
  submitForm({
    formSelector: ".page-content__form",
    wrapperSelector: ".page-content__cards-container",
    inputsSelector:".page-content__form .input"
  });
  deleteCard({
    wrapperSelector:".page-content__cards-container",
    btnDeleteClass:"card-delete"
  })
});
