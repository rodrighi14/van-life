import React from "react";
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
    return (
        <header>
        <Link className="site-logo" to="/">#VanLife</Link>
        <nav>
          <NavLink to="/host">Host</Link>
          <NavLink to="/about">About</Link>
          <NavLink to="/vans">Vans</Link>
        </nav>
      </header>
    )
}