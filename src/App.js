import { useState } from "react";
import "./App.css";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartVisible, setCartVisible] = useState(false);
  const showCartHandler = () => {
    setCartVisible(true);
  };

  const hideCartHandler = () => {
    setCartVisible(false);
  };
  return (
    <CartProvider>
      <Header cartHandler={showCartHandler} />
      <main>
        <Meals />
      </main>
      {cartVisible && <Cart cartClose={hideCartHandler} />}
    </CartProvider>
  );
}

export default App;
