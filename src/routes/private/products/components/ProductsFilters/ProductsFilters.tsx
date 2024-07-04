import React, { useState } from "react";
import styles from "./ProductsFilters.module.scss";
import CustomButton from "../../../../../components/Button/CustomButton";

interface Props {
  isOpen: boolean;
  closePopup: () => void;
  maxWidth: number;
}

export default function ProductsFilters({
  isOpen = false,
  closePopup,
  maxWidth,
}: Props) {
  return (
    <div className="d-flex flex-column-reverse align-items-end pe-5">
      {isOpen && (
        <div
          className={`d-flex shadow-sm bg-white p-3 ${styles.filtersPopup}`}
          style={{ maxWidth: `${maxWidth}px`, top: 160, right: 530 }}
        >
          <div>
            <form>
              <div className="row">
                <div className="col-lg-6 col-md-6 d-grid">
                  <label className="py-4">PRICE FROM</label>
                  <input
                    type="text"
                    name="priceFrom"
                    placeholder="$140"
                    className="rounded border-1 p-2"
                  />
                </div>
                <div className="col-lg-6 col-md-6 d-grid">
                  <label className="py-4">PRICE TO</label>
                  <input
                    type="text"
                    name="priceTo"
                    placeholder="$140"
                    className="rounded border-1 p-2"
                  />
                </div>
                <div className="col-lg-6 col-md-6 d-grid">
                  <label className="py-4">QTY FROM</label>
                  <input
                    type="text"
                    name="quantityFrom"
                    placeholder="20"
                    className="rounded border-1 p-2"
                  />
                </div>
                <div className="col-lg-6 col-md-6 d-grid">
                  <label className="py-4">QTY TO</label>
                  <input
                    type="text"
                    name="quantityTo"
                    placeholder="40"
                    className="rounded border-1 p-2"
                  />
                  {/* {errors.phone && <p>{errors.phone.message}</p>} */}
                </div>
                <div
                  className={`col-lg-6 col-md-6 d-grid pt-4 ${styles.optionSelect}`}
                >
                  <p>DATE FROM</p>
                  <select className="rounded p-2">
                    <option value="13.03.2023">13.03.2023</option>
                  </select>
                  {/* {errors.phone && <p>{errors.phone.message}</p>} */}
                </div>
                <div
                  className={`col-lg-6 col-md-6 d-grid pt-4 ${styles.optionSelect}`}
                >
                  <p>DATE TO</p>
                  <select className="rounded p-2">
                    <option value="15.03.2023">15.03.2023</option>
                  </select>
                  {/* {errors.phone && <p>{errors.phone.message}</p>} */}
                </div>
                <div
                  className={`col-lg-12 col-md-12 d-grid pt-4 ${styles.optionSelect}`}
                >
                  <p>WAREHOUSE</p>
                  <select className="rounded p-2">
                    <option value="F06">F06</option>
                    <option value="F07">F07</option>
                    <option value="F08">F08</option>
                  </select>
                  {/* {errors.phone && <p>{errors.phone.message}</p>} */}
                </div>
                <div
                  className={`col-lg-12 col-md-12 d-grid pt-4 ${styles.optionSelect}`}
                >
                  <p>PERSON</p>
                  <select className="rounded p-2">
                    <option value="John Doe">John Doe</option>
                  </select>
                  {/* {errors.phone && <p>{errors.phone.message}</p>} */}
                </div>
                <div className="col-lg-12 col-md-12 pt-4 d-flex justify-content-end">
                  <div className="d-flex gap-4">
                    <div>
                      <button
                        // mode="danger"
                        // text="CREATE TICKET"
                        // extraClass="full-width"
                        // onClick={handleNewRoom}
                        className={`fw-bold bg-white p-3 px-5 rounded ${styles.resetButton}`}
                        onClick={closePopup}
                      >
                        CANCEL
                      </button>
                    </div>
                    <button
                      className={`fw-bold p-2 px-4 rounded text-white ${styles.applyFilterButton}`}
                    >
                      SAVE
                    </button>
                  </div>
                </div>
                {/* {errors.phone && <p>{errors.phone.message}</p>} */}
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
