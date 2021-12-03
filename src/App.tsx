import './App.css';
import { FC, useState } from 'react';
import Nav from './components/Nav';
import Home from './components/Home';
import Panier from './components/Panier';
import {
  Routes,
  Route
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
    const newCart = cart.filter(el => el.id !== id);
    setCart(newCart); 
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
      </Routes>
    </div>
  );
}

export default App;
