import * as fs from 'fs';


export default async function handler(req, res) {
    if (req.method === 'POST') {
        const count = await fs.promises.readdir("contactdata");
        const data = await fs.promises.writeFile(`contactdata/${count.length + 1}.json` , JSON.stringify(req.body) , ()=>{})
        console.log(req.body);
        res.status(200).json(["POST ALLBLOG"]);
    } else {
        res.status(200).json(["GET ALLBLOG"])
    }
}