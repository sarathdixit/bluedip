import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import Brand from "../brand/brand";

export default function Layout({ children }) {
  return (
    <div>
      <div className="fixed top-0 h-[72px] w-full z-20">
        <Header />
      </div>
      <div className="min-h-[100vh] pt-[72px]">{children}</div>
      {/* <Brand /> */}
      <Footer />
    </div>
  );
}
