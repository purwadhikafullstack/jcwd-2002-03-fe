import { Box, Icon, Stack, Text } from "@chakra-ui/react";
import Countdown from "react-countdown";
import { IoEllipse } from "react-icons/io5";

const Timer = () => {
  const rejectTransaction = () => {
    try {
      const apicall = apicall;
      console.log(apicall);
    } catch (err) {
      console.log(err);
    }
  };
  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return rejectTransaction();
      // eslint-disable-next-line no-else-return
    } else {
      // Render a countdown
      return (
        <Stack pt="5px" direction="row" spacing="11.62px">
          <Box
            bgColor="#586193"
            borderRadius="4px"
            w={["20px", "20px", "30.98px"]}
            h={["20px", "20px", "32px"]}
          >
            <Text
              variant="caption-bold"
              pl="5px"
              pt="1.5px"
              color="#f1f1f1"
              fontSize={{
                base: "10px",
                md: "18px",
                lg: "18px",
              }}
              fontWeight="700"
            >
              {hours}
            </Text>
          </Box>
          <Stack pt={["6px", "6px", "9px"]} spacing={["5px", "5px", "8px"]}>
            <Icon
              as={IoEllipse}
              w={["2.42px", "2.42px", "3.87px"]}
              h={["2.5px", "2.5px", "4px"]}
            />
            <Icon
              as={IoEllipse}
              w={["2.42px", "2.42px", "3.87px"]}
              h={["2.5px", "2.5px", "4px"]}
            />
          </Stack>
          <Box
            bgColor="#586193"
            borderRadius="4px"
            w={["20px", "20px", "30.98px"]}
            h={["20px", "20px", "32px"]}
          >
            <Text
              variant="caption-bold"
              pl="5px"
              pt="1.5px"
              color="#f1f1f1"
              fontSize={{
                base: "10px",
                md: "18px",
                lg: "18px",
              }}
              fontWeight="700"
            >
              {minutes}
            </Text>
          </Box>
          <Stack pt={["6px", "6px", "9px"]} spacing={["5px", "5px", "8px"]}>
            <Icon
              as={IoEllipse}
              w={["2.42px", "2.42px", "3.87px"]}
              h={["2.5px", "2.5px", "4px"]}
            />
            <Icon
              as={IoEllipse}
              w={["2.42px", "2.42px", "3.87px"]}
              h={["2.5px", "2.5px", "4px"]}
            />
          </Stack>
          <Box
            bgColor="#586193"
            borderRadius="4px"
            w={["20px", "20px", "30.98px"]}
            h={["20px", "20px", "32px"]}
          >
            <Text
              variant="caption-bold"
              pl="5px"
              pt="1.5px"
              color="#f1f1f1"
              fontSize={{
                base: "10px",
                md: "18px",
                lg: "18px",
              }}
              fontWeight="700"
            >
              {seconds}
            </Text>
          </Box>
        </Stack>
      );
    }
  };
  return <Countdown date={Date.now() + 864000} renderer={renderer} />;
};
export default Timer;
