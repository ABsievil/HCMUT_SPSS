import React from "react";
import HeaderMain from "../header/HeaderMain";
import Footer from "../footer/Footer";
import Sidebar from "../slidebar/Sidebar"; // Sử dụng Sidebar chung

function Layout({ children }) {

  return (
    <div className="flex overflow-hidden flex-col bg-white">
      <HeaderMain />
      <div className="flex max-md:flex-col">
        <Sidebar />
        <main className="flex flex-col mx-5 w-full max-md:ml-0 max-md:w-full relative">
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
