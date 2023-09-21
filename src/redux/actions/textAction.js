// senkron aksiyon fonksiyonu
export function sayiArti() {
  axios.get();
  return {
    type: "addCount",
    payload: 1,
  };
}

// asenkron thunk aksiyonu

function getData() {
  return function (dispatch) {
    // asenkron işlemler
    const data = [];
    // reducer a aktarma
    dispatch({});
  };
}

// kısa yol
const getData2 = () => (dispatch) => {
  // asenkron islemler
};

/*
  ! Redux Thunk
  * redux ın middleware(arayazılım) kütüphanesidir.
  * redux ile birlikte kullanıldıgında asenkron işlemlerin daha iyi yönetilmesine olanak saglıyor.
  * gercek dünya uygulamalarında ,sunucu isteklerinde ,veritabanı sorgularında kullanılır.
  *özet:
  *dispatch işleminde reducer a verileri aktarmadan önce api istekleri yapmamıza olanak saglar.
  */
