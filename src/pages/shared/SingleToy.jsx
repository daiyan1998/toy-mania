import { Rating, Typography } from "@material-tailwind/react";
import { useLoaderData } from "react-router-dom";

const SingleToy = () => {
  const data = useLoaderData();
  const {
    name,
    picture,
    price,
    quantity,
    rating,
    description,
    sellerName,
    sellerEmail,
  } = data;
  return (
    <div>
      <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 ">
        <div className="flex justify-center items-center lg:flex-row flex-col gap-8">
          {/* <!-- Description Div --> */}

          <div className="  w-full sm:w-96 md:w-8/12 lg:w-6/12 items-center">
            <h2 className="font-semibold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800 mt-4">
              {name}
            </h2>

            <div className=" flex flex-row justify-between  mt-5">
              <div className=" flex flex-row space-x-3">
                <div className="flex items-center gap-2">
                  <Rating
                    value={Math.round(rating)}
                    readonly
                    onChange={(value) => setRated(value)}
                  />
                  <Typography color="blue-gray" className="font-medium">
                    {rating} Rated
                  </Typography>
                </div>
              </div>
              <p className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 font-normal text-base leading-4 text-gray-700 hover:underline hover:text-gray-800 duration-100 cursor-pointer"></p>
            </div>

            <p className=" font-normal text-base leading-6 text-gray-600 mt-7">
              {description}
            </p>
            <p className=" font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 mt-6 ">
              $ {price}
            </p>

            <div className="lg:mt-11 mt-10 text-gray-600">
              <div className="flex text-gray-600 flex-row justify-between">
                <p className=" font-medium text-base leading-4 ">
                  Available Quantity
                </p>
                <span>{quantity} Pcs</span>
              </div>
              <hr className=" bg-gray-200 w-full my-2" />
              <div className=" flex flex-row justify-between items-center mt-4">
                <p className="font-medium text-base leading-4 ">Seller Name</p>
                <span>{sellerName ? sellerName : "Unknown"}</span>
              </div>
              <hr className=" bg-gray-200 w-full my-2" />
              <div className=" flex flex-row justify-between items-center mt-4">
                <p className="font-medium text-base leading-4 ">Seller Email</p>
                <span>{sellerEmail ? sellerEmail : "Unknown"}</span>
              </div>
              <hr className=" bg-gray-200 w-full mt-4" />
            </div>
          </div>

          {/* <!-- Preview Images Div For larger Screen--> */}

          <div className=" w-full sm:w-96 md:w-8/12  lg:w-6/12  lg:gap-8 sm:gap-6 gap-4">
            <div className="mx-auto w-full lg:w-8/12 bg-gray-100 flex justify-center items-center">
              <img src={picture} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleToy;
