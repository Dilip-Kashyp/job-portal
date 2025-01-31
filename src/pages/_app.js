import "../styles/_colour.module.scss"
import "@/styles";

export default function App({ Component, pageProps }) {
  const getLayout = Component?.getLayout ?? ((page) => page);
  return <>{getLayout(<Component {...pageProps} />)}</>;
}
