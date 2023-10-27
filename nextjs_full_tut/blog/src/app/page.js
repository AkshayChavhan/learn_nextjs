'use client'

import { useRouter } from 'next/navigation'
import styles from "./page.module.css";

export default function Home() {

  const router = useRouter();
  return (
    <main>
      <h1>Welcome to Home Page</h1> {/*  using global css   */}
      <h2 className={styles.header}>Welcome to Home Page</h2>  {/*  using module css   */}
    </main>
  )
}
