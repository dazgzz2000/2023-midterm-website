import { prisma } from "../../../../adapters";
export async function getAllUsers(req, res) {
    console.log("get all user success!");
    const allUsers = await prisma.user.findMany();
    return res.json(allUsers);
}
// export async function getAllUsers(req, res) {
//     return res.json([
//         {
//         id: 1,
//         username: "annie",
//         birthday: "1980-07-19T16:00:00.000Z",
//         },
//         ]);
// }
/**
* @param {import('express').Request} req
* @param {import('express').Response} res
*/
export async function createOneUser(req, res) {
    // console.log(req.httpVersion);
    // console.log(req.headers);
    console.log(req.body);
    console.log(req.body.name);
    if (req.body) {
        const user = await prisma.user.create({ data: { name: req.body.name , image: req.body.image} });
        return res.status(201).json(user);
    } else {
        console.log("NO REQ BODY");
        return res.status(404).send();
    }
}

/**
* @param {import('express').Request} req
* @param {import('express').Response} res
*/
export async function getOneUser(req, res) {
    const id = parseInt(req.params.id);
    if (isNaN(id)) return res.status(400).json({ error: "Invalid id" });
    const user = await prisma.user.findUnique({ where: { id } });
    if (user === null) return res.status(404).json({ error: "Not Found" });
    return res.json(user);
}