import { prisma } from "../../../../adapters";
export async function deletepost(req, res) {
    console.log("delete post!");
    console.log(req.headers);
    console.log(req.params);
    console.log(req.body);
    if (req.body) {
        let i = parseInt(req.body.id, 10);
        console.log(i);
        const allPosts = await prisma.post.delete({
            where: { id: i },
          });
        return res.json(allPosts);
    } else {
        console.log("NO REQ BODY");
        return res.status(404).send();
    }
}