import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Music from './components/Layout/Center/Music';
import CartPage from './components/Cart/CartPage';
import { useState } from 'react';

function App() {

const[isCart,setCart]= useState(false);

const setCartHandler=()=>{
  setCart(!isCart);
}

  return (
    <div className="App">
      <Header onCart={setCartHandler}/>
      {isCart && <CartPage close={setCartHandler}/>}
      <Music/>
      <Footer/>
    </div>
  );
}

export default App;
