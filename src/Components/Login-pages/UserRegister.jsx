import React, { useState } from "react";
import { TbAlpha } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
function UserRegister() {

    const [user, setuser] = useState({
        password: "",
        email: "",
        device_name: "1",
        first_name: "Xman",
        last_name: "avengers",
        phone: "9349923901",
        term: "123"
    });
    
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    
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
                    const res = await axios.post("https://hellostay.com/api/auth/register", user);
                    Swal.fire("user info submitted successfully");
                    console.log(res);
                    setuser({
                      password: "",
                      name: "",
                      email: ""
                    });
                    navigate("/UserLogin");
                } catch (error) {
                    console.error("Error saving user:", error);
                }
        } else {
          Swal.fire("Please fill out all required details correctly");
        }
    };
    
    const validateForm = (data) => {
        const errors = {};
    
        if (!data.password.trim()) {
            errors.password = 'Mobile password is required';
        } else if (data.password.length < 6) {
            errors.password = 'password at least 6 digits';
        }
        if (!data.name.trim()) {
            errors.name = 'Name is required';
        } else if (data.name.length < 4) {
            errors.name = 'at least 4 alphabets';
        }
        if (!data.email.trim()) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(data.email)) {
            errors.email = 'Email is invalid';
        }
    
        return errors;
    };
    
    const isFormValid = user.password && user.name && user.email;

  return (
    <>
      <div className="container md:grid md:grid-cols-2 px-2 lg:px-28 my-12">
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
            <p className="text-sm md:text-base">Enter your details</p>
          </div>
          
          {/* register form */}
          <div className="grid gap-2 grid-cols-2 text-center mt-5 md:mt-0">
            <Link
              to="/UserLogin"
              className="border p-2 rounded-md border-[#999898]"
            >
              Login
            </Link>
            <p className="border p-2 rounded-md text-red-500 bg-pink-100">
              Register
            </p>
          </div>
          <form onSubmit={formSubmit}>
          <input
            type="text"
            name="password"
            value={user.password}
            onChange={handleChange}
            placeholder="Mobile password"
            className="w-full rounded py-2 my-1 px-2 outline-none border border-[#d7d4d4]"
          />
          {errors.password && <span className="text-red-950">{errors.password}</span>}
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
            placeholder="Name"
            className="w-full rounded py-2 my-1 px-2 outline-none border border-[#d7d4d4]"
          />
          {errors.name && <span className="text-red-950">{errors.name}</span>}
          <input
            type="text"
            name="email"
            value={user.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full rounded py-2 my-1 px-2 outline-none border border-[#d7d4d4]"
          />
          {errors.email && <span className="text-red-950">{errors.email}</span>}
          <button
            type="submit"
            className="w-full p-2 bg-[#302c2c] text-white text-center rounded-md"
          >
            Register
          </button>
          </form>
          <Link
            to="/"
            className="absolute w-12 top-32 md:top-[20%] right-2 md:left-[5%] text-base md:text-xl font-bold"
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

export default UserRegister;
