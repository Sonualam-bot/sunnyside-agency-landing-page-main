import { useState } from "react";
import menu from "../images/icon-hamburger.svg";

function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="w-screen">
      <div className="absolute flex flex-row justify-between p-5 w-full items-center z-[99] md:hidden cursor-pointer  text-[--white]">
        <div>
          <h2 className="font-bold text-3xl">sunnyside</h2>
        </div>
        <img src={menu} alt="/" onClick={handleNav} />
      </div>
      {nav ? (
        <div className="flex flex-col justify-evenly items-center absolute w-[91%] h-[350px] top-[20%] z-40 left-[50%] -translate-y-1/2  -translate-x-1/2 text-center bg-[--white] text-[--dark-grayish-blue]  ">
          <div
            style={{ clipPath: "polygon(100% 0, 31% 100%, 100% 100%)" }}
            className="absolute right-0 -top-6 w-[50px] h-[50px] bg-[--white] "
          ></div>
          <p
            className="hover:bg-[#6FCFFF] hover:text-[--white] px-5 py-1 rounded-2xl "
            onClick={handleNav}
          >
            About
          </p>
          <p
            className="hover:bg-[#6FCFFF] hover:text-[--white] px-5 py-1 rounded-2xl"
            onClick={handleNav}
          >
            Services
          </p>
          <p
            className="hover:bg-[#6FCFFF] hover:text-[--white] px-5 py-1 rounded-2xl"
            onClick={handleNav}
          >
            Projects
          </p>
          <button
            onClick={handleNav}
            className="text-uppercase font-Fraunces px-4 py-2 bg-[--yellow] rounded-3xl text-black hover:text-[--white] "
          >
            Contact
          </button>
        </div>
      ) : (
        <div className="md:block hidden ">
          <div className=" w-full  flex items-center justify-between p-8 font-Barlow absolute text-white ">
            <div>
              <h2 className="font-bold text-3xl">sunnyside</h2>
            </div>
            <div className="flex items-center justify-center gap-4 pr-2 ">
              <p>About</p>
              <p>Services</p>
              <p>Projects</p>
              <button className="text-uppercase font-Fraunces px-4 py-2 bg-[--white] rounded-3xl text-black cursor-pointer hover:bg-[#6FCFFF] hover:text-[--white] ">
                Contact
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="absolute w-full top-[25%] left-[50%] -translate-y-1/2  -translate-x-1/2 text-center ">
        <h2 className=" md:text-5xl sm:text-4xl uppercase text-white font-bold font-Fraunces md:tracking-[0.3em] sm:tracking-widest ">
          We are creatives
        </h2>
      </div>
      <div className="absolute top-[45%] left-[50%] ">
        <svg width="36" height="114" xmlns="http://www.w3.org/2000/svg">
          <g
            stroke="#FFF"
            strokeWidth="6"
            fill="none"
            fillRule="evenodd"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 3v100M3 95.484l15 15 15-15" />
          </g>
        </svg>
      </div>
    </div>
  );
}

export default Navbar;
