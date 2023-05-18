import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const Registration = () => {
  const { createUser, updateInformation } = useContext(AuthContext);
  const [passError, setPassError] = useState(false);
  const [errMessage, setErrMessage] = useState("");

  const signUpHandler = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;
    password.length < 6 ? setPassError(true) : setPassError(false);
    console.log(name, email, password);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        user.displayName = name;
        user.photoURL = photo;
        console.log("Register", user);
        updateInformation(name, photo);
      })
      .catch((err) => {
        if (err.code == "auth/weak-password") return;
        setErrMessage(err.code);
      });
  };

  return (
    <>
      <div
        className="bg-white static w-full md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
        flex items-center justify-center"
      >
        <div className="w-full h-100">
          <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">
            Registration
          </h1>

          <form
            onSubmit={signUpHandler}
            className="mt-6"
            action="#"
            method="POST"
          >
            <div>
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                id=""
                placeholder="Name"
                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Email Address</label>
              <input
                type="email"
                name="email"
                id=""
                placeholder="Enter Email Address"
                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                required
              />
              <span className="text-red-600">{errMessage.split("/")}</span>
            </div>

            <div className="mt-4">
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                name="password"
                id=""
                placeholder="Enter Password"
                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                focus:bg-white focus:outline-none"
                required
              />
              {passError && (
                <p className="text-red-600">
                  *password must be at least 6 characters
                </p>
              )}
            </div>
            <div className="mt-4">
              <label className="block text-gray-700">Photo URL</label>
              <input
                type="text"
                name="photo"
                id=""
                placeholder="URL"
                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                focus:bg-white focus:outline-none"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
              px-4 py-3 mt-6"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Registration;
