import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  HStack,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Select,
  Table,
  TableContainer,
  Text,
  Tbody,
  Tr,
  Th,
  Td,
  chakra,
  Thead,
  Tooltip,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  IconButton,
} from "@chakra-ui/react";
import {
  ArrowRightIcon,
  ArrowLeftIcon,
  ChevronRightIcon,
  ChevronLeftIcon,
} from "@chakra-ui/icons";
import AdminSideBar from "component/AdminSideBar";
import { FiSearch, FiDownload } from "react-icons/fi";
import React from "react";
import { useTable, useSortBy, usePagination } from "react-table";
import { TriangleDownIcon, TriangleUpIcon } from "@chakra-ui/icons";

const AdminDaftarProduk = () => {
  const data = React.useMemo(
    () => [
      {
        no: "1",
        NamaObat: "Adem Sari",
        noObat: "A000321",
        noBPOM: "B000521",
        kategori: "Obat Bebas",
        stok: 20,
        satuan: "Botol",
        nilaiBarang: `Rp. ${(30000).toLocaleString()}`,
        nilaiJual: `Rp. ${(40000).toLocaleString()}`,
        lihatDetail: (
          <Button colorScheme="teal" fontSize="12px" size="sm">
            Lihat Detail
          </Button>
        ),
      },
      {
        no: "2",
        NamaObat: "Vit C",
        noObat: "A000322",
        noBPOM: "B000522",
        kategori: "Obat Bebas",
        stok: 25,
        satuan: "Box",
        nilaiBarang: `Rp. ${(35000).toLocaleString()}`,
        nilaiJual: `Rp. ${(45000).toLocaleString()}`,
        lihatDetail: (
          <Button colorScheme="teal" fontSize="12px" size="sm">
            Lihat Detail
          </Button>
        ),
      },
      {
        no: "3",
        NamaObat: "Bodrex",
        noObat: "A000323",
        noBPOM: "B000522",
        kategori: "Obat Bebas",
        stok: 22,
        satuan: "Strip",
        nilaiBarang: `Rp. ${(40000).toLocaleString()}`,
        nilaiJual: `Rp. ${(50000).toLocaleString()}`,
        lihatDetail: (
          <Button colorScheme="teal" fontSize="12px" size="sm">
            Lihat Detail
          </Button>
        ),
      },
      {
        no: "4",
        NamaObat: "Panadol",
        noObat: "A000324",
        noBPOM: "B000523",
        kategori: "Obat Bebas",
        stok: 29,
        satuan: "Strip",
        nilaiBarang: `Rp. ${(20000).toLocaleString()}`,
        nilaiJual: `Rp. ${(30000).toLocaleString()}`,
        lihatDetail: (
          <Button colorScheme="teal" fontSize="12px" size="sm">
            Lihat Detail
          </Button>
        ),
      },
      {
        no: "5",
        NamaObat: "Actived",
        noObat: "A000325",
        noBPOM: "B000524",
        kategori: "Obat Bebas",
        stok: 10,
        satuan: "Botol",
        nilaiBarang: `Rp. ${(33000).toLocaleString()}`,
        nilaiJual: `Rp. ${(44000).toLocaleString()}`,
        lihatDetail: (
          <Button colorScheme="teal" fontSize="12px" size="sm">
            Lihat Detail
          </Button>
        ),
      },
      {
        no: "6",
        NamaObat: "Actived",
        noObat: "A000325",
        noBPOM: "B000524",
        kategori: "Obat Bebas",
        stok: 10,
        satuan: "Botol",
        nilaiBarang: `Rp. ${(33000).toLocaleString()}`,
        nilaiJual: `Rp. ${(44000).toLocaleString()}`,
        lihatDetail: (
          <Button colorScheme="teal" fontSize="12px" size="sm">
            Lihat Detail
          </Button>
        ),
      },
      {
        no: "7",
        NamaObat: "Adem Sari",
        noObat: "A000321",
        noBPOM: "B000521",
        kategori: "Obat Bebas",
        stok: 20,
        satuan: "Botol",
        nilaiBarang: `Rp. ${(30000).toLocaleString()}`,
        nilaiJual: `Rp. ${(40000).toLocaleString()}`,
        lihatDetail: (
          <Button colorScheme="teal" fontSize="12px" size="sm">
            Lihat Detail
          </Button>
        ),
      },
      {
        no: "8",
        NamaObat: "Vit C",
        noObat: "A000322",
        noBPOM: "B000522",
        kategori: "Obat Bebas",
        stok: 25,
        satuan: "Box",
        nilaiBarang: `Rp. ${(35000).toLocaleString()}`,
        nilaiJual: `Rp. ${(45000).toLocaleString()}`,
        lihatDetail: (
          <Button colorScheme="teal" fontSize="12px" size="sm">
            Lihat Detail
          </Button>
        ),
      },
      {
        no: "9",
        NamaObat: "Bodrex",
        noObat: "A000323",
        noBPOM: "B000522",
        kategori: "Obat Bebas",
        stok: 22,
        satuan: "Strip",
        nilaiBarang: `Rp. ${(40000).toLocaleString()}`,
        nilaiJual: `Rp. ${(50000).toLocaleString()}`,
        lihatDetail: (
          <Button colorScheme="teal" fontSize="12px" size="sm">
            Lihat Detail
          </Button>
        ),
      },
      {
        no: "10",
        NamaObat: "Panadol",
        noObat: "A000324",
        noBPOM: "B000523",
        kategori: "Obat Bebas",
        stok: 29,
        satuan: "Strip",
        nilaiBarang: `Rp. ${(20000).toLocaleString()}`,
        nilaiJual: `Rp. ${(30000).toLocaleString()}`,
        lihatDetail: (
          <Button colorScheme="teal" fontSize="12px" size="sm">
            Lihat Detail
          </Button>
        ),
      },
      {
        no: "11",
        NamaObat: "Adem Sari",
        noObat: "A000321",
        noBPOM: "B000521",
        kategori: "Obat Bebas",
        stok: 20,
        satuan: "Botol",
        nilaiBarang: `Rp. ${(30000).toLocaleString()}`,
        nilaiJual: `Rp. ${(40000).toLocaleString()}`,
        lihatDetail: (
          <Button colorScheme="teal" fontSize="12px" size="sm">
            Lihat Detail
          </Button>
        ),
      },
      {
        no: "12",
        NamaObat: "Vit C",
        noObat: "A000322",
        noBPOM: "B000522",
        kategori: "Obat Bebas",
        stok: 25,
        satuan: "Box",
        nilaiBarang: `Rp. ${(35000).toLocaleString()}`,
        nilaiJual: `Rp. ${(45000).toLocaleString()}`,
        lihatDetail: (
          <Button colorScheme="teal" fontSize="12px" size="sm">
            Lihat Detail
          </Button>
        ),
      },
      {
        no: "13",
        NamaObat: "Bodrex",
        noObat: "A000323",
        noBPOM: "B000522",
        kategori: "Obat Bebas",
        stok: 22,
        satuan: "Strip",
        nilaiBarang: `Rp. ${(40000).toLocaleString()}`,
        nilaiJual: `Rp. ${(50000).toLocaleString()}`,
        lihatDetail: (
          <Button colorScheme="teal" fontSize="12px" size="sm">
            Lihat Detail
          </Button>
        ),
      },
      {
        no: "14",
        NamaObat: "Panadol",
        noObat: "A000324",
        noBPOM: "B000523",
        kategori: "Obat Bebas",
        stok: 29,
        satuan: "Strip",
        nilaiBarang: `Rp. ${(20000).toLocaleString()}`,
        nilaiJual: `Rp. ${(30000).toLocaleString()}`,
        lihatDetail: (
          <Button colorScheme="teal" fontSize="12px" size="sm">
            Lihat Detail
          </Button>
        ),
      },
      {
        no: "15",
        NamaObat: "Actived",
        noObat: "A000325",
        noBPOM: "B000524",
        kategori: "Obat Bebas",
        stok: 10,
        satuan: "Botol",
        nilaiBarang: `Rp. ${(33000).toLocaleString()}`,
        nilaiJual: `Rp. ${(44000).toLocaleString()}`,
        lihatDetail: (
          <Button colorScheme="teal" fontSize="12px" size="sm">
            Lihat Detail
          </Button>
        ),
      },
      {
        no: "16",
        NamaObat: "Actived",
        noObat: "A000325",
        noBPOM: "B000524",
        kategori: "Obat Bebas",
        stok: 10,
        satuan: "Botol",
        nilaiBarang: `Rp. ${(33000).toLocaleString()}`,
        nilaiJual: `Rp. ${(44000).toLocaleString()}`,
        lihatDetail: (
          <Button colorScheme="teal" fontSize="12px" size="sm">
            Lihat Detail
          </Button>
        ),
      },
      {
        no: "17",
        NamaObat: "Adem Sari",
        noObat: "A000321",
        noBPOM: "B000521",
        kategori: "Obat Bebas",
        stok: 20,
        satuan: "Botol",
        nilaiBarang: `Rp. ${(30000).toLocaleString()}`,
        nilaiJual: `Rp. ${(40000).toLocaleString()}`,
        lihatDetail: (
          <Button colorScheme="teal" fontSize="12px" size="sm">
            Lihat Detail
          </Button>
        ),
      },
      {
        no: "18",
        NamaObat: "Vit C",
        noObat: "A000322",
        noBPOM: "B000522",
        kategori: "Obat Bebas",
        stok: 25,
        satuan: "Box",
        nilaiBarang: `Rp. ${(35000).toLocaleString()}`,
        nilaiJual: `Rp. ${(45000).toLocaleString()}`,
        lihatDetail: (
          <Button colorScheme="teal" fontSize="12px" size="sm">
            Lihat Detail
          </Button>
        ),
      },
      {
        no: "19",
        NamaObat: "Bodrex",
        noObat: "A000323",
        noBPOM: "B000522",
        kategori: "Obat Bebas",
        stok: 22,
        satuan: "Strip",
        nilaiBarang: `Rp. ${(40000).toLocaleString()}`,
        nilaiJual: `Rp. ${(50000).toLocaleString()}`,
        lihatDetail: (
          <Button colorScheme="teal" fontSize="12px" size="sm">
            Lihat Detail
          </Button>
        ),
      },
      {
        no: "20",
        NamaObat: "Panadol",
        noObat: "A000324",
        noBPOM: "B000523",
        kategori: "Obat Bebas",
        stok: 29,
        satuan: "Strip",
        nilaiBarang: `Rp. ${(20000).toLocaleString()}`,
        nilaiJual: `Rp. ${(30000).toLocaleString()}`,
        lihatDetail: (
          <Button colorScheme="teal" fontSize="12px" size="sm">
            Lihat Detail
          </Button>
        ),
      },
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      {
        Header: "No",
        accessor: "no",
      },
      {
        Header: "Nama Obat",
        accessor: "NamaObat",
      },
      {
        Header: "No. Obat",
        accessor: "noObat",
      },
      {
        Header: "No. BPOM",
        accessor: "noBPOM",
      },
      {
        Header: "Kategori",
        accessor: "kategori",
      },
      {
        Header: "Stok",
        accessor: "stok",
      },
      {
        Header: "Satuan",
        accessor: "satuan",
      },
      {
        Header: "Nilai Barang",
        accessor: "nilaiBarang",
      },
      {
        Header: "Nilai Jual",
        accessor: "nilaiJual",
      },
      {
        Header: "Lihat Detail",
        accessor: "lihatDetail",
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    { columns, data, initialState: { pageIndex: 0 } },
    useSortBy,
    usePagination
  );

  return (
    <>
      <AdminSideBar />
      <Box bg="linear-gradient(155.7deg, #D6F5F3 -45.88%, #F7FCFC 45.77%, #F1F5FC 117.72%)" color="white" ml="64" pb="32px">
        <Text
          color="#213360"
          fontWeight="bold"
          fontSize="20px"
          pl="48px"
          pt="32px"
        >
          Daftar Obat
        </Text>

        <Center
          flexDirection="column"
          mr="48px"
          ml="48px"
          mt="38px"
          bg="white"
        >
          <Flex minW="full" justify="space-between">
            <HStack ml="32px" spacing="16px">
              <InputGroup
                color="black"
                borderRadius="full"
                bg="white"
                mt="32px"
                mb="32px"
                w="full"
              >
                <Input placeholder="Cari nama obat" />
                <InputRightElement>
                  <Button bg="transparent">
                    <Icon color="black" as={FiSearch} />
                  </Button>
                </InputRightElement>
              </InputGroup>
              <InputGroup>
                <Select
                  fontSize="14px"
                  w="156px"
                  bg="white"
                  color="black"
                  placeholder="Semua Obat"
                >
                  <option value="option1">Obat Bebas</option>
                  <option value="option2">Obat Racik</option>
                  <option value="option3">Obat Resep</option>
                </Select>
              </InputGroup>
            </HStack>
            <Button
              fontSize="12px"
              p="5"
              leftIcon={<FiDownload size="20" />}
              mr="32px"
              colorScheme="teal"
              mt="32px"
            >
              Tambah Obat
            </Button>
          </Flex>
          <Divider my="38px" w="full" maxW="1056px" />
          <Center flexDirection="column">
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
                          {...column.getHeaderProps(
                            column.getSortByToggleProps()
                          )}
                          isNumeric={column.isNumeric}
                        >
                          {column.render("Header")}
                          <chakra.span>
                            {column.isSorted ? (
                              column.isSortedDesc ? (
                                <TriangleDownIcon aria-label="sorted descending" />
                              ) : (
                                <TriangleUpIcon aria-label="sorted ascending" />
                              )
                            ) : null}
                          </chakra.span>
                        </Th>
                      ))}
                    </Tr>
                  ))}
                </Thead>
                <Tbody {...getTableBodyProps()}>
                  {page.map((row) => {
                    prepareRow(row);
                    return (
                      <Tr {...row.getRowProps()}>
                        {row.cells.map((cell) => (
                          <Td
                            textAlign="center"
                            {...cell.getCellProps()}
                            isNumeric={cell.column.isNumeric}
                          >
                            {cell.render("Cell")}
                          </Td>
                        ))}
                      </Tr>
                    );
                  })}
                </Tbody>
              </Table>
            </TableContainer>

            <Flex m={4}>
              <Flex>
                <Tooltip label="First Page">
                  <IconButton
                    mt="1.5"
                    size="sm"
                    borderRadius="full"
                    colorScheme="teal"
                    onClick={() => gotoPage(0)}
                    isDisabled={!canPreviousPage}
                    icon={<ArrowLeftIcon h="3" w="3" />}
                    mr="2"
                  />
                </Tooltip>
                <Tooltip label="Previous Page">
                  <IconButton
                    mt="1.5"
                    size="sm"
                    borderRadius="full"
                    colorScheme="teal"
                    onClick={previousPage}
                    isDisabled={!canPreviousPage}
                    icon={<ChevronLeftIcon h="6" w="6" />}
                  />
                </Tooltip>
              </Flex>

              <Flex alignItems="center" color="black">
                <Text flexShrink="0" mr="8" ml="4">
                  Page{" "}
                  <Text fontWeight="bold" as="span">
                    {pageIndex + 1}
                  </Text>{" "}
                  of{" "}
                  <Text fontWeight="bold" as="span">
                    {pageOptions.length}
                  </Text>
                </Text>
                <Text flexShrink="0">Go to page:</Text>{" "}
                <NumberInput
                  ml="2"
                  mr="8"
                  w="28"
                  min="1"
                  max={pageOptions.length}
                  onChange={(value) => {
                    const page = value ? value - 1 : 0;
                    gotoPage(page);
                  }}
                  defaultValue={pageIndex + 1}
                >
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
                <Select
                  w="32"
                  mr="4"
                  value={pageSize}
                  onChange={(e) => {
                    setPageSize(Number(e.target.value));
                  }}
                >
                  {[10, 20, 30, 40, 50].map((pageSize) => (
                    <option key={pageSize} value={pageSize}>
                      Show {pageSize}
                    </option>
                  ))}
                </Select>
              </Flex>

              <Flex>
                <Tooltip label="Next Page">
                  <IconButton
                    mt="1.5"
                    size="sm"
                    borderRadius="full"
                    colorScheme="teal"
                    onClick={nextPage}
                    isDisabled={!canNextPage}
                    icon={<ChevronRightIcon h="6" w="6" />}
                  />
                </Tooltip>
                <Tooltip label="Last Page">
                  <IconButton
                    mt="1.5"
                    size="sm"
                    borderRadius="full"
                    colorScheme="teal"
                    onClick={() => gotoPage(pageCount - 1)}
                    isDisabled={!canNextPage}
                    icon={<ArrowRightIcon h="3" w="3" />}
                    ml={4}
                  />
                </Tooltip>
              </Flex>
            </Flex>
          </Center>
        </Center>
      </Box>
    </>
  );
};

export default AdminDaftarProduk;
