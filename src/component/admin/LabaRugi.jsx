import { Box, Text, Divider, HStack } from "@chakra-ui/react";

const LabaRugi = ({ title1, title2, kategori = [], footer, footerValue }) => {
  return (
    <>
      <HStack mx="32px" mb="16px" justifyContent="space-between">
        <Text fontWeight="bold" fontSize="20px">
          {title1}
        </Text>
        <Text fontWeight="bold" fontSize="20px">
          {title2}
        </Text>
      </HStack>
      {kategori.map((val, idx) => {
        return (
          <HStack mx="32px" mb="10px" justifyContent="space-between">
            <Text mt="2">
              {idx + 1}. {val.kategoriName}
            </Text>
            <Text mt="2">{val.value}</Text>
          </HStack>
        );
      })}
      <Divider />
      <HStack mx="32px" mt="10px" mb="30px" justifyContent="space-between">
        <Text fontWeight="bold">{footer}</Text>
        <Text fontWeight="bold">{footerValue}</Text>
      </HStack>
    </>
  );
};

export default LabaRugi
