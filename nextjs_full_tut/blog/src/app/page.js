import Link from "next/link";

export default function Home() {


  return (
    <main>
      <h1>Welcome to the Home page</h1>
      <ul>
        <li><Link href="/users">Go to user list</Link></li>
        <li><Link href="/addproduct">Go to Add Product</Link></li>
        <li><Link href="/products">Go to Productlist</Link></li>
      </ul>
    </main>
  )
}
