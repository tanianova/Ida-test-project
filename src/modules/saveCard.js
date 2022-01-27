const saveCard = (data) => {
  const uniqueId = Date.now();
  localStorage.setItem(`card ${uniqueId}`, JSON.stringify(data));
   
};
export default saveCard;
