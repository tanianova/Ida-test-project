const createCard = (nameSelector, descrSelector, linkSelector, priceSelector) => {
    const inputName = document.querySelector(nameSelector),
            inputDescr = document.querySelector(descrSelector),
            inputLink = document.querySelector(linkSelector),
            inputPrice = document.querySelector(priceSelector),
            divCard = document.createElement('div'),
            img = document.createElement('img'),
            cardsSection = document.querySelector('.cards-section'),
            cardText = document.createElement('div'),
            cardTitle = document.createElement('h2'),
            cardDescr = document.createElement('p'),
            cardPrice = document.createElement('strong'),
            cardDelete = document.createElement('div');

    function createCard() {
        divCard.classList.add('card');
        cardsSection.appendChild(divCard);
        img.classList.add('card-img');
        img.setAttribute('src', inputLink.value);
        divCard.appendChild(img);
        cardText.classList.add('card-text');
        divCard.appendChild(cardText);
        cardTitle.innerHTML = inputName.value;
        cardTitle.classList.add('card-title');
        cardText.appendChild(cardTitle);
        cardDescr.innerHTML = inputDescr.value;
        cardDescr.classList.add('card-descr');
        cardText.appendChild(cardDescr);
        cardPrice.innerHTML = inputPrice.value + ' руб.';
        cardPrice.classList.add('card-price');
        cardText.appendChild(cardPrice);
        cardDelete.classList.add('card-delete');
        cardDelete.innerHTML = '<img src="./img/card-delete.svg" alt="Delete">';
        divCard.appendChild(cardDelete);
    }
    createCard();
    setTimeout(() => {
        divCard.style.transform = 'scale(1)';
        setTimeout(setLocalStorage, 200);
    }, 100);
    // function setLocalStorage() {
    //     const cardsObj = document.querySelectorAll('.card');
    //     let rand = Date.now();
    //     let card = {};
    //     if (!cardsObj[cardsObj.length - 1].classList.contains('form')) {
    //     card.date = rand;
    //     card.img = cardsObj[cardsObj.length - 1].querySelector('img').getAttribute('src');
    //     card.name = cardsObj[cardsObj.length - 1].querySelector('.card-title').textContent;
    //     card.descr = cardsObj[cardsObj.length - 1].querySelector('.card-descr').textContent;
    //     card.price = cardsObj[cardsObj.length - 1].querySelector('.card-price').textContent;
    //     localStorage.setItem(`card ${rand}`, JSON.stringify(card));
    //     }
    // }
}


export default createCard;