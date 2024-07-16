import React, { useState } from "react";
import {
  BookOpenIcon,
  Bars3BottomRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import Horario from "./Horario";

const Header = () => {
  let Links = [
    { name: "Servicios", link: "#servicios", key:"1"},
    { name: "Sobre nosotros", link: "#nosotros", key:"2" },
    { name: "Contacto", link: "#contacto", key:"3" },
  ];
  let [open, setOpen] = useState(false);

  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      <Horario />
      <div className="md:flex items-center justify-between bg-white md:px-10 px-7">
        {/* logo section */}

        <div className="font-bold text-2xl cursor-pointer flex items-center">
        <a href="#inicio">
        <img
            src="https://i.postimg.cc/BbByj0hw/output-onlinepngtools.png"
            alt="logo image"
            className="h-16 w-auto"
          />
        </a>
          
        </div>
        {/* Menu icon */}
        <div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-16 cursor-pointer md:hidden w-7 h-7"
        >
          {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
        </div>
        {/* linke items */}
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-12" : "top-[-490px]"
          }`}
        >
          <li className="md:ml-8 md:my-0 my-7 font-semibold">
            <a href="#" className="text-white">Blank</a>
          </li>
          {Links.map((link) => (
            <li className="md:ml-8 md:my-0 my-7 font-semibold" key={link.key}>
              <a
                href={link.link}
                className="text-gray-800 hover:text-blue-400 duration-500"
              >
                {link.name}
              </a>
            </li>
          ))}
          <button className="btn text-white md:ml-8 font-semibold px-3 py-1 rounded duration-500 md:static ml-0">
            {" "}
            <a
              href="tel:+56967511208"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white bg-red-600 rounded-lg border border-white hover:bg-red-900 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6 mr-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                />
              </svg>
              Llamanos ahora
            </a>{" "}
          </button>
        </ul>
        {/* button */}
      </div>
    </div>
  );
};

export default Header;
