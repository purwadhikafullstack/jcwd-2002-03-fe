import { Table, TableContainer, Tbody, Td, Th, Thead, Tr, useToast } from "@chakra-ui/react"
import React, { useEffect, useState } from "react"
import AddProduct from "../../component/admin/AddProduct"
import DeleteProduct from "../../component/admin/DeleteProduct"
import EditProduct from "../../component/admin/EditProduct"
import AdminSideBar from "../../component/AdminSideBar"
import PaymentReceipt from "../../component/transaction/PaymentReceipt"

import api from "../../lib/api"

const inputProduct = () => {
    const [dataProduct, setDataProduct] = useState()

    const toast = useToast()

    const fetchAllProduct = async () => {
        try {
            const res = await api.get("/product")
            const data = res?.data?.result?.result?.rows
            setDataProduct(data)
        } catch (err) {
            toast({
                status: "error",
                title: "error fetch",
                description: err?.response?.data?.message || err.message,
                duration: 9000,
                position: "top-right",
                isClosable: true,
            });
        }
    }

    useEffect(() => { fetchAllProduct() }, [])

    return (
        <><AdminSideBar />
            <PaymentReceipt />
            <AddProduct dataProduct={dataProduct} setDataProdut={setDataProduct} />
            <TableContainer>
                <Table variant="striped" colorScheme="teal">
                    <Thead>
                        <Tr>
                            <Th>Nama Produk</Th>
                            <Th>NO. Produk</Th>
                            <Th >NO. BPOM</Th>
                            <Th >Harga jual</Th>
                            <Th >Discount</Th>
                            <Th >Indikasi</Th>
                            <Th >Kandungan</Th>
                            <Th>Kemasan</Th>
                            <Th>Category</Th>
                            <Th />
                        </Tr>
                    </Thead>
                    <Tbody>
                        {!dataProduct && <Tr>
                            <Td>
                                ...LoadingData
                            </Td>
                        </Tr>}
                        {dataProduct && dataProduct.map((val, index) => {
                            return (
                                <Tr key={val.id}>
                                    <Td>{val.med_name}</Td>
                                    <Td>{val.nomer_med}</Td>
                                    <Td>{val.nomer_bpom}</Td>
                                    <Td>{val.selling_price}</Td>
                                    <Td>{val.discount}</Td>
                                    <Td>{val.indikasi}</Td>
                                    <Td>{val.kandungan}</Td>
                                    <Td>{val.kemasan}</Td>
                                    <Td>{val?.category?.category_name}</Td>
                                    <Td>
                                        <EditProduct
                                            key={val.id}
                                            index={index}
                                            id={val.id}
                                            medName={val.med_name}
                                            nomerMed={val.nomer_med}
                                            nomerBpom={val.nomer_bpom}
                                            sellingPrice={val.selling_price}
                                            discount={val.discount}
                                            indikasi={val.indikasi}
                                            kandungan={val.kandungan}
                                            kemasan={val.kemasan}
                                            category_name={val?.category?.category_name}
                                            categoryId={val.categoryId}
                                            imagesProduct={val.Product_images}
                                            arrayOfImagesProduct={val.Product_images}
                                            dataProduct={dataProduct}
                                            setDataProduct={setDataProduct}
                                            fetchHandler={fetchAllProduct}
                                        />
                                        <DeleteProduct
                                            key={val.med_name}
                                            id={val.id}
                                            name={val.med_name}
                                            index={index}
                                            dataProduct={dataProduct}
                                            setDataProdut={setDataProduct}
                                            deleteState={() => setDataProduct(dataProduct.filter((e) => e !== val))}
                                        />
                                    </Td>
                                </Tr>
                            )
                        })}
                    </Tbody>
                </Table>
            </TableContainer>
        </>
    )
}

export default inputProduct