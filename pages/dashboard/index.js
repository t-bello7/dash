import DashboardLayout from '../../component/DashboardLayout';
import styles from '../../styles/DashBoardHome.module.css';
import CardItem from '../../component/CardItem';

const DashboardHome = () => {
  return(
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

      <CardItem width="100%">
        I am jjjjjja dashoard, a protected page
      </CardItem>

      <CardItem width="100%">
        Recent Posts
      </CardItem>

      <CardItem width="100%">
        Scheduled Posts
      </CardItem>

    </main>
  </DashboardLayout>
)};
export default DashboardHome;
