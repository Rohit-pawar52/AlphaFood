import React from "react";
import { TbAlpha } from "react-icons/tb";
import { FaInstagram } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";

function Footer() {
  return (
    <>
      <div className="flex justify-between p-2 md:px-16 bg-red-500 text-white">
        <div className="flex justify-center items-center font-bold">
        <TbAlpha className="text-4xl md:text-7xl md:mt-3"/>
        <div className="leading-3">
          <p className="text-sm md:text-4xl">ALPHA<span className="md:hidden">FOOD</span></p>
          <p className="hidden md:block">FOOD PLATINUM</p>
          <p className="text-sm md:hidden mt-[-5px]">PLATINUM</p>
        </div>
      </div>
        <div className="flex gap-2 md:gap-5 items-center text-2xl font-bold">
          <p className="text-lg">FOLLOW US</p>
          <FaInstagram />
          <CiYoutube />
          <FaWhatsapp />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 ps-4 gap-2 md:ps-20 bg-[#2e2c2c] text-[#b7b1b1] py-4 md:pt-8">
        <div>
          <p className="text-xl text-white font-semibold">FOR RESTAURENTS</p>
          <p className="border border-red-400 me-64"></p>
          <p>Partner With Us</p>
          <p>Apps For You</p>
        </div>
        <div>
          <p className="text-xl text-white font-semibold">LEARN MORE</p>
          <p className="border border-red-400 me-64"></p>
          <p>Terms & Condition</p>
          <p>Privacy Policy</p>
          <p>Refund & Cancellation</p>
          <p>Return Policies</p>
          <p>Shipping Policies</p>
        </div>
        <div>
          <p className="text-xl text-white font-semibold">ABOUT ALPHAFOOD</p>
          <p className="border border-red-400 me-64"></p>
          <p>About</p>
          <p>Contact Us</p>
          <p>My Acoount</p>
        </div>
        <div>
          <p className="text-white font-semibold">DOWNLOAD ALPHA</p>
          <p className="text-white font-semibold">FOOD PLATINUM</p>
          <div className="flex gap-2 mt-2">
            <div className="flex border border-white rounded-md p-1">
              <FaApple className="text-3xl" />
              <div>
              <p className="text-[8px]">Download on the</p>
              <p className="text-sm leading-3">App Store</p>
              </div>
            </div>
            <div className="flex border rounded-md p-1 border-white">
              <IoLogoGooglePlaystore className="text-3xl" />
              <div>
              <p className="text-[8px]">GET IT ON</p>
            <p className="text-sm leading-3">Google Play</p>
              </div>
            </div>
          </div>
        </div>
      </div>
        <center className="bg-[#2e2c2c] text-[#b7b1b1] py-5">Copyright @ 2024, ALL Right Reserved @ Alpha Food Platinum TM Ltd.</center>
    </>
  );
}

export default Footer;
