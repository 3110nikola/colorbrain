import React from "react";
import { Footer } from "../components/Footer";
import Navbar from "../components/Navbar";
import { ComingSoon } from "../components/ComingSoon";
import { McChattyExample } from "../components/McChattyExample";
import { Link } from "react-router-dom";

export const McChatty = () => {
  document.title = "McChatty | ColorBrain";
  scrollTo(0, 0);
  const examples = [
    {
      heading: "Advanced reasoning",
      description:
        "With broad general knowledge and domain expertise, McChatty will be able to follow complex instructions in natural language and solve difficult problems with accuracy.",
      userInput:
        "John is free from 11 am to 3 pm, Joanne is free from noon to 2 pm and then 3:30 pm to 5 pm. Hannah is available at noon for half an hour, and then 4 pm to 6 pm. What are some options for start times for a 30 minute meeting for John, Hannah, and Joanne?",
      aiAnswer:
        "John: 11 am - 3 pm\nJoanne: 12 pm - 2 pm, 3:30 pm - 5 pm\nHannah: 12 pm - 12:30 pm, 4 pm - 6 pm\n\nCommon availability for a 30-minute meeting: 12 pm - 12:30 pm",
    },
    {
      heading: "Creativity",
      description:
        "McChaty will be more creative and collaborative than ever before. It will be able to generate, edit, and iterate with users on creative and technical writing tasks, such as composing songs, writing screenplays, or learning a user’s writing style.",
      userInput:
        "Explain the plot of Cinderella in a sentence where each word has to begin with the next letter in the alphabet from A to Z, without repeating any letters.",
      aiAnswer:
        "A beautiful Cinderella, dwelling eagerly, finally gains happiness; inspiring jealous kin, love magically nurtures opulent prince; quietly rescues, slipper triumphs, uniting very wondrously, xenial youth zealously.",
    },
    {
      heading: "Longer context",
      description:
        "McChatty will be capable of handling over 25,000 words of text, allowing for use cases like long form content creation, extended conversations, and document search and analysis.",
      userInput:
        "[Text from: https://en.wikipedia.org/wiki/Butterfly]\nDescribe pattern formation and what makes it special ",
      aiAnswer:
        "Pattern formation in butterflies refers to the process by which the intricate designs and colors on their wings are created. It is a remarkable phenomenon characterized by the precise arrangement of scales and pigments during wing development. What makes it special is the high level of precision, complexity, and species-specificity involved in creating unique wing patterns. These patterns play important roles in camouflage, mate attraction, and species recognition. The beauty and elegance of butterfly wing patterns have fascinated scientists and artists, offering insights into developmental biology, genetics, evolution, and inspiring creative works.",
    },
  ];

  const showExamples = examples.map((example, index) => (
    <McChattyExample
      key={`chat-example-${index}`}
      userInput={example.userInput}
      heading={example.heading}
      description={example.description}
      aiAnswer={example.aiAnswer}
    />
  ));

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
          Your Smart, Sassy, and Seriously Impressive Chat Companion!
        </h2>
        {showExamples}
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
