// aksiyon oluşturan foknsiyon
export const addToBasket = (item) => {
  return {
    type: "ADD_TO_BASKET",
    payload: item,
  };
};

export const removeItem = (item) => {
  return {
    type: "REMOVE_ITEM",
    payload: item,
  };
};
