"use client"
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeUser } from '../redux/slice'

function UserList() {
    const dispatch = useDispatch()
    const datas = useSelector((data) => {
        return data.userData.users
    })

    const handleDelete = (id) => {
        dispatch(removeUser(id))
    }

    console.log("datas => ", datas)
    return (
        <>
            <div>UserList</div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {(datas.length !== 0) ?
                        datas.map((item) => <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>
                                    <>
                                        <button onClick={() => handleDelete(item.id)}>Delete</button>
                                    </>
                                </td>
                            </tr>
                        ) :
                        (<tr><td colSpan={2}> No User Available</td></tr>)}
                </tbody>
            </table>
        </>
    )
}

export default UserList