import Layout from "@/modules/common/components/layout/layout";
import "@/styles/globals.scss";
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";
import { useEffect } from "react";
("use client;");

export default function App({ Component, pageProps }) {
  useEffect(() => {
    import("preline");
  }, []);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
