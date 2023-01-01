import DashboardLayout from '../component/DashboardLayout';
import styles from '../styles/DashBoardHome.module.css';
import CardItem from '../component/CardItem';

const DashboardHome = () => (
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
);
export default DashboardHome;
