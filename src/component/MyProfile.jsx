import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Grid,
  GridItem,
  Icon,
  Image,
  Input,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Radio,
  RadioGroup,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FaRegUser, FaMale, FaFemale } from "react-icons/fa";
// import { IoMailOutline } from "react-icons/io5";

const MyProfileCom = () => {
  const {
    isOpen: namaIsOpen,
    onOpen: namaOnOpen,
    onClose: namaOnClose,
  } = useDisclosure();
  const {
    isOpen: nomorHpIsOpen,
    onOpen: nomorHpOnOpen,
    onClose: nomorHpOnClose,
  } = useDisclosure();
  const {
    isOpen: tambahTlIsOpen,
    onOpen: tambahTlOnOpen,
    onClose: tambahTlOnClose,
  } = useDisclosure();
  const {
    isOpen: tambahJkIsOpen,
    onOpen: tambahJkOnOpen,
    onClose: tambahJkOnClose,
  } = useDisclosure();
  const formik = useFormik({
    initialValues: {
      nama: "",
      email: "",
      nomorHp: "",
    },

    validationSchema: Yup.object().shape({
      nama: Yup.string().required("This field is required"),
      email: Yup.string().required("This field is required"),
      nomorHp: Yup.string().required("This field is required"),
    }),
    validateOnChange: false,
    onSubmit: () => {},
  });
  return (
    <Box mt={[40, 40, 40]} mb={[0, 0, 114]} px={[10, 10, 10]}>
      <Stack direction="row" alignItems="center" mb="10px">
        <Icon as={FaRegUser} w="14px" h="20px" />
        <Text>User</Text>
      </Stack>
      <Box
        h="846px"
        boxShadow=" 1px 2px 3px 4px rgba(237,248,248)"
        borderRadius={10}
      >
        <Tabs colorScheme="#000000" isFitted>
          <TabList>
            <Tab _focus={{ outline: 0 }}>BioData Diri</Tab>
            <Tab _focus={{ outline: 0 }}>Daftar Alamat</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Grid
                templateColumns={[
                  "repeat(2, 1fr)",
                  "repeat(2, 1fr)",
                  "repeat(5, 1fr)",
                  "repeat(5, 1fr)",
                ]}
                gap={[20, 20, 20, 5]}
              >
                <GridItem colSpan={2}>
                  <Box
                    mx={10}
                    w={["50vw", "20vw", "30vw", "30vw", "30vw", "30vw"]}
                    mt={5}
                    pt={8}
                    px={[7, 10, 10]}
                    // pl={15}
                    h={[270, 270, 270, 370, 460]}
                    boxShadow=" 1px 2px 3px 4px rgba(237,248,248)"
                  >
                    <Image
                      w="100%"
                      src="https://images.tokopedia.net/img/cache/300/default_picture_user/default_toped-12.jpg"
                    />
                    <Button mt={5} w="100%" variant="main-outline">
                      Pilih Foto
                    </Button>
                  </Box>
                  <Stack mt={10} alignItems="center">
                    <Button variant="main-outline" w={150}>
                      Ubah Password
                    </Button>
                  </Stack>
                </GridItem>
                <GridItem colSpan={3}>
                  <Stack mt={10} spacing={10}>
                    <Text variant="caption-bold" fontWeight={700}>
                      Ubah Biodata Diri
                    </Text>
                    <Stack direction="row" spacing="66px">
                      <Text variant="caption">Nama Lengkap</Text>
                      <Stack direction="row" spacing={3}>
                        <Text variant="caption">User</Text>
                        <Text
                          variant="caption"
                          color="#586193"
                          _hover={{ cursor: "pointer" }}
                          onClick={namaOnOpen}
                        >
                          Ubah
                        </Text>
                      </Stack>
                    </Stack>
                    <Stack direction="row" spacing={20}>
                      <Text variant="caption">Tanggal Lahir</Text>
                      {/* <Text variant="caption">7 April 1990</Text> */}
                      <Text
                        variant="caption"
                        color="#586193"
                        _hover={{ cursor: "pointer" }}
                        onClick={tambahTlOnOpen}
                      >
                        Tambah Tanggal Lahir
                      </Text>
                    </Stack>
                    <Stack direction="row" spacing={20}>
                      <Text variant="caption">Jenis Kelamin</Text>
                      {/* <Text variant="caption">Pria</Text> */}
                      <Text
                        variant="caption"
                        color="#586193"
                        _hover={{ cursor: "pointer" }}
                        onClick={tambahJkOnOpen}
                      >
                        Tambah Jenis Kelamin
                      </Text>
                    </Stack>
                    <Text variant="caption-bold" fontWeight={700}>
                      Ubah Email
                    </Text>
                    <Stack direction="row" spacing="134px">
                      <Text variant="caption">Email</Text>
                      <Text variant="caption">apotik@mail.com</Text>
                    </Stack>
                    <Stack direction="row" spacing="100px">
                      <Text variant="caption">Nomor HP</Text>
                      {/* <Text variant="caption">6286634421189</Text> */}
                      <Text
                        variant="caption"
                        color="#586193"
                        _hover={{ cursor: "pointer" }}
                        onClick={nomorHpOnOpen}
                      >
                        Tambah Nomor HP
                      </Text>
                    </Stack>
                  </Stack>
                </GridItem>
                <Modal isOpen={namaIsOpen} onClose={namaOnClose}>
                  <ModalOverlay />
                  <ModalContent>
                    <ModalCloseButton _focus={{ outline: 0 }} />
                    <Box px={10} pt={5}>
                      <Text textAlign="center" variant="subtitle">
                        Ubah Nama
                      </Text>
                      <Text pt={4} textAlign="center" variant="caption">
                        Kamu hanya dapat mengubah nama 1 kali lagi. Pastikan
                        nama sudah benar.
                      </Text>
                      <FormControl pt={4} isInvalid={formik.errors.labelAlamat}>
                        <FormLabel>
                          <Text variant="caption">Nama</Text>
                        </FormLabel>
                        <Input
                          onChange={(event) =>
                            formik.setFieldValue("nama", event.target.value)
                          }
                        />
                        <FormHelperText>
                          {formik.errors.labelAlamat}
                        </FormHelperText>
                      </FormControl>
                      <Text variant="caption">
                        Nama dapat dilihat oleh pengguna lainnya
                      </Text>
                      <Stack my={5} px={110}>
                        <Button variant="main" w={150}>
                          Simpan
                        </Button>
                      </Stack>
                    </Box>
                  </ModalContent>
                </Modal>
                <Modal isOpen={nomorHpIsOpen} onClose={nomorHpOnClose}>
                  <ModalOverlay />
                  <ModalContent>
                    <ModalCloseButton _focus={{ outline: 0 }} />
                    <Box px={10} pt={5}>
                      <Text textAlign="center" variant="subtitle">
                        Ubah Nama
                      </Text>
                      <Text pt={4} textAlign="center" variant="caption">
                        Kamu hanya dapat mengubah nama 1 kali lagi. Pastikan
                        nama sudah benar.
                      </Text>
                      <FormControl pt={4} isInvalid={formik.errors.labelAlamat}>
                        <FormLabel>
                          <Text variant="caption">Nama</Text>
                        </FormLabel>
                        <Input
                          onChange={(event) =>
                            formik.setFieldValue("nama", event.target.value)
                          }
                        />
                        <FormHelperText>
                          {formik.errors.labelAlamat}
                        </FormHelperText>
                      </FormControl>
                      <Text variant="caption">
                        Nama dapat dilihat oleh pengguna lainnya
                      </Text>
                      <Stack my={5} px={115}>
                        <Button variant="main" w={150}>
                          Simpan
                        </Button>
                      </Stack>
                    </Box>
                  </ModalContent>
                </Modal>
                <Modal isOpen={tambahTlIsOpen} onClose={tambahTlOnClose}>
                  <ModalOverlay />
                  <ModalContent>
                    <ModalCloseButton _focus={{ outline: 0 }} />
                    <Box px={10} pt={5}>
                      <Text textAlign="center" variant="subtitle">
                        Ubah Nama
                      </Text>
                      <Text pt={4} textAlign="center" variant="caption">
                        Kamu hanya dapat mengubah nama 1 kali lagi. Pastikan
                        nama sudah benar.
                      </Text>
                      <FormControl pt={4} isInvalid={formik.errors.labelAlamat}>
                        <FormLabel>
                          <Text variant="caption">Nama</Text>
                        </FormLabel>
                        <Input
                          onChange={(event) =>
                            formik.setFieldValue("nama", event.target.value)
                          }
                        />
                        <FormHelperText>
                          {formik.errors.labelAlamat}
                        </FormHelperText>
                      </FormControl>
                      <Text variant="caption">
                        Nama dapat dilihat oleh pengguna lainnya
                      </Text>
                      <Stack my={5} px={115}>
                        <Button variant="main" w={150}>
                          Simpan
                        </Button>
                      </Stack>
                    </Box>
                  </ModalContent>
                </Modal>
                <Modal isOpen={tambahJkIsOpen} onClose={tambahJkOnClose}>
                  <ModalOverlay />
                  <ModalContent>
                    <ModalCloseButton _focus={{ outline: 0 }} />
                    <Box px={10} pt={5}>
                      <Text textAlign="center" variant="subtitle">
                        Tambah Jenis Kelamin
                      </Text>
                      <Text pt={4} textAlign="center" variant="caption">
                        Kamu hanya dapat mengubah data jenis kelamin 1 kali
                        lagi. Pastikan data sudah benar
                      </Text>
                      <RadioGroup py={10} px={70}>
                        <Stack direction="row" spacing={10}>
                          <Radio value="1">
                            <Stack
                              direction="row"
                              spacing={1}
                              alignItems="center"
                            >
                              <Icon as={FaMale} w="30px" h="30px" />
                              <Text>Pria</Text>
                            </Stack>
                          </Radio>
                          <Radio value="2">
                            <Stack
                              direction="row"
                              spacing={1}
                              alignItems="center"
                            >
                              <Icon as={FaFemale} w="30px" h="30px" />
                              <Text>Wanita</Text>
                            </Stack>
                          </Radio>
                        </Stack>
                      </RadioGroup>
                      <Stack mb={5} px={110}>
                        <Button variant="main" w={150}>
                          Simpan
                        </Button>
                      </Stack>
                    </Box>
                  </ModalContent>
                </Modal>
              </Grid>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Box>
  );
};
export default MyProfileCom;
