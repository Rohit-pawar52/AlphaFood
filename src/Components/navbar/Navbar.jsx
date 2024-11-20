import React, { useEffect, useState } from "react";;
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { TbAlpha } from "react-icons/tb";
import { CiLocationOn } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { CiShop } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { FaBars } from "react-icons/fa";
import Sidebar from "./Sidebar";
import { IoMdPower } from "react-icons/io";

function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [foods, setFoods] = useState([]);
  const navigate = useNavigate();
  const count = foods.length;
  const userData = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://alpha-food.vercel.app/api/foods");
        setFoods(res.data);
        // console.log(res.data)
      } catch (err) {
        console.log("Error fetching food data:", err);
      }
    };
    fetchData();
  }, []);

   // Toggle sidebar for mobile devices
   const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
    <div className="flex justify-between items-center px-2 lg:px-10">
      <div className="md:hidden">
      <FaBars className="text-3xl" onClick={toggleSidebar}/>
      </div>
      <Link to="/">
      <div className="flex justify-center items-center font-bold">
        <TbAlpha className="text-6xl md:text-7xl md:mt-2 me-[-5px]"/>
        <div className="leading-5 md:leading-3">
          <p className="md:text-4xl">ALPHA<span className="md:hidden">FOOD</span></p>
          <p className="hidden md:block">FOOD PLATINUM</p>
          <p className="md:hidden">PLATINUM</p>
        </div>
      </div>
      </Link>

      {/* for mobile cart */}
      <div className="md:hidden relative">
           <Link to="/cart"> <CiShoppingCart className="text-4xl" /></Link>
           { userData ? (
             <p className="absolute flex items-center justify-center w-5 h-5 rounded-full bg-red-500 top-[-8px] right-[-10px]">{count}</p>
           ) : ""
           }
          </div>
      <div className="hidden lg:flex items-center border p-2 rounded-md">
        <div className="flex items-center gap-2">
          <CiLocationOn className="text-2xl" /> <input type="text" placeholder="Search Location" className="outline-none"/>
        </div>
          <p className="me-5">|</p>
        <div className="flex items center gap-2">
          <CiSearch className="text-2xl" /><input type="text" placeholder="Search For Restaurent" className="outline-none" />
        </div>
      </div>
      <div className="hidden md:flex gap-5 items-center">
        <div className="hidden md:flex lg:hidden xl:flex border p-2 rounded-md border-pink-500  text-pink-500">
          <CiShop className="text-2xl" />
          <Link to="/AddRestro">Add Restaurent</Link>
        </div>
        <div className="flex gap-5">
        <Link to="/cart"> <div className="flex gap-2">
        { userData ?(
          <div className="relative">
          
          <CiShoppingCart className="text-2xl" />
          <p className="absolute flex items-center justify-center w-5 h-5 rounded-full bg-red-500 top-[-10px] right-[-10px]">{count}</p>
          </div>
        ): <CiShoppingCart className="text-2xl" />
      }
          { userData ? (
            ""
          ) :
            <p>cart</p>
          }
          </div>
          </Link>
          <div>
            {
              userData ?(
                <div className="flex justify-center items-center gap-2" >
                  <img src={ userData.avatar_url } alt="" className="w-6 h-6 rounded-full"/>
                  <IoMdPower
                  onClick={() => {
                    localStorage.removeItem("user");
                    navigate("/");
                  }}
                />
                </div>
              ) : (<div className="flex gap-2"><Link to="/UserLogin">Login</Link><p>|</p>
                <Link to="/UserRegister">Register</Link></div>)
            }
          
          </div>
        </div>
      </div>
    </div>
    <div className="lg:hidden flex justify-between border p-2 mx-2  md:mx-5 my-1 rounded-md">
    <div className="sm:flex gap-4">
    <CiSearch className="hidden sm:block text-2xl" /> <input type="text" placeholder="Search Location" className="outline-none text-[12px] sm:text-sm"/>
    </div>
    <p className="">|</p>
    <div className="sm:flex gap-4">
    <CiShop className="hidden sm:block text-2xl" /><input type="text" placeholder="Search for restaurent" className="outline-none text-[12px] sm:text-sm text-center" />
    </div>
  </div>

  {/* Sidebar for mobile */}
  {isSidebarOpen && (
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      )}
    </>
  );
}

export default Navbar;
