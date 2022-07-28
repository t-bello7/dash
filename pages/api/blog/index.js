
import { getSession } from 'next-auth/react';
import  prisma  from '../../../lib/prisma';

// POST /api/post
// Fields: title, content, authorEmail   
export default async function handler(req, res) {
  // const session = await getSession({ req });
  // if (session) {
  const { mediumToken, devtoToken, hashnodeToken } = req.body;
    // try {
      await prisma.post.create({
        data: {
          author:{ connect: {email: authorEmail}},
          title,
          content,
          scheduleAt
        }
      })
      res.status(200).json({ message: 'post created successfully'})
    // } catch (error){
      // res.status(400).json({error})
    // }
  // } else {
    // res.send({
    //   error: ' You need to be signed in',
    // });
  // }
};
