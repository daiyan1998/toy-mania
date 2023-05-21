import { useEffect, useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Gallary = () => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    fetch("/img.json")
      .then((res) => res.json())
      .then((data) => {
        setImages(data.images);
      });
  }, []);
  return (
    <>
      <h3 className="md:text-9xl sm:text-5xl text-3xl font-bold text-center py-16 bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-violet-600]">
        Toy Car Gallary
      </h3>
      <ResponsiveMasonry>
        <Masonry gutter="20px">
          {images.map((img, i) => (
            <img
              data-aos="fade-up"
              data-aos-anchor-placement="top-center"
              className="rounded-lg"
              key={i}
              src={img}
            />
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </>
  );
};

export default Gallary;
