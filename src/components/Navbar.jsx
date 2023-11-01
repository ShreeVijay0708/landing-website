import React, { useState } from "react";
import { IoReorderThreeSharp } from "react-icons/io5";
import { Link } from "react-scroll";
import { RxCross2 } from "react-icons/rx";
import { HiArrowSmUp } from "react-icons/hi";
const Navbar = () => {
  const [open, setopen] = useState(false);

  return (
    <div className="flex justify-between p-10 md:pr-20 md:pl-32 z-50 relative bg-transparent">
      <div className="md:text-4xl text-2xl font-bold head z-10">
        Jithwa Solutions
      </div>
      <div className="md:flex hidden text-xl font-semibold gap-11 tracking-wide z-10 bg-transparent">
        <Link
          to="vision"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          className="bg-transparent cursor-pointer"
        >
          Our Vision
        </Link>
        <Link
          to="service"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          className="bg-transparent cursor-pointer"
        >
          Our Services
        </Link>
        <Link
          to="whyus"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          className="bg-transparent cursor-pointer"
        >
          Why Us?
        </Link>
        <Link
          to="contact"
          spy={true}
          smooth={true}
          duration={500}
          className="bg-transparent cursor-pointer"
        >
          Contact Us
        </Link>
      </div>
      <div
        className="md:hidden text-3xl cursor-default"
        onClick={() => setopen(!open)}
      >
        {(open && <RxCross2 />) || <IoReorderThreeSharp />}
      </div>
      {open && (
        <div className="text-xl flex flex-col absolute top-24 left-0 w-full text-center font-semibold gap-11 tracking-wide bg-[#11112b]">
          <Link
            to="vision"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className="bg-transparent cursor-pointer"
            onClick={()=>setopen(false)}
          >
            Our Vision
          </Link>
          <Link
            to="service"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className="bg-transparent cursor-pointer"
            onClick={()=>setopen(false)}
          >
            Our Services
          </Link>
          <Link
            to="whyus"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className="bg-transparent cursor-pointer"
            onClick={()=>setopen(false)}
          >
            Why Us?
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            className="bg-transparent cursor-pointer"
            onClick={()=>setopen(false)}
          >
            Contact Us
          </Link>
        </div>
      )}
      <Link
        to="top"
        spy={true}
        smooth={true}
        duration={500}
        className=" fixed md:bottom-8 bottom-6 md:right-12 right-6 text-5xl rounded-full cursor-pointer opacity-70  up"
      >
        <HiArrowSmUp className=" bg-transparent" />
      </Link>
    </div>
  );
};

export default Navbar;
