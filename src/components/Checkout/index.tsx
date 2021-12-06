import { FC, useState } from "react";
import "./checkout.css";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const Checkout: FC = () => {
  const [datas, setDatas] = useState<any>({
    nom: "",
    prenom: "",
    email: "",
    adresse: "",
    cp: "",
    ville: "",
    numero: "",
    expir: "",
    crypt: "",
  });
  let navigate = useNavigate();

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setDatas((prevState: any) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <section className="payment">
      <h1>Procédez au paiement</h1>
      <form>
        <div>
          <label htmlFor="nom">Nom *</label>
          <input
            onChange={handleChange}
            required
            type="text"
            id="nom"
            value={datas.nom}
            name="nom"
          />
        </div>
        <div>
          <label htmlFor="prenom">Prénom *</label>
          <input
            onChange={handleChange}
            required
            type="text"
            id="prenom"
            value={datas.prenom}
            name="prenom"
          />
        </div>
        <div>
          <label htmlFor="email">Email *</label>
          <input
            onChange={handleChange}
            required
            type="email"
            id="email"
            value={datas.email}
            name="email"
          />
        </div>
        <div>
          <label htmlFor="adresse">Adresse *</label>
          <input
            onChange={handleChange}
            required
            type="text"
            id="adresse"
            value={datas.adresse}
            name="adresse"
          />
        </div>
        <div>
          <label htmlFor="cp">Code postal *</label>
          <input
            onChange={handleChange}
            required
            minLength={5}
            maxLength={5}
            type="number"
            id="cp"
            value={datas.cp}
            name="cp"
          />
        </div>
        <div>
          <label htmlFor="ville">Ville *</label>
          <input
            onChange={handleChange}
            required
            type="text"
            id="ville"
            value={datas.ville}
            name="ville"
          />
        </div>
        <div>
          <label htmlFor="numero">Numero de carte *</label>
          <input
            onChange={handleChange}
            minLength={20}
            maxLength={20}
            required
            type="number"
            id="numero"
            value={datas.numero}
            name="numero"
          />
        </div>
        <div>
          <label htmlFor="expir">expir *</label>
          <input
            onChange={handleChange}
            minLength={4}
            maxLength={4}
            required
            type="number"
            id="expir"
            value={datas.expir}
            name="expir"
          />
        </div>
        <div>
          <label htmlFor="crypt">Cryptogramme *</label>
          <input
            onChange={handleChange}
            minLength={3}
            maxLength={3}
            required
            type="number"
            id="crypt"
            value={datas.crypt}
            name="crypt"
          />
        </div>
        <div>
          <button onClick={handleBack} id="back">
            Retour
          </button>
          <button id="pay">
            <Link to="/">Confirmer</Link>
          </button>
        </div>
      </form>
    </section>
  );
};

export default Checkout;
