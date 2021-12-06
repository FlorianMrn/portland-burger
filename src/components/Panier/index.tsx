import { useState, useEffect } from "react";
import { datasApi } from "../../assets/datas";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import "./panier.css";

type PanierProps = {
  setter: any;
  cart: any;
};

const Panier = (props: PanierProps) => {
  const [datas, setDatas] = useState([]);
  const [total, setTotal] = useState(0);
  let navigate = useNavigate();

  useEffect(() => {
    const setter = () => {
      const allElements = [
        ...Object.values(datasApi)[0],
        ...Object.values(datasApi)[1],
        ...Object.values(datasApi)[2],
      ];
      const array: any = [];
      let totalAmount: number = 0;
      let ids = [...props.cart];

      for (let i = 0; i < ids.length; i++) {
        const qte = props.cart.filter((e: any) => e === ids[i]).length;
        const result = allElements.filter((e) => e.id === ids[i])[0];
        const price = result.price;

        ids = ids.filter((e: any) => e !== ids[i]);
        array.push({
          data: result,
          qte,
        });
        totalAmount += price * qte;
      }
      setDatas(array);
      setTotal(totalAmount);
    };

    setter();
  }, [props.cart]);

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <section id="panier">
      <h1>Récapitulatif de votre commande</h1>
      {datas.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Quantité</th>
              <th>Prix</th>
            </tr>
          </thead>
          <tbody>
            {datas.map((item: any, index: number) => (
              <tr key={index}>
                <td>{item.data.title}</td>
                <td>{item.qte}</td>
                <td>{item.data.price}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td></td>
              <td>Total</td>
              <td>{total} €</td>
            </tr>
          </tfoot>
        </table>
      ) : (
        <div id="advise">Ajoutez vos envies au panier ! :)</div>
      )}

      <div className="checkout">
        <button onClick={handleBack} id="back">
          Retour
        </button>
        {datas.length > 0 && (
          <button id="pay">
            <Link to="/checkout">Payer</Link>
          </button>
        )}
      </div>
    </section>
  );
};

export default Panier;
