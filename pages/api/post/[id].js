import { getSession } from 'next-auth/react';
import prisma from '../../../lib/prisma'

export default async function (req, res) {
// const session = await getSession({ req });
// if (session) {
    // try {
    const postId = req.query.postId
    
    if (req.method === 'GET'){
        handleGET(postId, res)
    } else if (req.method === 'DELETE') {
        handleDELETE(postId, res)
    } else if (req.method === 'UPDATE'){
        handleUPDATE(postId, res)
    } 
    else {
        throw new Error (
            `The HTTP ${req.method} method is not supported at this route.`
        )
    }

        // }
// else {
    // res.send({
    //   error: ' You need to be signed in',
    // });
  // }
}

// GET /api/post/:id 
async function handleGET(postId, res){
    const post = await prisma.post.findUnique({
        where: { id: Number(postId)},
        include: { author: true}
    })
    res.json(post)
}

// DELETE /api/post/:id 
async function handleDELETE(postId, res){
    const post = await prisma.post.delete({
        where: { id: Number(postId)},
    })
    res.json(post)
}

async function handleUPDATE(postId, res){
    res.send({
        content: 'update user ',
    });
}