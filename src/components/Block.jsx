import React from "react";
import { TypeAnimation } from "react-type-animation";
import TrackVisibility from "react-on-screen";
import { Link } from "react-router-dom";

const Block = ({ text1, text2, text3, image, toLeft, link }) => {
  const TrackImage = ({ isVisible }) => {
    const style = {
      opacity: isVisible ? "1" : "0.5",
    };
    return (
      <img style={style} className="mx-auto w-full duration-500" src={image} />
    );
  };
  return (
    <div
      className={`flex items-center justify-center mx-auto gap-20 flex-col py-10 md:px-40 container ${
        toLeft ? "lg:flex-row-reverse" : "lg:flex-row"
      }`}
    >
      <div className="basis-1/2 flex flex-col gap-5">
        <TypeAnimation
          className="text-xl md:text-3xl text-center"
          sequence={[
            text1,
            1000,
            text2,
            2000,
            () => {
              console.log("Sequence completed");
            },
          ]}
          wrapper="span"
          cursor={true}
          repeat={Infinity}
        />
        <p className="text-white">{text3}</p>
        {link && (
          <Link to={link} className="hover:underline">
            Read More
          </Link>
        )}
      </div>
      <div className="basis-1/2">
        <TrackVisibility once>
          <TrackImage />
        </TrackVisibility>
      </div>
    </div>
  );
};

export default Block;
