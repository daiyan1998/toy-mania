import React, { useContext, useEffect, useState } from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import CategoryCard from "./CategoryCard";
import { Link } from "react-router-dom";
import AuthProvider, { AuthContext } from "../../context/AuthProvider";
import { SyncLoader } from "react-spinners";

const CatagoryTab = () => {
  const { loading, setLoading } = useContext(AuthContext);
  const [activeTab, setActiveTab] = useState("Sports Car");
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch("https://toy-market-server-brown.vercel.app/")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);
  const filteredToys = toys.filter((toy) => toy.category == activeTab);
  const data = [
    {
      label: "Sports Car",
      value: "Sports Car",
      desc: `It really matters and then like it really doesn't matter.
      What matters is the people who are sparked by it. And the people 
      who are like offended by it, it doesn't matter.`,
    },
    {
      label: "Truck",
      value: "Truck",
      desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
    },
    {
      label: "Mini Police Car",
      value: "Mini Police Car",
      desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
    },
    {
      label: "Regular Car",
      value: "Regular Car",
      desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
    },
  ];
  return (
    <>
      <Tabs value={activeTab}>
        <TabsHeader
          className="rounded-none border-b z-0 border-blue-gray-50 bg-transparent p-0"
          indicatorProps={{
            className:
              "bg-transparent border-b-2 border-blue-500 shadow-none rounded-none",
          }}
        >
          {data.map(({ label, value }) => (
            <Tab
              key={value}
              value={value}
              onClick={() => setActiveTab(value)}
              className={activeTab === value ? "text-blue-500" : ""}
            >
              <span>{label}</span>
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody>
          {data.map(({ value, desc }) => (
            <TabPanel key={value} value={value}>
              <SyncLoader loading={loading} color="#36a7c7" />
              <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 justify-items-center items-center">
                {filteredToys.map((filteredToy) => (
                  <CategoryCard
                    key={filteredToy._id}
                    filteredToy={filteredToy}
                  ></CategoryCard>
                ))}
              </div>
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </>
  );
};

export default CatagoryTab;
