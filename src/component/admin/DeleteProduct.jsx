import React, { useRef } from "react"
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    Button,
    useDisclosure,
    Icon,
    useToast,
} from "@chakra-ui/react"
import { RiDeleteBin6Line } from "react-icons/ri"
import api from "../../lib/api"

const DeleteProduct = ({ id, name = "product", fetchHandler }) => {
    // this component neep props id as Product id, and medName as med_name,

    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = useRef()
    const toast = useToast()

    const deleteHandler = async () => {
        try {
            const res = await api.delete(`/product/delete/${id}`)
            if (res.data.message !== undefined) {
                toast({
                    title: "delete success",
                    status: "success",
                    description: res?.data?.message,
                    duration: 5000,
                    isClosable: true,
                    position: "top-right"
                })
            }
            fetchHandler()
            onClose()
        } catch (err) {
            toast({
                title: "delete failed",
                status: "error",
                description: err?.response?.data?.message || err.message,
                duration: 5000,
                isClosable: true,
                position: "top-right"
            })
            onClose()
        }
    }


    return (
        <><Button colorScheme="red" onClick={onOpen} size="sm" >
            <Icon boxSize={4} as={RiDeleteBin6Line} />
        </Button>

            <AlertDialog
                isOpen={isOpen}
                leastDestructiveRef={cancelRef}
                onClose={onClose}
            >
                <AlertDialogOverlay>
                    <AlertDialogContent>
                        <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                            Delete Customer
                        </AlertDialogHeader>

                        <AlertDialogBody>
                            Are you sure delete {name}? You can&apos;t undo this action afterwards.
                        </AlertDialogBody>

                        <AlertDialogFooter>
                            <Button ref={cancelRef} onClick={onClose}>
                                Cancel
                            </Button>
                            <Button colorScheme='red' onClick={() => deleteHandler()} ml={3}>
                                Delete
                            </Button>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog>
        </>
    )
}

export default DeleteProduct