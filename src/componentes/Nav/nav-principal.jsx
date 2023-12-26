import React from "react";
import { Link } from "react-router-dom";

const links = [
    {
        name:'Inicio',
        href:'/',
    },
    {
        name:'Testimonio',
        href:'/testimonio',
    }
];

const NavBar = () => {
    return<div>
        {links.map(x=> (
            <Link to={x.href}>{x.name}</Link>
        )) }
    </div>
};

export default NavBar;