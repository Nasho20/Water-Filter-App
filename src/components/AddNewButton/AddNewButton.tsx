import React from "react";
import CustomButton from "../Button/CustomButton";
import styles from "./AddNewButton.module.scss";

export default function AddNewButton() {
  return (
    <div>
      <button className={`px-3 py-2 rounded text-white ${styles.bgButton}`}>
        ADD NEW
      </button>
    </div>
  );
}
