import React, { useRef, useState } from "react";
import {Link} from "react-scroll"
import emailjs from "@emailjs/browser";
import twitter from "../assets/twitter.svg";
import facebook from "../assets/facebook.svg";
import linkdn from "../assets/linkdn.svg";
import instagram from "../assets/instagram.svg";
import arrow2 from "../assets/arrow2.svg";
import {BiLogoLinkedin} from "react-icons/bi"
const Footer = () => {
  const form = useRef();
  const [message, setMessage] = useState(false);
  const [email, setEmail] = useState("");
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1ghnfwa",
        "template_ilbvupz",
        form.current,
        "66heUM7d5IvEC2RoT"
      )
      .then(
        (result) => {
          console.log(result.text);
          setMessage(true);

          setEmail("");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="md:mx-32 mx-4 my-24 mt-32">
      <div className="md:flex">
        <div className="md:w-1/2">
          <div className="md:text-4xl text-3xl font-bold head z-10">
            Jithwa Solutions
          </div>
          <div className="flex items-center md:gap-12 gap-8 md:mt-20 mt-10 mx-4">
            <img src={instagram} alt="" className="w-[32px] h-[32px]" />
            <img src={facebook} alt="" className="w-[32px] h-[32px]" />
            <img src={twitter} alt="" className="w-[32px] h-[32px]" />
            <BiLogoLinkedin className="text-4xl" />
          </div>
        </div>
        <div className="md:w-1/2 md:flex justify-end mr-48 gap-32 md:mt-0 mt-12">
          <div className="flex flex-col gap-4">
            <h2 className=" text-3xl font-bold">Explore</h2>
            <Link
          to="vision"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          className="bg-transparent cursor-pointer mt-2"
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
          {/* <div className="flex flex-col gap-7 md:mt-0 mt-12">
            <h2 className=" text-3xl font-bold">Newsletter</h2>
            <div>
              Subscribe to our newsletter to stay informed about our latest
              products, services, and promotions. Feel free to unsubscribe
              anytime!
            </div>
            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex gap-3 justify-between border border-[#D5D9E5] rounded-md p-2 md:px-4"
            >
              <input
                type="text"
                placeholder="Enter Your Email Address ..."
                className="outline-none border-none bg-[#11112b]"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="button" value="Send">
                <img src={arrow2} alt="" className="w-8 h-8 cursor-pointer" />
              </button>
            </form>
          </div> */}
        </div>
      </div>
      <div className="bg-[#FFFFFF] w-full h-[0.5px] mt-12 opacity-50" />
      <div className=" opacity-50 mt-8 md:flex justify-between">
        <div>Copyright © 2023 for Jithwa Solutions. All rights reserved.</div>
        <div className="flex md:gap-4 gap-2 md:mt-0 mt-4">
          <div>Terms & Condition </div> | <div> Privacy Policy</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
