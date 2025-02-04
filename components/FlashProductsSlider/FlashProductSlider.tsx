"use client";
import React, { useCallback } from "react";
import ProductCard from "../ProductCard/ProductCard";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ProductList } from "../Constants/constants";
import { Product } from "@/lib/types/ProductType";
import { Button } from "../Button";
import { LeftArrowIcon, RightArrowIcon } from "../Icons";

const FlashProductSlider = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ slidesToScroll: 1 });
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);
  return (
    <div className="relative overflow-hidden mb-6 mt-6  min-h-[400px] ">
      <div className="relative h-auto sm:h-auto w-full ">
        <div className="embla">
          <div className="embla__viewport mt-10 " ref={emblaRef}>
            <div className="embla__container h-auto sm:h-auto">
              {ProductList?.productList?.map((Product: Product, index) => (
                <div key={index} className="embla__slide max-w-[290px]">
                  <ProductCard Product={Product} />
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-start gap-2 absolute right-[0] top-[-35px]  ">
            <Button
              className="embla__prev"
              onClick={scrollPrev}
              size="xxs"
              icon={<LeftArrowIcon />}
            ></Button>
            <Button
              className="embla__next"
              onClick={scrollNext}
              size="xxs"
              icon={<RightArrowIcon />}
            ></Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlashProductSlider;
