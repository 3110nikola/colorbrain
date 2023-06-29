import React from "react";
import { Footer } from "../components/Footer";
import Navbar from "../components/Navbar";
import { ComingSoon } from "../components/ComingSoon";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import { TypeAnimation } from "react-type-animation";

export const LogoBot = () => {
  document.title = "LogoBot | ColorBrain";
  scrollTo(0, 0);
  return (
    <div>
      <div className="my-36">
        <ComingSoon />
      </div>
      <div className="px-10 md:px-20 py-20 bg-gray-800 flex flex-col gap-5">
        <h1 className="text-2xl md:text-4xl text-center">
          Welcome to the Future:
        </h1>
        <h2 className="text-lg md:text-2xl text-center text-white">
          Crack the Code of Conversations: LogoBot Puts Sherlock Holmes to
          Shame!
        </h2>
        <div className="container flex flex-col gap-10 mx-auto text-white my-10">
          <div className="flex flex-col md:flex-row gap-5 md:gap-10 items-start">
            <p className="md:text-xl basis-1/2">
              LogoBot will be able to transcribe speech into text and translate
              many languages into English.
            </p>
            <div className="bg-black border-2 p-2 flex flex-col gap-5 basis-1/2">
              <div className="py-5">
                <p>
                  <b>User:</b>
                </p>
                <ReactPlayer
                  controls
                  width="100%"
                  height="50px"
                  url="/micro-machine.mp3"
                />
              </div>
              <div className="text-green-500">
                <p>
                  <b>LogoBot:</b>
                </p>
                <TypeAnimation
                  className="whitespace-pre-wrap"
                  sequence={[
                    "This is the Micro Machine Man presenting the most midget miniature motorcade of Micro Machines. Each one has dramatic details, terrific trim, precision paint jobs, plus incredible Micro Machine Pocket Play Sets. There's a police station, fire station, restaurant, service station, and more. Perfect pocket portables to take any place. And there are many miniature play sets to play with, and each one comes with its own special edition Micro Machine vehicle and fun, fantastic features that miraculously move. Raise the boatlift at the airport marina. Man the gun turret at the army base. Clean your car at the car wash. Raise the toll bridge. And these play sets fit together to form a Micro Machine world. Micro Machine Pocket Play Sets, so tremendously tiny, so perfectly precise, so dazzlingly detailed, you'll want to pocket them all. Micro Machines are Micro Machine Pocket Play Sets sold separately from Galoob. The smaller they are, the better they are.",
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
        <Link
          to="/future"
          className="text-center hover:underline md:text-3xl underline-offset-8"
        >
          &#8592; See what's also coming soon
        </Link>
      </div>
      <Footer />
      <Navbar />
    </div>
  );
};
