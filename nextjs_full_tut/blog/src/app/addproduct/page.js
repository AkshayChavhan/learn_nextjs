"use client"

import React, { useState } from 'react';
import classes from "../form.module.css";
import { useRouter } from 'next/navigation'

function AddProduct() {
    const router = useRouter();

    const [form, setForm] = useState({
        name: "",
        price: "",
        brand: "",
        color: ""
    })

    const CancelAddProduct = () => {
        setForm({
            name: "",
            price: "",
            brand: "",
            color: ""
        });
        router.push("/products");
    }

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
            router.push("/products");
        } catch (error) {
            alert("Something went wrong.");
        }
    }

    return (
        <>
            <div className={classes.form_modal}>
                <h1>Add Product</h1>
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
                        style={{ margin: "10px" }}
                        className={classes.btn_submit}
                        onClick={AddProduct}>
                        Add Product
                    </button>
                    <button
                        className={classes.btn_submit}
                        onClick={CancelAddProduct}>
                        Cancel
                    </button>
                </div>
            </div>
        </>
    )
}

export default AddProduct