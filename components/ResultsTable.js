import {
  Table,
  TableCell,
  TableHead,
  TableRow,
  TablePagination,
  TableSortLabel,
} from "@mui/material";
import React, { useState } from "react";
import styles from "../styles/ResultsTable.module.css";
import { rowsPerPageOptions } from "../constants/siteContent";

export default function ResultsTable(records, headers, filterFn, filterInput) {
  // state
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(rowsPerPageOptions[page]);
  const [order, setOrder] = useState();
  const [orderBy, setOrderBy] = useState();

  // helpers
  const TableContainer = (props) => (
    <Table stickyHeader className={styles.tableContainer}>
      {props.children}
    </Table>
  );
  const TableHeader = (props) => {
    const handleSortRequest = (cellId) => {
      const isAsc = orderBy === cellId && order === "asc";
      setOrder(isAsc ? "desc" : "asc");
      setOrderBy(cellId);
    };
    return (
      <TableHead>
        <TableRow>
          {headers.map((header) => (
            <TableCell
              key={header.id}
              sortDirection={orderBy === header.id ? order : false}
            >
              {header.disableSorting ? (
                header.label
              ) : (
                <TableSortLabel
                  active={orderBy === header.id}
                  direction={orderBy === header.id ? order : "asc"}
                  onClick={() => {
                    handleSortRequest(header.id);
                  }}
                >
                  {header.label}
                </TableSortLabel>
              )}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    );
  };
  const TablePages = (props) => (
    <TablePagination
      component="div"
      page={page}
      rowsPerPageOptions={rowsPerPageOptions}
      rowsPerPage={rowsPerPage}
      count={filterFn.fn(records).length}
      onPageChange={handleChangePage}
      onRowsPerPageChange={handleChangeRowsPerPage}
      className={styles[props.scrollStyle]}
    />
  );
  function objectSort(array, comparisonType) {
    const indexedArray = array.map((record, index) => [record, index]);
    indexedArray.sort((a, b) => {
      const order = comparisonType(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });
    return indexedArray.map((record) => record[0]);
  }

  function getComparisonType(order, orderBy) {
    return order === "desc"
      ? (a, b) => descendingComparison(a, b, orderBy)
      : (a, b) => -descendingComparison(a, b, orderBy);
  }

  function descendingComparison(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] < a[orderBy]) {
      return 1;
    }
    return 0;
  }

  const recordsAfterPagingSorting = (scrollStyle) => {
    const sliceStyle =
      scrollStyle === "pagination"
        ? [page * rowsPerPage, (page + 1) * rowsPerPage]
        : "";
    console.log(sliceStyle);
    return objectSort(
      filterFn.fn(records),
      getComparisonType(order, orderBy)
    ).slice(...sliceStyle);
  };

  // handlers
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return {
    TableContainer,
    TableHeader,
    TablePages,
    recordsAfterPagingSorting,
  };
}
