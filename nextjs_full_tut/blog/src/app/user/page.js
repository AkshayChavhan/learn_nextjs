import { redirect } from "next/navigation";


export default async function User() {
  // Method 1 to redirection
  redirect("./");  

  return (
    <main>
      <h1>Welcome to the User page</h1>
    </main>
  )
}
