import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./";
import { MainArea, StyledApp } from "./page-style/StyledApp";
import Navbar from "./components/Navbar/Navbar";
import data from "./data/books.json";
import Home from "./components/pages/Home";
import Cart from "./components/pages/Cart";
import CartContext from "./helpers/CartContext";

const cartLocalStorage = JSON.parse(localStorage.getItem("cart")) || [];

function App() {
  const products = data;

  const [cartItems, setCartItems] = useState(cartLocalStorage);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (event, product, number, setNumber) => {
    const itemExist = cartItems.find((item) => item.id === product.id);
    if (itemExist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? {
                ...itemExist,
                quantity: itemExist.quantity + Number(number),
              }
            : item
        )
      );
    } else {
      setCartItems([
        ...cartItems,
        {
          ...product,
          quantity: Number(number),
        },
      ]);
    }
    event.preventDefault();
    setNumber("");
  };

  const removeItem = (product) => {
    const productExist = cartItems.find((item) => item.id === product.id);
    if (productExist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...productExist, quantity: productExist.quantity - 1 }
            : item
        )
      );
    }
  };

  return (
    <CartContext.Provider value={cartItems}>
      <Router>
        <StyledApp>
          <Navbar />
          <MainArea>
            <Routes>
              <Route
                path="/"
                element={<Home products={products} addToCart={addToCart} />}
              />
              <Route path="/cart" element={<Cart removeItem={removeItem} />} />
            </Routes>
          </MainArea>
          <GlobalStyle />
        </StyledApp>
      </Router>
    </CartContext.Provider>
  );
}

export default App;
