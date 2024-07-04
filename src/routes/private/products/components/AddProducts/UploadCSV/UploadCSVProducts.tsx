import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import styles from "./UploadCSVProducts.module.scss";
import { CloudUpload } from "../../../../../../assets";

interface UploadCSVProductsProps {
  onFileUpload: (data: string[][]) => void;
}

const UploadCSVProducts: React.FC<UploadCSVProductsProps> = ({
  onFileUpload,
}) => {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const reader = new FileReader();

      reader.onload = (event) => {
        if (event.target) {
          const result = event.target.result as string;
          // Parse CSV data
          const parsedData = parseCSV(result);
          onFileUpload(parsedData);
        }
      };

      // Read the first accepted file (you can modify this logic if you support multiple files)
      reader.readAsText(acceptedFiles[0]);
    },
    [onFileUpload]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const parseCSV = (csvData: string): string[][] => {
    // Implement your CSV parsing logic here
    // This is a simple example assuming that the CSV has rows and columns
    const rows = csvData.split("\n").map((row) => row.split(","));
    return rows;
  };
  return (
    <div className="dash-body p-5 mt-5">
      <div className="d-flex align-items-center justify-content-center vh-75 pt-5 mt-5">
        <div className="bg-white rounded container shadow-sm">
          <div className="p-5">
            <div
              {...getRootProps()}
              className={`dropzone ${isDragActive ? "active" : ""}`}
            >
              <div className="p-3">
                <div className="d-flex flex-column">
                  <p className="d-flex justify-content-center">
                    Please upload your file
                  </p>
                  <p className="d-flex justify-content-center">
                    Select relevant documents to complete your kyc
                  </p>
                </div>
                <div
                  className={`${styles.uploadIconContainer} rounded p-4 d-flex flex-column`}
                >
                  <span className="d-flex justify-content-center p-4">
                    <CloudUpload />
                  </span>
                  <span className="d-flex justify-content-center">
                    <p>Select a file or drag and drop here</p>
                  </span>
                  <span className="d-flex justify-content-center">
                    <p>JPG, PNG or PDF file size no more than 10MB</p>
                  </span>
                  <span className="d-flex justify-content-center pb-4">
                    <input {...getInputProps()} accept=".csv" />
                    <button className="text-primary p-2 bg-white border border-primary rounded w-25">
                      SELECT FILE
                    </button>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadCSVProducts;
