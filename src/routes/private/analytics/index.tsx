import React, { useState, useEffect } from "react";
import styles from "./Analytics.module.scss";
import GeneralLoader from "../../../components/Loader/GeneralLoader";
import Charts from "react-apexcharts";
import SimpleTable from "../../../components/SimpleTable/SimpleTable";
import { ApexOptions } from "apexcharts";
import { PlusIcon, TotalClientsIcon } from "../../../assets";

export default function Analytics() {
  const [clickedAnalytic, setClickedAnalytic] = useState("allAnalytics");
  const [loading, setLoading] = useState(true);

  const orderByNrOptions: ApexOptions = {
    series: [
      {
        name: "series1",
        data: [30, 32, 45, 62, 100, 80, 90],
      },
    ],
    chart: {
      height: 350,
      type: "area",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      type: "datetime",
      categories: [
        "2018-09-19T00:00:00.000Z",
        "2018-09-19T01:30:00.000Z",
        "2018-09-19T02:30:00.000Z",
        "2018-09-19T03:30:00.000Z",
        "2018-09-19T04:30:00.000Z",
        "2018-09-19T05:30:00.000Z",
        "2018-09-19T06:30:00.000Z",
      ],
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
  };

  const mostSoldProdsColumns = [
    { key: "id", label: "ID" },
    { key: "name", label: "NAME" },
    { key: "numberOfOrders", label: "NR. OF ORDERS" },
    { key: "price", label: "PRICE" },
    { key: "value", label: "VALUE" },
  ];

  const mostSoldProdsItems = [
    {
      id: 1,
      name: "Filter",
      numberOfOrders: "189",
      price: "$150",
      value: "$56.260",
    },
    {
      id: 1,
      name: "Filter",
      numberOfOrders: "189",
      price: "$150",
      value: "$56.260",
    },
    {
      id: 1,
      name: "Filter",
      numberOfOrders: "189",
      price: "$150",
      value: "$56.260",
    },
    {
      id: 1,
      name: "Filter",
      numberOfOrders: "189",
      price: "$150",
      value: "$56.260",
    },
  ];

  const ordersByLocationOptions: ApexOptions = {
    series: [44, 55, 41, 17, 15],
    chart: {
      type: "donut",
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "end",
          },
        },
      },
    ],
  };

  const cardData = [
    {
      title: "NEW CLIENTS",
      value: "120",
      icon: <PlusIcon color="#265B8B" />,
    },
    {
      title: "TOTAL CLIENTS",
      value: "120",
      icon: <TotalClientsIcon color="#265B8B" />,
    },
  ];

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
              <p id="loading">Loading Analytics</p>
            </>
          }
          body={<p id="please_wait_analytics">Please wait for analytics</p>}
        />
      </div>
    );
  }

  const handleClickedTab = (tab: any) => {
    setClickedAnalytic(tab);
  };

  return (
    <>
      <div className="dash-body">
        <div className="bg-white rounded">
          <div className="row p-4">
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 d-flex gap-4">
              <div className={`${styles.tableBtnRenderer} rounded`}>
                <button
                  className={`px-5 py-2 border rounded ${
                    clickedAnalytic === "allAnalytics"
                      ? styles.clickedButton
                      : "bg-white"
                  }`}
                  onClick={() => handleClickedTab("allAnalytics")}
                >
                  All
                </button>
              </div>
              <div className={`${styles.tableBtnRenderer} rounded`}>
                <button
                  className={`px-4 py-2 border rounded ${
                    clickedAnalytic === "warehouseAnalytics"
                      ? styles.clickedButton
                      : "bg-white"
                  }`}
                  onClick={() => handleClickedTab("warehouseAnalytics")}
                >
                  Warehouse
                </button>
              </div>
              <div className={`${styles.tableBtnRenderer} rounded`}>
                <button
                  className={`px-4 py-2 border rounded ${
                    clickedAnalytic === "fleetAnalytics"
                      ? styles.clickedButton
                      : "bg-white"
                  }`}
                  onClick={() => handleClickedTab("fleetAnalytics")}
                >
                  Fleet
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pt-4">
            <div className="bg-white rounded p-4">
              <h4>ORDER BY NUMBER</h4>
              <Charts
                options={orderByNrOptions}
                series={orderByNrOptions.series}
                type="line"
                height={450}
              />
            </div>
            <div className="bg-white rounded mt-4">
              <div className="p-4">
                <div
                  className="rounded-0 shadow-sm p-4 bg-white"
                  style={{ height: "99%" }}
                >
                  <SimpleTable
                    tableTitle="MOST SOLD PRODUCTS"
                    tableColumns={mostSoldProdsColumns}
                    tableItems={mostSoldProdsItems}
                    actionColumn={false}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 p-4">
            <div className="bg-white rounded p-4">
              <h4>ORDER BY LOCATION</h4>
              <Charts
                options={ordersByLocationOptions}
                series={ordersByLocationOptions.series}
                type="donut"
                height={460}
              />
            </div>
            <div>
              <div className="d-flex justify-content-between pt-4">
                {cardData?.map((card: any, index: number) => (
                  <div
                    className={`pb-3 ${styles.cards} ${
                      index === 0 ? styles.firstCard : ""
                    }`}
                  >
                    <div className="d-flex justify-content-around container rounded shadow-sm bg-white pt-3 px-4 text-nowrap gap-5">
                      <div className="d-flex flex-column">
                        <h5 className={`fw-semibold text-secondary`}>
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
              <div>
                <div className="bg-white rounded p-4">
                  <h4>REVENUE</h4>
                  <Charts
                    options={orderByNrOptions}
                    series={orderByNrOptions.series}
                    type="line"
                    height={210}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
