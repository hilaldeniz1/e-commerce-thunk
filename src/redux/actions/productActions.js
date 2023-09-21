import axios from "axios";

// asenkron asksiyon (thunk)
export const getProducts = () => (dispatch) => {
  axios
    .get("https://fakestoreapi.com/products")
    .then((res) =>
      // api'den gelen verileri reducer'a aktarma
      dispatch({
        type: "SET_PRODUCTS",
        payload: res.data,
      })
    )
    .catch((err) =>
      // hata olursa reducer'a hatayı gönderme
      dispatch({
        type: "SET_ERROR",
        payload: err,
      })
    );
};
