import React from "react";
import { FC } from "react";
import Card from '../Card';
import './home.css';
import { datasApi } from '../../assets/datas';

type HomeProps = {
    setter: any;
    cart: any;
}

const Home = (props:HomeProps) => {

    interface datasObject {
        burgers: Array<object>,
        sides: Array<object>,
        boissons: Array<object>
    };

    interface burger {
        title: string,
        description: string,
        img: any
    }

    const datas: datasObject = datasApi;

    return (
        <main id="homeMain">
            <h1>Les burgers vegans et écologiques nantais</h1>
            <article>
                <h2 className="themeTitle">Les burgers - 10€</h2>
                <div className="containerData">
                    {datas.burgers.map((burger: any, index: number) => (
                        <React.Fragment key={burger.id}>
                            <Card id={burger.id} setter={props.setter} title={burger.title} description={burger.description} price={10} img={burger.img}/>
                        </React.Fragment>
                    ))}
                </div>
            </article>
            <article>
                <h2 className="themeTitle">Les sides - 10€</h2>
                <div className="containerData">
                    {datas.sides.map((side: any, index: number) => (
                        <React.Fragment key={side.id}>
                            <Card id={side.id} setter={props.setter} title={side.title} description={side.description} price={10} img={side.img}/>
                        </React.Fragment>
                    ))}
                </div>
            </article>
            <article>
                <h2 className="themeTitle">Les burgers - 10€</h2>
                <div className="containerData">
                    {datas.boissons.map((boisson: any, index: number) => (
                        <React.Fragment key={boisson.id}>
                            <Card id={boisson.id} setter={props.setter} title={boisson.title} description={boisson.description} price={10} img={boisson.img}/>
                        </React.Fragment>
                    ))}
                </div>
            </article>
        </main>
    )
};

export default Home;