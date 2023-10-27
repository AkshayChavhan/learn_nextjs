'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";

const About = () => {

  const router = useRouter();

  return (
    <div>
      <h1>Hello About pages</h1>
      <Link href="/">Go to Homepage</Link>
      <br />
      <Link href="/login">Go to Login</Link>
      <button onClick={() => router.push("/")}>Go to Home page</button>
      <br />
      <button onClick={() => router.push("/login")}>Go to Login page</button>
    </div>
  )
}

export default About;