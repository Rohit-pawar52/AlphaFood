import React from "react";
import Slider from "./Slider";
import Offercard from "./Offercard";
import Restaurent from "./Restaurent";

function HomePage() {
  return (
    <>
      <div>
    <img src="/home-img.png" alt="" className='md:w-[100vw] md:h-[70vh]' />
    </div>

      <Slider/>
      <Offercard />
      <Restaurent/>
    </>
  );
}

export default HomePage;
