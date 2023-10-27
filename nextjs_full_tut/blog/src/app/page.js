'use client'

import Link from 'next/link'
import styles from './page.module.css'
import { useRouter } from 'next/navigation'


export default function Home() {

  const router = useRouter();
  return (
    <main>
      <h1>Welcome to Home Page</h1>

      {/* Linking */}
      <Link href="/login">Go to Login Page</Link>
      <br />
      <Link href="/about">Go to About Page</Link>

      {/* Navigation */}
      <button onClick={() => router.push("/login")}>Go to login page</button>
    </main>
  )
}
