import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import styles from '../../styles/Blog.module.css';
import * as fs from "fs";
// Step 1: Find the file corresponding to the slug
// Step 2: Populate them inside the page
const Slug = (props) => {
  console.log("propssssssssss => ", props);
  const [blog, setBlog] = useState(props.myBlog);

  function createMarkup(c) {
    return { __html: c };
  }

  return (
    <>
      <div className={styles.blogs}>
        <h1>{blog.title}</h1>
        {
          blog && 
        <div dangerouslySetInnerHTML={createMarkup(blog.content)}></div>
        }
      </div>
    </>
  )
}

export async function getStaticPaths() {
    return {
        paths: [
            { params: { slug: 'learn-css' } },
            { params: { slug: 'learn-js' } },
            { params: { slug: 'learn-reactjs' } },
        ],
        fallback: true // false or 'blocking'
    };
}

export async function getStaticProps(context) {
    const { slug } = context.params;


    let myBlog = await fs.promises.readFile(`blogdata/${slug}.json`, 'utf-8')

    return {
        props: { myBlog: JSON.parse(myBlog) }, // will be passed to the page component as props
    }
}
export default Slug;