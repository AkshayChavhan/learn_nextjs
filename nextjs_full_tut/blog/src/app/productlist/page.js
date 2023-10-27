'use client'

import { useEffect, useState } from "react";


export default function Productlist() {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const product = await fetch("https://dummyjson.com/products");
            const jsonData = await product.json();
            console.log(jsonData);
            setProduct(jsonData.products);
        }

        fetchData();
    }, [])
    return (
        <div>
            <h1>Product List</h1>
            {
                product && product.map((item) => (
                    <div key={item.id}>
                        <h1>Title :- {item.title}</h1>
                        <h2>Price :- {item.price}</h2>
                    </div>
                ))
            }
        </div>
    )
}