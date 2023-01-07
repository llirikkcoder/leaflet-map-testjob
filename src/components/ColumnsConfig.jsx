import { useMemo, useDispatch } from 'react';
import { selectRoute } from "../actions";

export default function ColumnsConfig(setSelectedRouteIndex) {

  // const dispatch = useDispatch();
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
          // onClick={() => {
          //   const { startPoint, endPoint } = row.original;
          //   const coords = `${startPoint.lng},${startPoint.lat};${endPoint.lng},${endPoint.lat}`;
          //   dispatch(selectRoute(coords));
          // }}
        >
          {" "}
          Выбрать{" "}
        </button>
      ),
    },
  ], []);
}
