import { Route } from "react-router-dom";
import PropTypes from 'prop-types';

function HeaderAdalab(props) {
  return (
    <header className="header">
      <h1 className="title--big">{props.text}</h1>
      <a
        className="header--logo"
        href="https://github.com/Adalab/ejercicios-en-clase-o/"
        title="Ir al repo del ejercicio"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src="https://raw.githubusercontent.com/Adalab/resources/master/images/adalab-logo-32x32.png"
          alt="Adalab logo"
        />
      </a>
      <Route exact path="/about-us">
        <p>Estás en about us</p>
      </Route>
    </header>
  );
}

HeaderAdalab.defaultProps = {
  text: 'Adalab (título por defecto)'
};

HeaderAdalab.propTypes = {
  text: PropTypes.string.isRequired
};

export default HeaderAdalab;
