import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/home/Home";
import ItemDetails from "./pages/itemDetails/ItemDetails";
import Checkout from "./pages/checkout/Checkout";
import Confirmation from "./pages/checkout/Confirmation";
import NavBar from "./pages/global/NavBar";
import CartMenu from "./pages/global/CartMenu";
import Footer from "./pages/global/Footer";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
};

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <NavBar></NavBar>
        <ScrollToTop></ScrollToTop>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="item/:itemId" element={<ItemDetails />}></Route>
          <Route path="checkout" element={<Checkout />}></Route>
          <Route path="checkout/success" element={<Confirmation />}></Route>
        </Routes>
        <CartMenu></CartMenu>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
