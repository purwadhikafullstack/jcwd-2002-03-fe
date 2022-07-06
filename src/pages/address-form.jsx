import { Spinner } from "@chakra-ui/react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import AddressFormComponent from "../component/AddressFormComponent";
import { selectAuth } from "../redux/reducer/authSlice"

const AddressForm = () => {

  const authSelector = useSelector(selectAuth)

  useEffect(() => {
    if (!authSelector.id || authSelector.role === "admin") {
      window.history.back()
    }
  }, [])

  if (!authSelector.id || authSelector.role === "admin") {
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

  return <AddressFormComponent />;
};

export default AddressForm;
