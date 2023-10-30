import React from 'react'


async function getData(id) {
    let result = await fetch(`http://localhost:3000/api/users/${id}`);
    result = await result.json();
    return result;
}


export default async function Userdetail(props) {
    let userdetail = await getData(props.params.userdetail);
    userdetail = userdetail.result;
    console.log("userdetail => ", userdetail);
    return (
        <div>
            <div>userdetail</div>
            {
                userdetail.map(item => {
                    return (
                        <div>
                            <h1>Name :- { item.name }</h1>
                            <h1>Age :- { item.age }</h1>
                        </div>
                    )
                })
            }
        </div>
    )
}
