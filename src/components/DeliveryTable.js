import React from "react";
import { useTable } from "react-table";

function DeliveryTable({ data, selectedRouteIndex, setSelectedRouteIndex }) {
  const columns = React.useMemo(
    () => [
      { Header: "Номер заявки", Cell: ({ row }) => `№${row.index + 1}` },
      { Header: "Координаты OT lat", accessor: "startPoint.lat" },
      { Header: "Координаты OT lng", accessor: "startPoint.lng" },
      { Header: "Координаты ДО lat", accessor: "endPoint.lat" },
      { Header: "Координаты ДО lng", accessor: "endPoint.lng" },
      {
        Header: "Выбор",
        Cell: ({ row }) => (
          <button
            onClick={() => setSelectedRouteIndex(row.index)}
          >
            {" "}
            Выбрать{" "}
          </button>
        ),
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <table {...getTableProps()} style={{ border: "solid 1px blue" }}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr
            {...headerGroup.getHeaderGroupProps()}
            style={{
              borderBottom: "solid 3px red",
              background: "aliceblue",
              color: "black",
              fontWeight: "bold",
            }}
          >
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
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
              style={
                row.index === selectedRouteIndex
                  ? { "background-color": "lightgreen" }
                  : {}
              }
            >
              {row.cells.map((cell) => {
                return (
                  <td
                    {...cell.getCellProps()}
                    style={{
                      padding: "10px",
                      border: "solid 1px gray",
                    }}
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
