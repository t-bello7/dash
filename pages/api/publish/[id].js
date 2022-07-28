import { getSession } from 'next-auth/react';
import prisma from "../../../lib/prisma";
import axios from 'axios';

const DEVTO_BASE_URL = 'https://dev.to/api/articles'
const MEDIUM_BASE_URL = 'https://api.medium.com/v1'
const HASHNODE_BASE_URL = 'https://api.hashnode.com/'

export default async function handle(req, res){
  // const session = await getSession({ req });
  // if (session) {

    const postId = req.query.id

    const post = await prisma.post.update({
        where: {id: Number(postId)},
        data: { publised: true}
    })
    res.json(post)
    // addd the sprinkle of pushing the article to various blog platforms
    // -- >get post data with id 

    // -- >check connected blogs 
    // -- >for each of the blog write thier various post request 
    // medium 

    function postToMedium () {
      return axios.post(MEDIUM_BASE_URL, post )
    }
    function postToHashnode () {
      return axios.post(HASHNODE_BASE_URL, post )
    }
    function postToDev () {
      return axios.post(DEVTO_BASE_URL, post )
    }
    Promise.all([postToMedium(), postToHashnode(), postToDev()])
    .then((res) => {
      console.log(res[0], res[1], res[2])
    })
    .catch((e) => console.log(e))
    
 // } else {
    // res.send({
    //   error: ' You need to be signed in',
    // });
  // }
}
