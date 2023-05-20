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
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Table from "./Table";

const AllToys = () => {
  const [toys, setToys] = useState([]);
  const [searchText, setSearchText] = useState("");

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
