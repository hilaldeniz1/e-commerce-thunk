import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Basket from "./pages/Basket";
import Header from "./components/Header";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProducts } from "./redux/actions/productActions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // asenkron thunk aksiyonunu calıstırma
    dispatch(getProducts());
  }, []);
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/basket" element={<Basket />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
