import React, { useState } from "react";
import { TbAlpha } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
function UserLogin() {
  const navigate = useNavigate();
  const [user, setuser] = useState({
    number: "",
    password: "",
    email: "shivani@gmail.com",
    device_name: "1"
});

const [errors, setErrors] = useState({});

const handleChange = (e) => {
    const { name, value } = e.target;
    setuser((prevuser) => ({
        ...prevuser,
        [name]: value
    }));
};

const formSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm(user);
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
            try {
                const res = await axios.post("https://hellostay.com/api/auth/login", user);
                Swal.fire("user info submitted successfully");
                // console.log(res);
                localStorage.setItem("user", JSON.stringify(res.data.user));
                setuser({
                  number: "",
                  password: "",
                });
                navigate("/")
            } catch (error) {
                console.error("Error saving user:", error);
            }
    } else {
      Swal.fire("Please fill out all required details correctly");
    }
};

const validateForm = (data) => {
    const errors = {};

    if (!data.number.trim()) {
        errors.number = 'Mobile number is required';
    } else if (data.number.length !== 10) {
        errors.number = 'Number must be exactly 10 digits';
    }
    if (!data.password.trim()) {
        errors.password = 'Password is required';
    } else if (data.password.length < 6) {
        errors.password = 'at least 6 digits';
    }

    return errors;
};

const isFormValid = user.number && user.password;


  return (
    <>
      <div className="container md:grid md:grid-cols-2 px-2 m-auto lg:px-28 my-12">
        <div className="container lg:px-10">
          <div className="hidden md:flex items-center font-extrabold ms-[-10px]">
            <TbAlpha className="text-6xl md:text-7xl md:mt-2 me-[-5px]" />
            <div className="leading-5 md:leading-3">
              <p className="md:text-4xl">
                ALPHA<span className="md:hidden">FOOD</span>
              </p>
              <p className="hidden md:block">FOOD PLATINUM</p>
              <p className="md:hidden">PLATINUM</p>
            </div>
          </div>
          <div>
            <p className="text-2xl font-bold">Welcome back</p>
            <p className="text-sm md:text-base">Enter your mobile number</p>
          </div>

          {/* login form */}
          <div className="grid gap-2 grid-cols-2 text-center mt-5">
            <p className="border p-2 rounded-md text-red-500 bg-pink-100">
              Login
            </p>
            <Link
              to="/UserRegister"
              className="border border-[#999898] p-2 rounded-md"
            >
              Register
            </Link>
          </div>
          <form onSubmit={formSubmit}>
          <input
            type="text"
            name="number"
            value={user.number}
            onChange={handleChange}
            placeholder="Mobile Number"
            className="w-full rounded py-2 my-1 px-2 outline-none border border-[#d7d4d4]"
          />
          {errors.number && <span className="text-red-950">{errors.number}</span>}
          <input
            type="text"
            name="password"
            value={user.password}
            onChange={handleChange}
            placeholder="Password"
            className="w-full rounded py-2 my-1 px-2 outline-none border border-[#d7d4d4]"
          />
          {errors.password && <span className="text-red-950">{errors.password}</span>}
          <button
            type="submit"
            className="w-full p-2 bg-[#302c2c] text-white text-center rounded-md"
          >
            Login
          </button>
          </form>
          <Link
            to="/"
            className="absolute w-12 top-32 md:right-[2%] lg:top-[20%] right-2 lg:left-[5%] text-base md:text-xl font-bold"
          >
            Back
          </Link>
        </div>
        <div className="container mx-auto sm:px-2 lg:px-10 md:py-0">
          <img
            src="loginimg.png"
            alt=""
            className="w-full mt-5 md:mt-0 h-64 md:h-96"
          />
        </div>
      </div>
    </>
  );
}

export default UserLogin;
