import React, { useEffect, useState } from "react";

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsSticky(scrollY > 0); // Đặt isSticky thành true nếu cuộn xuống
      setIsVisible(scrollY === 0); // Ẩn header khi ở đầu trang
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`sticky top-0 z-10 ${isSticky ? "header-transition" : "header-hidden"}`}>
      <div className="flex justify-center items-center w-full h-40 bg-sky-50">
        <div className="bg-[#B7E0FF] w-11/12 flex flex-col md:flex-row justify-between items-center py-3 mt-4">
          <div className="ml-4 md:ml-14 flex items-center">
            <a href="#">
              <img
                className="w-16 h-16 md:w-20 md:h-20 object-cover backdrop-blur-sm"
                src="src/images/hcmut-official-logo-1.png"
                alt="HCMUT Official Logo"
              />
              <h2 className="ml-2 md:ml-4 text-lg md:text-xl font-semibold">
                SPSS
              </h2>
            </a>
          </div>
          <h1 className="text-sky-400 text-xl md:text-3xl font-black font-['Inter'] ml-12">
            KHAI PHÓNG - TIÊN PHONG - SÁNG TẠO
          </h1>
          <button className="bg-[#87CEEB] text-black px-6 py-2 mr-5 rounded-lg hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-opacity-50 transition">
            Đăng nhập
          </button>
        </div>
      </div>
    </div>
  );
}
