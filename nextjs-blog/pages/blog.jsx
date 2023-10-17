import React, { useEffect, useState } from "react";
import styles from "../styles/Blog.module.css";
import Link from "next/link";

export const Blog = (props) => {
  const [blogs, setBlogs] = useState(props.allBlog);
  // console.log("props => " , props);
  return (
    <>
      <div className={styles.blogs}>
        <div  className={styles.blogItem}>
        {blogs && blogs.map((blog , index) => {
          return (
            <div key={index}>
              <Link href={`blogpost/${blog.slug}`}>
                <h3>{blog.title}</h3>
              </Link>
              <p>{blog.content.substring(0,150)}</p>
              </div>
              );
            })}
            </div>
      </div>
    </>
  );
};


export async function getServerSideProps(context){

  const fetchData = await fetch("http://localhost:3000/api/blogs")
  const allBlog = await fetchData.json();

  return {
    props : { allBlog }
  }
}
export default Blog;
