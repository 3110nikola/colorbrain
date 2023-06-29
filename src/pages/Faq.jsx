import React from "react";
import { Footer } from "../components/Footer";
import Navbar from "../components/Navbar";
import { TypeAnimation } from "react-type-animation";
import { Question } from "../components/Question";

export const Faq = () => {
  document.title = "Frequently Asked Questions | ColorBrain";
  scrollTo(0, 0);

  const questions = [
    {
      question: "What is ColorBrain?",
      answer:
        "ColorBrain is an AI model that can draw images from any text prompt!",
    },
    {
      question: "How do you keep it free?",
      answer:
        "The model requires a lot of compute so we rely on subscriptions and ads to pay for our servers.",
    },
    {
      question: "Can you make images of higher quality?",
      answer:
        "Yes, we are constantly working on improving image quality. You can always try to do it multiple times but it should not affect much the result and will remain at the same resolution.",
    },
    {
      question: "Do you have any tips to create better images?",
      answer: `It's a good idea to be specific. Here are a few keywords that can be interesting to experiment with: "illustration", "photorealistic", "high definition"… We've seen so many cool tricks from the community so you should definitely check what others do for inspiration!`,
    },
    {
      question: "What to do when there is too much traffic?",
      answer: `We are increasing the number of servers as fast as we can so anybody can generate images with no issue. In the meantime, you may need to try a few times to generate images.`,
    },
    {
      question: "What if images do not appear?",
      answer: `Try a different device or browser, such as Google Chrome. You can also check if it works in incognito, clear your cache, and restart your phone or computer.`,
    },
    {
      question: "How does the AI model work?",
      answer: `The model learns concepts from images. Each time you enter a prompt, it will create unique image based on its current knowledge and will try to combine the concepts from your prompt in a creative way.`,
    },
    {
      question: "What about limitations and biases?",
      answer: `While the capabilities of image generation models are impressive, they may also reinforce or exacerbate societal biases. The model may generate images that contain harmful stereotypes. The extent and nature of the biases of the model have yet to be fully documented.`,
    },
    {
      question: "Can I use the images generated through ColorBrain?",
      answer: `Yes, as long as you respect the Terms of Use, feel free to use them as you wish for personal, academic or commercial use! Please credit colorbrain.com for the images.`,
    },
    {
      question: "How can I support ColorBrain?",
      answer: `We always welcome feedback, whether it is related to bugs or feature requests! Your support helps us improve our models keep ColorBrain free and accessible to everyone `,
    },
  ];

  const showQuestions = questions.map((item, index) => (
    <Question
      key={`faq${index}`}
      question={item.question}
      answer={item.answer}
    />
  ));
  return (
    <div>
      <div className="px-10 md:px-20 flex flex-col lg:flex-row gap-10 items-center justify-center min-h-screen py-36 mx-auto container">
        <div className="basis-2/3 flex flex-col gap-5 items-center">
          <TypeAnimation
            className="text-5xl md:text-6xl xl:text-7xl text-center mb-10"
            sequence={[
              "Your questions, answered",
              2000,
              () => {
                console.log("Sequence completed");
              },
            ]}
            wrapper="span"
            cursor={true}
            repeat={0}
          />
          <p className="text-white">
            Have questions about ColorBrain? Check out here for answers to the
            most common inquiries. From how our technology works to the types of
            images we can create, we've got you covered. And if you can't find
            the answer you're looking for, our customer service team is always
            ready to assist you. At our website, we're committed to providing
            the best possible experience for our users, which is why we've taken
            the time to create a comprehensive FAQ section. So why wait? Browse
            our FAQs today and discover all the amazing possibilities our AI
            image generator has to offer.
          </p>
        </div>
        <div className="basis-1/3">
          <img className="w-full" src="faq.png" />
        </div>
      </div>
      <div className="bg-gray-900 text-white py-28 px-10 md:px-20 flex flex-col gap-10 justify-center items-center">
        <div className="flex gap-10 md:flex-row flex-col items-center">
          <img className="w-20" src="questions-and-answers.png" />
          <p className="text-2xl">
            Assistance required? I'm programmed to answer your answers about
            ColorBrain
          </p>
        </div>
        {showQuestions}
      </div>
      <Footer />
      <Navbar />
    </div>
  );
};
