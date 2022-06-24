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
  Modal,
  useDisclosure,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Stack,
  Spinner,
} from "@chakra-ui/react";
import {
  ArrowRightIcon,
  ArrowLeftIcon,
  ChevronRightIcon,
  ChevronLeftIcon,
} from "@chakra-ui/icons";
import AdminSideBar from "component/AdminSideBar";
import { FiSearch, FiDownload } from "react-icons/fi";
import { useState } from "react";
import { useTable, useSortBy, usePagination } from "react-table";
import { TriangleDownIcon, TriangleUpIcon } from "@chakra-ui/icons";
import React from "react";
import { TbWriting } from "react-icons/tb";
import { useNumberInput } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectAuth } from "redux/reducer/authSlice";

const AdminDaftarProduk = () => {
  const {
    isOpen: isTambahObatOpen,
    onOpen: onTambahObatOpen,
    onClose: onTambahObatClose,
  } = useDisclosure();
  const {
    isOpen: isTambahStokOpen,
    onOpen: onTambahStokOpen,
    onClose: onTambahStokClose,
  } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      defaultValue: 0,
      min: 0,
      precision: 0,
    });

  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps();

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

  const router = useRouter()
  const authSelector = useSelector(selectAuth)
  React.useEffect(() => {
    if (!authSelector.role) {
      router.push("/admin/login")
    }

  }, [authSelector])

  if (!authSelector.role) {
    return <Spinner thickness='4px'
      speed='0.65s'
      emptyColor='gray.200'
      color='blue.500'
      size='xl'
      display="flex"
      mt="10px"
      mb="auto"
      ml="auto"
      mr="auto"
    />
  }
  return (
    <>
      <AdminSideBar />
      <Box
        bg="linear-gradient(155.7deg, #D6F5F3 -45.88%, #F7FCFC 45.77%, #F1F5FC 117.72%)"
        color="white"
        ml="64"
        pb="32px"
      >
        <Text
          color="#213360"
          fontWeight="bold"
          fontSize="20px"
          pl="48px"
          pt="32px"
        >
          Daftar Obat
        </Text>

        <Center flexDirection="column" mr="48px" ml="48px" mt="38px" bg="white">
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
            <HStack>
              <Button
                onClick={onTambahStokOpen}
                fontSize="12px"
                p="5"
                colorScheme="teal"
                leftIcon={<TbWriting size="20" />}
              >
                Tambah Stok
              </Button>
              <Button
                onClick={onTambahObatOpen}
                fontSize="12px"
                p="5"
                leftIcon={<FiDownload size="20" />}
                mr="32px"
                colorScheme="teal"
                mt="32px"
              >
                Tambah Obat
              </Button>
            </HStack>
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

      {/* Tambah obat page */}
      <Modal
        isCentered={true}
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isTambahObatOpen}
        onClose={onTambahObatClose}
        size="2xl"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontSize="20px" fontWeight="bold">
            Tambah Obat
          </ModalHeader>
          <ModalCloseButton />

          <ModalBody mt="30px">
            <HStack mb="12px">
              <Text mr="85px">Nama Obat</Text>
              <Input
                fontSize="12px"
                w="auto"
                minW="226px"
                placeholder="Masukkan nama obat"
              />
            </HStack>

            <HStack mb="12px">
              <Text mr="104px">No. Obat</Text>
              <Input
                fontSize="12px"
                w="auto"
                minW="226px"
                placeholder="Masukkan no. obat"
              />
            </HStack>

            <HStack mb="12px">
              <Text mr="94px">No. BPOM</Text>
              <Input
                fontSize="12px"
                w="auto"
                minW="226px"
                placeholder="Masukkan no. BPOM"
              />
            </HStack>

            <HStack mb="12px">
              <Text mr="105px">Nilai Jual</Text>
              <Input
                fontSize="12px"
                w="auto"
                minW="226px"
                placeholder="Masukkan nilai jual"
              />
            </HStack>

            <HStack mb="12px">
              <Text mr="108px">Kategori</Text>
              <Select
                fontSize="12px"
                w="auto"
                minW="141px"
                bg="white"
                color="black"
              >
                <option value="option1">Obat Bebas</option>
                <option value="option2">Obat Racik</option>
                <option value="option3">Obat Resep</option>
              </Select>
            </HStack>

            <HStack mb="12px">
              <Text mr="52px">Tgl. Kadaluwarsa</Text>
              <Input
                placeholder="DD-MM-YYYY"
                fontSize="12px"
                w="auto"
                type="date"
              />
            </HStack>

            <Divider border="2px" mt="20px" minW="full" />

            <Flex ml="32px" mb="16px" mt="16px" justify="right">
              <Button
                onClick={onTambahObatClose}
                colorScheme="yellow"
                fontSize="14px"
                w="auto"
                minW="156px"
              >
                Batal
              </Button>
              <Button
                ml="3"
                colorScheme="teal"
                fontSize="14px"
                w="auto"
                minW="156px"
              >
                Simpan
              </Button>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>

      {/* Tambah stok page */}
      <Modal
        isCentered={true}
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isTambahStokOpen}
        onClose={onTambahStokClose}
        size="2xl"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontSize="20px" fontWeight="bold">
            Tambah Stok
          </ModalHeader>
          <ModalCloseButton />

          <ModalBody mt="30px">

            <HStack mb="12px">
              <Text mr="104px">Kuantitas</Text>
              <HStack maxW="320px">
                <Button {...dec}>-</Button>
                <Input textAlign="center" maxW="55px" {...input} />
                <Button {...inc}>+</Button>
              </HStack>
            </HStack>

            <HStack mb="12px">
              <Text mr="91px">Nama obat</Text>
              <Select
                fontSize="12px"
                w="auto"
                minW="141px"
                bg="white"
                color="black"
                placeholder="Pilih Obat"
              >
                <option value="option1">Actived</option>
                <option value="option2">Vit C</option>
                <option value="option3">Bodrex</option>
              </Select>
            </HStack>

            <HStack mb="12px">
              <Text mr="105px">Nilai Jual</Text>
              <Input
                fontSize="12px"
                w="auto"
                minW="226px"
                placeholder="Masukkan nilai jual"
              />
            </HStack>

            <Divider border="2px" mt="20px" minW="full" />

            <Flex ml="32px" mb="16px" mt="16px" justify="right">
              <Button
                onClick={onTambahStokClose}
                colorScheme="yellow"
                fontSize="14px"
                w="auto"
                minW="156px"
              >
                Batal
              </Button>
              <Button
                ml="3"
                colorScheme="teal"
                fontSize="14px"
                w="auto"
                minW="156px"
              >
                Simpan
              </Button>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AdminDaftarProduk;
