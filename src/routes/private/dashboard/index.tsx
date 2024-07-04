import React, { useState, useEffect } from "react";
import styles from "./Dashboard.module.scss";
// icons
import {
  TotalShipmentsIcon,
  OrderIconNew,
  RevenueIcon,
  TotalClientsIcon,
  PersonIcon,
} from "../../../assets";
import SimpleTable from "../../../components/SimpleTable/SimpleTable";
import GeneralLoader from "../../../components/Loader/GeneralLoader";

const cardData = [
  {
    title: "TOTAL SHIPMENTS",
    value: "165",
    icon: <TotalShipmentsIcon color="#265B8B" />,
  },
  {
    title: "PENDING ORDERS",
    value: "15",
    icon: <OrderIconNew color="#265B8B" />,
  },
  {
    title: "REVENUE",
    value: "$50,000",
    icon: <RevenueIcon color="#265B8B" />,
  },
  {
    title: "TOTAL CLIENTS",
    value: "1250",
    icon: <TotalClientsIcon color="#265B8B" />,
  },
];

const recentLoginTableColumns = [
  { key: "id", label: "ID" },
  { key: "name", label: "NAME" },
  { key: "date", label: "DATE" },
  { key: "city", label: "CITY" },
  { key: "price", label: "PRICE" },
  { key: "salesRep", label: "SALES REP" },
  { key: "barcode", label: "BARCODE" },
];

const latestOrdersTable = [
  {
    id: 1,
    name: "Filter",
    date: "01/01/2022",
    city: "Tirane",
    price: "$150",
    salesRep: "John Doe",
    barcode: "12345",
  },
  {
    id: 1,
    name: "Filter",
    date: "01/01/2022",
    city: "Tirane",
    price: "$150",
    salesRep: "John Doe",
    barcode: "12345",
  },
  {
    id: 1,
    name: "Filter",
    date: "01/01/2022",
    city: "Tirane",
    price: "$150",
    salesRep: "John Doe",
    barcode: "12345",
  },
  {
    id: 1,
    name: "Filter",
    date: "01/01/2022",
    city: "Tirane",
    price: "$150",
    salesRep: "John Doe",
    barcode: "12345",
  },
];

const warehouseActivityColumns = [
  { key: "id", label: "ID" },
  { key: "manager", label: "MANAGER" },
  { key: "status", label: "STATUS" },
  { key: "activity", label: "ACTIVITY" },
  { key: "orderId", label: "ORDER ID" },
  { key: "salesRep", label: "SALES REP" },
];

const warehouseActivityTable = [
  {
    id: 1,
    manager: "John Doe",
    status: "Active",
    activity: "En Route",
    orderId: "56430",
    salesRep: "John Doe",
  },
  {
    id: 1,
    manager: "John Doe",
    status: "Active",
    activity: "En Route",
    orderId: "56430",
    salesRep: "John Doe",
  },
  {
    id: 1,
    manager: "John Doe",
    status: "Active",
    activity: "En Route",
    orderId: "56430",
    salesRep: "John Doe",
  },
  {
    id: 1,
    manager: "John Doe",
    status: "Active",
    activity: "En Route",
    orderId: "56430",
    salesRep: "John Doe",
  },
];

export default function Dashboard() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="mt-5 pt-5">
        <GeneralLoader
          title={
            <>
              <p id="loading">Loading Dashboard</p>
            </>
          }
          body={<p id="please_wait_dashboard">Please wait for dashboard</p>}
        />
      </div>
    );
  }

  return (
    <>
      <div className="dash-body">
        <div className="row">
          {cardData?.map((card: any, index: number) => (
            <div
              className={`col-lg-3 col-md-6 col-sm-12 pb-3 ${styles.cards} ${
                index === 0 ? styles.firstCard : ""
              }`}
            >
              <div className="d-flex justify-content-around container rounded shadow-sm bg-white pt-3 px-4 text-nowrap">
                <div>
                  <h5 className={`fw-semibold ${styles.card__title}`}>
                    {card.title}
                  </h5>
                  <div className="d-flex justify-content-between">
                    <h3 className={`${styles.cardValue} me-3 fw-bold`}>
                      {card.value}
                    </h3>
                  </div>
                </div>
                <div
                  className={`d-flex text-center justify-content-center rounded ${styles.iconBackground}`}
                >
                  <div
                    className={`d-flex align-items-center ${styles.cardIcon}`}
                  >
                    {card.icon}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-white rounded">
          <div className="row pt-4 px-4">
            <div className="col-lg-7 col-md-7 col-sm-12 col-xs-12">
              <div>
                <h4 className="ps-4 fw-bold">CLIENT ACTIVITY</h4>
                <hr />
                <div className="d-flex text-secondary">
                  <div className="ps-4">
                    <div className="d-flex gap-4 pb-2">
                      <img src={PersonIcon} alt="" height={17} />
                      <h5>5</h5>
                    </div>
                    <p>New clients (this week)</p>
                  </div>
                  <div className="ps-4">
                    <div className="d-flex gap-4 pb-2">
                      <img src={PersonIcon} alt="" height={17} />
                      <h5>5</h5>
                    </div>
                    <p>New clients (this month)</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md- col-sm-12 col-xs-12">
              <div>
                <h4 className="ps-4 fw-bold">STAFF OVERVIEW</h4>
                <hr />
                <div className="d-flex text-secondary justify-content-between">
                  <div className="ps-4">
                    <div className="d-flex gap-4 pb-2">
                      <img src={PersonIcon} alt="" height={17} />
                      <h5>5</h5>
                    </div>
                    <p>Total Staff</p>
                  </div>
                  <div className="ps-4 d-flex flex-column pe-5">
                    <div className="d-flex gap-4 pb-2">
                      <img src={PersonIcon} alt="" height={17} />
                      <h5>5</h5>
                    </div>
                    <p>New staff (this month)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-5">
            <h4 className="ps-4 fw-bold">LATEST ORDERS</h4>
            <hr className="mx-4" />
            <div className=" bg-white">
              <div className="rounded-0 p-4">
                <SimpleTable
                  // tableTitle={"Stock History"}
                  tableColumns={recentLoginTableColumns}
                  tableItems={latestOrdersTable}
                  actionColumn={false}
                />
              </div>
            </div>
          </div>
          <div className="pt-4">
            <h4 className="ps-4 fw-bold">WAREHOUSE ACTIVITY</h4>
            <hr className="mx-4" />
            <div className=" bg-white">
              <div className="rounded shadow-sm p-4">
                <SimpleTable
                  // tableTitle={"Stock History"}
                  tableColumns={warehouseActivityColumns}
                  tableItems={warehouseActivityTable}
                  actionColumn={false}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
