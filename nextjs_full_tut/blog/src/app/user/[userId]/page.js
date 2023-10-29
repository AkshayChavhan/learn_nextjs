import React from 'react'
import GetUserData from '../../../../services/getUserData';

async function Page(props) {
  const result = await GetUserData();
  const userId = props.params.userId;
  const userData = result[userId - 1];
  console.log(userData, userId);
  return (
    <div>
      <h1>User Details</h1>
      <h2>Name : { userData.name}</h2>
      <h2>Username : { userData.username}</h2>
      <h2>Email : { userData.email}</h2>
    </div>
  )
}
export default Page


export async function generateStaticParams() {
  const result = await GetUserData();

  return result.map( user => ({
    userId :  user.id.toString()
  }))
}