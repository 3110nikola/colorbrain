import { React, useState } from "react";
import Navbar from "../components/Navbar";
import { Footer } from "../components/Footer";
import { getRandomPrompt, downloadImage } from "../utils";
import { SmallButton } from "../components/SmallButton";
import { draw, logo, surprise, blank, download } from "../assets";
import Loader from "../components/Loader";

export const Generate = () => {
  document.title = "Create | ColorBrain";
  scrollTo(0, 0);

  const [prompt, setPrompt] = useState("");
  const [image, setImage] = useState(blank);
  const [generatingImg, setGeneratingImg] = useState(false);
  const [imgFinished, setImageFinished] = useState(false);

  const surpriseMe = () => {
    const randomPrompt = getRandomPrompt(prompt);
    setPrompt(randomPrompt);
  };

  const generateImage = async () => {
    if (prompt !== "") {
      setImageFinished(false);
      try {
        setGeneratingImg(true);
        const response = await fetch(
          "https://dallecloneserver-pcz4.onrender.com/api/v1/dalle",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              prompt: prompt,
            }),
          }
        );

        const data = await response.json();
        setImage(`data:image/jpeg;base64,${data.photo}`);
      } catch (err) {
        alert(err);
      } finally {
        setGeneratingImg(false);
        setImageFinished(true);
      }
    } else {
      alert("Please provide proper prompt");
    }
  };

  return (
    <div>
      <div className="bg-gray-800 md:pt-60 md:pb-28 pt-36 pb-16 px-10 md:px-20">
        <div className="container flex flex-col items-center mx-auto">
          <img src={logo} className="w-40 mx-auto mb-10" />
          <form className="flex flex-col gap-5 items-center justify-center md:w-1/3 mx-auto">
            <textarea
              name="prompt"
              onChange={(e) => setPrompt(e.target.value)}
              value={prompt}
              placeholder="What do you want to generate?"
              className="focus:border-green-900 w-full text-center border-2 focus:outline-none text-black text-lg rounded-lg p-2 resize-none h-20"
              required
            />
            <div className="grid lg:grid-cols-2 gap-5 justify-evenly">
              <SmallButton
                type="button"
                icon={draw}
                text="Draw"
                handle={generateImage}
              />
              <SmallButton
                type="button"
                icon={surprise}
                text="Surprise me"
                handle={surpriseMe}
              />
            </div>
          </form>
          <div className="mx-auto md:w-1/2 relative my-20">
            {generatingImg && <Loader />}
            <img src={image} className="w-full mx-auto rounded-md" />
          </div>
          {imgFinished && (
            <SmallButton
              type="button"
              icon={download}
              text="Download"
              handle={() => downloadImage(prompt, image)}
            />
          )}
        </div>
      </div>
      <Footer />
      <Navbar />
    </div>
  );
};
