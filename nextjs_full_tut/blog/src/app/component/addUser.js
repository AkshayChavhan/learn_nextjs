import React, { useState } from 'react'
import { addUser } from '../redux/slice';
import { useDispatch } from 'react-redux';
import Link from 'next/link';

function AddUser() {

    const dispatch = useDispatch();
    const [name, setName] = useState("");

    const createUser = () => {
        dispatch(addUser(name));
    }


    return (
        <div>
            <h1>Add User</h1>
            <input
                placeholder='please enter the username...'
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button onClick={createUser}>Add User</button>
            <Link href="/userlist">Go to List</Link>
        </div>
    )
}

export default AddUser