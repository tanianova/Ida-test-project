import maskPrice from "./modules/maskPrice";
import createCard from "./modules/createCard";
import checkInputValue from "./modules/checkInputValue";
import "./styles/index.scss";

window.addEventListener("DOMContentLoaded", () => {
  "use strict";
  maskPrice("[name=price]");
  checkInputValue('.page-content__form','.page-content__form .button')
  
});
