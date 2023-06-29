import React from "react";

export const TeamSlide = ({ image, name, position, text }) => {
  return (
    <div className="flex w-full flex-col md:flex-row md:items-center gap-10 box-border px-10 md:px-20">
      <img src={image} className="w-40" />
      <div className="flex flex-col gap-5">
        <div>
          <h1 className="text-3xl">{name}</h1>
          <h1 className="text-xl text-white">{position}</h1>
        </div>
        <p className="text-white text-justify text-lg">{text}</p>
      </div>
    </div>
  );
};
