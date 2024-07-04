import React from "react";
import styles from "./AddNewSingleProduct.module.scss";
import { UploadImage } from "../../../../../../assets";

export default function AddNewSingleProduct() {
  return (
    <div className="dash-body">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
          <h4 className="fw-bold m-2">ITEM</h4>
          <div className="d-flex flex-column">
            <div className="bg-white p-4 m-2 rounded d-flex flex-column">
              <span className="d-flex justify-content-center">
                <button className={`w-75 p-4 ${styles.uploadImageBtn}`}>
                  <UploadImage />
                </button>
              </span>
              <span className="d-flex justify-content-center pt-4">
                <button className="btn text-primary">ADD PRODUCT PHOTO</button>
              </span>
            </div>
            <div>
              <div className="p-4 bg-white m-2 rounded">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <p className="fw-bold">CATEGORY</p>
                    <label className="w-100">
                      <select className="form-select p-2 rounded border w-100">
                        <option>OUTSIDE FILTER</option>
                      </select>
                    </label>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <p className="fw-bold">REG. DATE</p>
                    <label className="w-100">
                      <select className="form-select p-2 rounded border w-100">
                        <option>15.03.2023</option>
                      </select>
                    </label>
                  </div>
                </div>
                <div className="row pt-4">
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <p className="fw-bold">PRODUCT</p>
                    <label className="w-100">
                      <select className="form-select p-2 rounded border w-100">
                        <option>FILTER 503</option>
                      </select>
                    </label>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <p className="fw-bold">REGISTRATION PERSON</p>
                    <label className="w-100">
                      <select className="form-select p-2 rounded border w-100">
                        <option>John Doe</option>
                      </select>
                    </label>
                  </div>
                </div>
              </div>
              {/* <div className="d-flex"></div> */}
            </div>
            <div className="p-4 bg-white rounded m-2">
              <div className="d-flex flex-column">
                <p>CURRENT STOCK QUANTITY</p>
                <input
                  type="text"
                  placeholder="0"
                  className=" p-2 rounded border"
                />
                <p className="pt-2">
                  System will automatically notify you and pre-fill the reorder
                  quantity set for future orders.
                </p>
              </div>
              <div className="d-flex flex-column">
                <span>
                  <p>LOW STOCK LEVEL</p>
                </span>
                <input
                  type="text"
                  placeholder="15"
                  className="rounded border  p-2"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 p-2">
          <h4 className="fw-bold m-2">INFO</h4>
          <div className="rounded bg-white m-2 p-4">
            <p className="fw-bold">NAME</p>
            <input
              type="text"
              placeholder="Filter 503"
              className="rounded border w-100 p-2"
            />
            <p className="fw-bold pt-2">ID</p>
            <input
              type="text"
              placeholder="65351205"
              className="rounded border w-100 p-2"
            />
            <div className="row pt-4">
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
                <p className="fw-bold">QTY</p>
                <input
                  type="text"
                  placeholder="20"
                  className="rounded border w-100 p-2"
                />
              </span>
            </div>
            <span className="d-flex flex-column pt-4">
              <p className="fw-bold">BARCODE</p>
              <input
                type="text"
                placeholder="1135198"
                className="rounded border p-2"
              />
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
