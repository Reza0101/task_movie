import { useState } from "react";
import { NavLink  } from "react-router-dom";
import { FiMenu } from "react-icons/fi";

const Header = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const listMenuLink: { id: number; title: string; route: string }[] = [
    { id: 1, title: "Home", route: "/" },
    { id: 2, title: "Movies", route: "/movies" },
    { id: 3, title: "TV Shows", route: "/tv-shows" },
    { id: 4, title: "Tops IMDB", route: "/top-IMDB" },
  ];

  return (
    <div className="bg-black py-4 px-6 sm:px-14 md:px-28 lg:px-36 flex items-start sm:items-center justify-between w-full">
      <div
        className={`w-full h-[100%] bg-black opacity-[0.5] z-40 absolute top-0 right-0 ${
          showMenu ? "block" : "hidden"
        }`}
        onClick={() => setShowMenu(false)}
      ></div>
      <div className="flex items-center gap-1 md:gap-2">
        <img className="w-10 md:w-16" src="/images/logo.png" alt="logo" />
        <p className="text-white">Website Name</p>
      </div>
      {/* links navbar */}
      <div
        className={`flex fixed sm:translate-x-0 sm:static z-50 transition-all duration-300 top-0 right-0 pt-10 bg-blue-500 sm:h-fit sm:bg-transparent p-5 sm:p-0 h-[100%] flex-col sm:flex-row items-center gap-5 text-white ${
          showMenu ? "translate-x-0" : "translate-x-[100%]"
        }`}
      >
        {/* map link navbar */}
        {listMenuLink.map((link) => (
          <NavLink
            className="hover:text-blue-800 font-bold text-[14px] md:text-[16px] transition-all duration-300"
            key={link.id}
            onClick={() => setShowMenu(false)}
            to={`${link.route}`}
          >
            {link.title}
          </NavLink>
        ))}
      </div>
      {/* icon humburger menu */}
      <div className="sm:hidden" onClick={() => setShowMenu(true)}>
        <FiMenu className="text-white mt-3 text-xl cursor-pointer sm:hidden" />
      </div>
    </div>
  );
};
export default Header;
