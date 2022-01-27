const deleteCard = ({ wrapperSelector, btnDeleteClass }) => {
  const wrapper = document.querySelector(wrapperSelector);

  wrapper.addEventListener("click", (e) => {
    const target = e.target;

    if (target && target.classList.contains(btnDeleteClass)) {
      target.parentNode.classList.remove("animatedIn");
      target.parentNode.classList.add("animatedOut");
      setTimeout(() => {
        target.parentNode.parentNode.removeChild(target.parentNode);
      }, 1000);
    }
  });
};

export default deleteCard;
