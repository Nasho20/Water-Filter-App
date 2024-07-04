import React, { FC } from "react";
import { EyeIcon } from "../../assets";
import CustomButton from "../Button/CustomButton";

interface Props {
  onClick?: () => void;
}
const ColumnsButton: FC<Props> = ({ onClick }) => {
  return (
    <button className="bg-white pt-2 gap-2 d-flex text-secondary">
      <div>
        <EyeIcon />
      </div>
      <div>
        <CustomButton text="Columns" />
      </div>
    </button>
  );
};

export default ColumnsButton;
