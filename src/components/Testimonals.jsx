import { Data } from "./Data";

function Testimonals() {
  return (
    <div className="md:h-screen w-full flex flex-col md:justify-center sm:justify-center items-center  md:gap-28 sm:gap-10 sm:p-24 ">
      <div className="w-[90vw] text-center ">
        <h1 className="md:text-3xl w-full sm:text-[5vw] text-[--grayish-blue] uppercase font-Fraunces tracking-[0.2em] ">
          Client Testimonals
        </h1>
      </div>
      <div className="w-full flex md:flex-row sm:flex-col items-center justify-center  md:px-14 sm:px-2 pt-4 sm:gap-24 ">
        {Data?.map((data, index) => {
          const { image, detail, name, designation } = data;
          return (
            <div
              key={index}
              className=" w-full flex flex-col justify-center items-center md:gap-12 sm:gap-7  "
            >
              <div className="w-[80px] h-[80px] rounded-full ">
                <img
                  className="w-full h-full rounded-full"
                  src={image}
                  alt="/"
                />
              </div>
              <div className="md:w-[90%] sm:w-[85vw] text-center ">
                <p className="text-[--very-dark-greyish-blue]  font-semibold font-Barlow text-lg ">
                  {detail}
                </p>
              </div>
              <div className="flex flex-col items-center justify-center gap-2 ">
                <h2 className="text-[--very-dark-desaturated-blue] text-2xl font-Fraunces font-bold ">
                  {name}
                </h2>
                <h4 className="text-[--grayish-blue] font-medium">
                  {" "}
                  {designation}{" "}
                </h4>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Testimonals;
