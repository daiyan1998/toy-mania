import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { PencilIcon, UserPlusIcon } from "@heroicons/react/24/solid";
import {
  Card,
  CardHeader,
  Input,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";

const AllToys = () => {
  const [activeTab, setActiveTab] = useState("");
  const [toys, setToys] = useState([]);
  const [searchText, setSearchText] = useState("");
  console.log(searchText);

  useEffect(() => {
    fetch("http://localhost:5000/")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);

  const searchHandler = () => {
    fetch(`http://localhost:5000/toySearchByTitle/${searchText}`)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  };

  //   const filteredToys = toys.filter((toy) => toy.category == activeTab);
  //   console.log("filteredToys:", filteredToys);

  //   const TABS = [
  //     {
  //       label: "All",
  //       value: "All",
  //     },
  //     {
  //       label: "Sports Car",
  //       value: "Sports Car",
  //     },
  //     {
  //       label: "Truck",
  //       value: "Truck",
  //     },
  //     {
  //       label: "Mini Police Car",
  //       value: "Mini Police Car",
  //     },
  //     {
  //       label: "Regular Car",
  //       value: "Regular Car",
  //     },
  //   ];

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
      <Card className="h-full w-full">
        <CardHeader floated={false} shadow={false} className="rounded-none">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            {/* <Tabs value="all" className="w-full">
              <TabsHeader>
                {TABS.map(({ label, value }) => (
                  <Tab
                    key={value}
                    value={value}
                    onClick={() => setActiveTab(value)}
                  >
                    &nbsp;&nbsp;{label}&nbsp;&nbsp;
                  </Tab>
                ))}
              </TabsHeader>
            </Tabs> */}
            <div className="flex gap-5 ">
              <Input
                onChange={(e) => setSearchText(e.target.value)}
                label="Search"
                onKeyDown={searchHandler}
                icon={<MagnifyingGlassIcon className="h-5 w-5" />}
              />
              <Button
                color="teal"
                className="py-3 px-2"
                onClick={searchHandler}
              >
                Search
              </Button>
            </div>
          </div>
        </CardHeader>
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
                        <Tooltip content="Edit User">
                          <IconButton variant="text" color="blue-gray">
                            <PencilIcon className="h-4 w-4" />
                          </IconButton>
                        </Tooltip>
                        <Button color="teal">View Details</Button>
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </CardBody>
        <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
          <Typography variant="small" color="blue-gray" className="font-normal">
            Page 1 of 10
          </Typography>
          <div className="flex gap-2">
            <Button variant="outlined" color="blue-gray" size="sm">
              Previous
            </Button>
            <Button variant="outlined" color="blue-gray" size="sm">
              Next
            </Button>
          </div>
        </CardFooter>
      </Card>
    </>
  );
};

export default AllToys;
