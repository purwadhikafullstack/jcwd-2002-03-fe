import { Center, Spinner } from "@chakra-ui/react";

const Index = () => {
  return (
    <Center>
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="md"
      />
    </Center>
  );
};

export default Index;
