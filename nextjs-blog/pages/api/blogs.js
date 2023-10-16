import * as fs from "fs";
// use below endpoints to test on browser
// http://localhost:3000/api/blogs

export default async function Handler(req,res){
    let data = await fs.promises.readdir("blogdata/");
    let newData;
    let allblogs = [];
    for(let i=0 ; i < data.length ; i++){
        const item = data[i];
        newData = await fs.promises.readFile((`blogdata/${item}`),'utf-8');
        allblogs.push(JSON.parse(newData));
    }
    res.status(201).json(allblogs);
}