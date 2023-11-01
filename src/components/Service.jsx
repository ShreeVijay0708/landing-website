import React, { useState } from "react";
import globe from "../assets/globe.svg";
import monitor from "../assets/monitor.svg";
import rocket from "../assets/rocket.svg";
import cloud from "../assets/cloud.svg";
import speaker from "../assets/speaker.svg";
const Service = () => {
  const [active1,setActive1]=useState("")
  const data = [
    {
      title:"web",
      desc:["Designing , building responsive business websites from scratch , hosting it on cloud ,maintenance and support for future  enhancements , seo and analytics . "]
    },
    {
      title:"branding",
      desc:["Building personal , corporate brands via innovative and organic methodologies that results in sustainable growth .","State of the art On/Off page SEO practices for effective visibility  and organic growth ","Operations, brand management across platforms such as fb ,linkedin,twitter and instagram ."]
    },
    {
      title:"market",
      desc:["Ground and internet research to arrive at numbers and observations to make practically viable and impactful decisions  ","Building Product roadmaps, Managing teams and guiding them through effective product positioning and management leading to sustainable growth in revenue "]
    },
    {
      title:"data",
      desc:["Use case specific curated analytics , leveraging ML & AI to gain intricate and important insights that  have huge impact on  increasing revenue and cutting costs .","Dedicated development of ML & AI models for multiple stand alone use cases ."]
    },
    {
      title:"software",
      desc:["Solving critical business problems by building efficient and effective  software tools  that increases revenue / reduces cost by optimizing  operations ","Building curated solutions with appropriate tech stacks for maximum ROI "]
    },
    

  ]
  console.log(active1);
  return (
    <div className="md:mx-32 mx-5 flex flex-col items-center gap-16 py-16" id="service">
      <div className="text-center md:text-7xl text-5xl font-bold">Our Services</div>
      <div>
        <div className="flex md:flex-row flex-col items-center gap-16">
          <div className={`md:w-[300px] md:h-[380px] w-[320px] h-[450px] flex flex-col md:px-6 px-6 py-14 gap-10 cursor-pointer card `} onClick={()=>setActive1("web")}>
            <div className="bg-transparent flex justify-end">
              <img src={globe} alt=".." className="bg-transparent md:w-[45px] w-[45px]" />
            </div>
            <h2 className="bg-transparent text-3xl leading-tight spacefont font-bold ">
              Web Development, Cloud Hosting and Maintenance
            </h2>
          </div>
          <div className="md:w-[300px] md:h-[380px] w-[320px] h-[450px] flex flex-col md:px-10 px-6 py-14 gap-10 cursor-pointer card" onClick={()=>setActive1("software")}>
            <div className="bg-transparent flex justify-end">
              <img src={monitor} alt=".." className="bg-transparent md:w-[45px] w-[45px]" />
            </div>
            <h2 className="bg-transparent mt-4 text-3xl leading-tight spacefont font-bold">
              Customised Software Development
            </h2>
          </div>
          <div className="md:w-[300px] md:h-[380px] w-[320px] h-[450px] flex flex-col md:px-6 px-6 py-14 gap-8 cursor-pointer card" onClick={()=>setActive1("market")}>
            <div className="bg-transparent flex justify-end">
              <img src={rocket} alt=".." className="bg-transparent md:w-[45px] w-[45px]" />
            </div>
            <h2 className="bg-transparent md:text-3xl text-3xl leading-tight spacefont font-bold">
              Market Research, End-to-End IT Product Management and Consultation
            </h2>
          </div>
        </div>
        {/* {active1!="" && <div className="card1 w-[1190px] h-80 mt-9 px-12 py-12">
            {data.map((da)=>(
              <div className=" bg-transparent">
                {da.title===active1 && <div className="bg-transparent">
                    {da.desc.map((des)=>(
                      <li className="bg-transparent py-2 text-2xl">{des}</li>
                    ))}
                  </div>}
              </div>
            ))}
        </div>} */}
        
        <div className="flex md:flex-row flex-col items-center gap-16 md:mt-14 mt-16">
        <div className="md:w-[300px] md:h-[380px] w-[320px] h-[450px] flex flex-col md:px-6 px-6 py-14 gap-10 cursor-pointer card" onClick={()=>setActive1("branding")}>
            <div className="bg-transparent flex justify-end">
              <img src={monitor} alt=".." className="bg-transparent md:w-[45px] w-[45px]" />
            </div>
            <h2 className="bg-transparent text-3xl leading-tight spacefont font-bold">
            IT Infrastructure Monitoring and Maintanance
            </h2>
          </div>
          <div className="md:w-[300px] md:h-[380px] w-[320px] h-[450px] flex flex-col md:px-10 px-6 py-14 gap-8 cursor-pointer card" onClick={()=>setActive1("branding")}>
            <div className="bg-transparent flex justify-end">
              <img src={cloud} alt=".." className="bg-transparent md:w-[45px] w-[45px]" />
            </div>
            <h2 className="bg-transparent text-3xl leading-tight spacefont font-bold">
              Data Analytics, DevOps, ML, AI use case based solutions
            </h2>
          </div>
          <div className="md:w-[300px] md:h-[380px] w-[320px] h-[450px] flex flex-col md:px-10 px-6 py-14 gap-10 cursor-pointer card" onClick={()=>setActive1("web")}>
            <div className="bg-transparent flex justify-end">
              <img src={speaker} alt=".." className="bg-transparent md:w-[45px] w-[45px]" />
            </div>
            <h2 className="bg-transparent text-3xl leading-tight spacefont font-bold">
              Branding, SEO and Digital Marketing
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
