import React from "react";
import {Link, outlet} from 'react-router-dom';

export default function Host(){
     return (
        <>
        <nav className="host-nav">
            <Link to="/host">Dashboard</Link>
            <Link to="/host/income">Income</Link>
            <Link to="/host/reviews">Reviews</Link>
        </nav>
        <outlet/>
        </>
     )
}