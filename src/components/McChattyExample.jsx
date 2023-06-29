import React from "react";
import { TypeAnimation } from "react-type-animation";

export const McChattyExample = ({
  heading,
  description,
  userInput,
  aiAnswer,
}) => {
  return (
    <div className="container flex flex-col gap-10 mx-auto text-white my-10">
      <h1 className="text-lg md:text-3xl text-center">{heading}</h1>
      <div className="flex flex-col md:flex-row gap-5 md:gap-10">
        <p className="md:text-xl basis-1/3">{description}</p>
        <div className="bg-black border-2 p-2 flex flex-col gap-5 basis-2/3">
          <p className="whitespace-pre-wrap break-words">
            <b>User:</b>
            <br />
            {userInput}
          </p>
          <div className="text-green-500">
            <p>
              <b>McChatty:</b>
            </p>
            <TypeAnimation
              className="whitespace-pre-wrap"
              sequence={[
                aiAnswer,
                1000,
                () => {
                  console.log("Sequence completed");
                },
              ]}
              wrapper="span"
              cursor={true}
              repeat={0}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
