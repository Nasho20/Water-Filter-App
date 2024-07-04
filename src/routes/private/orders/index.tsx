import React, { useState, useEffect } from "react";
import styles from "./Orders.module.scss";
import FiltersButton from "../../../components/FiltersButton/FiltersButton";
import DatePickerButton from "../../../components/DatePickerButton/DatePickerButton";
import DataTable from "../../../components/DataTable/DataTable";
import AddNewButton from "../../../components/AddNewButton/AddNewButton";
import OrderFilters from "./components/OrdersFilters/OrdersFilters";
import { Link, useNavigate } from "react-router-dom";
import AllOrders from "./components/AllOrders/AllOrders";
import CompletedOrders from "./components/Completed/CompletedOrders";
import InProgressOrders from "./components/InProgress/InProgressOrders";
import CanceledOrders from "./components/Canceled/CanceledOrders";
import GeneralLoader from "../../../components/Loader/GeneralLoader";

export default function Orders() {
  const [clickedOrder, setClickedOrder] = useState("allOrders");
  const [showFilter, setShowFilter] = useState(false);
  const [filteredData, setFilteredData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setLoading(false);
    };

    fetchData();
  }, []);

  const navigate = useNavigate();

  const handleFilter = (filters: { [key: string]: string }) => {
    // const filteredResults = results;
    // setFilteredData(filteredResults);
    console.log(filters);
  };

  const toggleFilter = () => {
    setShowFilter(!showFilter);
  };

  const handleClickedTab = (tab: any) => {
    setClickedOrder(tab);
  };

  const navigateToNewOrder = () => {
    navigate("addNewOrders");
  };

  if (loading) {
    return (
      <div className="mt-5 pt-5">
        <GeneralLoader
          title={
            <>
              <p id="loading">Loading Orders</p>
            </>
          }
          body={<p id="please_wait_orders">Please wait for orders</p>}
        />
      </div>
    );
  }

  return (
    <div className="dash-body">
      <div className="px-3 pb-3 bg-white">
        <div className="row pt-2">
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 d-flex gap-4">
            <div className={`${styles.tableBtnRenderer} rounded`}>
              <button
                className={`px-5 py-2 border rounded ${
                  clickedOrder === "allOrders"
                    ? styles.clickedButton
                    : "bg-white"
                }`}
                onClick={() => handleClickedTab("allOrders")}
              >
                All
              </button>
            </div>
            <div className={`${styles.tableBtnRenderer} rounded`}>
              <button
                className={`px-4 py-2 border rounded ${
                  clickedOrder === "completedOrders"
                    ? styles.clickedButton
                    : "bg-white"
                }`}
                onClick={() => handleClickedTab("completedOrders")}
              >
                Completed
              </button>
            </div>
            <div className={`${styles.tableBtnRenderer} rounded`}>
              <button
                className={`px-4 py-2 border rounded ${
                  clickedOrder === "inProgressOrders"
                    ? styles.clickedButton
                    : "bg-white"
                }`}
                onClick={() => handleClickedTab("inProgressOrders")}
              >
                In Progress
              </button>
            </div>
            <div className={`${styles.tableBtnRenderer} rounded`}>
              <button
                className={`px-4 py-2 border rounded ${
                  clickedOrder === "canceledOrders"
                    ? styles.clickedButton
                    : "bg-white"
                }`}
                onClick={() => handleClickedTab("canceledOrders")}
              >
                Canceled
              </button>
            </div>
          </div>
        </div>
        {clickedOrder === "allOrders" && (
          <div className="bg-white pt-4 flex justify-content-between">
            <div>
              <h5>All Orders 32.322</h5>
            </div>
            <div className="flex gap-4">
              <div>
                <button onClick={toggleFilter}>
                  <FiltersButton />
                </button>
              </div>
              <div>
                <DatePickerButton />
              </div>
              <div>
                <button onClick={navigateToNewOrder}>
                  <AddNewButton />
                </button>
              </div>
            </div>
          </div>
        )}
        {clickedOrder === "completedOrders" && (
          <div className="bg-white pt-4 flex justify-content-between">
            <div>
              <h5>Completed Orders 540</h5>
            </div>
            <div className="flex gap-4">
              <div>
                <button onClick={toggleFilter}>
                  <FiltersButton />
                </button>
              </div>
              <div>
                <DatePickerButton />
              </div>
            </div>
          </div>
        )}
        {clickedOrder === "inProgressOrders" && (
          <div className="bg-white pt-4 flex justify-content-between">
            <div>
              <h5>All Orders 32.322</h5>
            </div>
            <div className="flex gap-4">
              <div>
                <button onClick={toggleFilter}>
                  <FiltersButton />
                </button>
              </div>
              <div>
                <DatePickerButton />
              </div>
            </div>
          </div>
        )}
        {clickedOrder === "canceledOrders" && (
          <div className="bg-white pt-4 flex justify-content-between">
            <div>
              <h5>All Orders 32.322</h5>
            </div>
            <div className="flex gap-4">
              <div>
                <button onClick={toggleFilter}>
                  <FiltersButton />
                </button>
              </div>
              <div>
                <DatePickerButton />
              </div>
            </div>
          </div>
        )}
      </div>

      <OrderFilters
        isOpen={showFilter}
        maxWidth={800}
        closePopup={toggleFilter}
      />
      <div>
        {clickedOrder === "allOrders" && <AllOrders />}
        {clickedOrder === "completedOrders" && <CompletedOrders />}
        {clickedOrder === "inProgressOrders" && <InProgressOrders />}
        {clickedOrder === "canceledOrders" && <CanceledOrders />}
      </div>
    </div>
  );
}
