import { CloseIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import api from "../../lib/api";

const PaymentReceipt = ({ transactionId }) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [selectedImage, setSelectedImage] = useState();
  const [imagePreview, setImagePreview] = useState();
  const inputRef = useRef();
  const toast = useToast();

  const onChangeHandler = (event) => {
    const [file] = event.target.files;
    const preview = URL.createObjectURL(file);

    setSelectedImage(file);

    setImagePreview(preview);
  };

  const uploadHandler = async () => {
    try {
      const formData = new FormData();

      formData.append("payment_receipts", selectedImage);
      formData.append("methode", "BCA VA")

      const res = await api.patch(`/payment/${transactionId}/payment-image`, formData);
      toast({
        title: "Upload Berhasil",
        description: res?.data?.message,
        status: "success",
        duration: 9000,
        position: "top-right",
        isClosable: true,
      });
      onClose()
      setSelectedImage()
      setImagePreview()
    } catch (err) {
      toast({
        title: "upload gagal",
        description: err?.respose?.data?.message || err?.message,
        status: "error",
        duration: 9000,
        position: "top-right",
        isClosable: true,
      });
    }
  };

  return (
    <>
      <Button onClick={onOpen} variant="main">
        Upload Bukti Pembayaran
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Upload Bukti Pembayaran</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box display="flex" justifyContent="center" mb={2}>
              <Button variant="main" onClick={() => inputRef.current.click()}>
                Pilh Gambar
              </Button>
            </Box>
            <Input
              accept="image/png, image/jpg, image/jpeg"
              type="file"
              ref={inputRef}
              display="none"
              onChange={onChangeHandler}
            />
            <Box
              border="1px solid teal"
              bgSize="contain"
              backgroundImage={imagePreview}
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              height="xs"
              borderRadius="8px"
            >
              <CloseIcon
                cursor="pointer"
                mt={1}
                ml={1}
                onClick={() => setImagePreview() && setSelectedImage()}
              />
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={() =>
                onClose() && setSelectedImage() && setImagePreview()
              }
            >
              Close
            </Button>
            <Button
              colorScheme="teal"
              type="submit"
              onClick={() => uploadHandler()}
            >
              Upload Gambar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default PaymentReceipt;
