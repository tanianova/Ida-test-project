import createCard from "./createCard";
import saveCard from "./saveCard";

const submitForm = ({ formSelector, cardsContainerSelector, inputsSelector }) => {
  const form = document.querySelector(formSelector);
  const inputs = document.querySelectorAll(inputsSelector);

  const serializeForm = () => {
    const data = new FormData(form);
    return Object.fromEntries(data);
  };

  const clearInputs = () => {
    inputs.forEach((item) => {
      item.value = "";
    });
  };
 
  const handleFormSubmit = (e) => {
    e.preventDefault();

    const data = serializeForm();
    saveCard(data)
    createCard(data,cardsContainerSelector);
    clearInputs();
  };

  form.addEventListener("submit", handleFormSubmit);
};

export default submitForm;
