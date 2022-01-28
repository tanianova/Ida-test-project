const saveCard = (data) => {
  const uniqueId = Date.now();
  localStorage.setItem(`card ${uniqueId}`, JSON.stringify(data));
  
  const keys = Object.keys(localStorage);

  keys.forEach((key) => {
    const items = localStorage.getItem(key);
    // console.log(name,description,link,price);
    // items.forEach((item) => {
    //   console.log(item.name, item.price);
    // });
  });
};
export default saveCard;
