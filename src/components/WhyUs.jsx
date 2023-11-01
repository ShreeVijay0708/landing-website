import React from "react";

const WhyUs = () => {
  return (
    <div className="md:mx-32 mx-4 md:flex pt-10" id="whyus">
      <div className="md:w-1/2 flex flex-col">
        <h1 className="md:mx-24 md:text-7xl text-center md:text-left text-5xl font-bold">Why Us?</h1>
        <div className="mt-32 w-1/2 md:flex hidden flex-col items-end gap-10">
          <div className="w-[60px] h-[76px] bg-[#D9D9D9]"></div>
          <div className="w-[140px] h-[150px] bg-[#D9D9D9]"></div>
        </div>
      </div>
      <div className="md:w-1/2 md:mt-4 mt-16">
        <div className="md:flex gap-10">
          <div className="md:w-1/2">
            <h1 className=" md:text-left text-center text-5xl text-[#92DEED] font-bold spacefont">
              Values
            </h1>
            <p className="md:mt-8 mt-4 md:text-left text-center text-lg">
              Our core values such as customer obsession, curiosity,
              problem-solving pushes us to deliver world class quality work
              on-time at an affordable cost.
            </p>
          </div>
          <div className="md:w-1/2 md:mt-0 mt-12">
            <h1 className=" md:text-left text-center text-5xl text-[#92DEED] font-bold spacefont">
              Tech
            </h1>
            <p className="md:mt-8 mt-4 md:text-left text-center text-lg">
              We stay up to date with the latest trends and technologies in the
              IT industry, so you can get the most advanced solutions available.
            </p>
          </div>
        </div>
        <div className="md:flex gap-10 mt-14">
          <div className="md:w-1/2">
            <h1 className="md:text-left text-center text-5xl text-[#92DEED] font-bold spacefont">
              Solutions
            </h1>
            <p className="md:mt-8 mt-4 md:text-left text-center text-lg">
              We take a personalized approach to every project, working closely
              with you to understand your business and create specific
              solutions.
            </p>
          </div>
          <div className="md:w-1/2 md:mt-0 mt-12">
            <h1 className="md:text-left text-center text-5xl text-[#92DEED] font-bold spacefont">
              Results
            </h1>
            <p className="md:text-left text-center md:mt-8 mt-4 text-lg">
              We let our quality results speak instead of us!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
