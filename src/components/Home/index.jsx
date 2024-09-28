
import banner from '../../assets/Images/banner-bg.png'; // Ajuste o caminho conforme necessário

const Home = () => {
    return (
        <div className="homepage">
            <div className="banner">
                <div className="container container-banner">
                    <div className="texto-banner">
                        <div className="hero-text">
                            <h1>
                                Toda família 
                                <span className="preto"> merece um Pet!</span>
                            </h1>
                            <p>Transforme sua casa em um lar cheio de amor e alegria!</p>
                            <p>Adote um pet e descubra a felicidade que só um amigo de quatro patas pode trazer.</p>
                            <button className="explore-button">Explore</button>
                        </div>
                        <div className="container-stats">
                            <section className="stats">
                                <div className="stat-item">
                                    <span className="number">97</span>
                                    <p>Esperando um lar</p>
                                </div>
                                <div className="stat-item">
                                    <span className="number">250</span>
                                    <p>Adotados</p>
                                </div>
                                <div className="stat-item">
                                    <span className="number">380</span>
                                    <p>Resgatados</p>
                                </div>
                            </section>
                        </div>
                    </div>
                    <div className="image-banner">
                        <img className="foto-banner" src={banner} alt="Banner" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
