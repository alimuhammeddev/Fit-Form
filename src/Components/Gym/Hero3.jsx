import React from "react";
import "boxicons/css/boxicons.min.css";
import { arrowdown, crown, rhombus, rocket, warn } from "../../assets";

const Hero3 = () => {
  return (
    <section>
      <div>
        <h1 className="text-center lg:text-[40px] text-[20px] font-semibold text-[#1b1b1b]">
          Browse Plans
        </h1>
        <h2 className="bg-[#0071FE] text-[#ffffff] lg:text-[16px] text-[12px] gap-2 flex items-center p-3 w-fit justify-center mx-auto mt-3">
          <img src={warn} alt="" /> Every new member has to pay a fee of ₦2,000.
          This fee is for your membership card which you need to access the
          facility.
        </h2>
        <p className="border border-[#E4E7EC] lg:w-[1216px] lg:ml-5 mt-6"></p>
      </div>

      <div className=" flex flex-wrap lg:justify-center items-center lg:gap-96 mt-10">
        <div className="flex items-center gap-3">
          <h1 className="text-[#645D5D]  text-[12px]">Showing</h1>
          <h2 className="flex items-center border w-fit p-3 border-[#396BAA] gap-3 lg:text-[16px] text-[14px] text-[#1B1B1B]">
            Plans with a Trainer <img src={arrowdown} alt="" />
          </h2>
        </div>

        <div className="bg-[#FFF6E6] w-fit p-1 flex items-center lg:gap-10 gap-7 lg:mt-0 mt-5">
          <h1 className="text-[#1B1B1B] lg:text-[16px] text-[14px] bg-[#FFA500] p-3 px-4 hover:font-semibold cursor-pointer transition ease-out duration-700">
            Monthly Plan
          </h1>
          <h2 className="text-[#1B1B1B] lg:text-[16px] text-[14px] p-2 px-4 hover:font-semibold cursor-pointer transition ease-out duration-700">
            Yearly Plan
          </h2>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 lg:pb-10 mt-16 lg:pl-10 lg:gap-0 gap-5">
        <div className="bg-[#FFFFFF] border border-[#5FA5FD80] lg:w-[374px] lg:h-[517px] lg:p-10 p-5 hover:shadow-lg cursor-pointer transition ease-out duration-500">
          <h1 className="text-[24px] text-[#1B1B1B] font-semibold flex items-center gap-1 justify-center">
            <img src={rhombus} alt="" /> Basic
          </h1>
          <h2 className="lg:text-[32px] text-[25px] text-[#1B1B1B] font-semibold text-center">
            ₦20,000
          </h2>
          <p className="border border-[#D0D5DD] lg:w-[276px] mt-6 mx-auto"></p>
          <div className="mt-8 space-y-4">
            <h1 className="text-[#1B1B1B] lg:text-[19px] text-[15px] flex items-center gap-2">
              <i className="bx bxs-circle text-[8px]"></i> Unlimited Gym Access
            </h1>
            <h1 className="text-[#1B1B1B] lg:text-[19px] text-[15px] flex items-center gap-2">
              <i className="bx bxs-circle text-[8px]"></i> Quarterly fitness assessments
            </h1>
            <h1 className="text-[#1B1B1B] lg:text-[19px] text-[15px] flex items-center gap-2">
             <i className="bx bxs-circle text-[8px]"></i> 2 days per week
            </h1>
            <h1 className="text-[#1B1B1B] lg:text-[19px] text-[15px] flex items-center gap-2">
              <i className="bx bxs-circle text-[8px]"></i> 2 supplements monthly
            </h1>
            <h1 className="text-[#1B1B1B] lg:text-[19px] text-[15px] flex items-center gap-2">
              <i className="bx bxs-circle text-[8px]"></i> Goal tracking sessions
            </h1>
          </div>
          <div className="flex mx-auto justify-center mt-8">
            <button className="lg:w-[220px] lg:h-[67px] p-3 text-[#ffffff] lg:font-semibold bg-[#1B1B1B]">
              Choose Plan
            </button>
          </div>
        </div>

        <div className="bg-[#FFFFFF] border border-[#396BAA1A] lg:w-[374px] lg:h-[570px] shadow-md cursor-pointer transition ease-out duration-500">
          <div>
            <h1 className="bg-[#EAF3FF] p-2 text-[16px] text-[#0071FE] font-semibold text-center">
              Most Popular
            </h1>
          </div>
          <div className="lg:p-10 p-5">
            <h1 className="text-[24px] text-[#1B1B1B] font-semibold flex items-center gap-1 justify-center -mt-7">
              <img src={rocket} alt="" /> Pro
            </h1>
            <h2 className="lg:text-[32px] text-[25px] text-[#1B1B1B] font-semibold text-center">
              ₦35,000
            </h2>
            <p className="border border-[#D0D5DD] lg:w-[276px] mt-6 mx-auto"></p>
            <div className="mt-8 space-y-4">
              <h1 className="text-[#1B1B1B] lg:text-[19px] text-[15px] flex items-center gap-2">
              <i className="bx bxs-circle text-[8px]"></i>Unlimited Gym Access
              </h1>
              <h1 className="text-[#1B1B1B] lg:text-[19px] text-[15px] flex items-center gap-2">
              <i className="bx bxs-circle text-[8px]"></i>Monthly fitness assessments
              </h1>
              <h1 className="text-[#1B1B1B] lg:text-[20px] text-[15px] flex items-center gap-2">
              <i className="bx bxs-circle text-[8px]"></i>5 days per week
              </h1>
              <h1 className="text-[#1B1B1B] lg:text-[19px] text-[15px] flex items-center gap-2">
              <i className="bx bxs-circle text-[8px]"></i>5 supplements monthly
              </h1>
              <h1 className="text-[#1B1B1B] lg:text-[19px] text-[15px] flex items-center gap-2">
              <i className="bx bxs-circle text-[8px]"></i>Goal tracking sessions
              </h1>
              <h1 className="text-[#1B1B1B] lg:text-[19px] text-[15px] flex items-center gap-2">
              <i className="bx bxs-circle text-[8px]"></i>Discounts on merchandise
              </h1>
            </div>
            <div className="flex mx-auto justify-center mt-5">
              <button className="lg:w-[220px] lg:h-[67px] p-3 text-[#1b1b1b] lg:font-semibold bg-[#FFA500]">
                Choose Plan
              </button>
            </div>
          </div>
        </div>

        <div className="bg-[#FFFFFF] border border-[#5FA5FD80] lg:w-[374px] lg:h-[517px] lg: p-5 lg:p-10 hover:shadow-lg cursor-pointer transition ease-out duration-500">
          <h1 className="text-[24px] text-[#1B1B1B] font-semibold flex items-center gap-1 justify-center">
            <img src={crown} alt="" /> Premium
          </h1>
          <h2 className="lg:text-[32px] text-[25px] text-[#1B1B1B] font-semibold text-center">
            ₦50,000
          </h2>
          <p className="border border-[#D0D5DD] lg:w-[276px] mt-6 mx-auto"></p>
          <div className="mt-8 space-y-4">
            <h1 className="text-[#1B1B1B] lg:text-[19px] text-[15px] flex items-center gap-2">
            <i className="bx bxs-circle text-[8px]"></i>All of Pro Membership
            </h1>
            <h1 className="text-[#1B1B1B] lg:text-[20px] text-[15px] flex items-center gap-2">
            <i className="bx bxs-circle text-[8px]"></i>Weekly fitness assessments
            </h1>
            <h1 className="text-[#1B1B1B] lg:text-[19px] text-[15px] flex items-center gap-2">
            <i className="bx bxs-circle text-[8px]"></i>Classes at off-peak hours
            </h1>
            <h1 className="text-[#1B1B1B] lg:text-[19px] text-[15px] flex items-center gap-2">
            <i className="bx bxs-circle text-[8px]"></i>Provision of gym wears
            </h1>
            <h1 className="text-[#1B1B1B] lg:text-[19px] text-[15px] flex items-center gap-2">
            <i className="bx bxs-circle text-[8px]"></i>Refreshments everyday
            </h1>
          </div>
          <div className="flex mx-auto justify-center mt-8">
            <button className="lg:w-[220px] lg:h-[67px] p-3 text-[#ffffff] lg:font-semibold bg-[#1B1B1B]">
              Choose Plan
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero3;
