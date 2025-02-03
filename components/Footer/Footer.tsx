import React from "react";
import { Input } from "../Input";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  SendIcon,
  XIcon,
} from "../Icons";
import Link from "next/link";
import Image from "next/image";
import QrCode from "@/assets/images/My_QR_Code_2-1024.jpeg";
import GooglePlay from "@/assets/images/GooglePlay.png";
import AppleStore from "@/assets/images/AppStore.png";

const Footer = () => {
  return (
    <footer className="bg-black flex justify-between gap-6 items-center p-4 text-white flex-wrap ">
      <div className="grid gap-4">
        <h3 className="capitalize text-[16px]">exclusive</h3>
        <h6 className="text-sm">Subscribe</h6>
        <p className="text-gray-500 text-sm">Get 10% off your first order</p>
        <Input
          type="email"
          placeholder="Enter your email"
          icon={<SendIcon />}
          size="xs"
        />
      </div>
      <div className="grid gap-4">
        <h3 className="capitalize text-[16px]">support</h3>
        <p className="text-gray-500 text-sm w-24 ">
          {" "}
          111 Nairobi Kenya, DH 1515, Kenya{" "}
        </p>
        <p className="text-gray-500 text-sm "> Next@gmail.com</p>
        <p className="text-gray-500 text-sm  "> +254 10987654</p>
      </div>
      <div className="grid gap-4">
        <h3 className="capitalize text-[16px]">account</h3>
        <Link href={"/account"} className="text-gray-500 text-sm capitalize ">
          my account
        </Link>
        <Link href={"/login"} className="text-gray-500 text-sm capitalize">
          login/register
        </Link>
        <Link href={"/cart"} className="text-gray-500 text-sm capitalize">
          cart
        </Link>
        <Link href={"/wishlist"} className="text-gray-500 text-sm capitalize">
          wishlist
        </Link>
      </div>
      <div className="grid gap-4 mt-[-40px]">
        <h3 className="capitalize text-[16px]">quick links</h3>
        <Link
          href={"/privacypolicy"}
          className="text-gray-500 text-sm capitalize"
        >
          privacy policy
        </Link>
        <Link href={"/terms"} className="text-gray-500 text-sm capitalize">
          terms of use
        </Link>
        <Link href={"/faq"} className="text-gray-500 text-sm uppercase">
          faq
        </Link>
      </div>
      <div className="grid mt-4">
        <h3 className="capitalize text-[16px]">download app</h3>
        <p className="text-gray-500 text-sm capitalize">
          save $3 with App New User Only
        </p>
        <div className="flex justify-start gap-0.5 ">
          <Image
            src={QrCode}
            alt="Qr Code"
            width={100}
            height={50}
            objectFit="contain"
          />
          <div className="flex flex-col justify-center gap-2 ">
            <Image src={GooglePlay} alt="Google Play" width={80} height={80} />
            <Image src={AppleStore} alt="Apple Store" width={80} height={80} />
          </div>
        </div>
        <div className="text-white flex justify-start gap-2">
          <FacebookIcon />
          <InstagramIcon />
          <LinkedInIcon />
          <XIcon />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
