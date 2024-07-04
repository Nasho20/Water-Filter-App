import React from "react";
import styles from "./SingleClient.module.scss";

export default function SingleClient() {
  return (
    <div className="dash-body">
      <div
        className={`${styles.clientInputs} bg-white rounded p-5 d-flex flex-column`}
      >
        <div className="d-flex pt-4 justify-content-around">
          <div className="d-flex gap-4">
            <span className="pe-5">
              <p>CLIENT NAME</p>
              <input
                type="text"
                placeholder="John Doe"
                className=" p-2 rounded border"
              />
            </span>
            <span className="px-5">
              <p>CLIENT ID</p>
              <input
                type="text"
                placeholder="C503"
                className=" p-2 rounded border"
              />
            </span>
            <span className="ps-5">
              <p>EMAIL</p>
              <input
                type="text"
                placeholder="johndoe@gmail.com"
                className=" p-2 rounded border"
              />
            </span>
          </div>
        </div>
        <div className="d-flex pt-4 justify-content-around">
          <div className="d-flex gap-4">
            <span className="pe-5">
              <p>PHONE</p>
              <input
                type="text"
                placeholder="+3556900000000"
                className=" p-2 rounded border"
              />
            </span>
            <span className="px-5">
              <p>LOCATION 1</p>
              <input
                type="text"
                placeholder="LOCATION 1"
                className=" p-2 rounded border"
              />
            </span>
            <span className="ps-5">
              <p>LOCATION 2</p>
              <input
                type="text"
                placeholder="LOCATION 2"
                className=" p-2 rounded border"
              />
            </span>
          </div>
        </div>
      </div>
      <div className={`${styles.clientNotes} pt-4`}>
        <label className="d-flex flex-column p-5 bg-white rounded">
          NOTES:
          <textarea
            name="postContent"
            rows={4}
            cols={40}
            placeholder="Lorem Ipsum"
            className="mt-4 p-2"
          />
        </label>
      </div>
      <div
        className={`${styles.singleClientBtns} d-flex gap-4 justify-content-end pt-4`}
      >
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
