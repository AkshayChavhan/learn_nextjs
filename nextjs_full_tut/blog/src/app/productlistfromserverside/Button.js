"use client"


export default function Button(props){
    return(
        <>
        <button onClick={()=>{alert(props.price)}}>Get Price</button>
        </>
    )
}