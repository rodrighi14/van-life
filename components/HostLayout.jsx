import React from "react";
import {Link, Outlet, NavLink} from 'react-router-dom';

export default function HostLayout(){
    const style = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
      }

     return (
        <>
        <nav className="host-nav">
            <NavLink style={({isActive}) => isActive ? style : null} to="/host">Dashboard</NavLink>
            <NavLink style={({isActive}) => isActive ? style : null} to="/host/income">Income</NavLink>
            <NavLink style={({isActive}) => isActive ? style : null} to="/host/reviews">Reviews</NavLink>
        </nav>
        <Outlet/>
        </>
     )
}