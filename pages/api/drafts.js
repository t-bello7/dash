import { getSession } from 'next-auth/react';
import prisma from "../../lib/prisma";

export default async function handle( req, res) {
    // const session = await getSession({ req });
  // if (session) {
    const posts = await prisma.post.findMany({
        where: { published: false},
        include: { author: true},
    })
    res.json(posts)
      // } else {
    // res.send({
    //   error: ' You need to be signed in',
    // });
  // }
}