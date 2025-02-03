"use client";
import React from "react";
import Slider1 from "@/assets/images/heroframe1.png";
import Slider2 from "@/assets/images/slider2.jpg";
import Slider3 from "@/assets/images/slider3.png";
import CustomSlider from "../CustomSlider/CustomSlider";

const HomeHero = () => {
  return (
    <div className="relative overflow-hidden mb-6 mt-0.5 ">
      <CustomSlider imageArr={[Slider1.src, Slider2.src, Slider3.src]} />
    </div>
  );
};

export default HomeHero;
