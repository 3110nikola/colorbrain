import React from "react";
import { comingSoon } from "../assets";

export const ComingSoon = () => {
  return (
    <div
      style={{ backgroundImage: `url(${comingSoon})` }}
      className="bg-contain hover:brightness-125 duration-500 bg-no-repeat bg-center h-52 md:h-96"
    />
  );
};
