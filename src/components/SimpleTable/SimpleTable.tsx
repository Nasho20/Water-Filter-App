// react imports
import React from "react";

// project imports
import PageTitle from "../Typography/PageTitle";
import styles from "./SimpleTable.module.scss";

interface Props {
  tableTitle?: any;
  tableItems: any[];
  tableColumns: any[];
  actionColumn: boolean;
}

export default function SimpleTable({
  tableTitle,
  tableItems,
  tableColumns,
  actionColumn,
}: Props) {
  const datePattern = /^(\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{6}Z)$/;

  return (
    <div className={styles.tableContainer}>
      <PageTitle title={tableTitle} size={20} />
      <div className={`${styles.tableItems} mt-2`}>
        <table className={`table table-hover ${styles.simpleTable}`}>
          {tableItems?.length > 1 ? (
            <>
              <thead className={`bg-primary ${styles.headSimpleTable}`}>
                <tr className={styles.borderBottom}>
                  {tableColumns.map((item) => (
                    <th key={item?.id} className={styles.headSimpleTable}>
                      {item.label?.charAt(0).toUpperCase() +
                        item.label?.slice(1)}
                    </th>
                  ))}
                  {actionColumn && (
                    <th className={styles.actionsSimpleTable}>Actions</th>
                  )}
                </tr>
              </thead>
              <tbody>
                {tableItems.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {tableColumns.map((column, columnIndex) => (
                      <td className={styles.td} key={columnIndex}>
                        <>
                          {datePattern.test(row[column.key]) == true ? (
                            <>{row[column.key]?.substring(0, 10)}</>
                          ) : (
                            <>{row[column.key]}</>
                          )}
                        </>
                      </td>
                    ))}
                    {actionColumn && (
                      <td>
                        <div className={styles.actionsSimpleTableBody}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="#3E6A8E"
                            className="bi bi-eye-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                            <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                          </svg>
                        </div>
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </>
          ) : (
            <p className="text-center mt-2">{"no_data_display"}</p>
          )}
        </table>
      </div>
    </div>
  );
}
