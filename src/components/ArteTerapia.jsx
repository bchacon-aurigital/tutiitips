import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { arteterapia } from "../constants";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 768, min: 640 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
  },
};

const CartaArte = ({ arte }) => {
  return (
    <div className="relative h-full rounded">
      <div
        className="relative bg-center bg-no-repeat bg-cover h-96 w-full"
        style={{ backgroundImage: `url('${arte.img}')` }}
      />
      <div className="absolute bottom-0 h-30 bg-art-gr flex justify-center w-full items-end z-10">
        <h1 className="p-4 pb-6 text-center text-tertiary md:text-2xl md:text-left md:p-8">
          {arte.title}
        </h1>
      </div>
    </div>
  );
};

const ArteTerapia = () => {
  const customLeftArrow = (
    <div
      className="absolute arrow-btn text-center px-3 py-1 cursor-pointer bg-transparent text-tertiary border-2 border-tertiary rounded-full text-xl"
      style={{
        bottom: `1rem`,
        left: `1rem`,
      }}
    >
      &#10094;
      {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
      </svg> */}
    </div>
  );

  const customRightArrow = (
    <div
      className="absolute arrow-btn text-center px-3 py-1 cursor-pointer bg-transparent text-tertiary border-2 border-tertiary rounded-full text-xl"
      style={{
        bottom: `1rem`,
        right: `1rem`,
      }}
    >
      &#10095;
      {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
      </svg> */}
    </div>
  );
  return (
    <div className="">
      <Carousel
        infinite
        customLeftArrow={customLeftArrow}
        customRightArrow={customRightArrow}
        responsive={responsive}
        itemClass="rounded-md"
      >
        {arteterapia.map((arte, index) => (
          <CartaArte key={index} arte={arte} />
        ))}
        {/* <div>1</div> */}
      </Carousel>
    </div>
  );
};

export default ArteTerapia;
