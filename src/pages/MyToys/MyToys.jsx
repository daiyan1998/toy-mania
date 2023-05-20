import { Link, useLoaderData } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import {
  CardBody,
  Spinner,
  Typography,
  Button,
  Chip,
} from "@material-tailwind/react";

import { MdDelete, MdOutlineEditNote } from "react-icons/md";
import Modal from "../shared/Modal";

const MyToys = () => {
  const { user, setLoading, loading } = useContext(AuthContext);
  const [toys, setToys] = useState([]);

  const TABLE_HEAD = [
    "Toy Name",
    "Price",
    "Quantity",
    "Category",
    "Seller",
    "",
  ];

  const url = `http://localhost:5000/myToys?sellerEmail=${user.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setToys(data))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleDelete = (data) => {
    fetch(`http://localhost:5000/deleteToy/${data?._id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (data.deletedCount > 0) {
          alert("deleted");
        }
      });
    console.log("clicked");
  };

  return (
    <>
      {toys.length === 0 ? (
        <h1 className="text-7xl text-center h-56 my-52">No Toys Added</h1>
      ) : (
        <CardBody className="overflow-scroll px-0">
          <table className="mt-4 w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                  >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {toys.map(
                (
                  {
                    picture,
                    _id,
                    name,
                    price,
                    quantity,
                    category,
                    online,
                    sellerName,
                  },
                  index
                ) => {
                  const isLast = index === toys.length - 1;
                  const classes = isLast
                    ? "p-4"
                    : "p-4 border-b border-blue-gray-50";

                  return (
                    <tr key={name}>
                      <td className={classes}>
                        <div className="flex items-center gap-3">
                          <img
                            className="h-24 w-24 object-contain"
                            src={picture}
                            alt={name}
                            size="xxl"
                          />
                          <div className="flex flex-col">
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal text-lg"
                            >
                              {name}
                            </Typography>
                            {/* <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal opacity-70"
                            >
                              {email}
                            </Typography> */}
                          </div>
                        </div>
                      </td>
                      <td className={classes}>
                        <div className="flex flex-col">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-bold"
                          >
                            ${price}
                          </Typography>
                        </div>
                      </td>
                      <td className={classes}>
                        <div className="flex flex-col">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-bold"
                          >
                            {quantity}
                          </Typography>
                        </div>
                      </td>
                      <td className={classes}>
                        <div className="w-max">
                          <Chip
                            variant="ghost"
                            size="sm"
                            // value={online ? "online" : "offline"}
                            value={category}
                            color={online ? "green" : "blue-gray"}
                          />
                        </div>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {sellerName ? sellerName : "Unknown"}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <div className="flex gap-1">
                          <Button
                            onClick={() => handleDelete(_id)}
                            color="teal"
                          >
                            <MdDelete className="text-2xl" />
                          </Button>
                          <div className="flex">
                            <Modal
                              toys={{
                                picture,
                                _id,
                                name,
                                price,
                                quantity,
                                category,
                                online,
                                sellerName,
                              }}
                            ></Modal>
                          </div>
                          <Button color="teal">
                            <Link to={`/myToys/${_id}`}>View Details</Link>
                          </Button>
                        </div>
                      </td>
                    </tr>
                  );
                }
              )}
              ;
            </tbody>
          </table>
        </CardBody>
      )}
    </>
  );
};

export default MyToys;
