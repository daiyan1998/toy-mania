import {
  Typography,
  Button,
  CardBody,
  Chip,
  ButtonGroup,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { MdDelete, MdOutlineEditNote } from "react-icons/md";
import Modal from "./Modal";

const Table = ({ toys }) => {
  const TABLE_HEAD = [
    "Toy Name",
    "Price",
    "Quantity",
    "Category",
    "Seller",
    "",
  ];

  return (
    <>
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
                      <div className="flex">
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
    </>
  );
};

export default Table;
