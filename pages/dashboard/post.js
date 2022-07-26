import DashboardLayout from '../../component/DashboardLayout';
import styles from '../../styles/PostPage.module.css'


const PostPage = () => {

  return(
  <DashboardLayout>
    <main className={`${styles.post__container} flex`}> 
    <div>
      <div>
        <div>
          <span>Friday</span>
          <span> 22/1/2022</span>
        </div> 
        <div>
          <div className='flex'>
            <span>
              <img src="/medium-icon.png" alt="medium-icon"/>
              <img src="/hashnode-icon.png" alt="hashnode-icon"/>
            </span>
            <h2>Article title 1</h2>
            <span> 11: 20am </span>
          </div>
          <div className='flex'>
            <span>
              <img src="/hashnode-icon.png" alt="hashnode-icon"/>
            </span>
            <h2>Article title 2</h2>
            <span> 11: 20am </span>
          </div>
          <div className='flex'>
            <span>
              <img src="/medium-icon.png" alt="medium-icon"/>
            </span>
            <h2>Article title 3</h2>
            <span> 11: 20am </span>
          </div>

        </div>
      </div>
      <div>
        <div>
          <span>Friday</span>
          <span> 22/1/2022</span>
        </div> 
        <div>
          <div className='flex'>
            <span>
              <img src="/medium-icon.png" alt="medium-icon"/>
              <img src="/hashnode-icon.png" alt="hashnode-icon"/>
            </span>
            <h2>Article title 1</h2>
            <span> 11: 20am </span>
          </div>
          <div className='flex'>
            <span>
              <img src="/hashnode-icon.png" alt="hashnode-icon"/>
            </span>
            <h2>Article title 2</h2>
            <span> 11: 20am </span>
          </div>
          <div className='flex'>
            <span>
              <img src="/medium-icon.png" alt="medium-icon"/>
            </span>
            <h2>Article title 3</h2>
            <span> 11: 20am </span>
          </div>
      </div>
      </div> 
    </div>   
    </main>
  </DashboardLayout>
)};

export default PostPage;
