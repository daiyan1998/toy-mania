import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Root.jsx";
import AuthProvider from "./context/AuthProvider";
import { ToastContainer } from "react-toastify";
import { Loading } from "react-fullscreen-loading";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="container mx-auto relative">
      <AuthProvider>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <RouterProvider router={router} />
      </AuthProvider>
    </div>
  </React.StrictMode>
);
