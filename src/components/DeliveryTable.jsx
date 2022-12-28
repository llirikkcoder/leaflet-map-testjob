import React from "react";
import { useTable } from "react-table";

function DeliveryTable(props) {
  const { data } = props;

  // const data = React.useMemo(
  //   () => [
  //     {
  //       startPoint: {
  //         lat: 51.505,
  //         lng: -1.02,
  //       },
  //       endPoint: {
  //         lat: 54.505,
  //         lng: -0.08,
  //       },
  //     },
  //     {
  //       col1: 'react-table',
  //       col2: 'rocks',
  //     },
  //     {
  //       col1: 'whatever',
  //       col2: 'you want',
  //     },
  //   ],
  //   []
  // )

  const columns = React.useMemo(
    () => [
      {
        Header: "Start Point Latitude",
        accessor: "startPoint.lat",
      },
      {
        Header: "Start Point Longitude",
        accessor: "startPoint.lng",
      },
      {
        Header: "End Point Latitude",
        accessor: "endPoint.lat",
      },
      {
        Header: "End Point Longitude",
        accessor: "endPoint.lng",
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
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return (
                  <td
                    {...cell.getCellProps()}
                    style={{
                      padding: "10px",
                      border: "solid 1px gray",
                      background: "papayawhip",
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