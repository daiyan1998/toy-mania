import { Fragment, useState } from "react";
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
  Card,
  Input,
  Checkbox,
  Button,
  Textarea,
} from "@material-tailwind/react";
import { MdOutlineEditNote } from "react-icons/md";

const Modal = ({ toys }) => {
  const { picture, _id, name, price, quantity, category, online, sellerName } =
    toys;
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);
  return (
    <div>
      <Fragment>
        <Button className="flex items-center" color="teal" onClick={handleOpen}>
          <MdOutlineEditNote className="text-2xl" />
          Update
        </Button>
        <Dialog open={open} handler={handleOpen}>
          <DialogHeader>Update Your Preference</DialogHeader>
          <DialogBody divider className="h-[30rem]  flex justify-center">
            <Card color="transparent" shadow={false}>
              <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                <div className="mb-4 flex flex-col gap-6">
                  <Input size="lg" type="number" label="Price" />
                  <Input size="lg" type="number" label="Available Quantity" />
                </div>
                <div className="w-96">
                  <Textarea label="Detail Description" />
                </div>

                {/* <Button className="mt-6" fullWidth>
                  Update
                </Button> */}
              </form>
            </Card>
          </DialogBody>
          <DialogFooter className="space-x-2">
            <Button variant="outlined" color="red" onClick={handleOpen}>
              close
            </Button>
            <Button variant="gradient" color="green" onClick={handleOpen}>
              Save changes
            </Button>
          </DialogFooter>
        </Dialog>
      </Fragment>
    </div>
  );
};

export default Modal;
