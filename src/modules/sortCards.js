const sortCards = ({ sortBtnSelector, cardsContainerSelector }) => {
  const sortBtn = document.querySelector(sortBtnSelector);
  const cardsContainer = document.querySelector(cardsContainerSelector);
  const cards = cardsContainer.children;

  sortBtn.addEventListener("change", sortCards);

  const renderCards = (sortedCards) => {
    sortedCards.forEach((card) => {
      cardsContainer.append(card);
    });
  };

  function sortCards(e) {
    switch (e.target.value) {
      case "minPrice":
        return renderCards(
          [...cards].sort(
            (a, b) =>
              a.querySelector(".card-price").innerText.replace(/[^0-9]/g, "") -
              b.querySelector(".card-price").innerText.replace(/[^0-9]/g, "")
          )
        );
      case "maxPrice":
        return renderCards(
          [...cards].sort(
            (a, b) =>
              b.querySelector(".card-price").innerText.replace(/[^0-9]/g, "") -
              a.querySelector(".card-price").innerText.replace(/[^0-9]/g, "")
          )
        );
      case "name":
        return renderCards(
          [...cards].sort((a, b) =>
            a
              .querySelector(".card-title")
              .innerText.toLowerCase()
              .localeCompare(
                b.querySelector(".card-title").innerText.toLowerCase()
              )
          )
        );
        case "":
          //тут наверно нужно добавить сортировку по времени  добавления, еще не придумала, как реализовать
          // console.log([...cards]);
    }
  }
};
export default sortCards;
