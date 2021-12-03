import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as ShoppingCart } from "../../assets/icons/shopping-cart-solid.svg";
import { ReactComponent as Burger } from "../../assets/icons/hamburger-solid.svg";
import "./nav.css";
import { datasApi } from "../../assets/datas";

type cartProps = {
  setter: any;
  cart: Array<{}>;
};

interface datasObject {
  burgers: Array<object>;
  sides: Array<object>;
  boissons: Array<object>;
  filter: any;
}

const Nav = ({ setter, cart }: cartProps) => {
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    const totalSetter = async () => {
      const datas: datasObject = datasApi;
      let result: number = 0;

      cart.map((el: number, index) => {
        console.log(datas.sides.find((d) => d.id === el) === undefined);

        let burgerPrice: number =
          datas.burgers.find((d) => d.id === el) === undefined
            ? 0
            : datas.burgers.find((d) => d.id === el).price;
        let sidesPrice: number =
          datas.sides.find((d) => d.id === el) === undefined
            ? 0
            : datas.sides.find((d) => d.id === el).price;
        let boissonsPrice: number =
          datas.boissons.find((d) => d.id === el) === undefined
            ? 0
            : datas.boissons.find((d) => d.id === el).price;

        let totalPrice: number = burgerPrice + sidesPrice + boissonsPrice;

        return (result += totalPrice);
      });

      setTotal(result);
    };

    totalSetter();
  }, [cart]);

  console.log("wesh", cart);

  const MyTabs = () => {
    return (
      <div className="itemsContainer">
        <NavLink to="/" className="itemsContainer-item">
          <Burger />
        </NavLink>
        <NavLink to="/panier" className="itemsContainer-item">
          <ShoppingCart />
          <span id="shoppingAmount">{total}€</span>
        </NavLink>
      </div>
    );
  };

  return (
    <nav className="navContainer">
      <h2>Portland Burger</h2>
      <MyTabs />
    </nav>
  );
};

export default Nav;
