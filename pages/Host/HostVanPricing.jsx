import React from "react";
import { useOutletContext } from 'react-router-dom';


export default function HostVanPricing() {
    const { currentVan } = useOutletContext();

    return (
        <section>
            <h4>{`$ ${currentVan.price}/day`}</h4>
        </section>
     )
}