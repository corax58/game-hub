import React from "react";
import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/—Pngtree—3d logo design vector cdr_5883019.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (search: string) => void;
}

const Navbar = ({ onSearch }: Props) => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px" />
      <SearchInput onSearch={(search) => onSearch(search)} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
