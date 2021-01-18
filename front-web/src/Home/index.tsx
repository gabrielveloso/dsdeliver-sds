import "./style.css";
import { ReactComponent as MainImage } from "./main.svg";
import Footer from "../Footer";


function Home() {
    return (
        <>
            <div className="home-container">
                <div className="home-content">
                    <div className="home-actions">
                        <h1 className="home-title">
                            Faça seu pedido que entregamos pra você!
                        <br></br>
                        </h1>
                        <h3 className="home-subtitle">
                            Escolha seu pedido em poucos minutos
                        <br />
                        </h3>
                        <a href="orders" className="home-btn-order">
                            FAZER PEDIDO
                    </a>
                    </div>
                    <div className="home-image">
                        <MainImage></MainImage>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}

export default Home;