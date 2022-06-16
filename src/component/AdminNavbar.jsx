import {
  Box,
  Flex,
  Menu,
  MenuButton,
  Button,
  Avatar,
  MenuList,
  MenuItem,
  Icon,
} from "@chakra-ui/react";
import { IoMdNotifications } from "react-icons/io";

const NavBarItem = () => {
  return (
    <Box bgColor="gray.100" px={10} py="1.5">
      <Flex h={16} alignItems="center" justifyContent="right">
        <Flex alignItems="center">
          <Menu>
            <MenuButton
              mr="4"
              as={Button}
              variant="flex"
              cursor="pointer"
              minW={0}
            >
              <Icon alignContent="center" boxSize={7} as={IoMdNotifications} />
            </MenuButton>
            <MenuList>
              <MenuItem>No notification</MenuItem>
            </MenuList>
          </Menu>
        </Flex>

        <Flex alignItems="center">
          <Menu>
            <MenuButton as={Button} variant="flex" cursor="pointer" minW={0}>
              <Avatar size="xs" />
            </MenuButton>
            <MenuList>
              <MenuItem>Profile</MenuItem>
              <MenuItem>Log Out</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
    </Box>
  );
};

export default NavBarItem;
