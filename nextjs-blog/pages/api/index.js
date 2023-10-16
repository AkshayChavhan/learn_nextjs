export default function Handler(req,res){

    console.log(req);
    res.status(201).json({ name : "Akshay CHavhan"})
}