import { useEffect, useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const Gallary = () => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    fetch("/img.json")
      .then((res) => res.json())
      .then((data) => {
        setImages(data.images);
      });
  }, []);
  console.log("data", images);
  return (
    <>
      <h3 className="text-9xl font-bold text-center py-16 bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-violet-600]">
        Toy Car Gallary
      </h3>
      <ResponsiveMasonry>
        <Masonry gutter="20px">
          {images.map((img, i) => (
            <img className="rounded-lg" key={i} src={img} />
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </>
  );
};

export default Gallary;
