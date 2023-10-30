import Link from "next/link";

export default function Home() {

  
  return (
    <main>
      <h1>Welcome to the Home page</h1>
      <Link href="/users">Go to user list</Link>
    </main>
  )
}
