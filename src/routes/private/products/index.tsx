import React, { useState, useEffect } from "react";
import styles from "./Products.module.scss";
import ColumnsButton from "../../../components/ColumnsButton/ColumnsButton";
import FiltersButton from "../../../components/FiltersButton/FiltersButton";
import DatePickerButton from "../../../components/DatePickerButton/DatePickerButton";
import ProductsFilters from "./components/ProductsFilters/ProductsFilters";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import AllProducts from "./components/AllProducts/AllProducts";
import ReturnedProducts from "./components/ReturnedProducts";
import GeneralLoader from "../../../components/Loader/GeneralLoader";

export default function Products() {
  const [clickedProducts, setClickedProducts] = useState("allProducts");
  const [showFilter, setShowFilter] = useState(false);
  const [filteredData, setFilteredData] = useState<any[]>([]);
  const [openAddNew, setOpenAddNew] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setLoading(false);
    };

    fetchData();
  }, []);

  const handleFilter = (filters: { [key: string]: string }) => {
    // const filteredResults = results;
    // setFilteredData(filteredResults);
    console.log(filters);
  };

  const toggleFilter = () => {
    setShowFilter(!showFilter);
  };

  const handleClickedTab = (tab: any) => {
    setClickedProducts(tab);
  };

  const toggleAddNew = () => {
    setOpenAddNew(!openAddNew);
  };

  if (loading) {
    return (
      <div className="mt-5 pt-5">
        <GeneralLoader
          title={
            <>
              <p id="loading">Loading Products</p>
            </>
          }
          body={<p id="please_wait_products">Please wait for products</p>}
        />
      </div>
    );
  }

  return (
    <>
      <div className="dash-body">
        <div className="bg-white rounded">
          <div className="px-3">
            <div className="row bg-white rounded pt-2 ">
              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 d-flex gap-4">
                <div className={`${styles.tableBtnRenderer} rounded`}>
                  <button
                    className={`px-5 py-2 border rounded ${
                      clickedProducts === "allProducts"
                        ? styles.clickedButton
                        : "bg-white"
                    }`}
                    onClick={() => handleClickedTab("allProducts")}
                  >
                    All
                  </button>
                </div>
                <div className={`${styles.tableBtnRenderer} rounded`}>
                  <button
                    className={`px-4 py-2 border rounded ${
                      clickedProducts === "returnedProducts"
                        ? styles.clickedButton
                        : "bg-white"
                    }`}
                    onClick={() => handleClickedTab("returnedProducts")}
                  >
                    Returned
                  </button>
                </div>
              </div>
              {clickedProducts === "allProducts" && (
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                  <div className="d-flex justify-content-between bg-white gap-3">
                    <ColumnsButton />
                    <div>
                      <button onClick={toggleFilter}>
                        <FiltersButton />
                      </button>
                    </div>
                    <DatePickerButton />
                    <div>
                      <Dropdown align="end" focusFirstItemOnShow={true}>
                        <Dropdown.Toggle
                          id="custom-dropdown"
                          // style={{ backgroundColor: "#003f5c" }}
                          className={`custom-dropdown-toggle ${styles.dropdownToggle}`}
                        >
                          ADD NEW
                        </Dropdown.Toggle>
                        <Dropdown.Menu className={`p-2 ${styles.dropdownMenu}`}>
                          <Dropdown.Item className={styles.dropdownItem}>
                            <Link
                              to="/admin/products/singleProduct"
                              style={{
                                textDecoration: "none",
                                color: "#FFF",
                              }}
                            >
                              SINGLE PRODUCT
                            </Link>
                          </Dropdown.Item>
                          <Dropdown.Item>
                            <Link
                              to="/admin/products/uploadCSVProducts"
                              style={{ textDecoration: "none", color: "#FFF" }}
                            >
                              UPLOAD CSV
                            </Link>
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </div>
                </div>
              )}
              {clickedProducts === "returnedProducts" && (
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                  <div className="d-flex justify-content-between bg-white gap-3">
                    <ColumnsButton />
                    <div>
                      <button onClick={toggleFilter}>
                        <FiltersButton />
                      </button>
                    </div>
                    <DatePickerButton />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <ProductsFilters
          isOpen={showFilter}
          maxWidth={800}
          closePopup={toggleFilter}
        />
        <div>
          {clickedProducts === "allProducts" && <AllProducts />}
          {clickedProducts === "returnedProducts" && <ReturnedProducts />}
        </div>
      </div>
    </>
  );
}
