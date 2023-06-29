import React from "react";
import { Footer } from "../components/Footer";
import Navbar from "../components/Navbar";
import { TeamMember } from "../components/TeamMember";
import { TeamSlide } from "../components/TeamSlide";
import Flickity from "react-flickity-component";

export const About = () => {
  document.title = "About | ColorBrain";
  scrollTo(0, 0);

  const flickityOptions = {
    initialIndex: 0,
  };

  const members = [
    {
      image: "team/owen-ellis.jpg",
      icon: "team/creative.png",
      name: "Owen Ellis",
      position: "Creative Director",
      text: "Our visionary Creative Director brings an artistic flair and a keen eye for aesthetics to the table. With his deep understanding of design principles and trends, he guides the direction of ColorBrain, ensuring that every output is visually stunning and captivating.",
    },
    {
      image: "team/livio-magnani.jpg",
      icon: "team/architecture.png",
      name: "Livio Magnani",
      position: "AI Architect",
      text: "Our brilliant AI Architect is the mastermind behind the technology driving ColorBrain. With a wealth of experience in machine learning and deep neural networks, he crafts the intricate algorithms that power our AI's creative abilities. His relentless pursuit of innovation ensures that ColorBrain remains at the forefront of the industry.",
    },
    {
      image: "team/julita-podgorny.jpg",
      icon: "team/data.png",
      name: "Julita Podgórny",
      position: "Data Scientist",
      text: "The meticulous Data Scientist is responsible for curating and refining the vast datasets that fuel our AI image generator. Leveraging her expertise in data analysis and pattern recognition, she ensures that the ColorBrain is trained on a diverse range of high-quality images, resulting in unparalleled output quality and diversity.",
    },
    {
      image: "team/art-o-matic.jpg",
      icon: "team/ai.png",
      name: "Art-o-Matic",
      position: "ColorBrain Himself",
      text: "Meet our extraordinary team member, the Art-o-Matic. This AI-powered software is the heart and soul of our image generator. With lightning-fast processing capabilities and an uncanny ability to learn and adapt, it collaborates seamlessly with the human team members. The Art-o-Matic assists in data preprocessing, fine-tuning models, and generating stunning, lifelike images with an artistic touch that leaves audiences awestruck.",
    },
  ];

  const showMembers = members.map((member, index) => (
    <TeamMember
      key={`member-${index}`}
      image={member.image}
      name={member.name}
      position={member.position}
    />
  ));

  const showSlides = members.map((member, index) => (
    <TeamSlide
      key={`slide-${index}`}
      image={member.icon}
      name={member.name}
      position={member.position}
      text={member.text}
    />
  ));

  return (
    <div>
      <section className="min-h-screen py-36 px-10 md:px-20 gap-10 flex flex-col justify-center items-center">
        <div className="grid grid-cols-2 gap-5 lg:grid-cols-4 md:gap-20 container">
          {showMembers}
        </div>
      </section>
      <section className="bg-gray-800">
        <Flickity
          className={"carousel py-20 cursor-grab"}
          elementType={"div"}
          options={flickityOptions}
          disableImagesLoaded={false}
          reloadOnUpdate
          static
        >
          {showSlides}
        </Flickity>
      </section>
      <Footer />
      <Navbar />
    </div>
  );
};
