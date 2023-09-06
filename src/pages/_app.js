import Layout from "@/modules/common/components/layout/layout";
import "@/styles/globals.scss";
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
