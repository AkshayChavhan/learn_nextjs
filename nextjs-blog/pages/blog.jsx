import React, { useEffect, useState } from "react";
import styles from "../styles/Blog.module.css";
import Link from "next/link";

export const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/api/blogs")
      .then((item) => item.json())
      .then((parsedItem) => setBlogs(parsedItem));
  }, []);

  return (
    <>
      <div className={styles.blogs}>
        <div  className={styles.blogItem}>
        {blogs.map((blog , index) => {
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

export default Blog;
