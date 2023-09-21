import { useSelector } from "react-redux";
import Card from "../components/Card";

const MainPage = () => {
  // store'a abone olma
  const state = useSelector((store) => store.productReducer);

  return (
    <div>
      {state.isLoading ? (
        // yüklenme sürerken
        <h4 className="text-center mt-5">Yükleniyor...</h4>
      ) : (
        // yükleme bittiğinde hata yoksa çalışır
        !state.isError && (
          <div className="d-flex  flex-wrap justify-content-center justify-content-md-between gap-5 p-5">
            {state.products.map((product) => (
              <Card key={product.id} product={product} />
            ))}
          </div>
        )
      )}

      {/* hata olduğunda */}
      {state.isError && (
        <div className="text-center mt-5">
          <h2>Üzgünüz bir hata oluştu..</h2>
        </div>
      )}
    </div>
  );
};

export default MainPage;
