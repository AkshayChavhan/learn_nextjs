"use client"

import React from 'react'

function DeleteAction({ id }) {

    const deleteUser = async () => {
        let msg;
        const deleteMethod = await fetch(`http://localhost:3000/api/users/${id}`, {
            method: "delete"
        });
        let result = await deleteMethod.json();
        if (result.status === 200) {
            msg = `User ${id} ${result.message}`;
        } else {
            msg = "Invalid user , something went wrong.";
        }
        alert(msg);
    }

    return (
        <button
            style={{
                padding: "10px",
                margin: "10px"
            }} onClick={deleteUser}>
            DELETE
        </button>
    )
}

export default DeleteAction