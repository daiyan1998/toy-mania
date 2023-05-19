import { Typography } from "@material-tailwind/react";
import CatagoryTab from "./CategoryTab";
import CategoryCard from "./CategoryCard";

const Catagory = () => {
  return (
    <div className="mt-16">
      <h3 className="text-6xl font-bold py-10 text-teal-400 text-center">
        {" "}
        Car by catagory
      </h3>
      <img
        className="w-48 mx-auto rounded-lg mb-3.5"
        src="https://cdn.dribbble.com/users/776205/screenshots/3958315/media/a317c95dba493ed6727b0ddd0a0441c1.gif"
        alt=""
      />
      <CatagoryTab></CatagoryTab>
    </div>
  );
};

export default Catagory;
