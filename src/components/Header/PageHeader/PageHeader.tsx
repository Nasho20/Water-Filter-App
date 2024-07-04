import React, { useState } from "react";
import styles from "./PageHeader.module.scss";

export default function PageHeader() {
  const [searchInput, setSearchInput] = useState("");

  const currentPage = window.location.pathname;
  const getPageTitle = () => {
    if (currentPage === "/admin/dashboard") {
      return "Dashboard Overview";
    } else if (currentPage === "/admin/warehouse") {
      return "Warehouse";
    } else if (currentPage === "/admin/products") {
      return "Products";
    } else if (currentPage === "/admin/orders") {
      return "Orders";
    } else if (currentPage === "/admin/clients") {
      return "Clients";
    } else if (currentPage === "/admin/analytics") {
      return "Analytics";
    } else if (currentPage === "/admin/finance") {
      return "Finance";
    } else if (currentPage === "/admin/setup") {
      return "Setup";
    }
  };

  const handleChange = (e: any) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  return (
    <>
      <div className="d-flex">
        <div className="fs-24 align-items-center">
          <div className="d-flex gap-4">
            <div
              className={` ${styles.pageTitle} d-flex gap-2 align-items-center fw-bold`}
            >
              {getPageTitle()}
            </div>
            {/* <div className="position-absolute">
              <SearchBarIcon />
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
