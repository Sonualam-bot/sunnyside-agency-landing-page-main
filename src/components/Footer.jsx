import facebook from "../images/icon-facebook.svg";
import instagram from "../images/icon-instagram.svg";
import twitter from "../images/icon-twitter.svg";
import pinterest from "../images/icon-pinterest.svg";

const socials = [
  {
    icon: facebook,
  },
  {
    icon: instagram,
  },
  {
    icon: twitter,
  },
  {
    icon: pinterest,
  },
];

function Footer() {
  return (
    <div className="flex flex-col items-center justify-evenly w-full h-[380px] bg-[--footer-bg] ">
      <div>
        <h2 className="text-4xl font-extrabold font-Barlow text-[--dark-saturated-cyan] ">
          sunnyside
        </h2>
      </div>
      <div className="flex flex-row gap-16 text-[--dark-saturated-cyan]  text-lg ">
        <h3 className="font-semibold cursor-pointer hover:text-[--white] ">
          About
        </h3>
        <h3 className="font-semibold cursor-pointer hover:text-[--white] ">
          Services
        </h3>
        <h3 className="font-semibold cursor-pointer hover:text-[--white] ">
          Projects
        </h3>
      </div>
      <div className="flex gap-9">
        {socials?.map((social, index) => {
          return (
            <div key={index}>
              {" "}
              <img
                className="cursor-pointer group-hover:fill-white"
                src={social.icon}
                alt="/"
              />{" "}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Footer;
