import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams, Outlet, NavLink } from 'react-router-dom';

export default function HostVansDetails() {
    const {id} = useParams()
    const [currentVan, setCurrentVan] = useState(null)
    const style = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
      }

    useEffect(() => {
        fetch(`/api/host/vans/${id}`)
            .then(res => res.json())
            .then(data => setCurrentVan(data.vans))
    }, [id])

    if (!currentVan) {
        return <h1>Loading...</h1>
    }

    return (
        <section>
            <Link
                to=".."
                relative="path"
                className="back-button"
            >&larr; <span>Back to all vans</span></Link>

            <div className="host-van-detail-layout-container">
                <div className="host-van-detail">
                    <img src={currentVan.imageUrl} />
                    <div className="host-van-detail-info-text">
                        <i
                            className={`van-type van-type-${currentVan.type}`}
                        >
                            {currentVan.type}
                        </i>
                        <h3>{currentVan.name}</h3>
                        <h4>${currentVan.price}/day</h4>
                    </div>
                </div>
                <nav className="host-van-detail-nav">
                <NavLink style={({isActive}) => isActive ? style : null} to="." end>Details</NavLink>
                <NavLink style={({isActive}) => isActive ? style : null} to="pricing">Pricing</NavLink>
                <NavLink style={({isActive}) => isActive ? style : null} to="photos">Photos</NavLink>
                </nav>
                <Outlet context={{ currentVan }} />
            </div>
        </section>
    )
}