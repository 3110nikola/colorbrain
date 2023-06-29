import { React, useState } from "react";
import { BsFillArrowDownSquareFill } from "react-icons/bs";

export const Question = ({ question, answer }) => {
  const [open, isOpened] = useState(false);

  return (
    <div className="flex flex-col gap-5 border-2 w-full lg:w-1/2 rounded-lg">
      <div
        className="p-4 flex justify-between gap-2 items-center cursor-pointer hover:bg-gray-800 duration-500 rounded-lg"
        onClick={() => isOpened(!open)}
      >
        <span className="text-lg font-extrabold">{question}</span>
        <BsFillArrowDownSquareFill
          size={20}
          className={`${open ? "rotate-180" : "rotate-0"} duration-100`}
        />
      </div>
      <p className={`${open ? "block" : "hidden"} px-4 pb-4`}>{answer}</p>
    </div>
  );
};
