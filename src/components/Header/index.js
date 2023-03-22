import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';

import { Nav } from './styled';

export default function Header() {
  return (
    <Nav>
      <h1>React</h1>
      <div className="right">
        <div className="links">
          <Link to="/alunos">
            <FaHome size={24} />
          </Link>
          <Link to="/register">
            <FaUserAlt size={24} />
          </Link>
          <Link to="/login">
            <FaSignInAlt size={24} />
          </Link>
        </div>
      </div>
    </Nav>
  );
}
