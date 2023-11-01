"use client"
import Link from "next/link";
import { useState } from "react";
import AddUser from "./component/addUser";
import DisplayUser from "./component/displayUser";

export default function Home() {
  const [file, setFile] = useState(null);

  const UploadFile = async(e) => {
    e.preventDefault();
   try {
    const data = new FormData();
    data.set("file" , file);
    const result = await fetch("http://localhost:3000/api/upload",{
      method : "POST",
      body : data
    })
    const jsonResult = await result.json();
    alert(jsonResult.message);
   } catch (error) {
    alert(error);
   }
  }

  return (
    <main>
      <div>
      <h1>Welcome to the Home page</h1>
      <ul>
        <li><Link href="/users">Go to user list</Link></li>
        <li><Link href="/addproduct">Go to Add Product</Link></li>
        <li><Link href="/products">Go to Productlist</Link></li>

        {/* UPLOAD FILE / IMAGE through API */}
        <form onSubmit={UploadFile}>
          <input
            type="file"
            name="file"
            onChange={(e) => { setFile(e.target.files?.[0]) }}
          />
          <button type="submit">Upload File</button>
        </form>
      </ul>
      </div>
      <div>
        <AddUser />
        <DisplayUser />
      </div>
    </main>
  )
}
