import React, { FC, ReactElement } from "react";
import { FiltersIcon } from "../../assets";
import CustomButton from "../Button/CustomButton";
import styles from "./FiltersButton.module.scss";

interface Props {
  // isOpen?: boolean;
  onClick?: () => void | any;
}
const FiltersButton: FC<Props> = ({ onClick }) => {
  return (
    <>
      {/* {isOpen && ( */}
      <button className="bg-white pt-2 gap-2 d-flex text-secondary">
        <div>
          <FiltersIcon />
        </div>
        <div>
          <CustomButton text="Filters" />
        </div>
      </button>
      {/* )} */}
    </>
  );
};

export default FiltersButton;
