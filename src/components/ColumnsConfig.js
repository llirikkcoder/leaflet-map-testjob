import { useMemo } from 'react';

export default function ColumnsConfig(setSelectedRouteIndex) {
  return useMemo(() => [
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
  ], []);
}
