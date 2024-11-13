import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";

function Cart() {
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

  const calculateTotals = useMemo(() => {
    const deliveryFee = 20;
    const allSubtotal = foods.reduce((total, food) => total + food.price * food.quantity, 0);
    const allDiscount = foods.reduce((total, food) => total + food.price * food.quantity * 0.05, 0);
    const totalPrice = allSubtotal - allDiscount + deliveryFee;
    return { allSubtotal, allDiscount, totalPrice };
  }, [foods]);

  const handleDelete = async (foodId) => {
    try {
      await axios.delete(`http://localhost:3001/api/foods/${foodId}`);
      setFoods((prevFoods) => prevFoods.filter((food) => food.id !== foodId));
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  return (
    <>
      <div className="bg-[url('/offer/category.jpg')] bg-cover bg-no-repeat bg-center w-full">
        <div className="font-extrabold p-2 md:p-8">
          <p className="text-2xl">Category</p>
          <div className="flex text-[#654040]">
            <Link to="/" className="hover:text-gray-400">
              Home /
            </Link>
            <Link to="/Category" className="px-2 hover:text-gray-400">
              Category /
            </Link>
            <p>Cart</p>
          </div>
        </div>
      </div>

      <div className="grid gap-5 md:flex md:justify-center md:gap-20 md:mx-16 my-5 px-2">
        <div className="w-full md:w-[70%]">
          <table className="min-w-full text-left">
            <thead>
              <tr className="border-b-2">
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
                        className="w-12 h-12 md:w-20 md:h-20 rounded-md"
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

        <div className="border-2 py-5 w-full md:w-[30%] rounded-md px-2">
          <p className="text-2xl font-bold">Cart Total</p>
          <p>Price Details</p>
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
              <button
                onClick={() => alert("Thanks For Purchasing")}
                className="w-full border py-2 rounded-md bg-slate-600 text-center mt-2 text-white"
              >
                Proceed to buy
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Cart;
