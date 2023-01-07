import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { switchSlice } from '../stores/slices';

const { setSelectedRouteIndex } = switchSlice.actions;

export default function ColumnsConfig() {
  const dispatch = useDispatch();

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
          onClick={() => dispatch(setSelectedRouteIndex(row.index))}
        >
          {" "}
          Выбрать{" "}
        </button>
      ),
    },
  ], [dispatch]);
}
