import { FC } from "react";

const Home: FC = () => {

    return (
        <main>
            <div className="card">
                <img src="img_avatar.png" alt="Avatar" id="cardImg"/>
                <div className="container">
                    <h4><b>John Doe</b></h4>
                    <p>Architect & Engineer</p>
                </div>
            </div>
        </main>
    )
};

export default Home;