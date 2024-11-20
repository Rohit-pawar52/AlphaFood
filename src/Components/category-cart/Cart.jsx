import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";

function Cart() {
  const [foods, setFoods] = useState([]);
  // console.log(foods)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://alpha-food.vercel.app/api/foods");
        setFoods(res.data);
      } catch (err) {
        console.log("Error fetching food data:", err);
      }
    };
    fetchData();
  }, []);

  const calculateTotals = useMemo(() => {
    const deliveryFee = 20;
    const allSubtotal = foods.reduce(
      (total, food) => total + food.price * food.quantity,
      0
    );
    const allDiscount = foods.reduce(
      (total, food) => total + food.price * food.quantity * 0.05,
      0
    );
    const totalPrice = allSubtotal - allDiscount + deliveryFee;
    return { allSubtotal, allDiscount, totalPrice };
  }, [foods]);

  const handleDelete = async (foodId) => {
    try {
      await axios.delete(`https://alpha-food.vercel.app/api/foods/${foodId}`);
      setFoods((prevFoods) => prevFoods.filter((food) => food.id !== foodId));
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };


  // to navigate to the checkout page 
  const navigate = useNavigate();
  function toCheckOut(e){
    navigate("/CheckOut", { state: {calculateTotals, foods }})
  }

  return (
    <>
      <div className="relative bg-[url('/offer/category.webp')] bg-no-repeat bg-cover bg-center w-full h-32 md:h-44">
        <div
          className="absolute top-0 left-0 w-full z-20"
          style={{ backgroundColor: `rgba(0,0,0,0.7)` }}
        >
          <div className="grid place-items-center sm:place-items-start text-white p-2 lg:p-4 lg:px-28 xl:px-32 py-8 md:py-14">
            <p className="text-3xl relative z-50 font-bold">Cart</p>
            <div className="flex text-xl">
              <Link to="/">Home / </Link>{" "}
              <Link to="/Category" className="px-2">
                Category /{" "}
              </Link>{" "}
              <p className="text-[#b69f9f]">Cart</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid lg:flex h-fit lg:mx-24 gap-5 md:my-12 my-6  md:px-0">
        <div className="w-full lg:w-[70%]">
          <table className="max-w-full min-w-full text-left md:border-spacing-5 border-separate ">
            <thead>
              <tr className="text-sm md:text-base space-x-2">
                <th>Image</th>
                <th>Product</th>
                <th>Price</th>
                <th>Tax(%)</th>
                <th>Quantity</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {foods.map((food) => {
                const subtotal = food.price * food.quantity;
                return (
                  <tr key={food._id} className="text-sm md:text-base">
                    <td>
                      <img
                        src={food.img}
                        alt={food.name}
                        className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-md"
                      />
                    </td>
                    <td className="font-bold">{food.name}</td>
                    <td>&#8377; {Math.round(food.price)}</td>
                    <td>{food.tax}</td>
                    <td>{food.quantity}</td>
                    <td>&#8377; {Math.round(subtotal)}</td>
                    <td>
                      <MdDelete
                        onClick={() => handleDelete(food.id)}
                        className="text-red-800 text-2xl cursor-pointer"
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="border py-5 w-full h-fit md:w-[30%] rounded-md px-1 md:px-2">
          <p className="text-2xl font-bold">Cart Total</p>
          <p className="font-bold">Price Details</p>
          {foods.length > 0 && (
            <>
              <div className="flex justify-between">
                <p>MRP ({foods.length} items)</p>
                <p>&#8377; {Math.round(calculateTotals.allSubtotal)}</p>
              </div>
              <div className="flex justify-between">
                <p>Delivery Fee</p>
                <p>&#8377; 20.00</p>
              </div>
              <div className="flex justify-between">
                <p>Discount</p>
                <p>&#8377; {Math.round(calculateTotals.allDiscount)}</p>
              </div>
              <div className="flex justify-between font-bold">
                <p>Total Amount</p>
                <p>&#8377; {Math.round(calculateTotals.totalPrice)}</p>
              </div>

              {/* <Link to="/CheckOut"> */}
                <button 
                onClick={toCheckOut}
                className="w-full border py-2 rounded-md bg-slate-600 text-center mt-2 text-white">
                  Proceed to buy
                </button>
              {/* </Link> */}
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Cart;
