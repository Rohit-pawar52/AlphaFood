import React from "react";
import { Link } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
function Restaurent() {
  const restaurent = [
    {
      name: "Restaurent1",
      type: "Veg Resturent",
      rating: "4.3",
      location: "Indore",
      img: "/offer/restaurent1.jpg",
    },
    {
      name: "Restaurent1",
      type: "Veg Resturent",
      rating: "4.3",
      location: "Indore",
      img: "/offer/restaurent1.jpg",
    },
    {
      name: "Restaurent1",
      type: "Veg Resturent",
      rating: "4.3",
      location: "Indore",
      img: "/offer/restaurent1.jpg",
    },
    {
      name: "Restaurent1",
      type: "Veg Resturent",
      rating: "4.3",
      location: "Indore",
      img: "/offer/restaurent1.jpg",
    },
    {
      name: "Restaurent1",
      type: "Veg Resturent",
      rating: "4.3",
      location: "Indore",
      img: "/offer/restaurent1.jpg",
    },
    {
      name: "Restaurent1",
      type: "Veg Resturent",
      rating: "4.3",
      location: "Indore",
      img: "/offer/restaurent1.jpg",
    },
  ];

  return (
    <>
    <div className="sm:flex justify-between px-2 md:px-4 py-5 xl:px-28 2xl:px-4">
        <div>
            <p className="text-2xl md:text-4xl font-bold">Restaurent</p>
            <p>Lorem ipsum dolor sit amet consectetur</p>
        </div>
        <div className="flex sm:justify-between gap-6 items-center">
            <p className="border border-red-500 rounded-md text-red-500 p-1">Veg & Non Veg</p>
            <p className="border rounded-md p-1 bg-slate-200">Non Veg</p>
            <p className="border rounded-md p-1 bg-slate-200">Pure Veg</p>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-5 sm:p-5 md:gap-10 md:p-5">
        {
            restaurent.map((data, id) =>(
        <div key={id} className="w-80 h-64 rounded-md border">
           <Link to="/Category" ><img src={data.img} alt="" className="w-80 h-44 rounded-md"/></Link> 
            <div className="flex justify-between px-2">
            <p className="text-xl font-bold">{data.name}</p>
            <p>&#11088; {data.rating}</p>
            </div>
            <p className="text-sm ps-2">({data.type})</p>
            <div className="flex items-center ps-2 gap-1">
            <CiLocationOn/> <span>{data.location}</span>
            </div>
        </div>
         ))
        }
      </div>
    </>
  );
}

export default Restaurent;
