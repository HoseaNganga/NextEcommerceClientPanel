import React from "react";
import Product1 from "@/assets/images/product1.png";
import { Button } from "../Button";
import { ViewIcon, WishListIcon } from "../Icons";
import { Rating } from "@mui/material";
import { Product } from "@/lib/types/ProductType";

type Props = {
  Product: Product;
};

const ProductCard = ({ Product }: Props) => {
  return (
    <div
      className="relative max-w-[270px] max-h-[350px] bg-slate-100 rounded-sm "
      key={Product?._id}
    >
      <div className="grid ">
        <div className="w-full max-h-[250px] bg-[#F5F5F5] relative ">
          <div className="absolute top-0 left-0 w-12 h-6 bg-[#DB4444] flex justify-center items-center rounded-[4px] z-10 ">
            <span className="text-white text-[10px] font-bold ">
              {" "}
              {Product?.discount}%{" "}
            </span>
          </div>
          <div className="relative group w-full h-full">
            <img
              src={Product?.image}
              alt="Product"
              className="w-full h-full object-contain cursor-pointer "
            />
            <Button
              className="text-white text-[12px] absolute bottom-0 bg-black w-full rounded-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              size="xs"
              variant="custom"
            >
              Add To Cart
            </Button>
          </div>
          <div className="absolute  right-[5px] top-[5px] grid gap-2 z-10 ">
            <Button
              size="xxs"
              icon={<WishListIcon />}
              className="grid place-content-center "
            ></Button>
            <Button
              size="xxs"
              icon={<ViewIcon />}
              className="grid place-content-center "
            ></Button>
          </div>
        </div>
        <div className="grid gap-1 p-1">
          <h4 className="capitalize font-bold text-black text-[12px]">
            {Product?.name?.substr(0, 25) + "...."}
          </h4>
          <div className="flex justify-start gap-2 ">
            <span className="text-[#DB4444] text-[12px] font-bold">
              ${Product?.newprice}
            </span>
            <span className="text-black/50 line-through text-[12px]">
              ${Product?.newprice}
            </span>
          </div>
          <div>
            <Rating size="small" value={Product?.rating ?? 0} readOnly />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
