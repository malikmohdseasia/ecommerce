const Footer = () => {
  const items1 = ["Home", "Shop", "About", "Contact"];
  const items2 = ["Payment Options", "Returns", "Privacy Policies"];

  return (
    <div className="pt-12 pb-9.5 px-25 border-t border-[#0000002B]">
      <div className="grid grid-cols-4 justify-items-center ">
        <div className="flex flex-col gap-13.75">
          <h1 className="font-poppins font-bold text-[24px]">Funiro.</h1>
          <p className="font-poppins text-footer">
            400 University Drive Suite 200 Coral Gables, <br /> FL 33134 USA
          </p>
        </div>

        <div>
          <p className="font-medium font-poppins text-footer">Links</p>
          <div className="mt-13.75 flex flex-col gap-11.5">
            {items1.map((item, index) => (
              <p className="font-medium cursor-pointer" key={index}>
                {item}
              </p>
            ))}
          </div>
        </div>

        <div>
          <p className="font-poppins font-medium text-footer">Help</p>
          <div className="mt-13.75 flex flex-col gap-11.5">
            {items2.map((item, index) => (
              <p className="font-poppins font-medium cursor-pointer" key={index}>
                {item}
              </p>
            ))}
          </div>
        </div>

        <div className=" relative">
          <p className="font-poppins font-medium text-footer">Newsletter</p>
          <div className="mt-13.25 flex gap-8 border-b border-[#000000]">
            <p className="font-poppins text-sm text-footer ">
              Enter Your Email Address{" "}
            </p>
            <div>
              <p className="font-poppins text-sm cursor-pointer">SUBSCRIBE</p>
            </div>
          </div>
          <div className="bg-white w-2 h-2 absolute  -mt-1 left-49"></div>
        </div>
      </div>
      <div className="pt-12">
        <hr className="border border-hrLine" />
      </div>

      <div className="pt-8.75">
        <p>2023 furino. All rights reverved</p>
      </div>
    </div>
  );
};

export default Footer;
