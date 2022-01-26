const checkInputValue = ({formSelector, submitSelector}) => {
  const submitButton = document.querySelector(submitSelector);
  const form = document.querySelector(formSelector);

  const addWarning = (input) => {
    const warningSpan = document.createElement("span");
    warningSpan.classList.add("invalid");   
    warningSpan.textContent = "Поле является обязательным";

    if (input.value === "" && !input.classList.contains("invalid-input")) {
      input.classList.add("invalid-input");
      input.after(warningSpan);
    }
  };

  const removeWarning = (input) => {
    input.parentElement.removeChild(document.querySelector(".invalid"));
    input.classList.remove("invalid-input");
  };

  form.addEventListener("focusout", (e) => {
    let target = e.target;
    target.required && addWarning(target);
  });

  form.addEventListener("keyup", (e) => {
    let target = e.target;
    if (target.value.trim().length > 0) {
      target.classList.contains("invalid-input") && removeWarning(target);
      form.checkValidity()
        ? (submitButton.disabled = false)
        : (submitButton.disabled = true);
    } else if (target.value.trim().length === 0 && target.required) {
      addWarning(target, "Поле является обязательным");
      submitButton.disabled = true;
    }
  });
};

export default checkInputValue;
