import React from "react";
import { Link } from "react-router-dom";

function RegisterRestro() {
  return (
    <>
      <div className="relative bg-[url('/offer/category.webp')] bg-no-repeat bg-cover bg-center w-full h-32 md:h-44">
        <div
          className="absolute top-0 left-0 w-full z-20"
          style={{ backgroundColor: `rgba(0,0,0,0.7)` }}
        >
          <div className="text-white p-3 md:px-28 py-8 md:py-14">
            <p className="text-3xl relative z-50 font-bold">
              Create Restaurant
            </p>
            <div className="flex text-xl">
              <Link to="/">Home / </Link>
              <p className="px-2 text-[#b69f9f]">Partner / </p>
              <p className="text-[#b69f9f]">Create Restaurant</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-2 rounded-md bg-pink-200 p-5 mx-2 my-5 md:my-10 md:mx-28">
          <center className="text-3xl font-bold">
            Create your Restaurant Page 
          </center>
          <center className="text-sm">Restaurnt name, address, contact no, owner details</center>
          <div className="hidden md:flex flex-wrap justify-evenly gap-24 relative mt-5">
            <p className="flex justify-center items-center border rounded-full w-7 h-7 z-10 bg-pink-200 border-black">1</p>
            <p className="flex justify-center items-center border rounded-full w-7 h-7 z-10 bg-pink-200 border-black">2</p>
            <p className="flex justify-center items-center border rounded-full w-7 h-7 z-10 bg-pink-200 border-black">3</p>
            <p className="flex justify-center items-center border rounded-full w-7 h-7 z-10 bg-pink-200 border-black">4</p>
            <p className="flex justify-center items-center border rounded-full w-7 h-7 z-10 bg-pink-200 border-black">5</p>
          <p className="absolute border border-black w-[790px] top-3 z-0"></p>
          </div> 
          <div className="hidden md:flex justify-evenly ">
            <p>Restaurant Information</p>
            <p>Restaurant type & Timings</p>
            <p>Upload images</p>
            <p>Upload Documents</p>
            <p>Upload Documents</p>
          </div> 
      </div>
    </>
  );
}

export default RegisterRestro;
