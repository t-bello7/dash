import { useState } from 'react';
import DashboardLayout from '../../component/DashboardLayout';
import styles from '../../styles/CreatePost.module.css';

const CreatePost = () => {
  const [post, setPost] = useState({});
  const handleOnChange = (e) => {
    setPost({
      ...post,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <DashboardLayout>
      <main className={`${styles.post__container} flex`}>
        <input className={styles.post__title} type="text" name="title" value={post.title} placeholder="Write a title" onChange={handleOnChange} />
        <textarea className={styles.post__article} type="text" name="article" value={post.article} placeholder="Write an article" onChange={handleOnChange} />
        <div className={`${styles.footer} flex`}>
          <div className="flex">
            <img src="/happyemoji.png" alt="happy-emoji" />
            <img src="/video-play.png" alt="video-play" />
            <img src="/gallery.png" alt="gallery" />
          </div>
          <button className="btn-primary" type="button">
            {' '}
            <img src="/send-icon.png" alt="send" />
            {' '}
            Send
          </button>
        </div>

      </main>
    </DashboardLayout>
  );
};

export default CreatePost;
