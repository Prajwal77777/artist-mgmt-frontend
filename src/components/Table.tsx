import React, { useState } from "react";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  SortingState,
  ColumnDef,
} from "@tanstack/react-table";
import "bootstrap/dist/css/bootstrap.min.css";

interface TableData {
  [key: string]: any;
}

type TableColumn<T extends TableData> = ColumnDef<T>;

const Table: React.FC<{
  data: TableData[];
  columns: TableColumn<TableData>[];
}> = ({ data, columns }) => {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [filtering, setFiltering] = useState("");

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      globalFilter: filtering,
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setFiltering,
  });

  return (
    <div className="container mt-4">
      <input
        type="text"
        className="form-control-sm"
        placeholder="Search..."
        value={filtering}
        onChange={(e) => setFiltering(e.target.value)}
      />
      <table className="table table-striped table-hover">
        <thead className="thead-dark">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  onClick={header.column.getToggleSortingHandler()}
                  style={{ cursor: "pointer" }}
                >
                  {header.isPlaceholder ? null : (
                    <div className="d-flex align-items-center">
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                      {header.column.getIsSorted() &&
                        (header.column.getIsSorted() === "asc" ? (
                          <span className="ml-2">&#9650;</span>
                        ) : (
                          <span className="ml-2">&#9660;</span>
                        ))}
                    </div>
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="d-flex justify-content-between align-items-center">
        <button
          className="btn btn-primary"
          onClick={() => table.setPageIndex(0)}
        >
          First page
        </button>
        <button
          className="btn btn-secondary"
          disabled={!table.getCanPreviousPage()}
          onClick={() => table.previousPage()}
        >
          Previous page
        </button>
        <span>
          Page{" "}
          <strong>
            {table.getState().pagination.pageIndex + 1} of{" "}
            {table.getPageCount()}
          </strong>
        </span>
        <button
          className="btn btn-secondary"
          disabled={!table.getCanNextPage()}
          onClick={() => table.nextPage()}
        >
          Next page
        </button>
        <button
          className="btn btn-primary"
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
        >
          Last page
        </button>
      </div>
    </div>
  );
};

export default Table;
