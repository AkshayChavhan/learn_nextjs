import * as fs from "fs";
// use below endpoints to test on browser
// http://localhost:3000/api/blogs

export default function Handler(req,res){
    fs.readdir("blogdata/" , (err,data) => {
        console.log(data);
        res.status(201).json(data);
    })
}