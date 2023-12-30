import React from "react";
import { NavLink } from "react-router-dom";
import '../../stylesheets/menu/menu.css';

export function Menu () {
    return(
    <nav id="menu">
    <a class="item"><NavLink id='navlink' to='/'>Inicio</NavLink></a>
    <a class="item"><NavLink id='navlink' to='/testimonio'>Testimonio</NavLink></a>
    <a class="item"><NavLink id='navlink' to='/cards'>Cards</NavLink></a>
    <div class="item">
      Paginas Extras
      <div class="dropdown">  
        <div>
          <a><NavLink id='navlink' to='*'>Error 404</NavLink></a>
        </div>
      </div>
    </div>
    <a class="item">Contact</a>
  </nav>
  )
};