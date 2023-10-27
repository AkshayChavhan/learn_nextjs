'use client'

import { useRouter } from 'next/navigation'


export default function Home() {

  const router = useRouter();
  return (
    <main>
      <h1>Welcome to Home Page</h1>

      <button onClick={() => router.push("/productlist")}>Go to Product List</button>
    </main>
  )
}
