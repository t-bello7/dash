// import { getSession } from 'next-auth/react';
import prisma from '../../../lib/prisma';

async function handleGET(postId, res) {
  const post = await prisma.post.findUnique({
    where: { id: Number(postId) },
    include: { author: true },
  });
  res.json(post);
}

async function handleDELETE(postId, res) {
  const post = await prisma.post.delete({
    where: { id: Number(postId) },
  });
  res.json(post);
}

async function handleUPDATE(postId, res) {
  res.send({
    content: 'update user ',
  });
}

export default async function handle(req, res) {
// const session = await getSession({ req });
// if (session) {
  // try {
  const { postId } = req.query;

  if (req.method === 'GET') {
    handleGET(postId, res);
  } else if (req.method === 'DELETE') {
    handleDELETE(postId, res);
  } else if (req.method === 'UPDATE') {
    handleUPDATE(postId, res);
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`,
    );
  }

  // }
// else {
  // res.send({
  //   error: ' You need to be signed in',
  // });
  // }
}

// GET /api/post/:id

// DELETE /api/post/:id
