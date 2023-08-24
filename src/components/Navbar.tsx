import React from "react";
import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/—Pngtree—3d logo design vector cdr_5883019.png";
import ColorModeSwitch from "./ColorModeSwitch";
const Navbar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} boxSize="60px" />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
