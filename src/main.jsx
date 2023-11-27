import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { router } from "./router/Router";
import { HelmetProvider } from "react-helmet-async";
import AuthProvider from "./provider/AuthProvider";
import CartProvider from "./provider/CartProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <CartProvider>
        <HelmetProvider>
          <div>
            <RouterProvider router={router} />
          </div>
        </HelmetProvider>
      </CartProvider>
    </AuthProvider>
  </React.StrictMode>
);
