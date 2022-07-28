import { getSession } from 'next-auth/react';
import prisma from '../../../lib/prisma'

export default async function handle(req, res) {
// const session = await getSession({ req });
// if (session) {
    // try {
    const userId = req.query.userId
    
    if (req.method === 'GET'){
        handleGET(userId, res)
    } else if (req.method === 'DELETE') {
        handleDELETE(userId, res)
    } else if (req.method === 'UPDATE'){
        handleUPDATE(userId, res)
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
async function handleGET(userId, res){
    const user = await prisma.user.findUnique({
        where: { id: Number(userId)},
    })
    res.json(user)
}

// DELETE /api/post/:id 
async function handleDELETE(userId, res){
    const user = await prisma.user.delete({
        where: { id: Number(userId)},
    })
    res.json(user)
}

async function handleUPDATE(userId, res){
    res.send({
              content: 'update user ',
            });
}