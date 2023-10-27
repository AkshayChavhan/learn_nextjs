import Button from "./Button";

async function Productlist(){

    let data = await fetch("https://dummyjson.com/products");
    data = await data.json();
    return data.products;
}

export default async function Productlistfromserverside() {
    let product = await Productlist();
    console.log(product);
    return (
        <div>
            <h1>Product List</h1>
            {
                product && product.map((item) => (
                    <div key={item.id}>
                        <h1>Title :- {item.title}</h1>
                        <Button price={item.price}/>
                    </div>
                ))
            }
        </div>
    )
}