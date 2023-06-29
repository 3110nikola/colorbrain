import React from "react";
import { Link } from "react-router-dom";

export const Button = ({ icon, text, link }) => {
  return (
    <Link
      to={link}
      className="flex items-center p-5 rounded-xl gap-5 bg-green-900 text-white hover:bg-green-900/75 duration-100"
    >
      <img src={icon} className="w-5 md:w-10 invert" />
      <span className="text-white md:text-3xl">{text}</span>
    </Link>
  );
};
