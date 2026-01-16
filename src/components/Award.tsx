import { AwardIcon, Shipping, Support, Warranty } from "../assets/Icons"

const Award = () => {
  return (
   <div className="bg-[#FAF3EA] py-25 px-13.25 flex flex-col lg:flex-row justify-between items-center gap-3 mt-21.25 ">
        <div className="flex flex-col lg:flex-row items-center gap-2.5 text-center lg:text-start">
          <div>{AwardIcon}</div>
          <div>
            <h1 className="text-[#242424] text-[18px] lg:text-[20px] font-poppins font-semibold ">
              High Quality
            </h1>
            <p className="text-[#898989] text-lg lg:text-[20px] font-medium font-poppins">
              crafted from top materials
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row text-center lg:text-start items-center gap-2.5">
          <div>{Warranty}</div>
          <div>
            <h1 className="text-[#242424] text-[18px] lg:text-[20px] font-poppins font-semibold">
              Warranty Protection
            </h1>
            <p className="text-[#898989] text-[20px] font-medium font-poppins">
              Over 2 years
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2.5 flex-col lg:flex-row text-center lg:text-start">
          <div>{Shipping}</div>

          <div>
            <h1 className="text-[#242424] text-[18px] lg:text-[20px] font-poppins font-semibold">
              Free Shipping
            </h1>
            <p className="text-[#898989] text-[20px] font-medium font-poppins">
              Order over 150 $
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2.5 flex-col lg:flex-row text-center lg:text-start">
          <div>{Support}</div>

          <div>
            <h1 className="text-[#242424] text-[18px] lg:text-[20px] font-poppins font-semibold">
              24 / 7 Support
            </h1>
            <p className="text-[#898989] text-[20px] font-medium font-poppins">
              Dedicated support
            </p>
          </div>
        </div>
      </div>
  )
}

export default Award
