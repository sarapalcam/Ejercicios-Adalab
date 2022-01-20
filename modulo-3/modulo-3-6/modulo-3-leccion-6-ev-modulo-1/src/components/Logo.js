import '../styles/components/Logo.scss';
import logo from '../images/adalab-logo-155x61.png';

const Logo = () => {
    return <a href="https://adalab.es/" target="_blank" rel="noreferrer">
        <img
        src={logo} 
        alt="Logo de Adalab"
        className="logo"
        title="Logo Adalab"
    /></a>
}

export default Logo;