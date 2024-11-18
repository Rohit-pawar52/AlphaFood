import React from "react";
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

function Slider() {
  const foods = [
    { name: "burger", img: "/offer/burger.png" },
    { name: "pizza", img: "/offer/pizza.png" },
    { name: "fries", img: "/offer/fries.png" },
    { name: "biscuit", img: "/offer/biscuit.png" },
    { name: "burger", img: "/offer/burger.png" },
    { name: "pizza", img: "/offer/pizza.png" },
    { name: "fries", img: "/offer/fries.png" },
    { name: "biscuit", img: "/offer/biscuit.png" },
  ];

  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      spaceBetween={10}
      // slidesPerView={7}
      breakpoints={{
        400: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 5,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 7,
          spaceBetween: 0,
        },
      }}
      navigation
      loop={true}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
    >
      {foods.map((data, id) => (
        <SwiperSlide key={id}>
          <div className="p-2 grid justify-center items-center text-center">
            <img src={data.img} className="w-24 h-24 rounded-full" />
            <p>{data.name}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Slider;
