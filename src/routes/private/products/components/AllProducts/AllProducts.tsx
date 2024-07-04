import React, { useState } from "react";
import styles from "./Products.module.scss";
// import { EyeIcon, FiltersIcon } from "../../../assets";
import ColumnsButton from "../../../../../components/ColumnsButton/ColumnsButton";
import FiltersButton from "../../../../../components/FiltersButton/FiltersButton";
import DatePickerButton from "../../../../../components/DatePickerButton/DatePickerButton";
import DataTable from "../../../../../components/DataTable/DataTable";
import ProductsFilters from "../ProductsFilters/ProductsFilters";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import ReturnedProducts from "../ReturnedProducts";

export default function AllProducts() {
  const productsColumns = [
    { field: "id", headerName: "ID" },
    { field: "name", headerName: "NAME" },
    { field: "quantity", headerName: "QTY" },
    { field: "priceIn", headerName: "PRICE IN" },
    { field: "priceOut", headerName: "PRICE OUT" },
    { field: "value", headerName: "VALUE" },
    { field: "registrationDate", headerName: "REG. DATE" },
    { field: "registrationPerson", headerName: "REG. PERSON" },
    { field: "barcode", headerName: "BARCODE" },
  ];

  const productsTableData = [
    {
      id: 1,
      name: "Filter",
      quantity: "30",
      priceIn: "$150",
      priceOut: "$150",
      value: "Tirane",
      registrationDate: "John Doe",
      registrationPerson: "John Doe",
      barcode: "12345",
    },
    {
      id: 1,
      name: "Filter",
      quantity: "30",
      priceIn: "$150",
      priceOut: "$150",
      value: "Tirane",
      registrationDate: "John Doe",
      registrationPerson: "John Doe",
      barcode: "12345",
    },
    {
      id: 1,
      name: "Filter",
      quantity: "30",
      priceIn: "$150",
      priceOut: "$150",
      value: "Tirane",
      registrationDate: "John Doe",
      registrationPerson: "John Doe",
      barcode: "12345",
    },
    {
      id: 1,
      name: "Filter",
      quantity: "30",
      priceIn: "$150",
      priceOut: "$150",
      value: "Tirane",
      registrationDate: "John Doe",
      registrationPerson: "John Doe",
      barcode: "12345",
    },
  ];

  //   const [clickedProducts, setClickedProducts] = useState("allProducts");
  const [showFilter, setShowFilter] = useState(false);
  const [filteredData, setFilteredData] = useState<any[]>([]);
  const [openAddNew, setOpenAddNew] = useState(false);

  const handleFilter = (filters: { [key: string]: string }) => {
    // const filteredResults = results;
    // setFilteredData(filteredResults);
    console.log(filters);
  };

  //   const toggleFilter = () => {
  //     setShowFilter(!showFilter);
  //   };

  const toggleAddNew = () => {
    setOpenAddNew(!openAddNew);
  };

  return (
    <>
      <div className="bg-white rounded">
        <div className="bg-white">
          <div className="py-3">
            <DataTable
              columnDefs={[
                ...productsColumns,
                // {
                //   field: "actions",
                //   cellRenderer: BtnCellRenderer,
                //   width: 150,
                // },
              ]}
              rowData={productsTableData}
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
      </div>
    </>
  );
}
