import "../styles/global.css";
import Navbar from "../components/Navbar/index";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
