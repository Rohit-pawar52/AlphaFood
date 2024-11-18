import React, { useState } from "react";
import Modal from "./Modal";
import { Link, useLocation } from "react-router-dom";

function CheckOut() {
  const location = useLocation();
  const { calculateTotals, foods } = location.state || {};

  const [isModalOpen, setModalOpen] = useState(false);

  const paymentData = {
    amount: calculateTotals.totalPrice,
    method: "Google Pay",
    status: "Completed",
  };
  return (
    <>
      <div className="relative bg-[url('/offer/category.webp')] bg-no-repeat bg-cover bg-center w-full h-32 md:h-44">
        <div
          className="absolute top-0 left-0 w-full z-20"
          style={{ backgroundColor: `rgba(0,0,0,0.7)` }}
        >
          <div className="grid place-items-center md:place-items-start text-white p-3 md:px-28 py-8 md:py-14">
            <p className="text-3xl relative z-50 font-bold">Checkout</p>
            <div className="flex text-xl">
              <Link to="/">Home / </Link>{" "}
              <Link to="/Category" className="px-2">
                Category /{" "}
              </Link>{" "}
              <Link to="/Cart">Cart /</Link>
              <p className="ps-2 text-[#b69f9f]">Checkout</p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-2 md:p-3 md:py-5 md:px-14  max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
        <div className="flex-1">
          <div className="mb-6">
            <div className="flex justify-between border-b">
              <p className="text-2xl font-bold mb-2">Shipping Address</p>
              <button className="text-red-500">Edit</button>
            </div>
            <p className="pt-5">
              Rohit Pawar
              <br />
              G-17 1st Mangal Bhavan, Vijay Nagar (Indore), near Police Station
              <br />
              Indore, Madhya Pradesh - 452010
              <br />
              Phone number - 6261730018
            </p>
          </div>

          <div className="mb-6">
            <h2 className="text-lg font-bold mb-4">Payment Method</h2>
            <div className="space-y-4">
              {[
                "Cash on Delivery",
                "RazorPay",
                "UPI Payment",
                "Google Pay",
                "Phone Pay",
              ].map((method, index) => (
                <label key={index} className="flex items-center">
                  <input
                    type="radio"
                    name="payment"
                    className="mr-2"
                    defaultChecked={method === "Cash on Delivery"}
                  />
                  <span>{method}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        <div className="flex-shrink-0 w-full md:w-80 md:p-4 border rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>
          <div className="mb-4">
            {foods.map((data, index) => (
              <div
                key={index}
                className="flex justify-between mb-2 pb-2 border-b"
              >
                <div className="flex gap-2">
                  <img src={data.img} alt="" className="w-14 h-14 rounded-md" />
                  <div>
                    <p className="font-medium">{data.name}</p>
                    <p className="text-sm leading-3">Qty: 1</p>
                    <p className="text-sm">Tax: {data.tax}</p>
                  </div>
                </div>
                <p className="font-medium">&#8377;{data.price}</p>
              </div>
            ))}
          </div>

          <div className="mb-4 pb-4 border-b">
            <h3 className="font-bold mb-2">Tip your delivery partner</h3>
            <p className="text-sm text-gray-600 mb-4">
              Your kindness means a lot! 100% of your tip will go directly to
              them.
            </p>
            <div className="flex gap-2">
              {[10, 30, 50].map((amount) => (
                <button
                  key={amount}
                  className={`px-4 py-2 border rounded ${
                    amount === 50 ? "bg-red-500 text-white" : "border-gray-300"
                  }`}
                >
                  {amount}
                </button>
              ))}
            </div>
          </div>

          <div className="flex gap-2 justify-center items-center mb-4 border-b pb-4">
            <input
              type="text"
              placeholder="Promo Code"
              className="w-full border p-2 rounded outline-none"
            />
            <button className="bg-gray-800 text-white p-2 w-full rounded">
              Redeem
            </button>
          </div>

          <div className="mb-4">
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

                <button
                  onClick={() => setModalOpen(true)}
                  className="w-full border py-2 rounded-md bg-black text-center mt-2 text-white"
                >
                  Proceed to buy
                </button>

                <Modal
                  isOpen={isModalOpen}
                  onClose={() => setModalOpen(false)}
                  paymentData={paymentData}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default CheckOut;
