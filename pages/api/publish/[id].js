// import { getSession } from 'next-auth/react';
import axios from 'axios';
import prisma from '../../../lib/prisma';
import { decryptToken } from '../../../utils/crypto';

const DEVTO_BASE_URL = 'https://dev.to/api/articles';
const MEDIUM_BASE_URL = 'https://api.medium.com/v1';
const HASHNODE_BASE_URL = 'https://api.hashnode.com/';

export default async function handle(req, res) {
  // const session = await getSession({ req });
  // if (session) {

  const postId = req.query.id;

  const post = await prisma.post.update({
    where: { id: postId },
    data: { published: true },
  });

  const user = await prisma.user.findUnique({
    where: { id: post.authorId },
    include: { blogs: true },
  });

  const mediumToken = decryptToken(user.blogs[0].mediumToken);
  const devtoToken = decryptToken(user.blogs[0].DevtoToken);
  const hashnodeToken = decryptToken(user.blogs[0].hashnodeToken);

  async function postToMedium(post) {
    const responseId = await axios(`${MEDIUM_BASE_URL}/me`, {
      headers: {
        Authorization: `Bearer ${mediumToken}`,
      },
    });

    const responsePost = await axios.post(`${MEDIUM_BASE_URL}/users/${responseId.data.data.id}/posts`, {
      title: post.title,
      contentFormat: 'markdown',
      content: post.content,
      publishStatus: 'public',
    },
    {
      headers: {
        Authorization: `Bearer ${mediumToken}`,
      },
    });
    return responsePost.data;
  }
  async function postToHashnode(post) {
    const response = await axios.post(HASHNODE_BASE_URL, {
      query:
          'mutation createStory($input: CreateStoryInput!) { createStory(input: $input){ code success message}}',
      variables: {
        input: {
          title: post.title,
          contentMarkdown: post.content,
          tags: [
            {
              _id: '34f44443dd3332r',
            },
          ],
        },
      },
    },
    {
      headers: {
        Authorization: hashnodeToken,
      },
    });
    return response;
  }
  async function postToDev(post) {
    const response = await axios.post(DEVTO_BASE_URL, {
      article: {
        title: post.title,
        published: post.published,
        body_markdown: post.content,
      },
    },
    {
      headers: {
        'Content-type': 'application/json',
        'api-key': `${devtoToken}`,
      },
    });

    return response;
  }

  if (hashnodeToken) {
    postToHashnode(post).then((res) => res.data).catch((status) => status);
  }
  if (mediumToken) {
    postToMedium(post).then((res) => res.data).catch((status) => status);
  }
  if (devtoToken) {
    postToDev(post).then((res) => res.data).catch((status) => status);
  }
  res.json(post);
  // } else {
  // res.send({
  //   error: ' You need to be signed in',
  // });
  // }
}
