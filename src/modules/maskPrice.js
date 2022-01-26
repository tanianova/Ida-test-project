const maskPrice = ({input}) => {
  const inputs = document.querySelectorAll(input);
  const checkNumInputs = (e) => {
    e.target.value = e.target.value.replace(/\D/, "");
  };
  const createMask = (e) => {
    const mask = e.target.value.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    e.target.value = mask;
  };

  inputs.forEach((input) => {
    input.addEventListener("input", checkNumInputs);
    input.addEventListener("change", createMask);
  });
};

export default maskPrice;
