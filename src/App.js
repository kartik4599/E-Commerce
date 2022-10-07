import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import Music from "./components/Layout/Center/Music";
import CartPage from "./components/Cart/CartPage";
import { useState } from "react";
import ContextProvider from "./Context/ContextProvider";
import { Route } from "react-router-dom";
import About from "./components/Layout/About/About";

function App() {
  const [isCart, setCart] = useState(false);

  const setCartHandler = () => {
    setCart(!isCart);
  };

  return (
    <ContextProvider>
      {isCart && <CartPage close={setCartHandler} />}
      <Header onCart={setCartHandler} />
      <Route path={'/store'} >
        <Music />
      </Route>
      <Route path={'/home'}></Route>
      <Route path={'/About'}><About/></Route>
      <Footer />
    </ContextProvider>
  );
}

export default App;
