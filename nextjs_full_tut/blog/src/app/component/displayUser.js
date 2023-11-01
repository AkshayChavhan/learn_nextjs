import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeUser } from '../redux/slice';
import styles from '../table.module.css';


function DisplayUser() {
  const dispatch = useDispatch();
  const datas = useSelector((data) => {
    return data.users
  })

  const DeleteUser = (id) => {
    dispatch(removeUser(id))
  }

  console.log("data new => ", datas);
  return (
    <>
      <table className={styles.maintable}>
        <caption><h1>User List </h1></caption>
        <thead>
          <tr>
            <th className={styles.tableth}>User Name</th>
            <th className={styles.tableth}>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            (datas.length !== 0) ?
              datas.map(item => (
                <tr key={item.id}>
                  <td className={styles.tabletd}>{item.name}</td>
                  <td className={styles.tabletd}>
                    <>
                      <button style={{ padding: "7px", margin: "10px" }} onClick={() => DeleteUser(item.id)}>Delete</button>
                    </>
                  </td>
                </tr>
              )) :
              (
                <tr className={styles.tabletd}>
                  <td colSpan="2">No products available.</td>
                </tr>
              )
          }
        </tbody>
      </table>
    </>
  )
}

export default DisplayUser