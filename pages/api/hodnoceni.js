

export default function handler(req, res){

    console.log(req);
    console.log(JSON.parse(req.body));
    res.status(201).send("OK");
}