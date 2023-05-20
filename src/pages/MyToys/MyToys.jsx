import { useLoaderData } from "react-router-dom";
import Table from "../shared/Table";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [toys, setToys] = useState([]);
  const url = `http://localhost:5000/myToys?sellerEmail=${user.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);
  console.log("toys:", toys, user.email);
  return (
    <>
      {toys.length === 0 ? (
        <h1 className="text-7xl text-center h-56 my-52">No Toys Added</h1>
      ) : (
        <Table toys={toys}></Table>
      )}
    </>
  );
};

export default MyToys;
