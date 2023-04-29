import { prisma } from "../../../../adapters";
export async function getAllPosts(req, res) {
    console.log("get all post success!");
    const allPosts = await prisma.post.findMany();
    return res.json(allPosts);
}
export async function posts(req, res) {
    // console.log(req.httpVersion);
    // console.log(req.headers);
    console.log("req", req);
    console.log(req.body);
    console.log(req.body.owner);
    console.log(req.body.text);
    if (req.body) {
        const post = await prisma.post.create({ data: { owner: req.body.owner, text: req.body.text } });
        console.log("SUCCESS to prisma db");
        return res.status(201).json(post);
    } else {
        console.log("NO REQ BODY");
        return res.status(404).send();
    }
}
