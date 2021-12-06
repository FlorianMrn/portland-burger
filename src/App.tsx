import React, { FC, useState, Suspense } from "react";
import { Routes, Route  } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
const Panier = React.lazy(() => import("./components/Panier"));
const Checkout = React.lazy(() => import("./components/Checkout"));

const App: FC = () => {
  const [cart, setCart] = useState<Array<number>>([]);

  const handleAdd = (id: number) => {
    setCart((prevState) => [...prevState, id]);
  };

  const handleDelete = (id: number) => {
    setCart((prevState) => prevState.filter((el) => el !== id));
  };

  const cartProps = {
    setter: handleAdd,
    cart,
  };

  const totalProps = {
    setter: handleDelete,
    cart,
  };

  return (
    <div className="App">
      <Nav {...cartProps} />
      <Suspense fallback={<div>Chargement..</div>}>
        <Routes>
          <Route path="/" element={<Home {...cartProps} />} />
          <Route path="/panier" element={<Panier {...totalProps} />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
