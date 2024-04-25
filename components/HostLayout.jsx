import React from "react";
import { Outlet, NavLink } from 'react-router-dom';

export default function HostLayout(){
    const style = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
      }

     return (
        <>
        <nav className="host-nav">
            <NavLink style={({isActive}) => isActive ? style : null} to="/host" end>Dashboard</NavLink>
            <NavLink style={({isActive}) => isActive ? style : null} to="/host/income">Income</NavLink>
            <NavLink style={({isActive}) => isActive ? style : null} to="/host/vans">Vans</NavLink>
            <NavLink style={({isActive}) => isActive ? style : null} to="/host/reviews">Reviews</NavLink>
        </nav>
        <Outlet/>
        </>
     )
}