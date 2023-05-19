import React, { useContext, useState } from "react";
import {
  Card,
  CardBody,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";
import { LockClosedIcon } from "@heroicons/react/24/solid";
import { useForm } from "react-hook-form";
import "./AddToy.css";
import { AuthContext } from "../../context/AuthProvider";

const AddToy = () => {
  const { user } = useContext(AuthContext);
  console.log("user:", user);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    fetch("http://localhost:5000/addToy", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log("result:", result);
      });
    console.log("data", data);
  };

  return (
    <>
      <Card className="w-full mx-auto max-w-[50rem]">
        <CardBody>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-12 flex flex-col gap-4"
          >
            <div className="">
              <Typography
                variant="small"
                color="blue-gray"
                className="mb-4 font-medium"
              >
                Personal Details
              </Typography>
              <div className="flex gap-3">
                <Input
                  type="email"
                  name="email"
                  label="Seller Email"
                  value={user ? user.email : "No Email"}
                  readOnly
                  {...register("sellerEmail")}
                />
                {user?.displayName ? (
                  <Input
                    type="text"
                    name="sellerName"
                    label="Seller Name"
                    value={user.displayName}
                    {...register("sellerName")}
                  />
                ) : (
                  <Input
                    type="text"
                    name="sellerName"
                    label="Seller Name"
                    {...register("sellerName")}
                  />
                )}
              </div>
            </div>

            <div className="my-6">
              <Typography
                variant="small"
                color="blue-gray"
                className="mb-4 font-medium"
              >
                Toy Details
              </Typography>
              <div className="flex gap-4">
                <Input
                  label="Toy Name"
                  required
                  {...register("name")}
                  maxLength={19}
                />
                <select
                  className="inputS"
                  label="Category"
                  required
                  placeholder="Category"
                  {...register("category")}
                >
                  <option className="inputS" value="Regular Car">
                    Regular Car
                  </option>
                  <option className="inputS" value="Sports">
                    Sports Car
                  </option>
                  <option className="inputS" value="Mini Police Car">
                    Mini Police Car
                  </option>
                  <option className="optionS" value="Truck">
                    Truck
                  </option>
                </select>
              </div>
              <div className="my-4 grid grid-cols-2 items-center gap-4">
                <Input
                  label="Price"
                  name="price"
                  type="number"
                  required
                  {...register("price")}
                  maxLength={5}
                  containerProps={{ className: "min-w-[72px]" }}
                />
                <Input
                  label="Rating"
                  required
                  type="number"
                  min={1}
                  max={5}
                ></Input>
                <Input
                  type="text"
                  required
                  {...register("picture")}
                  label="Photo URL"
                />
                <Input
                  type="number"
                  name="quantity"
                  required
                  min={1}
                  maxLength={100}
                  {...register("quantity")}
                  max={100}
                  label="Quantity"
                />
              </div>
            </div>
            <Button type="submit" size="lg">
              Add
            </Button>
            <Typography
              variant="small"
              color="gray"
              className="mt-2 flex items-center justify-center gap-2 font-normal opacity-60"
            >
              <LockClosedIcon className="-mt-0.5 h-4 w-4" /> Payments are secure
              and encrypted
            </Typography>
          </form>
        </CardBody>
      </Card>
    </>
  );
};

export default AddToy;
