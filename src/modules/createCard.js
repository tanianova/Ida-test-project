const createCard = (
  { name, description, price, link },
  cardsContainer
) => {
  let card = document.createElement("div");
  card.classList.add("card");
  card.classList.add("animatedIn");
  card.innerHTML = `
        <img class="card-img" src=${link} alt=${name}>
        <div class="card-info">
            <h4 class="card-title">${name}</h4>
            <p class="card-description">${
              description ? description : "Описание отсутствует"
            }</p>
            <div class="card-price">${price}<span>руб.</span></div>
        </div>
        <button class="card-delete"></button>
    `;

  cardsContainer.appendChild(card);
};

export default createCard;
