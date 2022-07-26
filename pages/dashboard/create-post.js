import { useState } from 'react';
import DashboardLayout from '../../component/DashboardLayout';
import styles from "../../styles/CreatePost.module.css"

const CreatePost = () => {
  const [post, setPost] = useState({})
  const handleOnChange = (e) => {
    setPost({
      ...post,
      [e.target.name]: e.target.value,
    })
  }
  return(
  <DashboardLayout>
    <main className={`${styles.post__container} flex`}> 
      <input className={styles.post__title} type="text" name="title" value={post.title} placeholder="Write a title" onChange={handleOnChange}/>
      <textarea className={styles.post__article} type="text" name="article" value={post.article} placeholder="Write an article" onChange={handleOnChange}/>
      <div className={`${styles.footer} flex`}>
        <div className="flex">
          <img src="/happyemoji.png" alt="happy-emoji"/>
          <img src="/video-play.png" alt="happy-emoji"/>
          <img src="/gallery.png" alt="happy-emoji"/>
        </div>
        <button class="btn-primary"> <img src="/send-icon.png"/> Send</button>
      </div>
      
    </main>
  </DashboardLayout>
)};

export default CreatePost;
