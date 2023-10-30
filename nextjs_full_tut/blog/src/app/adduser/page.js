"use client"

import React, { useState } from 'react'

function CreateUser() {

    const [ form , setForm ] = useState({
        name : "",
        id: "",
        age : ""
    })
    console.log(form);
    const CreateNewUser = async () => {
        const postUser = await fetch("http://localhost:3000/api/users" , {
            method : "Post",
            body : JSON.stringify(form)
        });
        let parstPost = await postUser.json();
        alert(parstPost.message)
        console.log(parstPost);

    }
    return (
        <>
            <div>CreateUser</div>
            <input value={form.name} onChange={(e)=>{setForm({...form , name : e.target.value})}} />
            <input value={form.id} onChange={(e)=>{setForm({...form , id : e.target.value})}} />
            <input value={form.age} onChange={(e)=>{setForm({...form , age : e.target.value})}} />
            <button onClick={CreateNewUser}>Add User</button>
        </>

    )
}

export default CreateUser