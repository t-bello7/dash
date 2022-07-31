// import { getSession } from 'next-auth/react';
import prisma from '../../../lib/prisma';
import { encryptToken } from '../../../utils/crypto';


export default async function handle(req, res) {
// const session = await getSession({ req });
// if (session) {
  // try {
  const blogId = req.query.blogId;
  if (req.method === 'DELETE') {
    handleDELETE(blogId, res);
  } else if (req.method === 'UPDATE' || req.method === 'PUT') {
    handleUPDATE(blogId, res, req);
  } else if (req.method === 'GET') {
    handleGET(blogId, res);
  }else {
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

async function handleGET(blogId, res) {
  const blogrow = await prisma.BlogTokens.findUnique({
    where: { 
      id: `${blogId}`
    },
  });
  console.log(blogrow);
  res.json(blogrow);
}


async function handleDELETE(blogId, res) {
  const post = await prisma.BlogTokens.delete({
    where: { id:blogId},
  });
  res.json(post);
}


async function handleUPDATE(blogId, res, req) {
  const { mediumToken, DevtoToken, hashnodeToken } = req.body;
  let encryptdevToken
  let encryptHashodeToken
  let encryptMediumToken
  if (mediumToken) {
    encryptMediumToken = encryptToken(mediumToken);
  }
  if (DevtoToken) {
    encryptdevToken = encryptToken(DevtoToken);
  }
  if (hashnodeToken) {
    encryptHashodeToken = encryptToken(hashnodeToken);
  }
  const updatedItem = await prisma.BlogTokens.update({
    where: {
      id: `${blogId}`
    },
    data: {
      hashnodeToken: encryptHashodeToken,
      DevtoToken:  encryptdevToken
    },
  });

  res.json(updatedItem);
} 
