import { useEffect, useState, useRef } from "react";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const timeoutRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Support dropdown items
  const supportItems = [
    { label: "Help Center", path: "/support" },
    { label: "Contact Us", path: "/contact" },
  ];

  // ✅ Smooth hover logic
  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setOpenMenu(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenMenu(false);
    }, 150);
  };

  return (
    <nav
      className={`w-full fixed top-0 left-0 z-50 px-6 py-3 flex items-center justify-between transition-all duration-300
      ${
        isScrolled
          ? "bg-white/30 backdrop-blur-md border-b border-gray-200 shadow-sm"
          : "bg-transparent"
      }`}
    >
      {/* LEFT */}
      <div className="flex items-center gap-6">
        <h1
          className="text-xl italic text-black cursor-pointer"
          onClick={() => navigate("/")}
        >
          Artisan Marketplace
        </h1>

        {/* Search */}
        <div className="flex items-center bg-gray-100/80 backdrop-blur rounded-full px-4 py-2 w-[400px]">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="bg-transparent outline-none w-full text-sm"
          />
          <div className="ml-2 bg-pink-500 p-2 rounded-full text-white cursor-pointer">
            <Search size={16} />
          </div>
        </div>
      </div>

      {/* 🔥 MIDDLE MENU */}
      <div className="hidden md:flex items-center gap-6 text-sm font-medium">

        <div onClick={() => navigate("/stories")} className="cursor-pointer text-gray-700 hover:text-black">
          Story
        </div>

        <div onClick={() => navigate("/explore")} className="cursor-pointer text-gray-700 hover:text-black">
          Explore
        </div>

        <div onClick={() => navigate("/gallery")} className="cursor-pointer text-gray-700 hover:text-black">
          Gallery
        </div>

        <div onClick={() => navigate("/trending")} className="cursor-pointer text-gray-700 hover:text-black">
          Trending
        </div>

        <div onClick={() => navigate("/artists")} className="cursor-pointer text-gray-700 hover:text-black">
          Artists
        </div>

        <div onClick={() => navigate("/about")} className="cursor-pointer text-gray-700 hover:text-black">
          About
        </div>

        <div
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="cursor-pointer text-gray-700 hover:text-black">
            Support ▾
          </div>

          {openMenu && (
            <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-xl rounded-xl border border-gray-200 py-2 z-50 animate-fadeIn">
              
              <div
                onClick={() => navigate("/support")}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer transition"
              >
                Help Center
              </div>

              <div
                onClick={() => navigate("/contact")}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer transition"
              >
                Contact Us
              </div>

            </div>
          )}
        </div>

      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-4">
        <button
          className="text-sm font-medium"
          onClick={() => navigate("/signup")}
        >
          Sign up
        </button>

        <button
          className="bg-black text-white px-4 py-2 rounded-full text-sm font-medium hover:opacity-90 transition"
          onClick={() => navigate("/login")}
        >
          Log in
        </button>
      </div>
    </nav>
  );
};

export default Navbar;