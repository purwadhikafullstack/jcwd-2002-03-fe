import {
  Box,
  Text,
  Grid,
  Select,
  FormControl,
  HStack,
  VStack,
  Stack,
} from "@chakra-ui/react";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const CartPenjualanObat = ({
  column,
  cardTitle,
  cardCaption,
  selectHandle,
  selectValue,
  chartSort = [],
  chartOption,
  chartSeries,
  chartHeight,
  chartType,
  showSelectOption = true,
}) => {
  return (
    <Grid borderRadius="lg" bg="white" w="537px" h="380px">
      <Box
        paddingX="16px"
        pt="32px"
        backgroundColor="white"
        borderRadius="lg"
        height="100%"
        boxShadow="md"
      >
        <Box>
          <HStack justify="space-between">
            <Box>
              <Text fontWeight="700" fontSize="20px">
                {cardTitle}
              </Text>

              <Text color="#737A8D" fontSize="12px" fontWeight="medium">
                {cardCaption}
              </Text>
            </Box>
            <Stack>
              {showSelectOption ? (
                <FormControl>
                  <Select
                    fontSize="12px"
                    width="141px"
                    height="24px"
                    onChange={selectHandle}
                    value={selectValue}
                  >
                    {chartSort.map((val) => {
                      return (
                        <option value={val.sortValue}>{val.sortTitle}</option>
                      );
                    })}
                  </Select>
                </FormControl>
              ) : undefined}
            </Stack>
          </HStack>
        </Box>
        <Box mt="14">
        <Chart
          height={chartHeight}
          options={chartOption}
          series={chartSeries}
          type={chartType}
        />
        </Box>
      </Box>
    </Grid>
  );
};

export default CartPenjualanObat;
