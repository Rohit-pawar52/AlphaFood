import React, { useState, useEffect } from "react";
import axios from "axios";
import FoodData from "../FoodData.json";
import { Link } from "react-router-dom";
import { IoGrid } from "react-icons/io5";
import { IoList } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function Category() {
  const userData = JSON.parse(localStorage.getItem("user"));
  const [view, setView] = useState("grid");
  const navigate = useNavigate();

  const categoryClick = async (e) => {
    if ( userData ) {
    const itemId = parseInt(e.target.id, 10);
    if (!checkdata.includes(itemId.toString())) {
      const categorydata = FoodData.find((data) => data.id === itemId);

      if (categorydata && categorydata.tax) {
        const taxValue = categorydata.tax;
        if (typeof taxValue === "string" && taxValue.includes("%")) {
          categorydata.tax = parseFloat(taxValue.replace("%", ""));
        }
      }

      if (categorydata) {
        try {
          const res = await axios.post(
            "https://alpha-food.vercel.app/api/foods",
            categorydata
          );
          navigate("/Cart");
        } catch (error) {
          console.error("Error saving data:", error);
        }
      }
    } else {
      Swal.fire("Already added");
    }
  } else {
    Swal.fire("Please Login First!")
    navigate("/UserLogin")
  }
  };

  const [stored, setStored] = useState([]);
  const [checkdata, setCheckdata] = useState([]);

  useEffect(() => {
    setCheckdata(stored.map((data) => data.id));
  }, [stored]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://alpha-food.vercel.app/api/foods");
        setStored(res.data);
      } catch (err) {
        console.log("Error fetching food data:", err);
      }
    };
    fetchData();
  }, []);

  // to navigate to ViewFood
  function foodView(e){
    const id = parseInt(e.target.id, 10);
    const categoryfood = FoodData.find((data) => data.id === id);
    console.log(categoryfood)
    if(categoryfood){
      navigate("/ViewFood",  { state:  categoryfood })
    }
  }

  return (
    <>
      <div className="relative bg-[url('/offer/category.webp')] bg-no-repeat bg-cover bg-center w-full h-32 md:h-44">
        <div
          className="absolute top-0 left-0 w-full z-20"
          style={{ backgroundColor: `rgba(0,0,0,0.7)` }}
        >
          <div className="grid place-items-center sm:place-items-start text-white p-4 md:px-20 lg:px-28 xl:px-32 py-8 md:py-14">
            <p className="text-3xl relative z-50 font-bold">Category</p>
            <div className="flex text-xl">
              <Link to="/">Home / </Link>{" "}
              <p className="ps-2 text-[#b69f9f]">Category</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 sm:pe-16 md:px-20 lg:px-28 xl:px-32 py-5 px-2 md:py-10">
        <div className="text-3xl font-bold py-2 text-center md:text-left md:py-0 p-2 md:p-0">
          Products
        </div>
        <div className="flex justify-center sm:justify-end gap-5 sm:gap-3 items-center">
          <select
            name="Sort By"
            id="food"
            className="border p-2 text-[14px] sm:text-base rounded-md outline-none"
          >
            <option value="sort">Sort By</option>
            <option value="veg">Veg Only</option>
            <option value="non veg">Non Veg</option>
          </select>
          <select
            name="Sort By"
            id="food"
            className="border p-2 text-[14px] sm:text-base rounded-md outline-none"
          >
            <option value="sort">Show</option>
          </select>
          <IoGrid
            className={`border w-8 h-8 sm:h-10 sm:w-10 p-2 rounded-md text-xl sm:text-2xl cursor-pointer ${
              view === "grid" ? "text-red-500 border-red-500" : ""
            }`}
            onClick={() => setView("grid")}
          />
          <IoList
            className={`border w-8 h-8 sm:h-10 sm:w-10 p-2 rounded-md text-xl sm:text-3xl cursor-pointer ${
              view === "list" ? "text-red-500 border-red-500" : ""
            }`}
            onClick={() => setView("list")}
          />
        </div>
      </div>

      <div
        className={` pb-5 ${
          view === "grid"
            ? "grid md:grid-cols-3 place-items-center px-2 md:px-20 gap-y-5"
            : "grid md:grid-cols-2 place-items-center md:px-20 gap-y-5"
        }`}
      >
        {FoodData.map((data, id) => (
          <div
            key={id}
            className={`rounded-md border ${
              view === "list"
                ? "grid grid-cols-2 w-[90%]"
                : "p-2 md:p-0 md:pb-2"
            }`}
          >
            
              <img
                src={data.img}
                alt=""
                className="w-96 h-44 md:w-80 md:h-40 rounded-md"
                onClick= {foodView}
                id = {data.id}
              />
            <div className={`${view === "list" ? "pt-8" : ""}`}>
              <div className="flex justify-between p-2">
                <p className="font-bold">{data.name.toUpperCase()}</p>
                <p>&#11088; {data.rating}</p>
              </div>
              <div
                className={`${
                  view === "list"
                    ? "w-48 text-center px-2"
                    : "flex justify-between px-2"
                }`}
              >
                <p className="opacity-70 text-left">&#8377;{data.price}</p>
                <p
                  onClick={categoryClick}
                  id={data.id}
                  className="border px-8 py-1 rounded-md border-pink-500 text-pink-500 cursor-pointer"
                >
                  Add to cart
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Category;
