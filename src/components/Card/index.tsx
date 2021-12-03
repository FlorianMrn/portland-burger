import './card.css';

type CardProps = {
    title: string,
    description: string,
    price: number,
    img: string,
    setter: any,
    id: number
}

const Card = ({title, description, price, img, setter, id }: CardProps) => {


    return (
        <div className="card" key={id}>
            <img src={img} alt="Avatar" id="cardImg"/>
            <div className="container">
                <h4><b>{title}</b></h4>
                <p>{description}</p>
                <button onClick={() => setter(id)}>Ajouter</button>
            </div>
        </div>
    )
};

export default Card;