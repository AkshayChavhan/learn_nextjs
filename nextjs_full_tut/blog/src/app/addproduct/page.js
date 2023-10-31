"use client"

import React, { useState } from 'react';
import classes from "../form.module.css";


function AddProduct() {
    const [form, setForm] = useState({
        name: "",
        price: "",
        brand: "",
        color: ""
    })

    const AddProduct = async () => {
        try {
            const postProductData = await fetch("http://localhost:3000/api/products", {
            method: "POST",
            body: JSON.stringify(form)
        });

        let response = await postProductData.json();
        if (response.success === true) {
            alert("Product added successfully.");
            setForm({
                name: "",
                price: "",
                brand: "",
                color: ""
            })
        }
        } catch (error) {
            alert("Something went wrong.");
        }
    }

    return (
        <>
            <div className={classes.form_modal}>
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
                        onClick={AddProduct}>
                        Add Product
                    </button>
                </div>
            </div>
        </>
    )
}

export default AddProduct