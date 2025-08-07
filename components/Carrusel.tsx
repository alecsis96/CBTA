// components/Carrusel.tsx
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const NextArrow = ({ onClick }) => (
  <div className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer" onClick={onClick}>
    <FaChevronRight className="text-white text-2xl bg-black/50 p-1 rounded-full" />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer" onClick={onClick}>
    <FaChevronLeft className="text-white text-2xl bg-black/50 p-1 rounded-full" />
  </div>
);

export default function Carrusel() {
  return (
    <section className="w-full max-w-xl mx-auto mt-5">
      <Slider
        dots={true}
        infinite={true}
        speed={500}
        slidesToShow={1}
        slidesToScroll={1}
        autoplay={true}
        autoplaySpeed={3000}
        className="rounded-xl overflow-hidden"
        nextArrow={<NextArrow onClick={undefined} />}
        prevArrow={<PrevArrow onClick={undefined} />}
      >
        {["img1.jpg", "img2.jpg", "img3.jpg"].map((img, idx) => (
          <div key={idx}>
            <img src={`/carrusel/${img}`} alt={`Imagen ${idx + 1}`} className="w-full h-64 object-cover" />
          </div>
        ))}
      </Slider>
    </section>
  );
}
