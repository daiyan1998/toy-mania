import { Fragment, useState } from "react";
import {
  Dialog,
  DialogHeader,
  DialogBody,
  Card,
  Input,
  Button,
  Textarea,
  ButtonGroup,
} from "@material-tailwind/react";
import { MdOutlineEditNote } from "react-icons/md";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const Modal = ({ toy, setToys, toys }) => {
  const { _id, price, quantity } = toy;

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const price = parseInt(data.price);
    fetch(`https://toy-market-server-brown.vercel.app/updateToy/${_id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ ...data, price }),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setToys(toys);
        if (result.modifiedCount > 0) {
          Swal.fire("Updated!", "", "success");
        }
      });
  };

  return (
    <div>
      <Fragment>
        <Button className="flex items-center" color="teal" onClick={handleOpen}>
          <MdOutlineEditNote className="text-2xl" />
          Update
        </Button>
        <Dialog open={open} handler={handleOpen}>
          <DialogHeader>Update Your Information</DialogHeader>
          <DialogBody divider className="h-[30rem]  flex justify-center">
            <Card color="transparent" shadow={false}>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
              >
                <div className="mb-4 flex flex-col gap-6">
                  <Input
                    size="lg"
                    type="number"
                    defaultValue={price}
                    label="Price"
                    {...register("price")}
                  />
                  <input
                    size="lg"
                    value={_id}
                    label="Price"
                    className="hidden"
                    {...register("_id")}
                  />
                  <Input
                    size="lg"
                    defaultValue={quantity}
                    type="number"
                    label="Available Quantity"
                    {...register("quantity")}
                  />
                </div>
                <div className="w-96">
                  <Textarea
                    type="text"
                    label="Detail Description"
                    {...register("description")}
                  />
                </div>
                <ButtonGroup className="">
                  <Button
                    onClick={handleOpen}
                    className="mt-6 w-full"
                    type="submit"
                  >
                    Save
                  </Button>
                  <Button onClick={handleOpen} className="mt-6 w-full">
                    Exit
                  </Button>
                </ButtonGroup>
              </form>
            </Card>
          </DialogBody>
        </Dialog>
      </Fragment>
    </div>
  );
};

export default Modal;
