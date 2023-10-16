import { useRouter } from 'next/router'
import styles from '../../styles/Blog.module.css';


const Slug = () => {
  const router = useRouter()
  const { slug } = router.query;

  return (
    <>
      <div className={styles.blogs}>
        <h1>Title of the Post is {slug}</h1>
        <p>HTTP requests allow your front-end application to interact successfully with a back-end server or database.

          One of the five popular HTTP methods for making requests and interacting with your servers is the POST method, which you can use to send data to a server.

          In this article, you will learn the various methods that you can use to send an HTTP POST request to your back-end server in JavaScript. We'll send GET requests to the free JSON Placeholder todos API for this guide.

          There are two built-in JavaScript methods for making an HTTP POST request that don't require the installation of a library or the use of a CDN. These methods are the FetchAPI, based on JavaScript promises, and XMLHttpRequest, based on callbacks.

          There are other methods, such as Axios and jQuery, that you will also learn how to use.</p>
      </div>
    </>
  )
}

export default Slug;