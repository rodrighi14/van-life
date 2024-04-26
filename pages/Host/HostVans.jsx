import React from "react";
import { useEffect, useState } from "react";

export default function HostVans() {
    const [vans, setVans] = useState([]);

    useEffect(() => {
        fetch(api/host/vans)
            .then(res => res.json)
            .then(data => setVans(data.vans))
    }, [])

    const VanElements = vans.map((van) => {
        <div key={van.id}>
            <img src={van.imageUrl} aria-label={`View details for ${van.name}, priced at $${van.price} per day`}/>
            <h3>{van.name}</h3>
            <p>{van.price}</p>
        </div>
    })

    return (
        <div>
        <h1>Your listed vans</h1>
        {VanElements}
        </div>
    )
}