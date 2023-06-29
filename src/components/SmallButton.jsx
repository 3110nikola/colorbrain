import React from "react";

export const SmallButton = ({ icon, text, type, handle }) => {
  return (
    <button
      onClick={handle}
      type={type}
      className="flex justify-center items-center p-3 rounded-xl gap-2 bg-green-900 text-white hover:bg-green-900/75 duration-100"
    >
      <img src={icon} className="w-7 invert" />
      <span className="text-white">{text}</span>
    </button>
  );
};
