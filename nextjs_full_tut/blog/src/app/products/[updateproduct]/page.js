"use client"

import React, { useEffect, useState } from 'react'
import classes from "../../form.module.css";
import { useRouter } from 'next/navigation'

function UpdateProduct({ params }) {

    const router = useRouter();
    const { updateproduct } = params;
    const [form, setForm] = useState({
        name: "",
        brand: "",
        price: "",
        color: ""
    })

    const submitForm = async () => {
        try {
            const getProductData = await fetch(`http://localhost:3000/api/products/${updateproduct}`, {
                method: "PUT",
                body: JSON.stringify(form)
            });
            const jsonProductData = await getProductData.json();
            alert(jsonProductData.message);
            router.push("/products");
        } catch (error) {
            alert("Error Found as " + error);
        }
    }

    const CancelAddProduct = () => {
        setForm({
            name: "",
            price: "",
            brand: "",
            color: ""
        });
        router.push("/products");
    }

    const GetProductDetails = async () => {
        const getProductData = await fetch(`http://localhost:3000/api/products/${updateproduct}`);
        const jsonProductData = await getProductData.json();
        const result = jsonProductData.result;
        setForm({
            name: result.name,
            brand: result.brand,
            price: result.price,
            color: result.color
        })
    }

    useEffect(() => {
        GetProductDetails()
    }, [])

    return (
        <>
            <div>
                <div className={classes.form_modal}>
                    <h1>Edit Product Details</h1>
                    <div className={classes.form_section}>
                        <label className={classes.form_label}>Name of Product</label>
                        <input
                            className={classes.form_input}
                            placeholder='Enter product name'
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                        />
                    </div>
                    <div className={classes.form_section}>
                        <label className={classes.form_label}>Price of Product</label>
                        <input
                            className={classes.form_input}
                            placeholder='Enter product price'
                            value={form.price}
                            onChange={(e) => setForm({ ...form, price: e.target.value })}
                        />
                    </div>
                    <div className={classes.form_section}>
                        <label className={classes.form_label}>Brand of Product</label>
                        <input
                            className={classes.form_input}
                            placeholder='Enter product brand'
                            value={form.brand}
                            onChange={(e) => setForm({ ...form, brand: e.target.value })}
                        />
                    </div>
                    <div className={classes.form_section}>
                        <label className={classes.form_label}>Color of Product</label>
                        <input
                            className={classes.form_input}
                            placeholder='Enter product color'
                            value={form.color}
                            onChange={(e) => setForm({ ...form, color: e.target.value })}
                        />
                    </div>
                    <div className={classes.btn_section}>
                        <button
                            className={classes.btn_submit}
                            onClick={submitForm}>
                            Update
                        </button>
                        <button
                            className={classes.btn_submit}
                            onClick={CancelAddProduct}>
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UpdateProduct;