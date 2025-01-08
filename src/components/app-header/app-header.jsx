import { Link } from "react-router-dom";

import './app-header.css';

const AppHeader = () => {
  return (
    <header className="masthead mb-auto">
      <div className="inner">
        <h1 className="masthead-brand">Glovo(not)</h1>
        <nav className="nav nav-masthead justify-content-center">
          <Link className="nav-link" to="/user">
            Menu
          </Link>
          <Link className="nav-link" to="/admin">
            Orders
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default AppHeader;
