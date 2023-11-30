import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MidSection from "./components/MidSection";
import ProductSection from "./components/ProductSection";
import Testimonals from "./components/Testimonals";

function App() {
  return (
    <>
      <div className=" w-full scroll-smooth  ">
        <Header />
        <MidSection />
        <Testimonals />
        <ProductSection />
        <Footer />
      </div>
    </>
  );
}

export default App;
