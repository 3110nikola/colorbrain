import React from "react";
import { logo } from "../assets";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

const Navbar = () => {
  const [sideNav, setSideNav] = useState(false);
  sideNav
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "unset");
  return (
    <div className="fixed top-0 left-0 w-full py-4 px-8 md:px-20 md:py-10 bg-green-300/10">
      <div className="container flex justify-between items-center mx-auto">
        <Link to="/">
          <img className="w-32 md:w-40" src={logo} alt="Home page" />
        </Link>
        {sideNav ? (
          <AiOutlineClose
            className="cursor-pointer z-50"
            onClick={() => setSideNav(false)}
            size={32}
          />
        ) : (
          <RxHamburgerMenu
            className="cursor-pointer z-50"
            onClick={() => setSideNav(true)}
            size={32}
          />
        )}
        <div
          className={`${
            sideNav ? "top-0" : "-top-[150%]"
          } overflow-y-scroll z-10 duration-500 left-0 fixed bg-black/90 uppercase items-center justify-center flex flex-col gap-10 text-2xl p-10 box-border w-screen h-screen md:flex-row md:text-4xl`}
        >
          <Link
            className="hover:underline underline-offset-8 decoration-4"
            to="/"
          >
            Home
          </Link>
          <Link
            className="hover:underline underline-offset-8 decoration-4"
            to="/generate"
          >
            Create
          </Link>
          <Link
            className="hover:underline underline-offset-8 decoration-4"
            to="/contact"
          >
            Contact
          </Link>
          <Link
            className="hover:underline underline-offset-8 decoration-4"
            to="/faq"
          >
            FAQ
          </Link>
          <Link
            className="hover:underline underline-offset-8 decoration-4"
            to="/search"
          >
            Seacrh
          </Link>
          <Link
            className="hover:underline underline-offset-8 decoration-4"
            to="/about"
          >
            About
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
