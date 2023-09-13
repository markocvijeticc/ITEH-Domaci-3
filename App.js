import "./App.css";
import Cart from "./components/Korpa";
import NavBar from "./components/NavBar";
import Products from "./components/Proizvodi";
import { Home } from "./components/PocetnaStrana";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import brojanica from "./components/images/brojanica2.jpeg";
import ikona from "./components/images/ikona.jpg";
import krstic from "./components/images/krstic.jpg";
import torba from "./components/images/torba.jpg";

function App() {
  const [cartNum, setCartNum] = useState(0);
  const [cartProducts, setCartProducts] = useState([]);
  const [products] = useState([
    {
      id: 1,
      title: "Бројаница",
      description: "Плетена бројаница за руку са металним крстићем.",
      amount: 0,
      price: "350,00 рсд",
      image: brojanica,
    },
    {
      id: 2,
      title: "Урамљена славска икона",
      description: "Славска икона Свети Никола, у златном раму.",
      amount: 0,
      price: "5.000,00 рсд",
      image: ikona,
    },
    {
      id: 3,
      title: "Дрвени крстић за врат",
      description: "Дрвени крстић са занимљивом шаром",
      amount: 0,
      price: "150,00 рсд",
      image: krstic,
    },
    {
      id: 4,
      title: "Кожна торба",
      description: "Кожна торба ексклузивне колекције “Мозаик”",
      amount: 0,
      price: "16500,00 рсд",
      image: torba,
    },
  ]);
  function refreshCart() {
    let newProducts = products.filter((prod) => prod.amount > 0);
    setCartProducts(newProducts);
  }
  function addProduct(title, id) {
    setCartNum(cartNum + 1);
    products.forEach((prod) => {
      if (prod.id === id) {
        prod.amount++;
      }
    });

    refreshCart();
  }
  function izbaciProduct(title, id) {
    setCartNum(cartNum - 1);
    products.forEach((prod) => {
      if (prod.id === id) {
        prod.amount--;
      }
    });
    refreshCart();
  }

  return (
    <BrowserRouter className="App">
      <NavBar cartNum={cartNum}></NavBar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/products"
          element={
            <Products
              products={products}
              onAdd={addProduct}
              izbaci={izbaciProduct}
            />
          }
        />
        <Route path="/cart*" element={<Cart products={cartProducts} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
