// varsayılan değerler
const initialState = {
  basket: [],
  total: 0,
};

// state'in nasıl değiceğine karar verir
export const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      // sepette bu elemandan var mı
      const index = state.basket.findIndex((i) => i.id === action.payload.id);

      if (index >= 0) {
        // sepette bu üründen varsa
        const clone = [...state.basket];

        // ürünün miktarını 1 arttır
        clone[index].amount++;

        // store'u güncelle
        return {
          basket: clone,
          total: state.total + action.payload.price,
        };
      } else {
        // diziye yeni ürünü ekle
        const newBasket = state.basket.concat({
          ...action.payload,
          amount: 1,
        });

        // store'u güncelle
        return {
          basket: newBasket,
          total: state.total + action.payload.price,
        };
      }

    case "REMOVE_ITEM":
      const found = state.basket.findIndex((i) => i.id === action.payload.id);

      // eleman sepette varsa ve miktarı 1'den fazlaysa
      if (found >= 0 && action.payload.amount > 1) {
        // miktarı 1 azalt
        const clone = [...state.basket];

        clone[found].amount--;

        return {
          basket: clone,
          total: state.total - clone[found].price,
        };
      } else {
        // sepetten kaldır
        const newBasket = state.basket.filter(
          (i) => i.id !== action.payload.id
        );
        // state'i güncelle
        return {
          basket: newBasket,
          total: state.total - action.payload.price,
        };
      }

    default:
      return state;
  }
};
