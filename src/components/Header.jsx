import headerImg from "../images/desktop/image-header.jpg";
import Navbar from "./Navbar";

function Header() {
  return (
    <div className="h-screen relative ">
      <Navbar />

      <div className="w-full h-screen">
        <img className="h-full w-full object-cover " src={headerImg} alt="/" />
      </div>
    </div>
  );
}

export default Header;
