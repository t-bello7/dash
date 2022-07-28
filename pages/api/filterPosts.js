import prisma from '../../lib/prisma'

export default async function handle(req, res){
    const { searchString } = req.query
    const resultPosts = await prisma.post.findMany({
        where: {
            OR: [
                {
                    title:  { contains: Array.isArray(searchString) ? searchString[0] : searchString}
                },
                {
                    content: { contains: Array.isArray(searchString) ? searchString[0] : searchString}
                }
            ]
        }
    })
    res.json(resultPosts);
}