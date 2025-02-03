"use client";
import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "../Button";
import { LeftArrowIcon, RightArrowIcon } from "../Icons";

type Props = {
  imageArr: string[];
};

const CustomSlider = ({ imageArr }: Props) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);
  return (
    <div className="relative h-auto sm:h-auto w-full ">
      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container h-auto sm:h-auto">
            {imageArr?.map((image, index) => (
              <div
                className="embla__slide flex justify-center items-center "
                key={index}
              >
                <img
                  src={image}
                  alt="Banner Image"
                  className="w-auto h-auto object-cover "
                />
              </div>
            ))}
          </div>
        </div>
        <Button
          className="embla__prev absolute left-3 bottom-1/2"
          onClick={scrollPrev}
          size="xs"
          icon={<LeftArrowIcon />}
        ></Button>
        <Button
          className="embla__next absolute right-3 bottom-1/2"
          onClick={scrollNext}
          size="xs"
          icon={<RightArrowIcon />}
        ></Button>
      </div>
    </div>
  );
};

export default CustomSlider;
