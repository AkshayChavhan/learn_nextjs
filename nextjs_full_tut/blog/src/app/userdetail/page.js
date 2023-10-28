import Script from "next/script";


async function FetchData(){
    const response = await fetch("https://dummyjson.com/users");
    const jsonresponse = await response.json();
    return jsonresponse.users;
}

async function Userdetails() {

    let userlist = await FetchData() ;
    userlist = userlist.concat(userlist);
    userlist = userlist.concat(userlist);
    return (
        <div>
            <div>Userlist</div>
            {
                userlist.map((item, index) => {
                    return(
                        <div key={index}> Username : {`${item.firstName} ${item.lastName}`}</div>
                    )
                })
            }
        </div>
    )
}

export default Userdetails