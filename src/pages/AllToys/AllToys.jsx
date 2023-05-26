import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import {
  Card,
  CardHeader,
  Input,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  ButtonGroup,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Table from "./Table";

import { SyncLoader } from "react-spinners";

const AllToys = () => {
  const [toys, setToys] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetch("https://toy-market-server-brown.vercel.app/allToys")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);

  const searchHandler = () => {
    fetch(
      `https://toy-market-server-brown.vercel.app/toySearchByTitle/${searchText}`
    )
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
    console.log(searchText);
  };

  //   const filteredToys = toys.filter((toy) => toy.category == activeTab);
  //   console.log("filteredToys:", filteredToys);

  const TABLE_HEAD = [
    "Toy Name",
    "Price",
    "Quantity",
    "Category",
    "Seller",
    "",
  ];

  if (toys.length == 0) {
    return (
      <div className="h-screen flex items-center justify-center">
        <SyncLoader color="#36d7b7" cssOverride={{}} margin={14} size={28} />
      </div>
    );
  }

  return (
    <>
      <Card className="h-full w-full">
        <CardHeader floated={false} shadow={false} className="rounded-none">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex gap-5 ">
              <Input
                onChange={(e) => setSearchText(e.target.value)}
                type="text"
                icon={<MagnifyingGlassIcon className="h-5 w-5" />}
              />
              <Button
                color="teal"
                type="submit"
                className="py-3 px-2"
                onClick={searchHandler}
              >
                Search
              </Button>
            </div>
          </div>
        </CardHeader>
        <Table toys={toys}></Table>
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
