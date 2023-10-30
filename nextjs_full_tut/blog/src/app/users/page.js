import Link from 'next/link';
import React from 'react'


async function getData() {
  let result = await fetch("http://localhost:3000/api/users");
  result = await result.json();
  return result;
}

async function Userlist() {
  const data = await getData();
  return (
    <div>
      <div>Userlist</div>
      {
        data && data.map(item => {
          return (
            <div key={item.key}>
              <Link href={`/users/${item.id}`}>Name : {item.name}</Link>
            </div>
          )
        })
      }
    </div>
  )
}

export default Userlist