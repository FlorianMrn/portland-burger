import './App.css';
import { FC, useState } from 'react';
import Nav from './components/Nav';
import Home from './components/Home';
import Panier from './components/Panier';
import Checkout from './components/Checkout';
import {
  Routes,
  Route,
  RouterProps
} from "react-router-dom";


const App: FC = () => {

  const [cart, setCart] = useState<Array<number>>([]);

  const handleAdd = (id: number) => {
    console.log(id)
    setCart(prevState => ([
      ...prevState,
      id
    ]));
  };

  const handleDelete = (id: number) => {

    setCart(prevState => (
      prevState.filter(el => el !== id)
    ))
  }

  const cartProps = {
    setter: handleAdd,
    cart
  };

  const totalProps = {
    setter: handleDelete,
    cart
  };

  return (
    <div className="App">
      <Nav {...cartProps}/>
      <Routes>
        <Route path="/" element={<Home {...cartProps}/>} />
        <Route path="/panier" element={<Panier {...totalProps} />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </div>
  );
}

export default App;
