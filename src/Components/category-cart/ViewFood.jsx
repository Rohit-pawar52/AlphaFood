import React from "react";
import { Link, useLocation } from "react-router-dom";
function ViewFood() {
  const location = useLocation();
  const food = location.state || {};
  console.log(food);

  return (
    <>
      <div className="relative bg-[url('/offer/category.webp')] bg-no-repeat bg-cover bg-center w-full h-32 md:h-44">
        <div
          className="absolute top-0 left-0 w-full z-20"
          style={{ backgroundColor: `rgba(0,0,0,0.7)` }}
        >
          <div className="grid place-items-center md:place-items-start text-white p-3 md:px-28 py-8 md:py-14">
            <p className="text-3xl relative z-50 font-bold">Cart</p>
            <div className="flex text-xl">
              <Link to="/">Home / </Link>{" "}
              <Link to="/Category" className="px-2">
                Category /{" "}
              </Link>{" "}
              <p className="text-[#b69f9f]">{food.name.toUpperCase()}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid place-items-center p-2">
        <center className="text-3xl text-red-500 my-5">Tasty Food Yummy!!!!</center>
        <div key={food.id} className="flex md:w-[500px] gap-10 rounded-md border-2 p-2">
          <img src={food.img} alt="" className="w-40 h-44 md:h-52 md:w-56 rounded-md" />
          <div>
            <p className="text-2xl font-bold md:my-2">Food Details</p>
            <div className="flex justify-between">
              <p>Name:</p>
              {food.name}
            </div>
            <div className="flex justify-between">
              <p>Price:</p>
              {food.price}
            </div>
            <div className="flex justify-between">
              <p>Rating:</p>
              {food.rating}
            </div>
            <div className="flex justify-between">
              <p>Tax(%):</p>
              {food.tax}
            </div>
            <Link  to="/Category" >
            <button className="w-full border py-2 rounded-md bg-slate-600 text-center mt-2 text-white">Buy Now</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewFood;
