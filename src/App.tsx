import './App.css';
import { FC } from 'react';
import Nav from './components/Nav';
import Home from './components/Home';
import Panier from './components/Panier';
import {
  Routes,
  Route,
} from "react-router-dom";

const App: FC = () => {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/panier" element={<Panier />} />
      </Routes>
    </div>
  );
}

export default App;
