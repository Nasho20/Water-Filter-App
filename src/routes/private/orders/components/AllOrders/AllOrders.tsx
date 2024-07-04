import React, { useState } from "react";
import styles from "./Orders.module.scss";
import FiltersButton from "../../../../../components/FiltersButton/FiltersButton";
import DatePickerButton from "../../../../../components/DatePickerButton/DatePickerButton";
import DataTable from "../../../../../components/DataTable/DataTable";
import AddNewButton from "../../../../../components/AddNewButton/AddNewButton";
import OrderFilters from "../OrdersFilters/OrdersFilters";
import { Link, useNavigate } from "react-router-dom";

export default function AllOrders() {
  const ordersColumns = [
    { field: "id", headerName: "ID" },
    { field: "name", headerName: "NAME" },
    { field: "destination", headerName: "DESTINATION" },
    { field: "priceOut", headerName: "PRICE OUT" },
    { field: "orderDate", headerName: "ORDER DATE" },
    { field: "client", headerName: "CLIENT" },
    { field: "warehouse", headerName: "WAREHOUSE" },
    // { field: "salesperson", headerName: "SALESPERSON" },
    { field: "barcode", headerName: "BARCODE" },
    { field: "status", headerName: "STATUS" },
  ];

  const ordersTableData = [
    {
      id: 1,
      name: "Filter",
      destination: "30",
      priceOut: "$150",
      orderDate: "Tirane",
      client: "John Doe",
      warehouse: "John Doe",
      // salesperson: "John Doe",
      barcode: "12345",
      status: "COMPLETED",
    },
    {
      id: 1,
      name: "Filter",
      destination: "30",
      priceOut: "$150",
      orderDate: "Tirane",
      client: "John Doe",
      warehouse: "John Doe",
      // salesperson: "John Doe",
      barcode: "12345",
      status: "IN PROGRESS",
    },
    {
      id: 1,
      name: "Filter",
      destination: "30",
      priceOut: "$150",
      orderDate: "Tirane",
      client: "John Doe",
      warehouse: "John Doe",
      // salesperson: "John Doe",
      barcode: "12345",
      status: "IN PROGRESS",
    },
    {
      id: 1,
      name: "Filter",
      destination: "30",
      priceOut: "$150",
      orderDate: "Tirane",
      client: "John Doe",
      warehouse: "John Doe",
      // salesperson: "John Doe",
      barcode: "12345",
      status: "RETURNED",
    },
  ];

  return (
    <>
      <div className="bg-white rounded">
        <div className="py-3">
          <DataTable
            columnDefs={[
              ...ordersColumns,
              // {
              //   field: "actions",
              //   cellRenderer: BtnCellRenderer,
              //   width: 150,
              // },
            ]}
            rowData={ordersTableData}
            csvFileName="notices"
            showActionToolbar={true}
            // cellClicked={cellClicked}
            rowSelection={"multiple"}
            hasDelete={false}
            // filterTable={filterInTable}
            // onPageChange={onPageChange}
            removeSearch={true}
            multiSelect={false}
            filterTable={function (query: string): void {
              throw new Error("Function not implemented.");
            }} // onMultiSelect={handleMultiSelect}
          />
        </div>
      </div>
    </>
  );
}
