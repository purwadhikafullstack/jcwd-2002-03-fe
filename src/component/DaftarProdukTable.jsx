import {
  Table,
  TableContainer,
  Tbody,
  Tr,
  Th,
  Td,
  Thead,
} from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/react";
import React, { useMemo } from "react";
import { useTable, usePagination } from "react-table";

const DaftarProdukTable = ({ columns, data, isLoading }) => {
  const columnData = useMemo(() => columns, [columns]);
  const rowData = useMemo(() => data, [data]);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      {
        columns: columnData,
        data: rowData,
        manualPagination: true,
      },
      usePagination
    );

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <TableContainer border="2px" borderRadius="2xl">
            <Table
              size="md"
              bgColor="blackAlpha.100"
              fontSize="14px"
              variant="striped"
              colorScheme="blue"
              color="black"
              fontWeight="medium"
              {...getTableProps()}
            >
              <Thead>
                {headerGroups.map((headerGroup) => (
                  <Tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column) => (
                      <Th
                        textAlign="center"
                        {...column.getHeaderProps()}
                        isNumeric={column.isNumeric}
                      >
                        {column.render("Header")}
                      </Th>
                    ))}
                  </Tr>
                ))}
              </Thead>
              <Tbody {...getTableBodyProps()}>
                {rows.map((row, i) => {
                  prepareRow(row);
                  return (
                    <Tr {...row.getRowProps()}>
                      {row.cells.map((cell) => {
                        return (
                          <Td textAlign="center" {...cell.getCellProps()}>
                            {cell.render("Cell")}
                          </Td>
                        );
                      })}
                    </Tr>
                  );
                })}
              </Tbody>
            </Table>
          </TableContainer>
        </>
      )}
    </>
  );
};

export default DaftarProdukTable;
