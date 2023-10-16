import { useRouter } from 'next/router'
import styles from '../../styles/Blog.module.css';
import { useEffect, useState } from 'react';


const Slug = () => {

  const [blog, setBlog] = useState([]);
  const router = useRouter()
  useEffect(() => {
    const { slug } = router.query;
    console.log("slug => ", slug);
    if (!router.isReady) return;
    // http://localhost:3000/blogpost/learn-css.json
    fetch(`http://localhost:3000/api/getblog?slug=${slug}.json`)
      .then((item) => item.json())
      .then((data) => setBlog(data));
  }, [router.isReady])


  return (
    <>
      <div className={styles.blogs}>
        <h1>{blog.title}</h1>
        <p>{blog.content}</p>
      </div>
    </>
  )
}

export default Slug;