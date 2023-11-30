import milkBottlesImg from "../images/desktop/image-gallery-milkbottles.jpg";
import orangeImg from "../images/desktop/image-gallery-orange.jpg";
import coneImg from "../images/desktop/image-gallery-cone.jpg";
import sugarcubeImg from "../images/desktop/image-gallery-sugarcubes.jpg";

const img = [
  {
    img: milkBottlesImg,
  },
  {
    img: orangeImg,
  },
  {
    img: coneImg,
  },
  {
    img: sugarcubeImg,
  },
];

function ProductSection() {
  return (
    <div className="md:flex items-center justify-center sm:grid grid-cols-2 grid-rows-2 ">
      {img?.map(({ img }, index) => {
        return (
          <div key={index}>
            <img className="object-cover" src={img} alt="/" />
          </div>
        );
      })}
    </div>
  );
}

export default ProductSection;
