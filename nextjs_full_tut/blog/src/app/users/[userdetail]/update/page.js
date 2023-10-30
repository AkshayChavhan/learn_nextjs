"use client"

import React, { useEffect, useState } from 'react'

function UpdateUserData({ params }) {
    let msg;
    const userid = params.userdetail;
    const [form, setForm] = useState({
        name: "",
        id: "",
        age: ""
    })

    const submitForm = async () => {
        const updateData = await fetch(`http://localhost:3000/api/users/${userid}`, {
            method: "PUT",
            body: JSON.stringify(form)
        })
        const jsonUpdateDataResponse = await updateData.json();
        if (jsonUpdateDataResponse.status === 200) {
            msg = "User update successfully";
        } else {
            msg = "User update fail"
        }
        alert(msg);
    }

    const getUserData = async () => {
        const response = await fetch(`http://localhost:3000/api/users/${userid}`);
        const jsonResponse = await response.json();
        const data = jsonResponse.result[0];
        setForm({
            name: data.name,
            id: data.id,
            age: data.age
        })
    }

    useEffect(() => {
        getUserData();
    }, [])

    return (
        <>
            <div>
                <h1>Update User Data</h1>
                <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                <input value={form.age} onChange={(e) => setForm({ ...form, age: e.target.value })} />
                <input value={form.id} onChange={(e) => setForm({ ...form, id: e.target.value })} />
                <button onClick={submitForm}>Update</button>
            </div>
        </>
    )
}

export default UpdateUserData