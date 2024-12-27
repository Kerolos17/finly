import React from "react";
import Banner from "./homeComponents/Banner";
import { Button } from "@material-tailwind/react";
import Link from "next/link";
import ImagesSlider from "./homeComponents/ImagesSlider";
import TwoCards from "./homeComponents/TwoCards";
import SecondTwoCards from "./homeComponents/SecondTwoCards";
import ThreeCards from "./homeComponents/ThreeCards";
import GitTheLook from "./homeComponents/GitTheLook";
import GiftCard from "./homeComponents/GiftCard";
import Aboutus from "./homeComponents/Aboutus";

const HomeWomen = () => {
  return (
    <div className="w-full mt-[15em]">
      <Banner />
      <div className="px-[4em] flex flex-col gap-4 lg:flex-row justify-cneter items-center">
        {/* left side -  shop now */}
        <div className="flex flex-col lg:w-1/3 justify-center items-center gap-3">
          <h1 className="text-xl tracking-[.2em]">NEW IN</h1>
          <div className="flex justify-center items-center">
            <p className="font-thin text-md">THE NEWEST TRENDS OF THE SEASON</p>
          </div>
          <Button className="bg-black w-fit">
            <Link href="/collections">SHOP NOW</Link>
          </Button>
        </div>
        <div className="flex-1">
          <ImagesSlider />
        </div>
      </div>
      <div className="mt-[3em] flex justify-center items-center gap-3">
        <TwoCards />
      </div>

      <hr className="w-full mt-[1em]" />

      <div className="px-[4em] flex flex-col gap-4 lg:flex-row justify-cneter items-center mt-[2em]">
        {/* left side -  shop now */}
        <div className="flex flex-col w-1/3 justify-center items-center gap-3">
          <h1 className="text-xl tracking-[.2em]">HERE TO DAZZLE</h1>
          <p className="font-thin text-md">FOR EVERY CELEBRATION</p>
          <Button className="bg-black w-fit">DISCOVER THE DROP</Button>
        </div>
        <div className="flex-1">
          <ImagesSlider />
        </div>
      </div>

      <div className="mt-[3em] flex justify-center items-center gap-3">
        <SecondTwoCards />
      </div>
      <ThreeCards />
      <GitTheLook />
      <GiftCard />
      <Aboutus />
    </div>
  );
};

export default HomeWomen;
