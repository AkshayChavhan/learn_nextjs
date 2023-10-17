import { useRouter } from 'next/router'
import styles from '../../styles/Blog.module.css';
import { useEffect, useState } from 'react';


const Slug = (props) => {
  console.log("propssssssssss => ", props);
  const [blog, setBlog] = useState(props.myBlog);

  return (
    <>
      <div className={styles.blogs}>
        <h1>{blog.title}</h1>
        <p>{blog.content}</p>
      </div>
    </>
  )
}

export async function getServerSideProps(context) {
  const { slug } = context.query;
  // http://localhost:3000/blogpost/learn-css.json
  const fetchData = await fetch(`http://localhost:3000/api/getblog?slug=${slug}.json`);
  const myBlog = await fetchData.json();
  console.log("myBlog => ", myBlog);

  return {
    props: { myBlog }
  }
}

export default Slug;