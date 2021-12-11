import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { faUser, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logoLiga from '../assets/static/logoLiga.jpg';
import '../styles/components/Header.css';

const Header = () => {
  const [menu, setMenu] = useState(false);

  return (
    <header>
      <nav>
        <Link to="/" onClick={() => setMenu(false)}>
          <img src={logoLiga} alt="Liga Caucana Ajedrez" />
        </Link>
        <ul className={`menu ${menu ? 'active' : 'inactive'}`}>
          <li className="item">
            <Link to="/create-test" onClick={() => setMenu(false)}>
              Crear Test
            </Link>
            <Link to="/tests" onClick={() => setMenu(false)}>
              Test
            </Link>
            <Link to="/videos" onClick={() => setMenu(false)}>
              Vídeos
            </Link>
          </li>
          <li className="item">
            <Link to="/players" onClick={() => setMenu(false)}>
              Jugadores
            </Link>
          </li>
          <li className="item">
            <Link to="/clasification" onClick={() => setMenu(false)}>
              Clasificación
            </Link>
          </li>
          <li className="item" onClick={() => setMenu(false)}>
            <Link to="/lichess">Datos Lichess</Link>
          </li>
          <li className="item" onClick={() => setMenu(false)}>
            <Link to="/new-tournament">Crear Torneo</Link>
          </li>
          <li className="item" onClick={() => setMenu(false)}>
            <Link to="/adm-players">Adm jugadores</Link>
          </li>
          <li className="item" onClick={() => setMenu(false)}>
            <Link to="/add-session">Sesiones</Link>
          </li>
          <li className="item" onClick={() => setMenu(false)}>
            <Link to="/login">
              <FontAwesomeIcon icon={faUser} />
            </Link>
          </li>
          <li className="toggle">
            <FontAwesomeIcon
              icon={menu ? faTimes : faBars}
              onClick={() => setMenu(!menu)}
            />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
