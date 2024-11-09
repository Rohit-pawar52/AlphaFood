import React from "react";
import { TbAlpha } from "react-icons/tb";
import { CiLocationOn } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { CiShop } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
function Navbar() {
  return (
    <div className="flex justify-evenly items-center">
      <div className="flex justify-center items-center font-bold leading-3">
        <TbAlpha className="text-7xl mt-3"/>
        <div>
          <p className="text-4xl">ALPHA</p>
          <p>FOOD PLATINUM</p>
        </div>
      </div>
      <div className="flex items-center w-[42vw] border p-2 rounded-md">
        <div className="flex">
          <CiLocationOn className="text-2xl" /> <input type="text" placeholder="Search Location" className="outline-none"/>
        </div>
          <p className="me-5">|</p>
        <div className="flex">
          <CiSearch className="text-2xl" /><input type="text" placeholder="Search For Restaurent" className="outline-none" />
        </div>
      </div>
      <div className="buttons flex gap-5 items-center">
        <div className="flex border p-2 rounded-md border-pink-500  text-pink-500">
          <CiShop className="text-2xl" />
          <p>Add Restaurent</p>
        </div>
        <div className="flex gap-5">
          <div className="flex gap-2">
            <CiShoppingCart className="text-2xl" />
            <p>cart</p>
          </div>
          <div>Login</div>
          <div>|</div>
          <div>Register</div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
