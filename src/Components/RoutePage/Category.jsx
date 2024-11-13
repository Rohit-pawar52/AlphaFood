import React, { useState } from "react";
import axios from "axios";
import FoodData from '../FoodData.json';
import { Link } from "react-router-dom";
import { IoGrid } from "react-icons/io5";
import { IoList } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

function Category() {
  const [view, setView] = useState("grid"); 
  const navigate = useNavigate();

  const categoryClick = async (e) => {
    const itemId = parseInt(e.target.id, 10);
    const categorydata = FoodData.find((data) => data.id === itemId);
    
    if (categorydata && categorydata.tax) {
      const taxValue = categorydata.tax;
      if (typeof taxValue === 'string' && taxValue.includes('%')) {
        categorydata.tax = parseFloat(taxValue.replace('%', ''));
      }
    }
  
    if (categorydata) {
      try {
        const res = await axios.post("http://localhost:3001/api/foods", categorydata);
        console.log("Data saved:", res.data);
        navigate("/Cart");
      } catch (error) {
        console.error("Error saving data:", error);
      }
    }
  };
  

  return (
    <>
      <div className="relative bg-[url('/offer/category.jpg')] bg-no-repeat bg-cover bg-center w-full">
        <div className="font-extrabold p-2 md:p-8">
          <p className="text-2xl">Category</p>
          <div className="flex text-[#654040]">
            <Link to="/">Home / </Link> <p className="ps-2">Category</p>
          </div>
        </div>
      </div>

      <div className="flex justify-between px-2 md:px-28 py-5">
        <div className="text-2xl font-bold">Products</div>
        <div className="flex justify-evenly items-center gap-2">
          <p>Sort By</p>
          <p>Show</p>
          <IoGrid 
            className={`text-xl cursor-pointer ${view === "grid" ? "text-blue-500" : ""}`} 
            onClick={() => setView("grid")}
          />
          <IoList 
            className={`text-xl cursor-pointer ${view === "list" ? "text-blue-500" : ""}`} 
            onClick={() => setView("list")}
          />
        </div>
      </div>

      <div className={`flex ${view === "grid" ? "flex-wrap" : "grid md:grid-cols-2 md:mx-20"} justify-center gap-5 p-5 md:gap-10 md:p-5`}>
        {FoodData.map((data, id) => (
          <div 
            key={id} 
            className={`w-80 h-64 rounded-md border ${view === "list" ? "w-full" : ""}`}
          >
            <Link to="/Category">
              <img src={data.img} alt="" className="w-96 h-44 rounded-md"/>
            </Link>
            <div className="flex justify-between px-2">
              <p className="text-xl font-bold">{data.name}</p>
              <p>&#11088; {data.rating}</p>
            </div>
            <div className="flex justify-between px-2">
              <p className="opacity-70">&#8377; {data.price}</p>
              <p onClick={categoryClick} id={data.id} className="border px-2 py-1 rounded-md border-pink-500 text-pink-500 cursor-pointer">
                Add to cart
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Category;
