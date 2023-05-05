import React from "react"
import { useState } from "react";
import { commerce } from "../commerce"
import { useEffect } from "react";
// import { Link } from "react-router-dom"

const Shop = (Products) => {
    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        const response = await commerce.products.list();
        setProducts((response && response.data) || [])
    }
    useEffect(() => {
        fetchProducts()
    }, []);
    console.log({ products })
    return (
        <div>
            <h3>Welcome To The Shop</h3>
            <div id="products">

            </div>
        </div>
    )
}

export default Shop;