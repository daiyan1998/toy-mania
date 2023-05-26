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
import Modal from "./Modal";
import Swal from "sweetalert2";
import { SyncLoader } from "react-spinners";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [toys, setToys] = useState([]);
  const [isTrue, setIsTrue] = useState(false);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    const url = `https://toy-market-server-brown.vercel.app/myToySort?sellerEmail=${user?.email}&isTrue=${isTrue}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log("data:", data, isTrue);
        setToys(data);
      })
      .catch((error) => {
        console.error(error.message);
      });
  }, [user, isTrue]);

  const TABLE_HEAD = [
    "Toy Name",
    "Price",
    "Quantity",
    "Category",
    "Seller",
    "",
  ];

  // Fetch data
  const url = `https://toy-market-server-brown.vercel.app/myToys/${user.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setLoader(false);
        setToys(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  // Delete Data
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://toy-market-server-brown.vercel.app/deleteToy/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((result) => {
            if (result.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              const remaining = toys.filter((toy) => toy._id !== id);
              setToys(remaining);
            }
          });
      }
    });
  };

  if (loader) {
    return (
      <div className="h-screen flex items-center justify-center">
        <SyncLoader color="#36d7b7" cssOverride={{}} margin={14} size={28} />
      </div>
    );
  }

  return (
    <>
      {toys.length === 0 ? (
        <h1 className="text-7xl text-center h-56 my-52">No Toys Added</h1>
      ) : (
        <CardBody className="overflow-scroll px-0">
          <div className="mb-3">
            {isTrue ? (
              <Button
                color="teal"
                className="btn mr-3"
                onClick={() => setIsTrue(!isTrue)}
              >
                Descending
              </Button>
            ) : (
              <Button
                color="teal"
                className="btn"
                onClick={() => setIsTrue(!isTrue)}
              >
                Ascending
              </Button>
            )}
          </div>
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
                  { picture, _id, name, price, quantity, category, sellerName },
                  index
                ) => {
                  const isLast = index === toys.length - 1;
                  const classes = isLast
                    ? "p-4"
                    : "p-4 border-b border-blue-gray-50";

                  return (
                    <tr key={_id}>
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
                          <Chip variant="ghost" size="sm" value={category} />
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
                              toy={{
                                _id,
                                price,
                                quantity,
                              }}
                              toys={toys}
                              setToys={setToys}
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
