const saveCard = (data) => {
  let cards;
  localStorage.getItem("cards") === null
    ? (cards = [])
    : (cards = JSON.parse(localStorage.getItem("cards")));

  cards.push(data);
  localStorage.setItem("cards", JSON.stringify(cards));

};
export default saveCard;
