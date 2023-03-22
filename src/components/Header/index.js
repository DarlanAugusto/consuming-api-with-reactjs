import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';

import { Nav } from './styled';

export default function Header() {
  const botaoClicado = useSelector(
    (state) => state.exampleReducer.botaoClicado
  );

  return (
    <Nav>
      <h1>React</h1>
      <div className="right">
        <div className="links">
          <Link to="/">
            <FaHome size={24} /> Home
          </Link>
          <Link to="/login">
            <FaSignInAlt size={24} /> Login
          </Link>
        </div>

        <div className="user">
          <Link to="/">
            <FaUserAlt />
          </Link>
        </div>
      </div>
      {botaoClicado ? 'Clicado' : 'Não Clicado'}
    </Nav>
  );
}
