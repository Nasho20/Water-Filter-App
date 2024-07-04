import React from "react";
import FiltersButton from "../FiltersButton/FiltersButton";
import AddNewButton from "../AddNewButton/AddNewButton";

export default function TableButtons() {
  return (
    <div>
      <div className="d-flex">
        <FiltersButton />
        <AddNewButton />
      </div>
    </div>
  );
}
