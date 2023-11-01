import React, { useState } from "react";
import { IoReorderThreeSharp } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import {HiArrowSmUp} from "react-icons/hi"
const Navbar = () => {
  const [open, setopen] = useState(false);

  return (
    <div className="flex justify-between p-10 md:pr-20 md:pl-32 z-50 relative bg-transparent">
      <div className="md:text-4xl text-2xl font-bold head z-10">
        Jithwa Solutions
      </div>
      <div className="md:flex hidden text-xl font-semibold gap-11 tracking-wide z-10 bg-transparent">
        <a href="#vision" className="bg-transparent">
          Our Vision
        </a>
        <a href="#service" className="bg-transparent">
          Our Services
        </a>
        <a href="#whyus" className="bg-transparent">
          Why Us?
        </a>
        <a href="#contact" className="bg-transparent">
          Contact Us
        </a>
      </div>
      <div
        className="md:hidden text-3xl cursor-default"
        onClick={() => setopen(!open)}
      >
        {(open && <RxCross2 />) || <IoReorderThreeSharp />}
      </div>
      {open && (
        <div className="text-xl flex flex-col absolute top-24 left-0 w-full text-center font-semibold gap-11 tracking-wide bg-[#11112b]">
          <a href="#vision" className="bg-transparent">
            Our Vision
          </a>
          <a href="#service" className="bg-transparent">
            Our Services
          </a>
          <a href="#whyus" className="bg-transparent">
            Why Us?
          </a>
          <a href="#contact" className="bg-transparent">
            Contact Us
          </a>
        </div>
      )}
      <a href="#top" className=" fixed bottom-8 right-12 text-5xl rounded-full cursor-pointer opacity-70  up">
          <HiArrowSmUp className=" bg-transparent"/>
      </a>
    </div>
  );
};

export default Navbar;
