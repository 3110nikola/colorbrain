import React from "react";
import { Footer } from "../components/Footer";
import Navbar from "../components/Navbar";
import { ComingSoon } from "../components/ComingSoon";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";

export const Melodroid = () => {
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
          Your Robotic Maestro Unveiled: Melodroid, the Gateway to Musical
          Wonders!
        </h2>
        <div className="container flex flex-col gap-10 mx-auto text-white my-10">
          <div className="flex flex-col md:flex-row gap-5 md:gap-10 items-start">
            <p className="md:text-xl basis-1/2">
              Melodroid is a groundbreaking robotic music companion that
              combines the precision of cutting-edge technology with the
              artistic essence of classical music. This innovative creation will
              serve as a virtual muse, providing users with a seamless and
              immersive experience in composing harmonious melodies and
              symphonic arrangements. With its intuitive interface and advanced
              algorithms, Melodroid will empower musicians and composers to
              explore new dimensions of creativity and effortlessly unlock their
              musical potential. From inspiring chord progressions to
              orchestrating intricate compositions, Melodroid is the epitome of
              sophistication and artistry in the realm of music creation.
            </p>
            <div className="bg-black border-2 p-2 flex flex-col gap-5 basis-1/2">
              <div className="py-5">
                <p>
                  <b>User:</b>
                </p>
                <p>Create a neoromantic composition in D minor</p>
              </div>
              <div className="text-green-500">
                <p>
                  <b>Melodroid:</b>
                </p>
                <ReactPlayer
                  controls
                  width="100%"
                  height="50px"
                  url="/neomanticism-in-d-minor.mp3"
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
