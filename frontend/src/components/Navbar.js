import '../styles/navbar.scss'
import logoImg from '../assets/logo.png'

function Navbar(){
    return(
        <nav className="navbar">
            <img src={logoImg} alt="logo-display"/>
            <ul className="nav">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    )
}

export default Navbar;