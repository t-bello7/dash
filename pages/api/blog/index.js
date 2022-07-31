import { getSession } from 'next-auth/react';
import prisma from '../../../lib/prisma';
import { encryptToken } from '../../../utils/crypto';

// POST /api/blog
// Fields: title, content, authorEmail
export default async function handler(req, res) {
  // const session = await getSession({ req });
  // if (session) {
  const authorEmail = 'bello4aus@icloud.com';
  const { mediumToken, DevtoToken, hashnodeToken } = req.body;
  let encryptMediumToken = '';
  let encryptHashodeToken = '';
  let encryptdevToken = '';
  if (mediumToken) {
    encryptMediumToken = encryptToken(mediumToken);
  }
  if (DevtoToken) {
    encryptdevToken = encryptToken(DevtoToken);
  }
  if (hashnodeToken) {
    encryptHashodeToken = encryptToken(hashnodeToken);
  }
  try {
    await prisma.BlogTokens.create({
      data: {
        user: { connect: { email: authorEmail } },
        mediumToken: encryptMediumToken,
        DevtoToken: encryptdevToken,
        hashnodeToken: encryptHashodeToken,
      },
    });
    res.status(200).json({ message: 'token successfully added ' });
  } catch (error) {
    res.status(400).json({ error });
  }
  // } else {
  // res.send({
  //   error: ' You need to be signed in',
  // });
  // }
}
