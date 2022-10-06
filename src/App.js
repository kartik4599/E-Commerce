import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import Music from "./components/Layout/Center/Music";
import CartPage from "./components/Cart/CartPage";
import { useState } from "react";
import ContextProvider from "./Context/ContextProvider";

function App() {
  const [isCart, setCart] = useState(false);

  const setCartHandler = () => {
    setCart(!isCart);
  };

  return (
    <ContextProvider>
      {isCart && <CartPage close={setCartHandler} />}
      <Header onCart={setCartHandler} />
      <Music />
      <Footer />
    </ContextProvider>
  );
}

export default App;
