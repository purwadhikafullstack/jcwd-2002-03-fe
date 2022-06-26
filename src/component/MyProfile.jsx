/* eslint-disable import/no-unresolved */
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormHelperText,
  FormLabel,
  Grid,
  GridItem,
  Icon,
  Image,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Radio,
  RadioGroup,
  Select,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FaRegUser, FaMale, FaFemale } from "react-icons/fa";
import {
  getProfile,
  selectProfile,
  editPicture,
  editNama,
} from "redux/reducer/profileSlice";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
// import { useRouter } from "next/router";
import { useState, useEffect, useRef } from "react";
import api from "../lib/api";
import KotakAlamatProf from "./KotakAlamatProf";
// import { IoMailOutline } from "react-icons/io5";

const MyProfileCom = () => {
  const profileSelector = useSelector(selectProfile);
  const [selectedFile, setSelectedFile] = useState(null);
  const [Address, setAddress] = useState([]);
  // #pASSWORD1#
  const dispatch = useDispatch();
  const inputFileRef = useRef();
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
  const {
    isOpen: tambahAlamatIsOpen,
    onOpen: tambahAlamatOnOpen,
    onClose: tambahAlamatOnClose,
  } = useDisclosure();
  const userProfileData = async () => {
    try {
      const res = await api.get("/profile");
      dispatch(getProfile(res.data.result));
    } catch (err) {
      console.log(err);
    }
  };
  const userAddress = async () => {
    try {
      const res = await api.get("/profile/address");
      setAddress(res.data.result[0].Addresses);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    userProfileData();
    userAddress();
  }, []);
  const namaFormik = useFormik({
    initialValues: {
      nama: "",
    },

    validationSchema: Yup.object().shape({
      nama: Yup.string()
        .required("This field is required")
        .min(5, "Minimum 5 characters"),
    }),
    validateOnChange: false,
    onSubmit: async (values) => {
      try {
        const res = await api.post("/profile/edit-nama", {
          username: values.nama,
        });

        namaOnClose();
        dispatch(editNama(res.data.result.name));
      } catch (err) {
        console.log(err);
        if (err?.response?.data?.message === "username has been taken") {
          namaFormik.setFieldError("nama", "nama telah diambil orang lain");
        }
      }
    },
  });
  const jkFormik = useFormik({
    initialValues: {
      pria: "",
      wanita: "",
    },
    onSubmit: async (values) => {
      if (values.pria === "pria") {
        await api.post("/profile/tambahJk", {
          gender: values.pria,
        });
        tambahJkOnClose();
        userProfileData();
      }
      if (values.wanita === "wanita") {
        await api.post("/profile/tambahJk", {
          gender: values.wanita,
        });
        tambahJkOnClose();
        userProfileData();
      }
    },
  });
  const tlFormik = useFormik({
    initialValues: {
      tanggal: "",
      bulan: "",
      tahun: "",
    },
    onSubmit: async (values) => {
      try {
        const month = values.bulan;
        const date = values.tanggal;
        const year = values.tahun;
        const birthdate = date.concat(" ", month, " ", year);
        await api.post("/profile/tambahTl", {
          birthdate,
        });
        tambahTlOnClose();
        userProfileData();
      } catch (err) {
        console.log(err);
      }
    },
  });
  const taFormik = useFormik({
    initialValues: {
      labelAlamat: "",
      nama: "",
      nomorHp: "",
      provinsi: "",
      kotaKabupaten: "",
      kecamatan: "",
      alamat: "",
      kodePos: "",
    },

    validationSchema: Yup.object().shape({
      labelAlamat: Yup.string().required("This field is required"),
      nama: Yup.string().required("This field is required"),
      nomorHp: Yup.string().required("This field is required"),
      provinsi: Yup.string().required("This field is required"),
      kotaKabupaten: Yup.string().required("This field is required"),
      kecamatan: Yup.string().required("This field is required"),
      alamat: Yup.string().required("This field is required"),
      kodePos: Yup.string().required("This field is required"),
    }),
    validateOnChange: false,
    onSubmit: async (values) => {
      try {
        // masukin state data dari backend
        await api.post("/profile/tambahAl", {
          labelAlamat: values.labelAlamat,
          nama: values.nama,
          nomorHp: values.nomorHp,
          provinsi: values.provinsi,
          kotaKabupaten: values.kotaKabupaten,
          kecamatan: values.kecamatan,
          alamat: values.alamat,
          kodePos: values.kodePos,
          UserId: 1,
        });
        console.log(Address);
      } catch (err) {
        console.log(err);
      }
    },
  });
  const nomorHpFormik = useFormik({
    initialValues: {
      nomorHp: "",
    },
    validationSchema: Yup.object().shape({
      nomorHp: Yup.number().integer().positive().min(12),
    }),
    validateOnChange: false,
    onSubmit: async (values) => {
      try {
        await api.post("/profile/tambahNomorHp", {
          phone: values.nomorHp,
        });
        nomorHpOnClose();
        userProfileData();
      } catch (err) {
        console.log(err);
      }
    },
  });
  const uploadHandler = async () => {
    const formData = new FormData();
    formData.append("update_image_file", selectedFile);

    const res = await api.post("/profile/edit-profilepicture", formData);
    dispatch(editPicture(res.data.result.image_url));
  };
  const handleFile = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  const renderAddress = () => {
    return Address.map((val) => {
      return (
        <KotakAlamatProf
          key={val.id.toString()}
          labelAlamat={val?.labelAlamat}
          nama={val?.nama}
          nomorHp={val?.nomorHp}
          provinsi={val?.provinsi}
          kotaKabupaten={val?.kotaKabupaten}
          kecamatan={val?.kecamatan}
          alamat={val?.alamat}
          kodePos={val?.kodePos}
        />
      );
    });
  };
  useEffect(() => {
    if (selectedFile) {
      uploadHandler();
    }
  }, [selectedFile]);
  return (
    <Box mt={[40, 40, 40]} mb={[0, 0, 114]} px={[10, 10, 10]}>
      <Stack direction="row" alignItems="center" mb="10px">
        <Icon as={FaRegUser} w="14px" h="20px" />
        <Text>{profileSelector.name}</Text>
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
                gap={[0, 20, 20, 5]}
              >
                <GridItem colSpan={2}>
                  <Box
                    mx={[10, 10, 10]}
                    w={["50vw", "20vw", "30vw", "30vw", "30vw", "30vw"]}
                    mt={5}
                    pt={8}
                    px={[7, 10, 10]}
                    // pl={15}
                    h={[270, 270, 270, 370, 460]}
                    boxShadow=" 1px 2px 3px 4px rgba(237,248,248)"
                  >
                    {profileSelector.image_url ? (
                      <Image
                        w="100%"
                        h="70%"
                        objectFit="fill"
                        src={profileSelector.image_url}
                      />
                    ) : (
                      <Image
                        w="100%"
                        src="https://images.tokopedia.net/img/cache/300/default_picture_user/default_toped-12.jpg"
                      />
                    )}

                    <FormControl>
                      <Input
                        placeholder="url"
                        onChange={handleFile}
                        ref={inputFileRef}
                        display="none"
                        type="file"
                        accept="image/png, image/jpeg"
                        multiple={false}
                      />
                      <Button
                        onClick={() => inputFileRef.current.click()}
                        mt={5}
                        w="100%"
                        variant="main-outline"
                      >
                        Pilih Foto
                      </Button>
                    </FormControl>
                  </Box>
                  <Stack mt={10} alignItems="center">
                    <Button variant="main-outline" w={150}>
                      Ubah Password
                    </Button>
                  </Stack>
                </GridItem>
                <GridItem colSpan={2}>
                  <Stack mt={10} spacing={10}>
                    <Text variant="caption-bold" fontWeight={700}>
                      Ubah Biodata Diri
                    </Text>
                    <Stack direction="row" spacing="66px">
                      <Text variant="caption">Nama Lengkap</Text>
                      <Stack direction="row" spacing={3}>
                        <Text variant="caption">{profileSelector.name}</Text>
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
                    <Stack direction="row" spacing={[10, 10, 20]}>
                      <Text variant="caption">Tanggal Lahir</Text>
                      {profileSelector.birthDate ? (
                        <Text variant="caption">
                          {profileSelector.birthDate}
                        </Text>
                      ) : (
                        <Text
                          variant="caption"
                          color="#586193"
                          _hover={{ cursor: "pointer" }}
                          onClick={tambahTlOnOpen}
                        >
                          Tambah Tanggal Lahir
                        </Text>
                      )}
                    </Stack>
                    <Stack direction="row" spacing={[10, 10, 20]}>
                      <Text variant="caption">Jenis Kelamin</Text>
                      {profileSelector.gender ? (
                        <Text variant="caption">{profileSelector.gender}</Text>
                      ) : (
                        <Text
                          variant="caption"
                          color="#586193"
                          _hover={{ cursor: "pointer" }}
                          onClick={tambahJkOnOpen}
                        >
                          Tambah Jenis Kelamin
                        </Text>
                      )}
                    </Stack>
                    <Text variant="caption-bold" fontWeight={700}>
                      Ubah Email
                    </Text>
                    <Stack
                      direction="row"
                      spacing={["100px", "120px", "134px"]}
                    >
                      <Text variant="caption">Email</Text>
                      <Text variant="caption">{profileSelector.email}</Text>
                    </Stack>
                    <Stack direction="row" spacing="100px">
                      <Text variant="caption">Nomor HP</Text>
                      {profileSelector.phone ? (
                        <Text variant="caption">{profileSelector.phone}</Text>
                      ) : (
                        <Text
                          variant="caption"
                          color="#586193"
                          _hover={{ cursor: "pointer" }}
                          onClick={nomorHpOnOpen}
                        >
                          Tambah Nomor HP
                        </Text>
                      )}
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
                      <FormControl pt={4} isInvalid={namaFormik.errors.nama}>
                        <FormLabel>
                          <Text variant="caption">Nama</Text>
                        </FormLabel>
                        <Input
                          onChange={(event) =>
                            namaFormik.setFieldValue("nama", event.target.value)
                          }
                        />
                        <FormHelperText>
                          {namaFormik.errors.nama}
                        </FormHelperText>
                      </FormControl>
                      <Text variant="caption">
                        Nama dapat dilihat oleh pengguna lainnya
                      </Text>
                      <Stack my={5} px={110}>
                        <Button
                          onClick={namaFormik.handleSubmit}
                          variant="main"
                          w={150}
                        >
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
                          <Radio
                            value="pria"
                            onChange={(event) =>
                              jkFormik.setFieldValue("pria", event.target.value)
                            }
                          >
                            <Stack
                              direction="row"
                              spacing={1}
                              alignItems="center"
                            >
                              <Icon as={FaMale} w="30px" h="30px" />
                              <Text>Pria</Text>
                            </Stack>
                          </Radio>
                          <Radio
                            value="wanita"
                            onChange={(event) =>
                              jkFormik.setFieldValue(
                                "wanita",
                                event.target.value
                              )
                            }
                          >
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
                        <Button
                          onClick={jkFormik.handleSubmit}
                          variant="main"
                          w={150}
                        >
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
                        Tambah Tanggal Lahir
                      </Text>
                      <Text pt={4} textAlign="center" variant="caption">
                        Kamu hanya dapat mengatur tanggal lahir satu kali.
                        Pastikan tanggal lahir sudah benar.
                      </Text>
                      <Stack my={5} direction="row" alignItems="center">
                        <Select
                          onChange={(event) =>
                            tlFormik.setFieldValue(
                              "tanggal",
                              event.target.value
                            )
                          }
                          _focus={{ outline: 0 }}
                          placeholder="Tanggal"
                        >
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                          <option>6</option>
                          <option>7</option>
                          <option>8</option>
                          <option>9</option>
                          <option>10</option>
                          <option>11</option>
                          <option>12</option>
                          <option>13</option>
                          <option>14</option>
                          <option>15</option>
                          <option>16</option>
                          <option>17</option>
                          <option>18</option>
                          <option>19</option>
                          <option>20</option>
                          <option>21</option>
                          <option>22</option>
                          <option>23</option>
                          <option>24</option>
                          <option>25</option>
                          <option>26</option>
                          <option>27</option>
                          <option>28</option>
                          <option>29</option>
                          <option>30</option>
                          <option>31</option>
                        </Select>
                        <Select
                          onChange={(event) =>
                            tlFormik.setFieldValue("bulan", event.target.value)
                          }
                          _focus={{ outline: 0 }}
                          placeholder="Bulan"
                        >
                          <option>Januari</option>
                          <option>Februari</option>
                          <option>Maret</option>
                          <option>April</option>
                          <option>Mei</option>
                          <option>Juni</option>
                          <option>Juli</option>
                          <option>Agustus</option>
                          <option>September</option>
                          <option>October</option>
                          <option>November</option>
                          <option>December</option>
                        </Select>
                        <Select
                          onChange={(event) =>
                            tlFormik.setFieldValue("tahun", event.target.value)
                          }
                          _focus={{ outline: 0 }}
                          placeholder="Tahun"
                        >
                          <option>1942</option>
                          <option>1943</option>
                          <option>1944</option>
                          <option>1945</option>
                          <option>1946</option>
                          <option>1947</option>
                          <option>1948</option>
                          <option>1949</option>
                          <option>1950</option>
                          <option>1951</option>
                          <option>1952</option>
                          <option>1953</option>
                          <option>1954</option>
                          <option>1955</option>
                          <option>1956</option>
                          <option>1957</option>
                          <option>1958</option>
                          <option>1959</option>
                          <option>1960</option>
                          <option>1961</option>
                          <option>1962</option>
                          <option>1963</option>
                          <option>1964</option>
                          <option>1965</option>
                          <option>1966</option>
                          <option>1967</option>
                          <option>1968</option>
                          <option>1969</option>
                          <option>1970</option>
                          <option>1971</option>
                          <option>1972</option>
                          <option>1973</option>
                          <option>1974</option>
                          <option>1975</option>
                          <option>1976</option>
                          <option>1977</option>
                          <option>1978</option>
                          <option>1979</option>
                          <option>1980</option>
                          <option>1981</option>
                          <option>1982</option>
                          <option>1983</option>
                          <option>1984</option>
                          <option>1985</option>
                          <option>1986</option>
                          <option>1987</option>
                          <option>1988</option>
                          <option>1989</option>
                          <option>1990</option>
                          <option>1991</option>
                          <option>1992</option>
                          <option>1993</option>
                          <option>1994</option>
                          <option>1995</option>
                          <option>1996</option>
                          <option>1997</option>
                          <option>1998</option>
                          <option>1999</option>
                          <option>2000</option>
                          <option>2001</option>
                          <option>2002</option>
                          <option>2003</option>
                          <option>2004</option>
                          <option>2005</option>
                          <option>2006</option>
                          <option>2007</option>
                          <option>2008</option>
                        </Select>
                      </Stack>
                      <Stack my={5} px={115}>
                        <Button
                          onClick={tlFormik.handleSubmit}
                          variant="main"
                          w={150}
                        >
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
                        Tambah Nomor Hp
                      </Text>
                      <Text pt={4} textAlign="center" variant="caption">
                        Kamu hanya dapat mengubah nomor 1 kali lagi. Pastikan
                        nomor sudah benar.
                      </Text>
                      <FormControl
                        pt={4}
                        isInvalid={nomorHpFormik.errors.nomorHp}
                      >
                        <FormLabel>
                          <Text variant="caption">Nomor Hp</Text>
                        </FormLabel>
                        <Input
                          type="number"
                          onChange={(event) =>
                            nomorHpFormik.setFieldValue(
                              "nomorHp",
                              event.target.value
                            )
                          }
                        />
                        <FormHelperText>
                          {nomorHpFormik.errors.nomorHp}
                        </FormHelperText>
                      </FormControl>
                      <Text variant="caption">contoh: 0855*****66</Text>
                      <Stack my={5} px={115}>
                        <Button
                          onClick={nomorHpFormik.handleSubmit}
                          variant="main"
                          w={150}
                        >
                          Simpan
                        </Button>
                      </Stack>
                    </Box>
                  </ModalContent>
                </Modal>
              </Grid>
            </TabPanel>
            <TabPanel>
              <Box px={5} pt={8}>
                <Stack alignItems="end">
                  <Button onClick={tambahAlamatOnOpen} variant="main">
                    Tambah Alamat Baru
                  </Button>
                </Stack>
                <Box mt={6} overflowY="scroll" h="660px">
                  {renderAddress()}
                </Box>
              </Box>
              <Modal isOpen={tambahAlamatIsOpen} onClose={tambahAlamatOnClose}>
                <ModalOverlay />
                <ModalContent>
                  <ModalCloseButton _focus={{ outline: 0 }} />
                  <Box px={10} pt={5}>
                    <Text textAlign="center" variant="subtitle">
                      Tambah Tanggal Lahir
                    </Text>
                    <Text pt={4} textAlign="center" variant="caption">
                      Silakan mengisi semua form yang sudah tertera
                    </Text>
                    <Box pt={5} h="200px" overflowY="scroll" pr={2}>
                      <Text mb={5} variant="title">
                        Alamat Pengiriman
                      </Text>
                      <FormControl isInvalid={taFormik.errors.labelAlamat}>
                        <FormLabel>
                          <Text mb="16px" variant="mini-title">
                            Label Alamat
                          </Text>
                        </FormLabel>
                        <Input
                          _focus={{ outline: 0 }}
                          onChange={(event) =>
                            taFormik.setFieldValue(
                              "labelAlamat",
                              event.target.value
                            )
                          }
                        />
                        <FormHelperText>
                          {taFormik.errors.labelAlamat}
                        </FormHelperText>
                      </FormControl>
                      <Text mt="52px" mb="36px" variant="mini-title">
                        Info Penerima
                      </Text>
                      <Text mb="16px" variant="caption">
                        Nama
                      </Text>
                      <Input
                        mb="36px"
                        _focus={{ outline: 0 }}
                        onChange={(event) =>
                          taFormik.setFieldValue("nama", event.target.value)
                        }
                      />
                      <FormControl isInvalid={taFormik.errors.nomorHp}>
                        <FormLabel>
                          <Text mb="16px" variant="caption">
                            Nomor Hp
                          </Text>
                        </FormLabel>
                        <InputGroup>
                          <InputLeftAddon bg="white">
                            <Stack direction="row">
                              <Text pt="2px">+62</Text>
                              <Stack spacing="-0.5">
                                <Icon as={IoIosArrowUp} />
                                <Icon as={IoIosArrowDown} />
                              </Stack>
                            </Stack>
                          </InputLeftAddon>
                          <Input
                            _focus={{ outline: 0 }}
                            mb="36px"
                            type="number"
                            onChange={(event) =>
                              taFormik.setFieldValue(
                                "nomorHp",
                                event.target.value
                              )
                            }
                          />
                        </InputGroup>
                        <FormHelperText>
                          {taFormik.errors.nomorHp}
                        </FormHelperText>
                      </FormControl>
                      <Grid templateColumns="repeat(2, 1fr)" gap={4}>
                        <GridItem colSpan={[2, 1, 1]} mb="36px">
                          <FormControl isInvalid={taFormik.errors.provinsi}>
                            <FormLabel>
                              <Text mb="16px" variant="caption">
                                Provinsi
                              </Text>
                            </FormLabel>
                            <InputGroup>
                              <Input
                                _focus={{ outline: 0 }}
                                onChange={(event) =>
                                  taFormik.setFieldValue(
                                    "provinsi",
                                    event.target.value
                                  )
                                }
                              />
                              <InputRightAddon bg="white">
                                <Icon as={IoIosArrowDown} />
                              </InputRightAddon>
                            </InputGroup>
                            <FormHelperText>
                              {taFormik.errors.provinsi}
                            </FormHelperText>
                          </FormControl>
                        </GridItem>
                        <GridItem colSpan={[2, 1, 1]}>
                          <FormControl
                            isInvalid={taFormik.errors.kotaKabupaten}
                          >
                            <FormLabel>
                              <Text mb="16px" variant="caption">
                                Kota/Kabupaten
                              </Text>
                            </FormLabel>
                            <InputGroup>
                              <Input
                                _focus={{ outline: 0 }}
                                onChange={(event) =>
                                  taFormik.setFieldValue(
                                    "kotaKabupaten",
                                    event.target.value
                                  )
                                }
                              />
                              <InputRightAddon bg="white">
                                <Icon as={IoIosArrowDown} />
                              </InputRightAddon>
                            </InputGroup>
                            <FormHelperText>
                              {taFormik.errors.kotaKabupaten}
                            </FormHelperText>
                          </FormControl>
                        </GridItem>
                      </Grid>
                      <FormControl isInvalid={taFormik.errors.kecamatan}>
                        <FormLabel>
                          <Text mb="16px" variant="caption">
                            Kecamatan
                          </Text>
                        </FormLabel>
                        <InputGroup w="245.59px">
                          <Input
                            _focus={{ outline: 0 }}
                            mb="36px"
                            onChange={(event) =>
                              taFormik.setFieldValue(
                                "kecamatan",
                                event.target.value
                              )
                            }
                          />
                          <InputRightAddon bg="white">
                            <Icon as={IoIosArrowDown} />
                          </InputRightAddon>
                        </InputGroup>
                        <FormHelperText>
                          {taFormik.errors.kecamatan}
                        </FormHelperText>
                      </FormControl>
                      <FormControl isInvalid={taFormik.errors.alamat}>
                        <FormLabel>
                          <Text mb="16px" variant="caption">
                            Alamat
                          </Text>
                        </FormLabel>
                        <Input
                          _focus={{ outline: 0 }}
                          mb="36px"
                          onChange={(event) =>
                            taFormik.setFieldValue("alamat", event.target.value)
                          }
                        />
                        <FormHelperText>
                          {taFormik.errors.alamat}
                        </FormHelperText>
                      </FormControl>
                      <FormControl isInvalid={taFormik.errors.kodePos}>
                        <FormLabel>
                          <Text mb="16px" variant="caption">
                            Kode Pos
                          </Text>
                        </FormLabel>
                        <InputGroup w="245.59px">
                          <Input
                            _focus={{ outline: 0 }}
                            mb="36px"
                            onChange={(event) =>
                              taFormik.setFieldValue(
                                "kodePos",
                                event.target.value
                              )
                            }
                          />
                          <InputRightAddon bg="white">
                            <Icon as={IoIosArrowDown} />
                          </InputRightAddon>
                        </InputGroup>
                        <FormHelperText>
                          {taFormik.errors.kodePos}
                        </FormHelperText>
                      </FormControl>
                    </Box>
                    <Checkbox
                    // onChange={(event) =>
                    //   taFormik.setFieldValue("password", event.target.value)
                    // }
                    >
                      <Text variant="caption">Simpan sebagai alamat utama</Text>
                    </Checkbox>
                    <Stack my={5} px={115}>
                      <Button
                        isDisabled={
                          !(
                            taFormik.values.alamat &&
                            taFormik.values.kecamatan &&
                            taFormik.values.kodePos &&
                            taFormik.values.kotaKabupaten &&
                            taFormik.values.labelAlamat &&
                            taFormik.values.nama &&
                            taFormik.values.nomorHp &&
                            taFormik.values.provinsi
                          )
                        }
                        _hover={{
                          bgColor: "#006D7F",
                          color: "#FFFFF0",
                        }}
                        onClick={taFormik.handleSubmit}
                        variant="main"
                        w={150}
                      >
                        Simpan
                      </Button>
                    </Stack>
                  </Box>
                </ModalContent>
              </Modal>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Box>
  );
};
export default MyProfileCom;
