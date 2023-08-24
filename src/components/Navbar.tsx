import React from "react";
import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/—Pngtree—3d logo design vector cdr_5883019.png";

const Navbar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize="60px" />
      <Text>NavBar</Text>
    </HStack>
  );
};

export default Navbar;
