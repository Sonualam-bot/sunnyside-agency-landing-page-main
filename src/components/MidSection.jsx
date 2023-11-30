import eggImage from "../images/desktop/image-transform.jpg";
import imageStandOut from "../images/desktop/image-stand-out.jpg";
import graphicDesign from "../images/desktop/image-graphic-design.jpg";
import imagePhotography from "../images/desktop/image-photography.jpg";

function MidSection() {
  return (
    <div className="w-full grid grid-cols-1 grid-rows-3 ">
      {/* first part egg starts here */}
      <div className="flex flex-row sm:flex-col-reverse w-full  h-full justify-between ">
        <div className=" md:w-[50%] sm:w-[100%] md:h-full  flex md:items-start sm:items-center  md:px-28 sm:px-12 md:py-48 sm:py-14 flex-col gap-10 relative ">
          <h2 className="md:text-5xl sm:text-[7vw] font-Fraunces text-[--very-dark-desaturated-blue] sm:text-center ">
            Transform your brand
          </h2>
          <p className="text-[--very-dark-greyish-blue] md:w-[420px] md:font-semibold sm:font-bold sm:text-center ">
            We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.{" "}
          </p>
          <p className="uppercase font-Fraunces text-[--very-dark-desaturated-blue] text-lg z-10 cursor-pointer  ">
            Learn More
          </p>
          <p className="absolute bg-[--soft-yellow] w-[134px] rounded-lg h-[6px] z-0 sm:bottom-[15.8%] md:bottom-[36.8%] "></p>
        </div>
        <div className=" md:w-[50%] sm:w-[100%] h-full ">
          <img className="w-full h-full object-cover" src={eggImage} alt="/" />
        </div>
      </div>
      {/* first part egg ends here */}

      {/* second part starts here */}
      <div className="flex md:flex-row sm:flex-col w-full  h-full justify-between ">
        <div className=" md:w-[50%] sm:w-full h-full ">
          <img
            className="w-full h-full object-cover"
            src={imageStandOut}
            alt="/"
          />
        </div>
        <div className=" md:w-[50%] sm:w-full md:h-full  flex flex-col md:items-start sm:items-center md:px-28 sm:px-12 md:py-48 sm:py-14  gap-10 relative ">
          <h2 className="md:text-5xl sm:text-[7vw] font-Fraunces text-[--very-dark-desaturated-blue] sm:text-center  ">
            Stand out to the right audience
          </h2>
          <p className="text-[--very-dark-greyish-blue] md:w-[420px] sm:w-[90%] md:font-semibold sm:font-bold sm:text-center ">
            Using a collaborative formula of designers, researchers,
            photographers, videographers, and copywriters, we&apos;ll build and
            extend your brand in digital places.
          </p>
          <p className="uppercase font-Fraunces text-[--very-dark-desaturated-blue] text-lg z-10 cursor-pointer ">
            Learn More
          </p>
          <p className="absolute bg-[--very-soft-red] w-[134px] rounded-lg h-[6px] z-0 sm:bottom-[15.8%] md:bottom-[30%] "></p>
        </div>
      </div>
      {/* second part ends here */}

      <div className="flex md:flex-row sm:flex-col w-full ">
        {/* third part starts here */}
        <div className="flex w-full  h-full justify-between relative ">
          <div className=" w-full h-full ">
            <img
              className="w-full h-full object-cover"
              src={graphicDesign}
              alt="/"
            />
          </div>
          <div className=" w-full h-[50%]  flex items-center md:p-48 sm:p-36 flex-col md:gap-10 sm:gap-6 text-center absolute bottom-[4%] ">
            <h2 className="text-4xl w-[300px] font-Fraunces text-[--dark-saturated-cyan]  ">
              Graphic Design
            </h2>
            <p className="text-[--dark-saturated-cyan] md:w-[380px] sm:w-[300px] font-semibold font-Barlow md:text-lg sm:text-sm ">
              Great design makes you memorable. We deliver artwork that
              underscores your brand message and captures potential
              clients&apos; attention.
            </p>
          </div>
        </div>
        {/* third part ends here */}

        {/* fourth part starts here */}
        <div className="flex w-full  h-full justify-between relative ">
          <div className=" w-full h-full ">
            <img
              className="w-full h-full object-cover"
              src={imagePhotography}
              alt="/"
            />
          </div>
          <div className="w-full h-[50%]  flex items-center md:p-48 sm:p-36 flex-col md:gap-10 sm:gap-6 text-center absolute bottom-[4%]">
            <h2 className="text-4xl font-Fraunces text-[--dark-blue]  ">
              Photography
            </h2>
            <p className="text-[--dark-blue] md:w-[380px] sm:w-[300px] font-semibold font-Barlow md:text-lg sm:text-sm ">
              Increase your credibility by getting the most stunning,
              high-quality photos that improve your business image.
            </p>
          </div>
        </div>
        {/* fourth part ends here */}
      </div>
    </div>
  );
}

export default MidSection;
