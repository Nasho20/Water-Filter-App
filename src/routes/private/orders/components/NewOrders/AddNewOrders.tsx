import React from "react";
import styles from "./AddNewOrders.module.scss";
import { InfoIcon } from "../../../../../assets";

export default function AddNewOrders() {
  return (
    <div className="dash-body">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
          <h4 className="fw-bold m-2 d-flex">NEW ORDER</h4>
          <div className="d-flex flex-column">
            <div className="bg-white p-4 m-2 rounded d-flex flex-column">
              <div className="d-flex flex-column">
                <p>CLIENT</p>
                <span className="d-flex">
                  <label className="w-100">
                    <select className="form-select p-2 rounded border w-100">
                      <option>Choose Client</option>
                    </select>
                  </label>
                  <button className="btn text-primary w-25">New Client</button>
                </span>
              </div>
              <div className="d-flex flex-column pt-4">
                <span>
                  <p>ID</p>
                </span>
                <input
                  type="text"
                  placeholder="236654203"
                  className="rounded border p-2"
                />
              </div>
            </div>
            <div>
              <div className="p-4 bg-white m-2 rounded">
                <div className="d-flex flex-column">
                  <p className="fw-bold">PRODUCT DETAILS</p>
                  <label className="w-100">
                    <select className="form-select p-2 rounded border w-100">
                      <option>Product Category</option>
                    </select>
                  </label>
                </div>
                <div className="d-flex flex-column pt-4">
                  <p className="fw-bold">CHOOSE PRODUCT</p>
                  <label className="w-100">
                    <select className="form-select p-2 rounded border w-100">
                      <option>Choose Product</option>
                    </select>
                  </label>
                </div>
              </div>
            </div>
            <div className="p-4 bg-white m-2 rounded">
              <div className="d-flex flex-column">
                <p className="fw-bold">LOCATION</p>
                <label className="w-100">
                  <select className="form-select p-2 rounded border w-100">
                    <option>Choose Location</option>
                  </select>
                </label>
              </div>
              <div className="d-flex flex-column pt-4">
                <p className="fw-bold">TECHNICIAN</p>
                <label className="w-100">
                  <select className="form-select p-2 rounded border w-100">
                    <option>John Doe</option>
                  </select>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pt-5">
          <div className="rounded row bg-white m-2 p-4">
            <span className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <p className="fw-bold">PRICE IN</p>
              <input
                type="text"
                placeholder="$140"
                className="rounded border w-100 p-2"
              />
            </span>
            <span className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <p className="fw-bold">PRICE OUT</p>
              <input
                type="text"
                placeholder="$140"
                className="rounded border w-100 p-2"
              />
            </span>
            <div className="d-flex justify-content-between pt-4">
              <span className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pe-3">
                <p className="fw-bold">QTY</p>
                <input
                  type="text"
                  placeholder="20"
                  className="rounded border w-100 p-2"
                />
              </span>
              <span className="col-lg-6 col-md-6 col-sm-12 col-xs-12 ps-3">
                <p className="fw-bold">WARRANTY</p>
                <label className="w-100">
                  <select className="form-select p-2 rounded border w-100">
                    <option>F06</option>
                  </select>
                </label>
              </span>
            </div>
          </div>
          <div className="p-4 bg-white m-2 rounded">
            <div>
              <span className="d-flex flex-column ">
                <p className="fw-bold">VALUE</p>
                <input
                  type="text"
                  placeholder="$145"
                  className="rounded border p-2"
                />
              </span>
            </div>
            <div className="d-flex justify-content-between pt-4">
              <span className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pe-3">
                <p className="fw-bold">WAREHOUSE</p>
                <label className="w-100">
                  <select className="form-select p-2 rounded border w-100">
                    <option>F06</option>
                  </select>
                </label>
              </span>
              <span className="col-lg-6 col-md-6 col-sm-12 col-xs-12 ps-3">
                <p className="fw-bold">BARCODE</p>
                <input
                  type="text"
                  placeholder="6512035492"
                  className="rounded border w-100 p-2"
                />
              </span>
            </div>
          </div>
          <div className="rounded row bg-white m-2 p-4 d-flex">
            <span className="d-flex gap-2">
              <InfoIcon color="#E98E24" />
              <p>THIS ITEM IS NOT ON STOCK FOR THE MOMENT</p>
            </span>
          </div>
        </div>
      </div>
      <div className="d-flex gap-4 justify-content-end">
        <div>
          <button className={`fw-bold p-3 px-5 rounded ${styles.resetButton}`}>
            RESET
          </button>
        </div>
        <button
          className={`fw-bold p-2 px-4 rounded text-white ${styles.applyFilterButton}`}
        >
          APPLY FILTER
        </button>
      </div>
    </div>
  );
}
