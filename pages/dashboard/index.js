import DashboardLayout from '../../component/DashboardLayout';
import styles from '../../styles/DashBoardHome.module.css';
import CardItem from '../../component/CardItem';
import { ApolloClient, InMemoryCache, gql, useMutation } from '@apollo/client/core';

const DashboardHome = ({data}) =>{ 
  console.log(data)
  return (
  <DashboardLayout>
    <main className={styles.home__container}>
      <div className="flex">
        <CardItem>
          hello
        </CardItem>
        <CardItem>
          hello
        </CardItem>
        <CardItem>
          ehllo
        </CardItem>
      </div>

      <CardItem>
        I am jjjjjja dashoard, a protected page
      </CardItem>

      <CardItem>
        Recent Posts
      </CardItem>

      <CardItem>
        Scheduled Posts
      </CardItem>

    </main>
  </DashboardLayout>
)};
export default DashboardHome;


export async function getStaticProps(){
  const client = new ApolloClient ({
    uri: 'https://api.hashnode.com/',
    cache: new InMemoryCache()
  })

  const {data} = await client.query({
    query: gql`
    {
      user(username: "tbello") {
        publication {
          posts(page: 0) {
            title
            brief
            slug
          }
        }
      }
    }


    
    
    `
  })
  console.log('data', data.user.publication.posts)
  return {
    props:{
      data: []
    }
  }
}