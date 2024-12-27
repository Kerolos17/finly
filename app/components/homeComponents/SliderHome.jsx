import React from "react";
import { Carousel } from "@material-tailwind/react";
import Image from 'next/image';

const SliderHome = () => {
  return (
    <div className="mt-[12em] w-full flex justify-center items-center">
      <Carousel navigation={false} prevArrow={false} nextArrow={false} autoplayDelay={1000} autoplay={true} className="rounded-xl w-[90%] h-[400px]">
        <Image
          src={`/assets/images/slider-1.png`}
          alt="image 1"
          width={500}
          height={500}
          className="h-full w-full object-cover"
        />
        <Image
          src={`/assets/images/slider-2.jpg`}
          alt="image 2"
          width={500}
          height={500}
          className="h-full w-full object-cover"
        />
        <Image
          src={`assets/images/slider-2.jpg`}
          alt="image 3"
          width={500}
          height={500}
          className="h-full w-full object-cover"
        />
      </Carousel>
    </div>
  );
};

export default SliderHome;
