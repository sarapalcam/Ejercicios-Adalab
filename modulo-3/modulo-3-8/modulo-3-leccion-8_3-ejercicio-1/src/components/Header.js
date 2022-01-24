import { Link, Router } from 'react-router-dom';

const Header = () => {
  return (
    <header>
     
      <nav>
        <ul>
          <li>
            <Link to="/overview">Overview</Link>
          </li>
          <li>
            <Link to="/repositories">Repositories</Link>
          </li>
          <li>
            <Link to="/packages">Packages</Link>
          </li>
          <li>
            <Link to="/people">People</Link>
          </li>
          <li>
            <Link to="/teams">Teams</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/settings">Settings</Link>
          </li>
        </ul>
      </nav>
      <Router exact path="/settings">
        <p>Zona no apta para manzanas</p>
      </Router>
    </header>
  );
};

export default Header;
