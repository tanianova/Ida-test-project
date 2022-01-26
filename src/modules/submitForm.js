import renderCards from "./renderCards";

const submitForm = ({ formSelector, wrapperSelector, inputsSelector }) => {
  const form = document.querySelector(formSelector);
  const wrapper = document.querySelector(wrapperSelector);
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
    renderCards(data, wrapper);
    clearInputs();
  };

  form.addEventListener("submit", handleFormSubmit);
};

export default submitForm;
