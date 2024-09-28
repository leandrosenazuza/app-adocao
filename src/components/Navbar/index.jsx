import { Link } from 'react-router-dom'; 
import logo from '../../assets/Images/logoPata.png'; // Ajuste o caminho conforme necessário

const Navbar = () => {
    return (
        <nav className="navbar">
            <header className="header container">
                <div className="container-nav container">
                    <div className="logo">
                        <img className="logotipo" src={logo} alt="Pata Amada Logo" />
                    </div>
                    <nav>
                        <ul>
                            <li><Link to="/">home</Link></li>
                            <li><Link to="/sobre">sobre nós</Link></li>
                            <li><Link to="/adote">adote um amigo</Link></li>
                            <li><Link to="/doe">doe um pet</Link></li>
                            <li><Link to="/doacao">faça uma doação</Link></li>
                            <li><Link to="/login">Login</Link></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </nav>
    );
}

export default Navbar;
