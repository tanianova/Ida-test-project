const deleteCard = ({ cardsContainerSelector, btnDeleteClass }) => {
  const cardsContainer = document.querySelector(cardsContainerSelector);
  

  const removeCardFromLocalStorage = (card) => {
    const cards = JSON.parse(localStorage.cards);
    for (let i = 0; i < cards.length; i++) {
      if (cards[i].name === card.children[1].children[0].innerText) {
        cards.splice(i, 1);
      }
      localStorage.cards = JSON.stringify(cards);
    }
  };

  cardsContainer.addEventListener("click", (e) => {
    const target = e.target;

    if (target && target.classList.contains(btnDeleteClass)) {
      target.parentNode.classList.remove("animatedIn");
      target.parentNode.classList.add("animatedOut");
      setTimeout(() => {
        target.parentNode.parentNode.removeChild(target.parentNode);
        removeCardFromLocalStorage(target.parentNode);
      }, 1000);
    }
  });
};

export default deleteCard;
