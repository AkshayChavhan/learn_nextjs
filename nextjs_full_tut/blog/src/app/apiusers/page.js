"use client"

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchApiUsers } from '../redux/slice';

function ApiUsersData() {
  const dispatch = useDispatch();
  const userApiData = useSelector((data) => {
    return data.userData.userApiData;
  })

  // console.log("userApiData => ", userApiData);

  useEffect(() => {
    dispatch(fetchApiUsers())
  }, [])

  return (
    <>
      <h1>Fetch User data Using API through REDUX</h1>
      {/* <button
        onClick={() => { dispatch(fetchApiUsers()) }}
      >Load User
      </button> */}
      
      <ul>
        {
          (userApiData.length != 0) ?
            (userApiData.map((item) => {
              return (
                <li key={item.id}>{item.name}</li>
              )
            })) :
            <p>No User Fetched/Available</p>
        }
      </ul>
    </>
  )
}

export default ApiUsersData