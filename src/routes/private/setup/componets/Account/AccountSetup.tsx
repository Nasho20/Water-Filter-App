import React from "react";
import { ProfilePicture } from "../../../../../assets";
import styles from "./AccountSetup.module.scss";

export default function AccountSetup() {
  return (
    <div className="ps-2">
      <div className="mt-4 p-4 bg-white rounded">
        <p className="border-bottom">GENERAL INFO</p>
        <div className="d-flex justify-content-between">
          <span>
            <p>FIRST NAME</p>
            <input
              type="text"
              placeholder="John"
              className=" p-2 rounded border"
            />
          </span>
          <span>
            <p>LAST NAME</p>
            <input
              type="text"
              placeholder="John"
              className=" p-2 rounded border"
            />
          </span>
          <span>
            <p>E-MAIL</p>
            <input
              type="text"
              placeholder="john.doe@outlook.com"
              className=" p-2 rounded border"
            />
          </span>
          <span className="d-flex flex-direction-row gap-2 pt-2">
            <img
              src={ProfilePicture}
              width={40}
              height={40}
              className="rounded-circle"
            />
            <span className="d-flex flex-column pe-4 text-nowrap">
              <p>PROFILE PICTURE</p>
              <span className="d-flex gap-2">
                <button className={`${styles.profileBtns} bg-white`}>
                  Edit
                </button>
                <button className="bg-white">Delete</button>
              </span>
            </span>
          </span>
          <span className="pt-2">
            <button className={`p-2 ${styles.accountBtns}`}>
              SAVE CHANGES
            </button>
          </span>
        </div>
      </div>
      <div className="mt-4 p-4 bg-white rounded">
        <p className="border-bottom">CHANGE PASSWORD</p>
        <div className="d-flex gap-4">
          <span>
            <p>OLD PASSWORD</p>
            <input
              type="text"
              placeholder="********"
              className=" p-2 rounded border"
            />
          </span>
          <span>
            <p>NEW PASSWORD</p>
            <input
              type="text"
              placeholder="********"
              className=" p-2 rounded border"
            />
          </span>
          <span className="pt-4 d-flex align-items-end">
            <button className={`p-2 ${styles.accountBtns}`}>
              CHANGE PASSWORD
            </button>
          </span>
        </div>
      </div>
    </div>
  );
}
