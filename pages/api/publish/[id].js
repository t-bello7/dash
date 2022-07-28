import { getSession } from 'next-auth/react';
import prisma from "../../../lib/prisma";

const DEV_TO_BASE_URL = 'https://dev.to/api/articles'
const MEDIUM_BASE_URL = 'https://api.medium.com/v1'
const HASHNODE_BASE_URL = 'https://api.hashnode.com/'

export default async function handle(req, res){
  // const session = await getSession({ req });
  // if (session) {

    const postId = req.query.id

    // addd the sprinkle of pushing the article to various blog platforms
    const post = await prisma.post.update({
        where: {id: Number(postId)},
        data: { publised: true}
    })
    res.json(post)

    
 // } else {
    // res.send({
    //   error: ' You need to be signed in',
    // });
  // }
}
