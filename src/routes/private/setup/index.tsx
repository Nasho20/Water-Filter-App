import React, { useState } from "react";
import styles from "./Setup.module.scss";
import AddNewButton from "../../../components/AddNewButton/AddNewButton";
import WarehouseSetup from "./componets/Warehouse/WarehouseSetup";
import WorkersSetup from "./componets/Workers/WorkersSetup";
import AccountSetup from "./componets/Account/AccountSetup";

export default function Setup() {
  const [clickedSetup, setCllickedSetup] = useState("warehouseSetup");

  const handleClickedTab = (tab: any) => {
    setCllickedSetup(tab);
  };

  return (
    <div className="dash-body">
      <div className="ps-3">
        <div className="row p-4 bg-white rounded">
          <div className="col-lg-10 col-md-10 col-sm-10 col-xs-10 d-flex gap-4">
            <div className={`${styles.tableBtnRenderer} rounded`}>
              <button
                className={`px-5 py-2 border rounded ${
                  clickedSetup === "warehouseSetup"
                    ? styles.clickedButton
                    : "bg-white"
                }`}
                onClick={() => handleClickedTab("warehouseSetup")}
              >
                Warehouse
              </button>
            </div>
            <div className={`${styles.tableBtnRenderer} rounded`}>
              <button
                className={`px-4 py-2 border rounded ${
                  clickedSetup === "workersSetup"
                    ? styles.clickedButton
                    : "bg-white"
                }`}
                onClick={() => handleClickedTab("workersSetup")}
              >
                Workers
              </button>
            </div>
            <div className={`${styles.tableBtnRenderer} rounded`}>
              <button
                className={`px-4 py-2 border rounded ${
                  clickedSetup === "accountSetup"
                    ? styles.clickedButton
                    : "bg-white"
                }`}
                onClick={() => handleClickedTab("accountSetup")}
              >
                Account
              </button>
            </div>
          </div>
          <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 d-flex justify-content-end">
            <button>
              <AddNewButton />
            </button>
          </div>
        </div>
      </div>
      {clickedSetup === "warehouseSetup" && <WarehouseSetup />}
      {clickedSetup === "workersSetup" && <WorkersSetup />}
      {clickedSetup === "accountSetup" && <AccountSetup />}
    </div>
  );
}
