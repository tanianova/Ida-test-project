const deleteCard = ({ wrapperSelector, btnDeleteClass }) => {
  const wrapper = document.querySelector(wrapperSelector);

  wrapper.addEventListener("click", (e) => {
    const target = e.target;
    // target.parentNode.classList.remove('animatedIn')
    // target.parentNode.classList.add('animatedOut')
    if (target && target.classList.contains(btnDeleteClass)) {
      target.parentNode.parentNode.removeChild(target.parentNode);
    }
  });
};

export default deleteCard;
