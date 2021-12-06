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
}

interface elementData {
  id: number;
  title: string;
  description: string;
  price: number;
  img: any;
}

const Nav = ({ setter, cart }: cartProps) => {
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    const totalSetter = async () => {
      const datas: datasObject = datasApi;
      const burgers: Array<object> = datas.burgers;
      const sides: Array<object> = datas.sides;
      const boissons: Array<object> = datas.boissons;
      let result: number = 0;

      cart.map((el, index) => {
        function findElement(elem: any) {
          if (elem.id === el) {
            return (result += elem.price);
          }

          return 0;
        }

        burgers.find(findElement);
        sides.find(findElement);
        boissons.find(findElement);
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
