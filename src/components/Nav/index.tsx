import { FC, useState } from "react";
import { NavLink } from 'react-router-dom';
import { ReactComponent as ShoppingCart} from '../../assets/icons/shopping-cart-solid.svg';
import { ReactComponent as Burger} from '../../assets/icons/hamburger-solid.svg';
import './nav.css'

const Nav: FC = () => {

    const MyTabs = () => {
        return (
            <div className="itemsContainer">
                <NavLink to="/"  className="itemsContainer-item"><Burger /></NavLink>
                <NavLink to="/panier"  className="itemsContainer-item" >
                    <ShoppingCart />
                    <span id="shoppingAmount">16€</span>
                </NavLink>
            </div>
        );
      }

    return (
        <nav className="navContainer">
            <h2>Portland Burger</h2>
            <MyTabs />
        </nav >
    )
}

export default Nav;