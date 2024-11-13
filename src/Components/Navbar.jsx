import React, { useEffect, useState } from "react";;
import axios from "axios";
import { Link } from "react-router-dom";
import { TbAlpha } from "react-icons/tb";
import { CiLocationOn } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { CiShop } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { FaBars } from "react-icons/fa";
function Navbar() {

  const [foods, setFoods] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:3001/api/foods");
        setFoods(res.data);
      } catch (err) {
        console.log("Error fetching food data:", err);
      }
    };
    fetchData();
  }, []);

//   const data = foods.map((data) => data.id)
// console.log(data)

  return (
    <>
    <div className="flex justify-between items-center px-5">
      <div className="lg:hidden">
      <FaBars className="text-3xl" />
      </div>
      <Link to="/">
      <div className="flex justify-center items-center font-bold">
        <TbAlpha className="text-5xl md:text-7xl md:mt-3"/>
        <div className="leading-5 md:leading-3">
          <p className="md:text-4xl">ALPHA<span className="md:hidden">FOOD</span></p>
          <p className="hidden md:block">FOOD PLATINUM</p>
          <p className="md:hidden">PLATINUM</p>
        </div>
      </div>
      </Link>
      <div className="lg:hidden">
            <CiShoppingCart className="text-4xl" />
          </div>
      <div className="hidden lg:flex items-center border p-2 rounded-md">
        <div className="flex">
          <CiLocationOn className="text-2xl" /> <input type="text" placeholder="Search Location" className="outline-none"/>
        </div>
          <p className="me-5">|</p>
        <div className="flex">
          <CiSearch className="text-2xl" /><input type="text" placeholder="Search For Restaurent" className="outline-none" />
        </div>
      </div>
      <div className="hidden buttons lg:flex gap-5 items-center">
        <div className="hidden  xl:flex border p-2 rounded-md border-pink-500  text-pink-500">
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
    <div className="lg:hidden flex justify-between border p-2 mx-5 my-1 rounded-md">
    <div className="flex gap-4">
    <CiSearch className="hidden sm:block text-2xl" /> <input type="text" placeholder="Search Location" className="outline-none text-sm"/>
    </div>
    <p className="">|</p>
    <div className="flex gap-4">
    <CiShop className="hidden sm:block text-2xl" /><input type="text" placeholder="Search for restaurent" className="outline-none text-sm text-center" />
    </div>
  </div>
    </>
  );
}

export default Navbar;
