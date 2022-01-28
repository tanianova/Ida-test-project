const deleteCard = ({ cardsContainerSelector, btnDeleteClass }) => {
  const cardsContainer = document.querySelector(cardsContainerSelector);

  cardsContainer.addEventListener("click", (e) => {
    const target = e.target;

    if (target && target.classList.contains(btnDeleteClass)) {
      target.parentNode.classList.remove("animatedIn");
      target.parentNode.classList.add("animatedOut");
      setTimeout(() => {
        target.parentNode.parentNode.removeChild(target.parentNode);
        if (cardsContainer.children.length === 0) {
          cardsContainer.innerHTML = `<h2>Товаров пока нет</h2>`;
        }
      }, 1000);
    }
    
   
  });
};

export default deleteCard;
