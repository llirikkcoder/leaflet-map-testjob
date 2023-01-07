import React from "react";
import { useTable } from "react-table";
import ColumnsConfig from "./ColumnsConfig";
import "./deliveryTable.css";
import { useSelector } from 'react-redux';

function DeliveryTable() {
  const { data } = useSelector(({ delivery }) => delivery)

  const { selectedRouteIndex } = useSelector((store) => store.switch);

  const columns = ColumnsConfig()

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <table {...getTableProps()} className='table'>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr
            {...headerGroup.getHeaderGroupProps()}
            className='header-table'
          >
            {headerGroup.headers.map((column) => (
              <th className='table' {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr
              {...row.getRowProps()}
              className={row.index === selectedRouteIndex ? "selected" : ""}
            >
              {row.cells.map((cell) => {
                return (
                  <td
                    {...cell.getCellProps()}
                    className='table-data'
                  >
                    {cell.render("Cell")}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default DeliveryTable;
