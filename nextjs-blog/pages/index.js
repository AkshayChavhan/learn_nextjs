import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';


export default function Home() {
  return (
    <div className={styles.container}>
      <style jsx>{``}
      </style>
      <Head>
        <title>Coder Hunder</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="keywords" content='nextjs , hunting coder blog , hunting coder' />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.mainContainer}>
        <h1 className={styles.title}>
          Coding Hunter
        </h1>
          <Image className={styles.mainImage} src='/home.avif' alt='coder image' width={250} height={150}/>
        <p className={styles.description}>
          A coding hunter for the coders
        </p>


        <div className={styles.blogs}>
          <h2>Popular Blogs</h2>
          <div className={styles.blogItem}>
            <h3>How to learn Javascript in 2023 ?</h3>
            <p>dffbu we fiweufbe ewfbwiefbf wefbiufbewfeu fewfibfweufbwe feiwfbeufbeuifbewjdffbu we fiweufbe ewfbwiefbf wefbiufbewfeu fewfibfweufbwe feiwfbeufbeuifbewj</p>
          </div>
          <div className={styles.blogItem}>
            <h3>How to learn Javascript in 2023 ?</h3>
            <p>dffbu we fiweufbe ewfbwiefbf wefbiufbewfeu fewfibfweufbwe feiwfbeufbeuifbewjdffbu we fiweufbe ewfbwiefbf wefbiufbewfeu fewfibfweufbwe feiwfbeufbeuifbewj</p>
          </div>
          <div className={styles.blogItem}>
            <h3>How to learn Javascript in 2023 ?</h3>
            <p>dffbu we fiweufbe ewfbwiefbf wefbiufbewfeu fewfibfweufbwe feiwfbeufbeuifbewjdffbu we fiweufbe ewfbwiefbf wefbiufbewfeu fewfibfweufbwe feiwfbeufbeuifbewj</p>
          </div>
          <div className={styles.blogItem}>
            <h3>How to learn Javascript in 2023 ?</h3>
            <p>dffbu we fiweufbe ewfbwiefbf wefbiufbewfeu fewfibfweufbwe feiwfbeufbeuifbewjdffbu we fiweufbe ewfbwiefbf wefbiufbewfeu fewfibfweufbwe feiwfbeufbeuifbewj</p>
          </div>

        </div>
      </main>

      <footer>
      
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family:
            Menlo,
            Monaco,
            Lucida Console,
            Liberation Mono,
            DejaVu Sans Mono,
            Bitstream Vera Sans Mono,
            Courier New,
            monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family:
            -apple-system,
            BlinkMacSystemFont,
            Segoe UI,
            Roboto,
            Oxygen,
            Ubuntu,
            Cantarell,
            Fira Sans,
            Droid Sans,
            Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
