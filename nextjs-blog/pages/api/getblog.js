import * as fs from "fs";
// use below endpoints to test on browser
// http://localhost:3000/api/getblog?slug=learn-css.json

export default function Handler(req,res){
    fs.readFile(`blogdata/${req.query.slug}` , 'utf-8', (err,data) => {
        if(err) res.status(500).json({ error : "No such blog is found."})
        res.status(201).json(JSON.parse(data))
    })
}