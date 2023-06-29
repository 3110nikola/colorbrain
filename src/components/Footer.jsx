import React from "react";
import { subscribe } from "../assets";
import { BsDiscord, BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { Link } from "react-router-dom";
import { SmallButton } from "./SmallButton";

export const Footer = () => {
  return (
    <div className="flex flex-col gap-5 items-center py-20 px-10 text-center">
      <p className="font-extrabold text-3xl">Subscribe to our newsletter</p>
      <p className="text-white">
        The latest news, AI models, and fun memes from the community!
      </p>
      <form
        name="subscribe"
        className="flex flex-col md:flex-row gap-5 items-center"
      >
        <input
          placeholder="Enter your email..."
          name="email"
          className="focus:border-green-900 w-full md:w-fit md:text-left text-center border-2 focus:outline-none text-black text-lg rounded-lg p-2"
          type="email"
          required
        />
        <SmallButton type="submit" icon={subscribe} text="Subscribe" />
      </form>
      <hr className="text-white" />
      <div className="flex gap-5 items-center">
        <Link to="#">
          <BsDiscord
            className="text-white hover:text-green-500 duration-500"
            size={30}
          />
        </Link>
        <Link to="#">
          <BsFacebook
            className="text-white hover:text-green-500 duration-500"
            size={30}
          />
        </Link>
        <Link to="#">
          <BsInstagram
            className="text-white hover:text-green-500 duration-500"
            size={30}
          />
        </Link>
        <Link to="#">
          <BsTwitter
            className="text-white hover:text-green-500 duration-500"
            size={30}
          />
        </Link>
      </div>
      <p>&copy; 2023 ColorBrain LLC. All rights reserved.</p>
    </div>
  );
};
