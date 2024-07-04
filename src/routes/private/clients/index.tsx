import React, { useState, useEffect } from "react";
import FiltersButton from "../../../components/FiltersButton/FiltersButton";
import DatePickerButton from "../../../components/DatePickerButton/DatePickerButton";
import DataTable from "../../../components/DataTable/DataTable";
import AddNewButton from "../../../components/AddNewButton/AddNewButton";
import ClientsFilters from "./components/ClientsFilters/ClientsFilters";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import styles from "./Clients.module.scss";
import GeneralLoader from "../../../components/Loader/GeneralLoader";
import { useGetClientsQuery } from "../../../store/api/clientsApi";

const clientsColumns = [
  { field: "id", headerName: "ID" },
  { field: "name", headerName: "NAME" },
  { field: "organization", headerName: "ORGANIZATION" },
  { field: "location", headerName: "LOCATION" },
  { field: "orderId", headerName: "ORDER ID" },
  { field: "installed", headerName: "INSTALLED" },
  { field: "contact", headerName: "contact" },
];

const clientsTableData = [
  {
    id: 1,
    name: "Filter",
    organization: "30",
    location: "$150",
    orderId: "Tirane",
    installed: "John Doe",
    contact: "John Doe",
  },
  {
    id: 1,
    name: "Filter",
    organization: "30",
    location: "$150",
    orderId: "Tirane",
    installed: "John Doe",
    contact: "John Doe",
  },
  {
    id: 1,
    name: "Filter",
    organization: "30",
    location: "$150",
    orderId: "Tirane",
    installed: "John Doe",
    contact: "John Doe",
  },
  {
    id: 1,
    name: "Filter",
    organization: "30",
    location: "$150",
    orderId: "Tirane",
    installed: "John Doe",
    contact: "John Doe",
  },
];

export default function Clients() {
  const [showFilter, setShowFilter] = useState(false);
  const [filteredData, setFilteredData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedPage, setSelectedPage] = useState<number>(1);
  const [selectedPageSize, setSelectedPageSize] = useState<number>(20);
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setLoading(false);
    };

    fetchData();
  }, []);

  const { data, isLoading, isError, error, refetch } = useGetClientsQuery(
    { page: selectedPage, pageSize: selectedPageSize, query: searchQuery },
    {
      refetchOnMountOrArgChange: true,
      refetchOnReconnect: true,
    }
  );

  const handleFilter = (filters: { [key: string]: string }) => {
    // const filteredResults = results;
    // setFilteredData(filteredResults);
    console.log(filters);
  };

  const toggleFilter = () => {
    setShowFilter(!showFilter);
  };

  if (loading) {
    return (
      <div className="mt-5 pt-5">
        <GeneralLoader
          title={
            <>
              <p id="loading">Loading Clients</p>
            </>
          }
          body={<p id="please_wait_clients">Please wait for clients</p>}
        />
        ;
      </div>
    );
  }

  return (
    <div className="dash-body">
      <div className="bg-white rounded">
        <div className="px-3">
          <div className="bg-white pt-4 flex justify-content-between">
            <div>
              <h5>In Progress 540</h5>
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
                <Dropdown align="end" focusFirstItemOnShow={true}>
                  <Dropdown.Toggle
                    id="custom-dropdown"
                    style={{ backgroundColor: "#003f5c" }}
                    className={`custom-dropdown-toggle ${styles.dropdownToggle}`}
                  >
                    ADD NEW
                  </Dropdown.Toggle>

                  <Dropdown.Menu className={`p-2 ${styles.dropdownMenu}`}>
                    <Dropdown.Item className={styles.dropdownItem}>
                      <Link
                        to="/admin/clients/singleClient"
                        style={{
                          textDecoration: "none",
                          color: "#FFF",
                        }}
                        className={styles.dropdownLink}
                      >
                        SINGLE PRODUCT
                      </Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link
                        to="/admin/clients/uploadCSVClients"
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
        </div>
        <div className="py-3">
          <DataTable
            columnDefs={[
              ...clientsColumns,
              // {
              //   field: "actions",
              //   cellRenderer: BtnCellRenderer,
              //   width: 150,
              // },
            ]}
            rowData={data?.data ?? []}
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
      <ClientsFilters
        isOpen={showFilter}
        maxWidth={800}
        closePopup={toggleFilter}
      />
    </div>
  );
}
