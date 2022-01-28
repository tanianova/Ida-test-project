import createCard from "./createCard";
import saveCard from "./saveCard";

const submitForm = ({
  formSelector,
  cardsContainerSelector,
  inputsSelector,
}) => {
  const form = document.querySelector(formSelector);
  const inputs = document.querySelectorAll(inputsSelector);
  const cardsContainer = document.querySelector(cardsContainerSelector);

  const serializeForm = () => {
    const data = new FormData(form);
    return Object.fromEntries(data);
  };

  const clearInputs = () => {
    inputs.forEach((item) => {
      item.value = "";
    });
  };

  const msgSuccess = () => {
    const statusMessage = document.createElement("p");
    statusMessage.classList.add("submit-message");
    statusMessage.innerText = "Товар успешно добавлен";
    form.appendChild(statusMessage);
    setTimeout(() => {
      statusMessage.remove();
    }, 2000);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    msgSuccess();

    const data = serializeForm();
    saveCard(data,cardsContainer);
    createCard(data, cardsContainer);
    clearInputs();
  };

  form.addEventListener("submit", handleFormSubmit);
};

export default submitForm;
