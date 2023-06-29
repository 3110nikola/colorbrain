import React from "react";
import Navbar from "../components/Navbar";
import Block from "../components/Block";
import { logo, draw } from "../assets";
import { Button } from "../components/Button";
import { Footer } from "../components/Footer";
import { ComingSoon } from "../components/ComingSoon";
import { Link } from "react-router-dom";

export const Home = () => {
  scrollTo(0, 0);
  const blocks = [
    {
      text1: "ColorBrain",
      text2: "Free online AI image generator from text",
      text3:
        "ColorBrain image generator means the perfect image is always at your fingertips—even if it doesn't exist yet. Create images that visualize a product or idea, sketch out a creative concept, or push the limits of what's possible. Simply type your text prompt: “An alien riding a bike through a city with depth of field.” Watch your words and phrases transform into beautiful images you can use on any of your creative projects like presentations or social media posts.",
      image: "/home.png",
    },
    {
      text1: "You like results?",
      text2: "Share them with our community on Discord!",
      text3:
        "Impress your friends with stunning AI-generated images! With our easy sharing feature, you can show off your favorite AI-generated images with just a few clicks. Share on social media, messaging apps, or email - it's up to you! Plus, with ColorBrain, you'll have a never-ending supply of unique and visually stunning images to choose from. Start sharing your love for AI-generated images today and become the envy of all your friends!",
      image: "/share.png",
    },
    {
      text1: "Join our newsletter",
      text2: "Be first to learn about upcoming features!",
      text3:
        "Stay up-to-date with the latest updates in ColorBrain with our newsletter! Our weekly newsletter delivers fresh and exciting content straight to your inbox, including tips and tricks for using ColorBrain AI image generator, the latest advancements in AI technology, and inspiring examples of how AI-generated images are being used in the real world. Don't miss out on this valuable resource - subscribe to our newsletter today!",
      image: "/mail.png",
    },
  ];
  const showBlocks = blocks.map((block, index) => (
    <Block
      key={`block-${index}`}
      text1={block.text1}
      text2={block.text2}
      text3={block.text3}
      image={block.image}
      toLeft={index % 2 == 0 ? false : true}
    />
  ));
  return (
    <div>
      <section className="min-h-screen py-28 justify-center px-10 md:px-20 lg:px-96 flex flex-col gap-10 items-center bg-center bg-cover bg-[url('/home-bg.jpg')]">
        <img src={logo} className="w-60 self-center" />
        <h1 className="text-white text-2xl text-center">
          The world’s most powerful AI image art generation engine. What will
          you create?
        </h1>
        <Button icon={draw} text="Generate Now" link="/generate" />
      </section>
      {showBlocks}
      <div className="py-20 md:px-40 px-10 text-center bg-gray-800">
        <div className="grid md:grid-cols-3 gap-20 container mx-auto">
          <div className="flex flex-col gap-5 items-center">
            <img className="w-20 md:w-36" src="/content.png" />
            <p className="font-extrabold text-xl">For content creators</p>
            <p className="text-white">
              Stand out and grow your audience with perfectly tailored content.
            </p>
          </div>
          <div className="flex flex-col gap-5 items-center">
            <img className="w-20 md:w-36" src="/entrepreneurs.png" />
            <p className="font-extrabold text-xl">For entrepreneurs</p>
            <p className="text-white">
              Generate captivating branding materials in a cost-efficient way.
            </p>
          </div>
          <div className="flex flex-col gap-5 items-center">
            <img className="w-20 md:w-36" src="/artists.png" />
            <p className="font-extrabold text-xl">For budding artists</p>
            <p className="text-white">
              Experiment and get inspiration while embarking on a creative
              project.
            </p>
          </div>
        </div>
      </div>
      <Link to="/future">
        <ComingSoon />
      </Link>
      <Footer />
      <Navbar />
    </div>
  );
};
