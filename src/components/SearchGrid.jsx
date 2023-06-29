import { React, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Modal from "react-modal";
import { FaWindowClose, FaDownload } from "react-icons/fa";
import { downloadImage } from "../utils";
import { nanoid } from "nanoid";

export const SearchGrid = ({ data, filter }) => {
  const openModal = (e) => {
    setCurrentImage(e.target.src);
    setIsModalOpen(true);
  };

  let counter = 0;
  const showImages = data.map((image, index) => {
    if (
      image.description.toLowerCase().includes(filter.toLowerCase()) ||
      filter == ""
    ) {
      counter++;
      return (
        <div className="relative group" key={`image-${index}`}>
          <LazyLoadImage
            src={image.source}
            effect="blur"
            className="rounded-lg cursor-pointer group-hover:brightness-50"
            onClick={openModal}
          />
          <p className="absolute text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-2 w-full text-white cursor-pointer opacity-0 duration-500 md:group-hover:opacity-100 pointer-events-none">
            <b>User input:</b>
            <br />"{image.description}"
          </p>
        </div>
      );
    }
  });

  const [isModalOpan, setIsModalOpen] = useState(false);

  Modal.setAppElement("#root");

  const modalStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "40%",
      minWidth: "300px",
      height: "fit-content",
      position: "relative",
      padding: "2px",
    },
  };

  const [currentImage, setCurrentImage] = useState("");

  return (
    <div className="bg-gray-800 px-10 md:px-20 py-20">
      <div className="bg grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 container mx-auto">
        {showImages}
      </div>
      {counter === 0 && (
        <div className="mx-auto container">
          <img src="noresults.avif" className="w-80 mx-auto" />
          <h1 className="text-2xl text-white text-center">
            No results? Oopsie-daisy! Our search engine's a bit shy today. But
            worry not, we're working tirelessly to tickle its algorithms and
            find what you're looking for.
          </h1>
        </div>
      )}
      <Modal style={modalStyles} isOpen={isModalOpan}>
        <img src={currentImage} className="w-full" />
        <div className="flex gap-2 absolute top-2 right-2">
          <FaDownload
            onClick={() => downloadImage(nanoid(), currentImage)}
            size={40}
            className="text-white rounded-md cursor-pointer duration-500 opacity-50 hover:opacity-100"
          />
          <FaWindowClose
            size={40}
            className="text-white rounded-md cursor-pointer duration-500 opacity-50 hover:opacity-100"
            onClick={() => setIsModalOpen(false)}
          />
        </div>
      </Modal>
    </div>
  );
};
