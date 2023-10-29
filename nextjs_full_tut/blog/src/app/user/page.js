import Link from "next/link";
import GetUserData from "../../../services/getUserData";

export default async function User() {

  const result = await GetUserData();

  console.log(result);
  return (
    <main>
      <h1>Welcome to the User page</h1>
      {
        result.map( item => {
          return(
            <div key={item.id}>
              <Link href={`user/${item.id}`}>{item.name}</Link>
            </div>
          )
        })
      }
    </main>
  )
}
