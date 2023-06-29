import React from "react";
import { Footer } from "../components/Footer";
import Navbar from "../components/Navbar";
import { ComingSoon } from "../components/ComingSoon";
import Block from "../components/Block";

export const NewAI = () => {
  document.title = "Coming Soon | ColorBrain";
  scrollTo(0, 0);

  const products = [
    {
      text1: "McChatty",
      text2:
        "Revolutionary AI chat assistant designed to make your life easier",
      text3:
        "With McChatty, you'll experience the power of artificial intelligence at your fingertips. Whether you need help with research, want to streamline your workflow, or simply crave some engaging conversation, our cutting-edge technology is here to assist you.",
      image: "mchatty.png",
      link: "/future/mcchatty",
    },
    {
      text1: "LogoBot",
      text2: "Experience the future of communication",
      text3:
        "Say goodbye to tedious typing and hello to effortless efficiency as our advanced system accurately transcribes your words, understands your commands, and executes tasks flawlessly. From dictating emails and composing documents to controlling smart devices and organizing your life, Logobot is your ultimate virtual assistant, revolutionizing the way you interact with technology. Embrace the power of seamless voice recognition and unlock a whole new level of productivity and convenience.",
      image: "logobot.png",
      link: "/future/logobot",
    },
    {
      text1: "Melodroid",
      text2: "Unleash the melodic magic",
      text3:
        "From ethereal compositions to captivating melodies, let Melodroid be your guide to musical inspiration. Elevate your creative journey with this mythical innovation and unlock a symphony of possibilities. Embrace the future of music creation with Melodroid - where imagination meets automation.",
      image: "melodroid.png",
      link: "/future/melodroid",
    },
  ];

  const showProducts = products.map((product, index) => (
    <Block
      key={`product-${index}`}
      text1={product.text1}
      text2={product.text2}
      text3={product.text3}
      image={product.image}
      toLeft={index % 2 == 0 ? true : false}
      link={product.link}
    />
  ));

  return (
    <div>
      <div className="my-36">
        <ComingSoon />
      </div>
      <div className="bg-gray-800 py-28 px-10 md:px-20">
        <div className="container mx-auto">
          <h1 className="text-center text-4xl uppercase">
            Transforming work and creativity with AI
          </h1>
          {showProducts}
        </div>
      </div>
      <Footer />
      <Navbar />
    </div>
  );
};
