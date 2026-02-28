"use client"

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getFilteredRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { useState } from "react"

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {

  const [columnFilters, setColumnFilters] = useState([])
  const [globalFilter, setGlobalFilter] = useState("")

  const table = useReactTable({
    data,
    columns,
    state: {
      columnFilters,
      globalFilter,
    },
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  })

  return (
    <div className="space-y-4">

      {/* 🔎 Global Search */}
      <input
        placeholder="Search all..."
        value={globalFilter ?? ""}
        onChange={(e) => setGlobalFilter(e.target.value)}
        className="border px-3 py-2 rounded w-full"
      />

      <div className="rounded-md border">
        <table className="w-full border-collapse">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id} className="border-b px-4 py-2 text-left">
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}

                    {/* 🔍 Column Search */}
                    {header.column.getCanFilter() && (
                      <input
                        value={(header.column.getFilterValue() ?? "") as string}
                        onChange={(e) =>
                          header.column.setFilterValue(e.target.value)
                        }
                        placeholder="Search..."
                        className="mt-2 w-full border px-2 py-1 text-sm rounded"
                      />
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
                  <td key={cell.id} className="border-b px-4 py-2">
                    {flexRender(
                      cell.column.columnDef.cell,
                      cell.getContext()
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 📄 Pagination */}
      <div className="flex items-center justify-between">

        <div className="space-x-2">
          <button
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            className="border px-3 py-1 rounded"
          >
            Prev
          </button>

          <button
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            className="border px-3 py-1 rounded"
          >
            Next
          </button>
        </div>

        <span>
          Page{" "}
          <strong>
            {table.getState().pagination.pageIndex + 1} of{" "}
            {table.getPageCount()}
          </strong>
        </span>

      </div>
    </div>
  )
}