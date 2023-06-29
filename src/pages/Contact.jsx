import React from "react";
import { Footer } from "../components/Footer";
import Navbar from "../components/Navbar";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";

function Contact() {
  document.title = "Contact | ColorBrain";
  scrollTo(0, 0);
  return (
    <div>
      <div className="px-10 md:px-20 flex flex-col lg:flex-row gap-10 items-center justify-center min-h-screen py-36 container mx-auto">
        <div className="basis-2/3 flex flex-col gap-5 items-center">
          <TypeAnimation
            className="text-5xl md:text-6xl xl:text-7xl text-center mb-10"
            sequence={[
              "Let’s work together",
              2000,
              () => {
                console.log("Sequence completed");
              },
            ]}
            wrapper="span"
            cursor={true}
            repeat={0}
          />
          <p className="font-extrabold text-3xl xl:text-4xl">Join us</p>
          <Link
            to="mailto:contact@colorbrain.com"
            className="text-white text-xl xl:text-3xl hover:underline"
          >
            careers@colorbrain.com
          </Link>
          <p className="font-extrabold text-3xl xl:text-4xl">New Business</p>
          <Link
            to="mailto:contact@colorbrain.com"
            className="text-white text-xl xl:text-3xl hover:underline"
          >
            hello@colorbrain.com
          </Link>
        </div>
        <div className="basis-1/3">
          <img className="w-full" src="hello.png" />
        </div>
      </div>
      <div className="bg-gray-800 text-white py-28 px-10 md:px-20">
        <div className="mx-auto container flex flex-col md:flex-row gap-10 md:gap-20 items-center">
          <img src="v.png" className="w-40" />
          <div className="flex flex-col gap-5">
            <p>
              <b>
                Are you looking for a career in the exciting field of AI image
                generation?
              </b>{" "}
              We're always on the lookout for talented individuals to join our
              team! From software developers to graphic designers, we offer a
              range of positions that cater to a diverse set of skills and
              interests.
            </p>
            <p>
              And <b>if you're an entrepreneur</b> looking to expand your
              business into the world of AI-generated images, we offer
              customizable solutions tailored to your specific needs. So whether
              you're a job seeker or a business owner, get in touch with us
              today to learn more about how our AI image generation technology
              can help you achieve your goals.
            </p>
          </div>
        </div>
      </div>
      <Footer />
      <Navbar />
    </div>
  );
}

export default Contact;
