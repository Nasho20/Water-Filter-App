// react imports
import React from 'react';

// project imports
import styles from './DataTable.module.scss';

// 3rd party
// import { CSVLink } from "react-csv";
// import { i18n } from "@lingui/core";
// import { Trans } from "@lingui/macro"


interface TableActionBarProps {
    data: Array<any>;
    headers: Array<any>;
    csvFilename: string;
    hasDelete: boolean;
    hasBackground?: boolean
}

const ActionsToolBar: React.FC<TableActionBarProps> = ({
    data,
    headers,
    csvFilename,
    hasDelete,
    hasBackground
}) => {
    return (
        <div className={styles.tableToolbarActions}>
            {hasDelete && (
                <button className={styles.exportActionButton} style={{ background: hasBackground ? 'white' : '#f9f9fb' }}>
                     Delete
                    <span className={styles.icon}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                        </svg>
                    </span>
                </button>
            )}
            <button className={styles.exportActionButton} style={{ background: hasBackground ? 'white' : '#f9f9fb' }}>
                Filter
                <span className={styles.icon}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-funnel" viewBox="0 0 16 16">
                        <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2h-11z" />
                    </svg>
                </span>
            </button>
            {/* <CSVLink
                className={styles.exportActionButton}
                data={data}
                headers={headers}
                filename={csvFilename}
                style={{ background: hasBackground ? 'white' : '#f9f9fb' }}
            >
                <Trans id='export'>Export</Trans>
                <span className={styles.icon}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-download" viewBox="0 0 16 16">
                        <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                        <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                    </svg></span>
            </CSVLink> */}
        </div>
    );
};
export default ActionsToolBar;
