import "./App.scss";
import {
  BrowserRouter,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";

import { useAppSelector } from "./store/hooks";
import { ToastContainer } from "react-toastify";

//public routes
import DashBody from "./components/DashBody/DashBody";
import LoginForm from "./routes/public/LoginForm";
import Login from "./routes/public";

import Error404 from "./components/Error/Error404";
import ProtectedRoutes from "./components/ProtectedRoutes/ProtectedRoutes";
import UnderConstruction from "./components/Error/UnderConstruction";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import Notifications from "./routes/private/notifications/Notifications";
import Setup from "./routes/private/setup";
import Dashboard from "./routes/private/dashboard";
import Warehouse from "./routes/private/warehouse";
import Products from "./routes/private/products";
import Orders from "./routes/private/orders";
import Clients from "./routes/private/clients";
import Analytics from "./routes/private/analytics";
import Finance from "./routes/private/finance";
import AddNewSingleProduct from "./routes/private/products/components/AddProducts/SingleProduct/AddNewSingleProduct";
import UploadCSVProducts from "./routes/private/products/components/AddProducts/UploadCSV/UploadCSVProducts";
import AddNewOrders from "./routes/private/orders/components/NewOrders/AddNewOrders";
import SingleClient from "./routes/private/clients/components/NewClient/SingleClient/SingleClient";
import UploadCSVClients from "./routes/private/clients/components/NewClient/UploadCSV/UploadCSVClients";

function App() {
  const { token } = useAppSelector((state: any) => state.auth);
  return (
    <Routes>
      {/* <BrowserRouter> */}
      {/* <ToastContainer theme={"light"} newestOnTop={true} /> */}
      <Route path="/" element={<Login />}>
        <Route index={true} element={<LoginForm />} />
      </Route>

      <Route path="*" element={<Error404 />} />
      <Route
        path="/under-construction"
        element={<UnderConstruction position="absolute" />}
      />

      <Route
        path="/notifications"
        element={
          <>
            <ProtectedRoutes isLoggedIn={token ? true : false}>
              <DashBody />
            </ProtectedRoutes>
          </>
        }
      >
        <Route index={true} element={<Notifications />} />
      </Route>

      <Route
        path="/setup"
        element={
          <>
            <ProtectedRoutes isLoggedIn={token ? true : false}>
              <DashBody />
            </ProtectedRoutes>
          </>
        }
      >
        <Route index={true} element={<Setup />} />
      </Route>

      {/* Admin Routes */}

      <Route
        path="/admin"
        element={
          <>
            <ProtectedRoutes
              // isLoggedIn={token ? true : false}
              isLoggedIn={true}
            >
              <DashBody />
            </ProtectedRoutes>
          </>
        }
      >
        <Route index={true} element={<Dashboard />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="warehouse" element={<Warehouse />} />
        <Route path="products" element={<Products />} />
        <Route
          path="products/singleProduct"
          element={<AddNewSingleProduct />}
        />
        <Route
          path="products/uploadCSVProducts"
          element={
            <UploadCSVProducts
              onFileUpload={function (data: string[][]): void {
                throw new Error("Function not implemented.");
              }}
            />
          }
        />
        <Route path="orders" element={<Orders />} />
        <Route path="orders/addNewOrders" element={<AddNewOrders />} />
        <Route path="clients" element={<Clients />} />
        <Route path="clients/singleClient" element={<SingleClient />} />
        <Route
          path="clients/uploadCSVClients"
          element={
            <UploadCSVClients
              onFileUpload={function (data: string[][]): void {
                throw new Error("Function not implemented.");
              }}
            />
          }
        />
        <Route path="analytics" element={<Analytics />} />
        <Route path="finance" element={<Finance />} />
        <Route path="setup" element={<Setup />} />
      </Route>

      {/* Manager Routes */}

      <Route
        path="/manager"
        element={
          <>
            <ProtectedRoutes
              isLoggedIn={token ? true : false}
              // isLoggedIn={true}
            >
              <DashBody />
            </ProtectedRoutes>
          </>
        }
      >
        <Route index={true} element={<Dashboard />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="warehouse" element={<Warehouse />} />
        <Route path="products" element={<Products />} />
        <Route
          path="products/singleProduct"
          element={<AddNewSingleProduct />}
        />
        <Route
          path="products/uploadCSVProducts"
          element={
            <UploadCSVProducts
              onFileUpload={function (data: string[][]): void {
                throw new Error("Function not implemented.");
              }}
            />
          }
        />
        <Route path="orders" element={<Orders />} />
        <Route path="orders/addNewOrders" element={<AddNewOrders />} />
        <Route path="clients" element={<Clients />} />
        <Route path="clients/singleClient" element={<SingleClient />} />
        <Route
          path="clients/uploadCSVClients"
          element={
            <UploadCSVClients
              onFileUpload={function (data: string[][]): void {
                throw new Error("Function not implemented.");
              }}
            />
          }
        />
        <Route path="analytics" element={<Analytics />} />
        {/* <Route path="finance" element={<Finance />} /> */}
        <Route path="setup" element={<Setup />} />
      </Route>

      {/* Sales Routes */}

      <Route
        path="/sales"
        element={
          <>
            <ProtectedRoutes
              isLoggedIn={token ? true : false}
              // isLoggedIn={true}
            >
              <DashBody />
            </ProtectedRoutes>
          </>
        }
      >
        <Route index={true} element={<Dashboard />} />
        <Route path="dashboard" element={<Dashboard />} />
        {/* <Route path="warehouse" element={<Warehouse />} /> */}
        <Route path="products" element={<Products />} />
        <Route
          path="products/singleProduct"
          element={<AddNewSingleProduct />}
        />
        {/* <Route
            path="products/uploadCSVProducts"
            element={
              <UploadCSVProducts
                onFileUpload={function (data: string[][]): void {
                  throw new Error("Function not implemented.");
                }}
              />
            }
          /> */}
        <Route path="orders" element={<Orders />} />
        <Route path="orders/addNewOrders" element={<AddNewOrders />} />
        <Route path="clients" element={<Clients />} />
        <Route path="clients/singleClient" element={<SingleClient />} />
        {/* <Route
            path="clients/uploadCSVClients"
            element={
              <UploadCSVClients
                onFileUpload={function (data: string[][]): void {
                  throw new Error("Function not implemented.");
                }}
              />
            }
          /> */}
        {/* <Route path="analytics" element={<Analytics />} /> */}
        {/* <Route path="finance" element={<Finance />} /> */}
        {/* <Route path="setup" element={<Setup />} /> */}
      </Route>

      {/* Finance Routes */}

      <Route
        path="/finance"
        element={
          <>
            <ProtectedRoutes
              isLoggedIn={token ? true : false}
              // isLoggedIn={true}
            >
              <DashBody />
            </ProtectedRoutes>
          </>
        }
      >
        <Route index={true} element={<Dashboard />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="finance" element={<Finance />} />
      </Route>
      {/* </BrowserRouter> */}
    </Routes>
  );
}

export default App;
