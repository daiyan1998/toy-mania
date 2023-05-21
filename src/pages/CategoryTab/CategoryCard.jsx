import { Button, Rating } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../context/AuthProvider";
import { useContext } from "react";
import noImg from "../../assets/noImg.jpg";

const CatagoryCard = ({ filteredToy }) => {
  const { user } = useContext(AuthContext);
  const notify = () => toast("You have to log in first to view details");
  const { picture, name, rating, price, category, _id } = filteredToy;
  return (
    <div>
      <div className="mx-auto flex flex-col container bg-blue-bg-white py-8">
        <div className=" items-center lg:justify-between justify-center">
          <div className="mx-2 w-72 lg:mb-0 mb-8">
            <div>
              <img
                src={picture || noImg}
                className="w-full h-44 object-contain"
              />
            </div>
            <div className="bg-white">
              <div className="flex items-center justify-between px-4 pt-4">
                <div className="flex items-center ">
                  <span className="mr-2">{rating}</span>
                  <Rating value={Math.floor(rating)} readonly />
                </div>
                <div className="bg-yellow-200 py-1.5 px-6 rounded-full">
                  <p className="text-xs text-yellow-800">{category}</p>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center">
                  <h2 className="text-lg font-semibold">{name}</h2>
                </div>
                <div className="flex items-center justify-between py-4">
                  <h3 className="text-indigo-700 text-xl font-semibold">
                    <span>Price : </span> ${price}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Button color="teal" onClick={user || notify}>
          <Link to={`/myToys/${_id}`}>View Details</Link>
        </Button>
      </div>
    </div>
  );
};

export default CatagoryCard;
