import { useState, useMemo, useRef, useCallback, useEffect } from "react";
import "./DataTable.scss";
import {
  SortAscendingSvg,
  SortDescending,
  first,
  previous,
  next,
  last,
  sortUnSort,
} from "./SortSvgs";
import { SearchIcon } from "../../assets";
import GeneralLoader from "../Loader/GeneralLoader";
import GeneralError from "../Error/GeneralError";
import Modal from "../Modal";
import { AgGridReact } from "ag-grid-react";
import {
  ColDef,
  FirstDataRenderedEvent,
  ICellRendererParams,
} from "ag-grid-community";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

// import { i18n } from "@lingui/core";
// import { Trans } from "@lingui/macro";

/**
 * Shared component to return a data table.
 * @returns A Data Table with a toolbar actions and pagination.
 * In the component where will be used the table should pass these props:
 * columnDef -> specify the columns to be shown in the table,
 * rowData -> data that will populate the table,
 * showActionToolbar = {true} -> should set to true to show the Actions toolbar,
 * actionList = the array with all actions
 * csvFileName ->  the name of the export file,
 * rowSelection = {'multiple' | 'single} -> the type of roe selection
 * includeTotalFooter = boolean if the total footer should be displayed
 * multiSelect = if the table will be multi select or single select
 */

interface Props {
  columnDefs: ColDef[];
  rowData: any[];
  csvFileName: string;
  actionList?: any[];
  rowSelection?: "single" | "multiple";
  cellClicked?: any;
  pagination?: boolean;
  pageSize?: number;
  page?: number;
  onPageChange?: any;
  includeTotalFooter?: boolean;
  multiSelect?: boolean;
  [x: string]: unknown;
  onGetRowData?: any;
  selectedRows?: any;
  selectRow?: any;
  hasBackground?: boolean;
  removeSearch?: boolean;
  rowHeight?: number;
  filterTable: (query: string) => void;
}

export default function DataTable({
  columnDefs,
  rowData,
  rowSelection,
  cellClicked,
  pagination = true,
  pageSize,
  page,
  onPageChange,
  includeTotalFooter,
  onGetRowData,
  multiSelect,
  selectedRows,
  csvFileName,
  selectRow,
  showActionToolbar,
  actionList,
  hasBackground,
  removeSearch,
  rowHeight,
  filterTable,
  ...rest
}: Props) {
  const [selectedRowCount, setSelectedRowCount] = useState<number>(0);
  const [loadTable, setLoadTable] = useState<boolean>(false);
  const [queryString, setQueryString] = useState<string>("");
  const [selectedPageSize, setSelectedPageSize] = useState<number>(
    pageSize ?? 20
  );
  const [selectedPage, setSelectedPage] = useState<number>(page ?? 1);

  const [searchMode, setSearchMode] = useState<boolean>(false);

  const gridRef = useRef<AgGridReact>(null);

  const applyQuickFilter = (input: string) => {
    filterTable(input);
  };

  const toggleLoadBox = () => setLoadTable(!loadTable);

  const gridStyle = useMemo(
    () => ({ height: "100%", width: "100%", fontFamily: "Gilroy" }),
    []
  );

  const defaultColDef = useMemo(
    () => ({
      resizable: false,
    }),
    []
  );

  const onFirstDataRendered = useCallback((params: FirstDataRenderedEvent) => {
    gridRef.current!.api.sizeColumnsToFit();
  }, []);

  const cellClickedListener = useCallback((event: any) => {
    if (
      event.colDef.field != "quickAdd" &&
      event.colDef.field != "modify" &&
      event.colDef.field != "actions"
    ) {
      return cellClicked && cellClicked(event.data);
    }
  }, []);

  const getRowData = useCallback((event: any) => {
    return onGetRowData && onGetRowData(event);
  }, []);

  const onSelectionChanged = (params: any) => {
    const selectedRows = params?.api?.getSelectedRows();
    setSelectedRowCount(selectedRows.length);
  };

  /** PAGINATION METHODS START**/

  const onPaginationChanged = (pagenumber: any) => {
    if (onPageChange) {
      // condition to be removed
      setLoadTable(true);
      switch (pagenumber) {
        case "prev":
          onPageChange(selectedPage - 1, selectedPageSize);
          setSelectedPage(selectedPage - 1);
          break;
        case "next":
          onPageChange(selectedPage + 1, selectedPageSize);
          setSelectedPage(selectedPage + 1);
          break;
        default:
          onPageChange(pagenumber, selectedPageSize);
          setSelectedPage(pagenumber);
          break;
      }
      onPageChange(pagenumber, selectedPageSize);
      setLoadTable(false);
    }
  };

  const onPageSizeChange = (event: any) => {
    const newPageSize = Number(event.target.value);
    setSelectedPageSize(newPageSize);
    // condition to be removed
    if (onPageChange) onPageChange(selectedPage, newPageSize);
  };

  /** PAGINATION METHODS END**/

  const icons = useMemo(() => {
    return {
      sortAscending: SortAscendingSvg,
      sortDescending: SortDescending,
      first: first,
      previous: previous,
      next: next,
      last: last,
      sortUnSort: sortUnSort,
    };
  }, []);

  return (
    <div style={{ width: "100%", height: "100% " }}>
      {/* 
        If needed will be added back
      {showActionToolbar && (
        <ActionsToolBar
          data={rowData ?? []}
          hasDelete={hasDelete}
          hasBackground={hasBackground}
          headers={csvHeaders}
          csvFilename={csvFileName}
        />
      )} */}

      {!removeSearch && (
        <div className="row d-flex justify-content-end mb-3">
          <div
            className="col-md-6 col-lg-5 col-xl-4 col-sm-6 col-xs-12
          flex"
          >
            <input
              type="text"
              placeholder="Search entire table"
              className="form-control"
              onChange={(e) => {
                setSearchMode(true);
                if (e?.target?.value == "") {
                  applyQuickFilter("");
                } else {
                  setQueryString(e.target.value);
                }
              }}
              onKeyDown={(e: any) => {
                if (e.key == "Enter") {
                  applyQuickFilter(queryString);
                }
              }}
            />
            <button
              className="btn btn-outline-light p-1 ps-2 pe-2"
              onClick={() => applyQuickFilter(queryString)}
            >
              <SearchIcon color={"var(--dark-text)"} width={20} height={20} />
            </button>
          </div>
        </div>
      )}

      {rowData?.length > 0 ? (
        <div id="myGrid" className="ag-theme-alpine" style={gridStyle}>
          <AgGridReact
            domLayout="autoHeight"
            rowHeight={rowHeight ?? 50}
            icons={icons}
            ref={gridRef}
            rowData={rowData ?? []}
            columnDefs={rowData?.length > 0 ? columnDefs : []}
            defaultColDef={defaultColDef}
            animateRows={true}
            rowSelection={rowSelection}
            onCellClicked={cellClickedListener}
            fullWidthCellRenderer={true}
            suppressRowClickSelection={true}
            onFirstDataRendered={onFirstDataRendered}
            pagination={false}
            groupIncludeTotalFooter={includeTotalFooter ? true : false}
            rowMultiSelectWithClick={multiSelect ? true : false}
            onSelectionChanged={onSelectionChanged}
            onRowSelected={getRowData}
            {...rest}
          />
        </div>
      ) : (
        <>
          <div className="mt-3 text-center shadow-sm p-5">
            <br />
            <span className="fs-18 text-body-secondary">
              No data to display
            </span>
          </div>
        </>
      )}

      <div className="row d-flex pt-2 mt-0 ms-1 pagination_footer">
        <div className="col-4 pt-1 flex align-items-baseline">
          <label className="fs-14">Page Size: </label>
          <select
            value={pageSize}
            onChange={onPageSizeChange}
            className="form-select ms-1 me-1 select_page"
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
          </select>
          <span className="fs-14"> of {rowData?.length} items</span>
        </div>
        <div className="col-8">
          <nav aria-label="Page navigation example" className="float-end">
            <ul className="pagination mb-2">
              <li
                className="page-item"
                onClick={() => {
                  onPaginationChanged("prev");
                }}
              >
                <span className="page-link" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </span>
              </li>
              <li
                className="page-item"
                onClick={() => {
                  onPaginationChanged(1);
                }}
              >
                <span className="page-link">1</span>
              </li>
              <li
                className="page-item"
                onClick={() => {
                  onPaginationChanged(2);
                }}
              >
                <span className="page-link">2</span>
              </li>
              <li className="page-item">
                <span className="page-link">...</span>
              </li>
              <li
                className="page-item"
                onClick={() => {
                  onPaginationChanged(13);
                }}
              >
                <span className="page-link">13</span>
              </li>
              <li
                className="page-item"
                onClick={() => {
                  onPaginationChanged("next");
                }}
              >
                <span className="page-link" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </span>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <Modal
        title=""
        isOpen={loadTable}
        closeForm={toggleLoadBox}
        children={<GeneralLoader />}
      />
    </div>
  );
}
