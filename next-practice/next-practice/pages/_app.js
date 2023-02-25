import "../styles/globals.css";
import Layout from "@/components/layout/layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      {/* props.children이 있어서 넣을 수 있음 */}
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
