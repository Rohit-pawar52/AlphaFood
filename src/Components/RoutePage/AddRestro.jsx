import React from "react";
import { Link } from "react-router-dom";
import { CiCircleCheck } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { CiShop } from "react-icons/ci";
import { IoBagCheck } from "react-icons/io5";
import { IoDocumentTextOutline } from "react-icons/io5";
import { MdOutlineDeliveryDining } from "react-icons/md";
import { FaBoxOpen } from "react-icons/fa";
function AddRestro() {
  return (
    <>
      {/* 1st */}
      <div className="grid md:grid-cols-2">
        <div className="p-5 md:p-0 md:ps-28 md:pt-12">
          <p className="text-2xl md:text-3xl text-center md:text-left font-bold">
            Partner with us <br />
            at 0% commision for the 1st month!
          </p>
          <p className="text-sm text-center md:text-left">
            And get ads worth INR 1500. Valid for new restaurent partner in
            select cities
          </p>
          <p className="md:w-48 text-sm mt-1 md:mt-2 text-center text-white p-2 border rounded-md bg-[#060606e6]">
          <Link to="/RegisterRestro">  Register your restaurent</Link>
            </p>
        </div>
        <div className="px-5 md:px-0">
          <img src="redbg.png" alt="" className="h-44 md:h-60 w-full" />
        </div>
      </div>

      {/* 2nd */}
      <div className="grid gap-5 md:gap-0 md:grid-cols-2 md:place-items-start rounded-md bg-pink-200 p-5 mx-5 my-10 md:mx-28">
        <div>
          <p className="text-3xl font-bold">
            Get started with <br />
            online ordering
          </p>
          <p>Please keep the documents ready for a smooth signup</p>
        </div>
        <div className="grid md:grid-cols-2 gap-3">
          <div className="flex gap-2">
            <CiCircleCheck />
            <p>FSSAI license copy</p>
          </div>
          <div className="flex gap-2">
            <CiCircleCheck />
            <p>Your restaurant menu</p>
          </div>
          <div className="flex gap-2">
            <CiCircleCheck />
            <p>banck account details</p>
          </div>
          {/* </div>
        <div className="grid gap-3"> */}
          <div className="flex gap-2">
            <CiCircleCheck />
            <p>Regular GSTIN (if applicable)</p>
          </div>
          <div className="flex gap-2">
            <CiCircleCheck />
            <p>Pan card copy</p>
          </div>
          <div className="flex gap-2">
            <CiCircleCheck />
            <p>Dish images for top 5 items</p>
          </div>
        </div>
      </div>

      {/* 3rd */}
      <div className="bg-[#060606e6] grid gap-2 px-5 md:px-28 py-10">
        <center className="text-white font-bold">
          Why should you partner with <br />
          Jetsetter India ?
        </center>
        <center className="text-[#8c7d7d]">
          jetsetter India enables you to get 60% more revenue, 10x new customers
          and boost your brand <br />
          visibility by providing insights to improve your business
        </center>
        <div className="grid grid-cols-2 md:flex gap-2 md:gap-5 justify-center">
          <div className="md:w-1/3 flex gap-2 items-center rounded-md text-xl font-extrabold bg-[#605151] text-white py-5 md:px-10">
            <CiLocationOn className="text-red-500 text-5xl" />
            <p>
              1000+ cities <br />
              in india
            </p>
          </div>
          <div className="flex md:w-1/3 gap-2 items-center rounded-md text-xl font-extrabold bg-[#605151] text-white py-5 md:px-10">
            <CiShop className="text-red-500 text-5xl" />
            <p>
              3 lakh+ <br />
              restaurant <br />
              listings
            </p>
          </div>
          <div className="flex md:w-1/3 gap-2 items-center rounded-md text-xl font-extrabold bg-[#605151] text-white py-5 md:px-10">
            <IoBagCheck className="text-red-500 text-5xl" />
            <p>
              5.0 crore+ <br />
              monthly <br />
              orders
            </p>
          </div>
        </div>
      </div>

      {/* 4th */}
      <div className="grid gap-10 place-items-center text-center m-10">
        <center className="text-3xl font-extrabold">how it works</center>
        <div className="grid md:grid-cols-3 gap-5 md:gap-28 place-items-center relative">
          <div className="grid gap-5 place-items-center">
            <IoDocumentTextOutline className="w-20 h-20 text-5xl border-4 box-border rounded-md bg-slate-200 p-2" />
            <p className="text-2xl font-bold">Step 1</p>
            <p>
              Create your page on jetsetter India <br /> Help users discoveryour
              place by <br /> creating a listing on Jetsetter India
            </p>
          </div>
          <div className="grid gap-5 place-items-center">
            <MdOutlineDeliveryDining className="w-20 h-20 text-5xl border-4 box-border rounded-md p-2 bg-red-500" />
            <p className="text-2xl font-bold">Step 2</p>
            <p>
              Register for online ordering <br /> And deliver orders to millions
              of <br /> customers with ease
            </p>
          </div>
          <div className="grid gap-5 place-items-center">
            <FaBoxOpen className="w-20 h-20 text-5xl border-4 box-border rounded-md bg-slate-200 p-2" />
            <p className="text-2xl font-bold">Step 3</p>
            <p>
              Start receiving orders online <br /> Manage orders on our partner
              app,
              <br />
              web dashboardor API partners
            </p>
          </div>
          <div
          className="hidden md:block absolute top-[10%] left-[20%]"
            style={{
              width: "220px",
              height: "100px",
              borderTop: "dashed 3px  #000",
              borderColor: "#000",
              borderRadius: "90%/100px 100px 0 0",
            }}
          ></div>
          <div
          className="hidden md:block absolute top-[-10%] right-[20%]"
            style={{
              width: "220px",
              height: "110px",
              borderBottom: "dashed 3px #000",
              borderColor: "#000",
              borderRadius: "0 0 200px 90%/100px ",
            }}
          ></div>
        </div>
      </div>
    </>
  );
}

export default AddRestro;
