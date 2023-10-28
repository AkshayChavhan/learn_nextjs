
export default function User() {

  return (
    <main>
      <h1>Welcome to the User page</h1>
    </main>
  )
}

// this is DYNAMIC METADATA as it is apply only on /user route
export function generateMetadata(){
  return {
    title : 'User Page Title' ,
    description : "User page description"
  }
}
